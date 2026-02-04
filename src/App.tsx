import { useEffect } from 'react';
import {
  CreativeNavbar,
  CreativeHero,
  CreativeProfileSection,
  BasicContentGrid,
  CreativeFooter,
  ScrollReveal,
  ScrollSvg,
  CreativeButton,
  type GridItem
} from '@iniguezmarc/design-system';
import { useLanguage } from './LanguageContext';

function App() {
  const { t, language, setLanguage } = useLanguage();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const socialLinks = [
    { platform: 'GitHub' as const, url: 'https://github.com/IniguezMarc' },
    { platform: 'LinkedIn' as const, url: 'https://www.linkedin.com/in/iniguezmarc' },
  ];

  const projects: GridItem[] = [
    {
      id: "1",
      title: language === 'es' ? "Design System" : "Design System",
      description: language === 'es'
        ? "Una librería de componentes React que uso para mis proyectos. Incluye componentes reutilizables, documentación Storybook, y modo oscuro."
        : "A React component library I built for my projects. Includes reusable components, Storybook docs, and dark mode support.",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Storybook", "Tailwind"],
      url: "https://iniguezmarc.github.io/design-system/"
    },
    {
      id: "2",
      title: language === 'es' ? "Visualizador de Pathfinding" : "Pathfinding Visualizer",
      description: language === 'es'
        ? "Herramienta interactiva para visualizar algoritmos de búsqueda de caminos como A*, Dijkstra, y BFS con animaciones paso a paso."
        : "Interactive tool for visualizing pathfinding algorithms like A*, Dijkstra, and BFS with step-by-step animations.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Algorithms", "Canvas", "TypeScript"],
      url: "https://iniguezmarc.github.io/pathfinding-visualizer/"
    }
  ];

  const floatingSkills = [
    { label: "JavaScript", color: "text-blue-600 dark:text-blue-400", speed: 0.5, xOffset: -50 },
    { label: "Node.js", color: "text-green-600 dark:text-green-400", speed: -0.4, xOffset: -30 },
    { label: "Python", color: "text-yellow-600 dark:text-yellow-400", speed: 0.55, xOffset: 55 },
    { label: "Java", color: "text-orange-600 dark:text-orange-400", speed: -0.75, xOffset: -45 },
    { label: "SQL", color: "text-purple-600 dark:text-purple-400", speed: 0.35, xOffset: 35 },
    { label: "Git", color: "text-red-600 dark:text-red-400", speed: -0.95, xOffset: -40 },
  ];

  return (
    <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden transition-colors duration-300">

      {/* BACKGROUND SCROLL SVG */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <ScrollSvg
          path="M 50 0 Q 200 150 50 300 T 50 600 T 50 900 T 50 1200 T 50 1500 T 50 1800 T 50 2100 T 50 2400 T 50 2700 T 50 3000"
          viewBox="-50 0 200 3000"
          scrollOffset={['start end', 'end start']}
          speed={1.0}
          animateOnMount={true}
          preserveAspectRatio="none"
          strokeColor="#9333ea"
          strokeWidth={4}
          glow={true}
          className="opacity-20"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col">

        {/* 1. CREATIVE NAVBAR */}
        <CreativeNavbar
          logo="Marc.Dev"
          links={[]}
          enableLanguageToggle={true}
          language={language}
          onLanguageChange={(lang: 'en' | 'es') => setLanguage(lang)}
          glassOnScroll={true}
          hideOnScroll={false}
          glassDensity={50}
        />

        {/* 2. CREATIVE HERO */}
        <CreativeHero
          prefix={t.hero.prefix}
          typewriterText={t.hero.typewriter}
          typewriterDelay={1000}
          typewriterSpeed={80}
          subtitle={t.hero.subtitle}
          subtitleHighlight={t.hero.highlight}
          primaryAction={{
            label: t.hero.downloadCv,
            onClick: () => {
              const cvUrl = language === 'es' ? '/portfolio/cv-es.pdf' : '/portfolio/cv-en.pdf';
              const link = document.createElement('a');
              link.href = cvUrl;
              link.download = language === 'es' ? 'Marc_Iniguez_CV_ES.pdf' : 'Marc_Iniguez_CV_EN.pdf';
              link.click();
            }
          }}
          backgroundColor="bg-transparent"
          darkBackgroundColor="dark:bg-transparent"
          backgroundEffect='blobs'
          highlightColor="bg-purple-600 text-purple-600"
          darkHighlightColor="dark:bg-purple-500 dark:text-purple-500"
          prefixColor="text-purple-600"
          darkPrefixColor="dark:text-purple-300"
          statusTextColor="text-gray-600"
          darkStatusTextColor="dark:text-gray-300"
        />

        {/* 3. CREATIVE PROFILE SECTION */}
        <CreativeProfileSection
          title={t.about.title}
          titleHighlight={t.about.highlight}
          bio={t.about.description}
          philosophyTitle={t.about.philosophyTitle}
          philosophyItems={t.about.philosophyItems}
          floatingSkills={floatingSkills}
          backgroundColor="bg-transparent"
          darkBackgroundColor="dark:bg-transparent"
        />

        {/* 4. PROJECTS GRID */}
        <div id="projects">
          <BasicContentGrid
            title={t.projects.title}
            items={projects}
            itemButtonLabel={t.projects.viewCaseStudy}
            onItemClick={(id) => {
              const project = projects.find(p => p.id === id);
              if (project?.url && project.url !== '#') {
                window.open(project.url, '_blank');
              }
            }}
            backgroundColor="bg-transparent"
            darkBackgroundColor="dark:bg-transparent"
            titleColor="text-gray-900"
            darkTitleColor="dark:text-white"
            customStyles={{
              container: "py-40 border-t border-gray-100 dark:border-white/5",
              title: "text-center mb-20 text-4xl md:text-6xl font-bold"
            }}
            renderItemWrapper={(children, item, index) => (
              <ScrollReveal key={item.id} base="fade" direction="up" delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-colors duration-500 shadow-sm hover:shadow-xl dark:shadow-none h-full">
                  {children}
                </div>
              </ScrollReveal>
            )}
            renderItemAction={(item) => (
              <CreativeButton
                label={t.projects.viewCaseStudy}
                onClick={() => {
                  if (item.url && item.url !== '#') {
                    window.open(item.url, '_blank');
                  }
                }}
                variant="arrow-slide"
                className="text-sm font-semibold"
              />
            )}
          />
        </div>

        {/* 5. CREATIVE FOOTER */}
        <div id="footer">
          <CreativeFooter
            copyrightOwner={t.footer.copyright}
            socialLinks={socialLinks}
            ambientBackground
            glass={false}
            backgroundColor="bg-transparent"
            darkBackgroundColor="dark:bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
