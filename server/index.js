const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});
// Connect to MongoDB database
mongoose.connect(process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define a User model schema
const userSchema = new mongoose.Schema({
  mobile: String,
  idType: String,
  govtId: String,
  occupation: String,
  maritalStatus: String,
  religion: String,
  bloodGroup: String,
  nationality: String,
  address: String,
  state: String,
  city: String,
  country: String,
  pincode: String,
  name: String,
  dob: String,
  sex: String,
});

const User = mongoose.model("User", userSchema);

// Route for handling POST requests to add a new user
app.post("/api/users", async (req, res) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
