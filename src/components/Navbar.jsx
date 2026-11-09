import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../i18n/LangContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/products', label: t.nav.products },
    { to: '/services', label: t.nav.services },
    { to: '/subsidy', label: t.nav.subsidy },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        {/* Top Notification Bar for Farmers & Subsidies */}
        <div className="top-utility-bar">
          <div className="container top-utility-inner">
            <div className="utility-left">
              <span className="live-pulse"></span>
              <span className="utility-badge">Maharashtra Hub</span>
              <span className="utility-text">
                📍 Arvi, Nagpur | DGCA Certified Farm Drones
              </span>
            </div>
            <div className="utility-right">
              <span className="subsidy-pill">
                🏛️ {t.hero.subsidyBanner.slice(0, 52)}...
              </span>
              <a href="tel:+919822054321" className="utility-phone">
                📞 +91 98220 54321
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="nav-container container">
          <Link to="/" className="brand-logo" aria-label="Fuselage Innovations Home">
            <div className="logo-emblem">
              <svg viewBox="0 0 40 40" className="drone-emblem-svg" fill="none">
                <rect x="14" y="14" width="12" height="12" rx="3" fill="var(--primary)" />
                <path d="M7 7L15 15M33 7L25 15M7 33L15 25M33 33L25 25" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="7" cy="7" r="4" fill="var(--accent)" />
                <circle cx="33" cy="7" r="4" fill="var(--accent)" />
                <circle cx="7" cy="33" r="4" fill="var(--accent)" />
                <circle cx="33" cy="33" r="4" fill="var(--accent)" />
                <circle cx="20" cy="20" r="3" fill="#ffffff" />
              </svg>
            </div>
            <div className="brand-titles">
              <span className="brand-name">FUSELAGE</span>
              <span className="brand-state">INNOVATIONS • MAHARASHTRA</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-menu" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Controls: Theme Toggle, Language Switcher, CTA */}
          <div className="header-actions">
            {/* Language Switcher */}
            <div className="lang-selector" title="Change Language / भाषा बदला">
              <button
                type="button"
                className={`lang-option ${lang === 'mr' ? 'selected' : ''}`}
                onClick={() => setLang('mr')}
              >
                मराठी
              </button>
              <button
                type="button"
                className={`lang-option ${lang === 'hi' ? 'selected' : ''}`}
                onClick={() => setLang('hi')}
              >
                हिंदी
              </button>
              <button
                type="button"
                className={`lang-option ${lang === 'en' ? 'selected' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            {/* Light / Dark Mode Toggle */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
              aria-label="Toggle light and dark theme"
            >
              {theme === 'light' ? (
                <span className="theme-icon moon-icon">🌙</span>
              ) : (
                <span className="theme-icon sun-icon">☀️</span>
              )}
            </button>

            {/* Quick Demo CTA Button */}
            <Link to="/contact" className="btn btn-primary btn-sm desktop-only-btn">
              {t.nav.getQuote}
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="toggle-line line-1"></span>
              <span className="toggle-line line-2"></span>
              <span className="toggle-line line-3"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-visible' : ''}`}>
          <div className="mobile-nav-inner">
            <div className="mobile-hub-card">
              <span className="hub-tag">📍 Vidarbha Regional Hub</span>
              <p className="hub-text">Arvi, Wardha / Nagpur District, MH</p>
              <a href="tel:+919822054321" className="mobile-call-link">
                📞 +91 98220 54321 (Instant Helpline)
              </a>
            </div>

            <div className="mobile-lang-row">
              <span className="lang-label">भाषा निवडा:</span>
              <div className="mobile-lang-pills">
                <button
                  type="button"
                  className={`m-lang-pill ${lang === 'mr' ? 'active' : ''}`}
                  onClick={() => setLang('mr')}
                >
                  मराठी
                </button>
                <button
                  type="button"
                  className={`m-lang-pill ${lang === 'hi' ? 'active' : ''}`}
                  onClick={() => setLang('hi')}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  className={`m-lang-pill ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >
                  English
                </button>
              </div>
            </div>

            <ul className="mobile-links-list">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `m-link ${isActive ? 'm-link-active' : ''}`}
                    end={item.to === '/'}
                  >
                    <span>{item.label}</span>
                    <span className="m-arrow">→</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <Link to="/contact" className="btn btn-primary btn-block">
                🌾 {t.nav.getQuote}
              </Link>
              <div className="mobile-theme-row">
                <span>Theme: <strong>{theme === 'light' ? 'Light' : 'Dark'}</strong></span>
                <button type="button" className="theme-switch-pill" onClick={toggleTheme}>
                  {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
