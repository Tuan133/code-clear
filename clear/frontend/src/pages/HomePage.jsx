import { useNavigate } from 'react-router-dom';
import ReviewsCarousel from '../components/ReviewsCarousel';
import { useLanguage } from '../context/LanguageContext';

const instaPosts = [
  { img: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=300&q=80', label: 'Gumdale' },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&q=80', label: 'And I was' },
  { img: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=300&q=80', label: 'CHOOSE LAUNDRY' },
  { img: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=300&q=80', label: 'Pickup service' },
];

const partnerLogos = [
  { name: 'Western Bulldogs', color: '#002B5C', text: 'WB' },
  { name: 'Parramatta Eels', color: '#00438D', text: 'PE' },
  { name: 'Cricket Australia', color: '#006747', text: 'CA' },
  { name: 'NZ Rugby', color: '#231F20', text: 'NZR' },
  { name: 'AFL Clubs', color: '#003087', text: 'AFL' },
];

const newsItemsVi = [
  {
    cat: 'Mẹo Giặt Ủi',
    title: 'Cách Tẩy Các Vết Bẩn Cứng Đầu Trên Quần Áo Yêu Thích',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=80',
  },
  {
    cat: 'Cập Nhật Dịch Vụ',
    title: "Jim's Laundry Mở Rộng Chi Nhánh Mới Trên Toàn Nước Úc",
    img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=300&q=80',
  },
  {
    cat: 'Thân Thiện Môi Trường',
    title: 'Cam Kết Sử Dụng Nước Giặt Sản Xuất Tại Úc & An Toàn Môi Trường',
    img: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=300&q=80',
  },
  {
    cat: 'Nhượng Quyền',
    title: "5 Lý Do Vì Sao Nhượng Quyền Jim's Là Hướng Đi Kinh Doanh Thông Minh",
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80',
  },
];

const newsItemsEn = [
  {
    cat: 'Laundry Tips',
    title: 'How to Remove Tough Stains From Your Favourite Clothes',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=80',
  },
  {
    cat: 'Service Updates',
    title: "Jim's Laundry Expands to New Regions Across Australia",
    img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=300&q=80',
  },
  {
    cat: 'Eco Friendly',
    title: 'Our Commitment to Using Eco-Friendly, Australian-Made Detergents',
    img: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=300&q=80',
  },
  {
    cat: 'Franchise',
    title: "5 Reasons Why Becoming a Jim's Franchisee is a Smart Business Move",
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80',
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const newsItems = lang === 'vi' ? newsItemsVi : newsItemsEn;

  const serviceImages = [
    { name: t.header.domestic, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80' },
    { name: t.header.commercial, img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=300&q=80' },
    { name: t.header.ironing, img: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=300&q=80' },
    { name: t.header.dryCleaning, img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&q=80' },
  ];

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-content">
          <h1>
            {t.hero.title1}{' '}
            <span>{t.hero.title2}</span>{' '}
            {t.hero.title3}
          </h1>
          <p>{t.hero.subtitle}</p>
          <button className="hero-btn" onClick={() => navigate('/booking')}>
            {t.hero.btnQuote}
          </button>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {[...t.trustBar, ...t.trustBar].map((item, i) => (
            <span key={i} className="trust-item">
              <span className="trust-dot" />
              <strong>{item}</strong>
            </span>
          ))}
        </div>
      </div>

      {/* ===== REVIEWS CAROUSEL ===== */}
      <ReviewsCarousel />

      {/* ===== WHO WE ARE ===== */}
      <section className="who-we-are">
        <div className="container">
          <div className="who-grid">
            <div className="who-content">
              <span className="badge">{t.whoWeAre.badge}</span>
              <h2>{t.whoWeAre.title}</h2>
              <p>{t.whoWeAre.desc1}</p>
              <p>{t.whoWeAre.desc2}</p>
              <div className="who-features">
                {t.whoWeAre.features.map(f => (
                  <div key={f} className="who-feature">
                    <div className="who-feature-icon">✓</div>
                    {f}
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" onClick={() => navigate('/about')}>
                {t.whoWeAre.btnLearn}
              </button>
            </div>
            <div className="who-video">
              <img
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=700&q=80"
                alt="Jim's Laundry Services team"
              />
              <div className="play-btn">
                <div className="play-circle">
                  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3-STEP PROMO CARDS ===== */}
      <section className="promo-grid-section">
        <div className="container">
          <div className="promo-grid">
            {t.promoCards.map((card, idx) => (
              <div key={card.num} className="promo-card">
                <img
                  className="promo-card-img"
                  src={[
                    'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=500&q=80',
                    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
                  ][idx]}
                  alt={card.title}
                />
                <div className="promo-card-body">
                  <div className="promo-num">{card.num}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <button className="btn btn-primary" onClick={() => navigate(card.href)}>
                    {card.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2>{t.servicesSection.title}</h2>
            <p>{t.servicesSection.desc}</p>
          </div>
          <span className="badge">{t.servicesSection.badge}</span>

          <div className="services-grid">
            {serviceImages.map((svc, i) => (
              <div
                key={svc.name}
                className={`service-card ${i === 0 ? 'active' : ''}`}
                onClick={() => navigate('/services')}
              >
                <div className="service-img-wrap">
                  <img src={svc.img} alt={svc.name} />
                  <div className="service-emoji-badge">😊</div>
                </div>
                <div className="service-card-body">
                  <h3>{svc.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW TO BOOK ===== */}
      <section className="how-to-book">
        <div className="container">
          <div className="how-header">
            <h2>{t.howToBook.title1} <span>{t.howToBook.title2}</span></h2>
            <p>{t.howToBook.desc}</p>
            <button className="btn btn-outline" onClick={() => navigate('/booking')}>
              {t.howToBook.btn}
            </button>
          </div>

          <div className="steps-grid">
            {t.howToBook.steps.map((s, idx) => (
              <div key={s.step} className="step-card">
                <div className="step-circle">
                  <span style={{ fontSize: 36 }}>{['📱', '🚚', '👕', '✨'][idx]}</span>
                  <div className="step-number">BƯỚC {s.step}</div>
                </div>
                <h3>{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-section">
        <div className="container">
          <h2>{t.whyChooseUs.title1} <strong>{t.whyChooseUs.title2}</strong></h2>
          <div className="why-grid">
            {t.whyChooseUs.items.map((label, idx) => (
              <div key={label} className="why-card">
                <div className="why-icon">{['⚙️', '🎧', '🏅', '🌿', '🚚', '🛡️', '🏠', '📋'][idx]}</div>
                <h3>{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL TESTIMONIALS ===== */}
      <section className="social-testimonials">
        <div className="container">
          <div className="social-grid">
            <div className="social-left">
              <span className="badge">{t.socialTestimonials.badge}</span>
              <div className="social-stars">
                {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
              </div>
              <h2>{t.socialTestimonials.title}</h2>
              <p>{t.socialTestimonials.desc}</p>
              <br />
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                {t.socialTestimonials.btn}
              </button>
            </div>
            <div className="social-videos">
              {[
                { handle: '@bookanile Reel', src: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=300&q=80' },
                { handle: '@misskath Reel', src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=80' },
                { handle: 'A post-adventure h', src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&q=80' },
              ].map(v => (
                <div key={v.handle} className="social-video-card">
                  <img src={v.src} alt={v.handle} />
                  <div className="video-overlay">
                    <div className="video-header">
                      <div className="video-avatar">J</div>
                      <div className="video-info">
                        <strong>{v.handle}</strong>
                        <span>Jim's Laundry Services</span>
                      </div>
                    </div>
                    <div className="play-btn-red">
                      <svg width="48" height="48" viewBox="0 0 68 48" fill="none">
                        <rect width="68" height="48" rx="10" fill="#ff0000"/>
                        <polygon points="26,14 26,34 46,24" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM FEED ===== */}
      <section className="instagram-section">
        <div className="container">
          <div className="instagram-header">
            <h2>{t.instagram.title}</h2>
            <div className="instagram-handle">@jimslaundryservices</div>
          </div>
          <div className="instagram-grid">
            {instaPosts.map((p, i) => (
              <div key={i} className="insta-post">
                <img src={p.img} alt={p.label} />
                <div className="insta-play">
                  <svg width="44" height="44" viewBox="0 0 68 48" fill="none">
                    <rect width="68" height="48" rx="10" fill="#ff0000" fillOpacity="0.85"/>
                    <polygon points="26,14 26,34 46,24" fill="white"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="instagram-ctas">
            <button className="btn btn-primary">{t.instagram.btnLoadMore}</button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ background: 'var(--primary)', color: 'white' }}
            >
              {t.instagram.btnFollow}
            </a>
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIPS ===== */}
      <section className="partnerships-section">
        <div className="container">
          <h2>{t.partnerships.title1} <span>{t.partnerships.title2}</span></h2>
          <p className="subtext">{t.partnerships.subtext}</p>
          <div className="partners-logos">
            {partnerLogos.map(p => (
              <div key={p.name} className="partner-logo">
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: p.color,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 11,
                  textAlign: 'center'
                }}>
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRANCHISE CTA ===== */}
      <section className="franchise-section">
        <div className="container">
          <div className="franchise-grid">
            <div className="franchise-content">
              <span className="badge">{t.franchiseSection.badge}</span>
              <h2>{t.franchiseSection.title}</h2>
              <p>{t.franchiseSection.desc}</p>
              <div className="franchise-perks">
                {t.franchiseSection.perks.map(p => (
                  <div key={p} className="franchise-perk">
                    <div className="franchise-perk-check">✓</div>
                    {p}
                  </div>
                ))}
              </div>
              <button className="btn btn-cyan" onClick={() => navigate('/franchise')}>
                {t.franchiseSection.btn}
              </button>
            </div>
            <div>
              <div className="franchise-card">
                <div className="franchise-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                    alt="Franchisee"
                  />
                </div>
                <p className="franchise-quote">{t.franchiseSection.quote}</p>
                <div className="franchise-name">{t.franchiseSection.name}</div>
                <div className="franchise-highlights">
                  {t.franchiseSection.highlights.map(h => (
                    <div key={h.span} className="franchise-highlight">
                      <strong>{h.strong}</strong>
                      <span>{h.span}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="news-section">
        <div className="container">
          <h2>{t.news.title}</h2>
          <div className="news-grid">
            {newsItems.map(n => (
              <div key={n.title} className="news-card">
                <div className="news-card-img">
                  <img src={n.img} alt={n.title} />
                </div>
                <div className="news-card-body">
                  <span className="news-category">{n.cat}</span>
                  <h3>{n.title}</h3>
                  <button className="news-read-more">{t.news.readMore}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
