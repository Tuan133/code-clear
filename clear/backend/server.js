import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// In-memory data store
const quotes = [];
const bookings = [];
const contacts = [];
const giftCards = [];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: "Jim's Laundry Backend API Server Running" });
});

// Quote & Booking API
app.post('/api/quotes', (req, res) => {
  const quoteData = { id: Date.now(), ...req.body, createdAt: new Date() };
  quotes.push(quoteData);
  console.log('New Quote Request Received:', quoteData);
  res.status(201).json({ success: true, message: 'Yêu cầu báo giá đã được ghi nhận!', data: quoteData });
});

// Contact Form API
app.post('/api/contact', (req, res) => {
  const contactData = { id: Date.now(), ...req.body, createdAt: new Date() };
  contacts.push(contactData);
  console.log('New Contact Message:', contactData);
  res.status(201).json({ success: true, message: 'Tin nhắn liên hệ đã được gửi!', data: contactData });
});

// Gift Card API
app.post('/api/gift-card', (req, res) => {
  const cardData = { id: Date.now(), ...req.body, createdAt: new Date() };
  giftCards.push(cardData);
  console.log('New Gift Card Purchase:', cardData);
  res.status(201).json({ success: true, message: 'Thẻ quà tặng đã đặt thành công!', data: cardData });
});

app.listen(PORT, () => {
  console.log(`🚀 Jim's Laundry Backend API running at http://localhost:${PORT}`);
});
