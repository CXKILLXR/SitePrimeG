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
        'manifesto': "Mon ambition professionnelle est de rejoindre <span style='color:#fff'>Ubisoft</span> en tant que <span style='color:#fff'>Game Designer</span>.<br><br>Bien que spécialisé en <span style='color:#fff'>QA (Quality Assurance)</span>, je reste <span style='color:#fff'>polyvalent</span> et ouvert à différents aspects du développement de jeux vidéo.<br>Mon objectif est d’acquérir un maximum d’expérience afin de perfectionner mes compétences et d’élargir ma vision du métier.<br><br>Passionné de jeux vidéo depuis toujours, je me suis rapidement intéressé à la manière dont les <span style='color:#fff'>game designers</span> parviennent à transmettre leur vision et leurs émotions à travers le gameplay.<br>Cette réflexion m’a conduit à vouloir, à mon tour, <span style='color:#fff'>créer des expériences uniques</span> et <span style='color:#fff'>partager ma propre vision du jeu</span>.",
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
        'footer-cta': "Échangeons."
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
        'manifesto': "My professional ambition is to join <span style='color:#fff'>Ubisoft</span> as a <span style='color:#fff'>Game Designer</span>.<br><br>Although I specialize in <span style='color:#fff'>Quality Assurance (QA)</span>, I remain <span style='color:#fff'>versatile</span> and open to exploring different aspects of video game development.<br>My goal is to gain as much experience as possible to refine my skills and broaden my understanding of the craft.<br><br>Passionate about video games from a young age, I quickly became fascinated by how <span style='color:#fff'>game designers</span> convey their vision and emotions through gameplay.<br>This reflection led me to want, in turn, to <span style='color:#fff'>create unique experiences</span> and <span style='color:#fff'>share my own vision of the game</span>.",
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
        'footer-cta': "Let's Talk."
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
      <p><strong>Voici un exemple de mon travail sur Out of Bounds</strong>, j'ai travaillé sur toutes les armes, mais ici, je vous montre que le pistolet. Si vous voulez en voir plus, je vous invite à aller en bas de cette page pour accéder à ma page The Rookies.</p>

      <h3>🛠️ Conception d’armes</h3>
      <br>
      <p>Lors de la conception des armes, nous n'avions qu'un seul tir, mais après plusieurs tests, nous avons décidé de créer un deuxième tir afin d'ajouter de la variété et une plus grande profondeur de jeu et de contrôle.</p>

      <h3>🔫 Pistolet</h3>
      <br>
      <p>Lors de la conception de cette arme, nous n'avions prévu qu'une seule munition. Après plusieurs tests, nous avons décidé d'en ajouter une seconde afin de diversifier les options et d'offrir une plus grande profondeur de jeu et un meilleur contrôle.</p>
      <p>Pour cette seconde munition, nous nous sommes inspirés du pistolet à silex de Fortnite. Le pistolet est l'arme principale de tous les joueurs. Ainsi, lorsque vous mourez, vous réapparaissez avec le pistolet, et lorsque les munitions d'une autre arme sont épuisées, vous récupérez automatiquement le pistolet.</p>

      <img src="./gif/Shot pistol.gif" alt="Tir du pistolet" style="width:100%; border-radius:10px; margin:20px 0;">

      <h3>⚖️ Équilibrage</h3>
      <br>
      <p>Au cours de nombreux tests et essais pour équilibrer les armes, nous avons trouvé un équilibre qui a satisfait toute l'équipe, et après avoir vu un test avec les dernières modifications, la plupart des retours ont été positifs.</p>

      <h3>🔫 Pistolet</h3>
      <br>
      <p>L'équilibrage du pistolet a représenté un véritable défi : il fallait veiller à ce qu'il ne soit ni trop puissant ni totalement inefficace, étant donné qu'il s'agit de l'arme de base des joueurs. Au début des tests, l'arme manquait cruellement de puissance, la rendant pratiquement inutilisable. Cependant, grâce à de nombreux tests et essais en situation de jeu, nous avons pu trouver un bon compromis entre efficacité et inutilité, permettant ainsi aux joueurs de combattre uniquement avec le pistolet.</p>

      <img src="./gif/Balance pistol.gif" alt="Équilibrage du pistolet" style="width:100%; border-radius:10px; margin:20px 0;">

      <p style="margin-top:25px; text-align:center;">
        <a href="https://www.therookies.co/projects/83829" target="_blank" 
          style="color: inherit; text-decoration: underline; text-underline-offset: 4px; font-weight: 500;">
          Voir le projet complet sur The Rookies
        </a>
      </p>

    `
        },
        en: {
            title: "Out of Bound",
            tags: ["Student Project", "Game Design", "Weapons", "Balancing", "Unreal Engine 5"],
            desc: `
      <p><strong>Here’s an example of my work on Out of Bounds</strong>. I worked on all the weapons, but here I’ll show you the pistol. If you want to see more, scroll down to find a link to my The Rookies page.</p>

      <h3>🛠️ Weapon Design</h3>
      <br>
      <p>During the weapon design phase, we initially had only one type of shot, but after several tests, we decided to add a second one to bring more variety, depth of gameplay, and better control.</p>

      <h3>🔫 Pistol</h3>
      <br>
      <p>When designing this weapon, we initially planned only one type of ammo. After several tests, we decided to add a second type to diversify the gameplay and offer more depth and control.</p>
      <p>For this secondary ammo type, we were inspired by Fortnite’s flintlock pistol. The pistol is the main weapon for all players — when you die, you respawn with it, and when another weapon runs out of ammo, you automatically switch back to the pistol.</p>

      <img src="./gif/Shot pistol.gif" alt="Pistol shot" style="width:100%; border-radius:10px; margin:20px 0;">

      <h3>⚖️ Balancing</h3>
      <br>
      <p>Through many playtests and adjustments, we found a balance that satisfied the entire team. After seeing a final test with the latest tweaks, most of the feedback was positive.</p>

      <h3>🔫 Pistol</h3>
      <br>
      <p>Balancing the pistol was quite a challenge: it had to be neither too powerful nor completely useless, since it’s the players’ base weapon. Early tests showed the pistol was too weak, making it nearly unusable. However, after multiple playtests, we found a good compromise that allowed players to fight effectively even with just the pistol.</p>

      <img src="./gif/Balance pistol.gif" alt="Pistol balancing" style="width:100%; border-radius:10px; margin:20px 0;">

      <p style="margin-top:25px; text-align:center;">
        <a href="https://www.therookies.co/projects/83829" target="_blank" 
          style="color: inherit; text-decoration: underline; text-underline-offset: 4px; font-weight: 500;">
          Voir le projet complet sur The Rookies
        </a>
      </p>
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
      et du suivi de l’avancement des tâches pour garantir la qualité du jeu en développement.</p>

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
      and ensuring steady task progression to maintain the quality of the ongoing game project.</p>

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
<p><strong>🎯 Objectif professionnel :</strong> Devenir <strong>Game Designer</strong> chez Ubisoft, avec une spécialisation en <strong>QA Testing</strong> et une approche polyvalente du développement de jeux vidéo.</p>

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
  <li><strong>Unreal Engine</strong> (Intermédiaire) — Connaissance du moteur, intégration et asset management</li>
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
<p><strong>🎯 Career Goal:</strong> To become a <strong>Game Designer</strong> at Ubisoft, specializing in <strong>Quality Assurance (QA)</strong> while remaining versatile across all aspects of game development.</p>

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
  <li><strong>Unreal Engine</strong> (Intermediate) — Engine knowledge, integration, and asset management</li>
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
// ✅ Curseur désactivé sur mobile / tablette
if (window.innerWidth > 1024) {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // tu peux aussi garder ici tes effets hover ou clic
}


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

// --- Zoom intégré (local) dans la modale ---
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



