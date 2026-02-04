export const translations = {
    en: {
        navbar: {
            contact: "Let's Talk",
        },
        hero: {
            prefix: "Hi, I'm Marc",
            typewriter: "Software Developer",
            subtitle: "Building web applications with",
            highlight: "modern tools",
            viewWork: "View Work",
            downloadCv: "Download CV",
        },
        about: {
            title: "About",
            highlight: "Me",
            description: `I'm a Software Engineer in training, currently finishing my degree at UOC. I enjoy working with React and TypeScript to build clean, maintainable applications. I'm especially interested in AI and automation — always looking for ways to improve workflows through technology.`,
            philosophyTitle: "What I Value",
            philosophyItems: [
                "Clean Code",
                "User Experience",
                "Continuous Learning"
            ] as [string, string, string],
        },
        projects: {
            title: "Projects",
            subtitle: "Some things I've been working on.",
            viewCaseStudy: "View Project",
        },
        footer: {
            ctaTitle: "Let's connect",
            ctaSubtitle: "I'm open to freelance projects and full-time opportunities.",
            ctaAction: "Get in Touch",
            legalNotice: "Privacy Policy",
            copyright: "Marc Iñiguez",
        },
    },
    es: {
        navbar: {
            contact: "Hablemos",
        },
        hero: {
            prefix: "Hola, soy Marc",
            typewriter: "Desarrollador de Software",
            subtitle: "Construyendo aplicaciones web con",
            highlight: "herramientas modernas",
            viewWork: "Ver Trabajo",
            downloadCv: "Descargar CV",
        },
        about: {
            title: "Sobre",
            highlight: "Mí",
            description: `Soy un Ingeniero de Software en formación, actualmente terminando mi carrera en la UOC. Disfruto trabajando con React y TypeScript para crear aplicaciones limpias y mantenibles. Me interesa especialmente la IA y la automatización — siempre buscando formas de mejorar flujos de trabajo con tecnología.`,
            philosophyTitle: "Lo Que Valoro",
            philosophyItems: [
                "Código Limpio",
                "Experiencia de Usuario",
                "Aprendizaje Continuo"
            ] as [string, string, string],
        },
        projects: {
            title: "Proyectos",
            subtitle: "Algunas cosas en las que he estado trabajando.",
            viewCaseStudy: "Ver Proyecto",
        },
        footer: {
            ctaTitle: "Conectemos",
            ctaSubtitle: "Estoy abierto a proyectos freelance y oportunidades de tiempo completo.",
            ctaAction: "Contactar",
            legalNotice: "Política de Privacidad",
            copyright: "Marc Iñiguez",
        },
    }
};

export type Language = 'en' | 'es';
export type Translation = typeof translations.en;
