import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import ToasterContext from './context/toaster';
import AuthContext from './context/auth-provider';

import './globals.css';

const sans = Open_Sans({
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
      <body className={sans.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
