'use client';

import { useBoundStore } from '@/app/store';
import { MainNav } from '@/components/main-nav';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Icons } from './icons';
import UserNav from '@/components/user-nav';

const SiteHeader = () => {
  const auth = useBoundStore(state => state.auth);
  
  return auth && (
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
};

export default SiteHeader;
