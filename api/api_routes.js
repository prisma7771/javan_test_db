import express from "express";
import fetch from "node-fetch";
import { createUser, getAllUsers, getUserById } from "../db/user_queries.js";
import { getDeviceInfo } from "../utils/device_info.js";
import { validateUser } from "../middlewares/middleware.js";

const router = express.Router();

// Fetch a random fun fact from an external API
async function fetchRandomFunFact() {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    );
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    return "No fun fact available at the moment.";
  }
}

// Post a new user
router.post('/users', validateUser, async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const userAgent = req.headers['user-agent'] || '';
    const device = getDeviceInfo(userAgent);
    const fun_fact = await fetchRandomFunFact();

    const newUser = await createUser({ name, email, age, device, fun_fact });
    res.status(201).json(newUser);

  } catch (err) {
    console.error("Error creating user:", err);

    // Tangkap error duplicate email dari Postgres
    if (err.code === '23505' && err.constraint === 'users_email_key') {
      return res.status(400).json({ error: "Email already exists." });
    }

    // fallback untuk error lain
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
