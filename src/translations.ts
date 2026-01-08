export const translations = {
    en: {
        nav: {
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi, I'm Marc",
            title: 'Frontend Developer',
            subtitle: 'Building beautiful, responsive, and user-friendly web experiences with modern technologies.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
        },
        about: {
            title: 'About Me',
            bio: `I am a passionate Frontend Developer with a keen eye for design and a love for clean code. 
      
      I specialize in building scalable web applications using React, TypeScript, and modern CSS frameworks. My goal is to create seamless user experiences that solve real-world problems.`,
            skillsTitle: 'My Tech Stack',
        },
        projects: {
            title: 'Featured Projects',
            viewCode: 'View Code',
            portfolio: {
                title: 'Portfolio Website',
                description: 'My personal portfolio built with React, Vite, and a custom Design System.',
            },
            dashboard: {
                title: 'E-Commerce Dashboard',
                description: 'A comprehensive dashboard for managing products, orders, and analytics.',
            },
            social: {
                title: 'Social Connect App',
                description: 'Mobile-first social networking application connecting developers.',
            }
        },
        footer: {
            copyright: 'Marc Iñiguez',
        },
        common: {
            resume: 'Resume',
            downloadResume: 'Download Resume',
        }
    },
    es: {
        nav: {
            contact: 'Contacto',
        },
        hero: {
            greeting: "Hola, soy Marc",
            title: 'Desarrollador Frontend',
            subtitle: 'Creando experiencias web hermosas, responsivas y fáciles de usar con tecnologías modernas.',
            viewProjects: 'Ver Proyectos',
            contactMe: 'Contáctame',
        },
        about: {
            title: 'Sobre Mí',
            bio: `Soy un apasionado Desarrollador Frontend con buen ojo para el diseño y amor por el código limpio.
      
      Me especializo en construir aplicaciones web escalables usando React, TypeScript y frameworks CSS modernos. Mi objetivo es crear experiencias de usuario fluidas que resuelvan problemas del mundo real.`,
            skillsTitle: 'Mis Tecnologías',
        },
        projects: {
            title: 'Proyectos Destacados',
            viewCode: 'Ver Código',
            portfolio: {
                title: 'Sitio Web Portfolio',
                description: 'Mi portafolio personal construido con React, Vite y un Sistema de Diseño personalizado.',
            },
            dashboard: {
                title: 'Panel E-Commerce',
                description: 'Un panel completo para gestionar productos, pedidos y análisis.',
            },
            social: {
                title: 'App Social Connect',
                description: 'Aplicación de redes sociales mobile-first para conectar desarrolladores.',
            }
        },
        footer: {
            copyright: 'Marc Iñiguez',
        },
        common: {
            resume: 'Currículum',
            downloadResume: 'Descargar CV',
        }
    }
};

export type Language = 'en' | 'es';
export type Translation = typeof translations.en;
