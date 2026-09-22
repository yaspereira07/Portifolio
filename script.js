// TRADUÇÕES
const traducoes = {
    pt: {
        navInicio: "Início", navSobre: "Sobre", navProjetos: "Projetos", navContato: "Contato",
        heroSaudacao: "Olá, eu sou",
        heroDesc: "Estudante de Engenharia de Software & Apaixonada por Tecnologias.",
        heroBtn: "SAIBA MAIS",
        sobreTitle: "Sobre Mim",
        card1Title: "Quem Sou", card1Desc: "Sou uma estudante de Engenharia de Software, interessada em CiberSegurança, Desenvolvimento e inovação. Sou curiosa, proativa e estou sempre buscando aprimorar meus conhecimentos e experiências.",
        card2Title: "O Que Me Motiva", card2Desc: "Gosto de desafios que me fazem pensar e aprender algo novo. Ver uma ideia ganhar forma e se transformar em algo funcional é uma das coisas que mais me motiva. Gosto de aprender novas tecnologias, enfrentar desafios e evoluir com eles.",
        card3Title: "Como Trabalho", card3Desc: "Busco trabalhar de forma organizada, colaborativa e focada em resultados. Gosto de compreender cada desafio antes de ir para a prática, explorar diferentes soluções e aí sim aplicar meus conhecimentos de forma prática.",
        projTitle: "Meus Projetos", 
        btnSaiba: "Saiba Mais", 
        btnAcessar: "Acessar Projeto",
        btnCodigo: "Ver Código",
        contatoTitle: "Vamos Conversar?", formNome: "Nome:", formMsg: "Mensagem:", formBtn: "ENVIAR MENSAGEM",
        
        projNexusTitle: "NEXUS — Plataforma para Colaboração entre Desenvolvedores",
        projNexusDesc: "Plataforma Web3 focada em conectar desenvolvedores a projetos e colaboradores, utilizando a blockchain Solana para registrar colaborações.",
        projCtTitle: "CONNECTTRUCK — Plataforma de Transporte de Cargas",
        projCtDesc: "Plataforma para conectar clientes, motoristas e entregadores freelancers, facilitando a contratação e o gerenciamento de serviços de transporte.",
        projEduTitle: "EDUCOINS — Sistema de Gamificação Acadêmica",
        projEduDesc: "Proposta de sistema de gamificação voltado à rotina acadêmica utilizando a moeda virtual EduCoin para incentivar o engajamento dos estudantes.",

        modNexusSub: "Projeto acadêmico | Figma · Web3",
        modNexusDesc: "Desenvolvimento, em equipe, de uma proposta de plataforma para conectar desenvolvedores a projetos e colaboradores, buscando facilitar a formação de equipes e formalizar a participação de cada integrante. A solução utiliza a Solana como proposta para registrar termos de colaboração.",
        modNexusList: "<li>Criação das interfaces e protótipo no Figma.</li><li>Estruturação dos fluxos e funcionalidades da plataforma.</li><li>Desenvolvimento da proposta de produto e experiência do usuário.</li><li>Criação de um site demonstrativo para apresentação do projeto.</li>",
        
        modCtSub: "Projeto acadêmico | Desenvolvimento Front-end",
        modCtDesc: "Desenvolvimento, em equipe, de uma plataforma para conectar clientes, motoristas e entregadores freelancers, facilitando a contratação e o gerenciamento de serviços de transporte de cargas.",
        modCtList: "<li>Desenvolvimento das interfaces utilizando HTML, CSS e JavaScript.</li><li>Criação e prototipação das interfaces no Figma.</li><li>Implementação do front-end da aplicação.</li><li>Participação no desenvolvimento colaborativo utilizando GitHub.</li><li>Aplicação da metodologia ágil Scrum durante o desenvolvimento.</li>",
        
        modEduSub: "Projeto acadêmico | Figma",
        modEduDesc: "Desenvolvimento, em equipe, de uma proposta de sistema de gamificação voltado à rotina acadêmica. O projeto utiliza uma moeda virtual, EduCoin, para incentivar participação, desempenho e envolvimento dos estudantes por meio de recompensas.",
        modEduList: "<li>Criação das interfaces e protótipo no Figma.</li><li>Desenvolvimento da proposta de experiência e fluxo de navegação.</li><li>Elaboração de relatórios e documentação do projeto.</li><li>Definição das funcionalidades e regras da solução.</li>"
    },
    en: {
        navInicio: "Home", navSobre: "About", navProjetos: "Projects", navContato: "Contact",
        heroSaudacao: "Hello, I am", 
        heroDesc: "Software Engineering Student & Technology Enthusiast.",
        heroBtn: "LEARN MORE",
        sobreTitle: "About Me",
        card1Title: "Who I Am", card1Desc: "I am a Software Engineering student, interested in Cybersecurity, Development, and innovation. I am curious, proactive, and always looking to improve my knowledge and experiences.",
        card2Title: "What Motivates Me", card2Desc: "I like challenges that make me think and learn something new. Seeing an idea take shape and turn into something functional is one of the things that motivates me the most. I enjoy learning new technologies, facing challenges, and evolving with them.",
        card3Title: "How I Work", card3Desc: "I seek to work in an organized, collaborative, and results-focused way. I like to understand each challenge before moving to practice, explore different solutions, and only then apply my knowledge practically.",
        projTitle: "My Projects", 
        btnSaiba: "Learn More", 
        btnAcessar: "View Project",
        btnCodigo: "View Code",
        contatoTitle: "Let's Talk?", formNome: "Name:", formMsg: "Message:", formBtn: "SEND MESSAGE",

        projNexusTitle: "NEXUS — Developer Collaboration Platform",
        projNexusDesc: "Web3 platform focused on connecting developers to projects and collaborators, using the Solana blockchain to register collaborations.",
        projCtTitle: "CONNECTTRUCK — Freight Transport Platform",
        projCtDesc: "Platform to connect clients, drivers, and freelance delivery people, facilitating the contracting and management of transport services.",
        projEduTitle: "EDUCOINS — Academic Gamification System",
        projEduDesc: "Gamification system proposal aimed at the academic routine using the virtual currency EduCoin to encourage student engagement.",

        modNexusSub: "Academic project | Figma · Web3",
        modNexusDesc: "Team development of a platform proposal to connect developers to projects and collaborators, aiming to facilitate team formation and formalize the participation of each member. The solution uses Solana to register collaboration terms.",
        modNexusList: "<li>Creation of interfaces and prototype in Figma.</li><li>Structuring of platform flows and features.</li><li>Development of the product proposal and user experience.</li><li>Creation of a demo site for presentation.</li>",
        
        modCtSub: "Academic project | Front-end Development",
        modCtDesc: "Team development of a platform to connect clients, drivers, and freelance delivery people, facilitating the contracting and management of freight transport services.",
        modCtList: "<li>Interface development using HTML, CSS, and JavaScript.</li><li>Creation and prototyping of interfaces in Figma.</li><li>Application front-end implementation.</li><li>Participation in collaborative development using GitHub.</li><li>Application of Scrum agile methodology during development.</li>",

        modEduSub: "Academic project | Figma",
        modEduDesc: "Team development of a gamification system proposal aimed at the academic routine. The project uses a virtual currency, EduCoin, to encourage student participation, performance, and involvement through rewards.",
        modEduList: "<li>Creation of interfaces and prototype in Figma.</li><li>Development of the experience proposal and navigation flow.</li><li>Preparation of reports and project documentation.</li><li>Definition of features and rules of the solution.</li>"
    },
    es: {
        navInicio: "Inicio", navSobre: "Sobre Mí", navProjetos: "Proyectos", navContato: "Contacto",
        heroSaudacao: "Hola, soy",
        heroDesc: "Estudiante de Ingeniería de Software y Apasionada por las Tecnologías.",
        heroBtn: "SABER MÁS",
        sobreTitle: "Sobre Mí",
        card1Title: "Quién Soy", card1Desc: "Soy estudiante de Ingeniería de Software, interesada en Ciberseguridad, Desarrollo e innovación. Soy curiosa, proactiva y siempre busco mejorar mis conocimientos y experiencias.",
        card2Title: "Lo Que Me Motiva", card2Desc: "Me gustan los desafíos que me hacen pensar y aprender algo nuevo. Ver una idea tomar forma y convertirse en algo funcional es una de las cosas que más me motiva. Me gusta aprender nuevas tecnologías, enfrentar desafíos y evolucionar con ellos.",
        card3Title: "Cómo Trabajo", card3Desc: "Busco trabajar de manera organizada, colaborativa y enfocada en resultados. Me gusta comprender cada desafío antes de pasar a la práctica, explorar diferentes soluciones y solo entonces aplicar mis conocimientos de manera práctica.",
        projTitle: "Mis Proyectos", 
        btnSaiba: "Saber Más", 
        btnAcessar: "Ver Proyecto",
        btnCodigo: "Ver Código",
        contatoTitle: "¿Hablamos?", formNome: "Nombre:", formMsg: "Mensaje:", formBtn: "ENVIAR MENSAJE",

        projNexusTitle: "NEXUS — Plataforma de Colaboración de Desarrolladores",
        projNexusDesc: "Plataforma Web3 enfocada en conectar desarrolladores con proyectos y colaboradores, utilizando la blockchain de Solana.",
        projCtTitle: "CONNECTTRUCK — Plataforma de Transporte de Carga",
        projCtDesc: "Plataforma para conectar clientes, conductores y repartidores freelance, facilitando la contratación y gestión de servicios de transporte.",
        projEduTitle: "EDUCOINS — Sistema de Gamificación Académica",
        projEduDesc: "Propuesta de sistema de gamificación para la rutina académica utilizando la moneda virtual EduCoin para incentivar el compromiso estudiantil.",

        modNexusSub: "Proyecto académico | Figma · Web3",
        modNexusDesc: "Desarrollo en equipo de una propuesta de plataforma para conectar desarrolladores con proyectos y colaboradores, buscando facilitar la formación de equipos. La solución utiliza Solana para registrar términos de colaboración.",
        modNexusList: "<li>Creación de interfaces y prototipo en Figma.</li><li>Estructuración de flujos y funcionalidades de la plataforma.</li><li>Desarrollo de la propuesta de producto y UX.</li><li>Creación de un sitio demostrativo para presentación.</li>",
        
        modCtSub: "Proyecto académico | Desarrollo Front-end",
        modCtDesc: "Desarrollo en equipo de una plataforma para conectar clientes, conductores y repartidores freelance, facilitando la contratación y gestión de servicios de transporte de carga.",
        modCtList: "<li>Desarrollo de interfaces utilizando HTML, CSS y JavaScript.</li><li>Creación y prototipado en Figma.</li><li>Implementación del front-end.</li><li>Desarrollo colaborativo usando GitHub.</li><li>Metodología ágil Scrum durante el desarrollo.</li>",
        
        modEduSub: "Proyecto académico | Figma",
        modEduDesc: "Desarrollo en equipo de una propuesta de sistema de gamificación para la rutina académica. El proyecto utiliza una moneda virtual, EduCoin, para fomentar la participación y el rendimiento a través de recompensas.",
        modEduList: "<li>Creación de interfaces y prototipo en Figma.</li><li>Desarrollo de la propuesta de experiencia y flujo de navegación.</li><li>Elaboración de informes y documentación.</li><li>Definición de funcionalidades y reglas.</li>"
    }
};

