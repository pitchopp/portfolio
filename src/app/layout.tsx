import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aminesghir.com'),
  title: {
    default: 'Amine Sghir - Full Stack Developer & Data Engineer',
    template: '%s | Amine Sghir',
  },
  description: 'Portfolio of Amine Sghir, Full Stack Developer & Data Engineer with 8+ years experience in Data, AI, LLM, Python, and Cloud technologies.',
  keywords: ['Full Stack Developer', 'Data Engineer', 'Python', 'Next.js', 'AWS', 'AI', 'LLM', 'Paris', 'Freelance'],
  authors: [{ name: 'Amine Sghir' }],
  creator: 'Amine Sghir',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    siteName: 'Amine Sghir Portfolio',
    title: 'Amine Sghir - Full Stack Developer & Data Engineer',
    description: 'Portfolio of Amine Sghir, Full Stack Developer & Data Engineer with 8+ years experience.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amine Sghir - Full Stack Developer & Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amine Sghir - Full Stack Developer & Data Engineer',
    description: 'Portfolio of Amine Sghir, Full Stack Developer & Data Engineer.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
