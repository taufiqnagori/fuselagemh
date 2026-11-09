import { useLang } from "../i18n/LangContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { PRODUCTS } from "../data/products";
import { SITE_CONFIG } from "../data/siteConfig";
import "./Home.css";

const CROPS = [
  {
    id: "cotton",
    name: "Cotton",
    localName: "कापूस",
    description:
      "Explore drone-based spraying options for cotton cultivation and discuss suitable application methods with our team.",
    applications: ["Crop protection", "Foliar application", "Field operations"],
    category: "Spraying",
  },
  {
    id: "soybean",
    name: "Soybean",
    localName: "सोयाबीन",
    description:
      "Discover agricultural drone solutions for soybean farms, including crop spraying and field management applications.",
    applications: ["Crop protection", "Nutrient application", "Farm management"],
    category: "Spraying",
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    localName: "ऊस",
    description:
      "Explore drone technology for agricultural operations in sugarcane cultivation and large farming areas.",
    applications: ["Crop spraying", "Large-field operations", "Farm services"],
    category: "Spraying",
  },
  {
    id: "orange",
    name: "Citrus & Orange",
    localName: "संत्रा",
    description:
      "Learn about drone applications for orchard management and agricultural operations in citrus-growing regions.",
    applications: ["Orchard applications", "Crop monitoring", "Field mapping"],
    category: "Agriculture",
  },
];

