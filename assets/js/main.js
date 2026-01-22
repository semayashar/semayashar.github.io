// =============================================
// Extracted from index.html (inline <script>)
// Generated: 2026-01-22T20:30:20
// =============================================

(function() {
            emailjs.init("zfBIv-14_8HS3QYQ4");
        })();

// --------- next block ---------

tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        primary: '#6366f1', // Indigo 500
                        secondary: '#ec4899', // Pink 500
                        accent: '#8b5cf6', // Violet 500
                        success: '#10b981', // Emerald 500
                        dark: '#0f172a',
                        surface: '#ffffff',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 3s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'blob': 'blob 7s infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        blob: {
                            '0%': { transform: 'translate(0px, 0px) scale(1)' },
                            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                            '100%': { transform: 'translate(0px, 0px) scale(1)' },
                        }
                    }
                }
            }
        }

// --------- next block ---------

// Initialize Animations
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Data with Corrected Tech Stacks based on your code
    const projectData = {
        langforu: {
            title: "LangForU",
            tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "OpenAI API", "Bootstrap"],
            link: "https://github.com/semayashar",
            desc: {
                en: "A comprehensive EdTech platform for language learning tailored for Bulgarian speakers. Features include an AI Chatbot ('Sevi') for tutoring, course enrollment, automated certificate generation, and blog community features.",
                bg: "Образователна платформа за изучаване на езици с AI чатбот ('Севи'), управление на курсове, автоматично генериране на сертификати и блог функционалност.",
                tr: "Bulgarca konuşanlar için kapsamlı bir dil öğrenme platformu. Yapay zeka destekli sohbet botu ('Sevi'), kurs kaydı ve otomatik sertifika oluşturma özellikleri içerir."
            },
            images: [
                "images/langforu/index.png", 
                "images/langforu/courses.png",
                "images/langforu/blog.png",
                "images/langforu/blog-details.png"
            ],
            workflow: [
                { 
                    title: { en: "AI Tutoring", bg: "AI Учител", tr: "YZ Eğitmen" }, 
                    text: { en: "Integrated ChatGPT for interactive learning.", bg: "Интегриран ChatGPT за интерактивно учене.", tr: "Etkileşimli öğrenme için ChatGPT entegre edildi." } 
                },
                { 
                    title: { en: "Curriculum", bg: "Учебна програма", tr: "Müfredat" }, 
                    text: { en: "Lections, exams, and progress tracking.", bg: "Лекции, изпити и проследяване на напредъка.", tr: "Dersler, sınavlar ve ilerleme takibi." } 
                },
                { 
                    title: { en: "Certificates", bg: "Сертификати", tr: "Sertifikalar" }, 
                    text: { en: "Auto-generated PDF upon completion.", bg: "Автоматично генериран PDF при завършване.", tr: "Tamamlandığında otomatik oluşturulan PDF." } 
                },
                { 
                    title: { en: "Security", bg: "Сигурност", tr: "Güvenlik" }, 
                    text: { en: "Spring Security with Role-based access.", bg: "Spring Security с ролеви достъп.", tr: "Rol tabanlı erişim ile Spring Security." } 
                }
            ]
        },
        sportarete: {
            title: "SportArete",
            tags: ["C#", "ASP.NET Core 6", "EF Core", "MSSQL", "NUnit", "MVC"],
            link: "https://github.com/semayashar",
            desc: {
                en: "A fully functional e-commerce store for sports equipment built with .NET 6. Features include a shopping cart, order processing, product reviews with star ratings, and a comprehensive Admin area for inventory management.",
                bg: "Напълно функционален онлайн магазин за спортна екипировка. Включва количка, обработка на поръчки, ревюта на продукти и административен панел.",
                tr: ".NET 6 ile oluşturulmuş tam işlevsel bir spor malzemeleri e-ticaret mağazası. Alışveriş sepeti, sipariş takibi ve stok yönetimi içerir."
            },
            images: [
                "images/sportarete/index.png",
                "images/sportarete/allProducts.png",
                "images/sportarete/categories.png",
                "images/sportarete/brands.png"
            ],
            workflow: [
                { 
                    title: { en: "Inventory", bg: "Инвентар", tr: "Envanter" }, 
                    text: { en: "Admin CRUD for brands & products.", bg: "Админ панел за марки и продукти.", tr: "Markalar ve ürünler için Yönetici CRUD." } 
                },
                { 
                    title: { en: "Shopping", bg: "Пазаруване", tr: "Alışveriş" }, 
                    text: { en: "Cart management & Order history.", bg: "Количка и история на поръчките.", tr: "Sepet yönetimi ve Sipariş geçmişi." } 
                },
                { 
                    title: { en: "Reviews", bg: "Ревюта", tr: "İncelemeler" }, 
                    text: { en: "User ratings and comments system.", bg: "Система за рейтинг и коментари.", tr: "Kullanıcı derecelendirme ve yorum sistemi." } 
                },
                { 
                    title: { en: "Testing", bg: "Тестване", tr: "Test Etme" }, 
                    text: { en: "Unit tests covering core services.", bg: "Unit тестове на основните услуги.", tr: "Temel hizmetleri kapsayan birim testleri." } 
                }
            ]
        },
        conexion: {
            title: "ConeXion",
            tags: ["C#", "ASP.NET Core", "SASS", "Clean Architecture", "SQL Server"],
            link: "https://github.com/semayashar",
            desc: {
                en: "A social networking web application built with clean architecture. Allows users to create posts with images, like content, comment, and manage user profiles. Styled with custom SASS and Bootstrap.",
                bg: "Уеб приложение за социална мрежа с чиста архитектура. Позволява създаване на публикации, харесвания, коментари и профили.",
                tr: "Temiz mimari ile oluşturulmuş sosyal ağ uygulaması. Kullanıcıların gönderi oluşturmasına, beğenmesine ve yorum yapmasına olanak tanır."
            },
            images: [
                "images/conexion/index.png",
                "images/conexion/connect.png",
                "images/conexion/about.png",
                "images/conexion/privacy.png"
            ],
            workflow: [
                { 
                    title: { en: "Architecture", bg: "Архитектура", tr: "Mimari" }, 
                    text: { en: "Separated Core, Infrastructure, Web layers.", bg: "Разделени слоеве: Core, Infrastructure, Web.", tr: "Ayrılmış Çekirdek, Altyapı, Web katmanları." } 
                },
                { 
                    title: { en: "Social", bg: "Социални", tr: "Sosyal" }, 
                    text: { en: "Post creation, Likes, and Comments.", bg: "Създаване на постове, лайкове и коментари.", tr: "Gönderi oluşturma, Beğeniler ve Yorumlar." } 
                },
                { 
                    title: { en: "Styling", bg: "Стилизиране", tr: "Stillendirme" }, 
                    text: { en: "Custom SCSS styling & responsive layout.", bg: "Персонализиран SCSS и отзивчив дизайн.", tr: "Özel SCSS stillendirme ve duyarlı düzen." } 
                }
            ]
        },
        travelis: {
            title: "Travelis",
            tags: ["C#", "ASP.NET Core API", "Dapper", "AI Recommendations", "MVC"],
            link: "https://github.com/semayashar",
            desc: {
                en: "An intelligent 'One-Stop-Shop' travel reservation system. Consolidates hotel booking, car rentals, and attraction suggestions into one platform, powered by an AI recommendation engine and high-performance Dapper queries.",
                bg: "Интелигентна система за резервации, обединяваща хотели, транспорт и атракции. Задвижвана от AI модул за препоръки.",
                tr: "Otel, araç kiralama ve turistik yerleri tek platformda birleştiren akıllı seyahat rezervasyon sistemi. Yapay zeka destekli öneriler sunar."
            },
            images: [
                "images/travelis/index.png",
                "images/travelis/hotels-hotel-grid.png",
                "images/travelis/support-ticket-list.png",
                "images/travelis/account-account.png"
            ],
            workflow: [
                { 
                    title: { en: "AI Planner", bg: "AI Планиране", tr: "YZ Planlayıcı" }, 
                    text: { en: "Personalized trip suggestions.", bg: "Персонализирани предложения за пътуване.", tr: "Kişiselleştirilmiş gezi önerileri." } 
                },
                { 
                    title: { en: "Performance", bg: "Производителност", tr: "Performans" }, 
                    text: { en: "Optimized SQL queries using Dapper.", bg: "Оптимизирани SQL заявки с Dapper.", tr: "Dapper kullanılarak optimize edilmiş SQL sorguları." } 
                },
                { 
                    title: { en: "Integration", bg: "Интеграция", tr: "Entegrasyon" }, 
                    text: { en: "Unified Hotel & Transport booking.", bg: "Обединени резервации за хотели и транспорт.", tr: "Birleşik Otel ve Ulaşım rezervasyonu." } 
                },
                { 
                    title: { en: "Security", bg: "Сигурност", tr: "Güvenlik" }, 
                    text: { en: "Role-based access & Data encryption.", bg: "Ролеви достъп и криптиране на данни.", tr: "Rol tabanlı erişim ve Veri şifreleme." } 
                }
            ]
        },
        portfolio: {
            title: "Portfolio Website",
            tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS"],
            link: "https://github.com/semayashar",
            desc: {
                en: "You are looking at it! A responsive, multi-language portfolio designed to showcase skills and certificates. Built with a mobile-first approach and modern glassmorphism UI.",
                bg: "Вие го разглеждате! Отзивчиво, многоезично портфолио, създадено да покаже умения и сертификати.",
                tr: "Şu an ona bakıyorsunuz! Becerileri sergilemek için tasarlanmış, mobil öncelikli ve çok dilli modern portföy."
            },
            images: [
                "images/portfolio/start.png", 
                "images/portfolio/middle.png",
                "images/portfolio/end.png",
                "images/portfolio/end1.png"
            ],
            workflow: [
                { 
                    title: { en: "Localization", bg: "Локализация", tr: "Yerelleştirme" }, 
                    text: { en: "Custom JS engine for EN/BG/TR.", bg: "Персонализиран JS енджин за EN/BG/TR.", tr: "EN/BG/TR için özel JS motoru." } 
                },
                { 
                    title: { en: "UI/UX", bg: "UI/UX", tr: "UI/UX" }, 
                    text: { en: "Glassmorphism & Flip-card animations.", bg: "Глас морфизъм и флип анимации.", tr: "Glassmorphism ve Çevirme kartı animasyonları." } 
                },
                { 
                    title: { en: "Responsive", bg: "Отзивчивост", tr: "Duyarlılık" }, 
                    text: { en: "Tailwind CSS for all devices.", bg: "Tailwind CSS за всички устройства.", tr: "Tüm cihazlar için Tailwind CSS." } 
                }
            ]
        }
    };

    let currentLang = 'en';

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const modalWorkflow = document.getElementById('modal-workflow');
    const modalMainImg = document.getElementById('modal-main-img');
    const modalGalleryGrid = document.getElementById('modal-gallery-grid');

    function openModal(projectId) {
        const data = projectData[projectId];
        if(!data) return;

        modalTitle.innerText = data.title;
        modalDesc.innerText = data.desc[currentLang];
        
        modalTags.innerHTML = data.tags.map(tag => 
            `<span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">${tag}</span>`
        ).join('');

        // Workflow - Logic Updated to use dynamic language
        modalWorkflow.innerHTML = data.workflow.map(step => `
            <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                <div class="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0"><i class="fas fa-check"></i></div>
                <div>
                    <h4 class="font-bold text-dark text-sm">${step.title[currentLang]}</h4>
                    <p class="text-gray-500 text-xs">${step.text[currentLang]}</p>
                </div>
            </div>
        `).join('');

        // Images Logic
        modalMainImg.src = data.images[0];
        modalMainImg.classList.add('cursor-zoom-in');
        modalMainImg.onclick = () => openFsViewer(modalMainImg.src);
        modalMainImg.onerror = function() { this.src = 'https://placehold.co/800x450?text=Image+Not+Found'; }; 

        // Sub Images
        let gridHtml = '';
        for(let i=1; i<data.images.length; i++) {
            gridHtml += `
            <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 border border-gray-200"
                onclick="openFsViewer('${data.images[i]}')">
                <img src="${data.images[i]}" class="w-full h-full object-cover object-top"
                    onerror="this.src='https://placehold.co/400x225?text=Img+${i}'">
            </div>
            `;
        }
        modalGalleryGrid.innerHTML = gridHtml;

        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('visible'), 10);
        document.body.style.overflow = 'hidden';
    }

    // Fullscreen Viewer (Zoom + Pan)
    const fsViewer = document.getElementById('fs-viewer');
    const fsStage  = document.getElementById('fs-stage');
    const fsImg    = document.getElementById('fs-img');
    const fsClose  = document.getElementById('fs-close');

    let fsScale = 1;
    let fsMinScale = 1;
    let fsMaxScale = 6;
    let fsX = 0; 
    let fsY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let pinchStartDist = 0;
    let pinchStartScale = 1;

    function applyFsTransform() {
      fsImg.style.transform = `translate(calc(-50% + ${fsX}px), calc(-50% + ${fsY}px)) scale(${fsScale})`;
    }

    function resetFs() {
      fsScale = 1;
      fsX = 0;
      fsY = 0;
      applyFsTransform();
    }

    window.openFsViewer = function (src) {
      fsImg.src = src;
      fsImg.onerror = function () {
        this.src = 'https://placehold.co/1600x900?text=Image+Not+Found';
      };
      resetFs();
      fsViewer.classList.remove('hidden');
      setTimeout(() => fsViewer.classList.add('visible'), 10);
      document.body.style.overflow = 'hidden';
    };

    function closeFsViewer() {
      fsViewer.classList.remove('visible');
      setTimeout(() => {
        fsViewer.classList.add('hidden');
        const projectModalOpen = !modal.classList.contains('hidden');
        document.body.style.overflow = projectModalOpen ? 'hidden' : 'auto';
      }, 250);
    }

    fsClose.addEventListener('click', closeFsViewer);
    fsViewer.addEventListener('click', (e) => {
      if (e.target === fsViewer) closeFsViewer();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!fsViewer.classList.contains('hidden')) closeFsViewer();
        else if (!modal.classList.contains('hidden')) closeModal();
      }
    });

    fsViewer.addEventListener('wheel', (e) => {
      if (fsViewer.classList.contains('hidden')) return;
      e.preventDefault();
      const delta = -e.deltaY;
      const zoomFactor = delta > 0 ? 1.08 : 0.92;
      const next = Math.min(fsMaxScale, Math.max(fsMinScale, fsScale * zoomFactor));
      fsScale = next;
      if (fsScale === 1) { fsX = 0; fsY = 0; }
      applyFsTransform();
    }, { passive: false });

    fsStage.addEventListener('mousedown', (e) => {
      if (fsViewer.classList.contains('hidden')) return;
      if (fsScale <= 1) return;
      isDragging = true;
      fsStage.classList.remove('cursor-grab');
      fsStage.classList.add('cursor-grabbing');
      startX = e.clientX - fsX;
      startY = e.clientY - fsY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      fsX = e.clientX - startX;
      fsY = e.clientY - startY;
      applyFsTransform();
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      fsStage.classList.add('cursor-grab');
      fsStage.classList.remove('cursor-grabbing');
    });

    fsStage.addEventListener('dblclick', (e) => {
      if (fsViewer.classList.contains('hidden')) return;
      if (fsScale === 1) fsScale = 2;
      else fsScale = 1;
      if (fsScale === 1) { fsX = 0; fsY = 0; }
      applyFsTransform();
    });

    fsStage.addEventListener('touchstart', (e) => {
      if (fsViewer.classList.contains('hidden')) return;
      if (e.touches.length === 1) {
        if (fsScale <= 1) return;
        isDragging = true;
        startX = e.touches[0].clientX - fsX;
        startY = e.touches[0].clientY - fsY;
      }
      if (e.touches.length === 2) {
        isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStartDist = Math.hypot(dx, dy);
        pinchStartScale = fsScale;
      }
    }, { passive: true });

    fsStage.addEventListener('touchmove', (e) => {
      if (fsViewer.classList.contains('hidden')) return;
      if (e.touches.length === 1 && isDragging && fsScale > 1) {
        fsX = e.touches[0].clientX - startX;
        fsY = e.touches[0].clientY - startY;
        applyFsTransform();
      }
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const ratio = dist / pinchStartDist;
        const next = Math.min(fsMaxScale, Math.max(fsMinScale, pinchStartScale * ratio));
        fsScale = next;
        if (fsScale === 1) { fsX = 0; fsY = 0; }
        applyFsTransform();
      }
    }, { passive: false });

    fsStage.addEventListener('touchend', () => {
      isDragging = false;
    });

    function closeModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function sendEmail(e) {
        e.preventDefault(); // Stop the form from refreshing the page

        // 1. Get the button to change text while sending
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnContent = submitBtn.innerHTML;
        
        // Change button text to indicate loading
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // 2. Get values from the inputs
        var params = {
            from_name: document.getElementById("name").value,
            email: document.getElementById("email").value, // Added email field
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        // 3. Send email using EmailJS with your IDs
        const serviceID = "service_yz3eqg8";
        const templateID = "template_1c3d1xd";

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                // SUCCESS: Reset form and show Green Popup
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;

                Swal.fire({
                    title: "Message Sent!",
                    text: "Thank you for contacting me. I will get back to you soon.",
                    icon: "success",
                    confirmButtonColor: "#6366f1", // Your primary color
                    background: "#ffffff",
                    color: "#0f172a"
                });
            })
            .catch(err => {
                // ERROR: Show Red Popup
                console.error(err);
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;

                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#6366f1"
                });
            });
    }

    function changeLanguage(lang) {
        currentLang = lang;
        const activeClasses = ['bg-white', 'shadow', 'text-primary'];
        const inactiveClasses = ['text-gray-500'];

        ['en', 'bg', 'tr'].forEach(l => {
            const buttons = document.querySelectorAll(`.lang-btn-${l}`);
            buttons.forEach(btn => {
                if (l === lang) {
                    btn.classList.add(...activeClasses);
                    btn.classList.remove(...inactiveClasses);
                } else {
                    btn.classList.remove(...activeClasses);
                    btn.classList.add(...inactiveClasses);
                }
            });
        });

        // Update Text
        document.querySelectorAll('.lang-text').forEach(el => {
            if (el.dataset[lang]) el.innerText = el.dataset[lang];
        });

        // Update Alt tags
        document.querySelectorAll('.lang-alt').forEach(el => {
            if (el.dataset[`${lang}Alt`]) el.alt = el.dataset[`${lang}Alt`];
        });

        // Update Input Placeholders (Added logic)
        document.querySelectorAll('input, textarea').forEach(el => {
            if(el.dataset[`${lang}Placeholder`]) el.placeholder = el.dataset[`${lang}Placeholder`];
        });
    }

    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md');
            nav.classList.replace('h-20', 'h-16');
        } else {
            nav.classList.remove('shadow-md');
            nav.classList.replace('h-16', 'h-20');
        }
    });
