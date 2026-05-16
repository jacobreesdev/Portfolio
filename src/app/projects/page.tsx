import type { Metadata } from 'next';

import ProjectsContent from './projects-content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects shipped by Jacob Rees across higher education, e-commerce, and personal side projects: Vepple, Pavers, CanonCore, MusicCount.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
