// --- GESTION DES LANGUES ---
let currentLang = 'fr'; // Langue par défaut

const translations = {
    fr: {
        // Nav
        "nav-projects": "Projets",
        "nav-curriculum": "Présentation",
        "nav-contact": "Contact",
        "footer-ready": "Prêt pour le prochain niveau ?",
        "footer-cta": "Échangeons.",
        "footer-click": "(Cliquer pour me contacter)",
        "section-projects": "Projets.",
        "scroll-hint": "Défiler pour explorer",
        "btn-view": "Voir l'étude",
        "bloc-title-p1": "Projet 1",
        "bloc-title-p2": "Projet 2",
        "bloc-title-p3": "Projet 3",
        "summary-stage": "Au sein de la maison d'édition, j'ai réalisé nombreux playtest afin d'avoir un prototype le plus proche de nos idées pour que les équipes suivante puissent avoir toutes les idées à intentions qu'on voulait donner. Mes missions incluaient la rédaction des playtest, la coordination d'une équipe et le suivi rigoureux du bug tracking.",
        "summary-oob": "Un FPS nerveux développé sous Unreal Engine. Focus sur le feeling des armes, l'équilibrage des armes en multijoueur et la réalisation de tests techniques pour optimiser les performances et le gameplay.",
        "summary-arcadia": "Un projet de RPG ambitieux où j'ai conçu les systèmes de progression et les arbres de compétences, tout en travaillant sur la cohérence au gameplay.",

        /* ===== TITRE ===== */
        "cv-title": "Curriculum Vitae.",

        /* ===== PRÉSENTATION ===== */
        "cv-presentation-title": "Présentation",
        "cv-presentation-p1": "Mon ambition professionnelle est d’intégrer une grande entreprise de jeux vidéo en tant que QA Tester. Grâce à une approche rigoureuse, un fort sens de l’analyse et une bonne compréhension des mécaniques de jeu, je souhaite contribuer activement à la qualité, à la stabilité et à l’expérience globale des productions.",
        "cv-presentation-p2": "Spécialisé en QA (Quality Assurance) tout en restant polyvalent, mon objectif est d’acquérir un maximum d’expérience au sein d’équipes de production afin de développer une vision complète du processus de création d’un jeu vidéo.",
        "cv-presentation-p3": "Passionné de jeux vidéo depuis toujours, je m’intéresse particulièrement à la manière dont les game designers transmettent leur vision via le gameplay. À long terme, je souhaite évoluer vers un poste de Game Designer.",

        /* ===== OBJECTIF ===== */
        "cv-objective-title": "🎯 Objectif professionnel",
        "cv-objective-desc": "QA Tester au sein d’une grande entreprise de jeux vidéo, avec une évolution progressive vers un poste de Game Designer.",

        /* ===== EXPÉRIENCES ===== */
        "cv-experience-title": "💼 Expériences professionnelles",
        "cv-experience-list": `
            <li><strong>Myria Éditions</strong> — Stage QA Lead (2025)</li>
            <li>Coordination d’équipe QA</li>
            <li>Plans de tests & bug tracking</li>
            <li><strong>Camping LVL Les Ayguades</strong> — Réceptionniste (2024)</li>
        `,

        /* ===== FORMATION ===== */
        "cv-education-title": "🎓 Formation",
        "cv-education-desc": `
            <strong>Studio Mercier – Béziers</strong><br>
            Mastère Jeux Vidéo – Game Design<br>
            2022 – 2026
        `,

        /* ===== COMPÉTENCES ===== */
        "cv-skills-title": "🧠 Compétences",
        "cv-skills-list": `
            <li>Unreal Engine (Intermédiaire)</li>
            <li>QA Testing & Bug Tracking</li>
            <li>Game Design & Équilibrage</li>
            <li>Photoshop / Illustrator</li>
            <li>Unity (Débutant)</li>
            <li>Anglais B1</li>
        `,

        /* ===== PROJETS ===== */
        "cv-projects-title": "🎮 Projets",
        "cv-projects-list": `
            <li>Out of Bounds — Game Design & Armes</li>
            <li>Arcadia Unbound — RPG & Progression</li>
            <li>Stage Myria Éditions — QA & Level Design</li>
        `,

        /* ===== DOWNLOAD ===== */
        "cv-download-title": "📄 Télécharger mon CV",
        "cv-download-links": `
            <a href="./cvfr/CV_Zandomenighi_Corentin_FR.pdf" target="_blank">CV Français</a>
            <a href="./cven/CV_Zandomenighi_Corentin_EN.pdf" target="_blank">CV Anglais</a>
        `
    },

    en: {
        // Nav
        "nav-projects": "Projects",
        "nav-curriculum": "Presentation",
        "nav-contact": "Contact",
        "footer-ready": "Ready for the next level ?",
        "footer-cta": "Let's Talk.",
        "footer-click": "(Click to contact me)",
        "section-projects": "Projects.",
        "scroll-hint": "Scroll to explore",
        "btn-view": "See the study",
        "bloc-title-p1": "Project 1",
        "bloc-title-p2": "Project 2",
        "bloc-title-p3": "Project 3",
        "summary-stage": "Within the publishing house, I conducted numerous playtests in order to create a prototype that was as close as possible to our ideas, so that the teams that followed could have all the ideas we wanted to convey. My tasks included writing playtests, coordinating a team and rigorously monitoring bug tracking.",
        "summary-oob": "A fast-paced FPS developed using Unreal Engine. Focus on weapon feel, multiplayer weapon balancing, and technical testing to optimise performance and gameplay.",
        "summary-arcadia": "An ambitious RPG project where I designed the progression systems and skill trees, while working on gameplay consistency.",

        "cv-title": "Curriculum Vitae.",

        /* ===== PRÉSENTATION ===== */
        "cv-presentation-title": "Presentation",
        "cv-presentation-p1": "My professional ambition is to join a major video game company as a QA Tester. With a rigorous approach, strong analytical skills, and a solid understanding of game mechanics, I aim to actively contribute to the quality, stability, and overall experience of the productions I work on.",
        "cv-presentation-p2": "Specialized in QA (Quality Assurance) while remaining versatile, my goal is to gain as much experience as possible within production teams in order to develop a complete understanding of the video game creation process.",
        "cv-presentation-p3": "Passionate about video games since childhood, I am particularly interested in how game designers convey their vision through gameplay. In the long term, I aim to evolve into a Game Designer role.",

        /* ===== OBJECTIVE ===== */
        "cv-objective-title": "🎯 Career Objective",
        "cv-objective-desc": "QA Tester within a major video game company, with a gradual evolution toward a Game Designer position.",

        /* ===== EXPERIENCE ===== */
        "cv-experience-title": "💼 Professional Experience",
        "cv-experience-list": `
            <li><strong>Myria Éditions</strong> — QA Lead Intern (2025)</li>
            <li>QA team coordination</li>
            <li>Test plans & bug tracking</li>
            <li><strong>Camping LVL Les Ayguades</strong> — Receptionist (2024)</li>
        `,

        /* ===== EDUCATION ===== */
        "cv-education-title": "🎓 Education",
        "cv-education-desc": `
            <strong>Studio Mercier – Béziers</strong><br>
            Master’s Degree in Video Games – Game Design<br>
            2022 – 2026
        `,

        /* ===== SKILLS ===== */
        "cv-skills-title": "🧠 Skills",
        "cv-skills-list": `
            <li>Unreal Engine (Intermediate)</li>
            <li>QA Testing & Bug Tracking</li>
            <li>Game Design & Balancing</li>
            <li>Photoshop / Illustrator</li>
            <li>Unity (Beginner)</li>
            <li>English B1</li>
        `,

        /* ===== PROJECTS ===== */
        "cv-projects-title": "🎮 Projects",
        "cv-projects-list": `
            <li>Out of Bounds — Weapon Game Design</li>
            <li>Arcadia Unbound — RPG Systems & Progression</li>
            <li>Myria Éditions Internship — QA & Level Design</li>
        `,

        /* ===== DOWNLOAD ===== */
        "cv-download-title": "📄 Download my CV",
        "cv-download-links": `
            <a href="./cvfr/CV_Zandomenighi_Corentin_FR.pdf" target="_blank">French CV</a>
            <a href="./cven/CV_Zandomenighi_Corentin_EN.pdf" target="_blank">English CV</a>
        `
    }
};


