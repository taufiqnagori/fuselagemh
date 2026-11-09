
/**
 * FUSELAGE INNOVATIONS
 * Central Website Configuration
 *
 * Update contact details, business information,
 * social links and settings from this file.
 */

export const SITE_CONFIG = {
    // Company Information
    company: {
        name: "Fuselage Innovations",
        shortName: "Fuselage",
        tagline: "Engineering the Future of Agriculture",
        description:
            "Advanced agricultural drone technology, precision spraying and intelligent farming solutions for Maharashtra.",
        website: "https://fuselage.co.in",
        established: null,
    },

    // Maharashtra Office Information
    address: {
        line1: "Arvi",
        city: "Arvi",
        pincode: "442201",
        district: "Wardha",
        division: "Nagpur Division",
        state: "Maharashtra",
        country: "India",

        fullAddress:
            "Arvi, 442201, District Wardha, Nagpur Division, Maharashtra, India",

        mapUrl:
            "https://www.google.com/maps/search/?api=1&query=Arvi+442201+Wardha+Maharashtra+India",
    },

    // Temporary Demo Contact Details
    // Replace these with official details before launch.
    contact: {
        phone: "+91 90000 00000",
        phoneRaw: "919000000000",

        whatsapp: "+91 90000 00000",
        whatsappRaw: "919000000000",

        email: "info@fuselage.co.in",

        phoneLink: "tel:+919000000000",

        whatsappLink:
            "https://wa.me/919000000000?text=Hello%20Fuselage%20Innovations%2C%20I%20want%20to%20know%20more%20about%20your%20agricultural%20drones.",

        emailLink: "mailto:info@fuselage.co.in",
    },

    // Business Hours (Sample)
    businessHours: {
        weekdays: "Monday - Saturday",
        timing: "9:00 AM - 6:00 PM",
        sunday: "Closed",
        timezone: "Asia/Kolkata",
    },

    // Supported Website Languages
    languages: [
        {
            code: "en",
            name: "English",
            nativeName: "English",
        },
        {
            code: "mr",
            name: "Marathi",
            nativeName: "मराठी",
        },
        {
            code: "hi",
            name: "Hindi",
            nativeName: "हिंदी",
        },
    ],

    // Social Media
    social: {
        instagram: "",
        facebook: "",
        youtube: "",
        linkedin: "",
    },

    // Website Navigation
    navigation: [
        { label: "Home", path: "/" },
        { label: "Our Products", path: "/products" },
        { label: "Services", path: "/services" },
        { label: "Subsidy", path: "/subsidy" },
        { label: "About Us", path: "/about" },
        { label: "Contact", path: "/contact" },
    ],

    // Website Settings
    settings: {
        defaultLanguage: "en",
        defaultTheme: "light",
        currency: "INR",
        currencySymbol: "₹",
        mobileFirst: true,
        enableAnimations: true,
    },
};

// Convenient exports for individual components
export const COMPANY = SITE_CONFIG.company;
export const ADDRESS = SITE_CONFIG.address;
export const CONTACT = SITE_CONFIG.contact;
export const BUSINESS_HOURS = SITE_CONFIG.businessHours;
export const LANGUAGES = SITE_CONFIG.languages;
export const SOCIAL_LINKS = SITE_CONFIG.social;
export const NAVIGATION = SITE_CONFIG.navigation;
export const SITE_SETTINGS = SITE_CONFIG.settings;

export default SITE_CONFIG;
