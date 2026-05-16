import type { ReactNode } from 'react';

export interface ExperienceRole {
  title: string;
  period: string;
  current?: boolean;
}

export interface ExperienceBullet {
  id: string;
  content: ReactNode;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  roles?: ExperienceRole[];
  bullets: ExperienceBullet[];
  technologies: string;
}

const linkClassName =
  'text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'revolution-viewing',
    period: 'Mar 2023 - Present',
    title: 'Frontend Engineer',
    company: 'Revolution Viewing / Vepple',
    roles: [
      {
        title: 'Frontend Engineer',
        period: 'Feb 2026 - Present',
        current: true,
      },
      {
        title: 'Junior Frontend Developer',
        period: 'Mar 2023 - Feb 2026',
      },
    ],
    bullets: [
      {
        id: 'rv-scope',
        content: (
          <>
            Drive frontend and product-design delivery for{' '}
            <a
              href="https://vepple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Vepple
            </a>
            , a personalised virtual campus platform trusted by 30+ universities
            and 500K+ students, across Vue/GraphQL and
            Next.js/TypeScript/Payload CMS rebuilds with CI/CD and automated
            testing.
          </>
        ),
      },
      {
        id: 'rv-events',
        content: (
          <>
            Designed and built an Events Management System with Firebase
            real-time chat, timezone-aware schedules and 1-second status
            updates, increasing views/session by 108%.
          </>
        ),
      },
      {
        id: 'rv-ab-testing',
        content: (
          <>
            Built GrowthBook A/B testing and GDPR-compliant GTM/GA4 tracking;
            ran 15 production experiments for 20K+ users and increased click
            rate by 19.2%.
          </>
        ),
      },
      {
        id: 'rv-explore-map',
        content: (
          <>
            Engineered Mapbox GL JS Explore by Map with personalised filters,
            directions and GPS wayfinding; benchmarked outcomes include 21
            pages/session, +68% page depth and +64% engagement time.
          </>
        ),
      },
      {
        id: 'rv-guided-tour',
        content: (
          <>
            Enhanced WCAG 2.2 AA Guided Tours with live captions, ambassador
            content and Content Spots; Guided Tour users see +65% pages/session,
            +50% engagement time and 4.3-star satisfaction.
          </>
        ),
      },
      {
        id: 'rv-mentoring',
        content: (
          <>
            Mentored a junior engineer through code reviews and pair
            programming, ramping them to independent feature delivery within 4
            weeks.
          </>
        ),
      },
    ],
    technologies:
      'Vue, GraphQL, Next.js, TypeScript, Payload CMS, Firebase, Mapbox GL JS, GrowthBook, GTM, GA4',
  },
  {
    id: 'pavers',
    period: 'Aug 2022 - Mar 2023',
    title: 'Web Developer',
    company: 'Pavers',
    bullets: [
      {
        id: 'pavers-component-library',
        content: (
          <>
            Designed and built a WCAG 2.1 AA component library of 75+
            React/Shopify Liquid components across 5+ brands for{' '}
            <a
              href="https://pavers.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Pavers
            </a>
            , using Storybook and Sanity CMS to support rapid page
            customisation.
          </>
        ),
      },
      {
        id: 'pavers-algolia',
        content: (
          <>
            Integrated retail-media sponsored placements into Algolia search
            across a 10,000+ product catalogue, increasing conversion by 11.4%.
          </>
        ),
      },
      {
        id: 'pavers-lucky-orange',
        content: (
          <>
            Combined Lucky Orange session data with a weather API to deliver
            location-aware recommendations, increasing conversion by 8.9%.
          </>
        ),
      },
    ],
    technologies: 'React, Shopify Liquid, Sanity CMS, Algolia, Storybook',
  },
  {
    id: 'university-leeds',
    period: 'Jul 2022',
    title: 'BA in Digital Media',
    company: 'University of Leeds',
    bullets: [
      {
        id: 'leeds-grade',
        content: (
          <>
            Achieved a 2:1 overall with a First in the{' '}
            <a
              href="https://waveger.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              final coding project
            </a>
            .
          </>
        ),
      },
    ],
    technologies: '',
  },
];
