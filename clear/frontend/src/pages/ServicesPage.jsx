import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const servicesVi = [
    {
      name: 'Giặt Ủi Gia Đình',
      icon: '🏠',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      desc: 'Dịch vụ giặt ủi gia đình hoàn hảo cho nhu cầu quần áo hàng ngày. Chúng tôi nhận hàng, giặt, sấy và gấp quần áo gọn gàng với nước giặt thân thiện môi trường. Trả hàng sạch thơm trong 24 giờ.',
      features: ['Giặt, sấy & gấp gọn', 'Sản phẩm thân thiện môi trường', 'Trả hàng trong 24 giờ', 'Giao & nhận hàng miễn phí'],
    },
    {
      name: 'Giặt Ủi Thương Mại',
      icon: '🏢',
      img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=80',
      desc: 'Dịch vụ giặt ủi chuyên nghiệp cho doanh nghiệp, nhà hàng, khách sạn và văn phòng. Xử lý số lượng lớn với chất lượng đồng nhất và đáng tin cậy. Có lịch nhận hàng định kỳ.',
      features: ['Khả năng xử lý số lượng lớn', 'Hẹn lịch định kỳ linh hoạt', 'Quy trình giặt chuẩn thương mại', 'Thời gian nhận hàng linh hoạt'],
    },
    {
      name: 'Dịch Vụ Là/Ủi Quần Áo',
      icon: '👔',
      img: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=400&q=80',
      desc: 'Dịch vụ là/ủi hơi nước chuyên nghiệp giúp quần áo của bạn luôn phẳng phiu, chỉn chu. Phù hợp cho áo sơ mi công sở, quần tây, đầm dạ hội và trang phục cao cấp.',
      features: ['Ủi hơi nước chuyên nghiệp', 'Áo sơ mi & áo kiểu', 'Bộ vest & quần tây', 'Đầm & trang phục dạ hội'],
    },
    {
      name: 'Giặt Khô / Giặt Hấp',
      icon: '🧥',
      img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80',
      desc: 'Giặt khô chuyên sâu cho trang phục cao cấp đòi hỏi sự chăm sóc đặc biệt như veston, áo cưới, đồ lụa, dạ. Bảo vệ sợi vải tối đa.',
      features: ['Chăm sóc trang phục cao cấp', 'Bộ vest & trang phục trang trọng', 'Giặt hấp váy cưới', 'Chất liệu vải nhạy cảm'],
    },
  ];

  const servicesEn = [
    {
      name: 'Domestic Laundry',
      icon: '🏠',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      desc: 'Our domestic laundry service is perfect for everyday household washing. We pick up, wash, dry and fold your clothes with care, using eco-friendly detergents. Delivered fresh within 24 hours.',
      features: ['Wash, dry & fold', 'Eco-friendly products', '24-hour turnaround', 'Free pick-up & delivery'],
    },
    {
      name: 'Commercial Laundry',
      icon: '🏢',
      img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=80',
      desc: 'Professional laundry services for businesses, restaurants, hotels and offices. We handle large volumes with consistent quality and reliability. Regular scheduling available.',
      features: ['High-volume capacity', 'Regular scheduling', 'Commercial-grade cleaning', 'Flexible pick-up times'],
    },
    {
      name: 'Ironing Services',
      icon: '👔',
      img: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=400&q=80',
      desc: 'Professional ironing service to keep your clothes looking immaculate. Perfect for business shirts, blouses, trousers and more. Returned neatly pressed and ready to wear.',
      features: ['Professional steam ironing', 'Shirts & blouses', 'Suits & trousers', 'Dresses & formalwear'],
    },
    {
      name: 'Dry Cleaning',
      icon: '🧥',
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
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{svc.icon}</div>
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
      <section style={{ background: 'var(--primary)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: 16 }}>
            {t.servicesPage.ctaTitle}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 28 }}>
            {t.servicesPage.ctaSubtitle}
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-cyan" onClick={() => navigate('/booking')}>{t.hero.btnQuote}</button>
            <a href="tel:131546" className="btn btn-outline">📞 {t.header.phone}</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
