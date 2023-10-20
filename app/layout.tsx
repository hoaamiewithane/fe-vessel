import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { PropsWithChildren } from 'react';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { TanstackProvider } from '@/components/tanstack-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cyber logitec',
  description: 'Cyber logitec',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
    <TanstackProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem={false}
        disableTransitionOnChange
      >
        <SiteHeader />
        {children}
      </ThemeProvider>
    </TanstackProvider>

    </body>
    </html>
  );
}
