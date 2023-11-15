'use client';
import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { useBoundStore } from '@/app/store';
import { useQuery } from '@tanstack/react-query';
import httpClient from '@/configs/AxiosClient';

const SiteHeader = dynamic(() => import('./site-header'), { ssr: false });

interface IMe {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

interface IProfile {
  id: number;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
}

interface IList extends IMe {
  profile: IProfile;
}


const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { auth, setMe } = useBoundStore(state => state);

  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: () => httpClient.get<IMe>('/auth/me'),
    onSuccess: (data) => {
      setMe({
        email: data.data.email,
        role: data.data.role,
        username: data.data.username,
      });
    },
    enabled: auth,
  });

  const { data: listUser } = useQuery({
    queryKey: ['list-user'],
    queryFn: () => httpClient.get<{ data: IList[] }>('/user/list-user'),
    onSuccess: (data) => {
      console.log(data);
    },
    enabled: auth,
  });


  console.log({ listUser });

  return (
    <>
      {data && <SiteHeader />}
      {children}
    </>
  );
};

export default ProtectedRoute;
