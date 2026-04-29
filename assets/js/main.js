// --- 0. LAZY THIRD-PARTY SCRIPTS ---
const EXTERNAL_SCRIPTS = {
    emailjs: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js',
    sweetalert: 'https://cdn.jsdelivr.net/npm/sweetalert2@11'
};

const EMAILJS_CONFIG = {
    publicKey: 'zfBIv-14_8HS3QYQ4',
    serviceId: 'service_yz3eqg8',
    templateId: 'template_1c3d1xd'
};

const loadedScriptPromises = new Map();
let emailJsReady = null;

// --- 1. DATA (Translations & Projects) ---
const translations = {
    nav_about: { en: "About", bg: "За мен", tr: "Hakkımda" },
    nav_journey: { en: "Experience", bg: "Опит", tr: "Deneyim" },
    nav_projects: { en: "Projects", bg: "Проекти", tr: "Projeler" },
    nav_contact: { en: "Contact", bg: "Контакти", tr: "İletişim" },
    mob_home: { en: "Home", bg: "Начало", tr: "Ana Sayfa" },
    mob_about: { en: "About", bg: "За мен", tr: "Hakkımda" },
    mob_journey: { en: "Experience", bg: "Опит", tr: "Deneyim" },
    mob_projects: { en: "Projects", bg: "Проекти", tr: "Projeler" },
    mob_contact: { en: "Contact", bg: "Контакти", tr: "İletişim" },
    hero_subtitle: {
        en: "Thoughtful code for real people.",
        bg: "Първо мисля. После създавам.",
        tr: "Önce düşünürüm. Sonra inşa ederim."
    },
    hero_badge_desc: {
        en: "Full-stack developer with a soft spot for clean flows and useful details.",
        bg: "Софтуерен инженер с фокус върху full-stack разработка и мащабируеми системи.",
        tr: "Full-stack geliştirme ve ölçeklenebilir sistemlere odaklanan bir Yazılım Mühendisiyim."
    },
    hero_term_whoami: {
        en: "Master's student and developer with 3+ years of hands-on coding.",
        bg: "Магистър по софтуерно инженерство и разработчик с над 3 години опит в програмирането.",
        tr: "3 yılı aşkın kodlama deneyimine sahip, yüksek lisans öğrencisi ve yazılım geliştiricisiyim."
    },
    hero_sticky: {
        en: "I like building things that make complicated ideas easier to use.",
        bg: "Винаги създавам, уча и споделям знания. Отворена съм за нови възможности! 💡",
        tr: "Sürekli üretiyor, öğreniyor ve bilgi paylaşıyorum. Yeni fırsatlara açığım! 💡"
    },
    hero_mini_note: {
        en: "Small details matter.",
        bg: "Малките детайли имат значение.",
        tr: "Küçük detaylar önemlidir."
    },
    hero_polaroid: { en: "graduation day 🎓", bg: "денят на дипломирането 🎓", tr: "mezuniyet günü 🎓" },
    about_title: { en: "A bit about me", bg: "Коя съм аз?", tr: "Ben Kimim?" },
    about_p1: {
        en: "I'm Sema, a software engineer and Master's student at the University of Ruse 'Angel Kanchev'. I like turning rough ideas into calm, useful interfaces and systems that people can actually enjoy using.",
        bg: "Аз съм отдаден софтуерен инженер и в момента продължавам обучението си в магистърска програма по софтуерно инженерство в Русенския университет „Ангел Кънчев“, с фокус върху full-stack разработка.",
        tr: "Şu anda Rusçuk Üniversitesi \"Angel Kanchev\"'de yüksek lisans eğitimime devam eden, full-stack geliştirmeye odaklanan bir Yazılım Mühendisiyim."
    },
    about_p2: {
        en: "My favorite work is where logic, design, and everyday usefulness meet.",
        bg: "Опитът ми включва изграждане на мащабируеми системи в сферата на изкуствения интелект, електронната търговия и социалните платформи.",
        tr: "Deneyimim; yapay zeka, e-ticaret ve sosyal platformlar için ölçeklenebilir sistemler geliştirmeyi kapsıyor."
    },
    about_p3: {
        en: "I care about code that other people can understand. Teaching math and programming keeps me close to the basics, and building projects keeps me curious about how small choices make a product feel easier, faster, and kinder to use.",
        bg: "Залагам на чистата архитектура, непрекъснатото учене и споделянето на знания чрез преподаване. Най-добре се развивам в среда, в която доброто инженерство върви ръка за ръка с практичното решаване на проблеми.",
        tr: "Temiz mimariye, sürekli öğrenmeye ve öğretmenlik yoluyla bilgi paylaşmaya önem veriyorum. Güçlü mühendisliğin pratik problem çözme ile birleştiği ortamlarda en iyi şekilde çalışırım."
    },
    lang_title: { en: "Languages I Speak", bg: "Езици, които владея", tr: "Konuştuğum Diller" },
    lang_bg: { en: "Bulgarian", bg: "Български", tr: "Bulgarca" },
    lang_native1: { en: "Native", bg: "Майчин", tr: "Anadil" },
    lang_tr: { en: "Turkish", bg: "Турски", tr: "Türkçe" },
    lang_native2: { en: "Native", bg: "Майчин", tr: "Anadil" },
    lang_en: { en: "English", bg: "Английски", tr: "İngilizce" },
    lang_de: { en: "German", bg: "Немски", tr: "Almanca" },
    journey_title: { en: "The Journey", bg: "Пътят", tr: "Yolculuk" },
    journey_subtitle: { en: "Experience & Education", bg: "Опит и образование", tr: "Deneyim ve Eğitim" },
    exp_role: { en: "Math & Programming Teacher", bg: "Учител по математика и програмиране", tr: "Matematik ve Programlama Öğretmeni" },
    exp_date: { en: "Jan 2026 - Present", bg: "Януари 2026 - до момента", tr: "Ocak 2026 - Günümüz" },
    exp_li1: {
        en: "Teach programming languages (C++, C#, JavaScript, Python) and mathematics to students of different ages.",
        bg: "Преподавам езици за програмиране (C++, C#, JavaScript, Python) и математика на ученици от различни възрасти.",
        tr: "Farklı yaş gruplarındaki öğrencilere programlama dilleri (C++, C#, JavaScript, Python) ve matematik öğretiyorum."
    },
    exp_li2: {
        en: "Prepare structured learning materials that support analytical thinking and problem-solving.",
        bg: "Подготвям структурирани учебни материали, които подпомагат аналитичното мислене и решаването на проблеми.",
        tr: "Analitik düşünmeyi ve problem çözmeyi destekleyen yapılandırılmış eğitim materyalleri hazırlıyorum."
    },
    exp_li3: {
        en: "Adjust teaching methods to make technical topics easier to understand at different levels.",
        bg: "Адаптирам методите си на преподаване, за да направя техническите теми по-лесни за усвояване на различни нива.",
        tr: "Teknik konuların farklı seviyelerde daha kolay anlaşılması için öğretim yöntemlerimi uyarlıyorum."
    },
    edu_master: { en: "Master's Degree in Software Engineering", bg: "Магистър по софтуерно инженерство", tr: "Yazılım Mühendisliği Yüksek Lisansı" },
    edu_uni1: { en: "University of Ruse \"Angel Kanchev\"", bg: "Русенски университет „Ангел Кънчев“", tr: "Rusçuk Üniversitesi \"Angel Kanchev\"" },
    edu_loc1: { en: "Ruse, Bulgaria", bg: "Русе, България", tr: "Rusçuk, Bulgaristan" },
    edu_bachelor: { en: "Bachelor's Degree in Software Engineering", bg: "Бакалавър по софтуерно инженерство", tr: "Yazılım Mühendisliği Lisansı" },
    edu_uni2: { en: "University of Ruse \"Angel Kanchev\"", bg: "Русенски университет „Ангел Кънчев“", tr: "Rusçuk Üniversitesi \"Angel Kanchev\"" },
    edu_loc2: { en: "Ruse, Bulgaria", bg: "Русе, България", tr: "Rusçuk, Bulgaristan" },
    edu_highschool: { en: "Software and Hardware Sciences", bg: "Софтуерни и хардуерни науки", tr: "Yazılım ve Donanım Bilimleri" },
    edu_hs_name: { en: "Hristo Botev Secondary School", bg: "СУ „Христо Ботев“", tr: "Hristo Botev Lisesi" },
    edu_loc3: { en: "Ruse, Bulgaria", bg: "Русе, България", tr: "Rusçuk, Bulgaristan" },
    skills_title: { en: "Tech Toolkit", bg: "Технологичен стек", tr: "Teknoloji Araç Seti" },
    proj_subtitle: { en: "Portfolio", bg: "Портфолио", tr: "Portföy" },
    proj_title: { en: "Recent Projects", bg: "Последни проекти", tr: "Son Projeler" },
    cert_title: { en: "Certifications", bg: "Сертификати", tr: "Sertifikalar" },
    cert_subtitle: { en: "Click to flip. Drag to move.", bg: "Кликнете, за да обърнете. Плъзнете, за да преместите.", tr: "Çevirmek için tıkla. Taşımak için sürükle." },
    contact_title: { en: "Drop a line...", bg: "Свържете се с мен...", tr: "Bir mesaj bırakın..." },
    contact_name_label: { en: "Name", bg: "Име", tr: "İsim" },
    contact_email_label: { en: "Email", bg: "Имейл", tr: "E-posta" },
    contact_msg_label: { en: "What's on your mind?", bg: "Какво искате да споделите?", tr: "Aklınızda ne var?" },
    contact_send: { en: "Send", bg: "Изпрати", tr: "Gönder" },
    contact_info_email: { en: "Email", bg: "Имейл", tr: "E-posta" },
    contact_info_loc: { en: "Location", bg: "Местоположение", tr: "Konum" },
    modal_main_view: { en: "Main View (Click to expand)", bg: "Основен изглед (кликнете, за да уголемите)", tr: "Ana Görünüm (Büyütmek için tıkla)" },
    modal_gallery: { en: "Gallery", bg: "Галерия", tr: "Galeri" },
    modal_workflow_title: { en: "Features / Workflow", bg: "Функции / Работен процес", tr: "Özellikler / İş Akışı" },
    modal_btn: { en: "View Repository", bg: "Вижте хранилището", tr: "Depoyu Görüntüle" },
    alert_success_title: { en: "Message Sent!", bg: "Изпратено!", tr: "Gönderildi!" },
    alert_success_msg: { en: "Thank you for contacting me. I will get back to you soon.", bg: "Благодаря, че се свързахте с мен. Ще ви отговоря скоро.", tr: "İletişime geçtiğiniz için teşekkürler. Size yakında dönüş yapacağım." }
};

