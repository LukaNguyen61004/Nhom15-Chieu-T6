const path = require('path');
// Nạp file .env từ thư mục gốc
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Kết nối Database
connectDB();

// Routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API is running 🚀' });
});

app.listen(PORT, '0,0,0,0', () => {
    console.log(`Server running on port ${PORT}`);
});