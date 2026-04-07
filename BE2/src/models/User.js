const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // BẮT BUỘC PHẢI CÓ DÒNG NÀY
  username: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  role: {
    type: String,
    enum: ['user',  'admin'], 
    default: 'user'
  },
  email: {
  type: String,
  required: [true, 'Email không được để trống'],
  unique: true,      
  lowercase: true,   
  trim: true
  },
password: {
    type: String,
    required: [true, 'Mật khẩu không được để trống']
  },
  avatar: {
    type: String,
    default: 'https://i.pravatar.cc/150' // Ảnh mặc định nếu user chưa tải lên
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema, 'users');