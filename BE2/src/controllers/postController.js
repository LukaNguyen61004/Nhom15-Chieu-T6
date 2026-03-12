const postServices = require('../services/postServices');

const getPosts = (req, res) => {
  const posts = postServices.getAllPosts();
  // Trả về mã 200 (Thành công) cùng với dữ liệu
  res.status(200).json({
    message: "Lấy danh sách bài viết thành công!",
    data: posts
  });
};

module.exports = { getPosts };