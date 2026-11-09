import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useLang } from '../i18n/LangContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { lang, t } = useLang();

  // Find product by id or slug
  const product = PRODUCTS.find((p) => p.id === id || p.slug === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const [activeImage, setActiveImage] = useState(product.images[0] || product.heroImage);
  const [selectedFarmerType, setSelectedFarmerType] = useState('small'); // 'small' (50%) | 'fpo' (75%) | 'shg' (80%)
  const [inquirySent, setInquirySent] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');

  // Calculate subsidy based on selected farmer category
  const subsidyPct = selectedFarmerType === 'shg' ? 0.8 : selectedFarmerType === 'fpo' ? 0.75 : 0.5;
  const subsidyAmount = Math.min(
    product.priceNumber * subsidyPct,
    selectedFarmerType === 'shg' ? 800000 : selectedFarmerType === 'fpo' ? 750000 : 500000
  );
  const farmerPayable = Math.max(0, product.priceNumber - subsidyAmount);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="product-detail-page page-enter">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-nav-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li><span>/</span></li>
            <li><Link to="/products">Fleet</Link></li>
            <li><span>/</span></li>
            <li className="active">{product.name}</li>
          </ul>
        </div>
      </div>

      {/* Main Product Showcase Header */}
      <section className="section-pad detail-main-section">
        <div className="container detail-container-grid">
          {/* Left Column: Interactive Image Gallery */}
          <div className="gallery-column">
            <div className="gallery-main-stage card">
              <span className={`detail-badge badge-${product.badgeType}`}>{product.badge}</span>
              {product.dgca && <span className="dgca-chip">✓ DGCA Type Certified</span>}
              <img
                src={activeImage}
                alt={product.name}
                className="detail-main-img"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&q=80';
                }}
              />
            </div>

            {/* Thumbnail Selectors */}
            <div className="gallery-thumbnails-row">
              {product.images.map((imgUrl, i) => (
                <button
                  key={i}
                  type="button"
                  className={`thumb-btn ${activeImage === imgUrl ? 'selected' : ''}`}
                  onClick={() => setActiveImage(imgUrl)}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} angle ${i + 1}`}
                    className="thumb-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=200&q=80';
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Hub Quick Info Box */}
            <div className="hub-status-card">
              <span className="hub-badge-dot"></span>
              <div>
                <strong>Stocked at Arvi, Nagpur Hub</strong>
                <p>On-site flight demonstration, remote pilot training, and spare parts ready.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs & Purchase Actions */}
          <div className="product-info-column">
            <div className="detail-header-block">
              <span className="detail-category">{product.category} Aircraft</span>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-tagline">{product.tagline}</p>
            </div>

            {/* Pricing Strip */}
            <div className="detail-pricing-box card">
              <div className="price-primary-row">
                <div className="price-item">
                  <span className="price-label">Ex-Factory Base Price</span>
                  <span className="price-value">{product.price}</span>
                </div>
                {product.subsidy && (
                  <div className="price-item subsidy-item">
                    <span className="price-label">Estimated Post-Subsidy Cost</span>
                    <span className="price-value highlight-gold">
                      ₹{Math.round(farmerPayable).toLocaleString('en-IN')}*
                    </span>
                  </div>
                )}
              </div>

              {product.subsidy && (
                <div className="subsidy-mini-selector">
                  <span className="selector-title">Select Your Scheme:</span>
                  <div className="scheme-buttons">
                    <button
                      type="button"
                      className={`scheme-btn ${selectedFarmerType === 'small' ? 'active' : ''}`}
                      onClick={() => setSelectedFarmerType('small')}
                    >
                      Individual / Women (50%)
                    </button>
                    <button
                      type="button"
                      className={`scheme-btn ${selectedFarmerType === 'fpo' ? 'active' : ''}`}
                      onClick={() => setSelectedFarmerType('fpo')}
                    >
                      FPO / CHC (75%)
                    </button>
                    <button
                      type="button"
                      className={`scheme-btn ${selectedFarmerType === 'shg' ? 'active' : ''}`}
                      onClick={() => setSelectedFarmerType('shg')}
                    >
                      Namo Drone Didi (80%)
                    </button>
                  </div>
                  <p className="subsidy-calc-summary">
                    Govt Pays: <strong>₹{Math.round(subsidyAmount).toLocaleString('en-IN')}</strong> • You Pay: <strong>₹{Math.round(farmerPayable).toLocaleString('en-IN')}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* In-depth Product Overview Description */}
            <div className="detail-desc-block">
              <h3 className="sub-title">Overview</h3>
              <p className="long-description-text">{product.longDesc}</p>
            </div>

            {/* Features Pill Grid */}
            <div className="features-pill-grid">
              {product.features.map((feat, i) => (
                <div key={i} className="feature-pill">
                  <span className="check">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Instant Callback Form for Farmers */}
            <div className="quick-inquiry-box card">
              <h4 className="inquiry-title">
                {lang === 'mr' ? 'आर्वी, नागपूर केंद्राकडून थेट कोटेशन मागवा' : lang === 'hi' ? 'आर्वी, नागपुर केंद्र से तुरंत कोटेशन प्राप्त करें' : 'Get Instant Maharashtra Quotation'}
              </h4>
              <p className="inquiry-desc">
                Leave your mobile number. Our agricultural drone engineer will call you in 15 minutes.
              </p>

              {inquirySent ? (
                <div className="inquiry-success-alert">
                  <span className="success-icon">✅</span>
                  <div>
                    <strong>Quotation Request Registered!</strong>
                    <p>Our Nagpur hub representative will call you at {phoneInput}.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="inquiry-form-inline">
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit Mobile Number (उदा. 98220XXXXX)"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="inquiry-input"
                  />
                  <button type="submit" className="btn btn-primary">
                    Request Call Back
                  </button>
                </form>
              )}

              <div className="whatsapp-call-or-row">
                <a
                  href={`https://wa.me/919822054321?text=${encodeURIComponent(
                    `Hello Fuselage! I want a quote for ${product.name} in Maharashtra.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm btn-block"
                >
                  💬 Chat with Drone Specialist on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Specifications Table */}
      <section className="section-pad tech-specs-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">Aerospace Precision Engineering</span>
            <h2 className="section-heading">Detailed Technical Specifications</h2>
          </div>

          <div className="specs-full-grid card">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="spec-tile">
                <span className="spec-key-name">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
                <strong className="spec-val-string">{val}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Crop Applications for Maharashtra */}
      <section className="section-pad use-cases-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">In-Field Applications</span>
            <h2 className="section-heading">Recommended Use Cases in Maharashtra</h2>
          </div>

          <div className="use-cases-grid">
            {product.useCases.map((useCase, idx) => (
              <div key={idx} className="use-case-card card">
                <div className="use-case-icon">🌱</div>
                <h4 className="use-case-name">{useCase}</h4>
                <p className="use-case-text">
                  Precision calibrated spray patterns designed to eliminate drift and maximize absorption.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;

