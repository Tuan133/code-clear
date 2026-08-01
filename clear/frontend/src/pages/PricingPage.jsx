import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PricingPage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const pricingPlansVi = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="2" width="18" height="20" rx="3"/>
          <circle cx="12" cy="13" r="5"/>
          <path d="M12 10a3 3 0 0 0-3 3"/>
          <circle cx="7" cy="5" r="1" fill="currentColor"/>
          <circle cx="10" cy="5" r="1" fill="currentColor"/>
        </svg>
      ),
      name: 'Giặt Ủi Gia Đình',
      note: 'Giá tính theo trọng lượng — gọi cho chúng tôi để có báo giá chính xác theo số lượng đồ của bạn.',
      featured: false,
      features: [
        'Dịch vụ giặt, sấy & gấp gọn',
        'Giao & nhận hàng miễn phí',
        'Nước giặt thân thiện môi trường',
        'Trả hàng trong 24 giờ',
        'Phân loại & xếp gọn gàng',
        'Có dịch vụ đặt lịch định kỳ',
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a2.5 2.5 0 0 0-2.5 2.5v1.25L3 11a1.5 1.5 0 0 0 .5 2.8h17a1.5 1.5 0 0 0 .5-2.8l-6.5-4.25V5.5A2.5 2.5 0 0 0 12 3z"/>
          <path d="M12 13.8v7.2"/>
          <path d="M8 17h8"/>
        </svg>
      ),
      name: 'Là/Ủi & Giặt Khô Hấp',
      note: 'Tính giá theo từng món. Có ưu đãi giảm giá khi giặt từ 10 món trở lên. Liên hệ để nhận báo giá.',
      featured: true,
      features: [
        'Là/ủi hơi nước chuyên nghiệp',
        'Áo sơ mi chỉ từ $4/cái',
        'Bộ vest/suit từ $25/bộ',
        'Giao & nhận hàng miễn phí',
        'Có dịch vụ lấy nhanh trong ngày',
        "Bảo hành chất lượng từ TLaundry",
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>
        </svg>
      ),
      name: 'Dịch Vụ Thương Mại',
      note: 'Mức giá thiết kế riêng cho doanh nghiệp. Giảm giá theo số lượng cho hợp đồng dài hạn.',
      featured: false,
      features: [
        'Báo giá riêng theo khối lượng',
        'Lịch giao nhận định kỳ linh hoạt',
        'Khả năng xử lý số lượng cực lớn',
        'Quản lý tài khoản hỗ trợ riêng',
        'Ưu tiên xử lý nhanh nhất',
        'Có xuất hóa đơn doanh nghiệp',
      ],
    },
  ];

  const pricingPlansEn = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="2" width="18" height="20" rx="3"/>
          <circle cx="12" cy="13" r="5"/>
          <path d="M12 10a3 3 0 0 0-3 3"/>
          <circle cx="7" cy="5" r="1" fill="currentColor"/>
          <circle cx="10" cy="5" r="1" fill="currentColor"/>
        </svg>
      ),
      name: 'Domestic Laundry',
      note: 'Prices based on weight — call us for an exact quote based on your load size.',
      featured: false,
      features: [
        'Wash, dry & fold service',
        'Free pick-up & delivery',
        'Eco-friendly detergents',
        '24-hour turnaround',
        'Sorted & returned neatly',
        'Regular scheduling available',
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a2.5 2.5 0 0 0-2.5 2.5v1.25L3 11a1.5 1.5 0 0 0 .5 2.8h17a1.5 1.5 0 0 0 .5-2.8l-6.5-4.25V5.5A2.5 2.5 0 0 0 12 3z"/>
          <path d="M12 13.8v7.2"/>
          <path d="M8 17h8"/>
        </svg>
      ),
      name: 'Ironing & Dry Cleaning',
      note: 'Per-item pricing available. Bundle discounts for 10+ items. Contact us for a custom quote.',
      featured: true,
      features: [
        'Professional steam ironing',
        'Business shirts from $4 each',
        'Suits from $25 per set',
        'Free pick-up & delivery',
        'Same-day service available',
        "TLaundry Work Guarantee",
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>
        </svg>
      ),
      name: 'Commercial Services',
      note: 'Tailored pricing for businesses. Volume discounts for regular bookings.',
      featured: false,
      features: [
        'Custom commercial pricing',
        'Regular scheduling',
        'High-volume capacity',
        'Dedicated account manager',
        'Priority turnaround',
        'Invoicing available',
      ],
    },
  ];

  const pricingPlans = lang === 'vi' ? pricingPlansVi : pricingPlansEn;

  const additionalItemsVi = [
    { name: 'Chăn Doona (Đơn)', price: 'Từ $25' },
    { name: 'Chăn Doona (Đôi/Queen)', price: 'Từ $35' },
    { name: 'Chăn Doona (King)', price: 'Từ $45' },
    { name: 'Gối (mỗi chiếc)', price: 'Từ $12' },
    { name: 'Mền / Chăn bông', price: 'Từ $20' },
    { name: 'Túi ngủ', price: 'Từ $30' },
    { name: 'Thảm nhỏ', price: 'Từ $35' },
    { name: 'Thảm lớn', price: 'Từ $55' },
    { name: 'Rèm cửa (mỗi tấm)', price: 'Từ $18' },
    { name: 'Đầm dạ hội', price: 'Từ $35' },
    { name: 'Bộ Vest (2 món)', price: 'Từ $25' },
    { name: 'Váy cưới', price: 'Báo giá riêng' },
  ];

  const additionalItemsEn = [
    { name: 'Doona (Single)', price: 'From $25' },
    { name: 'Doona (Double/Queen)', price: 'From $35' },
    { name: 'Doona (King)', price: 'From $45' },
    { name: 'Pillows (each)', price: 'From $12' },
    { name: 'Blanket', price: 'From $20' },
    { name: 'Sleeping Bag', price: 'From $30' },
    { name: 'Rug (Small)', price: 'From $35' },
    { name: 'Rug (Large)', price: 'From $55' },
    { name: 'Curtains (per panel)', price: 'From $18' },
    { name: 'Formal Dress', price: 'From $35' },
    { name: 'Suit (2-piece)', price: 'From $25' },
    { name: 'Wedding Dress', price: 'POA' },
  ];

  const additionalItems = lang === 'vi' ? additionalItemsVi : additionalItemsEn;

  const inclusionsList = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      text: lang === 'vi' ? 'Giao & Nhận Miễn Phí' : 'Free Pick-up & Delivery'
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 6-4.5 11-10 11z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      ),
      text: lang === 'vi' ? 'Nước Giặt Thân Thiện Môi Trường' : 'Eco-Friendly Detergents'
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      text: lang === 'vi' ? 'Trả Hàng Trong 24 Giờ' : '24-Hour Turnaround'
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
          <path d="m9 8 2 2 4-4"/>
        </svg>
      ),
      text: lang === 'vi' ? 'Cam Kết Chất Lượng TLaundry' : 'TLaundry Work Guarantee'
    },
  ];

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>{t.pricingPage.heroTitle}</h1>
          <p>{t.pricingPage.heroSubtitle}</p>
        </div>
      </div>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-intro">
            <h2>{t.pricingPage.title}</h2>
            <p>{t.pricingPage.subtitle}</p>
          </div>

          <div className="pricing-cards">
            {pricingPlans.map(plan => (
              <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="pricing-featured-badge">{lang === 'vi' ? 'Phổ Biến Nhất' : 'Most Popular'}</div>}
                <div className="pricing-card-icon-box">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <p className="price-note">{plan.note}</p>
                <div className="pricing-features">
                  {plan.features.map(f => (
                    <div key={f} className="pricing-feature">
                      <span className="pricing-feature-check">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/booking')}>
                  {t.hero.btnQuote}
                </button>
              </div>
            ))}
          </div>

          {/* Additional pricing table */}
          <div style={{ marginTop: 60 }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 8, textAlign: 'center' }}>
              {t.pricingPage.additionalTitle}
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: 32 }}>
              {t.pricingPage.additionalSubtitle}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
              background: 'var(--bg-light)',
              borderRadius: 'var(--radius-lg)',
              padding: 32,
            }}>
              {additionalItems.map(item => (
                <div key={item.name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  background: 'white',
                  borderRadius: 10,
                  boxShadow: 'var(--shadow)',
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>{item.name}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--cyan)' }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="pricing-inclusions-section">
        <div className="container">
          <h2 className="pricing-inclusions-title">
            {t.pricingPage.inclusionsTitle}
          </h2>
          <div className="pricing-inclusions-grid">
            {inclusionsList.map(inc => (
              <div key={inc.text} className="inclusion-card">
                <div className="inclusion-icon-box">{inc.icon}</div>
                <p className="inclusion-card-text">{inc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;

