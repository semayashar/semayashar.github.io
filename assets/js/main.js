// ==========================
// 0. INIT (EMAILJS + AOS)
// ==========================
(function () {
    emailjs.init("zfBIv-14_8HS3QYQ4");
})();

// ==========================
// 1. STATE
// ==========================
let isDragging = false;
let dragStartTime = 0;

let fsImages = [];
let fsIndex = 0;

// ==========================
// 2. THEME
// ==========================
function initTheme() {
    const isDark =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) document.documentElement.classList.add("dark");
}

function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    localStorage.theme =
        document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// ==========================
// 3. LANGUAGE
// ==========================
function changeLanguage(lang) {
    localStorage.setItem("pref-lang", lang);

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (window.translations?.[key]?.[lang]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = window.translations[key][lang];
            } else {
                el.innerHTML = window.translations[key][lang];
            }
        }
    });
}

// ==========================
// 4. MOBILE MENU
// ==========================
function initMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const hero = document.getElementById("welcomePage");

    document.getElementById("mobile-menu-btn")?.addEventListener("click", () => {
        menu.classList.remove("hidden");
        hero?.classList.add("opacity-0", "pointer-events-none");
    });

    document.getElementById("close-menu-btn")?.addEventListener("click", closeMenu);

    function closeMenu() {
        menu.classList.add("hidden");
        hero?.classList.remove("opacity-0", "pointer-events-none");
    }

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

// ==========================
// 5. DRAG SYSTEM (FIXED)
// ==========================
function makeDraggable(el) {
    let startX, startY, startLeft, startTop;

    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start, { passive: true });

    function start(e) {
        if (["A", "BUTTON", "I"].includes(e.target.tagName)) return;

        isDragging = false;
        dragStartTime = Date.now();

        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;

        const rect = el.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
        document.addEventListener("touchmove", move);
        document.addEventListener("touchend", stop);
    }

    function move(e) {
        isDragging = true;

        const x = e.clientX || e.touches[0].clientX;
        const y = e.clientY || e.touches[0].clientY;

        el.style.position = "fixed";
        el.style.left = startLeft + (x - startX) + "px";
        el.style.top = startTop + (y - startY) + "px";
        el.style.zIndex = 9999;
    }

    function stop() {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
        document.removeEventListener("touchmove", move);
        document.removeEventListener("touchend", stop);

        setTimeout(() => (isDragging = false), 50);
    }
}

// ==========================
// 6. FLIP CARD
// ==========================
function flipCard(el) {
    if (isDragging) return;
    el.classList.toggle("is-flipped");
}

// ==========================
// 7. MODAL SYSTEM
// ==========================
function openModal(projectId) {
    const d = window.projectsData[projectId];
    if (!d) return;

    const lang = localStorage.getItem("pref-lang") || "en";

    document.getElementById("modal-title").innerText = d.title;
    document.getElementById("modal-desc").innerHTML = d.desc[lang] || d.desc.en;
    document.getElementById("modal-img").src = d.img;
    document.getElementById("modal-link").href = d.link;

    fsImages = [d.img, ...d.gallery];

    const gallery = document.getElementById("modal-gallery-grid");
    gallery.innerHTML = d.gallery.map((img, i) => `
        <img src="${img}" 
             class="cursor-pointer rounded-lg hover:scale-105 transition"
             onclick="openFullscreen(${i + 1})">
    `).join("");

    const modal = document.getElementById("project-modal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("project-modal").classList.add("hidden");
    document.body.style.overflow = "";
}

// ==========================
// 8. FULLSCREEN VIEWER
// ==========================
function openFullscreen(i = 0) {
    fsIndex = i;
    const viewer = document.getElementById("fs-viewer");
    const img = document.getElementById("fs-img");

    img.src = fsImages[fsIndex];
    viewer.classList.remove("hidden");
}

function closeFullscreen() {
    document.getElementById("fs-viewer").classList.add("hidden");
}

function nextImage(dir) {
    fsIndex = (fsIndex + dir + fsImages.length) % fsImages.length;
    document.getElementById("fs-img").src = fsImages[fsIndex];
}

// ==========================
// 9. CONTACT FORM
// ==========================
function sendEmail(e) {
    e.preventDefault();

    const btn = e.target.querySelector("button");
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    const params = {
        from_name: name.value,
        email: email.value,
        message: message.value
    };

    emailjs.send("service_yz3eqg8", "template_1c3d1xd", params)
        .then(() => {
            btn.disabled = false;
            btn.innerHTML = "Send";
            e.target.reset();
            alert("Message sent!");
        })
        .catch(() => {
            btn.disabled = false;
            btn.innerHTML = "Send";
            alert("Error!");
        });
}

// ==========================
// 10. INIT EVERYTHING
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    // animations
    AOS.init({
        once: true,
        duration: 800,
        easing: "ease-out-cubic"
    });

    initTheme();
    initMobileMenu();
    changeLanguage(localStorage.getItem("pref-lang") || "en");

    document.getElementById("theme-toggle")
        ?.addEventListener("click", toggleTheme);

    // drag only desktop
    if (window.innerWidth > 768) {
        document.querySelectorAll(".draggable")
            .forEach(makeDraggable);
    }

    // ESC controls
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            closeModal();
            closeFullscreen();
        }
        if (e.key === "ArrowRight") nextImage(1);
        if (e.key === "ArrowLeft") nextImage(-1);
    });
});