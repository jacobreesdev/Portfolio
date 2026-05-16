'use client';

import { ArrowRight } from 'lucide-react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import Link from 'next/link';

const inlineLinkClassName =
  'text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  popIn,
  scaleUp,
  scrollViewport,
  staggerContainer,
  staggerContainerFast,
} from '@/lib/animations';

const stats = [
  {
    id: 'students',
    value: '500K+',
    label: 'Students Reached',
  },
  {
    id: 'universities',
    value: '30+',
    label: 'Universities',
  },
  {
    id: 'shops',
    value: '160+',
    label: 'Shops',
  },
];

export default function WhyWeBegan() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative">
      <Noise />
      <div className="container">
        <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-12">
          {/* Content Section */}
          <m.div
            className="flex-1 space-y-6 lg:space-y-8"
            initial={initial}
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
            <m.div className="space-y-6 lg:space-y-8" variants={fadeUp}>
              <h2 className="text-4xl tracking-tight lg:text-5xl">About Me</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Frontend Engineer shipping React and TypeScript products in
                higher education and e-commerce. 4 years at Revolution Viewing ({' '}
                <Link
                  href="https://vepple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClassName}
                >
                  Vepple
                </Link>
                ) and{' '}
                <Link
                  href="https://pavers.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClassName}
                >
                  Pavers
                </Link>
                , focused on accessibility and A/B-tested conversions.
              </p>
            </m.div>

            {/* Stats Cards */}
            <m.div
              className="flex flex-1 flex-wrap gap-4"
              variants={staggerContainerFast}
            >
              {stats.map((stat) => (
                <m.div key={stat.id} variants={popIn} className="flex-1">
                  <Card className="min-w-[120px] gap-0 text-center">
                    <CardHeader className="pb-1">
                      <CardTitle className="text-3xl font-medium">
                        {stat.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      {stat.label}
                    </CardContent>
                  </Card>
                </m.div>
              ))}
            </m.div>

            {/* CTA Button */}
            <m.div variants={fadeUp}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/about">
                  More About Jacob
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </m.div>
          </m.div>

          {/* Image Section - Hidden on mobile */}
          <m.div
            className="relative hidden h-full w-full md:block md:w-[453px]"
            initial={initial}
            whileInView="visible"
            viewport={scrollViewport}
            variants={scaleUp}
          >
            {/* Background gradient circles */}
            <div className="bg-chart-2 absolute top-0 left-0 size-[400px] -translate-x-1/6 rounded-full opacity-100 blur-[70px] will-change-transform" />
            <div className="bg-chart-3 absolute right-0 bottom-0 size-[400px] -translate-x-1/4 translate-y-1/6 rounded-full opacity-100 blur-[70px] will-change-transform" />

            <div className="relative aspect-square size-full overflow-hidden rounded-xl">
              <Image
                src="/me.jpeg"
                alt="Jacob Rees"
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 100vw"
                className="rounded-xl object-cover"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
