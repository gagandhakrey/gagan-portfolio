import type { Metadata } from 'next';
import './globals.css';
import { generateMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
        />
        <link 
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans min-h-screen">
        {/* Enhanced liquid glass background orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/12 dark:from-primary/5 dark:to-accent/10"></div>
          
          {/* Animated floating orbs with liquid glass effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 dark:from-primary/20 dark:to-accent/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 animate-pulse"></div>
          
          <div 
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/25 to-primary/30 dark:from-accent/20 dark:to-primary/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-pulse" 
            style={{animationDelay: '2s'}}
          ></div>
          
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/25 dark:from-primary/10 dark:to-accent/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20 animate-pulse" 
            style={{animationDelay: '4s'}}
          ></div>
          
          {/* Additional smaller orbs for more depth */}
          <div 
            className="absolute top-1/6 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-400/15 to-blue-400/20 dark:from-accent/10 dark:to-primary/8 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-30 dark:opacity-20 animate-pulse" 
            style={{animationDelay: '1s'}}
          ></div>
          
          <div 
            className="absolute bottom-1/6 left-1/6 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-400/15 dark:from-primary/8 dark:to-accent/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-35 dark:opacity-25 animate-pulse" 
            style={{animationDelay: '3s'}}
          ></div>
        </div>
        
        <Header />
        {children}
      </body>
    </html>
  );
} 