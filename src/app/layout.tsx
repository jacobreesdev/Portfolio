import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import ScrollToTop from '@/components/scroll-to-top';
import { StyleGlideProvider } from '@/components/styleglide-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jacobrees.dev'),
  title: {
    default: 'Jacob Rees | Front-End & UX Engineer',
    template: '%s | Jacob Rees',
  },
  description:
    'Front-End & UX Engineer shipping React and TypeScript products from Figma to production, with WCAG 2.2 AA accessibility and A/B-tested conversions. Built Vepple (1M+ students, 12.13 pages per session) and Pavers (75+ components powering 160+ shops).',
  keywords: [
    'Front-End Engineer',
    'UX Engineer',
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'JavaScript',
    'Accessibility',
    'WCAG',
    'A/B Testing',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Jacob Rees' }],
  creator: 'Jacob Rees',
  publisher: 'Jacob Rees',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/favicon.png' }],
    shortcut: [{ url: '/favicon.png' }],
  },
  openGraph: {
    title: 'Jacob Rees | Front-End & UX Engineer',
    description:
      'Front-End & UX Engineer shipping React and TypeScript products from Figma to production. Built Vepple (1M+ students, 12.13 pages per session) and Pavers (75+ components powering 160+ shops).',
    siteName: 'Jacob Rees',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Rees - Front-End & UX Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Rees | Front-End & UX Engineer',
    description:
      'Front-End & UX Engineer shipping React and TypeScript products from Figma to production. Built Vepple (1M+ students, 12.13 pages per session) and Pavers (75+ components powering 160+ shops).',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*14)] lg:[--header-height:calc(var(--spacing)*23)]',
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ScrollToTop />
          <StyleGlideProvider />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
