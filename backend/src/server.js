import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { checkDatabaseConnection, pool } from "./db.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 4000);
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get("/", (_req, res) => {
  return res.json({
    ok: true,
    message: "Backend is running",
    endpoints: ["/api/health", "/api/auth/signup"],
  });
});

app.get("/api/health", async (_req, res) => {
  try {
    await checkDatabaseConnection();
    return res.json({ ok: true, database: "connected" });
  } catch (error) {
    return res.status(500).json({ ok: false, message: "Database connection failed" });
  }
});

app.post("/api/auth/signup", async (req, res) => {
  const { email, password, fullName, phone, role } = req.body ?? {};

  if (!email || !password || !fullName) {
    return res.status(400).json({
      message: "fullName, email, and password are required",
    });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const normalizedName = String(fullName).trim();
  const normalizedPhone = phone ? String(phone).trim() : null;
  const normalizedRole = role ? String(role).trim() : "customer";

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
  }

  try {
    const [existingRows] = await pool.query("SELECT id FROM users WHERE email = ? LIMIT 1", [
      normalizedEmail,
    ]);

    if (Array.isArray(existingRows) && existingRows.length > 0) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const [result] = await pool.query(
      `INSERT INTO users (email, password, full_name, phone, role)
       VALUES (?, ?, ?, ?, ?)`,
      [normalizedEmail, passwordHash, normalizedName, normalizedPhone, normalizedRole]
    );

    const insertedId = result.insertId;

    return res.status(201).json({
      message: "Account created successfully",
      user: {
        id: insertedId,
        email: normalizedEmail,
        fullName: normalizedName,
        phone: normalizedPhone,
        role: normalizedRole,
      },
    });
  } catch (error) {
    if (error && error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email already exists" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
