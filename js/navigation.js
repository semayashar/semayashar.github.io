// =========================================================
// NAVIGATION LOGIC (Mobile Menu, ScrollSpy, Smooth Scroll)
// Управлява поведението на навигационната лента.
// =========================================================

/**
 * Управлява отварянето и затварянето на мобилното меню чрез бутона toggle.
 */
export function initMobileMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!toggleButton || !navMenu) return;

    // Функция за затваряне на менюто
    const closeMenu = () => {
        navMenu.classList.remove('is-open');
        toggleButton.setAttribute('aria-expanded', 'false');
        // Сменяме иконката обратно на "хамбургер"
        toggleButton.querySelector('span').classList.remove('fa-times');
        toggleButton.querySelector('span').classList.add('fa-bars');
    };
    
    // 1. Управление на бутона за превключване
    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('is-open');

        // Смяна на иконката (отваряне/затваряне)
        const icon = toggleButton.querySelector('span');
        if (navMenu.classList.contains('is-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Предполагам, че използваш Font Awesome 6
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Затваряне на менюто при клик върху линк ИЛИ бутон за език
    // Селектираме всички навигационни линкове и бутоните за език вътре в менюто
    const closableElements = navMenu.querySelectorAll('.nav-link, .lang-btn');

    closableElements.forEach(element => {
        element.addEventListener('click', () => {
            // Затваряме менюто
            closeMenu();
        });
    });
}

/**
 * Хелпър функция за премахване на 'active' клас от всички линкове
 * и добавянето му към линка, отговарящ на текущата секция.
 * @param {string} targetId - ID на секцията, която е активна (напр. '#whoami').
 */
function updateActiveLink(targetId) {
    // Премахване на 'active' от всички
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    // Добавяне на 'active' към съответния линк
    const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Използва Intersection Observer API за автоматично маркиране на активния
 * навигационен линк при скролиране на страницата (ScrollSpy).
 */
export function initScrollSpyObserver() {
    // Взимаме всички секции с ID
    const sections = document.querySelectorAll('div[id]'); 
    
    const observerOptions = {
        root: null, // Гледаме спрямо целия viewport
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
 * Добавя smooth scrolling ефект при клик на навигационен линк (ако не е 
 * покрит от CSS scroll-behavior: smooth).
 */
export function initSmoothScrolling() {
    // Оставя се празна или се добавя JS логика само ако CSS не е достатъчен.
    // Пример за запазване на функцията, както е в оригиналния код:
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            // Ако се използва 'scroll-behavior: smooth;' в CSS, 
            // не е нужна допълнителна JS логика тук.
            // e.preventDefault(); // Активирайте, ако добавяте собствена JS логика за скрол.
        });
    });
}