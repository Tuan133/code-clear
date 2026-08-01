import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const servicesVi = [
    {
      name: 'Giặt Ủi Gia Đình',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="2" width="18" height="20" rx="3"/>
          <circle cx="12" cy="13" r="5"/>
          <path d="M12 10a3 3 0 0 0-3 3"/>
          <circle cx="7" cy="5" r="1" fill="currentColor"/>
          <circle cx="10" cy="5" r="1" fill="currentColor"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      desc: 'Dịch vụ giặt ủi gia đình hoàn hảo cho nhu cầu quần áo hàng ngày. Chúng tôi nhận hàng, giặt, sấy và gấp quần áo gọn gàng với nước giặt thân thiện môi trường. Trả hàng sạch thơm trong 24 giờ.',
      features: ['Giặt, sấy & gấp gọn', 'Sản phẩm thân thiện môi trường', 'Trả hàng trong 24 giờ', 'Giao & nhận hàng miễn phí'],
    },
    {
      name: 'Giặt Ủi Thương Mại',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=80',
      desc: 'Dịch vụ giặt ủi chuyên nghiệp cho doanh nghiệp, nhà hàng, khách sạn và văn phòng. Xử lý số lượng lớn với chất lượng đồng nhất và đáng tin cậy. Có lịch nhận hàng định kỳ.',
      features: ['Khả năng xử lý số lượng lớn', 'Hẹn lịch định kỳ linh hoạt', 'Quy trình giặt chuẩn thương mại', 'Thời gian nhận hàng linh hoạt'],
    },
    {
      name: 'Dịch Vụ Là/Ủi Quần Áo',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1"/>
          <path d="M3 13V9a2 2 0 0 1 2-2h11.5a3.5 3.5 0 0 1 3.5 3.5V13H3z"/>
          <path d="M8 7V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V7"/>
          <circle cx="6" cy="10" r="0.75" fill="currentColor"/>
          <circle cx="9" cy="10" r="0.75" fill="currentColor"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=400&q=80',
      desc: 'Dịch vụ là/ủi hơi nước chuyên nghiệp giúp quần áo của bạn luôn phẳng phiu, chỉn chu. Phù hợp cho áo sơ mi công sở, quần tây, đầm dạ hội và trang phục cao cấp.',
      features: ['Ủi hơi nước chuyên nghiệp', 'Áo sơ mi & áo kiểu', 'Bộ vest & quần tây', 'Đầm & trang phục dạ hội'],
    },
    {
      name: 'Giặt Khô / Giặt Hấp',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a2.5 2.5 0 0 0-2.5 2.5v1.25L3 11a1.5 1.5 0 0 0 .5 2.8h17a1.5 1.5 0 0 0 .5-2.8l-6.5-4.25V5.5A2.5 2.5 0 0 0 12 3z"/>
          <path d="M12 13.8v7.2"/>
          <path d="M8 17h8"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80',
      desc: 'Giặt khô chuyên sâu cho trang phục cao cấp đòi hỏi sự chăm sóc đặc biệt như veston, áo cưới, đồ lụa, dạ. Bảo vệ sợi vải tối đa.',
      features: ['Chăm sóc trang phục cao cấp', 'Bộ vest & trang phục trang trọng', 'Giặt hấp váy cưới', 'Chất liệu vải nhạy cảm'],
    },
  ];

  const servicesEn = [
    {
      name: 'Domestic Laundry',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="2" width="18" height="20" rx="3"/>
          <circle cx="12" cy="13" r="5"/>
          <path d="M12 10a3 3 0 0 0-3 3"/>
          <circle cx="7" cy="5" r="1" fill="currentColor"/>
          <circle cx="10" cy="5" r="1" fill="currentColor"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      desc: 'Our domestic laundry service is perfect for everyday household washing. We pick up, wash, dry and fold your clothes with care, using eco-friendly detergents. Delivered fresh within 24 hours.',
      features: ['Wash, dry & fold', 'Eco-friendly products', '24-hour turnaround', 'Free pick-up & delivery'],
    },
    {
      name: 'Commercial Laundry',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=80',
      desc: 'Professional laundry services for businesses, restaurants, hotels and offices. We handle large volumes with consistent quality and reliability. Regular scheduling available.',
      features: ['High-volume capacity', 'Regular scheduling', 'Commercial-grade cleaning', 'Flexible pick-up times'],
    },
    {
      name: 'Ironing Services',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1"/>
          <path d="M3 13V9a2 2 0 0 1 2-2h11.5a3.5 3.5 0 0 1 3.5 3.5V13H3z"/>
          <path d="M8 7V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V7"/>
          <circle cx="6" cy="10" r="0.75" fill="currentColor"/>
          <circle cx="9" cy="10" r="0.75" fill="currentColor"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=400&q=80',
      desc: 'Professional ironing service to keep your clothes looking immaculate. Perfect for business shirts, blouses, trousers and more. Returned neatly pressed and ready to wear.',
      features: ['Professional steam ironing', 'Shirts & blouses', 'Suits & trousers', 'Dresses & formalwear'],
    },
    {
      name: 'Dry Cleaning',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a2.5 2.5 0 0 0-2.5 2.5v1.25L3 11a1.5 1.5 0 0 0 .5 2.8h17a1.5 1.5 0 0 0 .5-2.8l-6.5-4.25V5.5A2.5 2.5 0 0 0 12 3z"/>
          <path d="M12 13.8v7.2"/>
          <path d="M8 17h8"/>
        </svg>
      ),
      img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80',
      desc: 'Expert dry cleaning for delicate garments that require specialist care. Suits, formal wear, wedding dresses and more. Treated with the utmost care and attention.',
      features: ['Specialist garment care', 'Suits & formal wear', 'Wedding dress cleaning', 'Delicate fabrics'],
    },
  ];

  const allServices = lang === 'vi' ? servicesVi : servicesEn;

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>{t.servicesPage.heroTitle}</h1>
          <p>{t.servicesPage.heroSubtitle}</p>
        </div>
      </div>

      <section style={{ background: 'var(--bg-light)', padding: '70px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
            {allServices.map((svc, i) => (
              <div
                key={svc.name}
                className="service-card-item"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 50,
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div
                  style={{
                    order: i % 2 === 0 ? 0 : 1,
                    height: 280,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={svc.img}
                    alt={svc.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '36px', order: i % 2 === 0 ? 1 : 0 }}>
                  <div className="service-icon-box">
                    {svc.icon}
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 12 }}>
                    {svc.name}
                  </h2>
                  <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 20 }}>{svc.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                    {svc.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%',
                          background: 'var(--cyan)', color: 'white',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700, flexShrink: 0
                        }}>✓</div>
                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary" onClick={() => navigate('/booking')}>
                    {t.hero.btnQuote}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-section">
        <div className="container">
          <h2 className="cta-banner-title">
            {t.servicesPage.ctaTitle}
          </h2>
          <p className="cta-banner-subtitle">
            {t.servicesPage.ctaSubtitle}
          </p>
          <div className="cta-banner-actions">
            <button className="btn btn-white" onClick={() => navigate('/booking')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                <path d="M5 3v4"/>
                <path d="M19 17v4"/>
              </svg>
              {t.hero.btnQuote}
            </button>
            <a href="tel:131546" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {t.header.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
