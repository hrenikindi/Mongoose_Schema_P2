const mongoose = require('mongoose');

// Schema for Profile (Embedded Document)
const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
});

// Main User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ['user'],
  },
  profile: {
    type: profileSchema,
    required: true,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create and Export the Model
const User = mongoose.model('User', userSchema);

module.exports = User;
