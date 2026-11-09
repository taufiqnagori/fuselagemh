
import { NavLink } from "react-router-dom";
import { SITE_CONFIG } from "../data/siteConfig";
import { useLang } from "../i18n/LangContext";
import "./MobileBottomBar.css";

export default function MobileBottomBar() {
  const { lang } = useLang();

  const labels = {
    en: {
      home: "Home",
      products: "Products",
      call: "Call",
      subsidy: "Subsidy",
      contact: "Contact",
    },
    mr: {
      home: "मुख्यपृष्ठ",
      products: "उत्पादने",
      call: "कॉल",
      subsidy: "अनुदान",
      contact: "संपर्क",
    },
    hi: {
      home: "होम",
      products: "प्रोडक्ट",
      call: "कॉल",
      subsidy: "सब्सिडी",
      contact: "संपर्क",
    },
  };

  const text = labels[lang] || labels.en;

  const whatsappMessages = {
    en: "Hello Fuselage Innovations! I would like to know more about your agricultural drone solutions.",
    mr: "नमस्कार Fuselage Innovations! मला तुमच्या कृषी ड्रोन सोल्यूशन्सबद्दल अधिक माहिती हवी आहे.",
    hi: "नमस्ते Fuselage Innovations! मुझे आपके कृषि ड्रोन समाधानों के बारे में अधिक जानकारी चाहिए।",
  };

  const whatsappUrl = `${SITE_CONFIG.contact.whatsappLink.split("?")[0]}?text=${encodeURIComponent(
    whatsappMessages[lang] || whatsappMessages.en
  )}`;

  const navItems = [
    {
      to: "/",
      label: text.home,
      icon: "⌂",
      end: true,
    },
    {
      to: "/products",
      label: text.products,
      icon: "▣",
    },
    {
      to: "/subsidy",
      label: text.subsidy,
      icon: "◈",
    },
    {
      to: "/contact",
      label: text.contact,
      icon: "✉",
    },
  ];

  return (
    <aside className="mobile-action-bar" aria-label="Quick navigation">
      <div className="action-bar-inner">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `bar-item ${isActive ? "active" : ""}`
            }
            aria-label={item.label}
          >
            <span className="bar-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="bar-label">{item.label}</span>
          </NavLink>
        ))}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bar-item bar-whatsapp"
          aria-label="Chat with Fuselage on WhatsApp"
        >
          <span className="bar-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9.2c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.3-.1.5l-.5.6c-.2.2-.2.3-.1.5.4.8 1.1 1.5 1.9 1.9.2.1.3.1.5-.1l.6-.5c.2-.2.3-.2.5-.1l1.4.6c.3.1.4.2.4.4v.4c0 .3 0 .5-.4.7-.5.3-1.1.4-1.7.3-1-.2-2.1-.8-3.2-1.9-1.1-1.1-1.7-2.2-1.9-3.2-.1-.6 0-1.2.3-1.7Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="bar-label">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
