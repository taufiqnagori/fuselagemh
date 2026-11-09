import { useLang } from '../i18n/LangContext';
import './Services.css';

const Services = () => {
  const { t } = useLang();

  return (
    <section id="services" className="services-section">
      <div className="section-label">{t.services.sectionLabel}</div>
      <h2 className="section-title">{t.services.title}</h2>
      <p className="section-subtitle">{t.services.subtitle}</p>

      <div className="services-grid">
        {t.services.items.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon-wrap">
              <span className="service-icon">{s.icon}</span>
              <div className="service-icon-glow" />
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