const projectsData = {
    langforu: {
        title: "LangForU",
        tags: ["Java", "Spring Boot", "MySQL", "OpenAI API", "Thymeleaf", "HTML/CSS/JS"],
        desc: {
            en: `"LangForU" is a comprehensive web platform designed as a software engineering diploma project. Its primary goal is to provide an interactive and effective language learning environment specifically tailored for Bulgarian-speaking users. The project adopts a holistic educational approach, combining structured lessons with modern digital technologies and artificial intelligence. <br><br> A central feature is the AI-powered virtual assistant, "Sevi". Built using the OpenAI API, "Sevi" offers personalized support, explains exercises, and assists in automated evaluation of written essays.`,
            bg: `„LangForU“ е цялостна уеб платформа, проектирана като дипломен проект по софтуерно инженерство. Основната ѝ цел е да осигури интерактивна и ефективна среда за езиково обучение, специално адаптирана за българоговорящи потребители. Проектът възприема холистичен образователен подход, комбинирайки структурирани уроци с модерни дигитални технологии и изкуствен интелект. <br><br> Централна функция е базираният на AI виртуален асистент „Sevi“. Изграден с помощта на OpenAI API, „Sevi“ предлага персонализирана поддръжка.`,
            tr: `"LangForU", yazılım mühendisliği bitirme projesi olarak tasarlanmış kapsamlı bir web platformudur. Temel amacı, özellikle Bulgarca konuşan kullanıcılar için tasarlanmış etkileşimli ve etkili bir dil öğrenme ortamı sağlamaktır. Proje, yapılandırılmış dersleri modern dijital teknolojiler ve yapay zeka ile birleştirerek bütünsel bir eğitim yaklaşımı benimser. <br><br> En önemli özelliği, yapay zeka destekli sanal asistan "Sevi"dir.`
        },
        workflow: {
            en: ["Structured Educational Courses with multimedia content and instant feedback.", "Final Exam Module with automated grading and PDF certificate generation.", "Community Blog Section for educational articles and user engagement.", "Comprehensive Administrative Panel for full platform control."],
            bg: ["Структурирани образователни курсове с мултимедийно съдържание и незабавна обратна връзка.", "Модул за финален изпит с автоматизирано оценяване и генериране на PDF сертификати.", "Блог секция на общността за образователни статии и ангажиране на потребителите.", "Изчерпателен административен панел за пълен контрол върху платформата."],
            tr: ["Multimedya içeriği ve anında geri bildirim sunan Yapılandırılmış Eğitim Kursları.", "Otomatik notlandırma ve PDF sertifika oluşturma özellikli Final Sınavı Modülü.", "Eğitim makaleleri ve kullanıcı etkileşimi için Topluluk Blog Bölümü.", "Tam platform kontrolü için Kapsamlı Yönetim Paneli."]
        },
        img: "images/langforu/index.png",
        gallery: ["images/langforu/courses.png", "images/langforu/blog.png", "images/langforu/blog-details.png"],
        link: "https://github.com/semayashar/LangForU_2025"
    },
    travelis: {
        title: "Travelis",
        tags: ["ASP.NET Core", "C#", "MS SQL Server", "Dapper", "AI Recommendations", "Clean Architecture"],
        desc: {
            en: "Travelis is an intelligent booking system unifying key travel elements—accommodations, transport (taxis, car rentals), and attractions—into a single platform. Built with Clean Architecture and ASP.NET Core 10, it ensures high-performance data access via Dapper and MS SQL Server. The system features AI-driven personalized recommendations hosted on a separate Ubuntu server, alongside strict security with JWT, 2FA, and hashed passwords.",
            bg: "Travelis е интелигентна система за резервации, която обединява в една платформа ключови елементи на пътуването - настаняване, транспорт (такси, коли под наем) и атракции. Изградена е с Clean Architecture и ASP.NET Core 10, като осигурява високопроизводителен достъп до данни чрез Dapper и MS SQL Server. Системата включва AI-базирани персонализирани препоръки, хоствани на отделен Ubuntu сървър, както и строга сигурност с JWT, 2FA и хеширани пароли.",
            tr: "Travelis, konaklama, ulaşım (taksi, araç kiralama) ve turistik yerler gibi temel seyahat unsurlarını tek bir platformda birleştiren akıllı bir rezervasyon sistemidir. Clean Architecture ve ASP.NET Core 10 ile inşa edilmiş olup, Dapper ve MS SQL Server aracılığıyla yüksek performanslı veri erişimi sağlar. Sistem, ayrı bir Ubuntu sunucusunda barındırılan yapay zeka destekli kişiselleştirilmiş önerilerin yanı sıra JWT, 2FA ve şifrelenmiş parolalar ile sıkı bir güvenlik sunar."
        },
        workflow: {
            en: ["Role-based access for Clients, Hotel Admins, and System Admins.", "Centralized booking for hotels, taxis, and rental cars.", "AI-powered attraction & hotel recommendations.", "Robust security: JWT Auth, Parameterized Queries, and 2FA."],
            bg: ["Ролеви достъп за Клиенти, Хотелски и Системни администратори.", "Централизирани резервации за хотели, таксита и коли под наем.", "AI-базирани препоръки за атракции и хотели.", "Висока сигурност: JWT Auth, Параметризирани заявки и 2FA."],
            tr: ["Müşteriler, Otel ve Sistem Yöneticileri için rol tabanlı erişim.", "Oteller, taksiler ve kiralık araçlar için merkezi rezervasyon.", "Yapay zeka destekli turistik yer ve otel önerileri.", "Güçlü güvenlik: JWT Auth, Parametreli Sorgular ve 2FA."]
        },
        img: "images/travelis/index.png",
        gallery: ["images/travelis/account-account.png", "images/travelis/hotels-hotel-grid.png", "images/travelis/support-ticket-list.png"],
        link: "https://github.com/semayashar"
    },
    sportarete: {
        title: "SportArete",
        tags: ["C#", "ASP.NET Core MVC", "Entity Framework", "SQL Server", "NUnit"],
        desc: {
            en: "Developed a full-featured e-commerce system offering sports equipment. The platform includes a complete cart system, secure checkout, product reviews, and a dedicated admin dashboard for inventory management.",
            bg: "Разработих пълнофункционална система за електронна търговия, предлагаща спортно оборудване. Платформата включва завършена система за пазарска количка, сигурно плащане, отзиви за продукти и специално административно табло за управление на инвентара.",
            tr: "Spor ekipmanları sunan tam özellikli bir e-ticaret sistemi geliştirdim. Platform; eksiksiz bir sepet sistemi, güvenli ödeme, ürün incelemeleri ve envanter yönetimi için özel bir yönetici paneli içeriyor."
        },
        workflow: {
            en: ["Applied MVC architecture for clean separation of concerns.", "Implemented unit testing using NUnit to ensure application stability."],
            bg: ["Приложих MVC архитектура за чисто разделяне на отговорностите.", "Внедрих unit тестове с помощта на NUnit, за да гарантирам стабилността на приложението."],
            tr: ["Sorumlulukların net bir şekilde ayrılması için MVC mimarisini uyguladım.", "Uygulama kararlılığını sağlamak için NUnit kullanarak birim testleri entegre ettim."]
        },
        img: "images/sportarete/index.png",
        gallery: ["images/sportarete/allProducts.png", "images/sportarete/categories.png", "images/sportarete/brands.png"],
        link: "https://github.com/semayashar"
    },
    conexion: {
        title: "Conexion",
        tags: ["C#", "ASP.NET Core", "Clean Architecture", "SQL Server", "Bootstrap"],
        desc: {
            en: "Designed a scalable backend using Clean Architecture principles for a comprehensive Social Media Platform. Focuses on robust domain separation and highly responsive UI interactions.",
            bg: "Проектирах мащабируем бекенд, използвайки принципите на Clean Architecture за всеобхватна платформа за социални медии. Фокусът е върху стабилното разделяне на домейна и изключително отзивчивите UI взаимодействия.",
            tr: "Kapsamlı bir Sosyal Medya Platformu için Clean Architecture ilkelerini kullanarak ölçeklenebilir bir arka uç tasarladım. Güçlü alan (domain) ayrımına ve yüksek yanıt hızına sahip kullanıcı arayüzü etkileşimlerine odaklanıyor."
        },
        workflow: {
            en: ["Engineered scalable modules for posts, likes, comments, and user profiles.", "Built a responsive, user-friendly UI using Bootstrap and SCSS."],
            bg: ["Създадох мащабируеми модули за публикации, харесвания, коментари и потребителски профили.", "Изградих отзивчив и удобен за потребителя интерфейс с помощта на Bootstrap и SCSS."],
            tr: ["Gönderiler, beğeniler, yorumlar ve kullanıcı profilleri için ölçeklenebilir modüller geliştirdim.", "Bootstrap ve SCSS kullanarak duyarlı, kullanıcı dostu bir arayüz oluşturdum."]
        },
        img: "images/conexion/index.png",
        gallery: ["images/conexion/connect.png", "images/conexion/about.png", "images/conexion/privacy.png"],
        link: "https://github.com/semayashar"
    }
};

