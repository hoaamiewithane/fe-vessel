'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

export function TanstackProvider({ children }: PropsWithChildren) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return <QueryClientProvider client={client}>
    {children}
  </QueryClientProvider>;
}
