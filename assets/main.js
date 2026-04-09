/**
 * Visualia Consulting – main.js
 * Handles: ES/EN language toggle, smooth-scroll active-nav highlight,
 *          mobile hamburger menu.
 */

/* ─── Translations ─────────────────────────────────────────────────── */
const i18n = {
  es: {
    /* NAV */
    "nav.services":  "Servicios",
    "nav.projects":  "Proyectos",
    "nav.process":   "Proceso",
    "nav.stack":     "Stack",
    "nav.about":     "Nosotros",
    "nav.contact":   "Contacto",

    /* HERO */
    "hero.tag":      "Consultoría de Ingeniería & IA",
    "hero.h1a":      "Soluciones de",
    "hero.h1b":      "IA aplicada",
    "hero.h1c":      "para tu negocio",
    "hero.sub":      "Transformamos datos y procesos en ventajas competitivas reales mediante Machine Learning, Visión por Computadora y Automatización.",
    "hero.cta1":     "Contáctanos",
    "hero.cta2":     "Ver Proyectos",

    /* SERVICES */
    "services.title": "Servicios",
    "services.sub":   "Soluciones especializadas de extremo a extremo.",
    "svc1.title": "Machine Learning & MLOps",
    "svc1.desc":  "Modelos predictivos y pipelines productivos: entrenamiento, versionado, despliegue y monitoreo continuo.",
    "svc2.title": "Visión por Computadora & OCR",
    "svc2.desc":  "Reconocimiento de placas, lectura de contenedores, conteo y tracking de objetos con YOLOv8 + DeepSORT.",
    "svc3.title": "Automatización de Procesos",
    "svc3.desc":  "ETL personalizados, bots de integración, conectores API y flujos de trabajo sin código repetitivo.",
    "svc4.title": "Análisis de Riesgos",
    "svc4.desc":  "Metodología PMBOK con lógica difusa para cuantificar y priorizar riesgos de proyectos de infraestructura.",
    "svc5.title": "Quant / Trading Analytics",
    "svc5.desc":  "Señales algorítmicas, backtesting y análisis de fundamentos para toma de decisiones en mercados financieros.",

    /* PROJECTS */
    "projects.title": "Proyectos Destacados",
    "projects.sub":   "Una selección de trabajos aplicados — privados descritos sin exponer código sensible.",
    "proj.private": "Privado",
    "proj.public":  "Público",
    "proj.link":    "Ver repositorio →",

    "proj1.title": "Carbon Footprint Tracker",
    "proj1.desc":  "Sistema de visión por computadora que detecta y rastrea vehículos con YOLOv8 + DeepSORT, estima su huella de CO₂ por trayecto y almacena resultados en SQLite/CSV. Dockerizado y desplegable en edge.",
    "proj2.title": "OCR Web Contenedores",
    "proj2.desc":  "Aplicación web que captura y decodifica automáticamente los códigos ISO de contenedores marítimos mediante OCR; reduce errores de digitación y acelera la gestión operativa portuaria.",
    "proj3.title": "Image Pattern Recognition (Placas)",
    "proj3.desc":  "Pipeline de OCR para reconocimiento de matrículas vehiculares: segmentación, corrección de perspectiva y lectura de caracteres con alta precisión.",
    "proj4.title": "Risk Assessment – Manzanillo",
    "proj4.desc":  "Evaluación de riesgos de proyecto de infraestructura portuaria usando PMBOK + lógica difusa (Python). Genera matrices de probabilidad-impacto y rankings de mitigación.",
    "proj5.title": "SP500 Swing Signal Bot",
    "proj5.desc":  "Bot de trading que genera señales de compra/venta para el S&P 500 combinando indicadores técnicos y modelos cuantitativos con alertas automatizadas.",
    "proj6.title": "HorusAI FAQ Bot",
    "proj6.desc":  "Chatbot de preguntas frecuentes con retrieval-augmented generation (RAG); reduce carga de soporte y entrega respuestas contextuales en lenguaje natural.",
    "proj7.title": "Pipeline de Análisis Fundamental",
    "proj7.desc":  "ETL que extrae y normaliza estados financieros, calcula ratios de valoración y genera reportes automáticos para carteras de renta variable.",
    "proj8.title": "ImagePatternRecognition",
    "proj8.desc":  "Repositorio público con exploración de técnicas clásicas y deep-learning para reconocimiento de patrones en imágenes.",
    "proj9.title": "Risk Assessment – Manzanillo (repo público)",
    "proj10.title":"Dataset Experimental Thermocouple",
    "proj10.desc": "Conjunto de datos experimentales de termopares para validación de modelos térmicos en sistemas de energía.",
    "proj11.title":"Random Pore Network Modeling",
    "proj11.desc": "Modelado estocástico de redes de poros para simulación de flujo en medios porosos; útil en ingeniería de yacimientos.",
    "proj12.title":"Thermal Images on EMS",
    "proj12.desc": "Dataset de imágenes térmicas para sistemas de gestión de energía; incluye anotaciones para entrenamiento de modelos de detección.",

    /* PROCESS */
    "process.title": "Proceso de Trabajo",
    "process.sub":   "De la idea al producto en cuatro fases claras.",
    "step1.title": "1. Descubrimiento",
    "step1.desc":  "Entendemos el negocio, identificamos datos disponibles y definimos métricas de éxito.",
    "step2.title": "2. Prototipo",
    "step2.desc":  "Entregamos un MVP funcional en 2–4 semanas para validar el enfoque técnico con datos reales.",
    "step3.title": "3. Despliegue",
    "step3.desc":  "Dockerizamos, configuramos CI/CD con GitHub Actions y ponemos el sistema en producción.",
    "step4.title": "4. Soporte",
    "step4.desc":  "Monitoreo continuo, reentrenamiento de modelos y acompañamiento técnico post-lanzamiento.",

    /* STACK */
    "stack.title": "Stack Tecnológico",
    "stack.sub":   "Herramientas probadas en producción.",

    /* ABOUT */
    "about.title": "Sobre Visualia Consulting",
    "about.sub":   "",
    "about.p1":    "<strong>Visualia Consulting</strong> es un equipo de ingeniería aplicada especializado en convertir datos complejos en sistemas que funcionan.",
    "about.p2":    "Combinamos experiencia en <strong>visión por computadora</strong>, <strong>MLOps</strong>, <strong>automatización de procesos</strong> y <strong>análisis de riesgos cuantitativo</strong> para entregar soluciones robustas y mantenibles.",
    "about.p3":    "Trabajamos con startups, empresas industriales y equipos de ingeniería que necesitan pasar del dato al valor de negocio sin fricciones.",

    /* CONTACT */
    "contact.title": "Contacto",
    "contact.sub":   "¿Tienes un proyecto en mente? Hablemos.",
    "contact.gh":    "GitHub",
    "contact.email": "Correo electrónico",
    "contact.li":    "LinkedIn",
  },

  en: {
    /* NAV */
    "nav.services":  "Services",
    "nav.projects":  "Projects",
    "nav.process":   "Process",
    "nav.stack":     "Stack",
    "nav.about":     "About",
    "nav.contact":   "Contact",

    /* HERO */
    "hero.tag":      "Engineering & AI Consulting",
    "hero.h1a":      "Applied",
    "hero.h1b":      "AI solutions",
    "hero.h1c":      "for your business",
    "hero.sub":      "We turn data and processes into real competitive advantages through Machine Learning, Computer Vision, and Automation.",
    "hero.cta1":     "Contact Us",
    "hero.cta2":     "View Projects",

    /* SERVICES */
    "services.title": "Services",
    "services.sub":   "End-to-end specialized solutions.",
    "svc1.title": "Machine Learning & MLOps",
    "svc1.desc":  "Predictive models and production pipelines: training, versioning, deployment, and continuous monitoring.",
    "svc2.title": "Computer Vision & OCR",
    "svc2.desc":  "License plate recognition, container reading, object counting and tracking with YOLOv8 + DeepSORT.",
    "svc3.title": "Process Automation",
    "svc3.desc":  "Custom ETL pipelines, integration bots, API connectors, and workflow automation.",
    "svc4.title": "Risk Analysis",
    "svc4.desc":  "PMBOK methodology with fuzzy logic to quantify and prioritize risks in infrastructure projects.",
    "svc5.title": "Quant / Trading Analytics",
    "svc5.desc":  "Algorithmic signals, backtesting, and fundamental analysis for financial market decision-making.",

    /* PROJECTS */
    "projects.title": "Featured Projects",
    "projects.sub":   "A selection of applied work — private repos described at a high level without exposing sensitive details.",
    "proj.private": "Private",
    "proj.public":  "Public",
    "proj.link":    "View repository →",

    "proj1.title": "Carbon Footprint Tracker",
    "proj1.desc":  "Computer vision system that detects and tracks vehicles with YOLOv8 + DeepSORT, estimates their CO₂ footprint per trip and stores results in SQLite/CSV. Dockerized and edge-deployable.",
    "proj2.title": "OCR Web – Container Codes",
    "proj2.desc":  "Web application that automatically captures and decodes ISO container codes via OCR; reduces manual entry errors and speeds up port operations.",
    "proj3.title": "Image Pattern Recognition (Plates)",
    "proj3.desc":  "License plate OCR pipeline: segmentation, perspective correction, and high-accuracy character recognition.",
    "proj4.title": "Risk Assessment – Manzanillo",
    "proj4.desc":  "Port infrastructure project risk evaluation using PMBOK + fuzzy logic (Python). Generates probability-impact matrices and mitigation rankings.",
    "proj5.title": "SP500 Swing Signal Bot",
    "proj5.desc":  "Trading bot that generates buy/sell signals for the S&P 500 by combining technical indicators and quantitative models with automated alerts.",
    "proj6.title": "HorusAI FAQ Bot",
    "proj6.desc":  "FAQ chatbot with retrieval-augmented generation (RAG); reduces support load and delivers contextual natural-language answers.",
    "proj7.title": "Fundamental Analysis Pipeline",
    "proj7.desc":  "ETL that extracts and normalises financial statements, calculates valuation ratios and generates automated reports for equity portfolios.",
    "proj8.title": "ImagePatternRecognition",
    "proj8.desc":  "Public repository exploring classical and deep-learning techniques for image pattern recognition.",
    "proj9.title": "Risk Assessment – Manzanillo (public repo)",
    "proj10.title":"Experimental Thermocouple Dataset",
    "proj10.desc": "Experimental thermocouple dataset for thermal model validation in energy systems.",
    "proj11.title":"Random Pore Network Modeling",
    "proj11.desc": "Stochastic pore network modelling for flow simulation in porous media; useful in reservoir engineering.",
    "proj12.title":"Thermal Images on EMS",
    "proj12.desc": "Thermal image dataset for energy management systems; includes annotations for detection model training.",

    /* PROCESS */
    "process.title": "Working Process",
    "process.sub":   "From idea to product in four clear phases.",
    "step1.title": "1. Discovery",
    "step1.desc":  "We understand the business, identify available data and define success metrics.",
    "step2.title": "2. Prototype",
    "step2.desc":  "We deliver a working MVP in 2–4 weeks to validate the technical approach with real data.",
    "step3.title": "3. Deployment",
    "step3.desc":  "We containerise with Docker, configure CI/CD via GitHub Actions and release to production.",
    "step4.title": "4. Support",
    "step4.desc":  "Continuous monitoring, model retraining and post-launch technical support.",

    /* STACK */
    "stack.title": "Tech Stack",
    "stack.sub":   "Battle-tested tools in production.",

    /* ABOUT */
    "about.title": "About Visualia Consulting",
    "about.sub":   "",
    "about.p1":    "<strong>Visualia Consulting</strong> is an applied engineering team specialised in turning complex data into systems that work.",
    "about.p2":    "We combine expertise in <strong>computer vision</strong>, <strong>MLOps</strong>, <strong>process automation</strong>, and <strong>quantitative risk analysis</strong> to deliver robust, maintainable solutions.",
    "about.p3":    "We work with startups, industrial companies and engineering teams that need to move from raw data to business value without friction.",

    /* CONTACT */
    "contact.title": "Contact",
    "contact.sub":   "Have a project in mind? Let's talk.",
    "contact.gh":    "GitHub",
    "contact.email": "Email",
    "contact.li":    "LinkedIn",
  }
};

/* ─── State ─────────────────────────────────────────────────────────── */
let currentLang = localStorage.getItem("vc-lang") || "es";

/* ─── Apply translations ─────────────────────────────────────────────── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("vc-lang", lang);
  document.documentElement.lang = lang;

  // Explicit allowlist of keys whose values may contain safe HTML markup (<strong>)
  const HTML_KEYS = new Set(["about.p1", "about.p2", "about.p3"]);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = i18n[lang][key];
    if (val === undefined) return;
    if (HTML_KEYS.has(key)) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  // Update toggle button label
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";
}

/* ─── Active nav on scroll ───────────────────────────────────────────── */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks  = document.querySelectorAll(".nav-links a[href^='#']");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove("active"));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach(s => observer.observe(s));
}

/* ─── Mobile hamburger ───────────────────────────────────────────────── */
function initBurger() {
  const burger = document.getElementById("nav-burger");
  const links  = document.getElementById("nav-links");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });

  // Close on link click
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    });
  });
}

/* ─── Init ───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    applyLang(currentLang === "es" ? "en" : "es");
  });

  initScrollSpy();
  initBurger();
});
