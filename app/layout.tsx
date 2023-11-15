import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { PropsWithChildren } from 'react';
import './globals.css';
import { TanstackProvider } from '@/components/tanstack-provider';
import ProtectedRoute from '@/components/ProtectedRoute';

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
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
      </ThemeProvider>
    </TanstackProvider>

    </body>
    </html>
  );
}
