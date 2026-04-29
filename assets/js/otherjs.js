
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',
                secondary: '#1e40af',
                accent: '#3b82f6',
                dark: '#0f172a',
                light: '#f8fafc',
                deskLight: '#fcfcfc',
                deskDark: '#121212',
                ink: '#1A1A1A',
                sticky: '#FDE68A',
                darkSticky: '#D97706',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                handwriting: ['Caveat', 'cursive'],
                mono: ['Courier Prime', 'monospace'],
            },
            boxShadow: {
                'paper': '0 10px 30px -5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
                'floating': '0 30px 60px -15px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.1)',
                'polaroid': '0 15px 35px -5px rgba(0,0,0,0.15)',
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'float-med': 'float 5s ease-in-out infinite',
                'float-fast': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--rot))' },
                    '50%': { transform: 'translateY(-12px) rotate(var(--rot))' },
                }
            }
        }
    }
}

// --- 1. FULL TRANSLATION DICTIONARY ---
// --- 1. FULL TRANSLATION DICTIONARY ---
const translations = {
    // Навигация
    nav_about: { en: "About", bg: "За мен", tr: "Hakkımda" },
    nav_journey: { en: "Experience", bg: "Опит", tr: "Deneyim" },
    nav_projects: { en: "Projects", bg: "Проекти", tr: "Projeler" },
    nav_contact: { en: "Contact", bg: "Контакти", tr: "İletişim" },

    mob_home: { en: "Home", bg: "Начало", tr: "Ana Sayfa" },
    mob_about: { en: "About", bg: "За мен", tr: "Hakkımda" },
    mob_journey: { en: "Experience", bg: "Опит", tr: "Deneyim" },
    mob_projects: { en: "Projects", bg: "Проекти", tr: "Projeler" },
    mob_contact: { en: "Contact", bg: "Контакти", tr: "İletişim" },

    // Hero секция
    hero_subtitle: {
        en: "I think first. Then I build.",
        bg: "Първо мисля. После създавам.",
        tr: "Önce düşünürüm. Sonra inşa ederim."
    },
    hero_badge_desc: {
        en: "Software Engineer focused on full-stack development and scalable systems.",
        bg: "Софтуерен инженер с фокус върху full-stack разработка и мащабируеми системи.",
        tr: "Full-stack geliştirme ve ölçeklenebilir sistemlere odaklanan bir Yazılım Mühendisiyim."
    },
    hero_term_whoami: {
        en: "Master's student and software engineer with 3+ years of coding experience.",
        bg: "Магистър по софтуерно инженерство и разработчик с над 3 години опит в програмирането.",
        tr: "3 yılı aşkın kodlama deneyimine sahip, yüksek lisans öğrencisi ve yazılım geliştiricisiyim."
    },
    hero_sticky: {
        en: "Always building, learning, and sharing knowledge. Open to new opportunities! 💡",
        bg: "Винаги създавам, уча и споделям знания. Отворена съм за нови възможности! 💡",
        tr: "Sürekli üretiyor, öğreniyor ve bilgi paylaşıyorum. Yeni fırsatlara açığım! 💡"
    },
    hero_polaroid: {
        en: "graduation day 🎓",
        bg: "денят на дипломирането 🎓",
        tr: "mezuniyet günü 🎓"
    },

    // За мен
    about_title: { en: "Who Am I?", bg: "Коя съм аз?", tr: "Ben Kimim?" },
    about_p1: {
        en: "I am a dedicated Software Engineer currently pursuing my Master's degree at the University of Ruse 'Angel Kanchev', with a focus on full-stack and backend development.",
        bg: "Аз съм отдаден софтуерен инженер и в момента продължавам обучението си в магистърска програма по софтуерно инженерство в Русенския университет „Ангел Кънчев“, с фокус върху full-stack и backend разработка.",
        tr: "Şu anda Rusçuk Üniversitesi \"Angel Kanchev\"'de yüksek lisans eğitimime devam eden, full-stack ve backend geliştirmeye odaklanan bir Yazılım Mühendisiyim."
    },
    about_p2: {
        en: "My experience includes building scalable systems in AI, e-commerce, and social platforms.",
        bg: "Опитът ми включва изграждане на мащабируеми системи в сферата на изкуствения интелект, електронната търговия и социалните платформи.",
        tr: "Deneyimim; yapay zeka, e-ticaret ve sosyal platformlar için ölçeklenebilir sistemler geliştirmeyi kapsıyor."
    },
    about_p3: {
        en: "I care about clean architecture, continuous learning, and sharing knowledge through teaching. I work best in environments where solid engineering meets practical problem solving.",
        bg: "Залагам на чистата архитектура, непрекъснатото учене и споделянето на знания чрез преподаване. Най-добре се развивам в среда, в която доброто инженерство върви ръка за ръка с практичното решаване на проблеми.",
        tr: "Temiz mimariye, sürekli öğrenmeye ve öğretmenlik yoluyla bilgi paylaşmaya önem veriyorum. Güçlü mühendisliğin pratik problem çözme ile birleştiği ortamlarda en iyi şekilde çalışırım."
    },

    // Езици
    lang_title: { en: "Languages I Speak", bg: "Езици, които владея", tr: "Konuştuğum Diller" },
    lang_bg: { en: "Bulgarian", bg: "Български", tr: "Bulgarca" },
    lang_native1: { en: "Native", bg: "Майчин", tr: "Anadil" },
    lang_tr: { en: "Turkish", bg: "Турски", tr: "Türkçe" },
    lang_native2: { en: "Native", bg: "Майчин", tr: "Anadil" },
    lang_en: { en: "English", bg: "Английски", tr: "İngilizce" },
    lang_de: { en: "German", bg: "Немски", tr: "Almanca" },

    // Пътят (Опит и Образование)
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

    // Образование
    edu_master: { en: "Master's Degree in Software Engineering", bg: "Магистър по софтуерно инженерство", tr: "Yazılım Mühendisliği Yüksek Lisansı" },
    edu_uni1: { en: "University of Ruse \"Angel Kanchev\"", bg: "Русенски университет „Ангел Кънчев“", tr: "Rusçuk Üniversitesi \"Angel Kanchev\"" },
    edu_loc1: { en: "Ruse, Bulgaria", bg: "Русе, България", tr: "Rusçuk, Bulgaristan" },

    edu_bachelor: { en: "Bachelor's Degree in Software Engineering", bg: "Бакалавър по софтуерно инженерство", tr: "Yazılım Mühendisliği Lisansı" },
    edu_uni2: { en: "University of Ruse \"Angel Kanchev\"", bg: "Русенски университет „Ангел Кънчев“", tr: "Rusçuk Üniversitesi \"Angel Kanchev\"" },
    edu_loc2: { en: "Ruse, Bulgaria", bg: "Русе, България", tr: "Rusçuk, Bulgaristan" },

    edu_highschool: { en: "Software and Hardware Sciences", bg: "Софтуерни и хардуерни науки", tr: "Yazılım ve Donanım Bilimleri" },
    edu_hs_name: { en: "Hristo Botev Secondary School", bg: "СУ „Христо Ботев“", tr: "Hristo Botev Lisesi" },
    edu_loc3: { en: "Ruse, Bulgaria", bg: "Русе, България", tr: "Rusçuk, Bulgaristan" },

    // Технологии и Проекти
    skills_title: { en: "Tech Toolkit", bg: "Технологичен стек", tr: "Teknoloji Araç Seti" },
    proj_subtitle: { en: "Portfolio", bg: "Портфолио", tr: "Portföy" },
    proj_title: { en: "Recent Projects", bg: "Последни проекти", tr: "Son Projeler" },
    cert_title: { en: "Certifications", bg: "Сертификати", tr: "Sertifikalar" },
    cert_subtitle: { en: "Click to flip. Drag to move.", bg: "Кликнете, за да обърнете. Плъзнете, за да преместите.", tr: "Çevirmek için tıkla. Taşımak için sürükle." },

    // Контакт
    contact_title: { en: "Drop a line...", bg: "Свържете се с мен...", tr: "Bir mesaj bırakın..." },
    contact_name_label: { en: "Name", bg: "Име", tr: "İsim" },
    contact_email_label: { en: "Email", bg: "Имейл", tr: "E-posta" },
    contact_msg_label: { en: "What's on your mind?", bg: "Какво искате да споделите?", tr: "Aklınızda ne var?" },
    contact_send: { en: "Send", bg: "Изпрати", tr: "Gönder" },
    contact_info_email: { en: "Email", bg: "Имейл", tr: "E-posta" },
    contact_info_loc: { en: "Location", bg: "Местоположение", tr: "Konum" },

    // Модални прозорци и алерти
    modal_main_view: { en: "Main View (Click to expand)", bg: "Основен изглед (кликнете, за да уголемите)", tr: "Ana Görünüm (Büyütmek için tıkla)" },
    modal_gallery: { en: "Gallery", bg: "Галерия", tr: "Galeri" },
    modal_workflow_title: { en: "Features / Workflow", bg: "Функции / Работен процес", tr: "Özellikler / İş Akışı" },
    modal_btn: { en: "View Repository", bg: "Вижте хранилището", tr: "Depoyu Görüntüle" },
    alert_success_title: { en: "Sent!", bg: "Изпратено!", tr: "Gönderildi!" },
    alert_success_msg: { en: "I'll get back to you soon.", bg: "Ще ви отговоря възможно най-скоро.", tr: "En kısa sürede size döneceğim." }
};
// --- 2. PROJECTS DATA ---
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

