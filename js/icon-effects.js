// =========================================================
// RANDOM ICON SHINE EFFECT LOGIC
// Управлява ефекта на случаен блясък върху иконите.
// =========================================================

/**
 * Активира блясък ефекта на Devicon иконите на случаен принцип,
 * като позволява искрите да се припокриват и да изгасват независимо.
 */
export function initRandomIconShine() {
    const containers = document.querySelectorAll('.icon-item'); 
    
    if (containers.length === 0) {
        console.log("Няма намерени елементи .icon-item за shine ефекта.");
        return;
    }

    const shineClass = 'shine-active'; 
    
    // Времето, за което една икона свети. 
    const shineDuration = 700; // 0.7 секунди
    
    // Честотата, с която започва нова искра. (Трябва да е по-малка от shineDuration за припокриване)
    const intervalTime = 250; // 0.25 секунди (Нова искра започва, докато предишната още свети)

    function toggleShine() {
        // *** КЛЮЧОВА ПРОМЯНА: ПРЕМАХВАМЕ ПРЕМАХВАНЕТО НА ВСИЧКИ КЛАСОВЕ! ***
        // Старият код тук изключваше всички икони:
        // containers.forEach(container => { container.classList.remove(shineClass); });
        // Вече разчитаме само на setTimeout за индивидуално изключване.

        // Избира случаен брой контейнери (1 до 3)
        const numToShine = Math.floor(Math.random() * 3) + 1; 

        // Създава масив от индексите и ги разбърква
        const shuffledIndexes = Array.from({ length: containers.length }, (_, i) => i).sort(() => Math.random() - 0.5);

        // Кара първите N елемента да светнат
        for (let i = 0; i < numToShine; i++) {
            const randomIndex = shuffledIndexes[i];
            const randomContainer = containers[randomIndex];

            if (randomContainer) {
                // Прилага класа за блясък
                randomContainer.classList.add(shineClass);

                // Премахва класа след shineDuration време, за да спре блясъка.
                // Този setTimeout е индивидуалният таймер за изключване на иконата.
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