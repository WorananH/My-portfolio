import { ThemeToggle } from '../Component/ThemeToggle';
import { StarBackground } from '../Component/StarBackground';
import { Navbar } from '../Component/Navbar';

// Import main page sections
import { HeroSection } from '../Component/HeroSection';
import { AboutSection } from '../Component/AboutSection';
import { SkillsSection } from '../Component/SkillsSection';
import { Projects } from '../Component/Projects';
import { ContactSection } from '../Component/ContactSection';
import { Footer } from '../component/Footer';

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Global Components */}
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      {/* Main Content Areas */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
