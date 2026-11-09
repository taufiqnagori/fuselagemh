import { useLang } from '../i18n/LangContext';
import { useState } from 'react';
import './Products.css';

const DroneIcon = ({ type }) => {
  if (type === 'surveillance') {
    return (
      <svg viewBox="0 0 200 160" fill="none" className="product-drone-svg">
        <circle cx="100" cy="80" r="28" fill="url(#surv1)" stroke="#60a5fa" strokeWidth="2"/>
        <circle cx="100" cy="80" r="16" fill="#1e3a8a"/>
        <circle cx="100" cy="80" r="8" fill="#60a5fa" fillOpacity="0.8"/>
        <line x1="100" y1="80" x2="40" y2="45" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="100" y1="80" x2="160" y2="45" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="100" y1="80" x2="40" y2="115" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="100" y1="80" x2="160" y2="115" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round"/>
        <ellipse cx="40" cy="42" rx="30" ry="5" fill="#60a5fa" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="160" cy="42" rx="30" ry="5" fill="#60a5fa" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="40" cy="118" rx="30" ry="5" fill="#60a5fa" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="160" cy="118" rx="30" ry="5" fill="#60a5fa" fillOpacity="0.5" className="prop-spin"/>
        <circle cx="40" cy="42" r="8" fill="#0d1b35" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="160" cy="42" r="8" fill="#0d1b35" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="40" cy="118" r="8" fill="#0d1b35" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="160" cy="118" r="8" fill="#0d1b35" stroke="#60a5fa" strokeWidth="1.5"/>
        <defs>
          <radialGradient id="surv1" cx="50%" cy="50%" r="50%">
            <stop stopColor="#1e40af"/>
            <stop offset="1" stopColor="#0f172a"/>
          </radialGradient>
        </defs>
      </svg>
    );
  }
  if (type === 'heavy') {
    return (
      <svg viewBox="0 0 220 180" fill="none" className="product-drone-svg">
        <rect x="80" y="75" width="60" height="30" rx="8" fill="url(#heavy1)"/>
        <rect x="90" y="80" width="40" height="20" rx="4" fill="#1e3a8a" fillOpacity="0.7"/>
        <line x1="110" y1="90" x2="40" y2="55" stroke="#0f2a60" strokeWidth="7" strokeLinecap="round"/>
        <line x1="110" y1="90" x2="180" y2="55" stroke="#0f2a60" strokeWidth="7" strokeLinecap="round"/>
        <line x1="110" y1="90" x2="40" y2="125" stroke="#0f2a60" strokeWidth="7" strokeLinecap="round"/>
        <line x1="110" y1="90" x2="180" y2="125" stroke="#0f2a60" strokeWidth="7" strokeLinecap="round"/>
        <line x1="110" y1="90" x2="110" y2="40" stroke="#0f2a60" strokeWidth="7" strokeLinecap="round"/>
        <line x1="110" y1="90" x2="110" y2="140" stroke="#0f2a60" strokeWidth="7" strokeLinecap="round"/>
        <ellipse cx="40" cy="52" rx="28" ry="5" fill="#00ff87" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="180" cy="52" rx="28" ry="5" fill="#00ff87" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="40" cy="128" rx="28" ry="5" fill="#00ff87" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="180" cy="128" rx="28" ry="5" fill="#00ff87" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="110" cy="37" rx="28" ry="5" fill="#00ff87" fillOpacity="0.5" className="prop-spin"/>
        <ellipse cx="110" cy="143" rx="28" ry="5" fill="#00ff87" fillOpacity="0.5" className="prop-spin"/>
        {/* Tank */}
        <rect x="90" y="105" width="40" height="30" rx="10" fill="#0d1b35" stroke="#00ff87" strokeWidth="1.5"/>
        <text x="100" y="125" fontFamily="monospace" fontSize="8" fill="#00ff87">30L</text>
        <defs>
          <linearGradient id="heavy1" x1="80" y1="75" x2="140" y2="105" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0f2a60"/><stop offset="1" stopColor="#1e3a8a"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  // Default agriculture quad
  return (
    <svg viewBox="0 0 200 160" fill="none" className="product-drone-svg">
      <rect x="75" y="68" width="50" height="24" rx="8" fill="url(#prod1)"/>
      <line x1="100" y1="78" x2="40" y2="50" stroke="#0f2a60" strokeWidth="6" strokeLinecap="round"/>
      <line x1="100" y1="78" x2="160" y2="50" stroke="#0f2a60" strokeWidth="6" strokeLinecap="round"/>
      <line x1="100" y1="90" x2="40" y2="118" stroke="#0f2a60" strokeWidth="6" strokeLinecap="round"/>
      <line x1="100" y1="90" x2="160" y2="118" stroke="#0f2a60" strokeWidth="6" strokeLinecap="round"/>
      <ellipse cx="40" cy="48" rx="28" ry="5" fill="#00ff87" fillOpacity="0.6" className="prop-spin"/>
      <ellipse cx="160" cy="48" rx="28" ry="5" fill="#00ff87" fillOpacity="0.6" className="prop-spin"/>
      <ellipse cx="40" cy="120" rx="28" ry="5" fill="#00ff87" fillOpacity="0.6" className="prop-spin"/>
      <ellipse cx="160" cy="120" rx="28" ry="5" fill="#00ff87" fillOpacity="0.6" className="prop-spin"/>
      <circle cx="40" cy="48" r="7" fill="#0d1b35" stroke="#00ff87" strokeWidth="1.5"/>
      <circle cx="160" cy="48" r="7" fill="#0d1b35" stroke="#00ff87" strokeWidth="1.5"/>
      <circle cx="40" cy="120" r="7" fill="#0d1b35" stroke="#00ff87" strokeWidth="1.5"/>
      <circle cx="160" cy="120" r="7" fill="#0d1b35" stroke="#00ff87" strokeWidth="1.5"/>
      {/* Spray tank */}
      <rect x="82" y="92" width="36" height="22" rx="8" fill="#0d1b35" stroke="#00ff87" strokeWidth="1.5"/>
      <text x="90" y="107" fontFamily="monospace" fontSize="8" fill="#00ff87">10L</text>
      {/* Nozzles */}
      <rect x="88" y="114" width="4" height="10" rx="2" fill="#00ff87"/>
      <rect x="98" y="114" width="4" height="10" rx="2" fill="#00ff87"/>
      <rect x="108" y="114" width="4" height="10" rx="2" fill="#00ff87"/>
      <ellipse cx="90" cy="128" rx="2" ry="5" fill="#00ff87" fillOpacity="0.7" className="spray-drop"/>
      <ellipse cx="100" cy="130" rx="2" ry="5" fill="#00ff87" fillOpacity="0.5" className="spray-drop"/>
      <ellipse cx="110" cy="128" rx="2" ry="5" fill="#00ff87" fillOpacity="0.7" className="spray-drop"/>
      <defs>
        <linearGradient id="prod1" x1="75" y1="68" x2="125" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f2a60"/><stop offset="1" stopColor="#1e3a8a"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const droneTypes = ['default', 'default', 'heavy', 'surveillance'];

const Products = () => {
  const { t } = useLang();
  const [activeCard, setActiveCard] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const setTab = (id, tab) => setActiveTab(prev => ({ ...prev, [id]: tab }));

  return (
    <section id="products" className="products-section">
      <div className="section-label">{t.products.sectionLabel}</div>
      <h2 className="section-title">{t.products.title}</h2>
      <p className="section-subtitle">{t.products.subtitle}</p>

      <div className="products-grid">
        {t.products.items.map((product, idx) => (
          <div
            key={product.id}
            className={`product-card${activeCard === product.id ? ' expanded' : ''}`}
            onMouseEnter={() => setActiveCard(product.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Tag */}
            <div className="product-tag">{product.tag}</div>
            {product.dgca && <div className="dgca-badge">DGCA ✓</div>}

            {/* Drone Visual */}
            <div className="product-visual">
              <div className="visual-glow" />
              <DroneIcon type={droneTypes[idx]} />
            </div>

            {/* Info */}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>

              {/* Quick Specs */}
              <div className="product-specs">
                <div className="spec">
                  <span className="spec-icon">💧</span>
                  <span>{product.capacity}</span>
                </div>
                <div className="spec">
                  <span className="spec-icon">📡</span>
                  <span>{product.range}</span>
                </div>
                <div className="spec">
                  <span className="spec-icon">🔋</span>
                  <span>{product.battery}</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="product-tabs">
                <button
                  className={`tab-btn${!activeTab[product.id] || activeTab[product.id] === 'features' ? ' active' : ''}`}
                  onClick={() => setTab(product.id, 'features')}
                >Features</button>
                <button
                  className={`tab-btn${activeTab[product.id] === 'desc' ? ' active' : ''}`}
                  onClick={() => setTab(product.id, 'desc')}
                >About</button>
              </div>

              <div className="tab-content">
                {(!activeTab[product.id] || activeTab[product.id] === 'features') ? (
                  <ul className="feature-list">
                    {product.features.map((f, i) => (
                      <li key={i}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7L6 11L12 3" stroke="#00ff87" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="product-desc">{product.description}</p>
                )}
              </div>

              {/* Price + CTA */}
              <div className="product-footer">
                <div className="product-price">
                  <span className="price-from">Starting at</span>
                  <span className="price-value">{product.price}</span>
                </div>
                <div className="product-actions">
                  <button className="btn-quote" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    {t.products.getQuote}
                  </button>
                  <button className="btn-learn">
                    {t.products.learnMore} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

