// --- GESTION DES LANGUES ---
let currentLang = 'fr'; // Langue par défaut

const translations = {
    fr: {
        'nav-projects': "Projets",
        'nav-cv': "CV",
        'nav-contact': "Contact",
        'nav-menu': "Menu",
        'menu-home': "Accueil",
        'menu-manifesto': "Manifesto",
        'menu-cv': "Curriculum",
        'menu-projects': "Projets",
        'menu-contact': "Contact",
        'close': "Fermer",
        'hero-sub': "Game Designer & QA Tester",
        'scroll-hint': "Défilé pour explorer",
        'manifesto': "Mon rêve est de rejoindre <span style='color:#fff'>Ubisoft</span> en tant que <span style='color:#fff'>Game Designer</span>. Je suis spécialisé en <span style='color:#fff'>QA</span>, mais je reste très polyvalent. Mon objectif est d'acquérir le plus d'expérience possible. J'ai toujours joué aux jeux vidéo, mais avec le temps, je me suis demandé comment les designers transmettaient leur vision. Après avoir étudié leur travail, j'ai découvert que je voulais moi aussi transmettre ma créativité et ma vision du jeu.",
        'section-cv': "Curriculum vitæ.",

        'bento-1-title': "Compétences",
        // MISE À JOUR : Liste à puces pour les compétences (FR)
        'bento-1-desc': "<ul style='margin-left: 20px; list-style-type: disc;'><li>Unreal Engine (Intermédiaire) | Connaissance du moteur / Modification de variable et intégration / Asset management</li><li>Unity (Débutant)</li><li>Photoshop (Avancé)</li><li>AI Illustrator (Avancé)</li></ul>",

        'bento-2-title': "Formation",
        'bento-2-desc': "Mastère Game Design au Studio Mercier (2022-2026).",

        'bento-3-title': "Expérience",
        'bento-3-desc': "Stage QA Lead chez Myria Editions. Management d'équipe, rédaction de plans de tests et reporting de bugs critiques. Game Designer sur plusieurs projets étudiants majeurs.",

        'card-cv-tag': "CV",
        'card-cv-title': "Mon Parcours",
        'card-cv-desc': "Détail complet de mon parcours professionnel.",
        'btn-view': "Voir le détail",
        'section-projects': "Projet.",
        'card-1-desc': "Une boutique WooCommerce ultra-rapide avec une interface 'Headless'. +40% de conversion.",
        'card-2-desc': "Application React consommant une API en temps réel. Visualisation de données complexe.",
        'card-3-desc': "Les origines. Un site statique performant qui a posé les bases de mon apprentissage.",
        'footer-ready': "Prêt pour le prochain niveau ?",
        'footer-click': "(Cliquer pour me contacter)",
        'footer-cta': "Discutons."
    },
    en: {
        'nav-projects': "Projects",
        'nav-cv': "Resume",
        'nav-contact': "Contact",
        'nav-menu': "Menu",
        'menu-home': "Home",
        'menu-manifesto': "Manifesto",
        'menu-cv': "Resume",
        'menu-projects': "Projects",
        'menu-contact': "Contact",
        'close': "Close",
        'hero-sub': "Game Designer & QA Tester",
        'scroll-hint': "Scroll to explore",
        'manifesto': "My dream job is to join <span style='color:#fff'>Ubisoft</span> as a <span style='color:#fff'>Game Designer</span>. I specialize in <span style='color:#fff'>QA</span>, but remain quite versatile. My goal is to gain as much experience as possible. I've always played video games, but over time, I began to wonder how designers convey their vision. After studying their work, I discovered that I too want to share my creativity and vision of gaming.",
        'section-cv': "Curriculum Vitae.",

        'bento-1-title': "Skills",
        // MISE À JOUR : Liste à puces pour les compétences (EN)
        'bento-1-desc': "<ul style='margin-left: 20px; list-style-type: disc;'><li>Unreal Engine (Intermediate) | Engine knowledge / Variable modification & integration / Asset management</li><li>Unity (Beginner)</li><li>Photoshop (Advanced)</li><li>AI Illustrator (Advanced)</li></ul>",

        'bento-2-title': "Education",
        'bento-2-desc': "Game Design Master's at Studio Mercier (2022-2026).",

        'bento-3-title': "Experience",
        'bento-3-desc': "QA Lead Intern at Myria Editions. Team management, test plan writing, and critical bug reporting. Game Designer on multiple major student projects.",

        'card-cv-tag': "Resume",
        'card-cv-title': "My Journey",
        'card-cv-desc': "Full detail of my professional background.",
        'btn-view': "View Case Study",
        'section-projects': "Selected Work.",
        'card-1-desc': "Ultra-fast WooCommerce shop with Headless interface. +40% conversion rate.",
        'card-2-desc': "React app consuming real-time API. Complex data visualization.",
        'card-3-desc': "The origins. A performant static site that laid the foundations of my learning.",
        'footer-ready': "Ready for the next level?",
        'footer-click': "(Click to contact me)",
        'footer-cta': "Discutons."
    }
};

