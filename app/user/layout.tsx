import type { Metadata } from 'next';
import React from 'react';
import Header from '../shared/Header';


export const metadata: Metadata = {
  title: 'User management',
  description: 'User management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
