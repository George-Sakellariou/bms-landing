/* ===================================
   BMS LANDING PAGE - JAVASCRIPT
   Building Management System
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLanguage();
    initNavigation();
    initMobileMenu();
    initPreviewTabs();
    initScrollAnimations();
    initSmoothScroll();
});

/* ===================================
   LANGUAGE SWITCHING
   =================================== */

let currentLang = 'en';

function initLanguage() {
    // Get saved language from localStorage or default to English
    currentLang = localStorage.getItem('bms-language') || 'en';

    // Apply the language
    applyLanguage(currentLang);

    // Add event listeners to language toggle buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('bms-language', lang);
                applyLanguage(lang);
            }
        });
    });
}

function applyLanguage(lang) {
    const t = translations[lang];

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title and meta
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]').content = t.metaDescription;

    // Update language toggle buttons state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = getNestedValue(t, key);
        if (value) {
            el.textContent = value;
        }
    });

    // Hero Section
    updateHeroSection(t);

    // Problem Section
    updateProblemSection(t);

    // Solution Section
    updateSolutionSection(t);

    // Features Section
    updateFeaturesSection(t);

    // Preview Section
    updatePreviewSection(t);

    // Partner Section
    updatePartnerSection(t);

    // Footer
    updateFooterSection(t);
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updateHeroSection(t) {
    // Badge
    document.querySelector('.hero-badge span:last-child').textContent = t.hero.badge;

    // Title
    const titleLines = document.querySelectorAll('.hero-title .line');
    titleLines[0].textContent = t.hero.titleLine1;
    titleLines[1].innerHTML = `<span class="gradient-text">${t.hero.titleLine2}</span>`;

    // Description
    document.querySelector('.hero-description').textContent = t.hero.description;

    // Stats
    const statItems = document.querySelectorAll('.hero-stats .stat-item');
    statItems[0].querySelector('.stat-value').textContent = t.hero.stats.time.value;
    statItems[0].querySelector('.stat-label').textContent = t.hero.stats.time.label;
    statItems[1].querySelector('.stat-value').textContent = t.hero.stats.transparency.value;
    statItems[1].querySelector('.stat-label').textContent = t.hero.stats.transparency.label;
    statItems[2].querySelector('.stat-value').textContent = t.hero.stats.errors.value;
    statItems[2].querySelector('.stat-label').textContent = t.hero.stats.errors.label;

    // CTA Buttons
    document.querySelector('.hero-cta .btn-primary span').textContent = t.hero.ctaPrimary;
    document.querySelector('.hero-cta .btn-secondary').textContent = t.hero.ctaSecondary;
}

function updateProblemSection(t) {
    // Section header
    document.querySelector('.problem .section-tag').textContent = t.problem.tag;
    const problemTitle = document.querySelector('.problem .section-title');
    problemTitle.innerHTML = `${t.problem.title} <span class="gradient-text">${t.problem.titleHighlight}</span>`;
    document.querySelector('.problem .section-subtitle').textContent = t.problem.subtitle;

    // Problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach((card, index) => {
        if (t.problem.cards[index]) {
            card.querySelector('h3').textContent = t.problem.cards[index].title;
            card.querySelector('p').textContent = t.problem.cards[index].description;
        }
    });
}

function updateSolutionSection(t) {
    // Section header
    document.querySelector('.solution .section-tag').textContent = t.solution.tag;
    const solutionTitle = document.querySelector('.solution .section-title');
    solutionTitle.innerHTML = `${t.solution.title} <span class="gradient-text">${t.solution.titleHighlight}</span>`;
    document.querySelector('.solution .section-subtitle').textContent = t.solution.subtitle;

    // Solution items
    const solutionItems = document.querySelectorAll('.solution-item');
    solutionItems.forEach((item, index) => {
        if (t.solution.steps[index]) {
            item.querySelector('h3').textContent = t.solution.steps[index].title;
            item.querySelector('p').textContent = t.solution.steps[index].description;
        }
    });
}

function updateFeaturesSection(t) {
    // Section header
    document.querySelector('.features .section-tag').textContent = t.features.tag;
    const featuresTitle = document.querySelector('.features .section-title');
    featuresTitle.innerHTML = `${t.features.title} <span class="gradient-text">${t.features.titleHighlight}</span>`;
    document.querySelector('.features .section-subtitle').textContent = t.features.subtitle;

    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        if (t.features.cards[index]) {
            const cardData = t.features.cards[index];

            // Update badge if it exists
            const badge = card.querySelector('.feature-badge');
            if (badge && cardData.badge) {
                badge.textContent = cardData.badge;
            }

            // Update title and description
            card.querySelector('h3').textContent = cardData.title;
            card.querySelector('p').textContent = cardData.description;

            // Update list items if they exist
            if (cardData.list) {
                const listItems = card.querySelectorAll('.feature-list li');
                listItems.forEach((li, liIndex) => {
                    if (cardData.list[liIndex]) {
                        li.textContent = cardData.list[liIndex];
                    }
                });
            }
        }
    });
}

