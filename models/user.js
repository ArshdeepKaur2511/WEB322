const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields as needed
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;