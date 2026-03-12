const express = require('express');
// 1. Kéo file routes vào (Thêm dòng này)
const postRoutes = require('./src/routes/postRoutes'); 

const app = express();

// (Tùy chọn) Để kiểm tra xem trang chủ có sống không
app.get('/', (req, res) => {
  res.send('Server đang chạy!');
});

// 2. Đăng ký route (Phải đặt TRƯỚC app.listen)
app.use('/api/posts', postRoutes);

// 3. Khởi động server (LUÔN ĐỂ Ở CUỐI CÙNG)
app.listen(5000, () => {
  console.log('Server chạy ở http://localhost:5000');
});