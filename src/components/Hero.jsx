
import { useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { SITE_CONFIG } from "../data/siteConfig";
import { useLang } from "../i18n/LangContext";
import "./Hero.css";

const Hero = () => {
  const { lang, t } = useLang();
  const [activeProduct, setActiveProduct] = useState(0);

  const featuredProducts = PRODUCTS.slice(0, 2);
  const selectedProduct = featuredProducts[activeProduct] || PRODUCTS[0];

  const copy = {
    en: {
      eyebrow: "Agricultural technology, thoughtfully engineered",
      description:
        "Explore agricultural drone technology and precision farming solutions designed to support modern farming operations across Maharashtra.",
      explore: "Explore Our Products",
      contact: "Talk to Our Team",
      productLabel: "Featured technology",
      productLink: "View product details",
      location: "Based in Maharashtra",
      locationDetail: SITE_CONFIG.address.fullAddress,
      trustLabel: "Discover our solutions",
      trustDetail: "Product information and demonstrations",
      switchLabel: "Explore our range",
      categorySpray: "Crop spraying",
      categorySurvey: "Crop monitoring",
    },
    mr: {
      eyebrow: "शेतीसाठी आधुनिक तंत्रज्ञान",
      description:
        "महाराष्ट्रातील आधुनिक शेतीसाठी कृषी ड्रोन तंत्रज्ञान आणि अचूक शेती उपाय जाणून घ्या.",
      explore: "उत्पादने पहा",
      contact: "आमच्याशी संपर्क साधा",
      productLabel: "विशेष उत्पादन",
      productLink: "उत्पादनाची माहिती पहा",
      location: "महाराष्ट्रातील केंद्र",
      locationDetail: SITE_CONFIG.address.fullAddress,
      trustLabel: "आमचे उपाय जाणून घ्या",
      trustDetail: "उत्पादन माहिती आणि प्रात्यक्षिके",
      switchLabel: "उत्पादन श्रेणी",
      categorySpray: "फवारणी",
      categorySurvey: "पीक निरीक्षण",
    },
    hi: {
      eyebrow: "खेती के लिए आधुनिक तकनीक",
      description:
        "महाराष्ट्र में आधुनिक खेती के लिए कृषि ड्रोन तकनीक और सटीक खेती के समाधान जानें।",
      explore: "हमारे उत्पाद देखें",
      contact: "हमारी टीम से बात करें",
      productLabel: "विशेष उत्पाद",
      productLink: "उत्पाद की जानकारी देखें",
      location: "महाराष्ट्र में केंद्र",
      locationDetail: SITE_CONFIG.address.fullAddress,
      trustLabel: "हमारे समाधान जानें",
      trustDetail: "उत्पाद जानकारी और प्रदर्शन",
      switchLabel: "उत्पाद श्रेणी",
      categorySpray: "फसल छिड़काव",
      categorySurvey: "फसल निगरानी",
    },
  };

  const content = copy[lang] || copy.en;

  const fallbackImage =
    "https://images.unsplash.com/photo-1506947411487-a56738267384?w=1200&q=85";

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section className="premium-hero" aria-label="Fuselage Innovations introduction">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="atmosphere-mesh" />
        <div className="atmosphere-glow glow-1" />
        <div className="atmosphere-glow glow-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-copy-column">
          <div className="hero-badge-pill">
            <span className="pill-dot" />
            <span>{content.eyebrow}</span>
          </div>

          <div className="hero-heading-group">
            <h1 className="hero-headline">
              {t.hero.title}{" "}
              <span className="highlight-text">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="hero-description">
              {content.description}
            </p>
          </div>

          <div className="hero-cta-group">
            <Link
              to="/products"
              className="hero-main-btn"
            >
              <span>{content.explore}</span>
              <span className="hero-button-arrow">↗</span>
            </Link>

            <Link
              to="/contact"
              className="hero-demo-btn"
            >
              {content.contact}
              <span>→</span>
            </Link>
          </div>

          <div className="hero-info-strip">
            <div className="hero-info-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>

            <div>
              <strong>{content.location}</strong>
              <span>{content.locationDetail}</span>
            </div>
          </div>

          <div className="hero-bottom-note">
            <span className="hero-bottom-line" />
            <span>{content.trustLabel}</span>
            <span className="hero-bottom-dot">•</span>
            <span>{content.trustDetail}</span>
          </div>
        </div>

        <div className="hero-visual-column">
          <div className="hero-visual-topline">
            <span className="hero-visual-label">
              {content.productLabel}
            </span>
            <span className="hero-visual-index">
              0{activeProduct + 1} / 0{featuredProducts.length}
            </span>
          </div>

          <div className="hero-drone-stage">
            <div className="hero-stage-grid" aria-hidden="true" />
            <div className="hero-stage-glow" aria-hidden="true" />

            <div className="hero-image-frame">
              <img
                key={selectedProduct?.id}
                src={selectedProduct?.heroImage || fallbackImage}
                alt={selectedProduct?.name || "Agricultural drone"}
                className="drone-stage-img"
                onError={handleImageError}
              />
            </div>

            <div className="hero-product-floating-card">
              <span className="hero-floating-label">
                {selectedProduct?.category || "Agriculture"}
              </span>
              <h2>{selectedProduct?.name || "Agricultural Drone"}</h2>
              <p>
                {selectedProduct?.tagline ||
                  "Technology for modern agriculture"}
              </p>
              <Link
                to={`/products/${selectedProduct?.slug || selectedProduct?.id}`}
              >
                {content.productLink}
                <span>↗</span>
              </Link>
            </div>

            <div className="hero-visual-caption">
              <span className="caption-indicator" />
              <span>Fuselage Innovations</span>
            </div>
          </div>

          <div className="hero-product-switcher">
            <div className="hero-switcher-heading">
              <span>{content.switchLabel}</span>
              <span>{featuredProducts.length} products</span>
            </div>

            <div className="hero-product-options">
              {featuredProducts.map((product, index) => (
                <button
                  type="button"
                  key={product.id}
                  className={`hero-product-option ${activeProduct === index ? "active" : ""
                    }`}
                  onClick={() => setActiveProduct(index)}
                  aria-pressed={activeProduct === index}
                >
                  <span className="hero-option-number">
                    0{index + 1}
                  </span>

                  <span className="hero-option-info">
                    <strong>{product.name}</strong>
                    <small>
                      {index === 0
                        ? content.categorySpray
                        : content.categorySurvey}
                    </small>
                  </span>

                  <span className="hero-option-arrow">↗</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
