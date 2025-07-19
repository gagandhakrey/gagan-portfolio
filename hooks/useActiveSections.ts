import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'hero',
  'about',
  'experience',
  'projects',
  'achievements',
  'contact'
];

export function useActiveSections() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 1]
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return active;
} 