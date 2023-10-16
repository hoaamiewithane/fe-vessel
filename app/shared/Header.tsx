'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import UserNav from './UserNav';

const Header = () => {
  const { setTheme } = useTheme();

  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }

  const components: { title: string; description: string }[] = [
    {
      title: 'Create user',
      description: 'For sighted users to preview content available',
    },
    {
      title: 'Update user',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'View user',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Delete user',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
  ];

  const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = 'ListItem';

  const handleSetTheme = (theme: string) => {
    setTheme(theme)
  }

  return (
    <header className='py-4 border-b'>
      <div className='mx-8 flex items-center	justify-between'>
        <div className='flex gap-20'>
          <Image src='/logo.svg' alt='Logo' width={176} height={44} priority />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>User</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Vessel</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => navigate('/user')}>
                  User
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => navigate('/vessel')}>
                  Vessel
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex item-center justify-center	 gap-4 '>
          <UserNav />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <SunIcon
                  className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                <MoonIcon
                  className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='center'>
              <DropdownMenuItem onClick={() => handleSetTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSetTheme('dark')}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    </header>
  );
};

export default Header;
