import React from 'react';
import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { TechArsenal } from '@/components/TechArsenal';
import { KeyAchievements } from '@/components/KeyAchievements';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <NavBar />
      <main>
        <HeroSection />
        <TechArsenal />
        <KeyAchievements />
        <ArchitectureDiagram />
        <FeaturedProjects />
        <Contact />
      </main>
    </div>
  );
}
