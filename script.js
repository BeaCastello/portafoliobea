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
    button.textContent = 'Mostrar más';
  } else {
    contentContainer.style.display = 'flex';
    button.textContent = 'Mostrar menos';
  }
}



const experiencias = [
  {
    titulo: "Desarrollo web y plataformas educativas",
    imagenes: [
      "imagenes/paginaweb.png",
      "imagenes/paginaweb1.png",
      "imagenes/paginaweb2.png"
    ],
    descripcion: "Creación de páginas web para la publicidad de servicios y plataformas educativas."
  },
  {
    titulo: "Profesora",
    imagenes: [
      "imagenes/academia.png",
      "imagenes/academia.png"
    ],
    descripcion: "Planificación e impartición de clases adaptadas al nivel educativo y a las necesidades del estudiante."
  },
  {
    titulo: "Auxiliar administrativo",
    imagenes: [
      "imagenes/paginaweb.png",
      "imagenes/paginaweb.png",
      "imagenes/paginaweb.png"
    ],
    descripcion: "Apoyo en tareas administrativas, gestión de documentación y atención al cliente."
  },
  {
    titulo: "Comercial de ventas",
    imagenes: [
      "imagenes/paginaweb.png"
    ],
    descripcion: "Encargado de la promoción, captación de clientes y cierre de ventas de productos y servicios."
  }
];

function mostrarExperiencia(index) {
  const exp = experiencias[index];
  const container = document.getElementById("expContent");
  container.innerHTML = `
    <h2>${exp.titulo}</h2>
    <div class="image-row">
      ${exp.imagenes.map(src => `<img src="${src}" alt="${exp.titulo}">`).join("")}
    </div>
    <p class="description">${exp.descripcion}</p>
  `;

  const items = document.querySelectorAll("#rolList li");
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}

// Mostrar primero por defecto
window.onload = () => mostrarExperiencia(0);
