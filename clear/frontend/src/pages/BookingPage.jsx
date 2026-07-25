import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const BookingPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState('');
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', suburb: '', state: '', postcode: '',
    pickupDate: '', pickupTime: 'Morning (8am-12pm)', notes: '',
    frequency: 'one-off',
  });

  const STEPS = [t.bookingPage.step1, t.bookingPage.step2, t.bookingPage.step3];

  const serviceTypes = [
    { icon: '🏠', label: t.header.domestic },
    { icon: '🏢', label: t.header.commercial },
    { icon: '👔', label: t.header.ironing },
    { icon: '🧥', label: t.header.dryCleaning },
    { icon: '🛏️', label: t.header.linen },
    { icon: '⚽', label: t.header.sports },
    { icon: '♿', label: t.header.ndis },
    { icon: '🏥', label: t.header.careFacilities },
    { icon: '💼', label: t.header.hcp },
  ];

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submitBooking = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <main className="booking-page">
      <div className="page-hero" style={{ padding: '50px 0', marginBottom: 0 }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>{t.bookingPage.heroTitle}</h1>
          <p>{t.bookingPage.heroSubtitle}</p>
        </div>
      </div>

      <div className="booking-container" style={{ paddingTop: 40 }}>
        {done ? (
          <div className="booking-card booking-success">
            <div className="success-icon">✅</div>
            <h2>{t.bookingPage.successTitle}</h2>
            <p>{t.bookingPage.successDesc}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={() => { setDone(false); setStep(0); setSelected(''); }}>
                {t.bookingPage.btnSubmitAnother}
              </button>
              <button className="btn btn-outline" style={{ background: 'var(--primary)', color: 'white' }} onClick={() => navigate('/')}>
                {t.bookingPage.btnBackHome}
              </button>
            </div>
          </div>
        ) : (
          <div className="booking-card">
            {/* Step indicators */}
            <div className="booking-steps">
              {STEPS.map((s, i) => (
                <div key={s} className="booking-step-indicator">
                  <div className={`step-dot ${i < step ? 'done' : i === step ? 'active' : ''}`}>
                    {i < step ? '✓' : i + 1}
                  </div>
                  {i < STEPS.length - 1 && <div className={`step-line ${i < step ? 'done' : ''}`} />}
                </div>
              ))}
            </div>

            {/* Step 0: Service Type */}
            {step === 0 && (
              <div>
                <h2>{t.bookingPage.selectServiceTitle}</h2>
                <p className="subtitle">{t.bookingPage.selectServiceSubtitle}</p>
                <div className="service-type-label">{t.bookingPage.step1}</div>
                <div className="service-options">
                  {serviceTypes.map(s => (
                    <div
                      key={s.label}
                      className={`service-option ${selected === s.label ? 'selected' : ''}`}
                      onClick={() => setSelected(s.label)}
                    >
                      <span className="service-option-icon">{s.icon}</span>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="form-actions">
                  <button
                    className="btn-next"
                    onClick={() => selected && setStep(1)}
                    style={{ opacity: selected ? 1 : 0.5 }}
                  >
                    {t.bookingPage.btnContinue}
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Details */}
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <h2>{t.bookingPage.detailsTitle}</h2>
                <p className="subtitle">{t.bookingPage.detailsSubtitle}</p>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.bookingPage.firstName} <span className="required-star">*</span></label>
                    <input name="firstName" value={form.firstName} onChange={handle} required placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>{t.bookingPage.lastName} <span className="required-star">*</span></label>
                    <input name="lastName" value={form.lastName} onChange={handle} required placeholder="Smith" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.bookingPage.email} <span className="required-star">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={handle} required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>{t.bookingPage.phone} <span className="required-star">*</span></label>
                    <input name="phone" type="tel" value={form.phone} onChange={handle} required placeholder="0400 000 000" />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.bookingPage.address} <span className="required-star">*</span></label>
                  <input name="address" value={form.address} onChange={handle} required placeholder="123 Main Street" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.bookingPage.suburb} <span className="required-star">*</span></label>
                    <input name="suburb" value={form.suburb} onChange={handle} required placeholder="Melbourne" />
                  </div>
                  <div className="form-group">
                    <label>{t.bookingPage.state} <span className="required-star">*</span></label>
                    <select name="state" value={form.state} onChange={handle} required>
                      <option value="">-- Select --</option>
                      {['VIC','NSW','QLD','SA','WA','TAS','ACT','NT'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t.bookingPage.pickupDate} <span className="required-star">*</span></label>
                    <input name="pickupDate" type="date" value={form.pickupDate} onChange={handle} required min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div className="form-group">
                    <label>{t.bookingPage.pickupTime}</label>
                    <select name="pickupTime" value={form.pickupTime} onChange={handle}>
                      <option>Sáng (8am-12pm)</option>
                      <option>Chiều (12pm-5pm)</option>
                      <option>Tối (5pm-7pm)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.bookingPage.frequency}</label>
                  <div className="radio-group">
                    {[
                      { val: 'one-off', label: 'Một lần' },
                      { val: 'weekly', label: 'Hàng tuần' },
                      { val: 'fortnightly', label: '2 tuần / lần' },
                      { val: 'monthly', label: 'Hàng tháng' },
                    ].map(f => (
                      <label key={f.val} className="radio-label">
                        <input type="radio" name="frequency" value={f.val} checked={form.frequency === f.val} onChange={handle} />
                        {f.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.bookingPage.notes}</label>
                  <textarea name="notes" value={form.notes} onChange={handle} placeholder="Ghi chú thêm nếu có..." />
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-back" onClick={() => setStep(0)}>{t.bookingPage.btnBack}</button>
                  <button type="submit" className="btn-next">{t.bookingPage.btnReview}</button>
                </div>
              </form>
            )}

            {/* Step 2: Confirm */}
            {step === 2 && (
              <form onSubmit={submitBooking}>
                <h2>{t.bookingPage.confirmTitle}</h2>
                <p className="subtitle">{t.bookingPage.confirmSubtitle}</p>

                <div style={{ background: 'var(--bg-light)', borderRadius: 'var(--radius)', padding: 24, marginBottom: 24 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      ['Dịch vụ', selected],
                      ['Họ tên', `${form.firstName} ${form.lastName}`],
                      ['Email', form.email],
                      ['Số điện thoại', form.phone],
                      ['Địa chỉ', `${form.address}, ${form.suburb} ${form.state}`],
                      ['Ngày nhận hàng', form.pickupDate],
                      ['Khung giờ', form.pickupTime],
                      ['Tần suất', form.frequency],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-gray)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 2 }}>{k}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>{v || '—'}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-back" onClick={() => setStep(1)}>{t.bookingPage.btnBack}</button>
                  <button type="submit" className="btn-next">{t.bookingPage.btnSubmit}</button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default BookingPage;
