'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useBoundStore } from '@/app/store';

export default function Home() {
  const { auth } = useBoundStore(state => state);
  const router = useRouter();
  useEffect(() => {
    router.push('/user');
  }, []);

  return null;
}
