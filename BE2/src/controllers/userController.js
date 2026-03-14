const User = require('../models/User');

// 1. Lấy tất cả User (GET /users)
exports.getAllUsers = async (req, res) => {
  try {
    console.log("Đang gọi hàm getAllUsers..."); // Thêm dòng này
    
    const users = await User.find();
    console.log("Dữ liệu từ DB:", users); 
    
    if (users.length === 0) {
      return res.status(200).send("Kết nối DB thành công nhưng danh sách đang TRỐNG.");
    }
    
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
// 2. Lấy 1 User theo ID số (GET /users/:id)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ id: Number(req.params.id) });
    if (!user) return res.status(404).json({ message: 'Không tìm thấy user' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Tạo User mới (POST /users)
exports.createUser = async (req, res) => {
  try {
    // Tìm ID lớn nhất hiện có để tự tăng (Auto-increment)
    const lastUser = await User.findOne({}, {}, { sort: { 'id': -1 } });
    const nextId = lastUser ? lastUser.id + 1 : 1;

    const newUser = new User({
      id: nextId,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 4. Cập nhật User (PUT /users/:id)
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'Không thấy user để sửa' });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 5. Xóa User (DELETE /users/:id)
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ id: Number(req.params.id) });
    if (!deletedUser) return res.status(404).json({ message: 'Không thấy user để xóa' });
    res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};