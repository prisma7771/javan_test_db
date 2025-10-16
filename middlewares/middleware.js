export function validateUser(req, res, next) {
  const { name, email, age } = req.body;

  const errors = [];

  // Name validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  // Email validation
  if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push("Email must be valid.");
  }

  // Age validation
  if (age === undefined || typeof age !== "number" || age < 0 || age > 120) {
    errors.push("Age must be a number between 0 and 120.");
  }

  // If there are validation errors, respond with 400 and the errors
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
}
