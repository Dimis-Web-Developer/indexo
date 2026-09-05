const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require('cors')

require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

const PORT = 8080;

const client = new MongoClient(process.env.MONGODB_URI);

let userCollection;

app.use(express.json());

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('focusDB')
    userCollection = db.collection('focusUsers');

    console.log("Connected to MongoDB");

  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

app.get("/", (req, res) => {
  res.send("<p>Hello from Node backend</p>");
});

app.post("/api/auth/register", async (req, res) => {
  try{
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await userCollection.findOne({ 
    email:normalizedEmail
  });

  if(existingUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password,10)

  const newUser ={
    name,
    email: normalizedEmail,
    password: hashPassword,
    createdAt: new Date()
  };

  await userCollection.insertOne(newUser)

  res.status(201).json({
    message: "Account created successfully",
  })
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

connectDB();

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});