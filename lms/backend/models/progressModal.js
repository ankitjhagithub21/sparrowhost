
const mongoose = require('mongoose');


const ProgressSchema = new mongoose.Schema({
  userId: String,
  courseId: String,
  data: Object,
  updatedAt: { type: Date, default: Date.now },
});
const Progress = mongoose.model('Progress', ProgressSchema);

module.exports = Progress