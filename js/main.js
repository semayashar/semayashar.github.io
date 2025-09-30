// =========================================================
// 1. PRELOADER LOGIC (Ключовата корекция за зареждане)
// =========================================================

/**
 * Управлява лоудъра, като го скрива само след като са изминали 3 секунди
 * И всички ресурси (снимки) са се заредили (window.load).
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const body = document.body;
    // 3000ms = 3 секунди минимално време за показване на лоудъра
    const MIN_DURATION = 3000; 

    let loadComplete = false;
    let timeElapsed = false;
    
    // Ако лоудърът не съществува (или е премахнат ръчно в HTML), излизаме
    if (!preloader) {
        console.log("Елементът #preloader не е намерен.");
        body.classList.remove('loading');
        return;
    }


    // 1. Проверка дали всички ресурси (снимки, стилове и т.н.) са заредени
    // window.onload се задейства, когато ВСИЧКО е готово.
    window.addEventListener('load', () => {
        loadComplete = true;
        checkAndHidePreloader();
    });

    // 2. Проверка дали са минали 3 секунди
    setTimeout(() => {
        timeElapsed = true;
        checkAndHidePreloader();
    }, MIN_DURATION);

    // Функцията, която проверява дали двете условия са изпълнени
    function checkAndHidePreloader() {
        // Скрива лоудъра САМО когато са изпълнени и двете условия
        if (loadComplete && timeElapsed) {
            preloader.classList.add('hidden'); 
            body.classList.remove('loading'); 
            
            // Премахване на лоудъра от DOM след плавното изчезване (0.5s)
            setTimeout(() => {
                preloader.remove();
            }, 500); 
        }
    }
    
    // Fallback: Ако страницата вече се е заредила преди JS-а (за кеширано съдържание)
    if (document.readyState === 'complete') {
        loadComplete = true;
        // Извикваме с малко закъснение, за да гарантираме минималния престой
        setTimeout(checkAndHidePreloader, 100); 
    }
}


// =========================================================
// 2. NAVIGATION & LANGUAGE SWITCHING LOGIC
// =========================================================

/**
 * Променя езика на всички елементи с data-en/data-bg атрибути.
 */
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        // Обновяване на активния клас на бутоните
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('userLang', lang); 
    document.documentElement.lang = lang; 
    // console.log(`Езикът е променен на ${lang}`);
}

/**
 * Добавя слушатели за клик върху бутоните за избор на език.
 */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const newLang = event.target.getAttribute('data-lang');
            if (newLang) {
                setLanguage(newLang);
            }
        });
    });
}

/**
 * Управлява отварянето и затварянето на мобилното меню.
 */
function initMobileMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!toggleButton || !navMenu) return;

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('is-open');
    });

    // Затваряне при клик върху линк
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });
}

/**
 * Хелпър функция за премахване на 'active' клас от всички линкове
 * и добавянето му към линка, отговарящ на текущата секция.
 */
function updateActiveLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Използва Intersection Observer API за автоматично маркиране на активния
 * навигационен линк при скролиране на страницата.
 */
