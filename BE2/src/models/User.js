const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
}, {
  timestamps: true, // tự thêm createdAt, updatedAt
});

module.exports = mongoose.model('User', userSchema);