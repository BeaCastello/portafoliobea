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
      "imagenes/paginaweb3.png",
      "imagenes/paginaweb1.png",
      "imagenes/paginaweb2.png"
    ],
    links: [
      "https://beacastello.github.io/proyectoLaura/",
      "https://beacastello.github.io/digitalHive/",
      "https://beacastello.github.io/portafoliobea/"
    ],
    descripcion: "Creación de páginas web para la publicidad de servicios.",
  },
  {
    titulo: "Profesora",
    imagenes: [
      "imagenes/academia.png",
      "imagenes/videoCurso.mp4"
    ],
    links: [
      "https://beacastello.github.io/digitalHive/"
    ],
    descripcion: "Diseño e implementación de clases personalizadas según el nivel educativo y las necesidades específicas de cada estudiante.",
  },
  {
    titulo: "Auxiliar administrativo",
    imagenes: [
      "imagenes/Academia2.jpg",
      "imagenes/imgNoa´s.png",
      "imagenes/imgAA.png"
    ],
    descripcion: "Apoyo en tareas administrativas, gestión de documentación y atención al cliente.",
  },
  {
    titulo: "Comercial de ventas",
    imagenes: [
      "imagenes/comercial1.png",
      "imagenes/comercial3.png"
    ],
    descripcion: "Encargado de la promoción, captación de clientes y cierre de ventas de productos y servicios.",
  }
];

function mostrarExperiencia(index) {
  const exp = experiencias[index];
  const container = document.getElementById("expContent");

  const mediaHTML = exp.imagenes.map((src, i) => {
    const link = exp.links && exp.links[i] ? exp.links[i] : null;
    let mediaElement = "";

    if (src.endsWith(".mp4")) {
      mediaElement = `
        <video class="exp-video" controls>
          <source src="${src}" type="video/mp4">
        </video>`;
    } else {
      mediaElement = `<img class="exp-media" src="${src}" alt="${exp.titulo}">`;
    }

    const linkHTML = link ? `<div><a href="${link}" target="_blank">Ver sitio relacionado</a></div>` : "";

    return `<div class="media-item">${mediaElement}${linkHTML}</div>`;
  }).join("");

  container.innerHTML = `
    <h2 class="exp-titulo">${exp.titulo}</h2>
    <div class="image-row">${mediaHTML}</div>
    <p class="description">${exp.descripcion}</p>
  `;

  const items = document.querySelectorAll("#expList li");
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}

window.onload = () => mostrarExperiencia(0);
const habilidades = [
  { nombre: "HTML5", icono: "🌐" },
  { nombre: "CSS3", icono: "🎨" },
  { nombre: "JavaScript", icono: "💻" },
  { nombre: "React", icono: "⚛️" },
  { nombre: "Creación Web", icono: "🧩" },
  { nombre: "Base de Datos", icono: "🗄️" },
  { nombre: "Creatividad", icono: "🎯" },
  { nombre: "Microsoft Office", icono: "📊" },  
  { nombre: "Gestión de Redes Sociales", icono: "📱" },
  { nombre: "Trabajo en equipo", icono: "🤝" },
  { nombre: "Resolución de problemas", icono: "🧠" },
  { nombre: "Comunicación", icono: "🗣️" }, 
];

const container = document.getElementById("skillsContainer");

habilidades.forEach(habilidad => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <div class="skill-icon">${habilidad.icono}</div>
    <div class="skill-name">${habilidad.nombre}</div>
  `;
  container.appendChild(card);
});

// Enlace con emailjs

(function () {
  emailjs.init("Oyh2uTXc5UaZPqt7o");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm("service_9xutcqf","template_rzjqc3b", this)
      .then(function () {
          alert('Correo enviado con éxito!');
      }, function (error) {
          alert('Error al enviar el correo: ' + JSON.stringify(error));
      });
});

// Conectando con el whatsapp
const whatsappContainer = document.getElementById('whatsapp-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      whatsappContainer.classList.add('visible');
  } else {
      whatsappContainer.classList.remove('visible');
  }
});