// --- 2. APPLICATION BOOTSTRAP ---
const LANGUAGE_BUTTON_ACTIVE = "px-3 py-1 text-xs font-bold rounded bg-white dark:bg-gray-700 shadow-sm text-primary transition-all";
const LANGUAGE_BUTTON_INACTIVE = "px-3 py-1 text-xs font-bold rounded text-slate-500 hover:text-primary transition-all";

let activeProjectId = null;
let lastFocusedElement = null;

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    initRevealOnScroll();
    initMotionScopes();
    initTheme();
    initLanguageControls();
    initMobileMenu();
    initScrollTargets();
    initScrollProgress();
    initCursorSpotlight();
    initSkillFilters();
    initProjectBrowser();
    initCertificateCards();
    initLazyVisibleImages();
    initImageFallbacks();
    initModalControls();
    initActiveNavigation();
    initContactForm();

    document.querySelectorAll('.draggable').forEach(makeDraggable);
    changeLanguage(localStorage.getItem('pref-lang') || 'en');
}

function initRevealOnScroll() {
    const revealItems = Array.from(document.querySelectorAll('[data-aos]'));
    if (!revealItems.length) return;

    revealItems.forEach((item) => {
        item.style.setProperty('--reveal-delay', `${Number(item.dataset.aosDelay || 0)}ms`);
        item.style.setProperty('--reveal-duration', `${Number(item.dataset.aosDuration || 800)}ms`);
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
}

function initMotionScopes() {
    const motionScopes = [
        document.getElementById('welcomePage'),
        ...document.querySelectorAll('.language-card')
    ].filter(Boolean);

    if (!motionScopes.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        motionScopes.forEach((scope) => scope.classList.add('is-motion-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('is-motion-visible', entry.isIntersecting);
        });
    }, { rootMargin: '120px 0px', threshold: 0.05 });

    motionScopes.forEach((scope) => observer.observe(scope));
}

function initLazyVisibleImages(root = document) {
    const images = Array.from(root.querySelectorAll('img[data-src]'));
    if (!images.length) return;

    const loadImage = (image) => {
        if (!image.dataset.src) return;
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
        applyImageFallback(image);
    };

    if (!('IntersectionObserver' in window)) {
        images.forEach(loadImage);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            loadImage(entry.target);
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '300px 0px', threshold: 0.01 });

    images.forEach((image) => observer.observe(image));
}

