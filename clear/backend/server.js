import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import jwt from 'jsonwebtoken';

import connectDB from './config/db.js';
import Contact from './models/Contact.js';
import Booking from './models/Booking.js';
import GiftCard from './models/GiftCard.js';
import Newsletter from './models/Newsletter.js';
import User from './models/User.js';
import { protect, authorize } from './middleware/auth.js';

dotenv.config();

// 1. Kết nối MongoDB Atlas
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// 2. Bảo mật HTTP Headers (Helmet)
app.use(helmet());

// 3. Chống tấn công NoSQL Injection
app.use(mongoSanitize());

// 4. Giới hạn số lượng Request (Rate Limiting - Chống Brute force & DDOS)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 100, // Tối đa 100 request/IP/15 phút
  message: { success: false, message: 'Quá nhiều yêu cầu từ IP này. Vui lòng thử lại sau 15 phút!' }
});
app.use('/api', limiter);

// 5. Cấu hình CORS an toàn (Chỉ cho phép tên miền Frontend hợp lệ)
const allowedOrigins = [process.env.CLIENT_URL || 'http://localhost:5173', 'http://localhost:3000'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Tên miền không được cấp quyền bởi CORS policy!'));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10kb' })); // Giới hạn kích thước payload dữ liệu đầu vào chống tràn bộ nhớ

// --- API ROUTES ---

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: "Welcome to TLaundry Secured Backend API Server 🚀" });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: "TLaundry Backend API Server Running & Secured" });
});

// --- AUTHENTICATION APIS (Đăng ký / Đăng nhập) ---

app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email này đã được sử dụng!' });
    }
    const user = await User.create({ name, email, password, role: role || 'CUSTOMER' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      message: 'Đăng ký tài khoản thành công!',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không chính xác!' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Đăng nhập thành công!',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- BOOKING APIS ---

app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    console.log('✅ New Booking Saved to MongoDB:', newBooking._id);
    res.status(201).json({ success: true, message: 'Yêu cầu đặt lịch / báo giá thành công!', data: newBooking });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.get('/api/bookings', protect, authorize('ADMIN', 'STAFF'), async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- CONTACT APIS ---

app.post('/api/contact', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    console.log('✅ New Contact Saved to MongoDB:', newContact._id);
    res.status(201).json({ success: true, message: 'Tin nhắn liên hệ đã được gửi!', data: newContact });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.get('/api/contact', protect, authorize('ADMIN', 'STAFF'), async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- GIFT CARD APIS ---

app.post('/api/gift-cards', async (req, res) => {
  try {
    const randomCode = 'TL-' + Math.floor(100000 + Math.random() * 900000);
    const newCard = await GiftCard.create({ ...req.body, code: randomCode });
    console.log('✅ New GiftCard Saved to MongoDB:', newCard.code);
    res.status(201).json({ success: true, message: 'Đặt thẻ quà tặng thành công!', data: newCard });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.get('/api/gift-cards', protect, authorize('ADMIN', 'STAFF'), async (req, res) => {
  try {
    const cards = await GiftCard.find().sort({ createdAt: -1 });
    res.json({ success: true, count: cards.length, data: cards });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// --- NEWSLETTER APIS ---

app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Email này đã đăng ký nhận tin từ trước!' });
    }
    const subscriber = await Newsletter.create({ email });
    console.log('✅ New Newsletter Subscriber Saved to MongoDB:', subscriber.email);
    res.status(201).json({ success: true, message: 'Đăng ký nhận thông tin khuyến mãi thành công!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 TLaundry Backend API running at http://localhost:${PORT}`);
});
