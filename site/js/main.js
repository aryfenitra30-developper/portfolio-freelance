document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling pour la navigation
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optionnel: Animation des cartes au survol pour un effet moderne
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1.0)';
        });
    });
});

document.addEventListener('click', function(event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Si le menu est ouvert et que le clic n'est pas sur le bouton ou le menu
    if (
        navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        // On le ferme
        navbarToggler.click();
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const formMessage = document.getElementById('form-message');

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        formMessage.innerHTML = '<span class="text-success fw-bold">Merci ! Votre message a été envoyé.</span>';
        form.reset();
        setTimeout(() => { formMessage.innerHTML = ''; }, 5000);
    })
    .catch(error => {
        formMessage.innerHTML = '<span class="text-danger fw-bold">Erreur lors de l\'envoi.</span>';
        console.error(error);
    });
});


// ---------- INIT AOS ----------
AOS.init({ duration: 800, once: true });

// ---------- HEADER TYPING EFFECT ----------
new Typed('#typed', {
    strings: ["MIARINTSOA Ary Fenitra", "Développeur Multi-plateformes", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// ---------- EXPÉRIENCES DYNAMIQUES ----------
const experiences = [
    {
        title: "Opérateur en programmation informatique",
        company: "RAPIDE SERVICE",
        date: "10/2024 – présent",
        location: "Madagascar, Antanimena",
        tasks: [
            "Gestion de projets et développement de solutions informatiques sur mesure.",
            "Conception et maintenance d’applications et APIs, intégration cloud et VPS.",
            "Administration et sécurisation des bases de données."
        ]
    },
    {
        title: "Développement des applications pour la gestion de la vente de billets",
        company: "PROJET PERSONNEL",
        date: "05/2023 – 08/2023",
        location: "Ampangabe, Antananarivo",
        tasks: [
            "Développement d’applications et projets personnels.",
            "Création d’interfaces utilisateurs et intégration d’APIs."
        ]
    },
    {
        title: "Stagiaire en informatique",
        company: "TIKO",
        date: "08/2023 – 12/2023",
        location: "Tanjombato, Antananarivo",
        tasks: [
            "Développement d’outils numériques pour la campagne présidentielle 2023.",
            "Assistance technique aux équipes terrain."
        ]
    },
    {
        title: "Concours au développement d'application web, mobile",
        company: "HACKATON 2021",
        date: "08/2021",
        location: "Antananarivo",
        tasks: [
            "Collaboration au développement d’applications web et mobiles.",
            "Transformation de maquettes en applications fonctionnelles."
        ]
    },
    {
        title: "Opérateur en ligne",
        company: "VIVETIC",
        date: "12/2020 – 06/2021",
        location: "Antananarivo",
        tasks: [
            "Gestion des articles en ligne : collecte, tri et classement pour traitement des commandes.",
            "Réalisation et optimisation d’images 3D pour valoriser les produits digitaux."
        ]
    }
];

const expContainer = document.getElementById("experience-container");
experiences.forEach(exp => {
    const card = document.createElement("div");
    card.className = "col-lg-12 mb-4";
    card.innerHTML = `
        <div class="card h-100 shadow-sm border-0" data-aos="fade-up">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="card-title mb-0">${exp.title}</h4>
                    <span class="badge bg-secondary text-white">${exp.date}</span>
                </div>
                <h6 class="text-muted card-subtitle mb-2">${exp.company}, ${exp.location}</h6>
                <ul class="list-unstyled mt-3">
                    ${exp.tasks.map(task => `<li><i class="fas fa-check-circle text-success me-2"></i>${task}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
    expContainer.appendChild(card);
});

// ---------- Projets DYNAMIQUES ----------
const projets = [
    {
        title: "Stagiaire en informatique",
        company: "TIKO",
        date: "08/2023 – 12/2023",
        location: "Tanjombato, Antananarivo",
        tasks: [
            "Développement d’outils numériques pour la campagne présidentielle 2023.",
            "Assistance technique aux équipes terrain.",
            "Collecte et traitement de données en ligne, traitement d’images 3D."
        ]
    },
    {
        title: "Concours au développement d'application web, mobile",
        company: "HACKATON 2021",
        date: "08/2021",
        location: "Antananarivo",
        tasks: [
            "Collaboration au développement d’applications web et mobiles.",
            "Transformation de maquettes en applications fonctionnelles."
        ]
    }
];

// const projContainer = document.getElementById("projects-container");
// projets.forEach(proj => {
//     const card = document.createElement("div");
//     card.className = "col-lg-12 mb-4";
//     card.innerHTML = `
//         <div class="card h-100 shadow-sm border-0" data-aos="fade-up">
//             <div class="card-body">
//                 <div class="d-flex justify-content-between align-items-center mb-2">
//                     <h4 class="card-title mb-0">${proj.title}</h4>
//                     <span class="badge bg-secondary text-white">${proj.date}</span>
//                 </div>
//                 <h6 class="text-muted card-subtitle mb-2">${proj.company}, ${proj.location}</h6>
//                 <ul class="list-unstyled mt-3">
//                     ${proj.tasks.map(task => `<li><i class="fas fa-check-circle text-success me-2"></i>${task}</li>`).join("")}
//                 </ul>
//             </div>
//         </div>
//     `;
//     projContainer.appendChild(card);
// });

// ---------- Formation DYNAMIQUE ----------
const formations = [
    {
        title: "Licence III, Informatique de Gestion",
        school: "UNIVERSITE GSI MADAGASCAR",
        date: "05/2023"
    },
    {
        title: "Baccalauréat",
        school: "Lycée NELSON MANDELA, Ampangabe",
        date: "07/2017"
    }
];

const educationContainer = document.getElementById("education-container"); // div à créer dans HTML

formations.forEach(edu => {
    const card = document.createElement("div");
    card.className = "col-lg-6 mb-4";
    card.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
                <h4 class="card-title">${edu.title}</h4>
                <p class="card-text text-muted mb-1">${edu.school}</p>
                <span class="badge bg-info text-dark">${edu.date}</span>
            </div>
        </div>
    `;
    educationContainer.appendChild(card);
});


// ---------- Compétences DYNAMIQUES ----------
const competences = [
    {
        category: "Langages & Frameworks",
        icon: "fas fa-code",
        items: [
            "JavaScript / TypeScript: Node.js, Express.js, React Native",
            "Flutter-Dart: Dio, Http",
            "Python: PySide6, Flask (API RESTful)",
            "PHP: Laravel, CodeIgniter"
        ]
    },
    {
        category: "Bases de données & APIs",
        icon: "fas fa-database",
        items: [
            "Bases de données: SQLite, PostgreSQL, MySQL",
            "APIs & Web Services: RESTful, JSON, Auth JWT, WebSocket"
        ]
    },
    {
        category: "Design & Interfaces",
        icon: "fas fa-palette",
        items: [
            "HTML5, CSS3, Bootstrap, React, Tailwind, FlutterFlow, Figma, QT Designer"
        ]
    },
    {
        category: "Déploiement & Outils",
        icon: "fas fa-server",
        items: [
            "Plateformes: Windows, Linux, Android, Web",
            "Déploiement & Infrastructure: Docker / Docker Compose, VPS, Ngrok",
            "CI/CD: GitHub Actions, GitLab CI",
            "Versioning: Git",
            "Protocoles & Accès: SSH, RDP, FTP, VPN, HTTPS, UDP, SMTP"
        ]
    },
    {
        category: "Outils & Pratiques supplémentaires",
        icon: "fas fa-tools",
        items: [
            "Tests & Qualité: unitaires & E2E (flutter_test, integration_test, Firebase Test Lab), fiabilité 99,5%",
            "Notifications: push temps réel et multi-canaux (firebase_messaging, flutter_local_notifications)",
            "Réseau & API: requêtes HTTP sécurisées (dio, http), JSON objets (json_serializable, freezed), JWT + TLS + pinning",
            "Offline-first & Background: stockage local (sqflite, drift, hive), tâches en arrière-plan (workmanager, background_fetch)",
            "Sécurité & intégrité: secrets sécurisés (flutter_secure_storage), Bcrypt"
        ]
    },
    {
        category: "Langues",
        icon: "fas fa-globe-americas",
        items: [
            "Malgache: Langue maternelle",
            "Français: Niveau intermédiaire",
            "Anglais: Débutant"
        ]
    }
];

const skillsContainer = document.getElementById("skills-container"); // div à créer dans HTML

competences.forEach(skill => {
    const card = document.createElement("div");
    card.className = "col-md-6 mb-4"; // ou col-md-12 si tu veux toute la largeur
    card.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
                <h5 class="card-title"><i class="${skill.icon} me-2"></i>${skill.category}</h5>
                <ul class="list-unstyled mt-3">
                    ${skill.items.map(item => `<li><i class="fas fa-check-circle text-success me-2"></i>${item}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
    skillsContainer.appendChild(card);
});


// ---------- SMOOTH SCROLL & NAV ACTIVE ----------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 70) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});