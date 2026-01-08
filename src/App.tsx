import { useEffect } from 'react';
import { Navbar, Hero, Footer, ProfileSection, ContentGrid } from '@iniguezmarc/design-system';
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
    { platform: 'GitHub', url: 'https://github.com/IniguezMarc' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/marc-iniguez' },
  ];

  const projects = [
    {
      id: "1",
      title: t.projects.portfolio.title,
      description: t.projects.portfolio.description,
      image: "/portfolio/project1.png",
      tags: ["React", "TypeScript", "Tailwind"],
      url: "https://github.com/IniguezMarc/portfolio"
    },
    {
      id: "2",
      title: t.projects.dashboard.title,
      description: t.projects.dashboard.description,
      image: "/portfolio/project2.png",
      tags: ["Next.js", "Prisma", "Chart.js"],
      url: "#"
    },
    {
      id: "3",
      title: t.projects.social.title,
      description: t.projects.social.description,
      image: "/portfolio/project3.png",
      tags: ["React Native", "Firebase"],
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar
        logo="M.I."
        links={[]}
        actions={[
          { label: t.common.resume, onClick: () => console.log('Download Resume'), variant: 'primary' }
        ]}
        enableLanguageToggle={true}
        language={language}
        onLanguageChange={(lang: 'en' | 'es') => setLanguage(lang)}
      />

      <main>
        <div id="home">
          <Hero
            greeting={t.hero.greeting}
            title={t.hero.title}
            subtitle={t.hero.subtitle}
            actions={[
              { label: t.hero.viewProjects, onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), variant: 'primary' },
              { label: t.hero.contactMe, onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), variant: 'secondary' }
            ]}
          />
        </div>

        <ProfileSection
          id="about"
          title={t.about.title}
          avatarUrl="/portfolio/avatar.png"
          bio={t.about.bio}
          skills={["React", "TypeScript", "Tailwind CSS", "Node.js", "Git", "Figma"]}
          skillsTitle={t.about.skillsTitle}
        />

        <div id="projects">
          <ContentGrid
            title={t.projects.title}
            items={projects}
            itemButtonLabel={t.projects.viewCode}
            onItemClick={(id) => console.log(`Clicked project ${id}`)}
          />
        </div>

        {/* Contact Placeholder (Footer covers most of this purpose usually, but specific form could go here) */}
        <div id="contact"></div>

      </main>

      <Footer
        copyrightOwner={t.footer.copyright}
        socialLinks={socialLinks}
      />
    </div>
  )
}

export default App