// Fonction pour (ré)initialiser l'animation Manifesto
function initManifesto() {
    const manifestoContainer = document.querySelector("#manifesto .text-reveal");
    if(!manifestoContainer) return;
    const text = manifestoContainer.innerText;
    manifestoContainer.innerHTML = "";
    text.split(" ").forEach(word => {
        const span = document.createElement("span");
        span.innerHTML = word + " ";
        manifestoContainer.appendChild(span);
    });
    gsap.to("#manifesto .text-reveal span", {
        scrollTrigger: {
            trigger: "#manifesto", start: "top 80%", end: "bottom 20%", scrub: 1
        },
        opacity: 1, color: "#ffffff", stagger: 0.1
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if(btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active-lang');
        } else {
            btn.classList.remove('active-lang');
        }
    });
    initManifesto();
}

// --- DATA PROJETS (AVEC TRADUCTION) ---
const projectData = {
    'arcadia': {
        image: "url('./img/arcadia.webp')",
        fr: {
            title: "Arcadia Unbound",
            tags: ["Unreal Engine 5", "RPG", "Game Design", "Équilibrage"],
            desc: `<p><strong>Projet scolaire en équipe.</strong></p>
                   <p>En tant que Game Designer, j'ai été responsable de la conception de 3 classes de RPG, incluant la définition de leurs compétences et de leur progression.</p>
                   <p>J'ai également travaillé sur l'équilibrage des mécaniques de jeu pour assurer une expérience fluide.</p>
                   <p><a href="https://www.therookies.co/projects/82549" target="_blank" style="color:#fff; text-decoration:underline;">Voir sur The Rookies</a></p>`
        },
        en: {
            title: "Arcadia Unbound",
            tags: ["Unreal Engine 5", "RPG", "Game Design", "Balancing"],
            desc: `<p><strong>Team Student Project.</strong></p>
                   <p>As a Game Designer, I was responsible for designing 3 RPG classes, including defining their skills and progression trees.</p>
                   <p>I also worked on balancing game mechanics to ensure a fluid experience.</p>
                   <p><a href="https://www.therookies.co/projects/82549" target="_blank" style="color:#fff; text-decoration:underline;">View on The Rookies</a></p>`
        }
    },

    'projet 2': {
        image: "url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop')",
        fr: {
            title: "Out of Bounds",
            tags: ["Unreal Engine 5", "Shooter", "Weapon Design", "Rookie Awards Rank B"],
            desc: `<p><strong>Projet certifié Rookie Awards 2025 (Rank B).</strong></p>
                   <p>Sur ce projet Unreal Engine 5, j'ai conçu et équilibré l'intégralité du système d'armes (concept, statistiques, sensations de gameplay).</p>
                   <p>Mon rôle impliquait une collaboration étroite avec l'équipe pour maintenir la cohérence globale.</p>
                   <p><a href="https://www.therookies.co/projects/83829" target="_blank" style="color:#fff; text-decoration:underline;">Voir sur The Rookies</a></p>`
        },
        en: {
            title: "Out of Bounds",
            tags: ["Unreal Engine 5", "Shooter", "Weapon Design", "Rookie Awards Rank B"],
            desc: `<p><strong>Rookie Awards 2025 Certified (Rank B).</strong></p>
                   <p>On this UE5 project, I designed and balanced the entire weapon system (concepts, statistics, gameplay feel).</p>
                   <p>My role involved close collaboration with the team to maintain global Game Design coherence.</p>
                   <p><a href="https://www.therookies.co/projects/83829" target="_blank" style="color:#fff; text-decoration:underline;">View on The Rookies</a></p>`
        }
    },

    'projet 3': {
        image: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
        fr: {
            title: "Stage QA Lead",
            tags: ["Management", "QA Testing", "Jira/Confluence", "Myria Editions"],
            desc: `<p><strong>Myria Editions (Juillet - Août 2025)</strong></p>
                   <p>J'ai assuré la direction et la coordination d'une équipe de testeurs pour garantir la qualité du projet.</p>
                   <ul>
                    <li>Identification et documentation des bugs critiques.</li>
                    <li>Communication directe avec les développeurs.</li>
                    <li>Mise en place de protocoles de test rigoureux.</li>
                   </ul>`
        },
        en: {
            title: "QA Lead Intern",
            tags: ["Management", "QA Testing", "Jira/Confluence", "Myria Editions"],
            desc: `<p><strong>Myria Editions (July - August 2025)</strong></p>
                   <p>I led and coordinated a team of testers to ensure project quality.</p>
                   <ul>
                    <li>Identification and documentation of critical bugs.</li>
                    <li>Direct communication with developers to prioritize fixes.</li>
                    <li>Implementation of rigorous testing protocols.</li>
                   </ul>`
        }
    },

    'cv': {
        image: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
        fr: {
            title: "Formation & Skills",
            tags: ["Studio Mercier", "Master GD", "Adobe Suite", "Anglais B1"],
            desc: `<p><strong>Formation :</strong> Mastère Jeux Vidéo - Game Design au Studio Mercier Béziers (2022-2026).</p>
                   <p><strong>Compétences :</strong> Unreal Engine, Unity, Photoshop & Illustrator.</p>
                   <p><strong>Langues :</strong> Anglais (Niveau B1).</p>`
        },
        en: {
            title: "Education & Skills",
            tags: ["Studio Mercier", "Master GD", "Adobe Suite", "English B1"],
            desc: `<p><strong>Education:</strong> Video Game Master's - Game Design at Studio Mercier Béziers (2022-2026).</p>
                   <p><strong>Skills:</strong> Unreal Engine, Unity, Photoshop & Illustrator.</p>
                   <p><strong>Languages:</strong> English (Level B1).</p>`
        }
    },

    'contact': {
        image: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop')",
        fr: {
            title: "Contact & CV",
            tags: ["Game Design", "QA Testing", "Open to Work"],
            desc: `<p>Game Designer & QA Tester passionné, je suis disponible pour de nouvelles opportunités.</p>
                   <div style="margin: 20px 0; font-size: 1.1rem;">
                        <p>📧 <strong>Email :</strong> <a href="mailto:coco49.cm11@gmail.com" style="color:#fff;">coco49.cm11@gmail.com</a></p>
                        <p>📱 <strong>Téléphone :</strong> +33 7 85 97 83 83</p>
                        <p style="margin-top: 10px;">🔗 <strong>Mes réseaux :</strong> <a href="https://www.linkedin.com/in/corentin-zandomenighi-a773842a2/" target="_blank" style="color:#fff; text-decoration: underline;">LinkedIn</a> / <a href="https://www.therookies.co/u/CXKILLXR" target="_blank" style="color:#fff; text-decoration: underline;">The Rookies</a></p>
                   </div>
                   <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 20px;">
                       <a href="./cvfr/CV_Zandomenighi_Corentin_FR.pdf" target="_blank" class="btn-fake" style="pointer-events: auto; background: #fff; color: #000;">📥 CV Français</a>
                       <a href="./cven/CV_Zandomenighi_Corentin_EN.pdf" target="_blank" class="btn-fake" style="pointer-events: auto; background: #fff; color: #000;">📥 CV Anglais</a>
                   </div>`
        },
        en: {
            title: "Contact & Resume",
            tags: ["Game Design", "QA Testing", "Open to Work"],
            desc: `<p>Passionate Game Designer & QA Tester, I am available for new opportunities.</p>
                   <div style="margin: 20px 0; font-size: 1.1rem;">
                        <p>📧 <strong>Email:</strong> <a href="mailto:coco49.cm11@gmail.com" style="color:#fff;">coco49.cm11@gmail.com</a></p>
                        <p>📱 <strong>Phone:</strong> +33 7 85 97 83 83</p>
                        <p style="margin-top: 10px;">🔗 <strong>My Networks:</strong> <a href="https://www.linkedin.com/in/corentin-zandomenighi-a773842a2/" target="_blank" style="color:#fff; text-decoration: underline;">LinkedIn</a> / <a href="https://www.therookies.co/u/CXKILLXR" target="_blank" style="color:#fff; text-decoration: underline;">The Rookies</a></p>
                   </div>
                   <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 20px;">
                       <a href="./cvfr/CV_Zandomenighi_Corentin_FR.pdf" target="_blank" class="btn-fake" style="pointer-events: auto; background: #fff; color: #000;">📥 Resume French</a>
                       <a href="./cven/CV_Zandomenighi_Corentin_EN.pdf" target="_blank" class="btn-fake" style="pointer-events: auto; background: #fff; color: #000;">📥 Resume English</a>
                   </div>`
        }
    }
};

