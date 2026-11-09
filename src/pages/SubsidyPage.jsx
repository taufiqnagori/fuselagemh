import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, SUBSIDY_SCHEMES } from '../data/products';
import { useLang } from '../i18n/LangContext';
import './SubsidyPage.css';

const SubsidyPage = () => {
  const { lang, t } = useLang();

  // Calculator State
  const [selectedDroneId, setSelectedDroneId] = useState('fia-qd10');
  const [beneficiaryType, setBeneficiaryType] = useState('small_women'); // 'small_women' (50%) | 'general' (40%) | 'fpo' (75%) | 'shg' (80%)

  const selectedDrone = PRODUCTS.find((p) => p.id === selectedDroneId) || PRODUCTS[0];

  const schemeProfiles = {
    small_women: {
      name: 'Small, Marginal, SC/ST & Women Farmers (SMAM)',
      rate: 0.5,
      cap: 500000,
      description: 'Up to 50% financial assistance (maximum ₹5 Lakh) directly disbursed via MahaDBT / AgriMachinery DBT.',
    },
    general: {
      name: 'Other Individual Farmers (General Category)',
      rate: 0.4,
      cap: 400000,
      description: 'Up to 40% financial aid (maximum ₹4 Lakh) for general landholder farmers in Maharashtra.',
    },
    fpo: {
      name: 'Farmer Producer Organizations (FPOs) & CHCs',
      rate: 0.75,
      cap: 750000,
      description: 'Up to 75% financial support (maximum ₹7.5 Lakh) for cooperative groups providing community custom hiring spraying.',
    },
    shg: {
      name: 'Namo Drone Didi Scheme (Women Self-Help Groups)',
      rate: 0.8,
      cap: 800000,
      description: 'Up to 80% package subsidy (maximum ₹8 Lakh) including drone, flight simulator, training, and remote pilot certificate.',
    },
  };

  const activeProfile = schemeProfiles[beneficiaryType];
  const calculatedSubsidy = Math.min(selectedDrone.priceNumber * activeProfile.rate, activeProfile.cap);
  const netFarmerInvestment = Math.max(0, selectedDrone.priceNumber - calculatedSubsidy);
  const estimatedMonthlyEMI = Math.round((netFarmerInvestment * 1.09) / 36); // Rough 3-year term estimate

  return (
    <div className="subsidy-page page-enter">
      {/* Header Banner */}
      <section className="subsidy-hero-banner">
        <div className="container">
          <span className="section-eyebrow">{t.subsidy.badge}</span>
          <h1 className="section-heading">
            {lang === 'mr' ? 'शासकीय ड्रोन अनुदान' : lang === 'hi' ? 'सरकारी ड्रोन सब्सिडी' : 'Maharashtra Drone Subsidy'}{' '}
            <span className="highlight-gold">
              {lang === 'mr' ? 'मार्गदर्शन व कॅल्क्युलेटर' : lang === 'hi' ? 'कैलकुलेटर एवं सहायता' : 'Calculator & Guide'}
            </span>
          </h1>
          <p className="section-subheading">
            Fuselage Innovations provides 100% free paperwork assistance to ensure your subsidy claim is approved on the MahaDBT / Agrimachinery portal.
          </p>
        </div>
      </section>

      {/* Interactive Subsidy Calculator */}
      <section className="section-pad calc-wrapper-section">
        <div className="container">
          <div className="subsidy-calc-card card">
            <div className="calc-header-tag">
              <span>🏛️ Maharashtra State Direct Benefit Transfer (DBT) Estimator</span>
            </div>

            <div className="calc-dual-grid">
              {/* Inputs Selection */}
              <div className="calc-inputs-col">
                {/* Step 1: Beneficiary Profile */}
                <div className="form-step-group">
                  <label className="step-label">1. Select Your Beneficiary Category:</label>
                  <div className="category-select-options">
                    {Object.entries(schemeProfiles).map(([key, data]) => (
                      <button
                        key={key}
                        type="button"
                        className={`cat-option-btn ${beneficiaryType === key ? 'selected' : ''}`}
                        onClick={() => setBeneficiaryType(key)}
                      >
                        <span className="cat-radio-circle"></span>
                        <div className="cat-text-wrap">
                          <strong>{data.name}</strong>
                          <span className="cat-rate-tag">{(data.rate * 100).toFixed(0)}% Subsidy</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Drone Model Selection */}
                <div className="form-step-group">
                  <label className="step-label">2. Select Desired Drone Model:</label>
                  <div className="drone-select-pills">
                    {PRODUCTS.filter((p) => p.subsidy).map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        className={`drone-pill-select ${selectedDroneId === p.id ? 'active' : ''}`}
                        onClick={() => setSelectedDroneId(p.id)}
                      >
                        <strong>{p.name}</strong>
                        <span>({p.specs.tank || p.specs.sensors})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Calculation Output Display */}
              <div className="calc-output-col">
                <div className="output-glass-box card">
                  <h3 className="breakdown-title">Estimated Subsidy Breakdown</h3>
                  <p className="breakdown-subtitle">For {selectedDrone.name} ({activeProfile.name})</p>

                  <div className="financial-rows-list">
                    <div className="fin-row">
                      <span>Ex-Factory Retail Price:</span>
                      <strong>₹{selectedDrone.priceNumber.toLocaleString('en-IN')}</strong>
                    </div>

                    <div className="fin-row subsidy-discount-row">
                      <span>Govt Financial Assistance:</span>
                      <strong className="highlight-gold">- ₹{Math.round(calculatedSubsidy).toLocaleString('en-IN')}</strong>
                    </div>

                    <div className="fin-row divider-row"></div>

                    <div className="fin-row net-cost-row">
                      <span>Your Net Payable Amount:</span>
                      <strong className="net-price-value">
                        ₹{Math.round(netFarmerInvestment).toLocaleString('en-IN')}*
                      </strong>
                    </div>

                    <div className="fin-row emi-estimate-row">
                      <span>Approximate Bank EMI (36 Months):</span>
                      <span className="emi-val">~₹{estimatedMonthlyEMI.toLocaleString('en-IN')} / month</span>
                    </div>
                  </div>

                  <p className="subsidy-note">
                    *Taxes and accessories may vary based on Maharashtra RTO/DGCA registration norms.
                  </p>

                  <div className="calc-action-buttons">
                    <Link to="/contact" className="btn btn-primary btn-block">
                      Apply for This Subsidy via Arvi Hub →
                    </Link>
                    <a
                      href={`https://wa.me/919822054321?text=${encodeURIComponent(
                        `Hello! I checked the subsidy calculator for ${selectedDrone.name} under ${activeProfile.name}. Please guide me on documentation.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-block"
                    >
                      💬 WhatsApp Subsidy Officer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Govt Schemes Details */}
      <section className="section-pad schemes-info-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">Schemes in Maharashtra</span>
            <h2 className="section-heading">Government Drone Subsidies Explained</h2>
          </div>

          <div className="schemes-cards-grid">
            {t.subsidy.schemes.map((scheme, i) => (
              <div key={i} className="scheme-info-card card">
                <span className="scheme-discount-badge">{scheme.pct}</span>
                <h3 className="scheme-card-title">{scheme.name}</h3>
                <span className="scheme-cap-pill">{scheme.max}</span>
                <p className="scheme-card-desc">{scheme.desc}</p>
                <div className="scheme-card-footer">
                  <Link to="/contact" className="btn btn-outline btn-block">
                    Inquire for Eligibility →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist for MahaDBT */}
      <section className="section-pad checklist-section">
        <div className="container">
          <div className="checklist-card card">
            <div className="checklist-left">
              <span className="check-eyebrow">Ready to Apply?</span>
              <h2 className="check-heading">Required Documents for Maharashtra Subsidy</h2>
              <p className="check-desc">
                Keep these documents ready in PDF/photo format. Our documentation desk in Arvi, Nagpur will upload and track your application free of cost.
              </p>
              <ul className="docs-list">
                <li>✓ 7/12 Extract (७/१२ उतारा) & 8A (८-अ) of agricultural land</li>
                <li>✓ Aadhaar Card (linked with mobile number for OTP)</li>
                <li>✓ Bank Passbook copy with Aadhaar-linked NPCI status</li>
                <li>✓ Caste Certificate (for SC/ST small farmer 50% category)</li>
                <li>✓ FPO Registration Certificate (if applying as an organization)</li>
                <li>✓ Self-Declaration Form (supplied by Fuselage Innovations)</li>
              </ul>
            </div>

            <div className="checklist-right">
              <div className="help-box">
                <span className="help-icon">🤝</span>
                <h3>Free Documentation Desk</h3>
                <p>Call our Arvi, Nagpur liaison desk for help with MahaDBT filing.</p>
                <a href="tel:+919822054321" className="btn btn-primary btn-block">
                  📞 Call +91 98220 54321
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubsidyPage;

