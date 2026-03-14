const mongoose = require('mongoose');
const dns = require('dns');

// BƯỚC QUYẾT ĐỊNH: Ép Node.js sử dụng DNS Google để tránh lỗi nhà mạng
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4 // Ép dùng IPv4
    });
    console.log('✅ MongoDB Atlas connected ');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;