'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { 
  X, Send, Loader2, AlertCircle, Upload, FileText, Trash2, 
  UserPlus, Coins, Wallet, Users, ArrowRight, CheckCircle2, 
  Settings, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  submitTransaction,
  submitBatchTransferEqual,
  submitBatchTransferDifferent,
  submitAddOwner
} from '@/lib/web3';
import { ethers, Interface } from 'ethers';

// --- CONFIGURATION CONSTANTS ---

// Common Tokens (using Celo testnet addresses for demonstration)
const TOKEN_OPTIONS = [
  { name: 'cUSD (Testnet)', symbol: 'cUSD', address: '0x874068565b93198084D1f6874E2f768E6B1516e8' },
  { name: 'cEUR (Testnet)', symbol: 'cEUR', address: '0x10c6609C0637B194e823A449b2c3a51D1415fF78' },
  { name: 'WETH', symbol: 'WETH', address: '0x4200000000000000000000000000000000000006' },
  { name: 'Custom Token', symbol: '???', address: 'custom' },
];

// Simplified DEX Platform Configuration (using placeholder/example addresses)
const DEX_PLATFORMS = [
    { 
        name: 'Uniswap (Celo)', 
        address: '0x62a8F0D03F66D6C655d81C9d3163E5d39A1e2226', // Example Uniswap Router on Celo
        abi: [ 
            "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)",
            "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)",
        ]
    },
    { 
        name: 'Ubeswap (Celo)', 
        address: '0x44760E45c711a37c4A462137F8E4d4d122245b63', // Example Ubeswap Router
        abi: [ 
            "function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)"
        ]
    },
];

// --- INTERFACES ---

interface SubmitTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  controllerAddress: string;
  defaultTab?: 'transfer' | 'custom' | 'owner';
}

// --- CALCDATA GENERATION FUNCTION (CONCEPTUAL) ---

/**
 * A conceptual function to generate calldata for a simple exact token swap.
 * NOTE: Real-world DEX routers often require complex path encoding and approval first.
 * This function is a simplified demo for the structure.
 * @param platform The DEX Router contract configuration.
 * @param tokenInAddress Address of the token being sold.
 * @param tokenOutAddress Address of the token being bought.
 * @param amountIn Amount of tokenIn (in base units, e.g., Wei).
 * @param recipient The address that receives the tokens (the controller).
 * @returns Calldata hex string.
 */
const generateSwapCalldata = (
    platform: typeof DEX_PLATFORMS[0], 
    tokenInAddress: string, 
    tokenOutAddress: string, 
    amountIn: string, 
    recipient: string
): string => {
    try {
        const routerInterface = new Interface(platform.abi);
        
        // This is a simplified path array for direct swap
        const path = [tokenInAddress, tokenOutAddress]; 
        const deadline = Math.floor(Date.now() / 1000) + (60 * 30); // 30 minutes from now
        const amountOutMin = 0; // Use 0 for demo, should be calculated for slippage in production

        const calldata = routerInterface.encodeFunctionData("swapExactTokensForTokens", [
            amountIn,     // amountIn (exact amount being sold)
            amountOutMin, // amountOutMin (minimum to accept)
            path,         // path (tokenIn -> tokenOut)
            recipient,    // recipient (the safe/controller)
            deadline,     // deadline
        ]);

        return calldata;

    } catch (e) {
        console.error("Calldata generation error:", e);
        throw new Error("Failed to generate swap calldata. Check token addresses.");
    }
};


