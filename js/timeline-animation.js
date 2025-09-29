// =========================================================
// TIMELINE SCROLL-TRIGGERED ANIMATION LOGIC
// Управлява анимацията на времевата линия при скролиране.
// =========================================================

/**
 * Инициализира анимацията на "падащата звезда" по времевата линия, 
 * която се задейства при достигане на елемента чрез скрол.
 */
export function initTimelineAnimation() {
    const timeline = document.querySelector('.horizontal-timeline');
    const trail = document.querySelector('.timeline-trail');
    const head = document.querySelector('.shooting-star');
    const points = document.querySelectorAll('.timeline-point');

    if (!timeline || !trail || !head) return;

    let hasAnimated = false;

    /**
     * Анимира движението на "звездата" и оцветяването на пътеката и точките.
     */
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
            
            // Обновяване на позицията и дължината
            head.style.transform = `translateX(${x}px)`;
            trail.style.width = x + "px";

            // Активиране на точките и техните пощенски картички (postcards)
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

    /**
     * Проверява позицията на времевата линия и стартира анимацията.
     */
    function handleScrollAnimation() {
        const timelinePosition = timeline.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Започва анимацията, когато времевата линия е в горната половина на екрана
        if (timelinePosition < screenHeight * 0.5 && !hasAnimated) {
            hasAnimated = true;
            animateStar();
            // Премахва слушателя след стартиране на анимацията, за да не се изпълнява повече
            window.removeEventListener("scroll", handleScrollAnimation); 
        }
    }

    // Добавя слушател за скрол, който да задейства анимацията
    window.addEventListener("scroll", handleScrollAnimation);
    // Проверява при зареждане, ако елементът вече е видим
    handleScrollAnimation();
}