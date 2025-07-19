import { ExperienceItem, ProjectItem, Achievement, Testimonial, WritingItem } from './types';

// Import content data
import experienceData from './en/experience.json';
import projectsData from './en/projects.json';
import achievementsData from './en/achievements.json';
import testimonialsData from './en/testimonials.json';
import writingData from './en/writing.json';
import metaData from './en/meta.json';

// Export types
export type { ExperienceItem, ProjectItem, Achievement, Testimonial, WritingItem };

// Export content data
export const experience = experienceData as ExperienceItem[];
export const projects = projectsData as ProjectItem[];
export const achievements = achievementsData as Achievement[];
export const testimonials = testimonialsData as Testimonial[];
export const writing = writingData as WritingItem[];
export const meta = metaData;

// Helper function to get project by slug
export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find(project => project.slug === slug);
}

// Helper function to get all project slugs for static generation
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
} 