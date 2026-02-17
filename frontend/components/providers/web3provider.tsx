// components/Web3Provider.tsx (or lib/providers.tsx)
'use client';

import { ReactNode } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { Loader2 } from 'lucide-react';

interface Web3ProviderProps {
  children: ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const { ready, authenticated } = usePrivy();

  if (!ready) {
    return (
      <div className="min-h-screen bg-linear-to-br from-background to-black flex items-center justify-center flex-col gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg font-medium tracking-wider text-primary/80 animate-pulse">
          Loading Sigma Protocol...
        </p>
      </div>
    );
  }

  // You can show a gentle "connect to continue" overlay if !authenticated, but for now we render children
  // (your pages can handle connect prompts)
  return <>{children}</>;
}