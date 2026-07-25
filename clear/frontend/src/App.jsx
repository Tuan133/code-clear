import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import GiftCardPage from './pages/GiftCardPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function ChatWidget() {
  const [show, setShow] = useState(true);
  return (
    <div className="chat-widget">
      {show && <div className="chat-bubble">Trò chuyện với chúng tôi 👋</div>}
      <button
        className="chat-btn"
        onClick={() => setShow(s => !s)}
        aria-label="Chat"
      >
        💬
      </button>
    </div>
  );
}

function AppLayout() {
  const [toastShown, setToastShown] = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setToastShown(true);
    setTimeout(() => setToastShown(false), 3500);
  };

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/gift-card" element={<GiftCardPage />} />
        <Route path="/privacy" element={
          <main style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto', minHeight: '60vh' }}>
            <h1 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: 20 }}>Chính Sách Bảo Mật</h1>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
              Jim's Laundry Services cam kết bảo vệ thông tin cá nhân của bạn theo Luật Bảo Mật Úc 1988.
            </p>
          </main>
        } />
        <Route path="/terms" element={
          <main style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto', minHeight: '60vh' }}>
            <h1 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: 20 }}>Điều Khoản & Điều Kiện</h1>
            <p style={{ color: 'var(--text-body)', lineHeight: 1.8 }}>
              Khi sử dụng dịch vụ của Jim's Laundry Services, bạn đồng ý với các điều khoản và điều kiện dịch vụ.
            </p>
          </main>
        } />
        <Route path="*" element={
          <main style={{ padding: '120px 24px', textAlign: 'center', minHeight: '60vh' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🔍</div>
            <h1 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: 12 }}>Không Tìm Thấy Trang</h1>
            <p style={{ color: 'var(--text-gray)', marginBottom: 28 }}>Trang bạn tìm kiếm không tồn tại.</p>
            <a href="/" className="btn btn-primary">Trở Về Trang Chủ</a>
          </main>
        } />
      </Routes>

      <Footer onSubscribe={() => showToast('🎉 Đã đăng ký thành công! Mã ưu đãi $10 sẽ được gửi đến email của bạn.')} />
      <BackToTop />
      <ChatWidget />

      {/* Toast notification */}
      <div style={{
        position: 'fixed',
        bottom: 100,
        left: '50%',
        transform: `translateX(-50%) translateY(${toastShown ? 0 : 30}px)`,
        opacity: toastShown ? 1 : 0,
        transition: 'all 0.35s ease',
        background: 'var(--primary)',
        color: 'white',
        padding: '14px 24px',
        borderRadius: 50,
        fontWeight: 700,
        fontSize: 14,
        boxShadow: 'var(--shadow-lg)',
        zIndex: 9999,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        {toast}
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
