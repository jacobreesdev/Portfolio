'use client';

import { Download } from 'lucide-react';
import * as m from 'motion/react-m';
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

import { EXPERIENCE_ITEMS } from './experience-data';

interface ExperienceProps {
  className?: string;
}

export default function Experience({ className }: ExperienceProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className={cn('py-32', className)}>
      <div className="container">
        <m.div
          className="flex h-fit w-full flex-col justify-between gap-10 lg:flex-row lg:items-center"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          <m.div className="max-w-xl" variants={fadeUp}>
            <p className="text-muted-foreground/50 tracking-loose uppercase">
              Professional Journey
            </p>
            <h2 className="mt-2 text-4xl tracking-tight lg:text-5xl">
              Experience
            </h2>
            <p className="text-muted-foreground mt-10 text-lg">
              4 years building products used by millions, from virtual campus
              platforms to e-commerce solutions.
            </p>
          </m.div>
          <m.div variants={fadeUp}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="/CV.pdf" target="_blank">
                Download CV
                <Download className="ml-2 size-4" />
              </Link>
            </Button>
          </m.div>
        </m.div>
        <m.ul
          className="relative w-full"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          <m.li
            className="text-muted-foreground/60 flex justify-between gap-10 border-b pt-15 pb-2 text-sm tracking-tight uppercase lg:text-base"
            variants={fadeUpSmall}
          >
            <p>Role & Company</p>
            <p>Period</p>
          </m.li>
          {EXPERIENCE_ITEMS.map((exp) => (
            <m.li
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
                      <React.Fragment key={role.title}>
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
                  {exp.bullets.map((bullet) => (
                    <p
                      key={bullet.id}
                      className="text-muted-foreground/80 text-sm lg:text-base"
                    >
                      {bullet.content}
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
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}
