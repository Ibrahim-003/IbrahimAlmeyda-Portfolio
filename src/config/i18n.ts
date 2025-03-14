import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      presentation: {
        title1: "Hi, This is",
        title2: "Ibrahim Almeyda",
        title3: "I'm a Frontend Developer",
        downloadBtn: "Download CV",
      },
      about: {
        title: "About",
        description: [
          "Hi! I'm Ibrahim Almeyda, a software developer passionate about technology. I specialize in front-end development with React. I enjoy building interactive and efficient web applications, focusing on a fluid user experience. I'm currently expanding my knowledge in TypeScript and Tailwind CSS.",
          "My goal is to write clean, maintainable code while continuing to improve my problem-solving skills. When I'm not coding, I enjoy exploring new technology trends, learning about artificial intelligence, and designing creative interfaces.",
        ],
      },
      skills: {
        title: "Skills",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        react: "React",
        typescript: "TypeScript",
        tailwindcss: "Tailwindcss",
        figma: "Figma",
        git: "Git",
      },
      projects: {
        title: "Projects",
        viewAll: "View All Projects",
      },
      contact: {
        title: "Contact",
        socialTitle: "My Social Networks",
        formTitle: "Send Me a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "example@gmail.com",
        messagePlaceholder: "Your Message",
        submit: "Submit",
      },
      footer: {
        copyright: "© 2025 Ibrahim Almeyda. All Rights Reserved.",
      },
      loading: "Loading...",
      language: "Español",
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      presentation: {
        title1: "Hola, Soy",
        title2: "Ibrahim Almeyda",
        title3: "Desarrollador Frontend",
        downloadBtn: "Descargar CV",
      },
      about: {
        title: "Sobre mi",
        description: [
          "¡Hola! Soy Ibrahim Almeyda, un desarrollador de software apasionado por la tecnología. Me especializo en el desarrollo frontend con React. Disfruto creando aplicaciones web interactivas y eficientes, enfocándome en una experiencia de usuario fluida. Actualmente, estoy ampliando mis conocimientos en TypeScript y Tailwind CSS",
          "Mi objetivo es escribir código limpio y mantenible mientras sigo mejorando mis habilidades en resolución de problemas. Cuando no estoy programando, me gusta explorar nuevas tendencias tecnológicas, aprender sobre inteligencia artificial y diseñar interfaces creativas.",
        ],
      },
      skills: {
        title: "Habilidades",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        react: "React",
        typescript: "TypeScript",
        tailwindcss: "Tailwindcss",
        figma: "Figma",
        git: "Git",
      },
      projects: {
        title: "Proyectos",
        viewAll: "Ver Todos los Proyectos",
      },
      contact: {
        title: "Contacto",
        socialTitle: "Mis Redes Sociales",
        formTitle: "Enviame un Mensaje",
        namePlaceholder: "Tu Nombre",
        emailPlaceholder: "ejemplo@gmail.com",
        messagePlaceholder: "Tu Mensaje",
        submit: "Enviar",
      },
      footer: {
        copyright: "© 2025 Ibrahim Almeyda. Todos los derechos reservados.",
      },
      loading: "Cargando...",
      language: "English",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
