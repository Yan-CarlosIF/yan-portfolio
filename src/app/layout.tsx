import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio Yan',
  description: 'Projects and contact',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} scroll-smooth antialiased`}
      >
        <ThemeProvider>
          <div
            className="flex min-h-screen flex-col items-center p-6 lg:p-12"
            id="home"
          >
            <HeaderComponent />
            {children}
            <FooterComponent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
