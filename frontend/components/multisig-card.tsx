'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MultiSig } from '@/lib/types';
import { Copy, Wallet, ShieldCheck, ArrowRight, DollarSign, Users, Activity } from 'lucide-react';
import Link from 'next/link';

interface MultisigCardProps {
  multisig: MultiSig;
}

export function MultisigCard({ multisig }: MultisigCardProps) {
  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault(); 
    navigator.clipboard.writeText(text);
  };

  // Format balance as USD currency
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(multisig.balance || '0'));

  return (
    <Card className="group border-2 border-black dark:border-white rounded-none bg-white dark:bg-[#080808] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 flex flex-col h-full relative overflow-hidden">
      
      {/* Creator Badge */}
      {multisig.isCreator && (
        <div className="absolute top-0 left-0 bg-black dark:bg-white text-white dark:text-black px-3 py-1 border-b-2 border-r-2 border-black dark:border-white z-10 flex items-center gap-2">
          <ShieldCheck className="h-3 w-3" />
          <span className="text-[10px] font-black uppercase tracking-widest">Creator</span>
        </div>
      )}

      <CardHeader className="pb-4 pt-10 border-b-2 border-black dark:border-white">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-black italic uppercase text-xl truncate tracking-tighter" title={multisig.name}>
              {multisig.name || 'UNNAMED TREASURY'}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <div 
                className="flex items-center gap-2 px-2 py-1 border-2 border-black dark:border-white bg-muted/10 hover:bg-primary/20 cursor-pointer transition-colors"
                onClick={(e) => handleCopy(e, multisig.controller)}
              >
                 <span className="font-mono text-xs font-bold">
                    {multisig.controller.slice(0, 6)}...{multisig.controller.slice(-4)}
                 </span>
                 <Copy className="h-3 w-3 opacity-50" />
              </div>
            </div>
          </div>
          
          <Badge 
            variant="outline" 
            className={`rounded-none border-2 font-bold uppercase tracking-widest px-2 py-1 text-[10px] ${
                multisig.config.paused 
                ? 'border-red-500 text-red-500 bg-red-500/10' 
                : 'border-emerald-500 text-emerald-500 bg-emerald-500/10'
            }`}
          >
            {multisig.config.paused ? 'HALTED' : 'ACTIVE'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 flex-1 flex flex-col p-6">
        {/* Balance Section - Updated to USD */}
        <div className="flex items-center gap-4">
           <div className="h-12 w-12 border-2 border-black dark:border-white flex items-center justify-center bg-black dark:bg-white text-white dark:text-black">
              <DollarSign className="h-6 w-6" />
           </div>
           <div>
             <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Value</p>
             <p className="text-3xl font-black italic tracking-tighter">
               {formattedBalance}
             </p>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y-2 border-black/10 dark:border-white/10 mt-auto">
          <div>
            <p className="text-[10px] font-black uppercase opacity-50 mb-1 flex items-center gap-1">
              <Users className="h-3 w-3" /> Owners
            </p>
            <p className="text-xl font-black">{multisig.owners.length}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase opacity-50 mb-1 flex items-center gap-1">
              <Activity className="h-3 w-3" /> Threshold
            </p>
            <p className="text-xl font-black">{multisig.config.requiredPercentage}%</p>
          </div>
        </div>

        {/* Equity Distribution Bar (Real Data) */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-wider opacity-60">
             <span>Cap Table</span>
             <span>100%</span>
          </div>
          <div className="h-3 border-2 border-black dark:border-white flex w-full">
            {multisig.owners.map((owner, idx) => (
              <div
                key={`${multisig.controller}-owner-${idx}`}
                style={{
                  width: `${owner.percentage}%`,
                  backgroundColor: [
                    '#2563EB', // Blue
                    '#DB2777', // Pink
                    '#059669', // Emerald
                    '#D97706', // Amber
                    '#7C3AED', // Violet
                  ][idx % 5],
                }}
                className="h-full border-r border-black/20 dark:border-white/20 last:border-0 hover:opacity-80 transition-opacity"
                title={`${owner.name}: ${owner.percentage}%`}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/multisigs/${multisig.controller}`} className="w-full mt-4">
            <Button className="w-full h-12 rounded-none border-2 border-black dark:border-white font-black uppercase italic hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
              Manage Treasury <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </Link>
      </CardContent>
    </Card>
  );
}