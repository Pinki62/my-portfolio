import type { Metadata } from 'next';
import { Manrope, DM_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const mono = DM_Mono({ variable: '--font-mono', weight: ['300','400','500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Full Stack Web Developer | Portfolio',
  description: 'Portfolio of a Full Stack Web Developer specializing in Angular, Node.js, and MongoDB.',
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'Full Stack Web Developer',
    description: 'Angular · Node.js · MongoDB',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Full Stack Web Developer portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Web Developer',
    description: 'Angular · Node.js · MongoDB',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${mono.variable}`}>{children}</body></html>;
}