function updatePreviewSection(t) {
    // Section header
    document.querySelector('.preview .section-tag').textContent = t.preview.tag;
    const previewTitle = document.querySelector('.preview .section-title');
    previewTitle.innerHTML = `${t.preview.title} <span class="gradient-text">${t.preview.titleHighlight}</span>`;
    document.querySelector('.preview .section-subtitle').textContent = t.preview.subtitle;

    // Tabs
    const tabs = document.querySelectorAll('.preview-tab');
    tabs[0].textContent = t.preview.tabs.buildings;
    tabs[1].textContent = t.preview.tabs.residents;
    tabs[2].textContent = t.preview.tabs.expenses;
    tabs[3].textContent = t.preview.tabs.allocations;
    tabs[4].textContent = t.preview.tabs.bills;

    // Panel descriptions
    updatePreviewPanel('buildings', t.preview.panels.buildings);
    updatePreviewPanel('residents', t.preview.panels.residents);
    updatePreviewPanel('expenses', t.preview.panels.expenses);
    updatePreviewPanel('allocations', t.preview.panels.allocations);
    updatePreviewPanel('bills', t.preview.panels.bills);

    // Gallery title
    document.querySelector('.gallery-title').textContent = t.preview.galleryTitle;
}

function updatePreviewPanel(panelName, panelData) {
    const panel = document.getElementById(`panel-${panelName}`);
    if (panel) {
        panel.querySelector('h3').textContent = panelData.title;
        panel.querySelector('p').textContent = panelData.description;

        const listItems = panel.querySelectorAll('ul li');
        listItems.forEach((li, index) => {
            if (panelData.features[index]) {
                li.textContent = panelData.features[index];
            }
        });
    }
}

function updatePartnerSection(t) {
    // Section header
    document.querySelector('.partner .section-tag').textContent = t.partner.tag;
    const partnerTitle = document.querySelector('.partner .section-title');
    partnerTitle.innerHTML = `${t.partner.title} <span class="gradient-text">${t.partner.titleHighlight}</span>`;
    document.querySelector('.partner-description').textContent = t.partner.description;

    // What we have
    document.querySelector('.what-we-have h3').textContent = t.partner.weHave.title;
    const weHaveItems = document.querySelectorAll('.what-we-have .check-item span:last-child');
    weHaveItems.forEach((item, index) => {
        if (t.partner.weHave.items[index]) {
            item.textContent = t.partner.weHave.items[index];
        }
    });

    // What we need
    document.querySelector('.what-we-need h3').textContent = t.partner.weNeed.title;
    const weNeedItems = document.querySelectorAll('.what-we-need .check-item span:last-child');
    weNeedItems.forEach((item, index) => {
        if (t.partner.weNeed.items[index]) {
            item.textContent = t.partner.weNeed.items[index];
        }
    });

    // CTA Card
    document.querySelector('.cta-card h3').textContent = t.partner.cta.title;
    document.querySelector('.cta-card > p').textContent = t.partner.cta.description;

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems[0].querySelector('.contact-label').textContent = t.partner.cta.emailLabel;
    contactItems[1].querySelector('.contact-label').textContent = t.partner.cta.phoneLabel;
    contactItems[2].querySelector('.contact-label').textContent = t.partner.cta.locationLabel;
    contactItems[2].querySelector('.contact-value').textContent = t.partner.cta.location;

    document.querySelector('.cta-card .btn-primary span').textContent = t.partner.cta.button;
}

function updateFooterSection(t) {
    document.querySelector('.footer-tagline').textContent = t.footer.tagline;
    document.querySelector('.footer-copyright').textContent = t.footer.copyright;
}

/* ===================================
   NAVIGATION
   =================================== */

function initNavigation() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ===================================
   MOBILE MENU
   =================================== */

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ===================================
   PREVIEW TABS
   =================================== */

function initPreviewTabs() {
    const tabs = document.querySelectorAll('.preview-tab');
    const panels = document.querySelectorAll('.preview-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `panel-${targetId}`) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

/* ===================================
   SCROLL ANIMATIONS
   =================================== */

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.problem-card, .solution-item, .feature-card, .gallery-item, .check-item'
    );

    // Add animation class
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 50);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    animatedElements.forEach(el => observer.observe(el));
}

/* ===================================
   SMOOTH SCROLL
   =================================== */

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (!target) return;

            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* ===================================
   IMAGE GALLERY LIGHTBOX (Optional)
   =================================== */

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.dataset.caption;

            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${img.src}" alt="${caption}">
                    <p class="lightbox-caption">${caption}</p>
                </div>
            `;

            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            // Animate in
            requestAnimationFrame(() => {
                lightbox.classList.add('active');
            });

            // Close handlers
            const close = () => {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }, 300);
            };

            lightbox.querySelector('.lightbox-close').addEventListener('click', close);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) close();
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') close();
            }, { once: true });
        });
    });
}

/* ===================================
   CONSOLE MESSAGE
   =================================== */

console.log(
    '%c🏢 BMS - Building Management System',
    'font-size: 16px; font-weight: bold; color: #3B82F6;'
);
console.log(
    '%cLooking for development partners to bring this vision to life!',
    'font-size: 12px; color: #64748B;'
);
