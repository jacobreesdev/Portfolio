'use client';

import * as m from 'motion/react-m';

import { Marquee } from '@/components/magicui/marquee';
import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeIn, fadeUp, scrollViewport } from '@/lib/animations';

const technologies = [
  // Languages & Frameworks
  { name: 'React', color: 'text-cyan-500' },
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'Vue.js', color: 'text-emerald-500' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'React Native', color: 'text-cyan-500' },
  // State & Data
  { name: 'TanStack Query', color: 'text-red-500' },
  { name: 'Zustand', color: 'text-amber-600' },
  { name: 'Pinia', color: 'text-yellow-400' },
  // API & Backend
  { name: 'tRPC', color: 'text-blue-400' },
  { name: 'GraphQL', color: 'text-pink-500' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'Prisma', color: 'text-emerald-500' },
  { name: 'PostgreSQL', color: 'text-blue-600' },
  { name: 'Firebase', color: 'text-amber-500' },
  { name: 'Payload CMS', color: 'text-foreground' },
  { name: 'Sanity CMS', color: 'text-red-400' },
  // UI & Styling
  { name: 'Tailwind CSS', color: 'text-cyan-400' },
  { name: 'Framer Motion', color: 'text-pink-500' },
  { name: 'Storybook', color: 'text-pink-500' },
  { name: 'Figma', color: 'text-purple-500' },
  // APIs & Services
  { name: 'Mapbox GL JS', color: 'text-blue-500' },
  { name: 'Algolia', color: 'text-indigo-500' },
  { name: 'GrowthBook', color: 'text-purple-400' },
  { name: 'GTM', color: 'text-blue-400' },
  { name: 'GA4', color: 'text-amber-500' },
  // Testing
  { name: 'Vitest', color: 'text-yellow-400' },
  { name: 'Playwright', color: 'text-green-400' },
  { name: 'Jest', color: 'text-red-600' },
  // Tools & Infrastructure
  { name: 'GitHub Actions', color: 'text-foreground' },
  { name: 'Vercel', color: 'text-foreground' },
  { name: 'Shopify Liquid', color: 'text-green-500' },
];

export default function Logos() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="relative py-10 md:py-12 lg:py-16">
      <Noise />
      <m.p
        className="text-muted-foreground container text-center text-base"
        initial={initial}
        whileInView="visible"
        viewport={scrollViewport}
        variants={fadeUp}
      >
        Technologies I work with
      </m.p>

      <m.div
        initial={initial}
        whileInView="visible"
        viewport={scrollViewport}
        variants={fadeIn}
      >
        <Marquee
          pauseOnHover
          className="mt-8 mask-r-from-60% mask-r-to-100% mask-l-from-60% mask-l-to-100% [--duration:25s] [--gap:3rem]"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 text-lg font-medium transition-transform duration-200 hover:scale-105"
            >
              <span className={tech.color}>{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </m.div>
    </section>
  );
}
