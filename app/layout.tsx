import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { Raleway } from 'next/font/google';

import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';

import './globals.css';

const raleway = Raleway({
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'VendEase',
  description: 'VendEasy application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
