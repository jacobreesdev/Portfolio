'use client';

import { ChevronRight } from 'lucide-react';
import * as m from 'motion/react-m';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, heroContainer, scaleUp } from '@/lib/animations';

export default function NotFound() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative container flex min-h-screen items-center justify-center">
      {/* Large 404 background text */}
      <m.div
        className="absolute inset-0 flex items-center justify-center"
        initial={initial}
        animate="visible"
        variants={scaleUp}
      >
        <span className="text-muted/80 text-[12rem] font-bold select-none sm:text-[16rem] md:text-[25rem] lg:text-[32rem]">
          404
        </span>
      </m.div>

      {/* Main content */}
      <m.div
        className="relative z-10 text-center"
        initial={initial}
        animate="visible"
        variants={heroContainer}
      >
        <m.h1
          className="text-foreground mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl"
          variants={fadeUp}
        >
          Page Not Found
        </m.h1>

        <m.p
          className="text-muted-foreground mx-auto mb-6 max-w-md text-sm md:text-base lg:text-lg"
          variants={fadeUp}
        >
          Broken link. Either yours or mine.
          <br />
          Let&apos;s assume mine.
        </m.p>

        <m.div variants={fadeUp}>
          <Button asChild size="lg" className="group !pl-5.5 font-medium">
            <Link href="/">
              Return Home
              <div className="bg-border border-input grid size-5.5 place-items-center rounded-full border">
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.25" />
              </div>
            </Link>
          </Button>
        </m.div>
      </m.div>
    </section>
  );
}
