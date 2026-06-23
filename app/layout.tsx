import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import LenisWrapper from '@/components/LenisWrapper';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AURA Ring 2',
  description: 'Wellness inspired by nature.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased font-sans bg-dawn-50 text-ink-900 overflow-x-hidden">
        <LenisWrapper>
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
