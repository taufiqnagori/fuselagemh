
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../i18n/LangContext";
import { SITE_CONFIG } from "../data/siteConfig";
import "./Navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/products", label: t.nav.products },
    { to: "/services", label: t.nav.services },
    { to: "/subsidy", label: t.nav.subsidy },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "mr", label: "मराठी" },
    { code: "hi", label: "हिंदी" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {/* TOP UTILITY BAR */}
      <div className="top-utility-bar">
        <div className="container top-utility-inner">
          <div className="utility-left">
            <span className="utility-indicator" />
            <span>Serving Maharashtra</span>
            <span className="utility-divider">|</span>
            <span>Agricultural Drone Solutions</span>
          </div>

          <div className="utility-right">
            <a href={SITE_CONFIG.contact.phoneLink}>
              <span aria-hidden="true">☎</span>
              {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="nav-container container">
        {/* BRAND LOGO */}
        <Link
          to="/"
          className="brand-logo"
          aria-label="Fuselage Innovations home"
        >
          <span className="logo-emblem" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                d="M24 18V30M18 24H30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d="M24 18L12 9M24 18L36 9M24 30L12 39M24 30L36 39"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <circle cx="10" cy="8" r="5" fill="#F2B544" />
              <circle cx="38" cy="8" r="5" fill="#F2B544" />
              <circle cx="10" cy="40" r="5" fill="#F2B544" />
              <circle cx="38" cy="40" r="5" fill="#F2B544" />

              <rect
                x="17"
                y="17"
                width="14"
                height="14"
                rx="4"
                fill="currentColor"
              />
            </svg>
          </span>

          <span className="brand-titles">
            <span className="brand-name">FUSELAGE</span>
            <span className="brand-state">INNOVATIONS</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-menu" aria-label="Main navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="header-actions">
          {/* LANGUAGE DROPDOWN */}
          <div className="lang-selector">
            <select
              className="language-dropdown"
              value={lang}
              onChange={handleLanguageChange}
              aria-label="Select website language"
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.label}
                </option>
              ))}
            </select>
          </div>

          {/* THEME TOGGLE */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title="Change appearance"
          >
            {theme === "light" ? "☾" : "☀"}
          </button>

          {/* DESKTOP QUOTE BUTTON */}
          <Link to="/contact" className="nav-quote-button">
            Get a Quote <span aria-hidden="true">↗</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`mobile-toggle-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE MENU BACKDROP */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE NAVIGATION DRAWER */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav-drawer ${menuOpen ? "is-visible" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-nav-inner">
          {/* DRAWER HEADING */}
          <div className="mobile-menu-heading">
            <div>
              <span className="mobile-menu-eyebrow">
                Explore Fuselage
              </span>

              <h2>Discover more.</h2>
            </div>

            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>

          {/* MOBILE NAVIGATION LINKS */}
          <div className="mobile-links-list">
            {navLinks.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""}`
                }
              >
                <span className="mobile-link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>

                <span className="mobile-link-arrow">↗</span>
              </NavLink>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <div className="mobile-menu-contact">
            <span className="mobile-menu-eyebrow">
              Have a project in mind?
            </span>

            <Link to="/contact" className="mobile-quote-button">
              Talk to our team <span>↗</span>
            </Link>

            <a
              href={SITE_CONFIG.contact.phoneLink}
              className="mobile-phone"
            >
              {SITE_CONFIG.contact.phone}
            </a>
          </div>

          {/* MOBILE THEME SETTING */}
          <div className="mobile-menu-settings">
            <button
              type="button"
              className="mobile-theme-button"
              onClick={toggleTheme}
            >
              {theme === "light" ? "☾ Dark mode" : "☀ Light mode"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
