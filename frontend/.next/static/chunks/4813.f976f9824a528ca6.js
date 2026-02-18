"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4813],{4956:(e,n,t)=>{t.d(n,{L:()=>r,V:()=>o,a:()=>s});var a=t(78912),i=t(48931);let r=a.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,s=(0,a.I4)(r)`
  color: var(--privy-color-accent);
`,o=a.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${i.L}
`},12440:(e,n,t)=>{t.d(n,{g:()=>i});var a=t(48507);function i(e){let[n]=Object.entries(a.D[e]).find(([e,n])=>"USDC"===n.symbol)??[];return n}},14227:(e,n,t)=>{t.d(n,{NJ:()=>o,vj:()=>s,vz:()=>r});var a=t(85550),i=t(58813);function r(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function s({wei:e,precision:n=3}){return parseFloat((0,a.c)(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"")}function o({amount:e,decimals:n}){return(0,i.J)(BigInt(e),n)}},14314:(e,n,t)=>{t.d(n,{R:()=>r,a:()=>i});var a=t(78912);let i=a.I4.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,r=a.I4.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`},16756:(e,n,t)=>{t.d(n,{O:()=>a});let a="sdk_fiat_on_ramp_completed_with_status"},19722:(e,n,t)=>{t.d(n,{u:()=>i});var a=t(5540);function i(e){let n=e.filter(e=>!a.o.has(e.id));return a.m.concat(n)}},26824:(e,n,t)=>{t.d(n,{I:()=>r});var a=t(73788),i=t(79682);let r=({icon:e,name:n})=>"string"==typeof e?(0,a.jsx)("img",{alt:`${n||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):void 0===e?(0,a.jsx)(i.A,{style:{height:24,width:24}}):e?(0,a.jsx)(e,{style:{height:24,width:24}}):null},35459:(e,n,t)=>{t.d(n,{g:()=>a});function a(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},40090:(e,n,t)=>{t.d(n,{a:()=>c,b:()=>g,f:()=>d,s:()=>u,u:()=>h,w:()=>p});var a=t(19514),i=t(16676),r=t(65936),s=t(75187),o=t(86249),l=t(60065).hp;function c(e){return new Uint8Array((0,a.BX)().decode(e).messageBytes)}async function d({solanaClient:e,tx:n}){let t=(0,i.Ul)().decode(c(n)),{value:a}=await e.rpc.getFeeForMessage(t).send();return a??0n}async function u({solanaClient:e,tx:n,replaceRecentBlockhash:t}){let{value:a}=await e.rpc.simulateTransaction((0,i.Ul)().decode(n),{commitment:"confirmed",encoding:"base64",sigVerify:!1,replaceRecentBlockhash:t}).send();if("BlockhashNotFound"===a.err&&t)throw Error("Simulation failed: Blockhash not found");return"BlockhashNotFound"===a.err?await u({solanaClient:e,tx:n,replaceRecentBlockhash:!0}):{logs:a.logs??[],error:a.err,hasError:!!a.err,hasFunds:a.logs?.every(e=>!/insufficient funds/gi.test(e)&&!/insufficient lamports/gi.test(e))??!0}}let g=(...e)=>{if(void 0===l)throw new o.a("Buffer is not defined.",void 0,o.b.BUFFER_NOT_DEFINED);return l.from(...e)};async function p({rpcSubscriptions:e,signature:n,timeout:t}){let a=new AbortController,i=await e.signatureNotifications(n,{commitment:"confirmed"}).subscribe({abortSignal:a.signal}),r=await Promise.race([new Promise(e=>{setTimeout(()=>{a.abort(),e(Error("Transaction confirmation timed out"))},t)}),new Promise(async e=>{for await(let n of i){if(a.abort(),n.value.err)return e(Error("Transaction confirmation failed"));e(void 0)}})]);if(r instanceof Error)throw r}function h(){let e=(0,s.u)(),n=(0,r.useMemo)(()=>Object.fromEntries(["solana:mainnet","solana:devnet","solana:testnet"].map(n=>[n,e.solanaRpcs[n]?function({rpc:e,rpcSubscriptions:n,chain:t,blockExplorerUrl:a}){let r=function({rpc:e,rpcSubscriptions:n}){return async t=>new Promise(async(a,r)=>{try{let r=await e.sendTransaction(g(t).toString("base64"),{preflightCommitment:"confirmed",encoding:"base64"}).send();await p({rpcSubscriptions:n,signature:r,timeout:1e4}),a({signature:new Uint8Array((0,i.nZ)().encode(r))})}catch(e){r(e)}})}({rpc:e,rpcSubscriptions:n});return{rpc:e,rpcSubscriptions:n,chain:t,blockExplorerUrl:a,sendAndConfirmTransaction:r}}({chain:n,rpc:e.solanaRpcs[n].rpc,rpcSubscriptions:e.solanaRpcs[n].rpcSubscriptions,blockExplorerUrl:e.solanaRpcs[n].blockExplorerUrl??`https://explorer.solana.com?cluster=${n.replace("solana:","")}`}):null])),[e.solanaRpcs]);return(0,r.useCallback)(e=>{if(!n[e])throw Error(`No RPC configuration found for chain ${e}`);return n[e]},[n])}},44813:(e,n,t)=>{t.r(n),t.d(n,{FundSolWalletWithExternalSolanaWallet:()=>eR,default:()=>eR});var a,i,r,s,o=t(73788),l=t(79259),c=t(65936),d=t(14227),u=t(74124),g=t(72853),p=t(64252),h=t(87288),f=t(26824),m=t(66656),v=t(4956),w=t(14314),y=t(75187),b=t(86249),A=t(79312),S=t(16676),x=t(19514),T=t(19122),E=t(23667),I=t(42904),C=t(88836),P=t(97365),j=t(7764),F=t(22353);let U=()=>{let{walletProxy:e,client:n}=(0,b.u)();return(0,c.useMemo)(()=>({signWithUserSigner:async({message:t,targetAppId:a})=>{if(!e)throw Error("Wallet proxy not initialized");let i=await n.getAccessToken();if(!i)throw Error("User must be authenticated");let{signature:r}=await e.signWithUserSigner({accessToken:i,message:t,targetAppId:a});return{signature:r}}}),[e,n])};var O=t(40090),W=t(69375);let k=["solana:mainnet","solana:devnet","solana:testnet"];function M(e,n){if(!Object.prototype.hasOwnProperty.call(e,n))throw TypeError("attempted to use private field on non-instance");return e}var N=0,_="__private_"+N+++"__implementation";function D(e,n){if(!Object.prototype.hasOwnProperty.call(e,n))throw TypeError("attempted to use private field on non-instance");return e}var L=0;function B(e){return"__private_"+L+++"_"+e}var z=B("_address"),R=B("_publicKey"),V=B("_chains"),$=B("_features"),H=B("_label"),J=B("_icon");class G{get address(){return D(this,z)[z]}get publicKey(){return D(this,R)[R].slice()}get chains(){return D(this,V)[V].slice()}get features(){return D(this,$)[$].slice()}get label(){return D(this,H)[H]}get icon(){return D(this,J)[J]}constructor({address:e,publicKey:n,label:t,icon:a}){Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:void 0}),Object.defineProperty(this,V,{writable:!0,value:void 0}),Object.defineProperty(this,$,{writable:!0,value:void 0}),Object.defineProperty(this,H,{writable:!0,value:void 0}),Object.defineProperty(this,J,{writable:!0,value:void 0}),D(this,z)[z]=e,D(this,R)[R]=n,D(this,V)[V]=k,D(this,H)[H]=t,D(this,J)[J]=a,D(this,$)[$]=["solana:signAndSendTransaction","solana:signTransaction","solana:signMessage"],new.target===G&&Object.freeze(this)}}function Z(e,n){if(!Object.prototype.hasOwnProperty.call(e,n))throw TypeError("attempted to use private field on non-instance");return e}var Q=0;function Y(e){return"__private_"+Q+++"_"+e}var K=Y("_listeners"),q=Y("_version"),X=Y("_name"),ee=Y("_icon"),en=Y("_injection"),et=Y("_isPrivyWallet"),ea=Y("_accounts"),ei=Y("_on"),er=Y("_emit"),es=Y("_off"),eo=Y("_connected"),el=Y("_connect"),ec=Y("_disconnect"),ed=Y("_signMessage"),eu=Y("_signAndSendTransaction"),eg=Y("_signTransaction");function ep(e,...n){Z(this,K)[K][e]?.forEach(e=>e.apply(null,n))}function eh(e,n){Z(this,K)[K][e]=Z(this,K)[K][e]?.filter(e=>n!==e)}function ef(){let{isHeadlessSigning:e,walletProxy:n,initializeWalletProxy:t,recoverEmbeddedWallet:a,openModal:i,privy:r,client:s}=(0,b.u)(),{user:o}=(0,C.u)(),{setModalData:l}=(0,A.a)(),{signWithUserSigner:c}=U();return{signMessage:({message:d,address:u,options:g})=>new Promise(async(p,h)=>{let f=(0,A.h)(o,u);if("privy"!==f?.walletClientType)return void h(new b.a("Wallet is not a Privy wallet",void 0,b.b.EMBEDDED_WALLET_NOT_FOUND));let{entropyId:m,entropyIdVerifier:v}=(0,P.g)(o,f),w=(0,A.b)(f),y=(0,O.b)(d).toString("base64");if(y.length<1)return void h(new b.a("Message must be a non-empty string",void 0,b.b.INVALID_MESSAGE));let S=async()=>{let e;if(!o)throw Error("User must be authenticated before signing with a Privy wallet");let i=await s.getAccessToken();if(!i)throw Error("User must be authenticated to use their embedded wallet.");let l=n??await t(15e3);if(!l)throw Error("Failed to initialize embedded wallet proxy.");if(!await a({address:f.address}))throw Error("Unable to connect to wallet");if(w){let n=await (0,E._)(r,c,{chain_type:"solana",method:"signMessage",params:{message:y,encoding:"base64"},wallet_id:f.id});if(!n.data||!("signature"in n.data))throw Error("Failed to sign message");e=n.data.signature}else{let{response:n}=await l.rpc({accessToken:i,entropyId:m,entropyIdVerifier:v,chainType:"solana",hdWalletIndex:f.walletIndex??0,requesterAppId:g?.uiOptions?.requesterAppId,request:{method:"signMessage",params:{message:y}}});e=n.data.signature}return e};if(e({showWalletUIs:g?.uiOptions?.showWalletUIs}))try{let e=await S(),n=new Uint8Array((0,O.b)(e,"base64"));p({signature:n})}catch(e){h(e)}else l({signMessage:{method:"solana_signMessage",data:y,confirmAndSign:S,onSuccess:e=>{p({signature:new Uint8Array((0,O.b)(e,"base64"))})},onFailure:e=>{h(e)},uiOptions:g?.uiOptions??{}},connectWallet:{recoveryMethod:f.recoveryMethod,connectingWalletAddress:f.address,entropyId:m,entropyIdVerifier:v,isUnifiedWallet:w,onCompleteNavigateTo:"SignRequestScreen",onFailure:e=>{h(new b.a("Failed to connect to wallet",e,b.b.UNKNOWN_CONNECT_WALLET_ERROR))}}}),i("EmbeddedWalletConnectingScreen")})}}function em(){let{isHeadlessSigning:e,openModal:n}=(0,b.u)(),{setModalData:t}=(0,A.a)(),{signMessage:a}=ef(),{user:i}=(0,C.u)();return{signTransaction:async({transaction:r,options:s,chain:o="solana:mainnet",address:l})=>{async function c(e){let n,t,{signature:i}=await a({message:(0,O.a)(e),address:l,options:{...s,uiOptions:{...s?.uiOptions,showWalletUIs:!1}}});return{signedTransaction:(n=structuredClone((0,x.BX)().decode(e)),(t=(0,T.hl)(l))in n.signatures&&(n.signatures[t]=i),new Uint8Array((0,x.l9)().encode(n)))}}return e({showWalletUIs:s?.uiOptions?.showWalletUIs})?c(r):new Promise(async(e,a)=>{let d=(0,A.h)(i,l);if("privy"!==d?.walletClientType)return void a(new b.a("Wallet is not a Privy wallet",void 0,b.b.EMBEDDED_WALLET_NOT_FOUND));let{entropyId:u,entropyIdVerifier:g}=(0,P.g)(i,d),p=(0,A.b)(d);function h(e){return n=>{a(n instanceof b.a?n:new b.a("Failed to connect to wallet",n,e))}}let f={account:d,transaction:r,chain:o,signOnly:!0,uiOptions:s?.uiOptions||{},onConfirm:c,onSuccess:e,onFailure:h(b.b.TRANSACTION_FAILURE)};t({connectWallet:{recoveryMethod:d.recoveryMethod,connectingWalletAddress:d.address,entropyId:u,entropyIdVerifier:g,isUnifiedWallet:p,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:h(b.b.UNKNOWN_CONNECT_WALLET_ERROR)},standardSignAndSendTransaction:f}),n("EmbeddedWalletConnectingScreen")})}}}let ev=new class extends j.A{setImplementation(e){M(this,_)[_]=e}async signMessage(e){return M(this,_)[_].signMessage(e)}async signAndSendTransaction(e){return M(this,_)[_].signAndSendTransaction(e)}async signTransaction(e){return M(this,_)[_].signTransaction(e)}constructor(e){super(),Object.defineProperty(this,_,{writable:!0,value:void 0}),M(this,_)[_]=e}}({signTransaction:(0,b.l)("signTransaction was not injected"),signAndSendTransaction:(0,b.l)("signAndSendTransaction was not injected"),signMessage:(0,b.l)("signMessage was not injected")}),ew=new class{get version(){return Z(this,q)[q]}get name(){return Z(this,X)[X]}get icon(){return Z(this,ee)[ee]}get chains(){return k.slice()}get features(){return{"standard:connect":{version:"1.0.0",connect:Z(this,el)[el]},"standard:disconnect":{version:"1.0.0",disconnect:Z(this,ec)[ec]},"standard:events":{version:"1.0.0",on:Z(this,ei)[ei]},"solana:signAndSendTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signAndSendTransaction:Z(this,eu)[eu]},"solana:signTransaction":{version:"1.0.0",supportedTransactionVersions:["legacy",0],signTransaction:Z(this,eg)[eg]},"solana:signMessage":{version:"1.0.0",signMessage:Z(this,ed)[ed]},"privy:":{privy:{signMessage:Z(this,en)[en].signMessage,signTransaction:Z(this,en)[en].signTransaction,signAndSendTransaction:Z(this,en)[en].signAndSendTransaction}}}}get accounts(){return Z(this,ea)[ea].slice()}get isPrivyWallet(){return Z(this,et)[et]}constructor({name:e,icon:n,version:t,injection:a,wallets:i}){Object.defineProperty(this,er,{value:ep}),Object.defineProperty(this,es,{value:eh}),Object.defineProperty(this,K,{writable:!0,value:void 0}),Object.defineProperty(this,q,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:void 0}),Object.defineProperty(this,ee,{writable:!0,value:void 0}),Object.defineProperty(this,en,{writable:!0,value:void 0}),Object.defineProperty(this,et,{writable:!0,value:void 0}),Object.defineProperty(this,ea,{writable:!0,value:void 0}),Object.defineProperty(this,ei,{writable:!0,value:void 0}),Object.defineProperty(this,eo,{writable:!0,value:void 0}),Object.defineProperty(this,el,{writable:!0,value:void 0}),Object.defineProperty(this,ec,{writable:!0,value:void 0}),Object.defineProperty(this,ed,{writable:!0,value:void 0}),Object.defineProperty(this,eu,{writable:!0,value:void 0}),Object.defineProperty(this,eg,{writable:!0,value:void 0}),Z(this,K)[K]={},Z(this,ei)[ei]=(e,n)=>(Z(this,K)[K][e]?.push(n)||(Z(this,K)[K][e]=[n]),()=>Z(this,es)[es](e,n)),Z(this,eo)[eo]=e=>{null!=e&&(Z(this,ea)[ea]=e.map(({address:e})=>new G({address:e,publicKey:F.tw.decode(e)}))),Z(this,er)[er]("change",{accounts:this.accounts})},Z(this,el)[el]=async()=>(Z(this,er)[er]("change",{accounts:this.accounts}),{accounts:this.accounts}),Z(this,ec)[ec]=async()=>{Z(this,er)[er]("change",{accounts:this.accounts})},Z(this,ed)[ed]=async(...e)=>{let n=[];for(let{account:t,...a}of e){let{signature:e}=await Z(this,en)[en].signMessage({...a,address:t.address});n.push({signedMessage:a.message,signature:e})}return n},Z(this,eu)[eu]=async(...e)=>{let n=[];for(let t of e){let{signature:e}=await Z(this,en)[en].signAndSendTransaction({...t,transaction:t.transaction,address:t.account.address,chain:t.chain||"solana:mainnet",options:t.options});n.push({signature:e})}return n},Z(this,eg)[eg]=async(...e)=>{let n=[];for(let{transaction:t,account:a,options:i,chain:r}of e){let{signedTransaction:e}=await Z(this,en)[en].signTransaction({transaction:t,address:a.address,chain:r||"solana:mainnet",options:i});n.push({signedTransaction:e})}return n},Z(this,X)[X]=e,Z(this,ee)[ee]=n,Z(this,q)[q]=t,Z(this,en)[en]=a,Z(this,ea)[ea]=[],Z(this,et)[et]=!0,a.on("accountChanged",Z(this,eo)[eo],this),Z(this,eo)[eo](i)}}({name:"Privy",version:"1.0.0",icon:"data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==",wallets:[],injection:ev});var ey=t(66428),eb=t(16756),eA=t(92722),eS=t(38290),ex=t(64450),eT=t(33918),eE=t(77020),eI=((a=eI||{})[a.Uninitialized=0]="Uninitialized",a[a.Initialized=1]="Initialized",a),eC=((i=eC||{})[i.Legacy=0]="Legacy",i[i.Current=1]="Current",i),eP=((r=eP||{})[r.Nonce=0]="Nonce",r),ej=((s=ej||{})[s.CreateAccount=0]="CreateAccount",s[s.Assign=1]="Assign",s[s.TransferSol=2]="TransferSol",s[s.CreateAccountWithSeed=3]="CreateAccountWithSeed",s[s.AdvanceNonceAccount=4]="AdvanceNonceAccount",s[s.WithdrawNonceAccount=5]="WithdrawNonceAccount",s[s.InitializeNonceAccount=6]="InitializeNonceAccount",s[s.AuthorizeNonceAccount=7]="AuthorizeNonceAccount",s[s.Allocate=8]="Allocate",s[s.AllocateWithSeed=9]="AllocateWithSeed",s[s.AssignWithSeed=10]="AssignWithSeed",s[s.TransferSolWithSeed=11]="TransferSolWithSeed",s[s.UpgradeNonceAccount=12]="UpgradeNonceAccount",s);function eF(e){return!!e&&"object"==typeof e&&"address"in e&&(0,eS.Pl)(e)}var eU=t(6530),eO=t(66010),eW=t(47909),ek=t(48507),eM=t(12440),eN=t(35459);function e_({rows:e}){return(0,o.jsx)(w.a,{children:e.filter(e=>!!e).map((e,n)=>null!=e.value||e.isLoading?(0,o.jsxs)(w.R,{children:[(0,o.jsx)(v.L,{children:e.label}),(0,o.jsx)(v.V,{$isLoading:e.isLoading,children:e.value})]},n):null)})}function eD(e){return BigInt(Math.floor(1e9*parseFloat(e)))}function eL(e){return+eB.format(parseFloat(e.toString())/1e9)}t(28349),t(30404);let eB=Intl.NumberFormat(void 0,{maximumFractionDigits:8});async function ez({tx:e,solanaClient:n,amount:t,asset:a,tokenPrice:i}){if(!e)return null;if("SOL"===a&&i){let a=eD(t),r=(0,ek.g)(a,i),s=await (0,O.f)({solanaClient:n,tx:e});return{amountInUsd:r,feeInUsd:i?(0,ek.g)(s,i):void 0,totalInUsd:(0,ek.g)(a+s,i)}}if("USDC"===a&&i){let a,r="$"+t,s=await (0,O.f)({solanaClient:n,tx:e}),o=(a=parseFloat(s.toString())/ek.L*i)<.01?0:a;return{amountInUsd:r,feeInUsd:(0,ek.g)(s,i),totalInUsd:"$"+(parseFloat(t)+o).toFixed(2)}}if("SOL"===a){let a=eD(t),i=await (0,O.f)({solanaClient:n,tx:e});return{amountInSol:t+" SOL",feeInSol:eL(i)+" SOL",totalInSol:eL(a+i)+" SOL"}}return{amountInUsdc:t+" USDC",feeInSol:eL(await (0,O.f)({solanaClient:n,tx:e}))+" SOL"}}let eR={component:function(){let e=(0,y.u)(),{closePrivyModal:n,createAnalyticsEvent:t}=(0,b.u)(),{data:a,setModalData:i,navigate:r}=(0,A.a)(),{wallets:s}=function(){let{ready:e,wallets:n}=function(){let{client:e}=(0,b.u)(),{ready:n,wallet:t}=function(){let{ready:e}=(0,P.u)(),{user:n}=(0,C.u)(),{signMessage:t}=ef(),{signTransaction:a}=em(),{signAndSendTransaction:i}=function(){let e=(0,y.u)(),{isHeadlessSigning:n,openModal:t,privy:a}=(0,b.u)(),{setModalData:i}=(0,A.a)(),{signTransaction:r}=em(),s=(0,O.u)(),{user:o}=(0,C.u)(),{signWithUserSigner:l}=U();return{signAndSendTransaction:async({transaction:c,address:d,chain:u="solana:mainnet",options:g})=>{let p=(0,A.h)(o,d);if("privy"!==p?.walletClientType)throw new b.a("Wallet is not a Privy wallet",void 0,b.b.EMBEDDED_WALLET_NOT_FOUND);let h=(0,A.b)(p);async function f(e){if(g?.sponsor)return await (async e=>{if(!h)throw new b.a("Sponsoring transactions is only supported for wallets on the TEE stack",b.b.INVALID_DATA);let n=await (0,E._)(a,l,{chain_type:"solana",method:"signAndSendTransaction",sponsor:!0,params:{transaction:(0,O.b)(e).toString("base64"),encoding:"base64"},caip2:`solana:${(await s(u).rpc.getGenesisHash().send()).substring(0,32)}`,wallet_id:p.id});if(n.data&&"hash"in n.data)return{signature:F.tw.decode(n.data.hash)};throw Error("Failed to sign and send transaction")})(e);let{signedTransaction:n}=await r({transaction:e,address:d,chain:u,options:{...g,uiOptions:{...g?.uiOptions,showWalletUIs:!1}}}),{signature:t}=await s(u).sendAndConfirmTransaction(n);return{signature:t}}return n({showWalletUIs:g?.uiOptions?.showWalletUIs})?f(c):new Promise(async(n,a)=>{let r,s,{entropyId:l,entropyIdVerifier:m}=(0,P.g)(o,p);function v(e){return n=>{a(n instanceof b.a?n:new b.a("Failed to connect to wallet",n,e))}}let w={account:p,transaction:c,chain:u,signOnly:!1,uiOptions:g?.uiOptions||{},onConfirm:f,onSuccess:n,onFailure:v(b.b.TRANSACTION_FAILURE),isSponsored:!!g?.sponsor},y={recoveryMethod:p.recoveryMethod,connectingWalletAddress:p.address,entropyId:l,entropyIdVerifier:m,isUnifiedWallet:h,onCompleteNavigateTo:"StandardSignAndSendTransactionScreen",onFailure:v(b.b.UNKNOWN_CONNECT_WALLET_ERROR)};e.fundingConfig&&(r=(0,W.g)({address:d,appConfig:e,methodScreen:"FundingMethodSelectionScreen",fundWalletConfig:{...g,asset:"native-currency",chain:u},externalSolanaFundingScreen:"FundSolWalletWithExternalSolanaWallet"}),s={amount:e.fundingConfig.defaultRecommendedAmount,asset:"SOL",chain:u,destinationAddress:d,afterSuccessScreen:"StandardSignAndSendTransactionScreen",sourceWalletData:void 0}),i({connectWallet:y,standardSignAndSendTransaction:w,funding:r,solanaFundingData:s}),t("EmbeddedWalletConnectingScreen")})}}}(),r=(0,c.useMemo)(()=>{let e=[...(0,A.o)(n).sort((e,n)=>(e.walletIndex??0)-(n.walletIndex??0))],t=(0,A.k)(n);return t.length?[...e,...t]:e},[n]),s=(0,c.useMemo)(()=>({signMessage:async({message:e,address:n,options:a})=>await t({message:e,address:n,options:a}),signTransaction:async({transaction:e,address:n,chain:t,options:i})=>await a({transaction:e,address:n,chain:t,options:i}),async signAndSendTransaction({transaction:e,address:n,chain:t,options:a}){let{signature:r}=await i({transaction:e,address:n,chain:t,options:a});return{signature:r}}}),[t,a,i]);return(0,c.useEffect)(()=>{ev?.setImplementation(s)},[s]),(0,c.useEffect)(()=>{var n;!e||(n=ew.accounts).length===r.length&&n.every((e,n)=>e.address===r[n]?.address)||ev?.emit("accountChanged",r)},[e,r]),{ready:e,wallet:ew}}(),[a,i]=(0,c.useState)([]),[r,s]=(0,c.useState)([]);return(0,c.useEffect)(()=>{let e=[t,...a.filter(e=>"solana"===e.chainType&&!!e.wallet.features).map(e=>e.wallet)];s(e);let n=a.flatMap(n=>{let t=()=>s([...e]);return n.on("walletsUpdated",t),{connector:n,off:t}}),i=e.map(n=>n.features["standard:events"]?.on("change",()=>{s([...e])}));return()=>{i.forEach(e=>e?.()),n.forEach(({connector:e,off:n})=>e.off("walletsUpdated",n))}},[a]),(0,c.useEffect)(()=>{i(e.connectors?.walletConnectors.filter(e=>"solana"===e.chainType)??[]);let n=()=>{i(e.connectors?.walletConnectors.filter(e=>"solana"===e.chainType)??[])};return e.connectors?.on("connectorInitialized",n),()=>{e.connectors?.off("connectorInitialized",n)}},[n,e.connectors]),{ready:n,wallets:r}}();return{ready:e,wallets:(0,c.useMemo)(()=>n.flatMap(e=>e.accounts.map(n=>new I.W({wallet:e,account:n}))),[n])}}(),[v,w]=(0,c.useState)("preparing"),[T,j]=(0,c.useState)(),[k,M]=(0,c.useState)(),[N,_]=(0,c.useState)();if(!a?.solanaFundingData)throw Error("Funding config is missing");if(!a.solanaFundingData.sourceWalletData)throw Error("Funding config is missing source wallet data");let{amount:D,asset:L,chain:B,sourceWalletData:z,destinationAddress:R,afterSuccessScreen:V}=a.solanaFundingData,$=s.find(e=>e.address===z.address&&(0,W.t)(z.walletClientType)===(0,W.t)(e.standardWallet.name)),H=(0,O.u)()(B),{tokenPrice:J,isTokenPriceLoading:G}=(0,ey.u)("solana");return(0,c.useEffect)(()=>{if("preparing"!==v||G||!$)return;let e="SOL"===L?eD(D):BigInt(Math.floor(1e6*parseFloat(D)));M({amount:("SOL"===L&&J?(0,ek.g)(e,J):D)??D}),("SOL"===L?async function({solanaClient:e,source:n,destination:t,amountInLamports:a}){let{value:i}=await e.rpc.getLatestBlockhash().send(),r={address:n},s=(0,eU.F)((0,eO.mN)({version:0}),e=>(0,eS.pt)(r,e),e=>(0,eO.S$)(i,e),e=>{var n;let i,s,o,l;return(0,eO.az)((i=(void 0)??"11111111111111111111111111111111",s={source:{value:(n={amount:a,source:r,destination:t}).source??null,isWritable:!0},destination:{value:n.destination??null,isWritable:!0}},o={...n},Object.freeze({accounts:[(l=e=>{if(!e.value)return;let n=e.isWritable?eA.Uv.WRITABLE:eA.Uv.READONLY;return Object.freeze({address:function(e){if(!e)throw Error("Expected a Address.");return"object"==typeof e&&"address"in e?e.address:Array.isArray(e)?e[0]:e}(e.value),role:eF(e.value)?(0,eA.MR)(n):n,...eF(e.value)?{signer:e.value}:{}})})(s.source),l(s.destination)],data:(0,ex.FU)((0,eT.a5)([["discriminator",(0,eE.PL)()],["amount",(0,eE.eC)()]]),e=>({...e,discriminator:2})).encode(o),programAddress:i})),e)},e=>(0,x.i5)(e));return new Uint8Array((0,x.l9)().encode(s))}({solanaClient:H,source:$.address,destination:R,amountInLamports:e}):async function({solanaClient:e,source:n,destination:t,amountInBaseUnits:a}){let i=(0,eM.g)(e.chain),{value:r}=await e.rpc.getLatestBlockhash().send(),s={address:n},[o]=await (0,eW._mM)({mint:i,owner:n,tokenProgram:ek.T}),[l]=await (0,eW._mM)({mint:i,owner:t,tokenProgram:ek.T}),[c,d]=await Promise.all([e.rpc.getAccountInfo(o,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null),e.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send().catch(()=>null)]);if(!c?.value)throw Error(`Source token account does not exist for address: ${n}`);let u=(0,eW.PUP)({payer:s,ata:l,owner:t,mint:i}),g=(0,eU.F)((0,eO.mN)({version:0}),e=>(0,eS.pt)(s,e),e=>(0,eO.S$)(r,e),e=>d?.value?e:(0,eO.az)(u,e),e=>(0,eO.az)((0,eW.Q7D)({source:o,destination:l,authority:s,amount:a}),e),e=>(0,x.i5)(e));return new Uint8Array((0,x.l9)().encode(g))}({solanaClient:H,source:$.address,destination:R,amountInBaseUnits:e})).then(j).catch(e=>{w("error"),_(e)})},[v,D,L,B,$,R,G,J]),(0,c.useEffect)(()=>{"preparing"===v&&T&&ez({tx:T,solanaClient:H,amount:D,asset:L,tokenPrice:J}).then(e=>{w("loaded"),M({amount:e?.amountInUsd??e?.amountInUsdc??e?.amountInSol??D,fee:e?.feeInUsd??e?.feeInSol,total:e?.totalInUsd??e?.totalInSol})}).catch(e=>{w("error"),_(e)})},[T,D,L,v,J]),(0,c.useEffect)(()=>{"error"===v&&N&&(i({errorModalData:{error:N,previousScreen:"FundSolWalletWithExternalSolanaWallet"},solanaFundingData:a.solanaFundingData}),r("ErrorScreen",!1))},[v,r]),(0,c.useEffect)(()=>{if("success"!==v)return;let e=setTimeout(V?()=>r(V):n,y.t);return()=>clearTimeout(e)},[v]),(0,o.jsxs)(o.Fragment,"success"===v?{children:[(0,o.jsx)(h.t,{}),(0,o.jsx)(g.b,{}),(0,o.jsxs)(g.c,{children:[(0,o.jsx)(l.A,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,o.jsx)(p.C,{title:"Success!",description:`You’ve successfully added ${D} ${L} to your ${e.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,o.jsx)(g.R,{}),(0,o.jsx)(u.B,{})]}:"preparing"===v||"loaded"===v||"sending"===v?{children:[(0,o.jsx)(h.t,{}),(0,o.jsx)(g.e,{style:{marginTop:"16px"},children:(0,o.jsx)(f.I,{icon:$?.standardWallet.icon,name:$?.standardWallet.name})}),(0,o.jsx)(p.C,{style:{marginTop:"8px",marginBottom:"12px"},title:"sending"===v&&$?`Confirming with ${$.standardWallet.name}`:"Confirm transaction"}),(0,o.jsx)(e_,{rows:[{label:"Source",value:(0,d.vz)(z.address)},{label:"Destination",value:(0,d.vz)(R)},{label:"Network",value:(0,eN.g)(B)},{label:"Amount",value:k?.amount,isLoading:"preparing"===v},{label:"Estimated fee",value:k?.fee,isLoading:"preparing"===v},{label:"Total",value:k?.total,isLoading:"preparing"===v}]}),(0,o.jsx)(u.P,{style:{marginTop:"1rem"},loading:"preparing"===v||"sending"===v,onClick:function(){"loaded"===v&&T&&$&&(w("sending"),(async function({transaction:e,chain:n,sourceWallet:t,solanaClient:a}){var i;let{hasFunds:r}=await (0,O.s)({solanaClient:a,tx:e});if(!r)throw new b.a(`Wallet ${(0,d.vz)(t.address)} does not have enough funds.`,void 0,b.b.INSUFFICIENT_BALANCE);let s=(i=(await t.signAndSendTransaction({transaction:e,chain:n}).catch(e=>{throw new b.a("Transaction was rejected by the user",e,b.b.TRANSACTION_FAILURE)})).signature,(0,S.BC)().decode(i));return await (0,O.w)({rpcSubscriptions:a.rpcSubscriptions,signature:s,timeout:2e4}),s})({solanaClient:H,transaction:T,chain:B,sourceWallet:$}).then(e=>{w("success"),t({eventName:eb.O,payload:{provider:"external",status:"success",txHash:e,address:$.address,value:D,chainType:"solana",clusterName:B,token:L,destinationAddress:R,destinationValue:D,destinationChainType:"solana",destinationClusterName:B,destinationToken:L}})}).catch(e=>{w("error"),_(e)}))},children:"Confirm"}),(0,o.jsx)(u.B,{})]}:{children:[(0,o.jsx)(h.t,{}),(0,o.jsx)(m.N,{}),(0,o.jsx)("div",{style:{marginTop:"1rem"}}),(0,o.jsx)(u.B,{})]})}}},48507:(e,n,t)=>{t.d(n,{A:()=>o,D:()=>d,J:()=>c,L:()=>a,R:()=>l,S:()=>i,T:()=>r,a:()=>s,g:()=>u});let a=1e9,i="11111111111111111111111111111111",r="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",s="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",o="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",l=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],c=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],d={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,n){let t=parseFloat(e.toString())/a,i=g.format(n*t);return"$0.00"===i?"<$0.01":i}let g=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},48931:(e,n,t)=>{t.d(n,{L:()=>r});var a=t(78912);let i=(0,a.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,r=(0,a.AH)`
  ${e=>e.$isLoading?(0,a.AH)`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},64252:(e,n,t)=>{t.d(n,{C:()=>s,S:()=>r});var a=t(73788),i=t(78912);let r=({title:e,description:n,children:t,...i})=>(0,a.jsx)(o,{...i,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:e}),"string"==typeof n?(0,a.jsx)("p",{children:n}):n,t]})});(0,i.I4)(r)`
  margin-bottom: 24px;
`;let s=({title:e,description:n,icon:t,children:i,...r})=>(0,a.jsxs)(l,{...r,children:[t||null,(0,a.jsx)("h3",{children:e}),n&&"string"==typeof n?(0,a.jsx)("p",{children:n}):n,i]}),o=i.I4.div`
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
`,l=(0,i.I4)(o)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},66428:(e,n,t)=>{t.d(n,{u:()=>l});var a=t(65936),i=t(19722),r=t(75187),s=t(86249),o=t(75549);function l(e){let{tokenPrice:n,isTokenPriceLoading:t,tokenPriceError:l}=(e=>{let{showFiatPrices:n,getUsdTokenPrice:t,chains:o}=(0,s.u)(),[l,c]=(0,a.useState)(!0),[d,u]=(0,a.useState)(void 0),[g,p]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{e||=r.s;let a=(0,i.u)(o).find(n=>n.id===Number(e));(async()=>{if(n){if(!a)return c(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{c(!0);let e=await t(a);e?p(e):u(Error(`Unable to fetch token price on chain id ${a.id}`))}catch(e){u(e)}finally{c(!1)}}else c(!1)})()},[e]),{tokenPrice:g,isTokenPriceLoading:l,tokenPriceError:d}})("solana"===e?-1:e),{solPrice:c,isSolPriceLoading:d,solPriceError:u}=(0,o.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:c,isTokenPriceLoading:d,tokenPriceError:u}:{tokenPrice:n,isTokenPriceLoading:t,tokenPriceError:l}}},66656:(e,n,t)=>{t.d(n,{N:()=>r});var a=t(73788),i=t(78912);let r=({size:e,centerIcon:n})=>(0,a.jsx)(s,{$size:e,children:(0,a.jsxs)(o,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(d,{}),n?(0,a.jsx)(l,{children:n}):null]})}),s=i.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,o=i.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,l=i.I4.div`
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
`,c=i.I4.div`
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
`,d=i.I4.div`
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
`},72853:(e,n,t)=>{t.d(n,{B:()=>i,C:()=>o,F:()=>c,H:()=>s,R:()=>p,S:()=>u,a:()=>d,b:()=>g,c:()=>l,d:()=>h,e:()=>r});var a=t(78912);let i=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,r=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,s=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,o=(0,a.I4)(r)`
  padding: 20px 0;
`,l=(0,a.I4)(r)`
  gap: 16px;
`,c=a.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;a.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=a.I4.div`
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
`,g=a.I4.div`
  height: 16px;
`,p=a.I4.div`
  height: 12px;
`;a.I4.div`
  position: relative;
`;let h=a.I4.div`
  height: ${e=>e.height??"12"}px;
`;a.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},75549:(e,n,t)=>{t.d(n,{u:()=>r});var a=t(65936),i=t(86249);let r=({enabled:e=!0}={})=>{let{showFiatPrices:n,getUsdPriceForSol:t}=(0,i.u)(),[r,s]=(0,a.useState)(!0),[o,l]=(0,a.useState)(void 0),[c,d]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{(async()=>{if(n&&e)try{s(!0);let e=await t();e?d(e):l(Error("Unable to fetch SOL price"))}catch(e){l(e)}finally{s(!1)}else s(!1)})()},[]),{solPrice:c,isSolPriceLoading:r,solPriceError:o}}},79259:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(65936);let i=a.forwardRef(function({title:e,titleId:n,...t},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?a.createElement("title",{id:n},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})},79682:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(65936);let i=a.forwardRef(function({title:e,titleId:n,...t},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},t),e?a.createElement("title",{id:n},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))})},87288:(e,n,t)=>{t.d(n,{t:()=>s});var a=t(73788),i=t(79312),r=t(74124);function s({title:e}){let{currentScreen:n,navigateBack:t,navigate:s,data:o,setModalData:l}=(0,i.a)();return(0,a.jsx)(r.M,{title:e,backFn:"ManualTransferScreen"===n?t:n===o?.funding?.methodScreen?o.funding.comingFromSendTransactionScreen?()=>s("SendTransactionScreen"):void 0:o?.funding?.methodScreen?()=>{let e=o.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:o?.solanaFundingData}),s(e.methodScreen)}:void 0})}}}]);