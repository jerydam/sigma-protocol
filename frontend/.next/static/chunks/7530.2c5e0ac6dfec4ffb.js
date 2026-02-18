"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7530],{29945:(e,t,n)=>{n.r(t),n.d(t,{AwaitingSolToEvmBridgingScreen:()=>x,default:()=>x});var r=n(73788),a=n(79259),i=n(65936),s=n(69356),o=n(42904),l=n(72853),d=n(74124),c=n(64252),u=n(87288),p=n(66656),h=n(75187),g=n(86249),m=n(41196),f=n(79312),v=n(16756),w=n(66279),b=n(53763),y=n(88836),I=n(15400),C=n(69375);n(30404),n(28349),n(7764);let x={component:function(){let e=(0,h.u)(),{closePrivyModal:t,createAnalyticsEvent:n,connectors:x}=(0,g.u)(),{navigate:S,setModalData:N,data:A}=(0,f.a)(),T=(0,h.u)(),$=(0,i.useRef)(!1),E=(0,b.u)(),[j,F]=(0,i.useState)(!1),[U,k]=(0,i.useState)(!1),[B,z]=(0,i.useState)(null),[R,W]=(0,i.useState)(),[L,_]=(0,i.useState)();if(!A?.funding||"ethereum"!==A.funding.chainType)throw Error("Invalid funding data");let{amount:D,connectedWallet:M,chain:O,solanaChain:P,isUSDC:q}=A.funding,H=A.funding.address,Q=A.funding.erc20Address,X=A.funding.isUSDC?"USDC":O.nativeCurrency.symbol,Z=(0,i.useMemo)(()=>"solana"===M?.type?M.provider:function({connectors:e,connectedWalletAddress:t}){let n=e.find(e=>"solana"===e.chainType&&e.wallets.some(e=>e.address===t)),r=n?.wallet.accounts.find(e=>e.address===t);if(!n||!r)throw new g.a("Unable to find source wallet connector");return new o.W({wallet:n.wallet,account:r})}({connectors:x,connectedWalletAddress:M?.address||""}),[M,x]),V=(0,i.useMemo)(()=>{let t=E(y.S);if(!t)throw new g.a("Unable to load solana plugin");let n=e.solanaRpcs["solana:mainnet"];if(!n)throw new g.a("Unable to load mainnet RPC");return t.getSolanaRpcClient({rpc:n.rpc,rpcSubscriptions:n.rpcSubscriptions,chain:"solana:mainnet",blockExplorerUrl:n.blockExplorerUrl??"https://explorer.solana.com"})},[]),Y=(0,m.Q)((0,C.t)(Z?.standardWallet.name||"unknown")),G=Y?.name||"wallet";return(0,i.useEffect)(()=>{(async function(){if(!Z||!O||$.current)return;let e=E(y.S);if(!e)return void z(new g.a("Unable to solana plugin"));$.current=!0,O?.testnet&&console.warn("Solana testnets are not supported for bridging");let t=q?1e6*parseFloat(D):(0,s.g)(D),n=await (0,w.g)({isTestnet:!!O.testnet,input:(0,w.t)({appId:T.id,amount:t.toString(),user:Z.address,recipient:H,destinationChainId:O.id,originChainId:w.b,originCurrency:q?w.d:w.a,destinationCurrency:q?Q:void 0})}).catch(console.error);if(!n)return void z(new g.a(`Unable to fetch quotes for bridging. Wallet ${(0,m.a6)(Z.address)} does not have enough funds.`,void 0,g.b.INSUFFICIENT_BALANCE));let r=await e.createTransactionFromRelayQuote({quote:n,source:Z.address,solanaClient:V});if(r)try{F(!0);let t=await e.simulateTransaction({solanaClient:V,tx:r});if(t.hasError)return t.hasFunds?(console.error("Transaction failed:",t.error),void z(new g.a("Something went wrong",void 0,g.b.TRANSACTION_FAILURE))):void z(new g.a(`Wallet ${(0,m.a6)(Z?.address)} does not have enough funds. ${n.details.currencyIn.amountFormatted} ${X} are needed to complete the transaction.`,void 0,g.b.INSUFFICIENT_BALANCE));let{signature:a}=await Z.signAndSendTransaction({chain:"solana:mainnet",transaction:r}),i=e.getAddressFromBuffer(a);W(i),_("pending")}catch(e){if(console.error(e),/user rejected the request/gi.test(e.message||""))return void z(new g.a("Transaction was rejected by the user",void 0,g.b.TRANSACTION_FAILURE));z(new g.a("Something went wrong",void 0,g.b.TRANSACTION_FAILURE))}else z(new g.a(`Unable to select bridge option from quotes. Wallet ${(0,m.a6)(Z.address)} does not have enough funds.`,void 0,g.b.INSUFFICIENT_BALANCE))})().catch(console.error)},[]),(0,w.u)({transactionHash:R,isTestnet:!1,bridgingStatus:L,setBridgingStatus:_,onSuccess({transactionHash:e}){F(!1),k(!0),n({eventName:v.O,payload:{provider:"external",status:"success",txHash:e,address:Z.address,chainType:"solana",clusterName:P,token:"SOL",destinationAddress:H,destinationChainId:O.id,destinationChainType:"ethereum",destinationValue:D,destinationToken:q?"USDC":"ETH"}})},onFailure({error:e}){F(!1),z(e)}}),(0,i.useEffect)(()=>{if(!U)return;let e=setTimeout(t,h.t);return()=>clearTimeout(e)},[U]),(0,i.useEffect)(()=>{B&&(N({funding:A?.funding,solanaFundingData:A?.solanaFundingData,sendTransaction:A?.sendTransaction,errorModalData:{error:B,previousScreen:"TransferFromWalletScreen"}}),S("ErrorScreen",!1))},[B]),U?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.t,{}),(0,r.jsx)(l.b,{}),(0,r.jsxs)(l.c,{children:[(0,r.jsx)(a.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,r.jsx)(c.C,{title:"Success!",description:`You’ve successfully added ${D} ${X} to your ${T.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,r.jsx)(l.R,{}),(0,r.jsx)(d.B,{})]}):j&&Z?(0,r.jsx)(I.T,{walletClientType:(0,C.t)(Z?.standardWallet.name||"unknown"),displayName:G,addressToFund:H,isBridging:j,isErc20Flow:!1,chainId:O.id,chainName:O.name,totalPriceInUsd:void 0,totalPriceInNativeCurrency:void 0,gasPriceInUsd:void 0,gasPriceInNativeCurrency:void 0}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.t,{}),(0,r.jsx)(p.N,{}),(0,r.jsx)("div",{style:{marginTop:"1rem"}}),(0,r.jsx)(d.B,{})]})}}},66656:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(73788),a=n(78912);let i=({size:e,centerIcon:t})=>(0,r.jsx)(s,{$size:e,children:(0,r.jsxs)(o,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(c,{}),t?(0,r.jsx)(l,{children:t}):null]})}),s=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=a.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    width: calc(var(--spinner-size) * 0.4);
    height: calc(var(--spinner-size) * 0.4);
    border-radius: var(--privy-border-radius-full);
  }
`,d=a.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,c=a.I4.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-icon-subtle) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`},69356:(e,t,n)=>{n.d(t,{g:()=>i});var r=n(1296),a=n(87007);function i(e,t="wei"){return(0,a.X)(e,r.eL[t])}},84844:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(90478).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},87007:(e,t,n)=>{n.d(t,{X:()=>i});var r=n(42213);class a extends r.C{constructor({value:e}){super(`Number \`${e}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}function i(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new a({value:e});let[n,r="0"]=e.split("."),i=n.startsWith("-");if(i&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${r}`))&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){let[e,a,i]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],s=Math.round(Number(`${a}.${i}`));(r=s>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${s}`).length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${i?"-":""}${n}${r}`)}},90478:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(65936);let a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},i=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:l,iconNode:d,...c},u)=>(0,r.createElement)("svg",{ref:u,...s,width:t,height:t,stroke:e,strokeWidth:a?24*Number(n)/Number(t):n,className:i("lucide",o),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...s},l)=>(0,r.createElement)(o,{ref:l,iconNode:t,className:i(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...s}));return n.displayName=a(e),n}}}]);