// --- 3. INIT & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });

    // Theme setup
    const themeBtn = document.getElementById('theme-toggle');
    const themeBtnMob = document.getElementById('theme-toggle-mobile');
    const themeIcon = document.getElementById('theme-toggle-icon');
    const themeIconMob = document.getElementById('theme-toggle-icon-mobile');

    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.className = 'fas fa-sun text-yellow-400';
        themeIconMob.className = 'fas fa-sun text-yellow-400';
    }

    function toggle() {
        document.documentElement.classList.toggle('dark');
        const darkNow = document.documentElement.classList.contains('dark');
        localStorage.theme = darkNow ? 'dark' : 'light';
        const cls = darkNow ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-slate-600';
        themeIcon.className = cls;
        themeIconMob.className = cls;
    }

    themeBtn.addEventListener('click', toggle);
    themeBtnMob.addEventListener('click', toggle);

    // Language setup
    changeLanguage(localStorage.getItem('pref-lang') || 'en');

    // Mobile menu
    const mMenu = document.getElementById('mobile-menu');
    document.getElementById('mobile-menu-btn').onclick = () => mMenu.classList.remove('hidden');
    document.getElementById('close-menu-btn').onclick = () => mMenu.classList.add('hidden');
    document.querySelectorAll('.mobile-link').forEach(l => l.onclick = () => mMenu.classList.add('hidden'));

    // Initialize Draggables
    document.querySelectorAll('.draggable').forEach(makeDraggable);
});

