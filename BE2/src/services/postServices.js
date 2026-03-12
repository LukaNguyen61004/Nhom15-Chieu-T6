// Dữ liệu giả lập lưu tạm trong RAM
const mockPosts = [
  { 
    id: 1, 
    title: "Chia sẻ kinh nghiệm làm dự án web bán laptop bằng PHP", 
    content: "Để bắt đầu làm một trang web e-commerce cơ bản...", 
    tags: ["PHP", "Web Dev"] 
  },
  { 
    id: 2, 
    title: "Top 5 loại switch bàn phím cơ gõ code êm nhất", 
    content: "Nếu bạn làm việc văn phòng hoặc code đêm, linear switch là chân ái...", 
    tags: ["Keyboard", "Setup"] 
  }
];

const getAllPosts = () => {
  return mockPosts; // Trả về mảng dữ liệu giả
};

module.exports = { getAllPosts };