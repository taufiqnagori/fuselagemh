import { useLang } from '../i18n/LangContext';
import './About.css';

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="about-section">
      <div className="about-bg-shape" />

      <div className="about-container">
        {/* Left: Content */}
        <div className="about-content">
          <div className="section-label">{t.about.sectionLabel}</div>
          <h2 className="section-title about-title">
            {t.about.title}{' '}
            <span className="title-highlight">{t.about.titleHighlight}</span>
          </h2>
          <p className="about-story">{t.about.story}</p>
          <p className="about-mission">{t.about.mission}</p>

          {/* Certifications */}
          <div className="cert-badges">
            {[t.about.cert1, t.about.cert2, t.about.cert3, t.about.cert4].map((c, i) => (
              <div key={i} className="cert-badge">
                <span className="cert-icon">
                  {['🏆','📋','🚀','🇮🇳'][i]}
                </span>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="about-timeline">
          <h3 className="timeline-heading">Our Journey</h3>
          <div className="timeline">
            {t.about.milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">
                  <div className="dot-inner" />
                </div>
                <div className="timeline-body">
                  <span className="timeline-year">{m.year}</span>
                  <span className="timeline-label">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="about-stats">
        {t.stats.items.map((s, i) => (
          <div key={i} className="about-stat">
            <span className="about-stat-number">{s.number}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

