import { useLang } from '../i18n/LangContext';
import './Testimonials.css';

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>⭐</span>
    ))}
  </div>
);

const Testimonials = () => {
  const { t } = useLang();

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-label">{t.testimonials.sectionLabel}</div>
      <h2 className="section-title">{t.testimonials.title}</h2>

      <div className="testimonials-grid">
        {t.testimonials.items.map((item, i) => (
          <div key={i} className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{item.text}</p>
            <Stars count={item.rating} />
            <div className="testimonial-author">
              <div className="author-avatar">
                {item.name.charAt(0)}
              </div>
              <div className="author-info">
                <span className="author-name">{item.name}</span>
                <span className="author-loc">📍 {item.location}</span>
                <span className="author-crop">🌱 {item.crop}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

