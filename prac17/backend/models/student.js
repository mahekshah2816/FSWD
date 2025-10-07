// backend/models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  email: String
});

module.exports = mongoose.model('Student', studentSchema);