const CONTENT = {
  en: {
    benefitsEyebrow: "Why explore agricultural drones?",
    benefitsTitle: "A smarter approach to modern farming",
    benefitsDescription:
      "Discover how drone technology can support agricultural operations.",
    benefits: [
      {
        icon: "◈",
        title: "Precision Applications",
        description:
          "Explore aerial spraying technology and application options for different farming requirements.",
      },
      {
        icon: "⌖",
        title: "Aerial Monitoring",
        description:
          "Discover drone-based observation and mapping solutions for agricultural fields.",
      },
      {
        icon: "⚙",
        title: "Modern Technology",
        description:
          "Explore technology designed for evolving agricultural operations.",
      },
      {
        icon: "↗",
        title: "Local Assistance",
        description:
          "Connect with our team in Maharashtra to discuss products and service requirements.",
      },
    ],
    productsEyebrow: "Explore the product range",
    productsTitle: "Agricultural drone solutions",
    productsDescription:
      "Explore the available product range and contact our team for specifications, availability and pricing.",
    viewAll: "View all products",
    details: "View details",
    enquire: "Enquire now",
    applicationsEyebrow: "Agriculture applications",
    applicationsTitle: "Solutions for different crops",
    applicationsDescription:
      "Select a crop to explore relevant agricultural drone applications.",
    applicationsLabel: "Potential applications",
    recommended: "Explore products",
    locationEyebrow: "Proudly based in Maharashtra",
    locationTitle: "Closer to the agricultural community",
    locationDescription:
      "Fuselage Innovations is listed here with its temporary business location in Arvi, Wardha district. Contact the team to discuss your requirements and service availability.",
    locationButton: "Get in touch",
    locationDetails: "Business location",
    contactEyebrow: "Let's start a conversation",
    contactTitle: "Looking for the right drone solution?",
    contactDescription:
      "Tell us about your farm, business or project. Our team can help you explore the available products and services.",
    contactButton: "Contact our team",
    whatsappButton: "Chat on WhatsApp",
    demoNotice:
      "Product specifications, prices, certifications and service availability should be confirmed directly with the company before purchase.",
    productCategory: "Category",
    capacity: "Capacity / Sensors",
    flight: "Flight information",
    notSpecified: "Contact for details",
    noProducts: "Product information will be available soon.",
  },
  mr: {
    benefitsEyebrow: "कृषी ड्रोन का निवडावे?",
    benefitsTitle: "आधुनिक शेतीसाठी स्मार्ट तंत्रज्ञान",
    benefitsDescription:
      "कृषी क्षेत्रात ड्रोन तंत्रज्ञानाचे विविध उपयोग जाणून घ्या.",
    benefits: [
      {
        icon: "◈",
        title: "अचूक फवारणी",
        description: "शेतीसाठी ड्रोनद्वारे फवारणीचे पर्याय जाणून घ्या.",
      },
      {
        icon: "⌖",
        title: "पीक निरीक्षण",
        description: "शेतीचे निरीक्षण आणि नकाशे तयार करण्याचे पर्याय.",
      },
      {
        icon: "⚙",
        title: "आधुनिक तंत्रज्ञान",
        description: "आधुनिक शेतीसाठी उपयुक्त तंत्रज्ञान जाणून घ्या.",
      },
      {
        icon: "↗",
        title: "स्थानिक मदत",
        description: "महाराष्ट्रातील आमच्या टीमशी संपर्क साधा.",
      },
    ],
    productsEyebrow: "उत्पादनांची माहिती",
    productsTitle: "कृषी ड्रोन सोल्यूशन्स",
    productsDescription:
      "उत्पादनांची माहिती पहा आणि किंमत व उपलब्धतेसाठी आमच्याशी संपर्क साधा.",
    viewAll: "सर्व उत्पादने पहा",
    details: "माहिती पहा",
    enquire: "चौकशी करा",
    applicationsEyebrow: "शेतीतील उपयोग",
    applicationsTitle: "विविध पिकांसाठी उपाय",
    applicationsDescription: "पीक निवडून संबंधित ड्रोन उपयोग जाणून घ्या.",
    applicationsLabel: "संभाव्य उपयोग",
    recommended: "उत्पादने पहा",
    locationEyebrow: "महाराष्ट्रातील आमचे स्थान",
    locationTitle: "शेतकरी समुदायाच्या जवळ",
    locationDescription:
      "Fuselage Innovations साठी सध्या दिलेला व्यवसायाचा पत्ता अर्वी, जिल्हा वर्धा येथे आहे. सेवा आणि उपलब्धतेसाठी टीमशी संपर्क साधा.",
    locationButton: "संपर्क साधा",
    locationDetails: "व्यवसायाचा पत्ता",
    contactEyebrow: "चला, चर्चा सुरू करूया",
    contactTitle: "योग्य ड्रोन शोधत आहात?",
    contactDescription:
      "तुमच्या शेती किंवा व्यवसायाच्या गरजा सांगा. उपलब्ध उत्पादने आणि सेवांबद्दल आमची टीम मार्गदर्शन करेल.",
    contactButton: "आमच्याशी संपर्क साधा",
    whatsappButton: "WhatsApp वर संपर्क",
    demoNotice:
      "खरेदीपूर्वी उत्पादनांची माहिती, किंमत, प्रमाणपत्रे आणि सेवा उपलब्धता कंपनीकडून निश्चित करा.",
    productCategory: "प्रकार",
    capacity: "क्षमता / सेन्सर्स",
    flight: "फ्लाइट माहिती",
    notSpecified: "अधिक माहितीसाठी संपर्क करा",
    noProducts: "उत्पादनांची माहिती लवकरच उपलब्ध होईल.",
  },
  hi: {
    benefitsEyebrow: "कृषि ड्रोन क्यों?",
    benefitsTitle: "आधुनिक खेती के लिए स्मार्ट तकनीक",
    benefitsDescription:
      "कृषि क्षेत्र में ड्रोन तकनीक के विभिन्न उपयोग जानें।",
    benefits: [
      {
        icon: "◈",
        title: "सटीक छिड़काव",
        description: "खेती के लिए ड्रोन आधारित छिड़काव विकल्प जानें।",
      },
      {
        icon: "⌖",
        title: "फसल निगरानी",
        description: "खेतों की निगरानी और मैपिंग के विकल्प जानें।",
      },
      {
        icon: "⚙",
        title: "आधुनिक तकनीक",
        description: "आधुनिक कृषि कार्यों के लिए तकनीक जानें।",
      },
      {
        icon: "↗",
        title: "स्थानीय सहायता",
        description: "महाराष्ट्र में हमारी टीम से संपर्क करें।",
      },
    ],
    productsEyebrow: "उत्पादों की जानकारी",
    productsTitle: "कृषि ड्रोन समाधान",
    productsDescription:
      "उत्पाद देखें और कीमत, उपलब्धता तथा जानकारी के लिए हमारी टीम से संपर्क करें।",
    viewAll: "सभी उत्पाद देखें",
    details: "जानकारी देखें",
    enquire: "पूछताछ करें",
    applicationsEyebrow: "कृषि में उपयोग",
    applicationsTitle: "विभिन्न फसलों के लिए समाधान",
    applicationsDescription:
      "फसल चुनें और संबंधित ड्रोन उपयोग के बारे में जानें।",
    applicationsLabel: "संभावित उपयोग",
    recommended: "उत्पाद देखें",
    locationEyebrow: "महाराष्ट्र में हमारा स्थान",
    locationTitle: "कृषि समुदाय के करीब",
    locationDescription:
      "Fuselage Innovations का अस्थायी व्यावसायिक पता अरवी, जिला वर्धा है। सेवाओं और उपलब्धता के लिए टीम से संपर्क करें।",
    locationButton: "संपर्क करें",
    locationDetails: "व्यावसायिक पता",
    contactEyebrow: "बातचीत शुरू करें",
    contactTitle: "सही ड्रोन समाधान खोज रहे हैं?",
    contactDescription:
      "अपनी खेती या व्यवसाय की जरूरतें बताएं। हमारी टीम उपलब्ध उत्पादों और सेवाओं के बारे में जानकारी देगी।",
    contactButton: "हमारी टीम से संपर्क करें",
    whatsappButton: "WhatsApp पर बात करें",
    demoNotice:
      "खरीदने से पहले उत्पाद विवरण, कीमत, प्रमाणपत्र और सेवा उपलब्धता कंपनी से सुनिश्चित करें।",
    productCategory: "श्रेणी",
    capacity: "क्षमता / सेंसर",
    flight: "फ्लाइट जानकारी",
    notSpecified: "जानकारी के लिए संपर्क करें",
    noProducts: "उत्पादों की जानकारी जल्द उपलब्ध होगी।",
  },
};

