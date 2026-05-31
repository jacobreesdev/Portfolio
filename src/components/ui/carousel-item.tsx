'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { useCarousel } from './carousel-context';

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel();

  return (
    // role="group" + aria-roledescription="slide" is the canonical WAI-ARIA
    // carousel pattern; there is no semantic HTML tag for a slide.
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
}

export { CarouselItem };
