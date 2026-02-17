'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ConnectWallet } from './connectwallet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Create Treasury', href: '/create' },
  { label: 'Treasuries', href: '/multisigs' },
  { label: 'Docs', href: '/docs' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark for your design
  const pathname = usePathname();

  // Simple, robust theme toggler that doesn't need a Provider
  useEffect(() => {
    // 1. Read from localStorage or system on mount
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved === 'dark' || (!saved && systemDark);
    
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    document.documentElement.classList.toggle('dark', nextState);
    localStorage.setItem('theme', nextState ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-black dark:border-white bg-white/80 dark:bg-[#080808]/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
  {/* Light Mode Image: Visible by default, hidden in dark mode */}
            <Image
              src="/light.png"
              alt="Sigma Protocol Logo (Light)"
              width={90}
              height={90}
              className="object-cover p-1 block dark:hidden" 
            />

            {/* Dark Mode Image: Hidden by default, visible in dark mode */}
            <Image
              src="/logo.png"
              alt="Sigma Protocol Logo (Dark)"
              width={90}
              height={90}
              className="object-cover p-1 hidden dark:block"
            />
          </Link>
              
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-xs font-black uppercase italic tracking-widest transition-all",
                    isActive 
                      ? "text-primary underline decoration-2 underline-offset-4" 
                      : "text-muted-foreground hover:text-black dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-none border-2 border-transparent hover:border-black dark:hover:border-white transition-all"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <div className="hidden sm:block">
              <ConnectWallet />
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-none border-2 border-black dark:border-white" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b-2 border-black dark:border-white bg-white dark:bg-[#080808] animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={cn(
                  "text-2xl font-black uppercase italic tracking-tighter flex items-center justify-between",
                  pathname === item.href ? "text-primary" : "text-black dark:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 opacity-50" />
              </Link>
            ))}
            <div className="pt-4 border-t border-black/10 dark:border-white/10">
              <ConnectWallet />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}