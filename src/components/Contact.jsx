import { useLang } from '../i18n/LangContext';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const { t } = useLang();
  const form = t.contact.form;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', district: '', interest: '', message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />

      <div className="contact-container">
        {/* Left: Info */}
        <div className="contact-info">
          <div className="section-label">{t.contact.sectionLabel}</div>
          <h2 className="section-title contact-title">{t.contact.title}</h2>
          <p className="contact-subtitle">{t.contact.subtitle}</p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>{t.contact.address}</strong>
                <span>{t.contact.addressDetail}</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone / WhatsApp</strong>
                <a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.contact.whatsapp}
          </a>

          {/* Map placeholder */}
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <span>Pune, Maharashtra</span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✅</div>
              <p>{form.success}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{form.name}</label>
                  <input
                    type="text" name="name" required
                    placeholder={form.name}
                    value={formData.name} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>{form.phone}</label>
                  <input
                    type="tel" name="phone" required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{form.district}</label>
                  <input
                    type="text" name="district"
                    placeholder="e.g. Nashik, Pune, Aurangabad"
                    value={formData.district} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>{form.interest}</label>
                  <select name="interest" value={formData.interest} onChange={handleChange}>
                    <option value="">{form.interest}</option>
                    {form.interests.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>{form.message}</label>
                <textarea
                  name="message" rows={4}
                  placeholder={form.message}
                  value={formData.message} onChange={handleChange}
                />
              </div>

              <button type="submit" className="form-submit">
                <span>{form.submit}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10h16M12 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

