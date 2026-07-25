import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PricingPage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const pricingPlansVi = [
    {
      icon: '🏠',
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
      icon: '👔',
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
      icon: '🏢',
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
      icon: '🏠',
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
      icon: '👔',
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
      icon: '🏢',
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
                <div className="pricing-icon">{plan.icon}</div>
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
      <section style={{ background: 'var(--primary)', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, marginBottom: 40 }}>
            {t.pricingPage.inclusionsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {t.pricingPage.inclusions.map(inc => (
              <div key={inc.text} style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{inc.icon}</div>
                <p style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>{inc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;

