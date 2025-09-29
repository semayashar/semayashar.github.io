// =========================================================
// RANDOM ICON SHINE EFFECT LOGIC
// Управлява ефекта на случаен блясък върху иконите.
// =========================================================

/**
 * Активира блясък ефекта на Devicon иконите на случаен принцип.
 */
export function initRandomIconShine() {
    const containers = document.querySelectorAll('.icon-item'); 
    
    if (containers.length === 0) {
        console.log("Няма намерени елементи .icon-item за shine ефекта.");
        return;
    }

    const shineClass = 'shine-active'; 
    const shineDuration = 700; // Време, за което свети един контейнер (мс)
    const intervalTime = 1500; // Честота на избиране на нови контейнери (мс)

    function toggleShine() {
        // 1. Премахва класа 'shine-active' от всички контейнери
        containers.forEach(container => {
            container.classList.remove(shineClass);
        });

        // 2. Избира случаен брой контейнери (1 до 3)
        const numToShine = Math.floor(Math.random() * 3) + 1; 

        // 3. Създава масив от индексите и ги разбърква
        const shuffledIndexes = Array.from({ length: containers.length }, (_, i) => i).sort(() => Math.random() - 0.5);

        // 4. Кара първите N елемента да светнат
        for (let i = 0; i < numToShine; i++) {
            const randomIndex = shuffledIndexes[i];
            const randomContainer = containers[randomIndex];

            if (randomContainer) {
                randomContainer.classList.add(shineClass);

                // Премахва класа след shineDuration време
                setTimeout(() => {
                    randomContainer.classList.remove(shineClass);
                }, shineDuration);
            }
        }
    }

    // Стартира таймер, който да повтаря ефекта
    setInterval(toggleShine, intervalTime);
    
    // Активира веднъж при зареждане с кратко закъснение
    setTimeout(toggleShine, 100); 
}