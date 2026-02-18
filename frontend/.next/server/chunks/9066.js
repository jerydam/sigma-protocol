"use strict";exports.id=9066,exports.ids=[9066],exports.modules={21242:(a,b,c)=>{c.d(b,{t:()=>g});var d=c(66150),e=c(2808),f=c(55164);function g({title:a}){let{currentScreen:b,navigateBack:c,navigate:g,data:h,setModalData:i}=(0,e.a)();return(0,d.jsx)(f.M,{title:a,backFn:"ManualTransferScreen"===b?c:b===h?.funding?.methodScreen?h.funding.comingFromSendTransactionScreen?()=>g("SendTransactionScreen"):void 0:h?.funding?.methodScreen?()=>{let a=h.funding;a.usingDefaultFundingMethod&&(a.usingDefaultFundingMethod=!1),i({funding:a,solanaFundingData:h?.solanaFundingData}),g(a.methodScreen)}:void 0})}},29487:(a,b,c)=>{c.d(b,{u:()=>f});var d=c(7719),e=c(67331);let f=({enabled:a=!0}={})=>{let{showFiatPrices:b,getUsdPriceForSol:c}=(0,e.u)(),[f,g]=(0,d.useState)(!0),[h,i]=(0,d.useState)(void 0),[j,k]=(0,d.useState)(void 0);return(0,d.useEffect)(()=>{(async()=>{if(b&&a)try{g(!0);let a=await c();a?k(a):i(Error("Unable to fetch SOL price"))}catch(a){i(a)}finally{g(!1)}else g(!1)})()},[]),{solPrice:j,isSolPriceLoading:f,solPriceError:h}}},45012:(a,b,c)=>{c.d(b,{T:()=>e});var d=c(72291);let e=d.I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},59318:(a,b,c)=>{c.d(b,{u:()=>e});var d=c(46052);function e(a){let b=a.filter(a=>!d.o.has(a.id));return d.m.concat(b)}},60606:(a,b,c)=>{c.d(b,{u:()=>i});var d=c(7719),e=c(59318),f=c(50579),g=c(67331),h=c(29487);function i(a){let{tokenPrice:b,isTokenPriceLoading:c,tokenPriceError:i}=(a=>{let{showFiatPrices:b,getUsdTokenPrice:c,chains:h}=(0,g.u)(),[i,j]=(0,d.useState)(!0),[k,l]=(0,d.useState)(void 0),[m,n]=(0,d.useState)(void 0);return(0,d.useEffect)(()=>{a||=f.s;let d=(0,e.u)(h).find(b=>b.id===Number(a));(async()=>{if(b){if(!d)return j(!1),l(Error(`Unable to fetch token price on chain id ${a}`));try{j(!0);let a=await c(d);a?n(a):l(Error(`Unable to fetch token price on chain id ${d.id}`))}catch(a){l(a)}finally{j(!1)}}else j(!1)})()},[a]),{tokenPrice:m,isTokenPriceLoading:i,tokenPriceError:k}})("solana"===a?-1:a),{solPrice:j,isSolPriceLoading:k,solPriceError:l}=(0,h.u)({enabled:"solana"===a});return"solana"===a?{tokenPrice:j,isTokenPriceLoading:k,tokenPriceError:l}:{tokenPrice:b,isTokenPriceLoading:c,tokenPriceError:i}}},65389:(a,b,c)=>{c.d(b,{B:()=>e,C:()=>h,F:()=>j,H:()=>g,R:()=>n,S:()=>l,a:()=>k,b:()=>m,c:()=>i,d:()=>o,e:()=>f});var d=c(72291);let e=d.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,f=d.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,g=d.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,h=(0,d.I4)(f)`
  padding: 20px 0;
`,i=(0,d.I4)(f)`
  gap: 16px;
`,j=d.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,k=d.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;d.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let l=d.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,m=d.I4.div`
  height: 16px;
`,n=d.I4.div`
  height: 12px;
`;d.I4.div`
  position: relative;
`;let o=d.I4.div`
  height: ${a=>a.height??"12"}px;
`;d.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},69066:(a,b,c)=>{c.r(b),c.d(b,{FundingAmountEditScreen:()=>o,default:()=>o});var d=c(66150),e=c(7719),f=c(55164),g=c(65389),h=c(21242),i=c(59656),j=c(45012),k=c(2808),l=c(60606),m=c(78624),n=c(87900);c(19078),c(11765),c(43132);let o={component:()=>{let{data:a,setModalData:b}=(0,k.a)(),c=a?.funding,o="solana"===c.chainType,p=(0,e.useRef)(null),{tokenPrice:q}=(0,l.u)(o?"solana":c.chain.id),r=o?void 0:c,s=!(!r?.erc20Address||r?.erc20ContractInfo),t=o?c.isUSDC?"USDC":"SOL":c.erc20Address?c.erc20ContractInfo?.symbol:c.chain.nativeCurrency.symbol||"ETH",u=parseFloat(c.amount),v=!isNaN(u)&&u>0,w=q?(0,m.c)(c.amount,q):void 0;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.t,{}),(0,d.jsx)(j.T,{children:"Confirm or edit amount"}),(0,d.jsxs)(g.F,{style:{marginTop:"32px"},children:[(0,d.jsx)(n.F,{children:s?(0,d.jsx)(i.N,{size:"50px"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.a,{onClick:()=>p.current?.focus(),children:[(0,d.jsx)(n.h,{ref:p,value:c.amount,onChange:d=>{let e=d.target.value;/^[0-9.]*$/.test(e)&&e.split(".").length-1<=1&&b({...a,funding:{...c,amount:e},solanaFundingData:a?.solanaFundingData?{...a.solanaFundingData,amount:e}:void 0})}}),(0,d.jsx)(n.c,{children:t})]}),!r?.erc20Address&&!(o&&c.isUSDC)&&(0,d.jsx)(n.d,{children:w&&v?`${w} USD`:""})]})}),(0,d.jsx)(f.c,{style:{marginTop:"1rem"},disabled:!v,onClick:c.onContinueWithExternalWallet,children:"Continue"})]}),(0,d.jsx)(f.B,{})]})}}},78624:(a,b,c)=>{c.d(b,{a:()=>i,b:()=>m,c:()=>h,g:()=>j,p:()=>k,s:()=>l});var d=c(29502),e=c(67331),f=c(69712);let g=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),h=(a,b)=>{let c,d=(c=b*parseFloat(a),g.format(c));return"$0.00"!==d?d:"<$0.01"},i=(a,b)=>{let c,e=(c=b*parseFloat((0,d.c)(a)),g.format(c));return"$0.00"===e?"<$0.01":e},j=(a,b,c=6,d=!1)=>`${k(a,c,d)} ${b}`,k=(a,b=6,c=!1)=>{let e=parseFloat((0,d.c)(a)).toFixed(b).replace(/0+$/,"").replace(/\.$/,"");return c?e:`${"0"===e?"<0.001":e}`},l=a=>a.reduce((a,b)=>a+b,0n),m=(a,b)=>{let{chains:c}=(0,e.u)(),d=`https://etherscan.io/address/${b}`,g=`${(0,f.a5)(a,c)}/address/${b}`;if(!g)return d;try{new URL(g)}catch{return d}return g}},87900:(a,b,c)=>{c.d(b,{F:()=>i,I:()=>h,a:()=>j,b:()=>k,c:()=>m,d:()=>n,e:()=>g,f:()=>p,g:()=>q,h:()=>l});var d=c(72291),e=c(55164),f=c(92224);let g=d.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,h=d.I4.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,i=d.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,j=d.I4.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;d.I4.div`
  font-size: 42px !important;
`;let k=d.I4.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,l=(0,d.I4)(k)`
  && {
    font-size: 42px;
  }
`;d.I4.button`
  cursor: pointer;
  padding-left: 4px;
`;let m=d.I4.div`
  font-size: 18px;
`,n=d.I4.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;d.I4.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,d.I4)(f.LinkButton)`
  margin-top: 16px;
`;let o=(0,d.i7)`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,d.I4)(e.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${o} 0.3s ease-in-out;
`;let p=d.I4.div``,q=d.I4.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`}};