import React, { useState } from 'react';
import { MH_DISTRICTS } from '../data/products';
import { useLang } from '../i18n/LangContext';
import './ContactPage.css';

const ContactPage = () => {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: 'Nagpur',
    acres: '10',
    interest: 'Buying an Agriculture Drone',
    crop: 'Cotton',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page page-enter">
      {/* Header Banner */}
      <section className="contact-hero-banner">
        <div className="container">
          <span className="section-eyebrow">{t.contact.badge}</span>
          <h1 className="section-heading">
            {lang === 'mr' ? 'आर्वी, नागपूर केंद्राशी' : lang === 'hi' ? 'आर्वी, नागपुर केंद्र से' : 'Connect with'}{' '}
            <span className="highlight">
              {lang === 'mr' ? 'थेट संपर्क साधा' : lang === 'hi' ? 'सीधे संपर्क करें' : 'Our Drone Engineers'}
            </span>
          </h1>
          <p className="section-subheading">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-pad contact-grid-section">
        <div className="container contact-main-grid">
          {/* Left: Contact Info & Hub Details */}
          <div className="contact-info-col">
            <div className="hub-identity-card card">
              <span className="hub-state-label">Official Maharashtra Hub</span>
              <h2 className="hub-name">Fuselage Innovations Regional Center</h2>
              <p className="hub-desc">
                Covering Vidarbha, Marathwada, Khandesh and Western Maharashtra with rapid-dispatch flight demo vans.
              </p>

              <div className="hub-coords-list">
                <div className="coord-item">
                  <span className="coord-icon">📍</span>
                  <div>
                    <strong>Operational Hub Address:</strong>
                    <p>{t.contact.hubAddress}</p>
                  </div>
                </div>

                <div className="coord-item">
                  <span className="coord-icon">📞</span>
                  <div>
                    <strong>Direct Helplines:</strong>
                    <p>
                      <a href="tel:+919822054321">+91 98220 54321</a> / <a href="tel:+91712258900">+91 (0712) 258900</a>
                    </p>
                  </div>
                </div>

                <div className="coord-item">
                  <span className="coord-icon">✉️</span>
                  <div>
                    <strong>Email Support:</strong>
                    <p>
                      <a href="mailto:maharashtra@fuselage.co.in">maharashtra@fuselage.co.in</a>
                    </p>
                  </div>
                </div>

                <div className="coord-item">
                  <span className="coord-icon">⏰</span>
                  <div>
                    <strong>Operating Hours:</strong>
                    <p>Monday – Saturday: 8:00 AM – 7:30 PM (Field trials 6 AM - 11 AM)</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/919822054321?text=${encodeURIComponent(
                  'Hello Fuselage Innovations Maharashtra! I want to schedule a drone demonstration at Arvi, Nagpur Hub.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                💬 Instant WhatsApp Chat with Nagpur Desk
              </a>
            </div>

            {/* Map Simulation Box */}
            <div className="map-view-card card">
              <div className="map-inner-placeholder">
                <span className="map-pin-big">📍</span>
                <strong>Arvi, Wardha / Nagpur District Hub</strong>
                <span>Easily reachable via Nagpur-Amravati Highway & Wardha Road</span>
              </div>
            </div>
          </div>

          {/* Right: Farmer Booking / Inquiry Form */}
          <div className="contact-form-col">
            <div className="inquiry-form-card card">
              <h2 className="form-heading">
                {lang === 'mr' ? 'शेतात डेमो / कोटेशन फॉर्म' : lang === 'hi' ? 'खेत डेमो / कोटेशन फॉर्म' : 'Book Farm Demo / Quote'}
              </h2>
              <p className="form-subtext">
                Fill the quick details below. Our field pilot will reach out with customized drone options.
              </p>

              {submitted ? (
                <div className="form-sent-confirmation">
                  <div className="confirm-icon">✅</div>
                  <h3 className="confirm-title">Request Registered Successfully!</h3>
                  <p className="confirm-text">
                    Thank you, <strong>{formData.name}</strong>. Our Arvi, Nagpur technical team will call you at{' '}
                    <strong>{formData.phone}</strong> today with full details and subsidy guidance.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="farmer-inquiry-form">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Full Name (पूर्ण नाव) *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Patil"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-field">
                      <label>Mobile Number (मोबाईल नंबर) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98220 XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Maharashtra District (जिल्हा) *</label>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="form-control"
                      >
                        {MH_DISTRICTS.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label>Farm Size in Acres (शेती क्षेत्र) *</label>
                      <input
                        type="number"
                        name="acres"
                        required
                        min="1"
                        max="5000"
                        placeholder="e.g. 15"
                        value={formData.acres}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Primary Crop (मुख्य पीक)</label>
                      <select
                        name="crop"
                        value={formData.crop}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="Cotton">Cotton (कापूस)</option>
                        <option value="Soybean">Soybean (सोयाबीन)</option>
                        <option value="Sugarcane">Sugarcane (ऊस)</option>
                        <option value="Orange/Citrus">Nagpur Orange / Citrus (संत्रा/मोसंबी)</option>
                        <option value="Paddy/Rice">Paddy / Rice (भात/धान)</option>
                        <option value="Pomegranate">Pomegranate (डाळिंब)</option>
                        <option value="Other">Other Crops</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label>I Am Interested In (मला हवे आहे):</label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="Buying an Agriculture Drone">Buying an Agriculture Drone (खरेदी)</option>
                        <option value="Per-Acre Spraying Service">Per-Acre Spraying Service (भाडेतत्त्वावर फवारणी)</option>
                        <option value="DGCA Pilot Training Course">DGCA Pilot Training Course (पायलट प्रशिक्षण)</option>
                        <option value="Govt Subsidy Help (SMAM/Drone Didi)">Govt Subsidy Help (शासकीय अनुदान)</option>
                        <option value="FPO Custom Hiring Center">FPO / CHC Setup (शेतकरी गट)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Additional Notes / Village Details (पर्यायी)</label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="e.g. Village near Arvi / Taluka / Specific query..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block form-submit-btn">
                    <span>Send Request to Arvi, Nagpur Center</span>
                    <span className="arrow-btn">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