export default function Home() {
  const { lang } = useLang();
  const content = CONTENT[lang] || CONTENT.en;
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0].id);

  const activeCrop =
    CROPS.find((crop) => crop.id === selectedCrop) || CROPS[0];

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="home-page">
      <Hero />

      {/* Benefits */}
      <section className="home-benefits-section">
        <div className="container">
          <div className="home-section-heading">
            <span className="home-eyebrow">{content.benefitsEyebrow}</span>
            <h2>{content.benefitsTitle}</h2>
            <p>{content.benefitsDescription}</p>
          </div>

          <div className="home-benefits-grid">
            {content.benefits.map((benefit) => (
              <article className="home-benefit-card" key={benefit.title}>
                <span className="home-benefit-icon" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="home-products-section">
        <div className="container">
          <div className="home-section-heading home-heading-with-action">
            <div>
              <span className="home-eyebrow">{content.productsEyebrow}</span>
              <h2>{content.productsTitle}</h2>
              <p>{content.productsDescription}</p>
            </div>

            <Link to="/products" className="home-text-link">
              {content.viewAll} <span>↗</span>
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="home-products-grid">
              {featuredProducts.map((product) => (
                <article className="home-product-card" key={product.id}>
                  <Link
                    to={`/products/${product.slug || product.id}`}
                    className="home-product-image"
                    aria-label={`${content.details}: ${product.name}`}
                  >
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=900&q=80";
                      }}
                    />
                    <span className="home-product-category">
                      {product.category || content.productCategory}
                    </span>
                  </Link>

                  <div className="home-product-content">
                    <span className="home-product-tagline">
                      {product.tagline}
                    </span>

                    <h3>{product.name}</h3>

                    <p>
                      {product.shortDesc ||
                        product.tagline ||
                        content.notSpecified}
                    </p>

                    <div className="home-product-specs">
                      <div>
                        <span>{content.capacity}</span>
                        <strong>
                          {product.specs?.tank ||
                            product.specs?.sensors ||
                            content.notSpecified}
                        </strong>
                      </div>

                      <div>
                        <span>{content.flight}</span>
                        <strong>
                          {product.specs?.flight || content.notSpecified}
                        </strong>
                      </div>
                    </div>

                    <div className="home-product-actions">
                      <Link
                        to={`/products/${product.slug || product.id}`}
                        className="home-product-details"
                      >
                        {content.details} <span>↗</span>
                      </Link>

                      <Link
                        to="/contact"
                        className="home-product-enquire"
                      >
                        {content.enquire}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="home-empty-state">{content.noProducts}</p>
          )}

          <p className="home-data-disclaimer">{content.demoNotice}</p>
        </div>
      </section>

      {/* Crop applications */}
      <section className="home-crops-section">
        <div className="container">
          <div className="home-section-heading">
            <span className="home-eyebrow">
              {content.applicationsEyebrow}
            </span>
            <h2>{content.applicationsTitle}</h2>
            <p>{content.applicationsDescription}</p>
          </div>

          <div className="home-crop-layout">
            <div className="home-crop-tabs" role="tablist" aria-label="Select crop">
              {CROPS.map((crop) => (
                <button
                  key={crop.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCrop === crop.id}
                  className={`home-crop-tab ${selectedCrop === crop.id ? "active" : ""
                    }`}
                  onClick={() => setSelectedCrop(crop.id)}
                >
                  <span>{crop.name}</span>
                  <span className="home-crop-local">{crop.localName}</span>
                </button>
              ))}
            </div>

            <article className="home-crop-detail" role="tabpanel">
              <div className="home-crop-detail-top">
                <span className="home-eyebrow">{activeCrop.category}</span>
                <h3>{activeCrop.name}</h3>
                <p>{activeCrop.description}</p>
              </div>

              <div className="home-crop-applications">
                <strong>{content.applicationsLabel}</strong>
                <div>
                  {activeCrop.applications.map((application) => (
                    <span key={application}>{application}</span>
                  ))}
                </div>
              </div>

              <Link to="/products" className="home-crop-link">
                {content.recommended} <span>↗</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="home-location-section">
        <div className="container">
          <div className="home-location-card">
            <div className="home-location-copy">
              <span className="home-eyebrow">
                {content.locationEyebrow}
              </span>
              <h2>{content.locationTitle}</h2>
              <p>{content.locationDescription}</p>

              <Link to="/contact" className="home-location-button">
                {content.locationButton} <span>↗</span>
              </Link>
            </div>

            <div className="home-location-address">
              <span className="home-location-pin" aria-hidden="true">
                ⌖
              </span>
              <span>{content.locationDetails}</span>
              <strong>{SITE_CONFIG.address.city}</strong>
              <p>
                {SITE_CONFIG.address.district},{" "}
                {SITE_CONFIG.address.state} {SITE_CONFIG.address.pincode}
              </p>
              <a
                href={SITE_CONFIG.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="home-contact-section">
        <div className="container">
          <div className="home-contact-card">
            <span className="home-contact-eyebrow">
              {content.contactEyebrow}
            </span>
            <h2>{content.contactTitle}</h2>
            <p>{content.contactDescription}</p>

            <div className="home-contact-actions">
              <Link to="/contact" className="home-contact-primary">
                {content.contactButton} <span>↗</span>
              </Link>

              <a
                href={SITE_CONFIG.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-secondary"
              >
                {content.whatsappButton}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
