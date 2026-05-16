'use client';

import * as m from 'motion/react-m';
import { getImageProps } from 'next/image';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import ReactDOM from 'react-dom';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const EMPTY_PRELOAD_IMAGES: readonly string[] = [];

interface ProjectPageAnimatedProps {
  backButton: ReactNode;
  sidebar: ReactNode;
  mainContent: ReactNode;
  preloadImages?: readonly string[];
}

function preloadHighResImages(images: readonly string[]) {
  for (const src of images) {
    const { props } = getImageProps({
      src,
      alt: '',
      width: 1920,
      height: 1080,
    });
    ReactDOM.preload(props.src, {
      as: 'image',
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
      fetchPriority: 'low',
    });
  }
}

export function ProjectPageAnimated({
  backButton,
  sidebar,
  mainContent,
  preloadImages = EMPTY_PRELOAD_IMAGES,
}: ProjectPageAnimatedProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleAnimationComplete = useCallback(() => {
    preloadHighResImages(preloadImages);
  }, [preloadImages]);

  const reducedMotionPreloaderRef = useCallback(
    (node: HTMLElement | null) => {
      if (node) preloadHighResImages(preloadImages);
    },
    [preloadImages],
  );

  if (prefersReducedMotion) {
    return (
      <section ref={reducedMotionPreloaderRef} className="relative z-10 py-16">
        <div className="container max-w-7xl">
          {backButton}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            <div className="lg:col-span-1">{sidebar}</div>
            <div className="lg:col-span-3">{mainContent}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16">
      <div className="container max-w-7xl">
        <m.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* Back Button */}
          <m.div variants={fadeUp}>{backButton}</m.div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            {/* Sidebar (Left) */}
            <m.div className="lg:col-span-1" variants={fadeUp}>
              {sidebar}
            </m.div>

            {/* Main Content (Right) */}
            <m.div className="lg:col-span-3" variants={fadeUp}>
              {mainContent}
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
