import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/products';
import { useLang } from '../i18n/LangContext';
import './ServicesPage.css';

const ServicesPage = () => {
  const { lang, t } = useLang();
  const [acres, setAcres] = useState(15);

  // Interactive per-acre savings math
  const manualLaborCostPerAcre = 800; // Manual tractor/labor spray cost per acre
  const droneSprayingCostPerAcre = 350; // Drone service cost per acre
  const waterSavedPerAcreLiters = 180; // 200L manual vs 20L drone

  const totalManualCost = acres * manualLaborCostPerAcre;
  const totalDroneCost = acres * droneSprayingCostPerAcre;
  const netSavingsMoney = totalManualCost - totalDroneCost;
  const netWaterSaved = acres * waterSavedPerAcreLiters;
  const hoursSaved = (acres * 1.5).toFixed(0); // Manual takes ~2h/acre, drone ~10m/acre

  return (
    <div className="services-page page-enter">
      {/* Page Header */}
      <section className="services-hero-banner">
        <div className="container">
          <span className="section-eyebrow">{t.services.badge}</span>
          <h1 className="section-heading">
            {lang === 'mr' ? 'शेतकऱ्यांसाठी' : lang === 'hi' ? 'किसानों के लिए' : 'End-to-End Solutions:'}{' '}
            <span className="highlight">
              {lang === 'mr' ? 'सर्वसमावेशक शेती सेवा' : lang === 'hi' ? 'सम्पूर्ण कृषि ड्रोन सेवाएं' : 'Drone Services & DaaS'}
            </span>
          </h1>
          <p className="section-subheading">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Interactive Per-Acre Spraying Savings Calculator */}
      <section className="section-pad calculator-section">
        <div className="container">
          <div className="calculator-card card">
            <div className="calc-header-block">
              <span className="calc-eyebrow">Interactive Savings Tool</span>
              <h2 className="calc-title">{t.services.calculatorTitle}</h2>
              <p className="calc-desc">{t.services.calculatorDesc}</p>
            </div>

            <div className="calc-body-grid">
              {/* Slider Input */}
              <div className="calc-input-panel">
                <label className="input-range-label">
                  <span>Enter Your Farm Size:</span>
                  <strong className="acres-highlight">{acres} {t.common.acres}</strong>
                </label>
                <input
                  type="range"
                  min="2"
                  max="150"
                  step="1"
                  value={acres}
                  onChange={(e) => setAcres(Number(e.target.value))}
                  className="acres-slider"
                />
                <div className="range-milestones">
                  <span>2 Acres (Small)</span>
                  <span>25 Acres (Medium)</span>
                  <span>100+ Acres (Commercial)</span>
                </div>

                <div className="quick-acre-pills">
                  {[5, 10, 20, 40, 75].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`acre-pill-btn ${acres === val ? 'active' : ''}`}
                      onClick={() => setAcres(val)}
                    >
                      {val} Acres
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Savings Results */}
              <div className="calc-results-panel">
                <div className="results-metric-box highlight-box">
                  <span className="res-lbl">Estimated Money Saved per Spray:</span>
                  <span className="res-val highlight-gold">
                    ₹{netSavingsMoney.toLocaleString('en-IN')}
                  </span>
                  <span className="res-sub">Drone costs ₹{totalDroneCost.toLocaleString('en-IN')} vs Manual ₹{totalManualCost.toLocaleString('en-IN')}</span>
                </div>

                <div className="results-sub-metrics">
                  <div className="sub-metric">
                    <span className="s-icon">💧</span>
                    <div>
                      <span className="s-val">{netWaterSaved.toLocaleString('en-IN')} Liters</span>
                      <span className="s-lbl">Fresh Water Saved</span>
                    </div>
                  </div>

                  <div className="sub-metric">
                    <span className="s-icon">⏳</span>
                    <div>
                      <span className="s-val">~{hoursSaved} Hours Saved</span>
                      <span className="s-lbl">Done in 1-2 Hours Total</span>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary btn-block">
                  Book Spraying for {acres} Acres in Arvi / Nagpur →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Full Grid */}
      <section className="section-pad all-services-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">Comprehensive Fleet Operations</span>
            <h2 className="section-heading">Our Service Portfolio in Maharashtra</h2>
          </div>

          <div className="services-full-grid">
            {SERVICES.map((s) => (
              <div key={s.id} className="service-deep-card card">
                <div className="service-top-row">
                  <span className="service-big-icon">{s.icon}</span>
                  <span className="service-price-tag">{s.price}</span>
                </div>

                <h3 className="service-heading">{s.title}</h3>
                <p className="service-full-text">{s.desc}</p>

                <div className="service-action-bottom">
                  <Link to="/contact" className="btn btn-outline btn-block">
                    {s.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Academy Spotlight Banner */}
      <section className="section-pad academy-section">
        <div className="container">
          <div className="academy-card card">
            <div className="academy-content">
              <span className="academy-eyebrow">DGCA Remote Pilot Certification</span>
              <h2 className="academy-heading">
                Become a Certified Drone Pilot at Arvi, Nagpur Academy
              </h2>
              <p className="academy-desc">
                Learn to fly commercial agriculture and survey drones. 5-day comprehensive course with flight simulator, real quadcopter hours, and DGCA Remote Pilot Certificate upon graduation.
              </p>
              <ul className="academy-perks">
                <li>✓ DGCA Approved Curriculum & Authorized Instructors</li>
                <li>✓ Hands-on flight hours on FIA QD10 agriculture drones</li>
                <li>✓ 100% placement support with Maharashtra FPOs & Agri-businesses</li>
                <li>✓ Eligibility for Namo Drone Didi & Rural Youth Entrepreneurship loans</li>
              </ul>
              <div className="academy-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Enrol for Upcoming Batch (Arvi, Nagpur)
                </Link>
                <a href="tel:+919822054321" className="btn btn-outline btn-lg">
                  Call Course Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