function initTheme() {
    const themeButtons = [
        document.getElementById('theme-toggle'),
        document.getElementById('theme-toggle-mobile')
    ].filter(Boolean);
    const themeIcons = [
        document.getElementById('theme-toggle-icon'),
        document.getElementById('theme-toggle-icon-mobile')
    ].filter(Boolean);

    const setTheme = (isDark) => {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.theme = isDark ? 'dark' : 'light';
        const iconClass = isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-slate-600';
        themeIcons.forEach((icon) => {
            icon.className = iconClass;
        });
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark));

    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            setTheme(!document.documentElement.classList.contains('dark'));
        });
    });
}

function initLanguageControls() {
    document.querySelectorAll('[data-language-option]').forEach((button) => {
        button.addEventListener('click', () => changeLanguage(button.dataset.languageOption));
    });
}

function initMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const openButton = document.getElementById('mobile-menu-btn');
    const closeButton = document.getElementById('close-menu-btn');
    if (!menu || !openButton || !closeButton) return;

    const closeMenu = () => {
        menu.classList.add('hidden');
        document.body.classList.remove('is-locked');
    };

    openButton.addEventListener('click', () => {
        menu.classList.remove('hidden');
        document.body.classList.add('is-locked');
        closeButton.focus();
    });

    closeButton.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

