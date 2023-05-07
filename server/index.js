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
  name: {type:String,
required:true,},
  age: {type:String,
required:true,},
  sex: {type:String,
required:true,},
email: {type:String,
required:false,},
mobile: {type:String,
required:false,},
  guardian: {type:String,
required:false,},
salutation: {type:String,
required:false,},
  emergencyContact: {type:String,
required:false,},  
  idType: {type:String,
required:false,},
  govtId: {type:String,
required:false,},
  occupation: {type:String,
required:false,},
  maritalStatus: {type:String,
required:false,},
  religion: {type:String,
required:false,},
  bloodGroup: {type:String,
required:false,},
  nationality: {type:String,
required:false,},
  address: {type:String,
required:false,},
  state: {type:String,
required:false,},
  city: {type:String,
required:false,},
  country: {type:String,
required:false,},
  pincode: {type:String,
required:false,},
  
});

const User = mongoose.model("User", userSchema);

// Route for handling POST requests to add a new user
app.post("/api/users", async (req, res) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    console.log(user,userData);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Route for handling GET requests to retrieve the added users
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
  console.log("Server listening on port 5000");
});
