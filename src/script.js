/* =====================================================================
   ABDULLAH SAYED ELMAHROKY — LAWYER WEBSITE
   Main JavaScript File
   ---------------------------------------------------------------------
   Table of Contents:
   1. Site Configuration (phone, email, WhatsApp number)
   2. Translations Dictionary (Arabic / English)
   3. Helper Functions (get nested values, apply translations)
   4. Language Toggle Logic
   5. Sticky Navbar on Scroll
   6. Mobile Menu Toggle
   7. Smooth Scroll for Nav Links
   8. Scroll Reveal Animations
   9. WhatsApp Links (floating button, hero, contact section)
   10. Contact Form -> Sends Message to WhatsApp
   11. Footer Current Year
   12. Init (runs everything once the page loads)
===================================================================== */

/* ---------------------------------------------------------------------
   1. SITE CONFIGURATION
   Update these values any time contact details change.
--------------------------------------------------------------------- */
const CONFIG = {
  // WhatsApp number in international format WITHOUT "+" or spaces
  whatsappNumber: "201143573038",
  // How the phone number is displayed on screen
  phoneDisplay: "+20 11 4357 3038",
  email: "elmahroky0298@gmail.com",
};

/* ---------------------------------------------------------------------
   2. TRANSLATIONS DICTIONARY
   Every piece of text on the site lives here, in both languages.
   HTML elements point to a key here using the "data-i18n" attribute,
   for example: data-i18n="hero.headline"
--------------------------------------------------------------------- */
const translations = {
  ar: {
    meta: {
      title: "عبدالله سيد المحروق | محامي متخصص",
      description:
        "المحامي عبدالله سيد المحروق - متخصص في القضايا المدنية والجنائية وتأسيس الشركات والاستشارات القانونية.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      experience: "خبراتنا",
      whyUs: "لماذا نحن",
      contact: "تواصل معنا",
      bookConsultation: "احجز استشارة",
    },
    hero: {
      headline: "محامي متخصص في القضايا المدنية والجنائية وتأسيس الشركات",
      subheadline:
        "أكثر من 5 سنوات من الخبرة في تقديم الاستشارات القانونية وإدارة القضايا باحترافية",
      ctaConsultation: "احجز استشارة",
      ctaWhatsApp: "تواصل عبر واتساب",
    },
    about: {
      label: "عن المكتب",
      title: "خبرة قانونية تبني الثقة",
      paragraphs: [
        "المحامي عبدالله سيد المحروق يمتلك أكثر من خمس سنوات من الخبرة العملية في مجال القانون، حيث قدم استشارات قانونية متخصصة لعدد من الشركات والأفراد في مختلف المجالات.",
        "يتمتع بخبرة واسعة في صياغة ومراجعة العقود، تسوية المنازعات، ضمان الالتزام بالأنظمة واللوائح، وتقديم الحلول القانونية الفعالة التي تحمي مصالح العملاء وتضمن حقوقهم.",
      ],
      stats: [
        { value: "+5", label: "سنوات خبرة" },
        { value: "+200", label: "استشارة قانونية" },
        { value: "+200", label: "عميل راضٍ" },
      ],
    },
    services: {
      label: "خدماتنا القانونية",
      title: "حلول قانونية شاملة بمعايير احترافية",
      items: [
        {
          title: "القضايا المدنية",
          description:
            "تمثيل كامل أمام المحاكم المدنية في جميع درجات التقاضي، بما في ذلك المنازعات العقارية والمالية والإيجارية.",
          benefit: "نضمن لك الدفاع القانوني الفعّال لحماية حقوقك ومصالحك.",
        },
        {
          title: "القضايا الجنائية",
          description:
            "الدفاع عن الموكلين في القضايا الجنائية بمهنية وسرية عالية، مع إعداد المذكرات والطعون القانونية.",
          benefit: "نهدف إلى الحفاظ على حقوقك والحصول على أفضل النتائج القانونية.",
        },
        {
          title: "تأسيس الشركات",
          description:
            "إجراءات تأسيس الشركات لدى الهيئة العامة للاستثمار وخدمات التراخيص التجارية وفقاً للقوانين المعمول بها.",
          benefit: "نبسط لك إجراءات التأسيس لتبدأ عملك بشكل قانوني سليم وسريع.",
        },
        {
          title: "صياغة ومراجعة العقود",
          description:
            "إعداد ومراجعة العقود التجارية والعمالية والتعاملات المدنية بصياغة قانونية دقيقة تحمي من المخاطر.",
          benefit: "تقليل النزاعات المستقبلية وضمان وضوح الشروط لجميع الأطراف.",
        },
        {
          title: "استشارات قانونية",
          description:
            "استشارات قانونية دقيقة وسريعة للأفراد والشركات في مختلف المجالات القانونية والتجارية.",
          benefit: "اتخاذ قرارات سليمة مبنية على أسس قانونية راسخة.",
        },
      ],
    },
    experience: {
      label: "مسيرتنا المهنية",
      title: "خبرات عملية في بيئات قانونية متنوعة",
      items: [
        {
          role: "مدير التحقيقات",
          company: "نادي المطرية",
          period: "سابقاً",
          description:
            "الإشراف على إدارة التحقيقات الداخلية ومتابعة الشؤون القانونية للنادي.",
        },
        {
          role: "قائم بأعمال المستشار القانوني",
          company: "النقابة العامة للبترول",
          period: "سابقاً",
          description:
            "تقديم الدعم القانوني ومتابعة الملفات القانونية الخاصة بالنقابة العامة للبترول.",
        },
        {
          role: "مدير مكتب",
          company: "مكتب المستشار شريف منطاوي",
          period: "سابقاً",
          description:
            "إدارة العمليات القانونية والإدارية للمكتب ومتابعة سير القضايا والملفات الموكلة.",
        },
        {
          role: "مستشار قانوني",
          company: "السراج مول",
          period: "حالياً",
          description:
            "تقديم الاستشارات القانونية ومتابعة العقود والشؤون القانونية الخاصة بالمول.",
        },
        {
          role: "مستشار قانوني",
          company: "شركة السعدني موتورز",
          period: "حالياً",
          description:
            "تقديم الاستشارات القانونية ومراجعة العقود التجارية الخاصة بالشركة.",
        },
        {
          role: "مستشار قانوني",
          company: "ارمي موتورز",
          period: "حالياً",
          description:
            "متابعة الشؤون القانونية والتعاقدية وتقديم الاستشارات القانونية اللازمة للشركة.",
        },
      ],
    },
    whyUs: {
      label: "لماذا تختارنا",
      title: "أسباب تمنحك الثقة في التعامل معنا",
      items: [
        {
          title: "خبرة عملية قوية",
          description:
            "سنوات من العمل في مجالات القانون المدني والجنائي والشركات تضمن لك خدمة مبنية على معرفة عميقة.",
        },
        {
          title: "تعامل مع جهات حكومية",
          description: "خبرة في التعامل مع الجهات الحكومية والهيئات الرقابية لتسريع إجراءات عملك.",
        },
        {
          title: "حلول قانونية فعالة",
          description: "نهج عملي يركز على تحقيق النتائج وتقديم حلول قانونية ملموسة لقضاياك.",
        },
        {
          title: "سرعة واحترافية",
          description: "التزام بالمواعيد والسرية التامة في التعامل مع جميع الملفات القانونية.",
        },
      ],
    },
    contact: {
      label: "تواصل معنا",
      title: "احصل على استشارتك القانونية الآن",
      subtitle: "املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت، أو تواصل معنا مباشرة عبر واتساب.",
      form: {
        name: "الاسم",
        phone: "رقم الهاتف",
        details: "تفاصيل القضية",
        submit: "إرسال عبر واتساب",
      },
      info: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        location: "الموقع",
        locationValue: "القاهرة، جمهورية مصر العربية",
      },
    },
    footer: {
      name: "عبدالله سيد المحروق",
      title: "محامٍ ومستشار قانوني",
      rights: "جميع الحقوق محفوظة",
      quickLinks: "روابط سريعة",
      contact: "بيانات التواصل",
    },
    floatingWhatsApp: "تواصل عبر واتساب",
  },

  en: {
    meta: {
      title: "Abdullah Sayed Elmahrouk | Specialized Lawyer",
      description:
        "Lawyer Abdullah Sayed Elmahrouk - specialized in civil, criminal, and corporate law, company formation, and legal consultation.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      experience: "Experience",
      whyUs: "Why Us",
      contact: "Contact",
      bookConsultation: "Book Consultation",
    },
    hero: {
      headline: "Professional Lawyer Specialized in Civil, Criminal, and Corporate Law",
      subheadline:
        "Over 5 years of experience providing legal consultation and handling cases professionally",
      ctaConsultation: "Book Consultation",
      ctaWhatsApp: "Contact via WhatsApp",
    },
    about: {
      label: "About the Office",
      title: "Legal Experience That Builds Trust",
      paragraphs: [
        "Lawyer Abdullah Sayed Elmahrouk has more than five years of practical experience in the legal field, providing specialized legal consultations to a number of companies and individuals across various sectors.",
        "He has extensive experience in drafting and reviewing contracts, resolving disputes, ensuring compliance with regulations, and providing effective legal solutions that protect clients' interests and safeguard their rights.",
      ],
      stats: [
        { value: "+5", label: "Years Experience" },
        { value: "+200", label: "Legal Consultations" },
        { value: "+200", label: "Satisfied Clients" },
      ],
    },
    services: {
      label: "Our Legal Services",
      title: "Comprehensive Legal Solutions with Professional Standards",
      items: [
        {
          title: "Civil Cases",
          description:
            "Full representation before civil courts at all litigation levels, including real estate, financial, and rental disputes.",
          benefit: "We ensure effective legal defense to protect your rights and interests.",
        },
        {
          title: "Criminal Cases",
          description:
            "Defending clients in criminal cases with high professionalism and confidentiality, preparing legal memoranda and appeals.",
          benefit: "We aim to preserve your rights and achieve the best legal outcomes.",
        },
        {
          title: "Company Formation",
          description:
            "Company establishment procedures before the General Authority for Investment and commercial licensing services in accordance with applicable laws.",
          benefit: "We simplify your establishment procedures so you can start your business legally and quickly.",
        },
        {
          title: "Contract Drafting & Review",
          description:
            "Preparing and reviewing commercial, labor, and civil contracts with precise legal wording that minimizes risks.",
          benefit: "Reduce future disputes and ensure clear terms for all parties.",
        },
        {
          title: "Legal Consultation",
          description:
            "Accurate and fast legal consultations for individuals and companies across various legal and commercial fields.",
          benefit: "Make sound decisions based on solid legal foundations.",
        },
      ],
    },
    experience: {
      label: "Our Career Path",
      title: "Practical Experience in Diverse Legal Environments",
      items: [
        {
          role: "Director of Investigations",
          company: "Al Mattareya Club",
          period: "Previously",
          description:
            "Supervised internal investigations and followed up on the club's legal affairs.",
        },
        {
          role: "Acting Legal Consultant",
          company: "General Petroleum Syndicate",
          period: "Previously",
          description:
            "Provided legal support and followed up on legal files for the General Petroleum Syndicate.",
        },
        {
          role: "Office Manager",
          company: "Counselor Sherif Montawy's Law Office",
          period: "Previously",
          description:
            "Managed the office's legal and administrative operations and followed up on assigned cases and files.",
        },
        {
          role: "Legal Consultant",
          company: "Al Serag Mall",
          period: "Present",
          description:
            "Providing legal consultation and following up on contracts and legal matters for the mall.",
        },
        {
          role: "Legal Consultant",
          company: "Elsaadany Motors",
          period: "Present",
          description:
            "Providing legal consultation and reviewing the company's commercial contracts.",
        },
        {
          role: "Legal Consultant",
          company: "Army Motors",
          period: "Present",
          description:
            "Following up on legal and contractual matters and providing the company with necessary legal consultation.",
        },
      ],
    },
    whyUs: {
      label: "Why Choose Us",
      title: "Reasons That Give You Confidence in Working With Us",
      items: [
        {
          title: "Strong Practical Experience",
          description: "Years of work in civil, criminal, and corporate law ensure service built on deep knowledge.",
        },
        {
          title: "Government Authority Experience",
          description:
            "Experience in dealing with government bodies and regulatory authorities to accelerate your business procedures.",
        },
        {
          title: "Effective Legal Solutions",
          description:
            "A practical approach focused on achieving results and delivering tangible legal solutions for your cases.",
        },
        {
          title: "Speed & Professionalism",
          description: "Commitment to deadlines and complete confidentiality in handling all legal files.",
        },
      ],
    },
    contact: {
      label: "Contact Us",
      title: "Get Your Legal Consultation Now",
      subtitle:
        "Fill out the form below and we will respond as soon as possible, or contact us directly via WhatsApp.",
      form: {
        name: "Name",
        phone: "Phone Number",
        details: "Case Details",
        submit: "Send via WhatsApp",
      },
      info: {
        phone: "Phone",
        email: "Email",
        location: "Location",
        locationValue: "Cairo, Arab Republic of Egypt",
      },
    },
    footer: {
      name: "Abdullah Sayed Elmahrouk",
      title: "Lawyer & Legal Consultant",
      rights: "All rights reserved",
      quickLinks: "Quick Links",
      contact: "Contact Information",
    },
    floatingWhatsApp: "Contact via WhatsApp",
  },
};

