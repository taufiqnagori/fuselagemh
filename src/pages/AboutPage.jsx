import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import './AboutPage.css';

const AboutPage = () => {
  const { lang, t } = useLang();

  const milestones = [
    {
      year: '2020',
      title: 'Inception at Maker Village, Kochi',
      desc: 'Founded by aerospace pioneers with a mission to develop indigenous agricultural UAV systems for Indian smallholders.',
    },
    {
      year: '2021',
      title: 'DGCA Type Certification',
      desc: 'Achieved DGCA Type Certification for the FIA QD10 quadcopter, ensuring 100% legal flight airworthiness and safety.',
    },
    {
      year: '2022',
      title: '50,000+ Acres Milestone',
      desc: 'Scaled operations across southern states, proving ultra-low volume precision spraying on multiple crop varieties.',
    },
    {
      year: '2023',
      title: 'Maharashtra Hub Established in Arvi, Nagpur',
      desc: 'Setup dedicated regional flight testing, assembly, training and customer service headquarters in Arvi (Wardha/Nagpur).',
    },
    {
      year: '2024-25',
      title: 'Vidarbha & Pan-Maharashtra Expansion',
      desc: 'Over 2,50,000 acres sprayed, empowering 50,000+ farmers and women Self-Help Groups under Namo Drone Didi.',
    },
  ];

  return (
    <div className="about-page page-enter">
      {/* Page Header */}
      <section className="about-hero-banner">
        <div className="container">
          <span className="section-eyebrow">{t.about.badge}</span>
          <h1 className="section-heading">
            {t.about.title}{' '}
            <span className="highlight-text">{t.about.titleHighlight}</span>
          </h1>
          <p className="section-subheading">
            Bridging aerospace technology and Indian agriculture to double farm productivity and eliminate human toxicity.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="section-pad story-section">
        <div className="container story-grid">
          <div className="story-content-col">
            <span className="story-tag">Our Journey & Mission</span>
            <h2 className="story-heading">From Maker Village Kerala to the Heart of Vidarbha, Maharashtra</h2>
            <p className="story-paragraph">{t.about.storyP1}</p>
            <p className="story-paragraph">{t.about.storyP2}</p>
            <p className="story-paragraph">{t.about.storyP3}</p>

            <div className="founder-quote-card">
              <p className="quote-text">
                "Our mission is simple: no farmer in Maharashtra should have to walk with a heavy poisonous spray pump under scorching 42°C heat. Drones are the farmer's best aerial assistant."
              </p>
              <span className="quote-by">— Fuselage Innovations Engineering Team</span>
            </div>
          </div>

          <div className="story-visual-col">
            <div className="story-img-stage card">
              <img
                src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&q=80"
                alt="Fuselage Agriculture Drone Testing in Field"
                className="story-main-img"
              />
              <div className="experience-badge card">
                <span className="exp-num">5+</span>
                <span className="exp-lbl">Years of Indigenous UAV Innovation</span>
              </div>
            </div>

            <div className="hub-card-callout card">
              <span className="hub-callout-icon">📍</span>
              <div>
                <strong>Arvi, Nagpur Operational Base</strong>
                <p>Equipped with live flight proving grounds, certified repair benches, and telemetry tracking center.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="section-pad values-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">Core Standards</span>
            <h2 className="section-heading">Why Farmers Choose Fuselage MH</h2>
          </div>

          <div className="values-grid">
            {t.about.values.map((v, i) => (
              <div key={i} className="value-card card">
                <span className="val-icon">{['🏆', '🔧', '📱', '🏛️'][i]}</span>
                <h3 className="val-title">{v.title}</h3>
                <p className="val-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-pad timeline-section">
        <div className="container">
          <div className="text-center-block">
            <span className="section-eyebrow">Evolution</span>
            <h2 className="section-heading">Milestones & Proven Track Record</h2>
          </div>

          <div className="timeline-flow">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-block">
                <div className="timeline-badge-year">{item.year}</div>
                <div className="timeline-details card">
                  <h4 className="timeline-item-title">{item.title}</h4>
                  <p className="timeline-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arvi, Nagpur Hub Visit CTA */}
      <section className="section-pad hub-invitation-section">
        <div className="container">
          <div className="hub-invite-card card">
            <div className="hub-invite-left">
              <span className="invite-tag">📍 Visit Our Flight Academy</span>
              <h2 className="invite-title">{t.about.hubTitle}</h2>
              <p className="invite-text">{t.about.hubDesc}</p>
              <div className="invite-coords">
                <span>📌 Arvi Road, Wardha / Nagpur District, Maharashtra 442201</span>
                <span>📞 Direct Reception: +91 98220 54321</span>
              </div>
            </div>
            <div className="hub-invite-right">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Visit / Farm Demo
              </Link>
              <a
                href="https://wa.me/919822054321?text=Hello!%20I%20want%20to%20visit%20Fuselage%20Hub%20in%20Arvi%20Nagpur."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                💬 WhatsApp Arvi Hub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