function initScrollTargets() {
    document.querySelectorAll('[data-scroll-target]').forEach((button) => {
        button.addEventListener('click', () => {
            document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function initScrollProgress() {
    const progress = document.getElementById('scroll-progress');
    if (!progress) return;

    const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progress.style.width = `${Math.min(percent, 100)}%`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
}

function initCursorSpotlight() {
    const spotlight = document.getElementById('cursor-spotlight');
    if (!spotlight || window.matchMedia('(pointer: coarse)').matches) return;

    let pendingFrame = null;
    let nextX = 0;
    let nextY = 0;

    window.addEventListener('pointermove', (event) => {
        nextX = event.clientX;
        nextY = event.clientY;

        if (pendingFrame) return;
        pendingFrame = requestAnimationFrame(() => {
            spotlight.style.setProperty('--x', `${nextX}px`);
            spotlight.style.setProperty('--y', `${nextY}px`);
            spotlight.style.opacity = '1';
            pendingFrame = null;
        });
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
        spotlight.style.opacity = '0';
    });
}

function initSkillFilters() {
    const filters = document.querySelectorAll('[data-skill-filter]');
    const skillCloud = document.getElementById('skill-cloud');
    if (!filters.length || !skillCloud) return;

    const categories = {
        language: ['c#', 'java', 'c++', 'javascript', 'typescript', 'python', 'html/css'],
        framework: ['asp.net', 'spring', 'react', 'vue', 'tailwind', 'bootstrap', 'scss', 'entity'],
        data: ['sql', 'postgresql', 'ms sql', 'mysql', 'mongodb', 'database'],
        tool: ['git', 'docker', 'linux', 'jira', 'postman', 'selenium', 'photoshop', 'rest', 'ci/cd', 'clean arch']
    };

    const chips = Array.from(skillCloud.children).filter((chip) => chip.tagName === 'DIV' && chip.textContent.trim());

    filters.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.skillFilter;
            filters.forEach((item) => item.classList.toggle('is-active', item === button));

            chips.forEach((chip) => {
                const text = chip.textContent.toLowerCase();
                const isMatch = filter === 'all' || categories[filter].some((keyword) => text.includes(keyword));
                chip.classList.toggle('is-muted', !isMatch);
            });
        });
    });
}

function initProjectBrowser() {
    const projectCards = Array.from(document.querySelectorAll('[data-project-id]'));
    const projectFilters = Array.from(document.querySelectorAll('[data-project-filter]'));

    projectCards.forEach((card) => {
        card.addEventListener('click', () => openModal(card.dataset.projectId));
    });

    projectFilters.forEach((filterButton) => {
        filterButton.setAttribute('aria-pressed', String(filterButton.classList.contains('is-active')));
        filterButton.addEventListener('click', () => {
            const filter = filterButton.dataset.projectFilter;
            projectFilters.forEach((button) => {
                const isActive = button === filterButton;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });

            projectCards.forEach((card) => {
                const tags = card.dataset.projectTags?.split(' ') || [];
                card.classList.toggle('is-hidden', filter !== 'all' && !tags.includes(filter));
            });
        });
    });
}

function initCertificateCards() {
    document.querySelectorAll('[data-flip-card]').forEach((card) => {
        card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            flipCard(card);
        });
    });
}

