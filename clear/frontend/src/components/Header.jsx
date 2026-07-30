import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PhoneIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, toggleLanguage, t } = useLanguage();

  const aboutLinks = [
    { label: t.header.aboutJims, href: '/about' },
    { label: t.header.ourTeam, href: '/about' },
  ];

  const serviceLinks = [
    { label: t.header.domestic, href: '/services' },
    { label: t.header.commercial, href: '/services' },
    { label: t.header.ironing, href: '/services' },
    { label: t.header.dryCleaning, href: '/services' },
  ];

  return (
    <>
      <header className="header">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-text">
              <span>TLaundry</span>
              <span>Laundry Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li className="nav-item">
              <button className="nav-link">{t.header.aboutUs} <ChevronDown /></button>
              <div className="dropdown">
                {aboutLinks.map(l => (
                  <Link key={l.label} to={l.href} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <button className="nav-link">{t.header.services} <ChevronDown /></button>
              <div className="dropdown">
                {serviceLinks.map(l => (
                  <Link key={l.label} to={l.href} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            </li>
            <li><Link to="/pricing" className="nav-link">{t.header.pricing}</Link></li>

            <li><Link to="/gift-card" className="nav-link">{t.header.giftCard}</Link></li>
            <li><Link to="/contact" className="nav-link">{t.header.contact}</Link></li>
          </ul>

          {/* CTAs + Language Switcher */}
          <div className="nav-ctas">
            <button className="lang-btn" onClick={toggleLanguage} title="Đổi ngôn ngữ / Change language">
              <GlobeIcon />
              <span className="lang-text">{lang === 'vi' ? '🇻🇳 VN' : '🇬🇧 EN'}</span>
            </button>
            <button className="btn-quote" onClick={() => navigate('/booking')}>
              <CalendarIcon /> {t.header.requestQuote}
            </button>
            <a href="tel:131546" className="btn-phone">
              <PhoneIcon /> {t.header.phone}
            </a>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo-text">
            <span style={{ color: 'var(--primary)', fontSize: '18px', fontWeight: 800 }}>TLaundry</span>
          </div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        </div>
        <nav>
          {[
            { label: t.header.aboutUs, href: '/about' },
            { label: t.header.services, href: '/services' },
            { label: t.header.pricing, href: '/pricing' },

            { label: t.header.giftCard, href: '/gift-card' },
            { label: t.header.contact, href: '/contact' },
          ].map(l => (
            <Link
              key={l.label}
              to={l.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="lang-btn-mobile" onClick={toggleLanguage}>
              <GlobeIcon /> Ngôn ngữ / Language: <strong>{lang === 'vi' ? 'Tiếng Việt 🇻🇳' : 'English 🇬🇧'}</strong>
            </button>
            <button
              className="btn btn-primary"
              style={{ justifyContent: 'center' }}
              onClick={() => { navigate('/booking'); setMobileOpen(false); }}
            >
              {t.header.requestQuote}
            </button>
            <a href="tel:131546" className="btn btn-cyan" style={{ justifyContent: 'center' }}>
              📞 {t.header.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