export function SubmitTransactionModal({ 
  isOpen, 
  onClose, 
  controllerAddress,
  defaultTab = 'transfer' 
}: SubmitTransactionModalProps) {
  
  // --- State ---
  const [mode, setMode] = useState<'transfer' | 'custom' | 'owner'>(defaultTab);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Transfer
  const [txScope, setTxScope] = useState<'single' | 'batch'>('single');
  const [batchType, setBatchType] = useState<'equal' | 'different'>('equal');
  const [assetType, setAssetType] = useState<'eth' | 'token'>('eth');
  const [selectedToken, setSelectedToken] = useState<string>('');
  const [customTokenAddress, setCustomTokenAddress] = useState('');
  
  const [recipients, setRecipients] = useState(''); 
  const [amounts, setAmounts] = useState('');       
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  
  // Custom (Now simplified to only hold the final transaction output)
  const [customTo, setCustomTo] = useState('');
  const [customValue, setCustomValue] = useState('0');
  const [customData, setCustomData] = useState('0x');

  // DeFi Swap Form State (The only input in the "custom" tab)
  const [defiPlatform, setDefiPlatform] = useState<string>(DEX_PLATFORMS[0].address);
  const [tokenIn, setTokenIn] = useState<string>(TOKEN_OPTIONS[0].address);
  const [tokenOut, setTokenOut] = useState<string>(TOKEN_OPTIONS[1].address);
  const [swapAmount, setSwapAmount] = useState<string>('');

  // Add Owner
  const [newOwnerName, setNewOwnerName] = useState('');
  const [newOwnerAddress, setNewOwnerAddress] = useState('');
  const [newOwnerPct, setNewOwnerPct] = useState('');
  const [newOwnerRemovable, setNewOwnerRemovable] = useState(true);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Effects ---

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setMode(defaultTab);
    }
  }, [isOpen, defaultTab]);

  // Handle DeFi Swap Calldata Generation
  useEffect(() => {
    if (mode !== 'custom') return;

    // Reset Advanced fields when swap form changes
    setCustomTo('');
    setCustomValue('0');
    setCustomData('0x');
    
    // Check for minimum inputs
    if (!defiPlatform || !tokenIn || !tokenOut || !swapAmount || swapAmount === '0') {
        setError("Fill out all swap fields to generate the transaction.");
        return;
    }

    try {
        const platform = DEX_PLATFORMS.find(p => p.address === defiPlatform);
        if (!platform) throw new Error("Invalid platform selected.");
        
        // **IMPORTANT**: Convert float string to BigNumber string (Wei)
        const parsedAmount = ethers.parseEther(swapAmount).toString();

        const calldata = generateSwapCalldata(
            platform, 
            tokenIn, 
            tokenOut, 
            parsedAmount, 
            controllerAddress // The safe/controller is the recipient of the bought tokens
        );

        // Update the Advanced Fields (automatically)
        setCustomTo(defiPlatform);
        // Value is 0 unless swapping ETH, which is not supported in this simplified token swap function
        setCustomValue('0'); 
        setCustomData(calldata);
        setError(null);

    } catch (e: any) {
        setError(e.message || "Could not auto-generate swap transaction. Check inputs.");
        setCustomTo('');
        setCustomData('0x');
    }
  }, [defiPlatform, tokenIn, tokenOut, swapAmount, mode, controllerAddress]);


  if (!isOpen) return null;

  // --- Helpers ---
  const parseList = (str: string) => str.split(/[\n]+/).map(s => s.trim()).filter(s => s !== '');
  
  const getRecipientCount = () => parseList(recipients).length;
  
  const getTotalAmount = () => {
    const list = parseList(amounts);
    if (list.length === 0) return '0';
    if (txScope === 'batch' && batchType === 'equal') {
        return (parseFloat(list[0]) * getRecipientCount()).toFixed(4);
    }
    return list.reduce((acc, val) => acc + (parseFloat(val) || 0), 0).toFixed(4);
  };

  // --- File Handler (Unchanged) ---
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ... (File upload logic remains unchanged)
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    setError(null);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        if (!text) throw new Error("Empty file");

        const lines = text.split(/\r?\n/);
        const addrList: string[] = [];
        const amtList: string[] = [];

        lines.forEach((line) => {
          const trimmed = line.trim();
          if (!trimmed || /^address/i.test(trimmed)) return; // Skip empty or header

          const parts = trimmed.split(/[,;\t|]+/);
          const rawAddr = parts[0]?.trim();
          const rawAmt = parts[1]?.trim();

          if (rawAddr && (rawAddr.startsWith('0x') || rawAddr.includes('.'))) {
             addrList.push(rawAddr);
             if (rawAmt && !isNaN(parseFloat(rawAmt))) amtList.push(rawAmt);
             else if (batchType === 'different') amtList.push('0'); 
          }
        });

        if (addrList.length === 0) {
           setError("No valid addresses found in file.");
           setUploadedFileName(null);
           return;
        }

        setRecipients(addrList.join('\n'));
        
        if (batchType === 'different') {
          setAmounts(amtList.join('\n'));
        } else if (batchType === 'equal' && amtList.length > 0) {
          setAmounts(amtList[0]);
        }
      } catch (err) {
        setError("Failed to parse file.");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const clearFile = () => {
    setUploadedFileName(null);
    setRecipients('');
    setAmounts('');
    setError(null);
  };

  // --- Submit Logic (Updated for 'custom' simplification) ---
  const handleSubmit = async () => {
    setError(null);
    setIsPending(true);

    try {
      // 1. Add Owner
      if (mode === 'owner') {
        if (!ethers.isAddress(newOwnerAddress)) throw new Error("Invalid Address");
        if (!newOwnerName) throw new Error("Name required");
        await submitAddOwner(controllerAddress, newOwnerAddress, newOwnerName, Number(newOwnerPct), newOwnerRemovable);
      } 
      // 2. Custom (DeFi Swap)
      else if (mode === 'custom') {
        if (customData === '0x') {
            throw new Error("Transaction data is incomplete. Please check the swap inputs.");
        }
        await submitTransaction(controllerAddress, customTo, customValue || '0', false, ethers.ZeroAddress, customData || '0x');
      } 
      // 3. Transfer
      else {
        const recipientList = parseList(recipients);
        const amountList = parseList(amounts);
        
        if (recipientList.length === 0) throw new Error("No recipients entered");
        if (amountList.length === 0) throw new Error("No amounts entered");
        
        const isToken = assetType === 'token';
        let targetToken = ethers.ZeroAddress;

        if (isToken) {
          targetToken = selectedToken === 'custom' ? customTokenAddress : selectedToken;
          if (!ethers.isAddress(targetToken)) throw new Error("Invalid Token Address");
        }

        if (txScope === 'single') {
          await submitTransaction(controllerAddress, recipientList[0], amountList[0], isToken, targetToken, '0x');
        } else {
          if (batchType === 'equal') {
             await submitBatchTransferEqual(controllerAddress, targetToken, recipientList, amountList[0]);
          } else {
             if (recipientList.length !== amountList.length) throw new Error(`Count mismatch: ${recipientList.length} addrs vs ${amountList.length} amts`);
             await submitBatchTransferDifferent(controllerAddress, targetToken, recipientList, amountList);
          }
        }
      }
      onClose();
      // window.location.reload(); 
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to submit transaction');
    } finally {
      setIsPending(false);
    }
  };

  // Filter token options for 'token out' to ensure they aren't the same as 'token in'
  const tokenOutOptions = TOKEN_OPTIONS.filter(t => t.address !== tokenIn);
  const tokenInOptions = TOKEN_OPTIONS.filter(t => t.address !== tokenOut);


  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <Card className="w-full max-w-xl border-border bg-card max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-muted/20">
          <div>
            <h2 className="text-xl font-bold">New Proposal</h2>
            <p className="text-xs text-muted-foreground mt-1">Create a new action for owners to approve</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-destructive/10 hover:text-destructive">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6">
          <Tabs value={mode} onValueChange={(v) => setMode(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="transfer" className="gap-2"><Wallet className="h-4 w-4"/> Transfer</TabsTrigger>
              <TabsTrigger value="owner" className="gap-2"><Users className="h-4 w-4"/> Add Owner</TabsTrigger>
              <TabsTrigger value="custom" className="gap-2"><Zap className="h-4 w-4"/> DeFi Swap</TabsTrigger> {/* Renamed Advanced tab */}
            </TabsList>

            {/* ================= TRANSFER TAB ================= */}
            <TabsContent value="transfer" className="space-y-6 animate-in slide-in-from-left-2 duration-300">
              {/* (Transfer content remains here) */}
               {/* 1. Asset Selection Cards */}
               <div className="grid grid-cols-2 gap-4">
                <div 
                  className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-2 transition-all ${assetType === 'eth' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                  onClick={() => setAssetType('eth')}
                >
                   <div className={`p-2 rounded-full ${assetType === 'eth' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <Coins className="h-5 w-5" />
                   </div>
                   <span className="font-medium text-sm">Celo</span>
                </div>
                
                <div 
                   className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-2 transition-all ${assetType === 'token' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                   onClick={() => setAssetType('token')}
                >
                   <div className={`p-2 rounded-full ${assetType === 'token' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <Wallet className="h-5 w-5" />
                   </div>
                   <span className="font-medium text-sm">ERC20 Token</span>
                </div>
              </div>

              {/* Token Dropdown */}
              {assetType === 'token' && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                  <Label>Select Token</Label>
                  <Select value={selectedToken} onValueChange={setSelectedToken}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select a token..." />
                    </SelectTrigger>
                    <SelectContent>
                      {TOKEN_OPTIONS.map((t) => <SelectItem key={t.address} value={t.address}>{t.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {selectedToken === 'custom' && (
                    <Input placeholder="Contract Address (0x...)" value={customTokenAddress} onChange={(e) => setCustomTokenAddress(e.target.value)} className="mt-2"/>
                  )}
                </div>
              )}

              <div className="border-t border-border my-2"></div>

              {/* 2. Scope Selection (Visual) */}
              <div className="space-y-3">
                <Label>Who are you sending to?</Label>
                <div className="flex gap-3">
                   <Button 
                      variant={txScope === 'single' ? 'default' : 'outline'} 
                      className="flex-1 h-auto py-3 flex-col gap-1"
                      onClick={() => setTxScope('single')}
                   >
                      <span className="font-semibold">Single Person</span>
                      <span className="text-[10px] font-normal opacity-80">One recipient</span>
                   </Button>
                   <Button 
                      variant={txScope === 'batch' ? 'default' : 'outline'} 
                      className="flex-1 h-auto py-3 flex-col gap-1"
                      onClick={() => setTxScope('batch')}
                   >
                      <span className="font-semibold">Send to Many</span>
                      <span className="text-[10px] font-normal opacity-80">Batch / List</span>
                   </Button>
                </div>
              </div>

              {/* 3. Inputs */}
              {txScope === 'single' ? (
                 /* SINGLE INPUTS */
                 <div className="grid gap-4">
                    <div className="space-y-2">
                        <Label>Recipient Address</Label>
                        <Input placeholder="0x..." value={recipients} onChange={(e) => setRecipients(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label>Amount</Label>
                        <div className="relative">
                            <Input type="number" placeholder="0.00" value={amounts} onChange={(e) => setAmounts(e.target.value)} className="pl-8 font-mono"/>
                            <span className="absolute left-3 top-2.5 text-muted-foreground text-xs">$</span>
                        </div>
                    </div>
                 </div>
              ) : (
                 /* BATCH INPUTS */
                 <div className="space-y-4 animate-in fade-in">
                    
                    {/* Batch Type Config */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <label className={`flex items-center gap-2 p-3 rounded border cursor-pointer ${batchType === 'equal' ? 'border-primary bg-primary/5' : 'bg-background'}`}>
                           <input type="radio" name="btype" checked={batchType === 'equal'} onChange={() => setBatchType('equal')} className="accent-primary"/>
                           <span>Same amount for everyone</span>
                        </label>
                        <label className={`flex items-center gap-2 p-3 rounded border cursor-pointer ${batchType === 'different' ? 'border-primary bg-primary/5' : 'bg-background'}`}>
                           <input type="radio" name="btype" checked={batchType === 'different'} onChange={() => setBatchType('different')} className="accent-primary"/>
                           <span>Different amounts</span>
                        </label>
                    </div>

                    {/* File Upload Area */}
                    {!uploadedFileName ? (
                       <div 
                          className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/30 transition-colors"
                          onClick={() => fileInputRef.current?.click()}
                       >
                          <div className="bg-muted p-3 rounded-full mb-2">
                             <Upload className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <p className="text-sm font-medium">Click to upload CSV or Text file</p>
                          <p className="text-xs text-muted-foreground mt-1">Format: address, amount</p>
                          <input type="file" ref={fileInputRef} className="hidden" accept=".csv,.txt,.doc,.docx" onChange={handleFileUpload}/>
                       </div>
                    ) : (
                       <div className="flex items-center justify-between bg-primary/10 border border-primary/20 p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                             <FileText className="h-5 w-5 text-primary" />
                             <div>
                                <p className="text-sm font-medium text-primary">{uploadedFileName}</p>
                                <p className="text-xs text-muted-foreground">Loaded {getRecipientCount()} addresses</p>
                             </div>
                          </div>
                          <Button variant="ghost" size="icon" onClick={clearFile} className="text-destructive hover:bg-destructive/10">
                             <Trash2 className="h-4 w-4" />
                          </Button>
                       </div>
                    )}

                    {/* Manual Edit Toggle Details */}
                    <div className="space-y-2">
                       <div className="flex justify-between items-center">
                          <Label className="text-xs text-muted-foreground uppercase tracking-wider">Or enter manually</Label>
                       </div>
                       <div className="grid grid-cols-3 gap-2">
                          <Textarea 
                             placeholder="0x123...&#10;0x456..." 
                             value={recipients} 
                             onChange={(e) => setRecipients(e.target.value)}
                             className="col-span-2 h-24 font-mono text-xs resize-none bg-muted/20"
                          />
                          <Textarea 
                             placeholder={batchType === 'equal' ? "1.5" : "1.5\n2.0"} 
                             value={amounts} 
                             onChange={(e) => setAmounts(e.target.value)}
                             className="col-span-1 h-24 font-mono text-xs resize-none bg-muted/20"
                          />
                       </div>
                    </div>
                 </div>
              )}
            </TabsContent>

            {/* ================= OWNER TAB ================= */}
            <TabsContent value="owner" className="space-y-5 animate-in slide-in-from-right-2 duration-300">
              {/* (Owner content remains here) */}
              <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                 <UserPlus className="h-5 w-5 text-blue-600 mt-0.5" />
                 <div className="text-sm text-blue-900 dark:text-blue-200">
                    <p className="font-semibold">Add New Signer</p>
                    <p className="opacity-90 text-xs mt-0.5">This creates a proposal. Other owners must approve it before the new signer is added.</p>
                 </div>
              </div>
              
              <div className="grid gap-4">
                <div className="space-y-2">
                   <Label>New Owner Address</Label>
                   <Input placeholder="0x..." value={newOwnerAddress} onChange={(e) => setNewOwnerAddress(e.target.value)} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label>Role / Name</Label>
                      <Input placeholder="e.g. CFO" value={newOwnerName} onChange={(e) => setNewOwnerName(e.target.value)} />
                   </div>
                   <div className="space-y-2">
                      <Label>Voting Power (%)</Label>
                      <Input type="number" value={newOwnerPct} onChange={(e) => setNewOwnerPct(e.target.value)} />
                   </div>
                </div>

                <div className="flex items-center space-x-2 border p-3 rounded-lg">
                   <Checkbox id="removable" checked={newOwnerRemovable} onCheckedChange={(c) => setNewOwnerRemovable(!!c)} />
                   <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="removable" className="cursor-pointer">Is Removable?</Label>
                      <p className="text-xs text-muted-foreground">If unchecked, this owner can never be removed.</p>
                   </div>
                </div>
              </div>
            </TabsContent>

            {/* ================= CUSTOM/DEFI SWAP TAB ================= */}
            <TabsContent value="custom" className="space-y-4 animate-in fade-in">
                
                <div className="space-y-4 p-4 border rounded-lg bg-primary/5 animate-in fade-in">
                    <p className="font-semibold flex items-center gap-2"><Zap className="h-5 w-5"/> Automated Token Swap</p>
                    
                    <div className="space-y-2">
                        <Label>Select Platform</Label>
                        <Select value={defiPlatform} onValueChange={setDefiPlatform}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a DEX..." />
                            </SelectTrigger>
                            <SelectContent>
                                {DEX_PLATFORMS.map((p) => (
                                    <SelectItem key={p.address} value={p.address}>{p.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-1 space-y-2">
                            <Label>Amount</Label>
                            <Input type="number" placeholder="10.00" value={swapAmount} onChange={(e) => setSwapAmount(e.target.value)} />
                        </div>
                        <div className="col-span-2 space-y-2">
                            <Label>Token In (To Sell)</Label>
                            <Select value={tokenIn} onValueChange={setTokenIn}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Token In..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {tokenInOptions.map((t) => <SelectItem key={t.address} value={t.address}>{t.name}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label>Token Out (To Buy)</Label>
                        <Select value={tokenOut} onValueChange={setTokenOut}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Token Out..." />
                            </SelectTrigger>
                            <SelectContent>
                                {tokenOutOptions.map((t) => <SelectItem key={t.address} value={t.address}>{t.name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-800 dark:text-yellow-300">
                        NOTE: This only generates the **swap call**. You must submit a separate **Approval** transaction if the contract isn't already approved to spend the **Token In** amount.
                    </div>
                </div>

                {/* --- GENERATED TRANSACTION DETAILS (READ-ONLY) --- */}
                <div className="space-y-4 pt-2">
                    <div className="space-y-1">
                       <Label>Target Contract</Label>
                       <Input 
                          value={customTo} 
                          readOnly 
                          className="bg-muted font-mono text-sm"
                          placeholder="Platform Address (0x...)"
                       />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-1 space-y-1">
                           <Label>Value (Celo)</Label>
                           <Input 
                              type="text" // Use text to avoid number formatting issues
                              value={customValue} 
                              readOnly 
                              className="bg-muted font-mono text-sm"
                           />
                        </div>
                        <div className="col-span-2 space-y-1">
                            <Label>Calldata Status</Label>
                            <div className={`p-2 rounded text-xs text-center font-semibold ${customData === '0x' ? 'bg-red-500/10 text-red-600 border border-red-500/20' : 'bg-green-500/10 text-green-600 border border-green-500/20'}`}>
                                {customData === '0x' ? 'Awaiting Input' : 'Calldata Generated'}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1">
                       <Label>Calldata (Function Call)</Label>
                       <Textarea 
                          value={customData} 
                          readOnly 
                          className="font-mono text-xs min-h-[100px] bg-muted break-all"
                          placeholder="Generated calldata (0x...)"
                       />
                    </div>
                </div>

            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/20 flex flex-col gap-4">
          
          {/* Summary Bar (Transfer Mode Only) */}
          {mode === 'transfer' && (
             <div className="flex items-center justify-between text-sm px-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                   <Users className="h-4 w-4" />
                   <span>Recipients: <span className="font-mono font-bold text-foreground">{getRecipientCount()}</span></span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                   <Coins className="h-4 w-4" />
                   <span>Total: <span className="font-mono font-bold text-foreground">{getTotalAmount()}</span></span>
                </div>
             </div>
          )}

          {/* Errors */}
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-600 flex gap-2 items-start">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5"/>
              <span className="break-all">{error}</span>
            </div>
          )}

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={onClose} disabled={isPending}>
              Cancel
            </Button>
            {/* Disable submission if pending or if in custom mode with no generated data */}
            <Button className="flex-[2]" onClick={handleSubmit} disabled={isPending || (mode === 'custom' && customData === '0x')}>
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
              Submit Proposal
            </Button>
          </div>
        </div>

      </Card>
    </div>
  );
}