'use client';

import { X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import { useEffect, useEffectEvent, useReducer } from 'react';

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  showCaption?: boolean;
}

type ZoomState = {
  isZoomed: boolean;
  origin: { x: number; y: number };
  imageLoaded: boolean;
};

type ZoomAction =
  | { type: 'reset' }
  | { type: 'toggleZoom'; origin: { x: number; y: number } }
  | { type: 'collapseZoom' }
  | { type: 'imageLoaded' };

const INITIAL_ZOOM_STATE: ZoomState = {
  isZoomed: false,
  origin: { x: 50, y: 50 },
  imageLoaded: false,
};

function zoomReducer(state: ZoomState, action: ZoomAction): ZoomState {
  switch (action.type) {
    case 'reset':
      return INITIAL_ZOOM_STATE;
    case 'toggleZoom':
      return { ...state, isZoomed: !state.isZoomed, origin: action.origin };
    case 'collapseZoom':
      return { ...state, isZoomed: false };
    case 'imageLoaded':
      return { ...state, imageLoaded: true };
  }
}

export function ImageLightbox({
  src,
  alt,
  isOpen,
  onClose,
  showCaption = true,
}: ImageLightboxProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [{ isZoomed, origin: zoomOrigin, imageLoaded }, dispatch] = useReducer(
    zoomReducer,
    INITIAL_ZOOM_STATE,
  );

  useEffect(() => {
    if (!isOpen) {
      queueMicrotask(() => dispatch({ type: 'reset' }));
    }
  }, [isOpen]);

  const handleEscapePress = useEffectEvent(() => {
    if (isZoomed) {
      dispatch({ type: 'collapseZoom' });
    } else {
      onClose();
    }
  });

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleEscapePress();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    dispatch({ type: 'toggleZoom', origin: { x, y } });
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.4,
            ease: [0.32, 0.72, 0, 1], // Custom easing for cinematic feel
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Backdrop - Cinematic depth-of-field blur */}
          <m.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            initial={
              prefersReducedMotion
                ? { backdropFilter: 'blur(8px)' }
                : { backdropFilter: 'blur(0px)' }
            }
            animate={{ backdropFilter: 'blur(8px)' }}
            exit={
              prefersReducedMotion
                ? { backdropFilter: 'blur(8px)' }
                : { backdropFilter: 'blur(0px)' }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              ease: [0.32, 0.72, 0, 1],
            }}
          />

          {/* Close button - Fades in after image */}
          <m.button
            onClick={onClose}
            initial={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.25,
              delay: prefersReducedMotion ? 0 : 0.15, // Appears after image starts animating
              ease: [0.32, 0.72, 0, 1],
            }}
            className="absolute top-4 right-4 z-10 grid size-11 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/60 focus:ring-2 focus:ring-white/30 focus:outline-none sm:top-8 sm:right-8"
            aria-label="Close image preview"
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            <X className="size-5" strokeWidth={2.5} />
          </m.button>

          {/* Hidden image to preload */}
          {!imageLoaded && (
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="invisible h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
              onLoad={() => dispatch({ type: 'imageLoaded' })}
            />
          )}

          {/* Image container - only animate when loaded */}
          {imageLoaded && (
            <m.div
              initial={
                prefersReducedMotion
                  ? { scale: 1, opacity: 1, y: 0 }
                  : { scale: 0.92, opacity: 0, y: 20 }
              }
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { scale: 1, opacity: 1, y: 0 }
                  : { scale: 0.88, opacity: 0, y: -10 }
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                ease: [0.32, 0.72, 0, 1],
                opacity: { duration: prefersReducedMotion ? 0 : 0.3 },
              }}
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <m.div
                className="relative cursor-zoom-in overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/10 dark:bg-zinc-950"
                onClick={handleImageClick}
                animate={{ scale: isZoomed ? 2 : 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                  transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={1920}
                  height={1080}
                  className="h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
                />
              </m.div>

              {/* Caption - Delayed elegant fade (only after image loads) */}
              {showCaption && alt && (
                <m.p
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -5 }
                  }
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.2,
                    duration: prefersReducedMotion ? 0 : 0.4,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="mt-6 text-center text-sm font-light tracking-wide text-white/60 italic"
                >
                  {alt}
                </m.p>
              )}
            </m.div>
          )}
        </m.div>
      )}
    </AnimatePresence>
  );
}
