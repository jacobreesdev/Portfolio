import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export interface ProjectFrontmatter {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  links?: { label: string; url: string }[];
  image: string;
  year: string;
  featured: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export function getProjectSlugs(): string[] {
  const slugs: string[] = [];
  for (const file of fs.readdirSync(projectsDirectory)) {
    if (file.endsWith('.mdx')) {
      slugs.push(file.replace(/\.mdx$/, ''));
    }
  }
  return slugs;
}

export const getProjectBySlug = cache((slug: string): Project | null => {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ProjectFrontmatter),
  };
});
