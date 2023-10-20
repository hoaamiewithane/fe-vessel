'use client';
import { MainNav } from '@/components/main-nav';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icons } from './icons';
import { ModeToggle } from './mode-toggle';
import { usePathname } from 'next/navigation';
import UserNav from './user-nav';

export function SiteHeader() {
  const pathname = usePathname();

  return pathname.startsWith('/login') ? null : (
    <header
      className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center gap-2'>
            <UserNav />
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'w-9 px-0 cursor-pointer',
              )}
            >
              <Icons.noti />
            </div>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
