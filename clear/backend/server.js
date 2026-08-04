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
import Service from './models/Service.js';
import Pricing from './models/Pricing.js';
import { protect, authorize } from './middleware/auth.js';
import { seedServicesAndPricing } from './seedData.js';

dotenv.config();

// 1. Kết nối MongoDB Atlas & Tự động Seed Dữ Liệu Dịch vụ/Bảng giá nếu chưa có
connectDB().then(async () => {
  await seedServicesAndPricing();
});

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

// 5. Cấu hình CORS an toàn
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

app.use(express.json({ limit: '10kb' })); // Giới hạn kích thước payload dữ liệu đầu vào

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
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập đầy đủ Họ tên, Email và Mật khẩu!' });
    }
    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email này đã được sử dụng!' });
    }
    const user = await User.create({ name, email: email.toLowerCase().trim(), password, role: role || 'CUSTOMER' });
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
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập email và mật khẩu!' });
    }
    const user = await User.findOne({ email: email.toLowerCase().trim() });
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

// POST /api/bookings: Tiếp nhận dữ liệu đặt dịch vụ từ BookingPage.jsx, validate thông tin, lưu đơn vào CSDL & trả về mã đơn hàng
app.post('/api/bookings', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, suburb, state, pickupDate, serviceType } = req.body;

    // Validation cơ bản
    if (!firstName || !lastName || !email || !phone || !address || !suburb || !state || !pickupDate) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng điền đầy đủ các thông tin bắt buộc (Họ, Tên, Email, SĐT, Địa chỉ, Suburb, Bang, Ngày lấy hàng)!'
      });
    }

    // Kiểm tra định dạng Email đơn giản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Định dạng email không hợp lệ!' });
    }

    // Sinh mã đơn hàng ngẫu nhiên duy nhất (VD: TL-889922)
    const randomOrderCode = 'TL-' + Math.floor(100000 + Math.random() * 900000);

    const newBooking = await Booking.create({
      ...req.body,
      orderCode: randomOrderCode,
      serviceType: serviceType || 'Giặt Ủi Gia Đình',
      email: email.toLowerCase().trim()
    });

    console.log(`✅ New Booking Saved to MongoDB: OrderCode [${newBooking.orderCode}] ID [${newBooking._id}]`);

    res.status(201).json({
      success: true,
      message: 'Đặt lịch thành công! Mã đơn hàng của bạn là: ' + newBooking.orderCode,
      orderCode: newBooking.orderCode,
      data: newBooking
    });
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

// POST /api/contact: Nhận dữ liệu từ form ContactPage.jsx, lưu vào CSDL
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn!'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Định dạng email không hợp lệ!' });
    }

    const newContact = await Contact.create({
      ...req.body,
      email: email.toLowerCase().trim()
    });

    console.log('✅ New Contact Saved to MongoDB:', newContact._id);
    res.status(201).json({ success: true, message: 'Tin nhắn liên hệ đã được gửi thành công!', data: newContact });
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

// POST /api/gift-cards: Tiếp nhận thông tin mua thẻ từ GiftCardPage.jsx, sinh mã code ngẫu nhiên (ví dụ: TL-889922)
app.post('/api/gift-cards', async (req, res) => {
  try {
    const { amount, recipientName, recipientEmail, senderName, senderEmail, deliveryDate } = req.body;
    if (!amount || !recipientName || !recipientEmail || !senderName || !senderEmail || !deliveryDate) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng điền đầy đủ thông tin người nhận, người gửi, mệnh giá và ngày giao thẻ!'
      });
    }

    const randomCode = 'TL-' + Math.floor(100000 + Math.random() * 900000);
    const newCard = await GiftCard.create({
      ...req.body,
      code: randomCode,
      recipientEmail: recipientEmail.toLowerCase().trim(),
      senderEmail: senderEmail.toLowerCase().trim()
    });

    console.log('✅ New GiftCard Saved to MongoDB:', newCard.code);
    res.status(201).json({
      success: true,
      message: 'Đặt mua thẻ quà tặng thành công! Mã thẻ của bạn là: ' + newCard.code,
      code: newCard.code,
      data: newCard
    });
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

// POST /api/newsletter: Lưu email từ Footer để gửi khuyến mãi
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Vui lòng nhập địa chỉ email!' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Định dạng email không hợp lệ!' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const existing = await Newsletter.findOne({ email: cleanEmail });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Email này đã đăng ký nhận tin từ trước!' });
    }

    const subscriber = await Newsletter.create({ email: cleanEmail });
    console.log('✅ New Newsletter Subscriber Saved to MongoDB:', subscriber.email);
    res.status(201).json({ success: true, message: 'Đăng ký nhận thông tin khuyến mãi thành công!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// --- SERVICES & PRICING DYNAMIC APIS ---

// GET /api/services: Trả về danh sách dịch vụ để Frontend render động
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, count: services.length, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/pricing: Trả về bảng giá và gói dịch vụ để Frontend render động
app.get('/api/pricing', async (req, res) => {
  try {
    const pricing = await Pricing.findOne().sort({ updatedAt: -1 });
    if (!pricing) {
      return res.status(404).json({ success: false, message: 'Chưa có dữ liệu bảng giá' });
    }
    res.json({ success: true, data: pricing });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 TLaundry Backend API running at http://localhost:${PORT}`);
});
