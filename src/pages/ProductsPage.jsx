import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useLang } from '../i18n/LangContext';
import './ProductsPage.css';

const ProductsPage = () => {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState('all'); // 'all' | 'Spraying' | 'Surveillance'

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="products-page page-enter">
      {/* Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="section-eyebrow">DGCA Type Certified Aircraft</span>
          <h1 className="section-heading">
            {lang === 'mr' ? 'फ्यूजलेज' : lang === 'hi' ? 'फ्यूजलेज' : 'Fuselage'}{' '}
            <span className="highlight">
              {lang === 'mr' ? 'ड्रोन फ्लीट' : lang === 'hi' ? 'ड्रोन बेड़ा' : 'Drone Fleet'}
            </span>
          </h1>
          <p className="section-subheading">
            {lang === 'mr'
              ? 'महाराष्ट्र शासनाच्या SMAM योजनेअंतर्गत 50% ते 80% शासकीय अनुदानासाठी पात्र.'
              : lang === 'hi'
              ? 'महाराष्ट्र शासन की SMAM योजना के अंतर्गत 50% से 80% सब्सिडी हेतु पूर्णतः अनुमोदित।'
              : 'Engineered specifically for Indian agrarian environments, weather conditions, and precision spraying.'}
          </p>

          {/* Filter Pills */}
          <div className="catalog-filters">
            <button
              type="button"
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t.products.filterAll} ({PRODUCTS.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'Spraying' ? 'active' : ''}`}
              onClick={() => setFilter('Spraying')}
            >
              💧 {t.products.filterSpray} (2)
            </button>
            <button
              type="button"
              className={`filter-pill ${filter === 'Surveillance' ? 'active' : ''}`}
              onClick={() => setFilter('Surveillance')}
            >
              🛰️ {t.products.filterSurveillance} (2)
            </button>
          </div>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="section-pad catalog-grid-section">
        <div className="container">
          <div className="catalog-grid">
            {filteredProducts.map((drone) => (
              <div key={drone.id} className="catalog-drone-card card">
                <div className="catalog-img-holder">
                  <span className={`drone-tag-badge badge-${drone.badgeType}`}>{drone.badge}</span>
                  {drone.dgca && <span className="dgca-stamp">✓ DGCA Certified</span>}
                  <img
                    src={drone.heroImage}
                    alt={drone.name}
                    className="catalog-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&q=80';
                    }}
                  />
                </div>

                <div className="catalog-content">
                  <div className="catalog-title-group">
                    <span className="catalog-cat">{drone.category} Drone</span>
                    <h2 className="catalog-name">{drone.name}</h2>
                    <p className="catalog-tagline">{drone.tagline}</p>
                  </div>

                  <p className="catalog-short-desc">{drone.shortDesc}</p>

                  {/* Key Specifications Matrix */}
                  <div className="catalog-specs-table">
                    <div className="c-spec-row">
                      <span>Payload / Tank:</span>
                      <strong>{drone.specs.tank || drone.specs.payload || drone.specs.sensors}</strong>
                    </div>
                    <div className="c-spec-row">
                      <span>Flight Time:</span>
                      <strong>{drone.specs.flight}</strong>
                    </div>
                    <div className="c-spec-row">
                      <span>Control Range:</span>
                      <strong>{drone.specs.range}</strong>
                    </div>
                    <div className="c-spec-row">
                      <span>Certification:</span>
                      <strong className="cert-check">✓ {drone.specs.certification}</strong>
                    </div>
                  </div>

                  {/* Price & Subsidy Box */}
                  <div className="catalog-pricing-card">
                    <div className="price-col">
                      <span className="price-lbl">{t.products.startingAt}</span>
                      <span className="price-val">{drone.price}</span>
                    </div>
                    {drone.subsidy && (
                      <div className="price-col subsidy-col">
                        <span className="price-lbl">{t.products.effectivePrice}</span>
                        <span className="price-val highlight-gold">
                          ₹{(drone.priceNumber * 0.5).toLocaleString('en-IN')}*
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="catalog-cta-row">
                    <Link to={`/products/${drone.slug}`} className="btn btn-outline btn-block">
                      {t.common.viewDetails}
                    </Link>
                    <Link to="/contact" className="btn btn-primary btn-block">
                      {t.common.bookDemo}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Hub Pickup Banner */}
          <div className="hub-stock-note">
            <span className="stock-icon">📦</span>
            <div>
              <strong>Instant Availability & Spares at Arvi, Nagpur Hub</strong>
              <p>Batteries, propellers, nozzles and flight motors in ready stock for Maharashtra farmers.</p>
            </div>
            <a href="tel:+919822054321" className="btn btn-outline btn-sm">
              Check Stock
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="section-pad comparison-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">Detailed Comparison</span>
            <h2 className="section-heading">Which Drone Fits Your Farming Needs?</h2>
          </div>

          <div className="table-responsive-wrapper card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Primary Application</th>
                  <th>Tank / Sensor</th>
                  <th>Flight Endurance</th>
                  <th>Govt Subsidy</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((d) => (
                  <tr key={d.id}>
                    <td>
                      <strong>{d.name}</strong>
                    </td>
                    <td>{d.category}</td>
                    <td>{d.specs.tank || d.specs.sensors}</td>
                    <td>{d.specs.flight}</td>
                    <td>
                      {d.subsidy ? (
                        <span className="subsidy-badge-cell">50% - 80% Eligible</span>
                      ) : (
                        <span className="no-subsidy-cell">Commercial</span>
                      )}
                    </td>
                    <td>
                      <Link to={`/products/${d.slug}`} className="table-link">
                        View Specs →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

