import { useEffect } from 'react';
import { Navbar, Hero, Footer, ProfileSection, ContentGrid } from '@iniguezmarc/design-system';

function App() {
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

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/IniguezMarc' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/marc-iniguez' },
  ];

  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "My personal portfolio built with React, Vite, and a custom Design System.",
      image: "/portfolio/project1.png",
      tags: ["React", "TypeScript", "Tailwind"],
      url: "https://github.com/IniguezMarc/portfolio"
    },
    {
      id: "2",
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing products, orders, and analytics.",
      image: "/portfolio/project2.png",
      tags: ["Next.js", "Prisma", "Chart.js"],
      url: "#"
    },
    {
      id: "3",
      title: "Social Connect App",
      description: "Mobile-first social networking application connecting developers.",
      image: "/portfolio/project3.png",
      tags: ["React Native", "Firebase"],
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar
        logo="M.I."
        links={navLinks}
        actions={[
          { label: 'Resume', onClick: () => console.log('Download Resume'), variant: 'primary' }
        ]}
      />

      <main>
        <div id="home">
          <Hero
            greeting="Hi, I'm Marc"
            title="Frontend Developer"
            subtitle="Building beautiful, responsive, and user-friendly web experiences with modern technologies."
            actions={[
              { label: 'View Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), variant: 'primary' },
              { label: 'Contact Me', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), variant: 'secondary' }
            ]}
          />
        </div>

        <ProfileSection
          id="about"
          title="About Me"
          avatarUrl="/portfolio/avatar.png"
          bio={`I am a passionate Frontend Developer with a keen eye for design and a love for clean code. 
          
          I specialize in building scalable web applications using React, TypeScript, and modern CSS frameworks. My goal is to create seamless user experiences that solve real-world problems.`}
          skills={["React", "TypeScript", "Tailwind CSS", "Node.js", "Git", "Figma"]}
          skillsTitle="My Tech Stack"
        />

        <div id="projects">
          <ContentGrid
            title="Featured Projects"
            items={projects}
            itemButtonLabel="View Code"
            onItemClick={(id) => console.log(`Clicked project ${id}`)}
          />
        </div>

        {/* Contact Placeholder (Footer covers most of this purpose usually, but specific form could go here) */}
        <div id="contact"></div>

      </main>

      <Footer
        copyrightOwner="Marc Iñiguez"
        socialLinks={socialLinks}
      />
    </div>
  )
}

export default App