function initIntersectionObserver() {
    // Взимаме всички секции с ID
    const sections = document.querySelectorAll('div[id]'); 
    
    const observerOptions = {
        root: null, 
        // Активната зона е между 33% и 66% от височината на екрана.
        rootMargin: '-33% 0px -66% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                const linkTarget = `#${sectionId}`;
                
                // Пропускаме елементи, които не са секции (напр. #nav-container)
                if (sectionId && sectionId !== 'nav-container') { 
                    updateActiveLink(linkTarget);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Добавя smooth scrolling ефект.
 */
function initSmoothScrolling() {
    // Оставена като плейсхолд. В момента не променя стандартното поведение.
}

/**
 * Зарежда navigation.html в контейнера #nav-container.
 * След успешно зареждане инициализира езиковия превключвател и навигационните функции.
 */
function loadNavigation() {
    const navContainer = document.getElementById('nav-container');
    if (!navContainer) {
        console.error("Не е намерен елемент #nav-container.");
        return;
    }

    fetch('html/navigation.html')
        .then(response => {
            if (!response.ok) throw new Error('Неуспешно зареждане на navigation.html');
            return response.text();
        })
        .then(data => {
            navContainer.innerHTML = data;
            console.log("Навигацията е заредена успешно.");

            // 1. Инициализация на езика: Проверява запазен език или използва 'en'
            const defaultLang = localStorage.getItem('userLang') || 'en';
            setLanguage(defaultLang);
            initLanguageSwitcher();

            // 2. Инициализация на навигационното поведение
            initMobileMenuToggle();
            initSmoothScrolling();
            initIntersectionObserver();
        })
        .catch(error => console.error("Грешка при зареждане на навигацията:", error));
}


// =========================================================
// 3. TIMELINE, CAROUSEL, SHINE LOGIC
// =========================================================

function initTimelineAnimation() {
    const timeline = document.querySelector('.horizontal-timeline');
    const trail = document.querySelector('.timeline-trail');
    const head = document.querySelector('.shooting-star');
    const points = document.querySelectorAll('.timeline-point');

    if (!timeline || !trail || !head) return;

    let hasAnimated = false;

    function animateStar() {
        const timelineWidth = timeline.offsetWidth;
        const duration = 4000; // 4s
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Кубично облекчение за по-плавно движение
            const easedProgress = 1 - Math.pow(1 - progress, 3); 

            const x = easedProgress * timelineWidth;
            head.style.transform = `translateX(${x}px)`;
            trail.style.width = x + "px";

            points.forEach((point) => {
                const pointX = point.offsetLeft + point.offsetWidth / 2;
                if (!point.classList.contains("active") && x >= pointX) {
                    point.classList.add("active");
                    const postcard = point.querySelector(".postcard-container");
                    if (postcard) postcard.classList.add("show");
                }
            });

            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    function handleScrollAnimation() {
        const timelinePosition = timeline.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Започва анимацията, когато времевата линия е в горната половина на екрана
        if (timelinePosition < screenHeight * 0.5 && !hasAnimated) {
            hasAnimated = true;
            animateStar();
            // Спира слушателя след стартиране на анимацията
            window.removeEventListener("scroll", handleScrollAnimation);
        }
    }

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
}


function initCertificatesCarousel() {
    const wrapper = document.querySelector('.scroller-wrapper');
    if (!wrapper) return;

    // клонираме всички елементи и ги добавяме в края за непрекъснат цикъл
    const slides = Array.from(wrapper.children);
    slides.forEach(slide => {
        const clonedSlide = slide.cloneNode(true); 
        clonedSlide.setAttribute('aria-hidden', 'true'); 
        wrapper.appendChild(clonedSlide);
    });
}


function initRandomIconShine() {
    const containers = document.querySelectorAll('.icon-item'); 
    
    if (containers.length === 0) return;

    const shineClass = 'shine-active'; 
    const shineDuration = 700; 
    const intervalTime = 1500; 

    function toggleShine() {
        // Премахва класа 'shine-active' от всички контейнери
        containers.forEach(container => {
            container.classList.remove(shineClass);
        });
        
        // Избира случаен брой контейнери (1 до 3)
        const numToShine = Math.floor(Math.random() * 3) + 1; 
        const shuffledIndexes = Array.from({ length: containers.length }, (_, i) => i).sort(() => Math.random() - 0.5);

        for (let i = 0; i < numToShine; i++) {
            const randomContainer = containers[shuffledIndexes[i]];

            if (randomContainer) {
                randomContainer.classList.add(shineClass);

                // Премахва класа след shineDuration време, за да спре блясъка
                setTimeout(() => {
                    randomContainer.classList.remove(shineClass);
                }, shineDuration);
            }
        }
    }

    // Стартира таймер, който да повтаря ефекта
    setInterval(toggleShine, intervalTime);
    // Активира веднъж при зареждане
    setTimeout(toggleShine, 100); 
}


// =========================================================
// 4. MAIN INITIALIZATION (Единственият DOMContentLoaded блок)
// =========================================================

// Стартираме всички инициализации след като целият DOM е зареден
document.addEventListener('DOMContentLoaded', () => {
    // 1. 🔑 КЛЮЧОВО: Стартираме лоудъра ПЪРВО, за да покрие съдържанието веднага!
    initPreloader();

    // 2. Стартираме всички останали инициализации
    loadNavigation(); 
    initTimelineAnimation();
    initCertificatesCarousel();
    initRandomIconShine();
});