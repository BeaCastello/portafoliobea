document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('menu-hamburguesa');
});
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
const langLabel = document.getElementById("lang-label");
const elements = document.querySelectorAll("[data-i18n]");

const flagMap = {
  es: "https://flagcdn.com/es.svg",
  en: "https://flagcdn.com/gb.svg",
};

const translations = {
  es: {
    home: "Inicio",
    aboutme: "Sobre mi",
    training: "Formación",
    skills: "Habilidades",
    contact: "Contacto",
    banner_title: "Portafolio Bea",
    banner_subtitle: "Profesional creativa con pasión por la programación y el diseño gráfico",
    banner_btn: "Formación",
    banner_btn1: "Contáctame",
    work_experience: "Experiencia Laboral",
    contact: "Contacto",
   





    footer_text: "Todos los derechos reservados.",
    name_placeholder: "Tu nombre",
    email_placeholder: "Tu email",
    message_placeholder: "Tu mensaje",
    send_button: "Enviar",
  },
  en: {
    home: "Home",
    aboutme: "About me",
    training: "Training",
    skills: "Skills",
    contact: "Contact",
    banner_title: "Bea Portfolio",
    banner_subtitle: "Creative professional with a passion for programming and graphic design",
    banner_btn: "Training",
    banner_btn1: "Contact Me",
    work_experience: "Work Experience",
    contact: "Contact",
   





    footer_text: "All rights reserved.",
    name_placeholder: "Your name",
    email_placeholder: "Your email",
    message_placeholder: "Your message",
    send_button: "Send",
  },
};

let currentLang = "es";

// Toggle menu
langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("show");
});

// Select language
langMenu.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    const selectedLang = li.dataset.lang;
    if (selectedLang !== currentLang) {
      currentLang = selectedLang;
      langLabel.textContent = currentLang.toUpperCase();
      langBtn.querySelector("img").src = flagMap[currentLang];
      updateTexts();
    }
    langMenu.classList.remove("show");
  });
});

// Update visible texts
function updateTexts() {
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = translations[currentLang][key];
    } else {
      el.textContent = translations[currentLang][key];
    }
  });
}

// Menú móvil
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});


window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});


function toggleContent() {
  const contentContainer = document.getElementById('content-container');
  const button = document.querySelector('.show_more');

  if (contentContainer.style.display === 'flex') {
      contentContainer.style.display = 'none';
      button.textContent ='Mostrar más';
  } else {
      contentContainer.style.display = 'flex';
      button.textContent = 'Mostrar menos';
  }
}

const experiencias = [
  {
    titulo: "Desarrollador Frontend - PixelSoft",
    imagen: "https://via.placeholder.com/300x200?text=PixelSoft",
    texto: "Encargado del desarrollo y mantenimiento de interfaces modernas usando React, Tailwind y herramientas de diseño responsivo. Colaboración estrecha con equipos de backend y diseño."
  },
  {
    titulo: "Diseñador UX - Creativo Studio",
    imagen: "https://via.placeholder.com/300x200?text=Creativo+Studio",
    texto: "Responsable de investigar y crear prototipos centrados en el usuario, mejorando la experiencia digital en más de 10 productos web y móviles."
  },
  {
    titulo: "Analista QA - TechTesters",
    imagen: "https://via.placeholder.com/300x200?text=TechTesters",
    texto: "Planificación y ejecución de pruebas automatizadas/manuales. Optimización de procesos de control de calidad y entrega continua."
  }
];

function mostrarExperiencia(index) {
  const content = document.getElementById('expContent');
  const selected = experiencias[index];
  content.innerHTML = `
    <h3>${selected.titulo}</h3>
    <img src="${selected.imagen}" alt="${selected.titulo}">
    <p>${selected.texto}</p>
  `;

  const listItems = document.querySelectorAll('#expList li');
  listItems.forEach(li => li.classList.remove('active'));
  listItems[index].classList.add('active');
}