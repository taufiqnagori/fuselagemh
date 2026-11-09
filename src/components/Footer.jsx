
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";
import { PRODUCTS } from "../data/products";
import { useLang } from "../i18n/LangContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();

  const productLinks = PRODUCTS.slice(0, 4);

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Products", to: "/products" },
    { label: "Services", to: "/services" },
    { label: "Subsidy Information", to: "/subsidy" },
    { label: "Contact Us", to: "/contact" },
  ];

  const socialLinks = [
    { label: "Instagram", url: SITE_CONFIG.social.instagram },
    { label: "Facebook", url: SITE_CONFIG.social.facebook },
    { label: "YouTube", url: SITE_CONFIG.social.youtube },
    { label: "LinkedIn", url: SITE_CONFIG.social.linkedin },
  ].filter((item) => item.url);

  return (
    <footer className="site-footer">
      <section className="footer-cta-section">
        <div className="container footer-cta-inner">
          <div className="footer-cta-content">
            <span className="footer-eyebrow">
              LET'S BUILD SOMETHING BETTER
            </span>

            <h2>
              Ready to explore the future of
              <span> agriculture?</span>
            </h2>

            <p>
              Connect with Fuselage Innovations to learn about agricultural
              drone technology and available solutions for your requirements.
            </p>
          </div>

          <div className="footer-cta-actions">
            <Link to="/contact" className="footer-cta-primary">
              Talk to our team <span>↗</span>
            </Link>

            <a
              href={SITE_CONFIG.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-secondary"
            >
              WhatsApp us
            </a>
          </div>

          <div className="footer-cta-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <div className="container footer-main-grid">
        <div className="footer-brand-column">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark" aria-hidden="true">
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
              </svg>
            </span>

            <span className="footer-brand-titles">
              <strong>FUSELAGE</strong>
              <small>INNOVATIONS</small>
            </span>
          </Link>

          <p className="footer-brand-description">
            {SITE_CONFIG.company.description}
          </p>

          <div className="footer-location-chip">
            <span>⌖</span>
            <span>{SITE_CONFIG.address.city}, Maharashtra, India</span>
          </div>

          {socialLinks.length > 0 && (
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer-column">
          <h3 className="footer-column-title">Explore</h3>

          <ul className="footer-link-list">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>
                  <span>↗</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-column-title">Our Products</h3>

          <ul className="footer-link-list">
            {productLinks.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.slug || product.id}`}>
                  <span>↗</span>
                  {product.name}
                </Link>
              </li>
            ))}

            <li>
              <Link to="/products">
                <span>↗</span>
                View all products
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contact-column">
          <h3 className="footer-column-title">Get in Touch</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">⌖</span>
            <div>
              <strong>Our Location</strong>
              <a
                href={SITE_CONFIG.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_CONFIG.address.fullAddress}
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">☎</span>
            <div>
              <strong>Phone</strong>
              <a href={SITE_CONFIG.contact.phoneLink}>
                {SITE_CONFIG.contact.phone}
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉</span>
            <div>
              <strong>Email</strong>
              <a href={SITE_CONFIG.contact.emailLink}>
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">◷</span>
            <div>
              <strong>Business Hours</strong>
              <span>
                {SITE_CONFIG.businessHours.weekdays},{" "}
                {SITE_CONFIG.businessHours.timing}
              </span>
              <span>{SITE_CONFIG.businessHours.sunday}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.company.name}.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a
              href={SITE_CONFIG.company.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website ↗
            </a>
          </div>

          <span className="footer-made-note">
            Designed for modern agriculture.
          </span>
        </div>
      </div>
    </footer>
  );
}