/* Current active language. Arabic is the default. */
let currentLang = "ar";

/* ---------------------------------------------------------------------
   3. HELPER FUNCTIONS
--------------------------------------------------------------------- */

/**
 * Reads a nested value from an object using a dot-separated path.
 * Example: getValueByPath(translations.ar, "services.items.0.title")
 */
function getValueByPath(object, path) {
  return path.split(".").reduce((value, key) => {
    return value && value[key] !== undefined ? value[key] : null;
  }, object);
}

/**
 * Goes through every element with a "data-i18n" attribute and fills
 * its text with the translated value. Also handles placeholders via
 * "data-i18n-placeholder".
 */
function applyTranslations() {
  const dictionary = translations[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getValueByPath(dictionary, key);
    if (value !== null) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const value = getValueByPath(dictionary, key);
    if (value !== null) {
      element.setAttribute("placeholder", value);
    }
  });

  document.title = dictionary.meta.title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", dictionary.meta.description);
  }
}

/* ---------------------------------------------------------------------
   4. LANGUAGE TOGGLE LOGIC
--------------------------------------------------------------------- */
function setLanguage(lang) {
  currentLang = lang;

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  applyTranslations();
  updateWhatsappLinks();

  const langButton = document.getElementById("lang-toggle-btn");
  if (langButton) {
    langButton.textContent = lang === "ar" ? "EN" : "AR";
  }
}