function initImageFallbacks(root = document) {
    root.querySelectorAll('img[data-fallback]').forEach(applyImageFallback);
}

function applyImageFallback(image) {
    image.onerror = () => {
        if (image.src === image.dataset.fallback) return;
        image.removeAttribute('srcset');
        image.src = image.dataset.fallback;
    };
}

function initModalControls() {
    const projectModal = document.getElementById('project-modal');
    const fullscreenViewer = document.getElementById('fs-viewer');

    document.querySelector('[data-modal-close]')?.addEventListener('click', closeModal);
    document.querySelector('[data-fullscreen-close]')?.addEventListener('click', closeFullscreen);
    document.querySelector('[data-fullscreen-open]')?.addEventListener('click', (event) => {
        openFullscreen(Number(event.currentTarget.dataset.fullscreenOpen || 0));
    });

    document.querySelectorAll('[data-fullscreen-nav]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            changeFsImage(Number(button.dataset.fullscreenNav));
        });
    });

    document.querySelector('[data-fullscreen-backdrop]')?.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) closeFullscreen();
    });

    projectModal?.addEventListener('click', (event) => {
        if (event.target === projectModal) closeModal();
    });

    fullscreenViewer?.addEventListener('click', (event) => {
        if (event.target === fullscreenViewer) closeFullscreen();
    });
}

