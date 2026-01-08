// --- DATA PROJETS ---
const projectData = {
    'arcadia': {
        title: "Arcadia Unbound",
        // J'ai mis des images d'exemple ici 👇
        image: "url('./img/arcadia.webp')",
        tags: ["Next.js", "Stripe", "GSAP", "Headless CMS"],
        desc: `<p>Ce projet visait à réinventer l'expérience d'achat pour une marque de néons personnalisés. Le défi principal était de créer un configurateur en temps réel performant.</p>
               <p><strong>Solution :</strong> Une architecture Headless utilisant Next.js pour le frontend et un CMS headless pour la gestion des produits. Le résultat est un site qui charge en moins de 0.8 seconde.</p>
               <p>J'ai également intégré une prévisualisation SVG dynamique qui permet aux utilisateurs de voir leur néon s'illuminer avec différentes couleurs avant l'achat.</p>`
    },
    'projet 2': {
        title: "Projet 2",
        image: "url('https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop')",
        tags: ["React", "OpenWeather API", "Chart.js"],
        desc: `<p>Une application météo qui va au-delà des simples prévisions. Weather Dash agrège des données de plusieurs sources pour fournir des tendances climatiques précises pour les agriculteurs.</p>
               <p>L'interface utilise des graphiques interactifs (Chart.js) pour visualiser les précipitations et l'humidité sur une période donnée.</p>`
    },
    'projet 3': {
        title: "Projet 3",
        image: "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop')",
        tags: ["HTML/CSS", "Vanilla JS", "Barba.js"],
        desc: `<p>La première version de mon portfolio. Bien que techniquement plus simple que mes projets actuels, elle représente une étape cruciale dans ma compréhension du DOM et des animations CSS.</p>
               <p>L'objectif était d'obtenir un score Lighthouse de 100/100, ce qui a été atteint grâce à une optimisation agressive des assets et du code critique.</p>`
    },
    'cv': {
        title: "CV",
        image: "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop')",
        tags: ["HTML/CSS", "Vanilla JS", "Barba.js"],
        desc: `<p>La première version de mon portfolio. Bien que techniquement plus simple que mes projets actuels, elle représente une étape cruciale dans ma compréhension du DOM et des animations CSS.</p>
               <p>L'objectif était d'obtenir un score Lighthouse de 100/100, ce qui a été atteint grâce à une optimisation agressive des assets et du code critique.</p>`
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

// Manifesto
const manifesto = document.querySelector("#manifesto");
const text = manifesto.innerText;
manifesto.innerHTML = "";
text.split(" ").forEach(word => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    manifesto.appendChild(span);
});
gsap.to("#manifesto span", {
    scrollTrigger: {
        trigger: "#manifesto", start: "top 80%", end: "bottom 20%", scrub: 1
    },
    opacity: 1, color: "#ffffff", stagger: 0.1
});

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
    const data = projectData[id];
    if(!data) return;

    // Remplir la modale
    document.getElementById('modal-title').innerText = data.title;

    // 👇 C'EST ICI QUE ÇA CHANGE (data.image au lieu de data.gradient)
    document.getElementById('modal-image').style.backgroundImage = data.image;

    document.getElementById('modal-desc').innerHTML = data.desc;

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const chip = document.createElement('div');
        chip.className = 'tag-chip';
        chip.innerText = tag;
        tagsContainer.appendChild(chip);
    });

    // Arrêter le scroll arrière plan
    lenis.stop();

    // Afficher et animer
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
            lenis.start(); // Relancer le scroll
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

const links = document.querySelectorAll("a, .bento-card, .menu-btn, .card, .close-btn");
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