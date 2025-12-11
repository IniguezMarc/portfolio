import { Navbar } from '@iniguezmarc/design-system';
import { Hero } from '@iniguezmarc/design-system';
import { Footer } from '@iniguezmarc/design-system';

function App() {
  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/IniguezMarc' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/marc-iniguez' },
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

        {/* Placeholder for Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl dark:border-gray-800">
                <h3 className="text-xl font-bold mb-2 dark:text-white">Portfolio</h3>
                <p className="text-gray-600 dark:text-gray-400">This current website, built with my own design system.</p>
              </div>
              {/* More projects to come */}
            </div>
          </div>
        </section>

      </main>

      <Footer
        copyrightOwner="Marc Iñiguez"
        socialLinks={socialLinks}
      />
    </div>
  )
}

export default App
