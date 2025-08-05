import React from 'react';
import { NavHeader } from './components/nav-header';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { EducationSection } from './components/education-section';
import { TechStackSection } from './components/tech-stack-section';
import { ProjectsSection } from './components/projects-section';
import { AchievementsSection } from './components/achievement-section';
import { ContactSection } from './components/contact-section';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Single white glow background effect */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full bg-white opacity-20 blur-3xl" />
      </div>
      <NavHeader />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
}
export default App;