function mudarIdioma(lang) {
    document.getElementById("current-lang").innerText = lang.toUpperCase();
    const t = traducoes[lang];
    
    // Header e Hero
    document.querySelector('.lang-nav-inicio').innerText = t.navInicio;
    document.querySelector('.lang-nav-sobre').innerText = t.navSobre;
    document.querySelector('.lang-nav-projetos').innerText = t.navProjetos;
    document.querySelector('.lang-nav-contato').innerText = t.navContato;
    document.querySelector('.lang-hero-saudacao').innerText = t.heroSaudacao;
    document.querySelector('.lang-hero-desc').innerText = t.heroDesc;
    document.querySelector('.lang-hero-btn').innerText = t.heroBtn;
    
    // Sobre Mim
    document.querySelector('.lang-sobre-title').innerText = t.sobreTitle;
    document.querySelector('.lang-card1-title').innerText = t.card1Title;
    document.querySelector('.lang-card1-desc').innerText = t.card1Desc;
    document.querySelector('.lang-card2-title').innerText = t.card2Title;
    document.querySelector('.lang-card2-desc').innerText = t.card2Desc;
    document.querySelector('.lang-card3-title').innerText = t.card3Title;
    document.querySelector('.lang-card3-desc').innerText = t.card3Desc;
    
    // Cards do Projetos
    document.querySelector('.lang-proj-title').innerText = t.projTitle;
    document.querySelector('.lang-proj-nexus-title').innerText = t.projNexusTitle;
    document.querySelector('.lang-proj-nexus-desc').innerText = t.projNexusDesc;
    document.querySelector('.lang-proj-ct-title').innerText = t.projCtTitle;
    document.querySelector('.lang-proj-ct-desc').innerText = t.projCtDesc;
    document.querySelector('.lang-proj-edu-title').innerText = t.projEduTitle;
    document.querySelector('.lang-proj-edu-desc').innerText = t.projEduDesc;
    
    // Projetos Modais 
    document.querySelector('.lang-mod-nexus-sub').innerHTML = `<strong>${t.modNexusSub}</strong>`;
    document.querySelector('.lang-mod-nexus-desc').innerText = t.modNexusDesc;
    document.querySelector('.lang-mod-nexus-list').innerHTML = t.modNexusList;
    
    document.querySelector('.lang-mod-ct-sub').innerHTML = `<strong>${t.modCtSub}</strong>`;
    document.querySelector('.lang-mod-ct-desc').innerText = t.modCtDesc;
    document.querySelector('.lang-mod-ct-list').innerHTML = t.modCtList;
    
    document.querySelector('.lang-mod-edu-sub').innerHTML = `<strong>${t.modEduSub}</strong>`;
    document.querySelector('.lang-mod-edu-desc').innerText = t.modEduDesc;
    document.querySelector('.lang-mod-edu-list').innerHTML = t.modEduList;

    // Contato e Botoes Repetidos
    document.querySelector('.lang-contato-title').innerText = t.contatoTitle;
    document.querySelector('.lang-form-nome').innerText = t.formNome;
    document.querySelector('.lang-form-msg').innerText = t.formMsg;
    document.querySelector('.lang-form-btn').innerText = t.formBtn;
    
    document.querySelectorAll('.lang-btn-saiba').forEach(btn => btn.innerText = t.btnSaiba);
    document.querySelectorAll('.lang-btn-acessar').forEach(btn => btn.innerText = t.btnAcessar);
    document.querySelectorAll('.lang-btn-codigo').forEach(btn => btn.innerText = t.btnCodigo);

    // Validação do formulário para atualizar o texto do aviso se ele estiver visível
    const eventoDeInput = new Event('input');
    document.getElementById('mensagem').dispatchEvent(eventoDeInput);
}

