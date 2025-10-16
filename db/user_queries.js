import pool from "./index.js";

// Create user
export async function createUser({ name, email, age, device, fun_fact }) {
  const result = await pool.query(
    `INSERT INTO users (name, email, age, device, fun_fact)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [name, email, age, device, fun_fact]
  );
  return result.rows[0];
}

// Get all users
export async function getAllUsers() {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  return result.rows;
}

// Get user by ID
export async function getUserById(id) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
}
