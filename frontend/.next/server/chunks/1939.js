"use strict";exports.id=1939,exports.ids=[1939],exports.modules={8650:(a,b,c)=>{c.d(b,{a:()=>k,u:()=>l});var d=c(2035),e=c(7719),f=c(50579),g=c(67331),h=c(2808),i=c(92824);let j="moonpay";function k(a){return parseFloat(a)}function l(a,b=!1){let[c,k]=(0,e.useState)(null),{createAnalyticsEvent:m}=(0,g.u)(),{data:n,navigate:o,setModalData:p}=(0,h.a)(),q=n?.funding,r=(0,e.useRef)(0);return(0,e.useEffect)(()=>{let c=setInterval(async()=>{if(a)try{let[e]=await async function(a,b){return(0,d.OT)(`${b?f.M:f.v}/transactions/ext/${a}`,{query:{apiKey:b?f.w:f.x}})}(a,b),g="waitingAuthorization"===e.status&&"credit_debit_card"===e.paymentMethod?"pending":e.status;if(["failed","completed","awaitingAuthorization"].includes(g)&&(m({eventName:i.O,payload:{status:g,provider:j,paymentMethod:e.paymentMethod,cardPaymentType:e.cardPaymentType,currency:e.currency?.code,baseCurrencyAmount:e.baseCurrencyAmount,quoteCurrencyAmount:e.quoteCurrencyAmount,feeAmount:e.feeAmount,extraFeeAmount:e.extraFeeAmount,networkFeeAmount:e.networkFeeAmount,isSandbox:b}}),clearInterval(c)),"failed"===g||"serviceFailure"===g)return p({funding:{...q,errorMessage:"Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."},solanaFundingData:n?.solanaFundingData}),void o("FundingMethodSelectionScreen");k(g)}catch(a){404!==a.response?.status&&(r.current+=1),r.current>=3&&(m({eventName:i.O,payload:{status:"serviceFailure",provider:j}}),clearInterval(c),p({funding:{...q,errorMessage:"Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."},solanaFundingData:n?.solanaFundingData}),o("FundingMethodSelectionScreen"))}},3e3);return()=>clearInterval(c)},[a,r]),c}},12388:(a,b,c)=>{c.d(b,{A:()=>e});var d=c(7719);let e=d.forwardRef(function({title:a,titleId:b,...c},e){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":b},c),a?d.createElement("title",{id:b},a):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))})},21242:(a,b,c)=>{c.d(b,{t:()=>g});var d=c(66150),e=c(2808),f=c(55164);function g({title:a}){let{currentScreen:b,navigateBack:c,navigate:g,data:h,setModalData:i}=(0,e.a)();return(0,d.jsx)(f.M,{title:a,backFn:"ManualTransferScreen"===b?c:b===h?.funding?.methodScreen?h.funding.comingFromSendTransactionScreen?()=>g("SendTransactionScreen"):void 0:h?.funding?.methodScreen?()=>{let a=h.funding;a.usingDefaultFundingMethod&&(a.usingDefaultFundingMethod=!1),i({funding:a,solanaFundingData:h?.solanaFundingData}),g(a.methodScreen)}:void 0})}},21939:(a,b,c)=>{c.r(b),c.d(b,{FundingMethodSelectionScreen:()=>R,default:()=>R});var d=c(66150),e=c(7719);let f=e.forwardRef(function({title:a,titleId:b,...c},d){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":b},c),a?e.createElement("title",{id:b},a):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"}))}),g=e.forwardRef(function({title:a,titleId:b,...c},d){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":b},c),a?e.createElement("title",{id:b},a):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"}),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"}))});var h=c(79990),i=c(78427),j=c(55164),k=c(21242),l=c(54355),m=c(50017),n=c(50579),o=c(69712),p=c(67331),q=c(2808),r=c(8327),s=c(66482),t=c(42118),u=c(4325),v=c(88624),w=c(31401),x=c(88767),y=c(62609),z=c(54734);let A=new Set([u.r.id,v.E.id,w.R.id,x.n.id,y.D.id,z.m.id]),B=new Set([u.r.id,v.E.id,x.n.id,w.R.id,y.D.id,z.m.id]),C={buy:"CARD",send:"CRYPTO_ACCOUNT"},D={USDC:"2b92315d-eab7-5bef-84fa-089a131333f5",ETH:"d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",BTC:"5b71fc48-3dd3-540c-809b-f8c94d0e68b5",SOL:"4f039497-3af8-5bb3-951c-6df9afa9be1c",POL:"026bcc1e-9163-591c-a709-34dd18b2e7a1"};u.r.id,v.E.id,w.R.id,x.n.id,y.D.id,z.m.id;var E=c(90653),F=c(99041),G=c(8650),H=c(87900);c(19078),c(11765),c(43132);let I=a=>(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 210.2",xmlSpace:"preserve",...a,children:(0,d.jsx)("path",{d:"M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9  C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2  c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7  c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2  C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z   M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2  c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8  c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4  l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5  l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"})}),J=a=>(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 38.1",xmlSpace:"preserve",...a,children:[(0,d.jsx)("path",{style:{fill:"#5F6368"},d:"M37.8,19.7V29h-3V6h7.8c1.9,0,3.7,0.7,5.1,2c1.4,1.2,2.1,3,2.1,4.9c0,1.9-0.7,3.6-2.1,4.9c-1.4,1.3-3.1,2-5.1,2  L37.8,19.7L37.8,19.7z M37.8,8.8v8h5c1.1,0,2.2-0.4,2.9-1.2c1.6-1.5,1.6-4,0.1-5.5c0,0-0.1-0.1-0.1-0.1c-0.8-0.8-1.8-1.3-2.9-1.2  L37.8,8.8L37.8,8.8z"}),(0,d.jsx)("path",{style:{fill:"#5F6368"},d:"M56.7,12.8c2.2,0,3.9,0.6,5.2,1.8s1.9,2.8,1.9,4.8V29H61v-2.2h-0.1c-1.2,1.8-2.9,2.7-4.9,2.7  c-1.7,0-3.2-0.5-4.4-1.5c-1.1-1-1.8-2.4-1.8-3.9c0-1.6,0.6-2.9,1.8-3.9c1.2-1,2.9-1.4,4.9-1.4c1.8,0,3.2,0.3,4.3,1v-0.7  c0-1-0.4-2-1.2-2.6c-0.8-0.7-1.8-1.1-2.9-1.1c-1.7,0-3,0.7-3.9,2.1l-2.6-1.6C51.8,13.8,53.9,12.8,56.7,12.8z M52.9,24.2  c0,0.8,0.4,1.5,1,1.9c0.7,0.5,1.5,0.8,2.3,0.8c1.2,0,2.4-0.5,3.3-1.4c1-0.9,1.5-2,1.5-3.2c-0.9-0.7-2.2-1.1-3.9-1.1  c-1.2,0-2.2,0.3-3,0.9C53.3,22.6,52.9,23.3,52.9,24.2z"}),(0,d.jsx)("path",{style:{fill:"#5F6368"},d:"M80,13.3l-9.9,22.7h-3l3.7-7.9l-6.5-14.7h3.2l4.7,11.3h0.1l4.6-11.3H80z"}),(0,d.jsx)("path",{style:{fill:"#4285F4"},d:"M25.9,17.7c0-0.9-0.1-1.8-0.2-2.7H13.2v5.1h7.1c-0.3,1.6-1.2,3.1-2.6,4v3.3H22C24.5,25.1,25.9,21.7,25.9,17.7z"}),(0,d.jsx)("path",{style:{fill:"#34A853"},d:"M13.2,30.6c3.6,0,6.6-1.2,8.8-3.2l-4.3-3.3c-1.2,0.8-2.7,1.3-4.5,1.3c-3.4,0-6.4-2.3-7.4-5.5H1.4v3.4  C3.7,27.8,8.2,30.6,13.2,30.6z"}),(0,d.jsx)("path",{style:{fill:"#FBBC04"},d:"M5.8,19.9c-0.6-1.6-0.6-3.4,0-5.1v-3.4H1.4c-1.9,3.7-1.9,8.1,0,11.9L5.8,19.9z"}),(0,d.jsx)("path",{style:{fill:"#EA4335"},d:"M13.2,9.4c1.9,0,3.7,0.7,5.1,2l0,0l3.8-3.8c-2.4-2.2-5.6-3.5-8.8-3.4c-5,0-9.6,2.8-11.8,7.3l4.4,3.4  C6.8,11.7,9.8,9.4,13.2,9.4z"})]}),K=a=>{let[b,c]=(0,e.useState)();return(0,e.useEffect)(()=>{a().then(a=>{c(a)}).catch(()=>{})},[]),b},L={[u.r.id]:"ethereum",[v.E.id]:"base",[w.R.id]:"optimism",[x.n.id]:"polygon",[y.D.id]:"arbitrum",[z.m.id]:"avacchain"},M=(a,b,c,d,e,f)=>new Promise(async(g,h)=>{let i=(0,F.h)();if(!i)return void h(Error("Unable to initialize flow"));let j="ethereum"===b.chainType?function(a){let b=L[a];if(!b)throw new p.a(`Unsupported chainId: ${a} for Coinbase Onramp`);return b}(b.chain.id):"solana",k=b.isUSDC?"USDC":"ethereum"===b.chainType?b.chain.id===x.n.id?"POL":"ETH":"SOL",l=await a.initCoinbaseOnRamp({addresses:[{address:b.address,blockchains:[j]}],assets:[k]}),{url:m}=function({appId:a,input:b,amount:c,blockchain:d,asset:e,experience:f}){let g=new URL("https://pay.coinbase.com/buy/select-asset");return g.searchParams.set("appId",b.app_id),g.searchParams.set("sessionToken",b.session_token),g.searchParams.set("endPartnerName",`privy:${a}`),g.searchParams.set("defaultExperience",f),g.searchParams.set("presetCryptoAmount",c.startsWith(".")?`0${c}`:c),g.searchParams.set("defaultNetwork",d),g.searchParams.set("defaultPaymentMethod",C[f]),g.searchParams.set("defaultAsset",D[e]),g.searchParams.set("partnerUserId",b.partner_user_id),{url:g}}({appId:a.getAppId(),input:l,amount:b.amount,blockchain:j,asset:k,experience:f});i.location=m.toString();let n={...e?.funding,showAlternateFundingMethod:!0};b.usingDefaultFundingMethod&&(n.usingDefaultFundingMethod=!1),c({funding:n,solanaFundingData:e?.solanaFundingData,coinbaseOnrampStatus:{popup:i}}),d("CoinbaseOnrampStatusScreen"),a.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"coinbase-onramp",value:b.amount,chainType:b.chainType,chainId:"ethereum"===b.chainType?b.chain.id:b.chain}}),setTimeout(()=>{c({funding:n,solanaFundingData:e?.solanaFundingData,coinbaseOnrampStatus:{partnerUserId:l.partner_user_id,popup:i}})},5e3),g()}),N=async(a,b,c,d,e,f,g,h)=>{let i=(0,F.h)();if(!i)throw Error("Unable to initialize flow");let j="ethereum"===b.chainType?(0,E.v)(b.chain.id,d):b.isUSDC?"USDC_SOL":"SOL",{signedUrl:k,externalTransactionId:l}=await a.signMoonpayOnRampUrl({address:b.address,useSandbox:c.fundingMethodConfig.moonpay.useSandbox??!1,config:{uiConfig:{accentColor:c.appearance.palette.accent,theme:c.appearance.palette.colorScheme},paymentMethod:h,currencyCode:j,quoteCurrencyAmount:(0,G.a)(b.amount)}});a.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"moonpay",value:b.amount,chainType:b.chainType,chainId:"ethereum"===b.chainType?b.chain.id:b.chain}}),i.location=k;let m={...g?.funding,showAlternateFundingMethod:!0};b.usingDefaultFundingMethod&&(m.usingDefaultFundingMethod=!1),e({moonpayStatus:{},funding:m,solanaFundingData:g?.solanaFundingData}),f("MoonpayStatusScreen"),setTimeout(()=>{e({moonpayStatus:{externalTransactionId:l},funding:m,solanaFundingData:g?.solanaFundingData})},8e3)},O=async a=>"undefined"!=typeof window&&"PaymentRequest"in window&&await new window.PaymentRequest([{supportedMethods:a}],{id:"0",total:{label:"Item",amount:{currency:"USD",value:"1.00"}}}).canMakePayment(),P=()=>O("https://apple.com/apple-pay"),Q=()=>O("https://google.com/pay"),R={component:()=>{let{wallets:a}=(0,r.u)(),{connectors:b}=(0,p.u)(),c=b.filter(o.v).flatMap(a=>a.wallets),{navigate:u,data:v,setModalData:w}=(0,q.a)(),{client:x}=(0,p.u)(),y=(0,n.u)(),z=v?.funding,C=K(P),D=K(Q),F="solana"===z.chainType,G=F?void 0:z,L=(0,e.useMemo)(()=>((a,b,c,d,e,f)=>{let g,h,i="solana"===c.chainType,j=i?void 0:c,k=c.isUSDC?"USDC":j?.erc20Address?void 0:"native-currency",l=!!i||k&&(0,E.Rx)(Number(c.chain.id),k),m=!!i||k&&((a,b)=>{switch(b){case"native-currency":return A.has(a);case"USDC":return B.has(a);default:return console.warn("Unknown asset passed to Coinbase Onramp"),!1}})(Number(c.chain.id),k),n=[];for(let g of(c.preferredCardProvider&&c.supportedOptions.sort(a=>a.provider===c.preferredCardProvider?-1:1),c.supportedOptions))"card"===g.method&&"coinbase"===g.provider&&m&&n.push(()=>M(b,c,d,e,f,"buy")),"card"===g.method&&"moonpay"===g.provider&&l&&k&&n.push(()=>N(b,c,a,k,d,e,f,"credit_debit_card"));for(let a of c.supportedOptions)"exchange"===a.method&&"coinbase"===a.provider&&m&&(g=()=>M(b,c,d,e,f,"buy"));for(let a of f?.funding?.supportedOptions??[])"wallets"===a.method&&(h=()=>e("TransferFromWalletScreen"));return{onFundWithCard:n,onFundWithExchange:g,onFundWithWallet:h}})(y,x,z,w,u,v),[y,x,z,v,w,u]),O=F?c.find(({address:a})=>a===z.address):a.find(({address:a})=>(0,i.b)(a)===(0,i.b)(z.address)),R=(0,o.Q)(O?.walletClientType||"unknown"),S=R?.name||"wallet",T=O&&"privy"!==O.walletClientType?S:y.name,U=(0,e.useMemo)(()=>z.uiConfig?.landing?.title?z.uiConfig?.landing?.title:`Add funds to your ${T?.toLowerCase().endsWith("wallet")?T:T+" wallet"}`,[z.uiConfig?.landing?.title,T]);(0,e.useEffect)(()=>{if(z?.defaultFundingMethod&&z.usingDefaultFundingMethod)switch(w({funding:{...z,usingDefaultFundingMethod:!1},solanaFundingData:v?.solanaFundingData}),z?.defaultFundingMethod){case"card":L.onFundWithCard[0]&&L.onFundWithCard[0]();break;case"exchange":L.onFundWithExchange&&L.onFundWithExchange();break;case"wallet":L.onFundWithWallet&&L.onFundWithWallet();break;case"manual":u("ManualTransferScreen")}},[]),(0,e.useEffect)(()=>{G?.erc20Address&&!G.erc20ContractInfo&&(0,t.g)({address:G.erc20Address,chain:G.chain,rpcConfig:y.rpcConfig,privyAppId:y.id}).then(a=>{w({...v,funding:{...G,erc20ContractInfo:a?{symbol:a.symbol,decimals:a.decimals}:void 0}})}).catch(console.error)},[G?.erc20Address,G?.chain]);let V=!(!G?.erc20Address||G?.erc20ContractInfo);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(k.t,{}),(0,d.jsx)("h3",{children:U}),(0,d.jsxs)(H.e,{children:[z.errorMessage&&(0,d.jsx)(l.E,{theme:y.appearance.palette.colorScheme,children:z.errorMessage}),L.onFundWithCard?.[0]&&(0,d.jsxs)(o.U,{disabled:V,onClick:L.onFundWithCard[0],children:[(0,d.jsx)(H.I,{children:(0,d.jsx)(f,{style:{width:24}})}),"Pay with card",C?(0,d.jsx)(I,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):D?(0,d.jsx)(J,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):null]}),L.onFundWithExchange&&(0,d.jsxs)(o.U,{disabled:V,onClick:L.onFundWithExchange,children:[(0,d.jsx)(H.I,{children:(0,d.jsx)(h.A,{style:{width:24}})}),"Transfer from an exchange"]}),L.onFundWithWallet&&(0,d.jsxs)(o.U,{disabled:V,onClick:L.onFundWithWallet,children:[(0,d.jsx)(H.I,{children:(0,d.jsx)(s.W,{style:{width:24}})}),"Transfer from wallet"]}),(0,d.jsxs)(o.U,{disabled:V,onClick:()=>u("ManualTransferScreen"),children:[(0,d.jsx)(H.I,{children:(0,d.jsx)(g,{style:{width:24}})}),"Receive funds"]}),z?.showAlternateFundingMethod&&L.onFundWithCard?.[1]&&(0,d.jsx)(m.I,{theme:y.appearance.palette.colorScheme,children:(0,d.jsxs)(H.f,{children:["Having trouble or facing location restrictions?"," ",(0,d.jsx)(H.g,{onClick:L.onFundWithCard[1],children:"Try a different provider."})]})})]}),(0,d.jsx)(j.B,{})]})}}},42118:(a,b,c)=>{c.d(b,{g:()=>g});var d=c(9595),e=c(14415),f=c(38479);let g=async({address:a,chain:b,rpcConfig:c,privyAppId:g})=>{try{let i=(0,d.l)({chain:b,transport:(0,e.L)((0,f.a)(b,c,g))}),[j,k]=await Promise.all([i.readContract({abi:h,address:a,functionName:"symbol"}),i.readContract({abi:h,address:a,functionName:"decimals"})]);return{decimals:k,symbol:j}}catch(a){return console.log(a),null}},h=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}]},50017:(a,b,c)=>{c.d(b,{I:()=>h});var d=c(66150),e=c(7719);let f=e.forwardRef(function({title:a,titleId:b,...c},d){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":b},c),a?e.createElement("title",{id:b},a):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var g=c(72291);let h=({children:a,theme:b})=>(0,d.jsxs)(i,{$theme:b,children:[(0,d.jsx)(f,{width:"20px",height:"20px",color:"var(--privy-color-icon-subtle)",strokeWidth:2,style:{flexShrink:0}}),(0,d.jsx)(j,{$theme:b,children:a})]}),i=g.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,j=g.I4.div`
  color: ${a=>"dark"===a.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},54355:(a,b,c)=>{c.d(b,{E:()=>g});var d=c(66150),e=c(12388),f=c(72291);let g=({children:a,theme:b})=>(0,d.jsxs)(h,{$theme:b,children:[(0,d.jsx)(e.A,{width:"20px",height:"20px",color:"var(--privy-color-icon-error)",strokeWidth:2,style:{flexShrink:0}}),(0,d.jsx)(i,{$theme:b,children:a})]}),h=f.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-error-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,i=f.I4.div`
  color: ${a=>"dark"===a.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},66482:(a,b,c)=>{c.d(b,{W:()=>e});var d=c(66150);let e=({...a})=>(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[(0,d.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,d.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,d.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]})},79990:(a,b,c)=>{c.d(b,{A:()=>e});var d=c(7719);let e=d.forwardRef(function({title:a,titleId:b,...c},e){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":b},c),a?d.createElement("title",{id:b},a):null,d.createElement("path",{fillRule:"evenodd",d:"M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))})},87900:(a,b,c)=>{c.d(b,{F:()=>i,I:()=>h,a:()=>j,b:()=>k,c:()=>m,d:()=>n,e:()=>g,f:()=>p,g:()=>q,h:()=>l});var d=c(72291),e=c(55164),f=c(92224);let g=d.I4.div`
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
`},92824:(a,b,c)=>{c.d(b,{O:()=>d});let d="sdk_fiat_on_ramp_completed_with_status"}};