// --- LENIS SCROLL ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// --- GSAP ANIMATIONS ---
gsap.registerPlugin(ScrollTrigger);

// Loader
const loaderTimeline = gsap.timeline();
loaderTimeline
    .to(".loader-bar", { width: "100%", duration: 1.5, ease: "power2.inOut" })
    .to(".loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
    .to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4")
    .to("#hero-sub", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
    .to("#scroll-hint", { opacity: 1, duration: 1 }, "-=0.5");

// Initialisation Manifesto
initManifesto();

// Bento Cards
gsap.utils.toArray(".bento-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: i * 0.1
    });
});

// Stacking Cards Logic
const cards = gsap.utils.toArray(".card-container");
cards.forEach((card, i) => {
    if (i === cards.length - 1) return;
    const innerCard = card.querySelector(".card");
    gsap.to(innerCard, {
        scrollTrigger: {
            trigger: card, start: "top top", end: "bottom top", scrub: true,
        },
        scale: 0.9, opacity: 0.8, filter: "blur(5px)"
    });
});

// --- MODAL LOGIC ---
const modal = document.querySelector(".project-modal");

function openProject(id) {
    const project = projectData[id];
    if(!project) return;

    // SÉLECTIONNER LES DONNÉES SELON LA LANGUE ACTUELLE (currentLang)
    const data = project[currentLang];

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-image').style.backgroundImage = project.image;
    document.getElementById('modal-desc').innerHTML = data.desc;

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const chip = document.createElement('div');
        chip.className = 'tag-chip';
        chip.innerText = tag;
        tagsContainer.appendChild(chip);
    });

    lenis.stop();
    modal.style.display = 'block';
    gsap.fromTo(modal,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
}