// Validação dos 50 carateses
const textareaMensagem = document.getElementById('mensagem');
const msgWarning = document.getElementById('msg-warning');

textareaMensagem.addEventListener('input', function() {
    const minCaracteres = 50;
    const digitados = this.value.length;
    const currentLang = document.getElementById("current-lang").innerText.toLowerCase();

    if (digitados > 0 && digitados < minCaracteres) {
        let faltam = minCaracteres - digitados;
        
        if(currentLang === 'pt') {
            msgWarning.innerText = `A mensagem deve ter pelo menos 50 caracteres (faltam ${faltam}).`;
        } else if (currentLang === 'en') {
            msgWarning.innerText = `Message must be at least 50 characters (${faltam} left).`;
        } else if (currentLang === 'es') {
            msgWarning.innerText = `El mensaje debe tener al menos 50 caracteres (faltan ${faltam}).`;
        }

        msgWarning.style.display = 'block';
    } else {
        msgWarning.style.display = 'none';
    }
});

// estrelas do fundo
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let starsArray = [];

class Star {
    constructor(x, y, size, speedY, opacity, colorType) {
        this.x = x; this.y = y; this.size = size;
        this.speedY = speedY; this.opacity = opacity;
        this.color = colorType > 0.8 ? `rgba(189, 147, 249, ${this.opacity})` : `rgba(255, 255, 255, ${this.opacity})`;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8; ctx.shadowColor = this.color;
        ctx.fill();
    }
    update() {
        this.y -= this.speedY;
        if (this.y < 0) { this.y = canvas.height; this.x = Math.random() * canvas.width; }
        this.draw();
    }
}

function init() {
    starsArray = [];
    let numberOfStars = (canvas.height * canvas.width) / 5000;
    for (let i = 0; i < numberOfStars; i++) {
        starsArray.push(new Star(
            Math.random() * canvas.width, Math.random() * canvas.height,
            Math.random() * 1.5 + 0.5, Math.random() * 0.4 + 0.1,
            Math.random() * 0.8 + 0.2, Math.random()
        ));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    starsArray.forEach(star => star.update());
}

window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); });
init(); animate();

// animação do modal
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

faders.forEach(fader => appearOnScroll.observe(fader));

function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none'; document.body.style.overflow = 'auto';
    }
});