// --- 4. LANGUAGE FUNCTION ---
function changeLanguage(lang) {
    localStorage.setItem('pref-lang', lang);

    // Map the dictionary to HTML data-keys
    document.querySelectorAll('.lang-text').forEach(el => {
        const key = el.getAttribute('data-key');
        if (key && translations[key] && translations[key][lang]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key][lang];
            } else {
                el.innerHTML = translations[key][lang];
            }
        }
    });

    ['en', 'bg', 'tr'].forEach(b => {
        const btn = document.getElementById(`btn-${b}`);
        if (btn) btn.className = b === lang
            ? "px-3 py-1 text-xs font-bold rounded bg-white dark:bg-gray-700 shadow-sm text-primary transition-all"
            : "px-3 py-1 text-xs font-bold rounded text-slate-500 hover:text-primary transition-all";
    });
}

// --- 5. DRAG AND FLIP LOGIC (Refactored to Prevent Flexbox Jumps) ---
let isDragging = false;
let dragStartTime = 0;

function makeDraggable(el) {
    let dragStartX = 0, dragStartY = 0;
    let initialLeft = 0, initialTop = 0;

    el.onmousedown = dragMouseDown;
    el.ontouchstart = dragTouchStart;

    function dragMouseDown(e) {
        if (['a', 'i', 'button'].includes(e.target.tagName.toLowerCase())) return;
        e.preventDefault();
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        initDrag();
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function dragTouchStart(e) {
        if (['a', 'i', 'button'].includes(e.target.tagName.toLowerCase())) return;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        initDrag();
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDragTouch;
    }

    function initDrag() {
        isDragging = false;
        dragStartTime = Date.now();
        el.style.animation = 'none';
        el.classList.add('drag-active');

        // Read computed positions instead of offsetTop/offsetLeft to support relative components accurately
        const style = window.getComputedStyle(el);
        initialLeft = parseFloat(style.left) || 0;
        initialTop = parseFloat(style.top) || 0;

        // If it is entirely static, enable relative so standard top/left apply correctly
        if (style.position === 'static') {
            el.style.position = 'relative';
        }

        // If element was anchored by right or bottom, wipe it so our new left/top apply properly
        if (style.right !== 'auto' && el.style.right !== '') el.style.right = 'auto';
        if (style.bottom !== 'auto' && el.style.bottom !== '') el.style.bottom = 'auto';

        const container = el.parentElement;
        if (container) {
            const children = Array.from(container.children).filter(c => c.classList.contains('draggable'));
            children.forEach(c => {
                if (!c.style.zIndex) c.style.zIndex = 10;
                else c.style.zIndex = parseInt(c.style.zIndex) > 100 ? 10 : c.style.zIndex;
            });
        }
        el.style.zIndex = 1000;
    }

    function elementDrag(e) {
        e.preventDefault();
        isDragging = true;
        setNewPos(e.clientX, e.clientY);
    }

    function elementDragTouch(e) {
        isDragging = true;
        setNewPos(e.touches[0].clientX, e.touches[0].clientY);
    }

    function setNewPos(clientX, clientY) {
        let dx = clientX - dragStartX;
        let dy = clientY - dragStartY;

        el.style.left = (initialLeft + dx) + "px";
        el.style.top = (initialTop + dy) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
        el.classList.remove('drag-active');

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
    const d = projectsData[id];
    const lang = localStorage.getItem('pref-lang') || 'en';

    document.getElementById('modal-title').innerText = d.title;
    document.getElementById('modal-desc').innerHTML = d.desc[lang] || d.desc.en;
    document.getElementById('modal-img').src = d.img;
    document.getElementById('modal-link').href = d.link;

    const tags = document.getElementById('modal-tags');
    tags.innerHTML = d.tags.map(t => `<span class="px-4 py-1.5 bg-gray-200 dark:bg-gray-800 text-ink dark:text-gray-300 rounded-full text-xs font-mono font-bold">${t}</span>`).join('');

    const wf = document.getElementById('modal-workflow');
    const wfData = d.workflow[lang] || d.workflow.en;
    wf.innerHTML = wfData.map(i => `<li>${i}</li>`).join('');

    fsImages = [d.img, ...d.gallery];

    const galleryGrid = document.getElementById('modal-gallery-grid');
    galleryGrid.innerHTML = d.gallery.map((gImg, idx) => `
                <div class="h-20 sm:h-28 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden cursor-pointer group relative" onclick="openFullscreen(${idx + 1})">
                    <img src="${gImg}" onerror="this.src='https://placehold.co/300x200?text=Gallery'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <i class="fas fa-expand text-white text-xl"></i>
                    </div>
                </div>
            `).join('');

    const m = document.getElementById('project-modal');
    m.classList.remove('hidden');
    m.classList.add('visible');
    setTimeout(() => document.getElementById('modal-content').classList.remove('scale-95'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-content').classList.add('scale-95');
    const m = document.getElementById('project-modal');
    m.classList.remove('visible');
    setTimeout(() => m.classList.add('hidden'), 300);
    document.body.style.overflow = '';
}

function openFullscreen(index = 0) {
    fsCurrentIndex = index;
    const fsImg = document.getElementById('fs-img');
    fsImg.src = fsImages[fsCurrentIndex];
    const m = document.getElementById('fs-viewer');
    m.classList.remove('hidden');
    m.classList.add('visible');
}

function closeFullscreen(e) {
    if (e && (e.target.id === 'fs-img' || e.target.closest('.fs-nav-btn'))) return;
    const m = document.getElementById('fs-viewer');
    m.classList.remove('visible');
    setTimeout(() => m.classList.add('hidden'), 300);
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

// --- 7. CONTACT FORM ---
function sendEmail(e) {
    e.preventDefault();
    const lang = localStorage.getItem('pref-lang') || 'en';
    const isDark = document.documentElement.classList.contains('dark');

    Swal.fire({
        title: translations.alert_success_title[lang] || translations.alert_success_title['en'],
        text: translations.alert_success_msg[lang] || translations.alert_success_msg['en'],
        icon: 'success',
        confirmButtonColor: '#2563eb',
        background: isDark ? '#1C1C1C' : '#fcfcfc',
        color: isDark ? '#E5E7EB' : '#1A1A1A',
        customClass: { popup: 'font-mono' }
    }).then(() => e.target.reset());
}
