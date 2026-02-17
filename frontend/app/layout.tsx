import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { ClientProviders, LayoutContent } from '@/components/layoutcontent';

// Fonts setup
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

// Metadata stays here — this file is a Server Component (no 'use client')
export const metadata: Metadata = {
  title: 'Sigma Protocol – Secure Treasury Management',
  description:
    'Percentage-based multisig treasuries with weighted governance, batch execution, and abstracted vaults. Built for DAOs and companies on Celo.',
  generator: 'Sigma Protocol',
  icons: {
    icon: [
      { url: '/favicon.png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon.png', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon.png', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* All client providers and interactive stuff go in ClientProviders */}
        <ClientProviders>
          <LayoutContent>{children}</LayoutContent>
        </ClientProviders>

        <Analytics />
      </body>
    </html>
  );
}