function initActiveNavigation() {
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    if (!navLinks.length || !('IntersectionObserver' in window)) return;

    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const setActive = (sectionId) => {
        navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${sectionId}`);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}

function initContactForm() {
    document.getElementById('contact-form')?.addEventListener('submit', sendEmail);
}

// --- 4. LANGUAGE FUNCTION ---
function changeLanguage(lang) {
    localStorage.setItem('pref-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-text').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key && translations[key] && translations[key][lang]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key][lang];
            } else {
                el.textContent = translations[key][lang];
            }
        }
    });

    document.querySelectorAll('[data-language-option]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.languageOption === lang));
    });

    ['en', 'bg', 'tr'].forEach(b => {
        const btn = document.getElementById(`btn-${b}`);
        if (btn) btn.className = b === lang ? LANGUAGE_BUTTON_ACTIVE : LANGUAGE_BUTTON_INACTIVE;
    });

    if (activeProjectId && document.getElementById('project-modal')?.classList.contains('visible')) {
        renderProjectModal(activeProjectId);
    }
}

// --- 5. DRAG AND FLIP LOGIC ---
let isDragging = false;
let dragStartTime = 0;

function makeDraggable(el) {
    let dragStartX = 0, dragStartY = 0;
    let initialLeft = 0, initialTop = 0;
    let maxLeft = Infinity, maxTop = Infinity;
    let pendingFlipCard = null;

    el.addEventListener('pointerdown', startDrag);

    function startDrag(event) {
        if (!event.isPrimary || ['a', 'i', 'button'].includes(event.target.tagName.toLowerCase())) return;
        event.preventDefault();
        pendingFlipCard = event.target.closest('[data-flip-card]');
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        initDrag();
        el.setPointerCapture(event.pointerId);
        el.addEventListener('pointermove', elementDrag);
        el.addEventListener('pointerup', closeDragElement);
        el.addEventListener('pointercancel', closeDragElement);
    }

    function initDrag() {
        isDragging = false;
        dragStartTime = Date.now();
        el.style.animation = 'none';
        el.classList.add('drag-active');

        const style = window.getComputedStyle(el);
        initialLeft = parseFloat(style.left) || 0;
        initialTop = parseFloat(style.top) || 0;

        if (style.position === 'static') el.style.position = 'relative';
        if (style.right !== 'auto' && el.style.right !== '') el.style.right = 'auto';
        if (style.bottom !== 'auto' && el.style.bottom !== '') el.style.bottom = 'auto';

        const container = el.parentElement;
        if (container) {
            maxLeft = Math.max(container.clientWidth - el.offsetWidth, 0);
            maxTop = Math.max(container.clientHeight - el.offsetHeight, 0);

            const children = Array.from(container.children).filter(c => c.classList.contains('draggable'));
            children.forEach(c => {
                if (!c.dataset.baseZIndex) {
                    const baseZIndex = window.getComputedStyle(c).zIndex;
                    c.dataset.baseZIndex = baseZIndex === 'auto' ? '10' : baseZIndex;
                }
                c.style.zIndex = c.dataset.baseZIndex;
            });
        }
        el.style.zIndex = 1000;
    }

    function elementDrag(event) {
        event.preventDefault();
        isDragging = true;
        setNewPos(event.clientX, event.clientY);
    }

    function setNewPos(clientX, clientY) {
        const dx = clientX - dragStartX;
        const dy = clientY - dragStartY;
        const nextLeft = Math.min(Math.max(initialLeft + dx, 0), maxLeft);
        const nextTop = Math.min(Math.max(initialTop + dy, 0), maxTop);

        el.style.left = nextLeft + "px";
        el.style.top = nextTop + "px";
    }

    function closeDragElement(event) {
        if (event?.pointerId && el.hasPointerCapture(event.pointerId)) {
            el.releasePointerCapture(event.pointerId);
        }
        el.removeEventListener('pointermove', elementDrag);
        el.removeEventListener('pointerup', closeDragElement);
        el.removeEventListener('pointercancel', closeDragElement);
        el.classList.remove('drag-active');

        if (!isDragging && pendingFlipCard) {
            flipCard(pendingFlipCard);
        }

        pendingFlipCard = null;

        if (isDragging && (Date.now() - dragStartTime > 150)) {
            setTimeout(() => isDragging = false, 50);
        } else {
            isDragging = false;
        }
    }
}

function flipCard(cardElement) {
    if (isDragging) return;
    cardElement.classList.toggle('is-flipped');
}

// --- 6. MODALS & FS VIEWER LOGIC ---
let fsImages = [];
let fsCurrentIndex = 0;

function openModal(id) {
    if (!projectsData[id]) return;

    activeProjectId = id;
    lastFocusedElement = document.activeElement;
    renderProjectModal(id);

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    requestAnimationFrame(() => document.getElementById('modal-content').classList.remove('scale-95'));
    document.body.classList.add('is-locked');
    document.querySelector('[data-modal-close]')?.focus();
}

function renderProjectModal(id) {
    const project = projectsData[id];
    const lang = localStorage.getItem('pref-lang') || 'en';

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-desc').innerHTML = project.desc[lang] || project.desc.en;
    document.getElementById('modal-link').href = project.link;

    const modalImage = document.getElementById('modal-img');
    modalImage.src = project.img;
    modalImage.alt = `${project.title} main preview`;
    applyImageFallback(modalImage);

    const tags = document.getElementById('modal-tags');
    tags.replaceChildren(...project.tags.map((tag) => {
        const span = document.createElement('span');
        span.className = 'px-4 py-1.5 bg-gray-200 dark:bg-gray-800 text-ink dark:text-gray-300 rounded-full text-xs font-mono font-bold';
        span.textContent = tag;
        return span;
    }));

    const workflow = document.getElementById('modal-workflow');
    const workflowData = project.workflow[lang] || project.workflow.en;
    workflow.replaceChildren(...workflowData.map((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        return li;
    }));

    fsImages = [project.img, ...project.gallery];
    const galleryGrid = document.getElementById('modal-gallery-grid');
    galleryGrid.replaceChildren(...project.gallery.map((imageSrc, index) => createGalleryButton(imageSrc, index + 1, project.title)));
}

function createGalleryButton(imageSrc, index, projectTitle) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'h-20 sm:h-28 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden cursor-pointer group relative';
    button.addEventListener('click', () => openFullscreen(index));

    const image = document.createElement('img');
    image.src = imageSrc;
    image.dataset.fallback = 'https://placehold.co/300x200?text=Gallery';
    image.alt = `${projectTitle} gallery preview ${index}`;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.className = 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500';
    applyImageFallback(image);

    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100';
    const icon = document.createElement('i');
    icon.className = 'fas fa-expand text-white text-xl';
    overlay.appendChild(icon);

    button.append(image, overlay);
    return button;
}

function closeModal() {
    document.getElementById('modal-content').classList.add('scale-95');
    const modal = document.getElementById('project-modal');
    modal.classList.remove('visible');
    setTimeout(() => modal.classList.add('hidden'), 300);
    document.body.classList.remove('is-locked');
    activeProjectId = null;
    lastFocusedElement?.focus?.();
}

function openFullscreen(index = 0) {
    if (!fsImages.length) return;
    fsCurrentIndex = index;
    const fsImg = document.getElementById('fs-img');
    fsImg.src = fsImages[fsCurrentIndex];
    fsImg.alt = `${projectsData[activeProjectId]?.title || 'Project'} preview ${fsCurrentIndex + 1}`;
    const modal = document.getElementById('fs-viewer');
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}

function closeFullscreen() {
    const modal = document.getElementById('fs-viewer');
    modal.classList.remove('visible');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function changeFsImage(direction) {
    fsCurrentIndex += direction;
    if (fsCurrentIndex < 0) fsCurrentIndex = fsImages.length - 1;
    if (fsCurrentIndex >= fsImages.length) fsCurrentIndex = 0;

    const fsImg = document.getElementById('fs-img');
    fsImg.style.opacity = 0;

    setTimeout(() => {
        fsImg.src = fsImages[fsCurrentIndex];
        fsImg.style.opacity = 1;
    }, 150);
}

document.addEventListener('keydown', (e) => {
    const fsViewer = document.getElementById('fs-viewer');
    if (fsViewer.classList.contains('visible')) {
        if (e.key === 'Escape') closeFullscreen();
        if (e.key === 'ArrowRight') changeFsImage(1);
        if (e.key === 'ArrowLeft') changeFsImage(-1);
    } else {
        const projectModal = document.getElementById('project-modal');
        if (projectModal.classList.contains('visible') && e.key === 'Escape') {
            closeModal();
        }
    }
});

function loadScriptOnce(src) {
    if (loadedScriptPromises.has(src)) return loadedScriptPromises.get(src);

    const promise = new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
            existingScript.addEventListener('load', resolve, { once: true });
            existingScript.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    loadedScriptPromises.set(src, promise);
    return promise;
}

function ensureEmailJs() {
    if (emailJsReady) return emailJsReady;

    emailJsReady = loadScriptOnce(EXTERNAL_SCRIPTS.emailjs).then(() => {
        if (!window.emailjs) throw new Error('EmailJS failed to load.');
        emailjs.init(EMAILJS_CONFIG.publicKey);
    });

    return emailJsReady;
}

// --- 7. CONTACT FORM (Using EmailJS) ---
async function sendEmail(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const lang = localStorage.getItem('pref-lang') || 'en';
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const fromName = String(formData.get('from_name') || '').trim();
    const fromEmail = String(formData.get('from_email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const params = {
        from_name: fromName,
        name: fromName,
        from_email: fromEmail,
        user_email: fromEmail,
        email: fromEmail,
        reply_to: fromEmail,
        message,
        to_name: 'Sema Yasharova'
    };

    try {
        await ensureEmailJs();
        await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            params,
            EMAILJS_CONFIG.publicKey
        );
        form.reset();

        showAlert({
            title: translations.alert_success_title[lang] || translations.alert_success_title.en,
            text: translations.alert_success_msg[lang] || translations.alert_success_msg.en,
            icon: 'success'
        });
    } catch (error) {
        console.error(error);
        showAlert({
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            icon: "error"
        });
    } finally {
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
    }
}

async function showAlert({ title, text, icon }) {
    const isDark = document.documentElement.classList.contains('dark');

    try {
        if (!window.Swal) await loadScriptOnce(EXTERNAL_SCRIPTS.sweetalert);
    } catch (error) {
        console.error(error);
        window.alert(`${title}\n${text}`);
        return;
    }

    Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor: '#2563eb',
        background: isDark ? '#1C1C1C' : '#fcfcfc',
        color: isDark ? '#E5E7EB' : '#1A1A1A',
        customClass: { popup: 'font-mono' }
    });
}
