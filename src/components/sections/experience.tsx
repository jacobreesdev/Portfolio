'use client';

import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  fadeUpSmall,
  scrollViewport,
  staggerContainer,
  staggerContainerFast,
} from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  className?: string;
}

export default function Experience({ className }: ExperienceProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  const experience: Array<{
    id: string;
    period: string;
    title: string;
    company: string;
    roles?: Array<{
      title: string;
      period: string;
      current?: boolean;
    }>;
    bullets: React.ReactNode[];
    technologies: string;
  }> = [
    {
      id: 'revolution-viewing',
      period: 'Mar 2023 - Present',
      title: 'Front-End & UX Engineer',
      company: 'Revolution Viewing',
      roles: [
        {
          title: 'Front-End & UX Engineer',
          period: 'Feb 2026 - Present',
          current: true,
        },
        {
          title: 'Junior Frontend Developer',
          period: 'Mar 2023 - Feb 2026',
        },
      ],
      bullets: [
        <>
          Led front-end and UX development on the original Vue.js platform
          consuming a GraphQL API, helping build{' '}
          <a
            href="https://vepple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
          >
            Vepple
          </a>{' '}
          into a platform reaching 1M+ students with 12.13 pages and 6m52s per
          session across 30+ UK universities.
        </>,
        <>
          Spearheaded ground-up front-end rebuild with the CTO and Product
          Manager, replacing Vue.js with a production-grade React, Next.js 16,
          and TypeScript stack with full CI/CD and automated testing.
        </>,
        <>
          Architected Events Management System with Firebase real-time chat,
          1-second status engine, and timezone-aware scheduling, delivering 108%
          increase in views per session.
        </>,
        <>
          Built production A/B testing framework with GrowthBook SDK, running
          15 experiments across 20K+ users with +19.2% click rate uplift.
          Integrated GDPR-compliant tracking and GTM analytics.
        </>,
        <>
          Engineered Explore by Map feature with Mapbox GL JS, directions API,
          and GPS tracking. Map users averaged 21 pages per session with 64%
          longer session duration.
        </>,
        <>
          Enhanced panorama Guided Tour suite (WCAG 2.2 AA) with live captions
          and Content Spots, driving 65% more pages and 50% longer sessions.
        </>,
        <>
          Mentored a junior engineer through code reviews and pair programming,
          accelerating their ramp-up to independent feature delivery within 4
          weeks.
        </>,
      ],
      technologies:
        'Vue.js, React, Next.js, TypeScript, Pinia, Firebase, GraphQL, Mapbox GL JS, GrowthBook, Vitest, Playwright, GTM',
    },
    {
      id: 'pavers',
      period: 'Aug 2022 - Mar 2023',
      title: 'Web Developer',
      company: 'Pavers',
      bullets: [
        <>
          Built a WCAG 2.1 AA-compliant responsive component library of 75+
          components across 5+ brands for{' '}
          <a
            href="https://pavers.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
          >
            Pavers
          </a>
          , a UK retailer with 160+ stores, using React, Shopify Liquid, and
          Storybook. Worked with design and content teams to enable page
          customisation via Sanity CMS.
        </>,
        <>
          Integrated retail-media sponsored placements into Algolia search,
          driving an 11.4% conversion uplift across a 10,000+ product
          catalogue.
        </>,
        <>
          Combined Lucky Orange session data with a weather API to serve
          location-based product recommendations, resulting in an 8.9%
          conversion lift.
        </>,
      ],
      technologies:
        'React, Shopify Liquid, Sanity CMS, Algolia, Storybook, Jest, Lucky Orange, Google Tag Manager',
    },
    {
      id: 'university-leeds',
      period: 'Jul 2022',
      title: 'BA in Digital Media',
      company: 'University of Leeds',
      bullets: [
        <>
          Achieved a 2:1 overall with a First in the{' '}
          <a
            href="https://waveger.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
          >
            final coding project
          </a>
          .
        </>,
      ],
      technologies: '',
    },
  ];

  return (
    <section className={cn('py-32', className)}>
      <div className="container">
        <motion.div
          className="flex h-fit w-full flex-col justify-between gap-10 lg:flex-row lg:items-center"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          <motion.div className="max-w-xl" variants={fadeUp}>
            <p className="text-muted-foreground/50 tracking-loose uppercase">
              Professional Journey
            </p>
            <h2 className="mt-2 text-4xl tracking-tight lg:text-5xl">
              Experience
            </h2>
            <p className="text-muted-foreground mt-10 text-lg">
              3+ years building products used by millions, from virtual campus
              platforms to e-commerce solutions.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="/cv.pdf" target="_blank">
                Download CV
                <Download className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.ul
          className="relative w-full"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          <motion.li
            className="text-muted-foreground/60 flex justify-between gap-10 border-b pt-15 pb-2 text-sm tracking-tight uppercase lg:text-base"
            variants={fadeUpSmall}
          >
            <p>Role & Company</p>
            <p>Period</p>
          </motion.li>
          {experience.map((exp) => (
            <motion.li
              key={exp.id}
              className="flex justify-between gap-10 border-b py-10 lg:py-15"
              variants={fadeUpSmall}
            >
              <div className="max-w-2xl">
                <h3 className="mb-2 text-xl font-semibold tracking-tighter lg:text-2xl lg:text-3xl">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-base font-medium">
                  {exp.company}
                </p>
                {exp.roles && (
                  <div className="mb-5 flex flex-col items-start">
                    {exp.roles.map((role, i, arr) => (
                      <React.Fragment key={i}>
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'size-[10px] shrink-0 rounded-full',
                              role.current
                                ? 'bg-foreground'
                                : 'bg-muted-foreground/30',
                            )}
                          />
                          <div
                            className={cn(
                              'text-sm',
                              role.current
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground',
                            )}
                          >
                            <span>{role.title}</span>
                            <span className="text-muted-foreground/50 ml-2 text-xs lg:text-sm">
                              {role.period}
                            </span>
                          </div>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="bg-muted-foreground/40 ml-[4px] h-3 w-[2px]" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
                <div className="mb-3 space-y-2">
                  {exp.bullets.map((bullet, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground/80 text-sm lg:text-base"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
                {exp.technologies && (
                  <p className="text-muted-foreground/60 text-xs lg:text-sm">
                    <span className="font-medium">Technologies:</span>{' '}
                    {exp.technologies}
                  </p>
                )}
              </div>
              <p className="text-muted-foreground w-fit min-w-28 text-right text-sm uppercase lg:text-base">
                {exp.period}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