function toggleLanguage() {
  setLanguage(currentLang === "ar" ? "en" : "ar");
}

function initLanguageToggle() {
  const langButton = document.getElementById("lang-toggle-btn");
  if (langButton) {
    langButton.addEventListener("click", toggleLanguage);
  }
}

/* ---------------------------------------------------------------------
   5. STICKY NAVBAR ON SCROLL
--------------------------------------------------------------------- */
function initStickyNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

/* ---------------------------------------------------------------------
   6. MOBILE MENU TOGGLE
--------------------------------------------------------------------- */
function initMobileMenu() {
  const menuButton = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  // Close the mobile menu whenever a link inside it is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}

/* ---------------------------------------------------------------------
   7. SMOOTH SCROLL FOR NAV LINKS
--------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll("[data-scroll]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("data-scroll");
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ---------------------------------------------------------------------
   8. SCROLL REVEAL ANIMATIONS
--------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

/* ---------------------------------------------------------------------
   9. WHATSAPP LINKS
--------------------------------------------------------------------- */

/**
 * Builds a wa.me link, optionally with a pre-filled message.
 */
function buildWhatsappUrl(message) {
  const base = `https://wa.me/${CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Updates every element with the ".js-whatsapp-link" class so it points
 * to the correct WhatsApp number, and fills in phone/email display text.
 */
function updateWhatsappLinks() {
  document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    link.setAttribute("href", buildWhatsappUrl());
  });

  const floatingButton = document.getElementById("floating-whatsapp");
  if (floatingButton) {
    floatingButton.setAttribute("href", buildWhatsappUrl());
  }

  // Phone / email display text (appears in Contact section & Footer)
  const phoneNodes = [
    document.getElementById("phone-display"),
    document.getElementById("phone-display-2"),
  ];
  phoneNodes.forEach((node) => {
    if (node) node.textContent = CONFIG.phoneDisplay;
  });

  const emailNodes = [
    document.getElementById("email-display"),
    document.getElementById("email-display-2"),
  ];
  emailNodes.forEach((node) => {
    if (node) node.textContent = CONFIG.email;
  });

  const emailLinks = [
    document.getElementById("email-link"),
    document.getElementById("email-link-2"),
  ];
  emailLinks.forEach((node) => {
    if (node) node.setAttribute("href", `mailto:${CONFIG.email}`);
  });
}

/* ---------------------------------------------------------------------
   10. CONTACT FORM -> SENDS MESSAGE TO WHATSAPP
--------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const details = document.getElementById("details").value.trim();

    const message =
      currentLang === "ar"
        ? `مرحباً، أنا ${name}\nرقم الهاتف: ${phone}\n\nتفاصيل القضية:\n${details}`
        : `Hello, I am ${name}\nPhone: ${phone}\n\nCase details:\n${details}`;

    window.open(buildWhatsappUrl(message), "_blank");
    form.reset();
  });
}

/* ---------------------------------------------------------------------
   11. FOOTER CURRENT YEAR
--------------------------------------------------------------------- */
function setFooterYear() {
  const yearElement = document.getElementById("footer-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ---------------------------------------------------------------------
   12. INIT — Runs once the DOM is ready
--------------------------------------------------------------------- */
function initSite() {
  setLanguage(currentLang); // Arabic by default
  initLanguageToggle();
  initStickyNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initContactForm();
  setFooterYear();
}

document.addEventListener("DOMContentLoaded", initSite);
