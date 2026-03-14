const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // Thêm trường này để tìm theo id: 1, 2...
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
}, {
  timestamps: true,
});

// Sửa dòng này: Thêm 'User' làm tham số thứ 3
module.exports = mongoose.model('User', userSchema, 'User');