'use client';

import { useEffect, useState, useCallback } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// Celo Sepolia Chain Configuration
const CELO_SEPOLIA_CHAIN_ID = 11142220;
const CELO_SEPOLIA_HEX = '0xaa045c'; // 84532 converted to hex

export function NetworkSwitchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentChainId, setCurrentChainId] = useState<number | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  // Function to check connection and chain ID
  const checkNetworkStatus = useCallback(async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      setIsConnected(false);
      setCurrentChainId(null);
      return;
    }

    try {
      // Check if wallet is connected
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const connected = accounts && accounts.length > 0;
      setIsConnected(connected);

      if (connected) {
        // Get current chain ID
        const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
        const chainIdDec = parseInt(chainIdHex, 16);
        setCurrentChainId(chainIdDec);

        // Show modal if connected but on wrong chain
        if (chainIdDec !== CELO_SEPOLIA_CHAIN_ID) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      } else {
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Error checking network status:', error);
      setIsConnected(false);
      setCurrentChainId(null);
      setIsOpen(false);
    }
  }, []);

  // Handler for network switch
  const handleSwitchNetwork = async () => {
    if (!window.ethereum) {
      console.error('MetaMask or similar wallet not found.');
      return;
    }

    try {
      // Switch network using HEX ID
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CELO_SEPOLIA_HEX }],
      });
      
      setIsOpen(false); 
    } catch (error: any) {
      // 4902: Chain hasn't been added to MetaMask
      if (error.code === 4902) {
        console.log('Chain not recognized, attempting to add...');
        await addCeloSepoliaChain();
      } else {
        console.error('Failed to switch network:', error);
      }
    }
  };

  // Helper function to add the chain if not present
  const addCeloSepoliaChain = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: CELO_SEPOLIA_HEX,
            chainName: 'Celo Sepolia',
            nativeCurrency: {
              name: 'Ether',
              symbol: 'ETH',
              decimals: 18,
            },
            rpcUrls: ['https://forno.celo-sepolia.celo-testnet.org'], 
            blockExplorerUrls: ['https://sepolia.celoscan.io'],
          },
        ],
      });
    } catch (addError) {
      console.error('Failed to add Celo Sepolia:', addError);
    }
  };

  useEffect(() => {
    checkNetworkStatus();

    if (!window.ethereum) return;

    // Reload page on network/account change to ensure clean state
    const handleChainChanged = () => window.location.reload();
    const handleAccountsChanged = () => window.location.reload();

    window.ethereum.on('chainChanged', handleChainChanged);
    window.ethereum.on('accountsChanged', handleAccountsChanged);

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [checkNetworkStatus]);

  // Render nothing if not connected or already on the correct chain
  if (!isConnected || currentChainId === CELO_SEPOLIA_CHAIN_ID) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <AlertDialogTitle>Wrong Network</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="pt-2">
            You are currently connected to the wrong network. Please switch to <strong>Celo Sepolia</strong> to continue using the Multisig Factory.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="bg-muted p-3 rounded-lg text-sm border border-border">
          <div className="flex justify-between mb-1">
             <span className="text-muted-foreground">Required Network:</span>
             <span className="font-semibold text-foreground">Celo Sepolia</span>
          </div>
          <div className="flex justify-between mb-1">
             <span className="text-muted-foreground">Chain ID:</span>
             <span className="font-mono text-xs">{CELO_SEPOLIA_CHAIN_ID}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border/50 mt-2">
             <span className="text-muted-foreground">Your Connection:</span>
             <span className="font-mono text-xs text-orange-500">
                Chain ID: {currentChainId || 'Unknown'}
             </span>
          </div>
        </div>

        <div className="flex gap-3 justify-end mt-2">
          {/* Note: We usually don't want a cancel button here if the app strictly requires the network, 
              but keeping it for UX flexibility */}
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction onClick={handleSwitchNetwork}>
            Switch to Celo Sepolia
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}