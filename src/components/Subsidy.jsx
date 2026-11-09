import { useLang } from '../i18n/LangContext';
import './Subsidy.css';

const Subsidy = () => {
  const { t } = useLang();

  return (
    <section id="subsidy" className="subsidy-section">
      <div className="subsidy-bg" />
      <div className="section-label">{t.subsidy.sectionLabel}</div>
      <h2 className="section-title subsidy-title">
        {t.subsidy.title}{' '}
        <span className="title-highlight">{t.subsidy.titleHighlight}</span>
      </h2>
      <p className="section-subtitle">{t.subsidy.subtitle}</p>

      <div className="subsidy-cards">
        {t.subsidy.schemes.map((s, i) => (
          <div key={i} className={`subsidy-card card-${i}`}>
            <div className="subsidy-badge">{s.discount}</div>
            <h3 className="subsidy-name">{s.name}</h3>
            <p className="subsidy-desc">{s.desc}</p>
            <div className="subsidy-cap">{s.cap}</div>
            <button
              className="subsidy-cta"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.subsidy.cta} →
            </button>
          </div>
        ))}
      </div>

      {/* Government logos strip */}
      <div className="govt-strip">
        <div className="govt-logo">🇮🇳 Government of India</div>
        <div className="govt-logo">🌾 Ministry of Agriculture</div>
        <div className="govt-logo">🚁 DGCA Approved</div>
        <div className="govt-logo">🏛️ SMAM Scheme</div>
        <div className="govt-logo">👩‍🌾 Namo Drone Didi</div>
      </div>
    </section>
  );
};

export default Subsidy;

