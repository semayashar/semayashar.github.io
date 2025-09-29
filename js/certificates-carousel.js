// =========================================================
// CERTIFICATES CAROUSEL LOGIC
// Управлява ефекта на безкраен цикъл за карусела със сертификати.
// =========================================================

/**
 * Инициализира "безкраен" скролиращ ефект за карусела, 
 * като клонира елементите. (Scroller/Marquee ефект).
 */
export function initCertificatesCarousel() {
    const wrapper = document.querySelector('.scroller-wrapper');
    if (!wrapper) return;

    // Клонираме всички елементи и ги добавяме в края за непрекъснат цикъл.
    const slides = Array.from(wrapper.children);
    slides.forEach(slide => {
        const clonedSlide = slide.cloneNode(true); 
        clonedSlide.setAttribute('aria-hidden', 'true'); // Скрива клонинга от Screen Readers
        wrapper.appendChild(clonedSlide);
    });
    
    // Ако е необходимо, тук може да се добави и клас за CSS анимация, 
    // например wrapper.classList.add('scrolling-active');
}