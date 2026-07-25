import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const reviewsEn = [
  {
    id: 1,
    text: "Jim's Laundry Services is absolutely amazing! They picked up my clothes on time and returned them fresh and perfectly folded. Couldn't be happier!",
    author: 'Sarah M.',
    location: 'Melbourne, VIC',
    stars: 5,
    color: '#1a237e',
  },
  {
    id: 2,
    text: "Incredible service! I use Jim's every week for my business attire. The quality is consistently excellent and the pick-up and delivery is always on time.",
    author: 'James T.',
    location: 'Sydney, NSW',
    stars: 5,
    color: '#00897b',
  },
  {
    id: 3,
    text: "I'm a busy mum and Jim's Laundry has been a lifesaver! Fresh, clean clothes delivered right to my door. The team is so professional and friendly.",
    author: 'Emily R.',
    location: 'Brisbane, QLD',
    stars: 5,
    color: '#7b1fa2',
  },
];

const reviewsVi = [
  {
    id: 1,
    text: "Dịch vụ giặt ủi của Jim's thật sự tuyệt vời! Họ nhận quần áo đúng giờ và trả lại thơm tho, gấp gọn hoàn hảo. Tôi vô cùng hài lòng!",
    author: 'Thanh Mai',
    location: 'Melbourne, VIC',
    stars: 5,
    color: '#1a237e',
  },
  {
    id: 2,
    text: "Dịch vụ xuất sắc! Tôi sử dụng Jim's hàng tuần cho trang phục công sở. Chất lượng luôn luôn tuyệt vời và giao nhận vô cùng đúng giờ.",
    author: 'Quốc Tuấn',
    location: 'Sydney, NSW',
    stars: 5,
    color: '#00897b',
  },
  {
    id: 3,
    text: "Tôi là một người mẹ bận rộn và Jim's Laundry thực sự là cứu tinh! Quần áo sạch sẽ, thơm tho được giao tận cửa. Đội ngũ rất chuyên nghiệp và thân thiện.",
    author: 'Bích Phương',
    location: 'Brisbane, QLD',
    stars: 5,
    color: '#7b1fa2',
  },
];

const StarIcon = () => <span>★</span>;

const ReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const reviewsList = lang === 'vi' ? reviewsVi : reviewsEn;
  const visibleCount = 3;
  const maxIndex = Math.max(0, reviewsList.length - visibleCount);

  const prev = () => setCurrent(c => Math.max(c - 1, 0));
  const next = () => setCurrent(c => Math.min(c + 1, maxIndex));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="testimonials-top">
      <div className="container">
        <h2>{t.reviews.title}</h2>
        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(calc(-${current * (270 + 20)}px))` }}
          >
            {reviewsList.map(r => (
              <div key={r.id} className="review-card">
                <div className="review-stars">
                  {Array.from({ length: r.stars }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar" style={{ background: r.color }}>
                    {r.author[0]}
                  </div>
                  <div className="review-info">
                    <strong>{r.author}</strong>
                    <span>{r.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} disabled={current === 0} aria-label="Previous">
            ‹
          </button>
          <button className="carousel-btn" onClick={next} disabled={current === maxIndex} aria-label="Next">
            ›
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <button className="btn btn-primary" onClick={() => navigate('/booking')}>
            {t.reviews.btnQuote}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
