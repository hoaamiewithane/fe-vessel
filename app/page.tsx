'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useBoundStore } from '@/app/store';

export default function Home() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const { auth } = useBoundStore(state => state);
  const router = useRouter();
  useEffect(() => {
    if (token) {
      document.cookie = `token=${token}`;
      router.push('/user');
    }
    if (auth) {
      router.push('/user');
    }
  }, [auth]);

  return null;
}
