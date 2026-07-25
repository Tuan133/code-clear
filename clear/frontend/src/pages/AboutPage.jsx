import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const valuesVi = [
    { icon: '🤝', title: 'Tin Tưởng', desc: 'Tất cả các đối tác nhượng quyền đều được xác minh lý lịch bởi cảnh sát và có bảo hiểm đầy đủ.' },
    { icon: '⭐', title: 'Chất Lượng', desc: 'Chúng tôi sử dụng nước giặt thân thiện môi trường cao cấp và máy móc hiện đại.' },
    { icon: '⚡', title: 'Tiện Lợi', desc: 'Giao nhận miễn phí tận nơi trong 24 giờ — giải quyết việc giặt ủi nhẹ nhàng.' },
    { icon: '🌿', title: 'Bền Vững', desc: 'Cam kết sử dụng các sản phẩm vệ sinh thân thiện môi trường sản xuất tại Úc.' },
    { icon: '💬', title: 'Tận Tâm', desc: 'Trung tâm hỗ trợ tại Úc sẵn sàng giải đáp mọi thắc mắc của bạn.' },
    { icon: '🏅', title: 'Bảo Hành', desc: "Được bảo chứng bởi Cam Kết Chất Lượng Jim's — nếu chưa hài lòng, chúng tôi sẽ xử lý lại miễn phí." },
  ];

  const valuesEn = [
    { icon: '🤝', title: 'Trust', desc: 'All franchisees are police-checked and fully insured for your peace of mind.' },
    { icon: '⭐', title: 'Quality', desc: 'We use premium eco-friendly detergents and professional-grade equipment for exceptional results.' },
    { icon: '⚡', title: 'Convenience', desc: 'Free pick-up and delivery within 24 hours — laundry sorted without the hassle.' },
    { icon: '🌿', title: 'Sustainability', desc: 'Committed to Australian-made, environmentally friendly cleaning products.' },
    { icon: '💬', title: 'Care', desc: 'Australian-based call centre ready to help with any questions or special requirements.' },
    { icon: '🏅', title: 'Guarantee', desc: "Backed by Jim's Work Guarantee — if you're not satisfied, we'll make it right." },
  ];

  const values = lang === 'vi' ? valuesVi : valuesEn;

  return (
    <main>
      <div className="page-hero">
        <div className="container">
          <h1>{lang === 'vi' ? "Về Jim's Laundry Services" : "About Jim's Laundry Services"}</h1>
          <p>{lang === 'vi' ? 'Dịch vụ giặt ủi di động giao nhận tận nơi uy tín hàng đầu tại Úc, thuộc tập đoàn Jim\'s Group.' : 'Australia\'s most trusted mobile laundry pick-up and delivery service, backed by the Jim\'s Group.'}</p>
        </div>
      </div>

      {/* About main */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="badge">{lang === 'vi' ? 'Câu Chuyện Của Chúng Tôi' : 'Our Story'}</span>
              <h2>{lang === 'vi' ? 'Mang Dịch Vụ Giặt Ủi Chuyên Nghiệp Đến Tận Cửa Nhà Bạn' : 'Bringing Professional Laundry Services to Your Doorstep'}</h2>
              <p>
                {lang === 'vi'
                  ? "Jim's Laundry Services thuộc tập đoàn biểu tượng Jim's Group — mạng lưới nhượng quyền thương hiệu số một tại Úc với hơn 5,000 đối tác. Chúng tôi đưa sự chuyên nghiệp vào một trong những công việc thiết yếu nhất hàng ngày: giặt ủi."
                  : "Jim's Laundry Services is part of the iconic Jim's Group — Australia's number one franchise network with over 5,000 franchisees. We bring professional care to everyday laundry."
                }
              </p>
              <p>
                {lang === 'vi'
                  ? 'Được thành lập trên nguyên tắc tin cậy, uy tín và chất lượng vượt trội, chúng tôi mang lại giải pháp giặt ủi di động cá nhân hóa cho hộ gia đình, doanh nghiệp và các cơ sở chăm sóc tại Úc.'
                  : 'Founded on principles of trust and reliability, we provide personalised mobile laundry solutions across Australia.'
                }
              </p>

              <div className="about-stats">
                {[
                  { strong: '500+', span: lang === 'vi' ? 'Đối Tác' : 'Franchisees' },
                  { strong: '24 Giờ', span: lang === 'vi' ? 'Trả Hàng' : 'Turnaround' },
                  { strong: '100K+', span: lang === 'vi' ? 'Khách Hàng' : 'Happy Customers' },
                ].map(s => (
                  <div key={s.span} className="about-stat">
                    <strong>{s.strong}</strong>
                    <span>{s.span}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary" onClick={() => navigate('/booking')}>
                {t.hero.btnQuote}
              </button>
            </div>
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Jim's Laundry Services team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--bg-section)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 40 }}>
            {lang === 'vi' ? 'Giá Trị Cốt Lõi Của Chúng Tôi' : 'Our Core Values'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--shadow)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
