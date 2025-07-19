'use client';

import { AlignJustify, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useTheme } from '@/context/theme-provider';

export function HeaderComponent() {
  const { toggleTheme, theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 1280;

  useEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <header className="flex w-full max-w-[1440px] items-center justify-between">
      <h1 className="flex gap-0 font-bold font-inter text-3xl">
        YC<strong className="text-purple-900">.</strong>
      </h1>
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignJustify size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem scrollTo="projects">Projetos</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about">Sobre</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="w-full">
              <Button onClick={toggleTheme} variant="ghost">
                {theme === 'dark' ? (
                  <Moon className="size-6" />
                ) : (
                  <Sun className="size-6" />
                )}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Button
              asChild
              className="text-black text-md dark:text-primary"
              variant="link"
            >
              <Link href="/">Home</Link>
            </Button>
          </li>

          <li>
            <Button
              asChild
              className="text-black text-md dark:text-primary"
              variant="link"
            >
              <Link href="#projects">Projetos</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="text-black text-md dark:text-primary"
              variant="link"
            >
              <Link href="/about">Sobre</Link>
            </Button>
          </li>

          <li className="mt-auto">
            <Button
              className="hover:scale-110 hover:bg-transparent dark:hover:bg-transparent"
              onClick={toggleTheme}
              variant="ghost"
            >
              {theme === 'dark' ? (
                <Moon className="size-6" />
              ) : (
                <Sun className="size-6" />
              )}
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
}
