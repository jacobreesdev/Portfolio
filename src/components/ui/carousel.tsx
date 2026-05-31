'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/lib/utils';
import {
  type CarouselApi,
  CarouselContext,
  type CarouselProps,
} from './carousel-context';

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'section'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  const setApiRef = React.useRef(setApi);
  React.useEffect(() => {
    setApiRef.current = setApi;
  }, [setApi]);

  React.useEffect(() => {
    if (!api) return;
    setApiRef.current?.(api);
    const handler = (instance: CarouselApi) => {
      if (!instance) return;
      setCanScrollPrev(instance.canScrollPrev());
      setCanScrollNext(instance.canScrollNext());
    };
    handler(api);
    api.on('reInit', handler);
    api.on('select', handler);

    return () => {
      api?.off('select', handler);
      api?.off('reInit', handler);
    };
  }, [api]);

  const contextValue = React.useMemo(
    () => ({
      carouselRef,
      api,
      opts,
      orientation:
        orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [
      carouselRef,
      api,
      opts,
      orientation,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    ],
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <section
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  );
}

export { Carousel };
export { CarouselContent } from './carousel-content';
export { CarouselItem } from './carousel-item';
export { useCarousel } from './carousel-context';
export type { CarouselApi } from './carousel-context';
