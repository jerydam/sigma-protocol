"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{2678:(e,t,r)=>{r.d(t,{F:()=>l,I:()=>d,a:()=>c,b:()=>s,c:()=>p,d:()=>f,e:()=>a,f:()=>x,g:()=>h,h:()=>u});var i=r(78912),n=r(74124),o=r(64733);let a=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,d=i.I4.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,l=i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,c=i.I4.div`
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
`;i.I4.div`
  font-size: 42px !important;
`;let s=i.I4.input`
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
`,u=(0,i.I4)(s)`
  && {
    font-size: 42px;
  }
`;i.I4.button`
  cursor: pointer;
  padding-left: 4px;
`;let p=i.I4.div`
  font-size: 18px;
`,f=i.I4.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;i.I4.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,i.I4)(o.LinkButton)`
  margin-top: 16px;
`;let g=(0,i.i7)`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,i.I4)(n.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${g} 0.3s ease-in-out;
`;let x=i.I4.div``,h=i.I4.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`},19722:(e,t,r)=>{r.d(t,{u:()=>n});var i=r(5540);function n(e){let t=e.filter(e=>!i.o.has(e.id));return i.m.concat(t)}},22320:(e,t,r)=>{r.d(t,{T:()=>n});var i=r(78912);let n=i.I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},66428:(e,t,r)=>{r.d(t,{u:()=>l});var i=r(65936),n=r(19722),o=r(75187),a=r(86249),d=r(75549);function l(e){let{tokenPrice:t,isTokenPriceLoading:r,tokenPriceError:l}=(e=>{let{showFiatPrices:t,getUsdTokenPrice:r,chains:d}=(0,a.u)(),[l,c]=(0,i.useState)(!0),[s,u]=(0,i.useState)(void 0),[p,f]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{e||=o.s;let i=(0,n.u)(d).find(t=>t.id===Number(e));(async()=>{if(t){if(!i)return c(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{c(!0);let e=await r(i);e?f(e):u(Error(`Unable to fetch token price on chain id ${i.id}`))}catch(e){u(e)}finally{c(!1)}}else c(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:l,tokenPriceError:s}})("solana"===e?-1:e),{solPrice:c,isSolPriceLoading:s,solPriceError:u}=(0,d.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:c,isTokenPriceLoading:s,tokenPriceError:u}:{tokenPrice:t,isTokenPriceLoading:r,tokenPriceError:l}}},70614:(e,t,r)=>{r.r(t),r.d(t,{FundingAmountEditScreen:()=>g,default:()=>g});var i=r(73788),n=r(65936),o=r(74124),a=r(72853),d=r(87288),l=r(66656),c=r(22320),s=r(79312),u=r(66428),p=r(96038),f=r(2678);r(30404),r(28349),r(7764);let g={component:()=>{let{data:e,setModalData:t}=(0,s.a)(),r=e?.funding,g="solana"===r.chainType,x=(0,n.useRef)(null),{tokenPrice:h}=(0,u.u)(g?"solana":r.chain.id),m=g?void 0:r,v=!(!m?.erc20Address||m?.erc20ContractInfo),y=g?r.isUSDC?"USDC":"SOL":r.erc20Address?r.erc20ContractInfo?.symbol:r.chain.nativeCurrency.symbol||"ETH",b=parseFloat(r.amount),I=!isNaN(b)&&b>0,k=h?(0,p.c)(r.amount,h):void 0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.t,{}),(0,i.jsx)(c.T,{children:"Confirm or edit amount"}),(0,i.jsxs)(a.F,{style:{marginTop:"32px"},children:[(0,i.jsx)(f.F,{children:v?(0,i.jsx)(l.N,{size:"50px"}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f.a,{onClick:()=>x.current?.focus(),children:[(0,i.jsx)(f.h,{ref:x,value:r.amount,onChange:i=>{let n=i.target.value;/^[0-9.]*$/.test(n)&&n.split(".").length-1<=1&&t({...e,funding:{...r,amount:n},solanaFundingData:e?.solanaFundingData?{...e.solanaFundingData,amount:n}:void 0})}}),(0,i.jsx)(f.c,{children:y})]}),!m?.erc20Address&&!(g&&r.isUSDC)&&(0,i.jsx)(f.d,{children:k&&I?`${k} USD`:""})]})}),(0,i.jsx)(o.c,{style:{marginTop:"1rem"},disabled:!I,onClick:r.onContinueWithExternalWallet,children:"Continue"})]}),(0,i.jsx)(o.B,{})]})}}},72853:(e,t,r)=>{r.d(t,{B:()=>n,C:()=>d,F:()=>c,H:()=>a,R:()=>f,S:()=>u,a:()=>s,b:()=>p,c:()=>l,d:()=>g,e:()=>o});var i=r(78912);let n=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,o=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=i.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,d=(0,i.I4)(o)`
  padding: 20px 0;
`,l=(0,i.I4)(o)`
  gap: 16px;
`,c=i.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,s=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;i.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=i.I4.div`
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
`,p=i.I4.div`
  height: 16px;
`,f=i.I4.div`
  height: 12px;
`;i.I4.div`
  position: relative;
`;let g=i.I4.div`
  height: ${e=>e.height??"12"}px;
`;i.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},75549:(e,t,r)=>{r.d(t,{u:()=>o});var i=r(65936),n=r(86249);let o=({enabled:e=!0}={})=>{let{showFiatPrices:t,getUsdPriceForSol:r}=(0,n.u)(),[o,a]=(0,i.useState)(!0),[d,l]=(0,i.useState)(void 0),[c,s]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{(async()=>{if(t&&e)try{a(!0);let e=await r();e?s(e):l(Error("Unable to fetch SOL price"))}catch(e){l(e)}finally{a(!1)}else a(!1)})()},[]),{solPrice:c,isSolPriceLoading:o,solPriceError:d}}},87288:(e,t,r)=>{r.d(t,{t:()=>a});var i=r(73788),n=r(79312),o=r(74124);function a({title:e}){let{currentScreen:t,navigateBack:r,navigate:a,data:d,setModalData:l}=(0,n.a)();return(0,i.jsx)(o.M,{title:e,backFn:"ManualTransferScreen"===t?r:t===d?.funding?.methodScreen?d.funding.comingFromSendTransactionScreen?()=>a("SendTransactionScreen"):void 0:d?.funding?.methodScreen?()=>{let e=d.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:d?.solanaFundingData}),a(e.methodScreen)}:void 0})}},96038:(e,t,r)=>{r.d(t,{a:()=>l,b:()=>p,c:()=>d,g:()=>c,p:()=>s,s:()=>u});var i=r(85550),n=r(86249),o=r(41196);let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),d=(e,t)=>{let r,i=(r=t*parseFloat(e),a.format(r));return"$0.00"!==i?i:"<$0.01"},l=(e,t)=>{let r,n=(r=t*parseFloat((0,i.c)(e)),a.format(r));return"$0.00"===n?"<$0.01":n},c=(e,t,r=6,i=!1)=>`${s(e,r,i)} ${t}`,s=(e,t=6,r=!1)=>{let n=parseFloat((0,i.c)(e)).toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return r?n:`${"0"===n?"<0.001":n}`},u=e=>e.reduce((e,t)=>e+t,0n),p=(e,t)=>{let{chains:r}=(0,n.u)(),i=`https://etherscan.io/address/${t}`,a=`${(0,o.a5)(e,r)}/address/${t}`;if(!a)return i;try{new URL(a)}catch{return i}return a}}}]);