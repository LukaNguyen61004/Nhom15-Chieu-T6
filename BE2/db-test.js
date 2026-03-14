const mongoose = require('mongoose');
const dns = require('dns');

// BƯỚC QUYẾT ĐỊNH: Ép Node.js sử dụng trình phân giải DNS của Google
// Điều này giúp vượt qua bộ lọc NAT64 của nhà mạng (cái dải 64:ff9b::...)
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = "mongodb+srv://zthangnguyenz2k3_db_user:123@cluster0.tzgowjg.mongodb.net/blogprogramming?retryWrites=true&w=majority";

console.log("--- Đang kết nối bằng trình phân giải DNS Google (Custom Resolver) ---");

mongoose.connect(uri, {
  family: 4, // Ép dùng IPv4
  serverSelectionTimeoutMS: 10000 
})
  .then(() => {
    console.log("✅✅✅ KẾT NỐI THÀNH CÔNG RỒI! CHIẾN THẮNG!");
    process.exit(0);
  })
  .catch(err => {
    console.error("❌ Vẫn lỗi:", err.message);
    console.log("👉 Lời khuyên cuối: Hãy bật 4G điện thoại và phát Wifi cho máy tính ngay!");
    process.exit(1);
  });