// Fonction pour (ré)initialiser l'animation presentation
function initpresentation() {
    const presentationContainer = document.querySelector("#presentation .text-reveal");
    if(!presentationContainer) return;
    const text = presentationContainer.innerText;
    presentationContainer.innerHTML = "";
    text.split(" ").forEach(word => {
        const span = document.createElement("span");
        span.innerHTML = word + " ";
        presentationContainer.appendChild(span);
    });
    gsap.to("#presentation .text-reveal span", {
        scrollTrigger: {
            trigger: "#presentation", start: "top 80%", end: "bottom 20%", scrub: 1
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
    initpresentation();
}

// --- DATA PROJETS (AVEC TRADUCTION) ---
const projectData = {
    'arcadia': {
        image: "url('./img/arcadia.webp')",
        fr: {
            title: "Arcadia Unbound",
            tags: ["Unreal Engine 5", "RPG", "Game Design", "Équilibrage"],
            desc: `<p><strong>Projet étudiant en équipe – Unreal Engine 5.</strong></p>
               <p><em>Arcadia Unbound</em> a été réalisé lors d’un atelier universitaire ayant pour objectif de créer un <strong>monde ouvert RPG</strong>. Le joueur incarne un <strong>mage</strong> capable de manier plusieurs sorts évolutifs.</p>
               <p>Projet réalisé avec <strong>Crouzié Ethan</strong>, <strong>Alber Latour Mateo</strong>, <strong>Desplanque David</strong> et <strong>Maurel Thomas</strong>.</p>

               <p>Chaque classe partage une structure d’arbre de compétences commune, avec un niveau maximum de <strong>40</strong>. Grâce à 40 points de compétence, le joueur peut personnaliser son style en améliorant certaines capacités ou en débloquant des formes finales puissantes.</p>
               
               <h4>🧩 Structure de l’arbre de compétences</h4>
               <img src="./img/Arbre competence fr.png" alt="Arbre de compétences Arcadia Unbound" style="width:100%; border-radius:10px; margin:15px 0;">
               
               <ul>
                 <li><strong>Sort offensif</strong> – débloqué dès le départ</li>
                 <li><strong>Sort offensif avancé</strong> – débloqué au niveau 5</li>
                 <li><strong>Sort défensif</strong> – débloqué au niveau 10</li>
                 <li><strong>Sort ultime</strong> – débloqué au niveau 15</li>
               </ul>
               <br>
               <p><strong>Le système de progression utilise un code couleur :</strong></p>
               <ul>
                 <li>🔵 Compétences de base</li>
                 <li>🔴 Améliorations ou variantes</li>
                 <li>🟡 Passifs – débloquez les 3 pour accéder à la forme Ether</li>
                 <li>🟢 Forme Ether – version finale et la plus puissante du sort</li>
               </ul>

               <img src="./img/Mage fr.png" alt="Compétences du mage Arcadia Unbound" style="width:100%; border-radius:10px; margin:20px 0;">

               <p style="margin-top:25px; text-align:center;">
                 <a href="https://www.therookies.co/projects/82549" target="_blank" style="color:#fff; text-decoration:underline;">
                 Voir le projet complet sur The Rookies</a>
               </p>`
        },
        en: {
            title: "Arcadia Unbound",
            tags: ["Unreal Engine 5", "RPG", "Game Design", "Balancing"],
            desc: `<p><strong>Team Student Project – Unreal Engine 5.</strong></p>
               <p><em>Arcadia Unbound</em> was created during a university workshop focused on building an <strong>open-world RPG</strong> experience. The player embodies a <strong>mage</strong> mastering different spells and progressions.</p>
               <p>I collaborated with <strong>Crouzié Ethan</strong>, <strong>Alber Latour Mateo</strong>, <strong>Desplanque David</strong>, and <strong>Maurel Thomas</strong>.</p>

               <p>Each class follows a shared skill tree structure capped at <strong>level 40</strong>. With 40 skill points, players can customize their playstyle by enhancing specific abilities or unlocking powerful final forms.</p>

               <h4>🧩 Skill Tree Structure</h4>
               <img src="./img/Arbre competence en.png" alt="Arcadia Unbound Skill Tree" style="width:100%; border-radius:10px; margin:15px 0;">

               <ul>
                 <li><strong>Offensive skill</strong> – unlocked from the start</li>
                 <li><strong>Advanced offensive skill</strong> – unlocked at level 5</li>
                 <li><strong>Defensive skill</strong> – unlocked at level 10</li>
                 <li><strong>Ultimate skill</strong> – unlocked at level 15</li>
               </ul>
               <br>
               <p><strong>The progression system uses color-coded nodes:</strong></p>
               <ul>
                 <li>🔵 Basic skills</li>
                 <li>🔴 Variant or improvement of base spells</li>
                 <li>🟡 Passives – unlock all 3 to access the Ether form</li>
                 <li>🟢 Ether form – final and most powerful version of the spell</li>
               </ul>

               <img src="./img/Mage en.png" alt="Arcadia Unbound Mage Skills" style="width:100%; border-radius:10px; margin:20px 0;">

               <p style="margin-top:25px; text-align:center;">
                 <a href="https://www.therookies.co/projects/82549" target="_blank" style="color:#fff; text-decoration:underline;">
                 View full project on The Rookies</a>
               </p>`
        }
    },

    'outofbound': {
        image: "url('./img/OOB logo.png')",
        fr: {
            title: "Out of Bound",
            tags: ["Projet d'études", "Game Design", "Armes", "Équilibrage", "Unreal Engine 5"],
            desc: `
<p><strong>Out of Bounds – Travail sur le Game Design des armes</strong></p>

<p>
J’ai travaillé sur <strong>l’ensemble du système d’armes</strong> : conception, itérations, tests et équilibrage.
Sur cette page, je me concentre volontairement sur <strong>le pistolet</strong> afin de détailler ma méthodologie de travail.
</p>

<ul>
  <li>🔫 <strong>Pistolet</strong> (arme de base – focus détaillé ci-dessous)</li>
  <li>🌪️ <strong>Air Blower</strong></li>
  <li>🧲 <strong>The Sticky Launcher</strong></li>
  <li>🪐 <strong>The Gravity Judge</strong></li>
  <li>⚡ <strong>The Equalaser</strong></li>
  <li>💣 <strong>Little Bertha</strong></li>
</ul>

<p style="margin-top:15px;">
👉 <a href="https://www.therookies.co/projects/83829" target="_blank"
   style="color: inherit; text-decoration: underline; text-underline-offset: 4px; font-weight: 500;">
   Voir le projet complet sur The Rookies
</a>
</p>
<br>
<h3>🛠️ Conception d’armes</h3>
<br>
<p>
Lors de la conception des armes, nous n’avions initialement qu’un seul type de tir.
Après plusieurs phases de test, nous avons décidé d’en ajouter un second afin d’apporter
davantage de variété, de profondeur de gameplay et un meilleur contrôle pour le joueur.
</p>

<h3>🔫 Pistolet</h3>
<br>
<p>
Lors de la conception de cette arme, une seule munition était prévue.
Les tests ont montré des limites en termes de rythme et de flexibilité,
ce qui nous a conduits à intégrer une seconde munition afin d’élargir les options de jeu.
</p>
<p>
Cette seconde munition s’inspire du pistolet à silex de <em>Fortnite</em>.
Le pistolet est l’arme principale du joueur : en cas de mort, le joueur réapparaît avec celui-ci,
et lorsque les munitions d’une autre arme sont épuisées, le pistolet est automatiquement rééquipé.
</p>

<img src="./gif/Shot pistol.gif" alt="Tir du pistolet" style="width:100%; border-radius:10px; margin:20px 0;">

<h3>⚖️ Équilibrage</h3>
<br>
<p>
De nombreux tests et itérations ont été nécessaires pour équilibrer l’ensemble des armes.
Après plusieurs ajustements, nous avons trouvé un équilibre satisfaisant pour toute l’équipe,
confirmé par des retours majoritairement positifs lors des dernières phases de test.
</p>

<h3>🔫 Pistolet</h3>
<br>
<p>
L’équilibrage du pistolet a représenté un véritable défi :
il devait rester suffisamment efficace sans devenir dominant,
tout en conservant son rôle d’arme de base.
</p>
<p>
Les premiers tests montraient une arme trop faible, presque inutilisable.
Grâce à de nombreuses sessions de test en conditions réelles,
nous avons trouvé un compromis permettant aux joueurs de rester compétitifs
même en utilisant uniquement le pistolet.
</p>

<img src="./gif/Balance pistol.gif" alt="Équilibrage du pistolet" style="width:100%; border-radius:10px; margin:20px 0;">
`
        },

        en: {
            title: "Out of Bound",
            tags: ["Student Project", "Game Design", "Weapons", "Balancing", "Unreal Engine 5"],
            desc: `
<p><strong>Out of Bounds – Weapon Game Design Work</strong></p>

<p>
I worked on the <strong>entire weapon system</strong>, including design, iteration, playtesting,
and balancing. On this page, I focus specifically on the <strong>pistol</strong>
to clearly showcase my design process.
</p>

<ul>
  <li>🔫 <strong>Pistol</strong> (base weapon – detailed focus below)</li>
  <li>🌪️ <strong>Air Blower</strong></li>
  <li>🧲 <strong>The Sticky Launcher</strong></li>
  <li>🪐 <strong>The Gravity Judge</strong></li>
  <li>⚡ <strong>The Equalaser</strong></li>
  <li>💣 <strong>Little Bertha</strong></li>
</ul>

<p style="margin-top:15px;">
👉 <a href="https://www.therookies.co/projects/83829" target="_blank"
   style="color: inherit; text-decoration: underline; text-underline-offset: 4px; font-weight: 500;">
   View the full project on The Rookies
</a>
</p>
<br>
<h3>🛠️ Weapon Design</h3>
<br>
<p>
During the weapon design phase, we initially had only one firing mode.
After multiple playtests, we introduced a second one to add more gameplay variety,
depth, and better player control.
</p>

<h3>🔫 Pistol</h3>
<br>
<p>
When designing the pistol, only one ammo type was planned at first.
Playtests revealed limitations, leading us to add a second ammo type
to enhance flexibility and player choice.
</p>
<p>
This secondary ammo was inspired by Fortnite’s flintlock pistol.
The pistol serves as the player’s main weapon: upon death, players respawn with it,
and when another weapon runs out of ammo, they automatically switch back to the pistol.
</p>

<img src="./gif/Shot pistol.gif" alt="Pistol shot" style="width:100%; border-radius:10px; margin:20px 0;">

<h3>⚖️ Balancing</h3>
<br>
<p>
Through extensive testing and iteration, we achieved a balance that satisfied the entire team.
Final playtests with the latest adjustments received mostly positive feedback.
</p>

<h3>🔫 Pistol</h3>
<br>
<p>
Balancing the pistol was particularly challenging:
it needed to remain effective without becoming overpowered,
while still fulfilling its role as the base weapon.
</p>
<p>
Early tests showed the pistol was too weak and nearly unusable.
After numerous playtests, we reached a balanced state that allowed players
to remain competitive even when relying solely on the pistol.
</p>

<img src="./gif/Balance pistol.gif" alt="Pistol balancing" style="width:100%; border-radius:10px; margin:20px 0;">
`
        }
    },


    'stage': {
        image: "url('./img/Myria logo.png')",
        fr: {
            title: "Stage Myria Éditions",
            tags: ["Stage", "Lead", "Jeu Vidéo", "Level Design"],
            desc: `
      <p>Lors de mon stage chez <strong>Myria Éditions</strong>, j’ai eu l’opportunité d’occuper le rôle de <strong>Lead</strong>. 
      J’étais responsable de la coordination d’une petite équipe de testeurs, de la communication entre les pôles, 
      et du suivi de l’avancement des tâches pour garantir la qualité du jeu en développement ainsi que de <strong>fournir un prototype</strong> le plus complet possible afin de <strong>transmettre les idées à intentions aux équipes futures.</strong> </p>

      <h3 style="margin-top: 25px;">🎯 Rôles et missions</h3>
      <br>
      <ul>
        <li>👥 Lead d’une équipe</li>
        <li>💬 Communication constante entre les équipes</li>
        <li>📝 Vérification et validation du travail effectué</li>
        <li>⏰ Respect des deadlines et gestion du temps</li>
        <li>🧱 Participation à la construction et la mise en place des niveaux</li>
      </ul>

      <h3 style="margin-top: 40px;">🧠 Compétences</h3>
      <br>
      <p>Ce stage m’a permis de développer des compétences essentielles, autant techniques qu’humaines. 
      J’ai appris à encadrer une équipe, à communiquer efficacement, et à gérer plusieurs priorités simultanément 
      dans un contexte de production réel.</p>

      <ul>
        <li>🏆 Leadership</li>
        <li>💬 Communication</li>
        <li>🧭 Organisation</li>
        <li>⏳ Respect des deadlines</li>
      </ul>

      <h3 style="margin-top: 50px;">🕹️ Level Design : Map Metroidvania</h3>
      <br>
      <p>Durant mon stage, j’ai également conçu une <strong>map Metroidvania</strong>. 
      J’ai réalisé le <strong>blocking complet</strong> et la mise en place des différentes zones afin d’assurer une bonne progression 
      et une cohérence dans la navigation du joueur. Voici un aperçu des zones que j’ai créées :</p>

      <h4 style="margin-top: 30px;">🏙️ HUB</h4>
      <img src="./img/stage/Hub.png" alt="HUB" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 1</h4>
      <img src="./img/stage/Zone 1.png" alt="Zone 1" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 2-1</h4>
      <img src="./img/stage/Zone 2.1.png" alt="Zone 2-1" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 2-2</h4>
      <img src="./img/stage/Zone 2.2.png" alt="Zone 2-2" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 3-1</h4>
      <img src="./img/stage/Zone 3.1.png" alt="Zone 3-1" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 3-2</h4>
      <img src="./img/stage/Zone 3.2.png" alt="Zone 3-2" style="width:100%; border-radius:10px; margin:15px 0;">
    `
        },
        en: {
            title: "Internship at Myria Éditions",
            tags: ["Internship", "Lead", "Video Game", "Level Design"],
            desc: `
      <p>During my internship at <strong>Myria Éditions</strong>, I had the opportunity to work as a <strong>Lead</strong>. 
      I was responsible for coordinating a small testing team, managing communication between departments, 
      and monitoring task progress to ensure the quality of the game under development, as well as <strong>providing a prototype</strong> that is as complete as possible in order to <strong>convey ideas and intentions to future teams.</strong> </p>

      <h3 style="margin-top: 25px;">🎯 Roles and Missions</h3>
      <br>
      <ul>
        <li>👥 Leading a small team</li>
        <li>💬 Maintaining communication between teams</li>
        <li>📝 Checking and validating completed work</li>
        <li>⏰ Meeting deadlines and managing time efficiently</li>
        <li>🧱 Contributing to level design and implementation</li>
      </ul>

      <h3 style="margin-top: 40px;">🧠 Skills</h3>
      <br>
      <p>This internship allowed me to strengthen both my technical and soft skills. 
      I learned how to lead a team, communicate efficiently, and manage multiple priorities in a real production context.</p>

      <ul>
        <li>🏆 Leadership</li>
        <li>💬 Communication</li>
        <li>🧭 Organization</li>
        <li>⏳ Deadline management</li>
      </ul>

      <h3 style="margin-top: 50px;">🕹️ Level Design: Metroidvania Map</h3>
      <br>
      <p>During my internship, I also designed a <strong>Metroidvania map</strong>. 
      I handled the <strong>blocking process</strong> and created several interconnected areas to ensure smooth player progression 
      and logical level flow. Here are the different zones I built:</p>

      <h4 style="margin-top: 30px;">🏙️ HUB</h4>
      <img src="./img/stage/Hub.png" alt="HUB" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 1</h4>
      <img src="./img/stage/Zone 1.png" alt="Zone 1" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 2-1</h4>
      <img src="./img/stage/Zone 2.1.png" alt="Zone 2-1" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 2-2</h4>
      <img src="./img/stage/Zone 2.2.png" alt="Zone 2-2" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 3-1</h4>
      <img src="./img/stage/Zone 3.1.png" alt="Zone 3-1" style="width:100%; border-radius:10px; margin:15px 0;">

      <h4>🧩 Zone 3-2</h4>
      <img src="./img/stage/Zone 3.2.png" alt="Zone 3-2" style="width:100%; border-radius:10px; margin:15px 0;">
    `
        }
    },

    'cv': {
        image: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')",
        fr: {
            title: "Formation & Skills",
            tags: ["Studio Mercier", "Master GD", "Adobe Suite", "Anglais B1"],
            desc: `
<p><strong>🎯 Objectif professionnel :</strong> <strong>Intégrer une grande entreprise de jeux vidéo</strong> en tant que <strong>QA Tester</strong>, afin de contribuer activement à la qualité et à la stabilité des productions.

Grâce à une approche rigoureuse, une bonne compréhension des systèmes de jeu et une forte capacité d’analyse, mon objectif est d’évoluer progressivement vers un poste de <strong>Game Designer</strong>, en mettant à profit mon expérience en QA pour concevoir des expériences de jeu cohérentes, équilibrées et centrées sur le joueur.

<br>
<h4>💼 Expériences professionnelles</h4>
<ul>
  <li><strong>Myria Editions</strong> — Stage Leader d’équipe QA (Juillet - Août 2025)  
  Coordination d’une équipe de testeurs, identification de bugs critiques et mise en place de protocoles de test.</li>
  <li><strong>Camping LVL Les Ayguades</strong> — Réceptionniste (Juin - Août 2024)  
  Travail en équipe dans un environnement dynamique et gestion des tâches quotidiennes.</li>
</ul>
<br>

<h4>🎓 Formation</h4>
<p><strong>Studio Mercier Béziers</strong> — Mastère Jeux Vidéo - Game Design (2022 - 2026)</p>
<br>

<h4>🧠 Compétences</h4>
<ul>
  <li><strong>Unreal Engine</strong> (Intermédiaire) — Intégration, asset management et blueprint</li>
  <li><strong>Photoshop / Illustrator</strong> (Avancé)</li>
  <li><strong>Unity</strong> (Débutant)</li>
  <li><strong>Anglais</strong> (Niveau B1)</li>
</ul>
<br>

<h4>🎮 Projets</h4>
<ul>
  <li><strong>Out of Bounds</strong> — Conception et équilibrage du système d’armes  
  <a href="https://www.therookies.co/projects/83829" target="_blank" style="color: white;">Voir le projet</a></li>
  <li><strong>Arcadia Unbound</strong> — Création de 3 classes RPG et de leur progression  
  <a href="https://www.therookies.co/projects/82549" target="_blank" style="color: white;">Voir le projet</a></li>
</ul>

<div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 25px;">
  <a href="./cvfr/CV_Zandomenighi_Corentin_FR.pdf" target="_blank" class="btn-fake" 
     style="pointer-events: auto; background: #fff; color: #000;">📥 CV Français</a>
  <a href="./cven/CV_Zandomenighi_Corentin_EN.pdf" target="_blank" class="btn-fake" 
     style="pointer-events: auto; background: #fff; color: #000;">📥 CV Anglais</a>
</div>
`,
        },
        en: {
            title: "Education & Skills",
            tags: ["Studio Mercier", "Master GD", "Adobe Suite", "English B1"],
            desc: `
<p><strong>🎯 Career Goal:</strong> <strong>Join a major video game company</strong> as a <strong>QA Tester</strong>, in order to actively contribute to the quality and stability of productions.

Thanks to a rigorous approach, a good understanding of game systems, and strong analytical skills, my goal is to gradually progress to a position as a <strong>Game Designer</strong>, leveraging my QA experience to design consistent, balanced, and player-centered gaming experiences.

<br>
<h4>💼 Professional Experience</h4>
<ul>
  <li><strong>Myria Editions</strong> — QA Team Leader Intern (July - August 2025)  
  Coordinated a team of testers, identified critical bugs, and implemented testing protocols to ensure project stability.</li>
  <li><strong>Camping LVL Les Ayguades</strong> — Receptionist (June - August 2024)  
  Worked efficiently within a team environment, managing multiple daily tasks in a fast-paced setting.</li>
</ul>
<br>

<h4>🎓 Education</h4>
<p><strong>Studio Mercier Béziers</strong> — Master's Degree in Video Games - Game Design (2022 - 2026)</p>
<br>

<h4>🧠 Skills</h4>
<ul>
  <li><strong>Unreal Engine</strong> (Intermediate) — Integration, asset management and blueprint</li>
  <li><strong>Photoshop / Illustrator</strong> (Advanced)</li>
  <li><strong>Unity</strong> (Beginner)</li>
  <li><strong>English</strong> (B1 Level)</li>
</ul>
<br>

<h4>🎮 Projects</h4>
<ul>
  <li><strong>Out of Bounds</strong> — Weapon system design and balancing  
  <a href="https://www.therookies.co/projects/83829" target="_blank" style="color: white;">View project</a></li>
  <li><strong>Arcadia Unbound</strong> — Creation of 3 RPG classes and their progression system  
  <a href="https://www.therookies.co/projects/82549" target="_blank" style="color: white;">View project</a></li>
</ul>

<div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 25px;">
  <a href="./cvfr/CV_Zandomenighi_Corentin_FR.pdf" target="_blank" class="btn-fake" 
     style="pointer-events: auto; background: #fff; color: #000;">📥 French CV</a>
  <a href="./cven/CV_Zandomenighi_Corentin_EN.pdf" target="_blank" class="btn-fake" 
     style="pointer-events: auto; background: #fff; color: #000;">📥 English CV</a>
</div>
`,
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

// Initialisation presentation
initpresentation();

// Bento Cards
gsap.utils.toArray(".bento-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out", delay: i * 0.1
    });
});

const projectCards = gsap.utils.toArray('.card-container');

projectCards.forEach((container, i) => {
    if (i < projectCards.length - 1) {
        const card = container.querySelector('.card');

        gsap.to(card, {
            yPercent: 110,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                pinSpacing: false,
                onUpdate: (self) => {
                    // Si la carte est descendue à plus de 90%, on libère les clics
                    if (self.progress > 0.9) {
                        container.classList.add('pass-through');
                    } else {
                        container.classList.remove('pass-through');
                    }
                }
            }
        });
    }
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
    }
});

// --- Zoom intégré (local) dans la modale ---
// ✅ Désactive totalement le zoom sur mobile
const isTouchDevice =
    window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

if (!isTouchDevice) {
    // On attend que tout le DOM soit prêt
    window.addEventListener('DOMContentLoaded', () => {
        // Ajoute le listener sur TOUTES les images dans les modales
        document.addEventListener('click', function (e) {
            const img = e.target.closest('.project-modal img');
            if (!img) return;

            // Si déjà zoomée → retour à la taille normale
            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
                return;
            }

            // Sinon → on applique le zoom local
            img.classList.add('zoomed');
        });
    });
}
// ===== INITIALISATION DE LA LANGUE AU CHARGEMENT =====
window.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang); // currentLang = 'fr'
});








