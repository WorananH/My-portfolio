import { useState, useCallback, useEffect } from 'react';
import { ThemeToggle } from '../Component/ThemeToggle';
import { StarBackground } from '../Component/StarBackground';
import { Navbar } from '../Component/Navbar';

// Import main page sections,

import { HeroSection } from '../Component/HeroSection';
import { AboutSection } from '../Component/AboutSection';
import { SkillsSection } from '../Component/SkillsSection';
import { Projects } from '../Component/Projects';
import { ContactSection } from '../Component/ContactSection';
import { Footer } from '../Component/Footer';

export const Home = () => {
  // ADDED: State to store the dynamic navbar height
  const [navbarHeight, setNavbarHeight] = useState(0);

  // ADDED: Memoized callback function to update navbarHeight state
  // This function will be passed to the Navbar component
  const handleNavbarHeightChange = useCallback(height => {
    setNavbarHeight(height);
  }, []);

  // ADDED: useEffect to set a CSS custom property (variable) on the root HTML element
  // This allows you to use 'var(--navbar-height)' in your CSS/Tailwind for padding
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--navbar-height',
      `${navbarHeight}px`
    );
  }, [navbarHeight]); // This effect re-runs whenever navbarHeight changes

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Global Components */}
      <ThemeToggle />
      <StarBackground />
      {/* CHANGED: Pass the 'onHeightChange' prop to Navbar */}
      <Navbar onHeightChange={handleNavbarHeightChange} />

      {/* Main Content Areas */}
      {/*
        CHANGED: Apply padding-top to the main content container.
        We're using a CSS variable which is dynamically updated by the Navbar.
        The 'pt-[var(--navbar-height)]' Tailwind class will use this variable.
        Ensure Tailwind CSS setup supports arbitrary values (modern Tailwind does by default).
      */}
      <main className='pt-[var(--navbar-height)]'>
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
