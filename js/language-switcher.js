// =========================================================
// LANGUAGE SWITCHER LOGIC
// Управлява смяната на езика на страницата.
// =========================================================

/**
 * Променя езика на всички елементи с data-en/data-bg атрибути.
 * Актуализира активния бутон и запазва езика в localStorage.
 * @param {string} lang - 'bg' или 'en'.
 */
export function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
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
    document.documentElement.lang = lang; 
    console.log(`Езикът е променен на ${lang}`);
}

/**
 * Добавя слушатели за клик върху бутоните за избор на език.
 */
export function initLanguageSwitcher() {
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