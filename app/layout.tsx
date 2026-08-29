import type { Metadata } from 'next';
import { Manrope, DM_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const mono = DM_Mono({ variable: '--font-mono', weight: ['300','400','500'], subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://full-stack-developer-portfolio.pinkukaur0803.chatgpt.site'),
  title: 'Pinki Kaur | Full Stack Web Developer',
  description: 'Portfolio of Pinki Kaur, a Full Stack Web Developer specializing in Angular, Node.js, and MongoDB.',
  openGraph: {
    title: 'Pinki Kaur | Full Stack Web Developer',
    description: 'Angular · Node.js · MongoDB',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Pinki Kaur — Full Stack Web Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinki Kaur | Full Stack Web Developer',
    description: 'Angular · Node.js · MongoDB',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${mono.variable}`}>{children}</body></html>;
}