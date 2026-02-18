"use strict";exports.id=729,exports.ids=[729],exports.modules={12885:(a,b,c)=>{c.d(b,{A:()=>e});var d=c(7719);let e=d.forwardRef(function({title:a,titleId:b,...c},e){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":b},c),a?d.createElement("title",{id:b},a):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})},15630:(a,b,c)=>{c.d(b,{I:()=>f});var d=c(66150),e=c(66134);let f=({icon:a,name:b})=>"string"==typeof a?(0,d.jsx)("img",{alt:`${b||"wallet"} logo`,src:a,style:{height:24,width:24,borderRadius:4}}):void 0===a?(0,d.jsx)(e.A,{style:{height:24,width:24}}):a?(0,d.jsx)(a,{style:{height:24,width:24}}):null},21242:(a,b,c)=>{c.d(b,{t:()=>g});var d=c(66150),e=c(2808),f=c(55164);function g({title:a}){let{currentScreen:b,navigateBack:c,navigate:g,data:h,setModalData:i}=(0,e.a)();return(0,d.jsx)(f.M,{title:a,backFn:"ManualTransferScreen"===b?c:b===h?.funding?.methodScreen?h.funding.comingFromSendTransactionScreen?()=>g("SendTransactionScreen"):void 0:h?.funding?.methodScreen?()=>{let a=h.funding;a.usingDefaultFundingMethod&&(a.usingDefaultFundingMethod=!1),i({funding:a,solanaFundingData:h?.solanaFundingData}),g(a.methodScreen)}:void 0})}},27562:(a,b,c)=>{c.d(b,{g:()=>e});var d=c(64003);function e(a){let[b]=Object.entries(d.D[a]).find(([a,b])=>"USDC"===b.symbol)??[];return b}},29487:(a,b,c)=>{c.d(b,{u:()=>f});var d=c(7719),e=c(67331);let f=({enabled:a=!0}={})=>{let{showFiatPrices:b,getUsdPriceForSol:c}=(0,e.u)(),[f,g]=(0,d.useState)(!0),[h,i]=(0,d.useState)(void 0),[j,k]=(0,d.useState)(void 0);return(0,d.useEffect)(()=>{(async()=>{if(b&&a)try{g(!0);let a=await c();a?k(a):i(Error("Unable to fetch SOL price"))}catch(a){i(a)}finally{g(!1)}else g(!1)})()},[]),{solPrice:j,isSolPriceLoading:f,solPriceError:h}}},43495:(a,b,c)=>{c.d(b,{L:()=>f});var d=c(72291);let e=(0,d.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,f=(0,d.AH)`
  ${a=>a.$isLoading?(0,d.AH)`
          width: 35%;
          animation: ${e} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},59318:(a,b,c)=>{c.d(b,{u:()=>e});var d=c(46052);function e(a){let b=a.filter(a=>!d.o.has(a.id));return d.m.concat(b)}},59656:(a,b,c)=>{c.d(b,{N:()=>f});var d=c(66150),e=c(72291);let f=({size:a,centerIcon:b})=>(0,d.jsx)(g,{$size:a,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(k,{}),b?(0,d.jsx)(i,{children:b}):null]})}),g=e.I4.div`
  --spinner-size: ${a=>a.$size?a.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,h=e.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,i=e.I4.div`
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
`,j=e.I4.div`
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
`,k=e.I4.div`
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
`},60606:(a,b,c)=>{c.d(b,{u:()=>i});var d=c(7719),e=c(59318),f=c(50579),g=c(67331),h=c(29487);function i(a){let{tokenPrice:b,isTokenPriceLoading:c,tokenPriceError:i}=(a=>{let{showFiatPrices:b,getUsdTokenPrice:c,chains:h}=(0,g.u)(),[i,j]=(0,d.useState)(!0),[k,l]=(0,d.useState)(void 0),[m,n]=(0,d.useState)(void 0);return(0,d.useEffect)(()=>{a||=f.s;let d=(0,e.u)(h).find(b=>b.id===Number(a));(async()=>{if(b){if(!d)return j(!1),l(Error(`Unable to fetch token price on chain id ${a}`));try{j(!0);let a=await c(d);a?n(a):l(Error(`Unable to fetch token price on chain id ${d.id}`))}catch(a){l(a)}finally{j(!1)}}else j(!1)})()},[a]),{tokenPrice:m,isTokenPriceLoading:i,tokenPriceError:k}})("solana"===a?-1:a),{solPrice:j,isSolPriceLoading:k,solPriceError:l}=(0,h.u)({enabled:"solana"===a});return"solana"===a?{tokenPrice:j,isTokenPriceLoading:k,tokenPriceError:l}:{tokenPrice:b,isTokenPriceLoading:c,tokenPriceError:i}}},64003:(a,b,c)=>{c.d(b,{A:()=>h,D:()=>k,J:()=>j,L:()=>d,R:()=>i,S:()=>e,T:()=>f,a:()=>g,g:()=>l});let d=1e9,e="11111111111111111111111111111111",f="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",g="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",h="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",i=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],j=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],k={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function l(a,b){let c=parseFloat(a.toString())/d,e=m.format(b*c);return"$0.00"===e?"<$0.01":e}let m=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},65389:(a,b,c)=>{c.d(b,{B:()=>e,C:()=>h,F:()=>j,H:()=>g,R:()=>n,S:()=>l,a:()=>k,b:()=>m,c:()=>i,d:()=>o,e:()=>f});var d=c(72291);let e=d.I4.div`
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
`},66134:(a,b,c)=>{c.d(b,{A:()=>e});var d=c(7719);let e=d.forwardRef(function({title:a,titleId:b,...c},e){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":b},c),a?d.createElement("title",{id:b},a):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))})},67548:(a,b,c)=>{c.d(b,{L:()=>f,V:()=>h,a:()=>g});var d=c(72291),e=c(43495);let f=d.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,g=(0,d.I4)(f)`
  color: var(--privy-color-accent);
`,h=d.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${e.L}
`},75281:(a,b,c)=>{c.d(b,{g:()=>d});function d(a){switch(a){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},80729:(a,b,c)=>{c.r(b),c.d(b,{FundSolWalletWithExternalSolanaWallet:()=>aQ,default:()=>aQ});var d,e,f,g,h=c(66150),i=c(12885),j=c(7719),k=c(87291),l=c(55164),m=c(65389),n=c(94550),o=c(21242),p=c(15630),q=c(59656),r=c(67548),s=c(98050),t=c(50579),u=c(67331),v=c(2808),w=c(42740),x=c(13110),y=c(62930),z=c(85126),A=c(64288),B=c(74130),C=c(8327),D=c(43132),E=c(68147);let F=()=>{let{walletProxy:a,client:b}=(0,u.u)();return(0,j.useMemo)(()=>({signWithUserSigner:async({message:c,targetAppId:d})=>{if(!a)throw Error("Wallet proxy not initialized");let e=await b.getAccessToken();if(!e)throw Error("User must be authenticated");let{signature:f}=await a.signWithUserSigner({accessToken:e,message:c,targetAppId:d});return{signature:f}}}),[a,b])};var G=c(95308),H=c(17883);let I=["solana:mainnet","solana:devnet","solana:testnet"];function J(a,b){if(!Object.prototype.hasOwnProperty.call(a,b))throw TypeError("attempted to use private field on non-instance");return a}var K=0,L="__private_"+K+++"__implementation";function M(a,b){if(!Object.prototype.hasOwnProperty.call(a,b))throw TypeError("attempted to use private field on non-instance");return a}var N=0;function O(a){return"__private_"+N+++"_"+a}var P=O("_address"),Q=O("_publicKey"),R=O("_chains"),S=O("_features"),T=O("_label"),U=O("_icon");class V{get address(){return M(this,P)[P]}get publicKey(){return M(this,Q)[Q].slice()}get chains(){return M(this,R)[R].slice()}get features(){return M(this,S)[S].slice()}get label(){return M(this,T)[T]}get icon(){return M(this,U)[U]}constructor({address:a,publicKey:b,label:c,icon:d}){Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,Q,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,T,{writable:!0,value:void 0}),Object.defineProperty(this,U,{writable:!0,value:void 0}),M(this,P)[P]=a,M(this,Q)[Q]=b,M(this,R)[R]=I,M(this,T)[T]=c,M(this,U)[U]=d,M(this,S)[S]=["solana:signAndSendTransaction","solana:signTransaction","solana:signMessage"],new.target===V&&Object.freeze(this)}}function W(a,b){if(!Object.prototype.hasOwnProperty.call(a,b))throw TypeError("attempted to use private field on non-instance");return a}var X=0;function Y(a){return"__private_"+X+++"_"+a}var Z=Y("_listeners"),$=Y("_version"),_=Y("_name"),aa=Y("_icon"),ab=Y("_injection"),ac=Y("_isPrivyWallet"),ad=Y("_accounts"),ae=Y("_on"),af=Y("_emit"),ag=Y("_off"),ah=Y("_connected"),ai=Y("_connect"),aj=Y("_disconnect"),ak=Y("_signMessage"),al=Y("_signAndSendTransaction"),am=Y("_signTransaction");function an(a,...b){W(this,Z)[Z][a]?.forEach(a=>a.apply(null,b))}function ao(a,b){W(this,Z)[Z][a]=W(this,Z)[Z][a]?.filter(a=>b!==a)}function ap(){let{isHeadlessSigning:a,walletProxy:b,initializeWalletProxy:c,recoverEmbeddedWallet:d,openModal:e,privy:f,client:g}=(0,u.u)(),{user:h}=(0,B.u)(),{setModalData:i}=(0,v.a)(),{signWithUserSigner:j}=F();return{signMessage:({message:k,address:l,options:m})=>new Promise(async(n,o)=>{let p=(0,v.h)(h,l);if("privy"!==p?.walletClientType)return void o(new u.a("Wallet is not a Privy wallet",void 0,u.b.EMBEDDED_WALLET_NOT_FOUND));let{entropyId:q,entropyIdVerifier:r}=(0,C.g)(h,p),s=(0,v.b)(p),t=(0,G.b)(k).toString("base64");if(t.length<1)return void o(new u.a("Message must be a non-empty string",void 0,u.b.INVALID_MESSAGE));let w=async()=>{let a;if(!h)throw Error("User must be authenticated before signing with a Privy wallet");let e=await g.getAccessToken();if(!e)throw Error("User must be authenticated to use their embedded wallet.");let i=b??await c(15e3);if(!i)throw Error("Failed to initialize embedded wallet proxy.");if(!await d({address:p.address}))throw Error("Unable to connect to wallet");if(s){let b=await (0,z._)(f,j,{chain_type:"solana",method:"signMessage",params:{message:t,encoding:"base64"},wallet_id:p.id});if(!b.data||!("signature"in b.data))throw Error("Failed to sign message");a=b.data.signature}else{let{response:b}=await i.rpc({accessToken:e,entropyId:q,entropyIdVerifier:r,chainType:"solana",hdWalletIndex:p.walletIndex??0,requesterAppId:m?.uiOptions?.requesterAppId,request:{method:"signMessage",params:{message:t}}});a=b.data.signature}return a};if(a({showWalletUIs:m?.uiOptions?.showWalletUIs}))try{let a=await w(),b=new Uint8Array((0,G.b)(a,"base64"));n({signature:b})}catch(a){o(a)}else i({signMessage:{method:"solana_signMessage",data:t,confirmAndSign:w,onSuccess:a=>{n({signature:new Uint8Array((0,G.b)(a,"base64"))})},onFailure:a=>{o(a)},uiOptions:m?.uiOptions??{}},connectWallet:{recoveryMethod:p.recoveryMethod,connectingWalletAddress:p.address,entropyId:q,entropyIdVerifier:r,isUnifiedWallet:s,onCompleteNavigateTo:"SignRequestScreen",onFailure:a=>{o(new u.a("Failed to connect to wallet",a,u.b.UNKNOWN_CONNECT_WALLET_ERROR))}}}),e("EmbeddedWalletConnectingScreen")})}}function aq(){let{isHeadlessSigning:a,openModal:b}=(0,u.u)(),{setModalData:c}=(0,v.a)(),{signMessage:d}=ap(),{user:e}=(0,B.u)();return{signTransaction:async({transaction:f,options:g,chain:h="solana:mainnet",address:i})=>{async function j(a){let b,c,{signature:e}=await d({message:(0,G.a)(a),address:i,options:{...g,uiOptions:{...g?.uiOptions,showWalletUIs:!1}}});return{signedTransaction:(b=structuredClone((0,x.BX)().decode(a)),(c=(0,y.hl)(i))in b.signatures&&(b.signatures[c]=e),new Uint8Array((0,x.l9)().encode(b)))}}return a({showWalletUIs:g?.uiOptions?.showWalletUIs})?j(f):new Promise(async(a,d)=>{let k=(0,v.h)(e,i);if("privy"!==k?.walletClientType)return void d(new u.a("Wallet is not a Privy wallet",void 0,u.b.EMBEDDED_WALLET_NOT_FOUND));let{entropyId:l,entropyIdVerifier:m}=(0,C.g)(e,k),n=(0,v.b)(k);function o(a){return b=>{d(b instanceof u.a?b:new u.a("Failed to connect to wallet",b,a))}}let p={account:k,transaction:f,chain:h,signOnly:!0,uiOptions:g?.uiOptions||{},onConfirm:j,onSuccess:a,onFailure:o(u.b.TRANSACTION_FAILURE)};c({connectWallet:{recoveryMethod:k.recoveryMethod,connectingWalletAddress:k.address,entropyId:l,entropyIdVerifier:m,isUnifiedWallet:n,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:o(u.b.UNKNOWN_CONNECT_WALLET_ERROR)},standardSignAndSendTransaction:p}),b("EmbeddedWalletConnectingScreen")})}}}let ar=new class extends D.A{setImplementation(a){J(this,L)[L]=a}async signMessage(a){return J(this,L)[L].signMessage(a)}async signAndSendTransaction(a){return J(this,L)[L].signAndSendTransaction(a)}async signTransaction(a){return J(this,L)[L].signTransaction(a)}constructor(a){super(),Object.defineProperty(this,L,{writable:!0,value:void 0}),J(this,L)[L]=a}}({signTransaction:(0,u.l)("signTransaction was not injected"),signAndSendTransaction:(0,u.l)("signAndSendTransaction was not injected"),signMessage:(0,u.l)("signMessage was not injected")}),as=new class{get version(){return W(this,$)[$]}get name(){return W(this,_)[_]}get icon(){return W(this,aa)[aa]}get chains(){return I.slice()}get features(){return{"standard:connect":{version:"1.0.0",connect:W(this,ai)[ai]},"standard:disconnect":{version:"1.0.0",disconnect:W(this,aj)[aj]},"standard:events":{version:"1.0.0",on:W(this,ae)[ae]},"solana:signAndSendTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:W(this,al)[al]},"solana:signTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:W(this,am)[am]},"solana:signMessage":{version:"1.0.0",signMessage:W(this,ak)[ak]},"privy:":{privy:{signMessage:W(this,ab)[ab].signMessage,signTransaction:W(this,ab)[ab].signTransaction,signAndSendTransaction:W(this,ab)[ab].signAndSendTransaction}}}}get accounts(){return W(this,ad)[ad].slice()}get isPrivyWallet(){return W(this,ac)[ac]}constructor({name:a,icon:b,version:c,injection:d,wallets:e}){Object.defineProperty(this,af,{value:an}),Object.defineProperty(this,ag,{value:ao}),Object.defineProperty(this,Z,{writable:!0,value:void 0}),Object.defineProperty(this,$,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0}),Object.defineProperty(this,aa,{writable:!0,value:void 0}),Object.defineProperty(this,ab,{writable:!0,value:void 0}),Object.defineProperty(this,ac,{writable:!0,value:void 0}),Object.defineProperty(this,ad,{writable:!0,value:void 0}),Object.defineProperty(this,ae,{writable:!0,value:void 0}),Object.defineProperty(this,ah,{writable:!0,value:void 0}),Object.defineProperty(this,ai,{writable:!0,value:void 0}),Object.defineProperty(this,aj,{writable:!0,value:void 0}),Object.defineProperty(this,ak,{writable:!0,value:void 0}),Object.defineProperty(this,al,{writable:!0,value:void 0}),Object.defineProperty(this,am,{writable:!0,value:void 0}),W(this,Z)[Z]={},W(this,ae)[ae]=(a,b)=>(W(this,Z)[Z][a]?.push(b)||(W(this,Z)[Z][a]=[b]),()=>W(this,ag)[ag](a,b)),W(this,ah)[ah]=a=>{null!=a&&(W(this,ad)[ad]=a.map(({address:a})=>new V({address:a,publicKey:E.tw.decode(a)}))),W(this,af)[af]("change",{accounts:this.accounts})},W(this,ai)[ai]=async()=>(W(this,af)[af]("change",{accounts:this.accounts}),{accounts:this.accounts}),W(this,aj)[aj]=async()=>{W(this,af)[af]("change",{accounts:this.accounts})},W(this,ak)[ak]=async(...a)=>{let b=[];for(let{account:c,...d}of a){let{signature:a}=await W(this,ab)[ab].signMessage({...d,address:c.address});b.push({signedMessage:d.message,signature:a})}return b},W(this,al)[al]=async(...a)=>{let b=[];for(let c of a){let{signature:a}=await W(this,ab)[ab].signAndSendTransaction({...c,transaction:c.transaction,address:c.account.address,chain:c.chain||"solana:mainnet",options:c.options});b.push({signature:a})}return b},W(this,am)[am]=async(...a)=>{let b=[];for(let{transaction:c,account:d,options:e,chain:f}of a){let{signedTransaction:a}=await W(this,ab)[ab].signTransaction({transaction:c,address:d.address,chain:f||"solana:mainnet",options:e});b.push({signedTransaction:a})}return b},W(this,_)[_]=a,W(this,aa)[aa]=b,W(this,$)[$]=c,W(this,ab)[ab]=d,W(this,ad)[ad]=[],W(this,ac)[ac]=!0,d.on("accountChanged",W(this,ah)[ah],this),W(this,ah)[ah](e)}}({name:"Privy",version:"1.0.0",icon:"data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==",wallets:[],injection:ar});var at=c(60606),au=c(92824),av=c(95662),aw=c(88074),ax=c(43522),ay=c(66306),az=c(44832),aA=((d=aA||{})[d.Uninitialized=0]="Uninitialized",d[d.Initialized=1]="Initialized",d),aB=((e=aB||{})[e.Legacy=0]="Legacy",e[e.Current=1]="Current",e),aC=((f=aC||{})[f.Nonce=0]="Nonce",f),aD=((g=aD||{})[g.CreateAccount=0]="CreateAccount",g[g.Assign=1]="Assign",g[g.TransferSol=2]="TransferSol",g[g.CreateAccountWithSeed=3]="CreateAccountWithSeed",g[g.AdvanceNonceAccount=4]="AdvanceNonceAccount",g[g.WithdrawNonceAccount=5]="WithdrawNonceAccount",g[g.InitializeNonceAccount=6]="InitializeNonceAccount",g[g.AuthorizeNonceAccount=7]="AuthorizeNonceAccount",g[g.Allocate=8]="Allocate",g[g.AllocateWithSeed=9]="AllocateWithSeed",g[g.AssignWithSeed=10]="AssignWithSeed",g[g.TransferSolWithSeed=11]="TransferSolWithSeed",g[g.UpgradeNonceAccount=12]="UpgradeNonceAccount",g);function aE(a){return!!a&&"object"==typeof a&&"address"in a&&(0,aw.Pl)(a)}var aF=c(89614),aG=c(3906),aH=c(21881),aI=c(64003),aJ=c(27562),aK=c(75281);function aL({rows:a}){return(0,h.jsx)(s.a,{children:a.filter(a=>!!a).map((a,b)=>null!=a.value||a.isLoading?(0,h.jsxs)(s.R,{children:[(0,h.jsx)(r.L,{children:a.label}),(0,h.jsx)(r.V,{$isLoading:a.isLoading,children:a.value})]},b):null)})}function aM(a){return BigInt(Math.floor(1e9*parseFloat(a)))}function aN(a){return+aO.format(parseFloat(a.toString())/1e9)}c(11765),c(19078);let aO=Intl.NumberFormat(void 0,{maximumFractionDigits:8});async function aP({tx:a,solanaClient:b,amount:c,asset:d,tokenPrice:e}){if(!a)return null;if("SOL"===d&&e){let d=aM(c),f=(0,aI.g)(d,e),g=await (0,G.f)({solanaClient:b,tx:a});return{amountInUsd:f,feeInUsd:e?(0,aI.g)(g,e):void 0,totalInUsd:(0,aI.g)(d+g,e)}}if("USDC"===d&&e){let d,f="$"+c,g=await (0,G.f)({solanaClient:b,tx:a}),h=(d=parseFloat(g.toString())/aI.L*e)<.01?0:d;return{amountInUsd:f,feeInUsd:(0,aI.g)(g,e),totalInUsd:"$"+(parseFloat(c)+h).toFixed(2)}}if("SOL"===d){let d=aM(c),e=await (0,G.f)({solanaClient:b,tx:a});return{amountInSol:c+" SOL",feeInSol:aN(e)+" SOL",totalInSol:aN(d+e)+" SOL"}}return{amountInUsdc:c+" USDC",feeInSol:aN(await (0,G.f)({solanaClient:b,tx:a}))+" SOL"}}let aQ={component:function(){let a=(0,t.u)(),{closePrivyModal:b,createAnalyticsEvent:c}=(0,u.u)(),{data:d,setModalData:e,navigate:f}=(0,v.a)(),{wallets:g}=function(){let{ready:a,wallets:b}=function(){let{client:a}=(0,u.u)(),{ready:b,wallet:c}=function(){let{ready:a}=(0,C.u)(),{user:b}=(0,B.u)(),{signMessage:c}=ap(),{signTransaction:d}=aq(),{signAndSendTransaction:e}=function(){let a=(0,t.u)(),{isHeadlessSigning:b,openModal:c,privy:d}=(0,u.u)(),{setModalData:e}=(0,v.a)(),{signTransaction:f}=aq(),g=(0,G.u)(),{user:h}=(0,B.u)(),{signWithUserSigner:i}=F();return{signAndSendTransaction:async({transaction:j,address:k,chain:l="solana:mainnet",options:m})=>{let n=(0,v.h)(h,k);if("privy"!==n?.walletClientType)throw new u.a("Wallet is not a Privy wallet",void 0,u.b.EMBEDDED_WALLET_NOT_FOUND);let o=(0,v.b)(n);async function p(a){if(m?.sponsor)return await (async a=>{if(!o)throw new u.a("Sponsoring transactions is only supported for wallets on the TEE stack",u.b.INVALID_DATA);let b=await (0,z._)(d,i,{chain_type:"solana",method:"signAndSendTransaction",sponsor:!0,params:{transaction:(0,G.b)(a).toString("base64"),encoding:"base64"},caip2:`solana:${(await g(l).rpc.getGenesisHash().send()).substring(0,32)}`,wallet_id:n.id});if(b.data&&"hash"in b.data)return{signature:E.tw.decode(b.data.hash)};throw Error("Failed to sign and send transaction")})(a);let{signedTransaction:b}=await f({transaction:a,address:k,chain:l,options:{...m,uiOptions:{...m?.uiOptions,showWalletUIs:!1}}}),{signature:c}=await g(l).sendAndConfirmTransaction(b);return{signature:c}}return b({showWalletUIs:m?.uiOptions?.showWalletUIs})?p(j):new Promise(async(b,d)=>{let f,g,{entropyId:i,entropyIdVerifier:q}=(0,C.g)(h,n);function r(a){return b=>{d(b instanceof u.a?b:new u.a("Failed to connect to wallet",b,a))}}let s={account:n,transaction:j,chain:l,signOnly:!1,uiOptions:m?.uiOptions||{},onConfirm:p,onSuccess:b,onFailure:r(u.b.TRANSACTION_FAILURE),isSponsored:!!m?.sponsor},t={recoveryMethod:n.recoveryMethod,connectingWalletAddress:n.address,entropyId:i,entropyIdVerifier:q,isUnifiedWallet:o,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:r(u.b.UNKNOWN_CONNECT_WALLET_ERROR)};a.fundingConfig&&(f=(0,H.g)({address:k,appConfig:a,methodScreen:"FundingMethodSelectionScreen",fundWalletConfig:{...m,asset:"native-currency",chain:l},externalSolanaFundingScreen:"FundSolWalletWithExternalSolanaWallet"}),g={amount:a.fundingConfig.defaultRecommendedAmount,asset:"SOL",chain:l,destinationAddress:k,afterSuccessScreen:"StandardSignAndSendTransactionScreen",sourceWalletData:void 0}),e({connectWallet:t,standardSignAndSendTransaction:s,funding:f,solanaFundingData:g}),c("EmbeddedWalletConnectingScreen")})}}}(),f=(0,j.useMemo)(()=>{let a=[...(0,v.o)(b).sort((a,b)=>(a.walletIndex??0)-(b.walletIndex??0))],c=(0,v.k)(b);return c.length?[...a,...c]:a},[b]),g=(0,j.useMemo)(()=>({signMessage:async({message:a,address:b,options:d})=>await c({message:a,address:b,options:d}),signTransaction:async({transaction:a,address:b,chain:c,options:e})=>await d({transaction:a,address:b,chain:c,options:e}),async signAndSendTransaction({transaction:a,address:b,chain:c,options:d}){let{signature:f}=await e({transaction:a,address:b,chain:c,options:d});return{signature:f}}}),[c,d,e]);return(0,j.useEffect)(()=>{ar?.setImplementation(g)},[g]),(0,j.useEffect)(()=>{var b;!a||(b=as.accounts).length===f.length&&b.every((a,b)=>a.address===f[b]?.address)||ar?.emit("accountChanged",f)},[a,f]),{ready:a,wallet:as}}(),[d,e]=(0,j.useState)([]),[f,g]=(0,j.useState)([]);return(0,j.useEffect)(()=>{let a=[c,...d.filter(a=>"solana"===a.chainType&&!!a.wallet.features).map(a=>a.wallet)];g(a);let b=d.flatMap(b=>{let c=()=>g([...a]);return b.on("walletsUpdated",c),{connector:b,off:c}}),e=a.map(b=>b.features["standard:events"]?.on("change",()=>{g([...a])}));return()=>{e.forEach(a=>a?.()),b.forEach(({connector:a,off:b})=>a.off("walletsUpdated",b))}},[d]),(0,j.useEffect)(()=>{e(a.connectors?.walletConnectors.filter(a=>"solana"===a.chainType)??[]);let b=()=>{e(a.connectors?.walletConnectors.filter(a=>"solana"===a.chainType)??[])};return a.connectors?.on("connectorInitialized",b),()=>{a.connectors?.off("connectorInitialized",b)}},[b,a.connectors]),{ready:b,wallets:f}}();return{ready:a,wallets:(0,j.useMemo)(()=>b.flatMap(a=>a.accounts.map(b=>new A.W({wallet:a,account:b}))),[b])}}(),[r,s]=(0,j.useState)("preparing"),[y,D]=(0,j.useState)(),[I,J]=(0,j.useState)(),[K,L]=(0,j.useState)();if(!d?.solanaFundingData)throw Error("Funding config is missing");if(!d.solanaFundingData.sourceWalletData)throw Error("Funding config is missing source wallet data");let{amount:M,asset:N,chain:O,sourceWalletData:P,destinationAddress:Q,afterSuccessScreen:R}=d.solanaFundingData,S=g.find(a=>a.address===P.address&&(0,H.t)(P.walletClientType)===(0,H.t)(a.standardWallet.name)),T=(0,G.u)()(O),{tokenPrice:U,isTokenPriceLoading:V}=(0,at.u)("solana");return(0,j.useEffect)(()=>{if("preparing"!==r||V||!S)return;let a="SOL"===N?aM(M):BigInt(Math.floor(1e6*parseFloat(M)));J({amount:("SOL"===N&&U?(0,aI.g)(a,U):M)??M}),("SOL"===N?async function({solanaClient:a,source:b,destination:c,amountInLamports:d}){let{value:e}=await a.rpc.getLatestBlockhash().send(),f={address:b},g=(0,aF.F)((0,aG.mN)({version:0}),a=>(0,aw.pt)(f,a),a=>(0,aG.S$)(e,a),a=>{var b;let e,g,h,i;return(0,aG.az)((e=(void 0)??"11111111111111111111111111111111",g={source:{value:(b={amount:d,source:f,destination:c}).source??null,isWritable:!0},destination:{value:b.destination??null,isWritable:!0}},h={...b},Object.freeze({accounts:[(i=a=>{if(!a.value)return;let b=a.isWritable?av.Uv.WRITABLE:av.Uv.READONLY;return Object.freeze({address:function(a){if(!a)throw Error("Expected a Address.");return"object"==typeof a&&"address"in a?a.address:Array.isArray(a)?a[0]:a}(a.value),role:aE(a.value)?(0,av.MR)(b):b,...aE(a.value)?{signer:a.value}:{}})})(g.source),i(g.destination)],data:(0,ax.FU)((0,ay.a5)([["discriminator",(0,az.PL)()],["amount",(0,az.eC)()]]),a=>({...a,discriminator:2})).encode(h),programAddress:e})),a)},a=>(0,x.i5)(a));return new Uint8Array((0,x.l9)().encode(g))}({solanaClient:T,source:S.address,destination:Q,amountInLamports:a}):async function({solanaClient:a,source:b,destination:c,amountInBaseUnits:d}){let e=(0,aJ.g)(a.chain),{value:f}=await a.rpc.getLatestBlockhash().send(),g={address:b},[h]=await (0,aH._mM)({mint:e,owner:b,tokenProgram:aI.T}),[i]=await (0,aH._mM)({mint:e,owner:c,tokenProgram:aI.T}),[j,k]=await Promise.all([a.rpc.getAccountInfo(h,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null),a.rpc.getAccountInfo(i,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null)]);if(!j?.value)throw Error(`Source token account does not exist for address: ${b}`);let l=(0,aH.PUP)({payer:g,ata:i,owner:c,mint:e}),m=(0,aF.F)((0,aG.mN)({version:0}),a=>(0,aw.pt)(g,a),a=>(0,aG.S$)(f,a),a=>k?.value?a:(0,aG.az)(l,a),a=>(0,aG.az)((0,aH.Q7D)({source:h,destination:i,authority:g,amount:d}),a),a=>(0,x.i5)(a));return new Uint8Array((0,x.l9)().encode(m))}({solanaClient:T,source:S.address,destination:Q,amountInBaseUnits:a})).then(D).catch(a=>{s("error"),L(a)})},[r,M,N,O,S,Q,V,U]),(0,j.useEffect)(()=>{"preparing"===r&&y&&aP({tx:y,solanaClient:T,amount:M,asset:N,tokenPrice:U}).then(a=>{s("loaded"),J({amount:a?.amountInUsd??a?.amountInUsdc??a?.amountInSol??M,fee:a?.feeInUsd??a?.feeInSol,total:a?.totalInUsd??a?.totalInSol})}).catch(a=>{s("error"),L(a)})},[y,M,N,r,U]),(0,j.useEffect)(()=>{"error"===r&&K&&(e({errorModalData:{error:K,previousScreen:"FundSolWalletWithExternalSolanaWallet"},solanaFundingData:d.solanaFundingData}),f("ErrorScreen",!1))},[r,f]),(0,j.useEffect)(()=>{if("success"!==r)return;let a=setTimeout(R?()=>f(R):b,t.t);return()=>clearTimeout(a)},[r]),(0,h.jsxs)(h.Fragment,"success"===r?{children:[(0,h.jsx)(o.t,{}),(0,h.jsx)(m.b,{}),(0,h.jsxs)(m.c,{children:[(0,h.jsx)(i.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,h.jsx)(n.C,{title:"Success!",description:`You’ve successfully added ${M} ${N} to your ${a.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,h.jsx)(m.R,{}),(0,h.jsx)(l.B,{})]}:"preparing"===r||"loaded"===r||"sending"===r?{children:[(0,h.jsx)(o.t,{}),(0,h.jsx)(m.e,{style:{marginTop:"16px"},children:(0,h.jsx)(p.I,{icon:S?.standardWallet.icon,name:S?.standardWallet.name})}),(0,h.jsx)(n.C,{style:{marginTop:"8px",marginBottom:"12px"},title:"sending"===r&&S?`Confirming with ${S.standardWallet.name}`:"Confirm transaction"}),(0,h.jsx)(aL,{rows:[{label:"Source",value:(0,k.vz)(P.address)},{label:"Destination",value:(0,k.vz)(Q)},{label:"Network",value:(0,aK.g)(O)},{label:"Amount",value:I?.amount,isLoading:"preparing"===r},{label:"Estimated fee",value:I?.fee,isLoading:"preparing"===r},{label:"Total",value:I?.total,isLoading:"preparing"===r}]}),(0,h.jsx)(l.P,{style:{marginTop:"1rem"},loading:"preparing"===r||"sending"===r,onClick:function(){"loaded"===r&&y&&S&&(s("sending"),(async function({transaction:a,chain:b,sourceWallet:c,solanaClient:d}){var e;let{hasFunds:f}=await (0,G.s)({solanaClient:d,tx:a});if(!f)throw new u.a(`Wallet ${(0,k.vz)(c.address)} does not have enough funds.`,void 0,u.b.INSUFFICIENT_BALANCE);let g=(e=(await c.signAndSendTransaction({transaction:a,chain:b}).catch(a=>{throw new u.a("Transaction was rejected by the user",a,u.b.TRANSACTION_FAILURE)})).signature,(0,w.BC)().decode(e));return await (0,G.w)({rpcSubscriptions:d.rpcSubscriptions,signature:g,timeout:2e4}),g})({solanaClient:T,transaction:y,chain:O,sourceWallet:S}).then(a=>{s("success"),c({eventName:au.O,payload:{provider:"external",status:"success",txHash:a,address:S.address,value:M,chainType:"solana",clusterName:O,token:N,destinationAddress:Q,destinationValue:M,destinationChainType:"solana",destinationClusterName:O,destinationToken:N}})}).catch(a=>{s("error"),L(a)}))},children:"Confirm"}),(0,h.jsx)(l.B,{})]}:{children:[(0,h.jsx)(o.t,{}),(0,h.jsx)(q.N,{}),(0,h.jsx)("div",{style:{marginTop:"1rem"}}),(0,h.jsx)(l.B,{})]})}}},87291:(a,b,c)=>{c.d(b,{NJ:()=>h,vj:()=>g,vz:()=>f});var d=c(29502),e=c(26497);function f(a){return a?`${a.slice(0,5)}…${a.slice(-4)}`:""}function g({wei:a,precision:b=3}){return parseFloat((0,d.c)(a)).toFixed(b).replace(/0+$/,"").replace(/\.$/,"")}function h({amount:a,decimals:b}){return(0,e.J)(BigInt(a),b)}},92824:(a,b,c)=>{c.d(b,{O:()=>d});let d="sdk_fiat_on_ramp_completed_with_status"},94550:(a,b,c)=>{c.d(b,{C:()=>g,S:()=>f});var d=c(66150),e=c(72291);let f=({title:a,description:b,children:c,...e})=>(0,d.jsx)(h,{...e,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:a}),"string"==typeof b?(0,d.jsx)("p",{children:b}):b,c]})});(0,e.I4)(f)`
  margin-bottom: 24px;
`;let g=({title:a,description:b,icon:c,children:e,...f})=>(0,d.jsxs)(i,{...f,children:[c||null,(0,d.jsx)("h3",{children:a}),b&&"string"==typeof b?(0,d.jsx)("p",{children:b}):b,e]}),h=e.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,i=(0,e.I4)(h)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},95308:(a,b,c)=>{c.d(b,{a:()=>i,b:()=>l,f:()=>j,s:()=>k,u:()=>n,w:()=>m});var d=c(13110),e=c(42740),f=c(7719),g=c(50579),h=c(67331);function i(a){return new Uint8Array((0,d.BX)().decode(a).messageBytes)}async function j({solanaClient:a,tx:b}){let c=(0,e.Ul)().decode(i(b)),{value:d}=await a.rpc.getFeeForMessage(c).send();return d??0n}async function k({solanaClient:a,tx:b,replaceRecentBlockhash:c}){let{value:d}=await a.rpc.simulateTransaction((0,e.Ul)().decode(b),{commitment:"confirmed",encoding:"base64",sigVerify:!1,replaceRecentBlockhash:c}).send();if("BlockhashNotFound"===d.err&&c)throw Error("Simulation failed: Blockhash not found");return"BlockhashNotFound"===d.err?await k({solanaClient:a,tx:b,replaceRecentBlockhash:!0}):{logs:d.logs??[],error:d.err,hasError:!!d.err,hasFunds:d.logs?.every(a=>!/insufficient funds/gi.test(a)&&!/insufficient lamports/gi.test(a))??!0}}let l=(...a)=>{if("undefined"==typeof Buffer)throw new h.a("Buffer is not defined.",void 0,h.b.BUFFER_NOT_DEFINED);return Buffer.from(...a)};async function m({rpcSubscriptions:a,signature:b,timeout:c}){let d=new AbortController,e=await a.signatureNotifications(b,{commitment:"confirmed"}).subscribe({abortSignal:d.signal}),f=await Promise.race([new Promise(a=>{setTimeout(()=>{d.abort(),a(Error("Transaction confirmation timed out"))},c)}),new Promise(async a=>{for await(let b of e){if(d.abort(),b.value.err)return a(Error("Transaction confirmation failed"));a(void 0)}})]);if(f instanceof Error)throw f}function n(){let a=(0,g.u)(),b=(0,f.useMemo)(()=>Object.fromEntries(["solana:mainnet","solana:devnet","solana:testnet"].map(b=>[b,a.solanaRpcs[b]?function({rpc:a,rpcSubscriptions:b,chain:c,blockExplorerUrl:d}){let f=function({rpc:a,rpcSubscriptions:b}){return async c=>new Promise(async(d,f)=>{try{let f=await a.sendTransaction(l(c).toString("base64"),{preflightCommitment:"confirmed",encoding:"base64"}).send();await m({rpcSubscriptions:b,signature:f,timeout:1e4}),d({signature:new Uint8Array((0,e.nZ)().encode(f))})}catch(a){f(a)}})}({rpc:a,rpcSubscriptions:b});return{rpc:a,rpcSubscriptions:b,chain:c,blockExplorerUrl:d,sendAndConfirmTransaction:f}}({chain:b,rpc:a.solanaRpcs[b].rpc,rpcSubscriptions:a.solanaRpcs[b].rpcSubscriptions,blockExplorerUrl:a.solanaRpcs[b].blockExplorerUrl??`https://explorer.solana.com?cluster=${b.replace("solana:","")}`}):null])),[a.solanaRpcs]);return(0,f.useCallback)(a=>{if(!b[a])throw Error(`No RPC configuration found for chain ${a}`);return b[a]},[b])}},98050:(a,b,c)=>{c.d(b,{R:()=>f,a:()=>e});var d=c(72291);let e=d.I4.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,f=d.I4.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`}};