const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Khi người dùng vào đường dẫn gốc của route này (tức là /api/posts), gọi hàm getPosts
router.get('/', postController.getPosts);

module.exports = router;