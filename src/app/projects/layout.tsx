import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects shipped by Jacob Rees across higher education, e-commerce, and personal side-projects: Vepple, Pavers, CanonCore, Waveger, MusicCount.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
