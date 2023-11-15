'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>
          Cyber logitec
        </span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href={'/user'}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/user' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          User
        </Link>
        <Link
          href={'/vessel'}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/vessel'
              ? 'text-foreground'
              : 'text-foreground/60',
          )}
        >
          Vessel
        </Link>
      </nav>
    </div>
  );
}
