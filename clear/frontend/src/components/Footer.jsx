import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onSubscribe }) => {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe && onSubscribe();
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">
              <svg width="50" height="50" viewBox="0 0 100 80" fill="none">
                <circle cx="30" cy="20" r="16" fill="white" stroke="#00bcd4" strokeWidth="2"/>
                <circle cx="30" cy="14" r="6" fill="#1a237e"/>
                <rect x="20" y="28" width="20" height="24" rx="3" fill="white"/>
                <rect x="52" y="15" width="35" height="28" rx="4" fill="#00bcd4" opacity="0.8"/>
                <circle cx="62" cy="29" r="6" fill="white" opacity="0.6"/>
                <circle cx="75" cy="29" r="6" fill="white" opacity="0.6"/>
                <rect x="54" y="43" width="31" height="8" rx="2" fill="white" opacity="0.5"/>
              </svg>
              <div className="logo-text">
                <span style={{ color: '#ffffff' }}>Jim's</span>
                <span>Laundry Services</span>
              </div>
            </div>
            <p className="footer-find">{t.footer.findUs}</p>
            <div className="footer-socials">
              {['f', 'in', 'X', 'li', '▶'].map((s, i) => (
                <button key={i} className="social-icon" aria-label={`Social ${i}`}>{s}</button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              {[
                { label: t.header.aboutUs, href: '/about' },
                { label: t.header.services, href: '/services' },
                { label: t.header.pricing, href: '/pricing' },
                { label: t.header.giftCard, href: '/gift-card' },
                { label: t.header.contact, href: '/contact' },
                { label: t.header.becomeFranchisee, href: '/franchise' },
              ].map(l => (
                <li key={l.label}><Link to={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>{t.footer.services}</h4>
            <ul>
              {[
                t.header.domestic,
                t.header.ironing,
                t.header.dryCleaning,
                t.header.commercial,
              ].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Laundry by State */}
          <div className="footer-col">
            <h4>{t.footer.laundryStates}</h4>
            <ul>
              {[
                'Victoria',
                'New South Wales',
                'Queensland',
                'Tasmania',
                'South Australia',
                'Western Australia',
                'Australian Capital Territory',
              ].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>{t.footer.newsletterTitle}</h4>
            <p>{t.footer.newsletterDesc}</p>
            <form className="footer-form" onSubmit={handleSubmit}>
              <input type="email" placeholder={t.footer.emailPlaceholder} required />
              <button type="submit">{t.footer.btnSubscribe}</button>
            </form>
            <div>
              <h4 style={{ fontSize: 15, marginBottom: 12 }}>{t.footer.contactUs}</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  admin@jimslaundryservices.com.au
                </div>
                <div className="footer-contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
                  </svg>
                  131 546
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
