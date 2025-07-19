import { Hero } from '@/components/organisms/Hero';
import { AboutSection } from '@/components/organisms/AboutSection';
import { ExperienceTimeline } from '@/components/organisms/ExperienceTimeline';
import { ProjectsGrid } from '@/components/organisms/ProjectsGrid';
import { ContactSection } from '@/components/organisms/ContactSection';
import { personJsonLd, websiteJsonLd } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd()),
        }}
      />
      
      <main>
        <Hero />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </>
  );
} 