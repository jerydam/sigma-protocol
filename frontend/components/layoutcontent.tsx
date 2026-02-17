
// New client wrapper component (put this in a separate file or inline if small)
'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { Web3Provider } from '@/components/providers/web3provider';
import { NetworkSwitchModal } from '@/components/modals/network-switch-modal';
import { Navbar } from '@/components/Navbar';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ['wallet', 'email', 'google', 'github'],
        appearance: {
          theme: 'dark',
          accentColor: '#7B2CBF',
          logo: '/logo.png',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        supportedChains: [
          {
            id: 11142220,
            name: 'Celo Sepolia',
            network: 'celo-sepolia',
            nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
            rpcUrls: {
              default: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
              public: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
            },
            blockExplorers: {
              default: { name: 'Celo Explorer', url: 'https://celo-sepolia.blockscout.com' },
            },
            testnet: true,
          },
        ],
        defaultChain: { id: 11142220 },
      }}
    >
      <Web3Provider>
        <NetworkSwitchModal />
        <Navbar />
        {children}
      </Web3Provider>
    </PrivyProvider>
  );
}

// Server-rendered layout content (keeps structure clean)
export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}