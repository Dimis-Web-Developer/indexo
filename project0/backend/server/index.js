const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = 8080;

const client = new MongoClient(process.env.MONGODB_URI);

app.use(express.json());

async function connectDB() {
  try {
    await client.connect();

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

app.get("/", (req, res) => {
  res.send("<h1>Hello from Node backend</h1>");
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  console.log({
    name,
    email,
    password,
  });

  res.status(201).json({
    message: "Registration received",
  });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});