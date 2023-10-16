import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import Header from '../shared/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vessel management',
  description: 'Vessel management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
