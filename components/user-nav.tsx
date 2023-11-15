'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { resetAllSlices, useBoundStore } from '@/app/store';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function UserNav() {
  const router = useRouter();
  const me = useBoundStore(state => state.me);
  const handleLogOut = () => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    resetAllSlices();
  };

  const { setAuth, setMe, auth } = useBoundStore(state => state);

  const handleFetchMe = async () => {
    setTimeout(() => {
      setAuth(true);
      setMe({ email: 'nguyendanghoaa@gmail.com' });
    }, 1500);
  };
  useEffect(() => {
    const token = Cookies.get('token');
    if (!auth && token) {
      console.log('fetch me');
      handleFetchMe().then();
    }
  }, [auth, Cookies.get('token')]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='cursor-pointer '>
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='center' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{me?.email}</p>
            <p className='text-xs leading-none text-muted-foreground'>
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/profile')}>
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
