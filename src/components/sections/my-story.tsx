'use client';

import * as m from 'motion/react-m';
import Link from 'next/link';

import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, scrollViewport, staggerContainer } from '@/lib/animations';

export default function MyStory() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative">
      <Noise />
      <div className="container">
        <m.div
          className="mx-auto max-w-3xl space-y-6"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          <m.h2
            className="text-4xl tracking-tight lg:text-5xl"
            variants={fadeUp}
          >
            My Story
          </m.h2>

          <m.div
            className="text-muted-foreground space-y-6 text-lg leading-relaxed"
            variants={fadeUp}
          >
            <p>
              I&apos;ve been hooked on building things with code since secondary
              school Computer Science. What started as curiosity became a drive
              to make things that work well and feel right to use.
            </p>

            <p>
              After studying Digital Media at Leeds (graduating with a First in
              my{' '}
              <Link
                href="https://waveger.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                final coding project
              </Link>
              ), I&apos;ve spent the last 4 years shipping React and TypeScript
              products across higher education and e-commerce. At{' '}
              <Link
                href="https://pavers.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                Pavers
              </Link>
              , I built a WCAG 2.1 AA component library powering 160+ retail
              shops across 5+ brands. At Revolution Viewing, I work on{' '}
              <Link
                href="https://vepple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                Vepple
              </Link>
              , a platform serving 30+ UK universities. I led front-end and UX
              on the original Vue.js build, then spearheaded the ground-up
              rebuild to React, Next.js 16, and TypeScript with the CTO and
              Product Manager, and mentored a junior engineer to independent
              delivery in 4 weeks.
            </p>

            <p>
              What keeps me interested is the mix of visual polish and technical
              problem-solving. Some days I&apos;m tweaking animations and
              getting interactions just right, other days I&apos;m designing an
              A/B experiment or tracking down a weird accessibility bug.
            </p>

            <p>
              I bridge design and engineering, shipping accessible and
              measurable products with teams that ship work they&apos;re proud
              of.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
