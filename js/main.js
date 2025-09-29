
function initMobileMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', () => {
            // Проверява текущото състояние на менюто
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
            // Обръща състоянието и добавя/премахва клас
            toggleButton.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('is-open');
        });

        // Затваряне на менюто при клик върху линк
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                // Затваряне на менюто
                navMenu.classList.remove('is-open');
                toggleButton.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/**
 * Добавя smooth scrolling ефект при клик на навигационен линк.
 * Забележка: В съвременните браузъри може да се използва CSS 'scroll-behavior: smooth;'.
 */
function initSmoothScrolling() {
    // Тази функция е запазена за бъдещо разширяване, но в момента не променя стандартното поведение
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Може да се добави допълнителна JS логика за скролиране тук, ако е необходимо
            // e.preventDefault();
        });
    });
}

/**
 * Хелпър функция за премахване на 'active' клас от всички линкове
 * и добавянето му към линка, отговарящ на текущата секция.
 * @param {string} targetId - ID на секцията, която е активна (напр. '#whoami').
 */
function updateActiveLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });
    
    // Добавяне на активен клас към съответния линк
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
        root: null, // Гледаме спрямо целия viewport
        // Активната зона е между 33% и 66% от височината на екрана,
        // което помага да се смени активният линк, когато секцията е ясно видима в центъра.
        rootMargin: '-33% 0px -66% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Секцията е в активната зона
                const sectionId = entry.target.getAttribute('id');
                const linkTarget = `#${sectionId}`;
                // Пропускаме контейнера, който не е секция, ако е включен в div[id]
                if (sectionId !== 'nav-container') { 
                    updateActiveLink(linkTarget);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

function initMobileMenuToggle() {
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleButton || !navMenu) return;

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// =========================================================
// 1. NAVIGATION & LANGUAGE SWITCHING LOGIC (Global)
// =========================================================

/**
 * Зарежда navigation.html в контейнера #nav-container.
 * След успешно зареждане инициализира езиковия превключвател и навигационните функции.
 */
function loadNavigation() {
  fetch('html/navigation.html')
    .then(response => {
      if (!response.ok) throw new Error('Неуспешно зареждане на navigation.html');
      return response.text();
    })
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;
      console.log("Навигацията е заредена успешно.");

      // 1. Инициализация на езика: Проверява запазен език или използва 'en'
      const defaultLang = localStorage.getItem('userLang') || 'en';
      setLanguage(defaultLang);
      initLanguageSwitcher();

      // 2. Инициализация на навигационното поведение (тези функции са в navigation.js)
      // Проверяваме дали функциите са налични преди да ги извикаме
      if (typeof initMobileMenuToggle === 'function') initMobileMenuToggle();
      if (typeof initSmoothScrolling === 'function') initSmoothScrolling();
      if (typeof initIntersectionObserver === 'function') initIntersectionObserver();
    })
    .catch(error => console.error("Грешка при зареждане на навигацията:", error));
}

/**
 * Променя езика на всички елементи с data-en/data-bg атрибути.
 * Актуализира активния бутон и запазва езика в localStorage.
 * @param {string} lang - 'bg' или 'en'.
 */
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    // Взимаме текста от съответния атрибут (data-bg или data-en)
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  // Обновяване на активния клас на бутоните
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  localStorage.setItem('userLang', lang); 
  document.documentElement.lang = lang; // Променя lang атрибута на HTML
  console.log(`Езикът е променен на ${lang}`);
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


// =========================================================
// 2. TIMELINE ANIMATION LOGIC
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
      // Използваме кубична функция за по-плавен старт и край
      const easedProgress = 1 - Math.pow(1 - progress, 3); 

      // Позиция на звездата
      const x = easedProgress * timelineWidth;
      head.style.transform = `translateX(${x}px)`;

      // Дължина на пътеката (trail)
      trail.style.width = x + "px";

      // Проверка за всяка точка
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
    }
  }

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();
}


// =========================================================
// 3. CERTIFICATES CAROUSEL LOGIC
// =========================================================

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


// =========================================================
// 5. RANDOM ICON SHINE EFFECT (НОВ КОД)
// =========================================================

/**
 * Активира блясък ефекта на Devicon иконите на случаен принцип.
 */
function initRandomIconShine() {
    // ➡️ КОРИГИРАНО: Селектираме елементите-контейнери, които имат :hover ефект
    const containers = document.querySelectorAll('.icon-item'); 
    
    if (containers.length === 0) {
        console.log("Няма намерени елементи .icon-item за shine ефекта.");
        return;
    }

    // ➡️ КОРИГИРАНО: Класът, който прилага CSS анимацията
    const shineClass = 'shine-active'; 
    
    // Времеви интервали в милисекунди
    const shineDuration = 700; // Колко време да свети всеки контейнер
    const intervalTime = 1500; // Колко често да се избира нов контейнер

    function toggleShine() {
        // 1. Премахва класа 'shine-active' от всички контейнери
        containers.forEach(container => {
            container.classList.remove(shineClass);
        });

        // 2. Избира случаен брой контейнери (напр. 1 до 3)
        const numToShine = Math.floor(Math.random() * 3) + 1; 

        // 3. Създава масив от индексите и ги разбърква
        const shuffledIndexes = Array.from({ length: containers.length }, (_, i) => i).sort(() => Math.random() - 0.5);

        // 4. Взима първите numToShine елемента и ги кара да светнат
        for (let i = 0; i < numToShine; i++) {
            const randomIndex = shuffledIndexes[i];
            const randomContainer = containers[randomIndex];

            if (randomContainer) {
                // Прилага класа за блясък
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
// 4. MAIN INITIALIZATION
// =========================================================

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('is-open');
    });
  }
});

// Стартираме всички инициализации след като целият DOM е зареден
document.addEventListener('DOMContentLoaded', () => {
  loadNavigation(); 
  initTimelineAnimation();
  initCertificatesCarousel();
  
  // Активираме ефекта на блясък за Devicon иконите
  initRandomIconShine(); // <--- ТАЗИ ЛИНИЯ АКТИВИРА ЕФЕКТА
});