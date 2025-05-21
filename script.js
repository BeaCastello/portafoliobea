document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('menu-hamburguesa');
});
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
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
    text_about_me: "Soy una desarrolladora apasionada por la creación de experiencias digitales que combinan código limpio y diseño visual impactante. Me encanta convertir ideas en proyectos funcionales que conecten con las personas.",
    text_about_me1: "Me destaco por ser una persona creativa, proactiva y con una actitud positiva hacia el aprendizaje continuo. Me adapto con facilidad a nuevos entornos, aprendo con rapidez y disfruto asumir retos que me permitan crecer personal y profesionalmente. Soy responsable, receptiva, con buenas habilidades para el trabajo en equipo y una sólida capacidad de escucha. Además, cuento con disponibilidad hora",
    show_more: "Mostrar más",
    show_less: "Mostrar menos",
    download: "Descargar pdf",
    additional_title: "Formación en Ingeniería y Arquitectura, con especialización en Tecnologías de la Información y la Comunicación (TIC).",
    additional_text: "He ampliado mi formación a través de cursos impartidos por LABORA, como Actividades Administrativas en Relación con el Cliente y Operaciones Auxiliares de Servicios Administrativos y Generales, fortaleciendo así un perfil multidisciplinar orientado al ámbito administrativo y tecnológico. Cuento con experiencia laboral en los sectores de informática, administración y diseño gráfico.",
    additional_text1: "Actualmente me especializo en diseño gráfico, desarrollo de sitios web, tiendas en línea y plataformas educativas. También gestiono y actualizo redes sociales, además de crear y optimizar cuentas en diversas plataformas digitales.",
    additional_text2: "Con una base sólida en educación y una constante actualización de conocimientos, he desarrollado habilidades en diversos campos. Mi enfoque está en combinar teoría con práctica para lograr resultados reales y sostenibles.",
    job_training: "Formación profesional",
    work_experience: "Experiencia Laboral",
    web_development: "Desarrollo web",
    teacher: "Profesora",
    administrative_assistant: "Administrative Assistant",
    sales_commercial: "Comercial de ventas",
    related_site: "Ver sitio relacionado",
    skills: "Habilidades",
    form_title: "Descubre quién soy y lo que puedo aportar",
    name: "Nombre",
    phone_number: "Número de teléfono",
    message: "Mensaje",
    accept_politics: "Acepto el aviso legal/política de privacidad",
    send: "Enviar",
  
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
    text_about_me: "I'm a developer passionate about creating digital experiences that combine clean code and striking visual design. I love turning ideas into functional projects that connect with people.",
    text_about_me1: "I stand out for being a creative, proactive person with a positive attitude toward continuous learning. I adapt easily to new environments, learn quickly, and enjoy taking on challenges that allow me to grow personally and professionally. I am responsible, receptive, with good teamwork skills and strong listening skills. I am also available hourly.",
    show_more: "Show more",
    show_less: "Show less",
    download: "Download pdf",
    additional_title: "Training in Engineering and Architecture, with a specialization in Information and Communication Technologies (ICT)",
    additional_text: "I have expanded my training through courses offered by LABORA, such as Administrative Activities in Customer Relations and Auxiliary Operations in Administrative and General Services, thus strengthening a multidisciplinary profile focused on the administrative and technological fields. I have work experience in the IT, administration, and graphic design sectors.",
    additional_text1: "I currently specialize in graphic design, website development, online stores, and educational platforms. I also manage and update social media, as well as create and optimize accounts on various digital platforms.",
    additional_text2: "With a solid foundation in education and constant updating of my knowledge, I have developed skills in various fields. My focus is on combining theory with practice to achieve real and sustainable results.",
    job_training: "Job Training",
    work_experience: "Work Experience",
    web_development: "Web Development",
    teacher: "Teacher",
    administrative_assistant: "Administrative Assistant",
    sales_commercial: "Sales Commercial",
    related_site: "Related site",
    skills: "Skills", 
    form_title: "Discover who I am and what I can contribute",
    name: "Name",
    phone_number: "Phone Number",
    message: "Message",
    accept_politics: "I accept the legal notice/privacy policy",
    send: "Send",



    
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
    
    cambiarIdioma(currentLang);
    cambiarIdiomaBoton(currentLang);
    cambiarIdiomaHabilidades(currentLang);
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
    button.textContent = currentLang == 'es' ? 'Mostrar más' : 'Show more';
  } else {
    contentContainer.style.display = 'flex';
    button.textContent = currentLang == 'es' ? 'Mostrar menos' : 'Show less';

  }
}

function cambiarIdiomaBoton(language){
  const button = document.querySelector('.show_more');
  if(button.textContent == 'Mostrar más' && language == 'en')  button.textContent = 'Show more';
  else if(button.textContent == 'Show more' && language == 'es')  button.textContent = 'Mostrar más';
  else if(button.textContent == 'Mostrar menos' && language == 'en')  button.textContent = 'Show less';
  else if(button.textContent == 'Show less'  && language == 'es')  button.textContent = 'Mostrar menos';
}

