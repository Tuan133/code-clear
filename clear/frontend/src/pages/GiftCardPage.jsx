import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const GiftCardPage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const [selectedAmt, setSelectedAmt] = useState(50);
  const [customAmt, setCustomAmt] = useState('');
  const [form, setForm] = useState({
    recipientName: '', recipientEmail: '',
    senderName: '', senderEmail: '',
    message: '', deliveryDate: '',
  });
  const [ordered, setOrdered] = useState(false);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const finalAmt = customAmt ? parseInt(customAmt) : selectedAmt;

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrdered(true);
  };

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>{t.giftCardPage.heroTitle}</h1>
          <p>{t.giftCardPage.heroSubtitle}</p>
        </div>
      </div>

      <section style={{ background: 'var(--bg-light)', padding: '70px 0' }}>
        <div className="container">
          {ordered ? (
            <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', background: 'white', borderRadius: 'var(--radius-lg)', padding: 60, boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🎁</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 12 }}>
                {t.giftCardPage.orderedTitle}
              </h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: 28 }}>
                {t.giftCardPage.orderedDesc} (Email: <strong>{form.recipientEmail}</strong>)
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => setOrdered(false)}>
                  {lang === 'vi' ? 'Mua Thêm Thẻ Khác' : 'Buy Another'}
                </button>
                <button className="btn btn-outline" style={{ background: 'var(--primary)', color: 'white' }} onClick={() => navigate('/')}>
                  {t.bookingPage.btnBackHome}
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50, alignItems: 'start' }}>
              {/* Gift card preview */}
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, #1565c0 100%)',
                  borderRadius: 20,
                  padding: 40,
                  color: 'white',
                  boxShadow: 'var(--shadow-lg)',
                  marginBottom: 28,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -40, right: -40,
                    width: 160, height: 160, borderRadius: '50%',
                    background: 'rgba(0,188,212,0.2)',
                  }} />
                  <div style={{ fontSize: 36, marginBottom: 12 }}>👕</div>
                  <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.7, marginBottom: 4 }}>TLaundry</div>
                  <div style={{ fontSize: 48, fontWeight: 900, color: 'var(--cyan)' }}>${finalAmt}</div>
                  <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{t.header.giftCard}</div>
                  <div style={{ marginTop: 24, fontSize: 11, opacity: 0.5 }}>
                    {lang === 'vi' ? 'Có giá trị cho tất cả dịch vụ giặt ủi Jim\'s' : 'Valid for all Jim\'s Laundry services'}
                  </div>
                </div>

                {/* Amount selector */}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 14 }}>
                  {t.giftCardPage.selectAmount}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
                  {[25, 50, 75, 100, 150, 200, 250, 500].map(amt => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmt(amt); setCustomAmt(''); }}
                      style={{
                        padding: '12px 8px',
                        border: `2px solid ${selectedAmt === amt && !customAmt ? 'var(--primary)' : 'var(--border)'}`,
                        borderRadius: 10,
                        background: selectedAmt === amt && !customAmt ? 'var(--light-blue)' : 'white',
                        color: 'var(--primary)',
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <div className="form-group">
                  <label>{t.giftCardPage.customAmount}</label>
                  <input
                    type="number"
                    placeholder="Nhập số tiền..."
                    value={customAmt}
                    onChange={e => { setCustomAmt(e.target.value); setSelectedAmt(0); }}
                    min="10"
                    max="5000"
                  />
                </div>
              </div>

              {/* Form */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 36, boxShadow: 'var(--shadow)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 24 }}>
                  {t.giftCardPage.detailsTitle}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>
                    {t.giftCardPage.recipientDetails}
                  </div>
                  <div className="form-group">
                    <label>{t.giftCardPage.recipientName} <span className="required-star">*</span></label>
                    <input name="recipientName" value={form.recipientName} onChange={handle} required placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="form-group">
                    <label>{t.giftCardPage.recipientEmail} <span className="required-star">*</span></label>
                    <input name="recipientEmail" type="email" value={form.recipientEmail} onChange={handle} required placeholder="nguyenvana@example.com" />
                  </div>

                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14, marginTop: 20 }}>
                    {t.giftCardPage.senderDetails}
                  </div>
                  <div className="form-group">
                    <label>{t.giftCardPage.senderName} <span className="required-star">*</span></label>
                    <input name="senderName" value={form.senderName} onChange={handle} required placeholder="Trần Thị B" />
                  </div>
                  <div className="form-group">
                    <label>{t.giftCardPage.senderEmail} <span className="required-star">*</span></label>
                    <input name="senderEmail" type="email" value={form.senderEmail} onChange={handle} required placeholder="tranthib@example.com" />
                  </div>
                  <div className="form-group">
                    <label>{t.giftCardPage.messageLabel}</label>
                    <textarea
                      name="message" value={form.message} onChange={handle}
                      placeholder={lang === 'vi' ? 'Nhập lời chSài Gòn...' : 'Add a message...'}
                      style={{ minHeight: 80 }}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t.giftCardPage.deliveryDate} <span className="required-star">*</span></label>
                    <input
                      name="deliveryDate" type="date" value={form.deliveryDate} onChange={handle}
                      required min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div style={{ background: 'var(--light-blue)', borderRadius: 10, padding: '14px 16px', marginBottom: 20, fontSize: 14, fontWeight: 700, color: 'var(--primary)' }}>
                    {lang === 'vi' ? 'Tổng tiền:' : 'Total:'} ${finalAmt || 0}.00 AUD
                  </div>

                  <button type="submit" className="btn-next" style={{ width: '100%' }}>
                    {t.giftCardPage.btnPurchase}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default GiftCardPage;