function closeProject() {
    gsap.to(modal, {
        opacity: 0, y: 50, duration: 0.4, ease: "power3.in",
        onComplete: () => {
            modal.style.display = 'none';
            lenis.start();
        }
    });
}

// --- CURSOR LOGIC ---
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
});

const links = document.querySelectorAll("a, .bento-card, .menu-btn, .card, .close-btn, .header-btn, .lang-btn");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursorOutline.style.width = "80px";
        cursorOutline.style.height = "80px";
        cursorOutline.style.background = "rgba(255,255,255,0.1)";
    });
    link.addEventListener("mouseleave", () => {
        cursorOutline.style.width = "40px";
        cursorOutline.style.height = "40px";
        cursorOutline.style.background = "transparent";
    });
});

// --- MENU LOGIC ---
const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.nav-dropdown');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    const isFr = currentLang === 'fr';
    if (dropdown.classList.contains('active')) {
        menuBtn.innerText = isFr ? "Fermer" : "Close";
    } else {
        menuBtn.innerText = isFr ? "Menu" : "Menu";
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('active');
        menuBtn.innerText = currentLang === 'fr' ? "Menu" : "Menu";
    });
});

window.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            menuBtn.innerText = currentLang === 'fr' ? "Menu" : "Menu";
        }
    }
});

// --- AMÉLIORATIONS DE FERMETURE DES MODALES ---

// 1. Fermer en cliquant sur les côtés (à l'extérieur du contenu)
modal.addEventListener("click", (e) => {
    // Si l'élément cliqué est la modale elle-même (le fond) et non son contenu enfant
    if (e.target === modal) {
        closeProject();
    }
});

// 2. Fermer avec la touche Échap (Escape)
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        // On vérifie si la modale est actuellement affichée
        if (modal.style.display === "block") {
            closeProject();
        }

        // Optionnel : Fermer aussi le menu dropdown si on appuie sur Echap
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            menuBtn.innerText = currentLang === 'fr' ? "Menu" : "Menu";
        }
    }
});