const experiencias = [
  {
    titulo: "Desarrollo web y plataformas educativas",
    titulo_en: "Web development and educational platforms",
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
    descripcion_en: "Creation of web pages for advertising services."
  },
  {
    titulo: "Profesora",
    titulo_en: "Teacher",
    imagenes: [
      "imagenes/academia.png",
      "imagenes/videoCurso.mp4"
    ],
    links: [
      "https://beacastello.github.io/digitalHive/"
    ],
    descripcion: "Diseño e implementación de clases personalizadas según el nivel educativo y las necesidades específicas de cada estudiante.",
    descripcion_en: "Design and implementation of personalized classes based on the educational level and specific needs of each student."
  },
  {
    titulo: "Auxiliar administrativo",
    titulo_en: "Administrative Assistant",
    imagenes: [
      "imagenes/Academia2.jpg",
      "imagenes/imgNoa´s.png",
      "imagenes/imgAA.png"
    ],
    descripcion: "Apoyo en tareas administrativas, gestión de documentación y atención al cliente.",
    descripcion_en: "Support with administrative tasks, document management, and customer service."
  },
  {
    titulo: "Comercial de ventas",
    titulo_en: "Sales representative",
    imagenes: [
      "imagenes/comercial1.png",
      "imagenes/comercial3.png"
    ],
    descripcion: "Encargado de la promoción, captación de clientes y cierre de ventas de productos y servicios.",
    descripcion_en: "In charge of promoting, attracting customers, and closing sales of products and services."
  }
];

let idiomaActual = 'es'; 

function mostrarExperiencia(index) {
  const exp = experiencias[index];
  const container = document.getElementById("expContent");
  
  const mediaHTML = exp.imagenes.map((src, i) => {
    const link = exp.links && exp.links[i] ? exp.links[i] : null;
    let mediaElement = src.endsWith(".mp4")
      ? `<video class="exp-video" controls><source src="${src}" type="video/mp4"></video>`
      : `<img class="exp-media" src="${src}" alt="">`;

const linkHTML = link ? `<div><a href="${link}" target="_blank">${idiomaActual === 'es' ? 'Ver sitio relacionado' : 'View related site'}</a></div>` : "";
    return `<div class="media-item">${mediaElement}${linkHTML}</div>`;
  }).join("");

const titulo = idiomaActual === 'en' ? exp.titulo_en : exp.titulo;
  const descripcion = idiomaActual === 'en' ? exp.descripcion_en : exp.descripcion;

  
 container.innerHTML = `
    <h2 class="exp-titulo">${titulo}</h2>
    <div class="image-row">${mediaHTML}</div>
    <p class="description">${descripcion}</p>
  `;

document.querySelectorAll("#expList li").forEach((item, idx) => {
    item.classList.toggle("active", idx === index);
  });
}

window.onload = () => mostrarExperiencia(0);

function cambiarIdioma(nuevoIdioma) {
  idiomaActual = nuevoIdioma;
  const activeIndex = [...document.querySelectorAll("#expList li")].findIndex(item => item.classList.contains("active"));
  mostrarExperiencia(activeIndex !== -1 ? activeIndex : 0);
}

const habilidadesPorIdioma = {
  es: [
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
  ],
  en: [
    { nombre: "HTML5", icono: "🌐" },
    { nombre: "CSS3", icono: "🎨" },
    { nombre: "JavaScript", icono: "💻" },
    { nombre: "React", icono: "⚛️" },
    { nombre: "Web Creation", icono: "🧩" },
    { nombre: "Databases", icono: "🗄️" },
    { nombre: "Creativity", icono: "🎯" },
    { nombre: "Microsoft Office", icono: "📊" },
    { nombre: "Social Media Management", icono: "📱" },
    { nombre: "Teamwork", icono: "🤝" },
    { nombre: "Problem Solving", icono: "🧠" },
    { nombre: "Communication", icono: "🗣️" },
  ]
};
function cambiarIdiomaHabilidades(idioma) {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = "";
  const habilidades = habilidadesPorIdioma[idioma] || habilidadesPorIdioma["es"];

  habilidades.forEach(habilidad => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-icon">${habilidad.icono}</div>
      <div class="skill-name">${habilidad.nombre}</div>
    `;
    container.appendChild(card);
  });
}
cambiarIdiomaHabilidades(currentLang);

const container = document.getElementById("skillsContainer");

// Enlace con emailjs

(function () {
  emailjs.init("Oyh2uTXc5UaZPqt7o");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm("service_9xutcqf", "template_rzjqc3b", this)
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



// Slider
const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  let currentIndex = 0;

  function updateSlider(index) {
    const container = document.querySelector('.slides-container');
    container.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(currentIndex);
  });




