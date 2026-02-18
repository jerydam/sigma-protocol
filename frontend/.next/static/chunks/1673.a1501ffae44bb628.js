"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1673],{12440:(e,r,t)=>{t.d(r,{g:()=>i});var n=t(48507);function i(e){let[r]=Object.entries(n.D[e]).find(([e,r])=>"USDC"===r.symbol)??[];return r}},14227:(e,r,t)=>{t.d(r,{NJ:()=>l,vj:()=>o,vz:()=>a});var n=t(85550),i=t(58813);function a(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function o({wei:e,precision:r=3}){return parseFloat((0,n.c)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"")}function l({amount:e,decimals:r}){return(0,i.J)(BigInt(e),r)}},16756:(e,r,t)=>{t.d(r,{O:()=>n});let n="sdk_fiat_on_ramp_completed_with_status"},22320:(e,r,t)=>{t.d(r,{T:()=>i});var n=t(78912);let i=n.I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},23970:(e,r,t)=>{t.d(r,{L:()=>i});var n=t(78912);let i=n.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},28887:(e,r,t)=>{t.d(r,{A:()=>c});var n=t(73788),i=t(84844),a=t(64517),o=t(65936),l=t(78912),s=t(41196),d=t(74124);let c=({address:e,showCopyIcon:r,url:t,className:l})=>{let[c,h]=(0,o.useState)(!1);function f(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>h(!0)).catch(console.error)}return(0,o.useEffect)(()=>{if(c){let e=setTimeout(()=>h(!1),3e3);return()=>clearTimeout(e)}},[c]),(0,n.jsxs)(u,t?{children:[(0,n.jsx)(p,{title:e,className:l,href:`${t}/address/${e}`,target:"_blank",children:(0,s.D)(e)}),r&&(0,n.jsx)(d.S,{onClick:f,size:"sm",style:{gap:"0.375rem"},children:(0,n.jsxs)(n.Fragment,c?{children:["Copied",(0,n.jsx)(i.A,{size:16})]}:{children:["Copy",(0,n.jsx)(a.A,{size:16})]})})]}:{children:[(0,n.jsx)(g,{title:e,className:l,children:(0,s.D)(e)}),r&&(0,n.jsx)(d.S,{onClick:f,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,n.jsxs)(n.Fragment,c?{children:["Copied",(0,n.jsx)(i.A,{size:14})]}:{children:["Copy",(0,n.jsx)(a.A,{size:14})]})})]})},u=l.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,g=l.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,p=l.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},33992:(e,r,t)=>{t.d(r,{B:()=>a,a:()=>i});var n=t(78912);let i=(0,n.AH)`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,a=n.I4.div`
  ${i}
`},35459:(e,r,t)=>{t.d(r,{g:()=>n});function n(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},48507:(e,r,t)=>{t.d(r,{A:()=>l,D:()=>c,J:()=>d,L:()=>n,R:()=>s,S:()=>i,T:()=>a,a:()=>o,g:()=>u});let n=1e9,i="11111111111111111111111111111111",a="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",o="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",l="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",s=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],d=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],c={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function u(e,r){let t=parseFloat(e.toString())/n,i=g.format(r*t);return"$0.00"===i?"<$0.01":i}let g=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},56618:(e,r,t)=>{t.d(r,{W:()=>C});var n=t(73788),i=t(84844),a=t(64517),o=t(65936),l=t(78912),s=t(74124),d=t(75767),c=t(23970),u=t(28887),g=t(33992);let p=(0,l.I4)(g.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,h=l.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,f=l.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,m=l.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,x=(0,l.I4)(c.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,v=(0,l.I4)(d.E)`
  margin-top: 0.25rem;
`,y=(0,l.I4)(s.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,C=({errMsg:e,balance:r,address:t,className:l,title:s,showCopyButton:d=!1})=>{let[c,g]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(c){let e=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(e)}},[c]),(0,n.jsxs)("div",{children:[s&&(0,n.jsx)(x,{children:s}),(0,n.jsx)(p,{className:l,$state:e?"error":void 0,children:(0,n.jsxs)(h,{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(u.A,{address:t,showCopyIcon:!1}),void 0!==r&&(0,n.jsx)(m,{children:r})]}),d&&(0,n.jsx)(y,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(t).then(()=>g(!0)).catch(console.error)},size:"sm",children:(0,n.jsxs)(n.Fragment,c?{children:["Copied",(0,n.jsx)(i.A,{size:14})]}:{children:["Copy",(0,n.jsx)(a.A,{size:14})]})})]})}),e&&(0,n.jsx)(v,{children:e})]})}},63461:(e,r,t)=>{t.d(r,{a:()=>a,g:()=>i});var n=t(48507);function i(e,r=6,t=!1,n=!1){let a=(parseFloat(e.toString())/1e9).toFixed(r).replace(/0+$/,"").replace(/\.$/,""),o=n?"":" SOL";return t?`${a}${o}`:`${"0"===a?"<0.001":a}${o}`}function a({amount:e,fee:r,tokenPrice:t,isUsdc:a}){let o=BigInt(Math.floor(parseFloat(e)*10**(a?6:9))),l=a?o:o+r;return{fundingAmountInBaseUnit:o,fundingAmountInUsd:t?(0,n.g)(o,t):void 0,totalPriceInUsd:t?(0,n.g)(l,t):void 0,totalPriceInNativeCurrency:i(l),feePriceInNativeCurrency:i(r),feePriceInUsd:t?(0,n.g)(r,t):void 0}}},64081:(e,r,t)=>{t.d(r,{S:()=>i});var n=t(78912);let i=n.I4.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},64517:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(90478).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},71673:(e,r,t)=>{t.r(r),t.d(r,{ManualTransferScreen:()=>k,default:()=>k});var n=t(73788),i=t(65936),a=t(58813),o=t(14227),l=t(74124),s=t(72853),d=t(80656),c=t(87288),u=t(88530),g=t(64081),p=t(22320),h=t(56618),f=t(75187),m=t(41196),x=t(86249),v=t(79312),y=t(99273),C=t(97365),b=t(16756),w=t(94968),S=t(35459),j=t(12440),$=t(63461),I=t(89094);t(7635),t(30404),t(28349),t(7764),t(32709),t(57668);let k={component:()=>{let{wallets:e}=(0,C.u)(),{connectors:r}=(0,x.u)(),t=r.filter(m.v).flatMap(e=>e.wallets),{data:k,setModalData:F,navigate:A,lastScreen:T}=(0,v.a)(),{rpcConfig:D,appId:M,createAnalyticsEvent:E,closePrivyModal:B}=(0,x.u)(),N=(0,f.u)(),[L,P]=(0,i.useState)(void 0),[U,J]=(0,i.useState)(!1),Z=k?.funding,{reloadBalance:H}=(0,y.u)({rpcConfig:D,appId:M,address:"ethereum"===Z.chainType?Z.address:void 0,chain:"ethereum"===Z.chainType?Z.chain:void 0}),O="solana"===Z.chainType,W=O?Z.isUSDC?"USDC":"SOL":Z.erc20Address?Z.erc20ContractInfo?.symbol:Z.chain.nativeCurrency.symbol,R=O?t.find(({address:e})=>e===Z.address):e.find(({address:e})=>(0,m.D)(e)===(0,m.D)(Z.address));if(!Z)return F({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:T||"FundingMethodSelectionScreen"},funding:k?.funding,solanaFundingData:k?.solanaFundingData,sendTransaction:k?.sendTransaction}),A("ErrorScreen"),(0,n.jsx)(n.Fragment,{});(0,i.useEffect)(()=>{let e=O?async function(){if("solana"!==Z.chainType)return;let e=N.solanaRpcs[Z.chain];e?(Z.isUSDC?async function({rpc:e,address:r,mintAddress:t}){let n=await e.getTokenAccountsByOwner(r,{mint:t},{encoding:"jsonParsed",commitment:"confirmed"}).send(),i=n.value[0]?.account;return i?BigInt(i.data.parsed.info.tokenAmount.amount):0n}({rpc:e.rpc,address:Z.address,mintAddress:(0,j.g)(Z.chain)}):(0,w.x)({rpc:e.rpc,address:Z.address})).then(e=>{let r=BigInt(e);L&&r>L&&(J(!0),E({eventName:b.O,payload:{provider:"manual",status:"success",chainType:"solana",address:R?.address,value:Z.isUSDC?(0,a.J)(r-L,6):(0,a.J)(r-L,9),token:Z.isUSDC?"USDC":"SOL"}})),P(r)}):console.warn("Unable to load solana rpc, skipping balance")}:async function(){"ethereum"===Z.chainType&&(async()=>{if(!Z.erc20Address)return await H()??BigInt(0);{let{balance:e}=await (0,I.g)({chain:Z.chain,address:Z.address,erc20Address:Z.erc20Address,rpcConfig:D,appId:M});return e}})().then(e=>{L&&e>L&&(J(!0),E({eventName:b.O,payload:{provider:"manual",status:"success",chainType:"ethereum",address:R?.address,chainId:Z.chain.id,value:(0,a.J)(e-L,Z.erc20ContractInfo?.decimals??18),token:Z.erc20ContractInfo?.symbol??Z.erc20Address??"ETH"}})),P(e)}).catch(()=>P(void 0))},r=setInterval(e,2e3);return e(),()=>clearInterval(r)},[L]);let V=(0,i.useMemo)(()=>null==L?"":Z.isUSDC?(0,o.NJ)({amount:L,decimals:6}):O?(0,$.g)(L,3,!0,!0):null!=Z.erc20ContractInfo?.decimals?(0,o.NJ)({amount:L,decimals:Z.erc20ContractInfo.decimals}):(0,o.vj)({wei:L}),[L,O,Z]),q="ethereum"===Z.chainType?Z.chain.name:(0,S.g)(Z.chain),G=(0,i.useMemo)(()=>""===Z.uiConfig?.receiveFundsTitle?null:(0,n.jsx)(p.T,{children:Z.uiConfig?.receiveFundsTitle??`Receive ${Z.amount} ${W??""}`.trim()}),[Z.uiConfig?.receiveFundsTitle,Z.amount,W]),_=(0,i.useMemo)(()=>""===Z.uiConfig?.receiveFundsSubtitle?null:(0,n.jsx)(g.S,{children:Z.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${q}.`}),[Z.uiConfig?.receiveFundsSubtitle,q]),Q="solana"===Z.chainType&&Z.isUSDC&&(0,j.g)(Z.chain)?`?spl-token=${(0,j.g)(Z.chain)}`:"";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.t,{}),G,_,(0,n.jsxs)(s.F,{style:{gap:"1rem",margin:G||_?"1rem 0":"0"},children:[(0,n.jsx)(d.Q,{url:`${Z.chainType}:${Z.address}${Q}`,size:200,squareLogoElement:z}),(0,n.jsxs)(u.I,{theme:N.appearance.palette.colorScheme,children:["Make sure to send funds on ",q,"."]}),(0,n.jsx)(h.W,{title:"Your wallet",errMsg:void 0,showCopyButton:!0,balance:`${V} ${W}`,address:Z.address}),U&&(0,n.jsx)(l.P,{onClick:()=>B({shouldCallAuthOnSuccess:!1,isSuccess:!0}),children:"Continue"})]}),(0,n.jsx)(l.B,{})]})}},z=({...e})=>(0,n.jsx)(w.z,{color:"black",...e})},72853:(e,r,t)=>{t.d(r,{B:()=>i,C:()=>l,F:()=>d,H:()=>o,R:()=>p,S:()=>u,a:()=>c,b:()=>g,c:()=>s,d:()=>h,e:()=>a});var n=t(78912);let i=n.I4.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,a=n.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,o=n.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,l=(0,n.I4)(a)`
  padding: 20px 0;
`,s=(0,n.I4)(a)`
  gap: 16px;
`,d=n.I4.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=n.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;n.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let u=n.I4.div`
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
`,g=n.I4.div`
  height: 16px;
`,p=n.I4.div`
  height: 12px;
`;n.I4.div`
  position: relative;
`;let h=n.I4.div`
  height: ${e=>e.height??"12"}px;
`;n.I4.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`},75767:(e,r,t)=>{t.d(r,{E:()=>i});var n=t(78912);let i=n.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},80656:(e,r,t)=>{t.d(r,{Q:()=>x});var n=t(73788),i=t(7635),a=t(65936),o=t(78912),l=t(75187),s=t(41196);let d=()=>(0,n.jsx)("svg",{width:"200",height:"200",viewBox:"-77 -77 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px"},children:(0,n.jsx)("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})}),c=(e,r,t,n,i)=>{for(let a=r;a<r+n;a++)for(let r=t;r<t+i;r++){let t=e?.[r];t&&t[a]&&(t[a]=0)}return e},u=({x:e,y:r,cellSize:t,bgColor:i,fgColor:a})=>(0,n.jsx)(n.Fragment,{children:[0,1,2].map(o=>(0,n.jsx)("circle",{r:t*(7-2*o)/2,cx:e+7*t/2,cy:r+7*t/2,fill:o%2!=0?i:a},`finder-${e}-${r}-${o}`))}),g=({cellSize:e,matrixSize:r,bgColor:t,fgColor:i})=>(0,n.jsx)(n.Fragment,{children:[[0,0],[(r-7)*e,0],[0,(r-7)*e]].map(([r,a])=>(0,n.jsx)(u,{x:r,y:a,cellSize:e,bgColor:t,fgColor:i},`finder-${r}-${a}`))}),p=({matrix:e,cellSize:r,color:t})=>(0,n.jsx)(n.Fragment,{children:e.map((e,i)=>e.map((e,o)=>e?(0,n.jsx)("rect",{height:r-.4,width:r-.4,x:i*r+.1*r,y:o*r+.1*r,rx:.5*r,ry:.5*r,fill:t},`cell-${i}-${o}`):(0,n.jsx)(a.Fragment,{},`circle-${i}-${o}`)))}),h=({cellSize:e,matrixSize:r,element:t,sizePercentage:i,bgColor:a})=>{if(!t)return(0,n.jsx)(n.Fragment,{});let o=r*(i||.14),l=Math.floor(r/2-o/2),s=Math.floor(r/2+o/2);(s-l)%2!=r%2&&(s+=1);let d=(s-l)*e,c=d-.2*d,u=l*e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("rect",{x:l*e,y:l*e,width:d,height:d,fill:a}),(0,n.jsx)(t,{x:u+.1*d,y:u+.1*d,height:c,width:c})]})},f=e=>{var r,t;let a,o,l=e.outputSize,d=(r=e.url,t=e.errorCorrectionLevel,a=i.create(r,{errorCorrectionLevel:t}).modules,o=c(o=(0,s.a3)(Array.from(a.data),a.size),0,0,7,7),o=c(o,o.length-7,0,7,7),c(o,0,o.length-7,7,7)),u=l/d.length,f=(0,s.a2)(2*u,{min:.025*l,max:.036*l});return(0,n.jsxs)("svg",{height:e.outputSize,width:e.outputSize,viewBox:`0 0 ${e.outputSize} ${e.outputSize}`,style:{height:"100%",width:"100%",padding:`${f}px`},children:[(0,n.jsx)(p,{matrix:d,cellSize:u,color:e.fgColor}),(0,n.jsx)(g,{cellSize:u,matrixSize:d.length,fgColor:e.fgColor,bgColor:e.bgColor}),(0,n.jsx)(h,{cellSize:u,element:e.logo?.element,bgColor:e.bgColor,matrixSize:d.length})]})},m=o.I4.div.attrs({className:"ph-no-capture"})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>`${e.$size}px`};
  width: ${e=>`${e.$size}px`};
  margin: auto;
  background-color: ${e=>e.$bgColor};

  && {
    border-width: 2px;
    border-color: ${e=>e.$borderColor};
    border-radius: var(--privy-border-radius-md);
  }
`,x=e=>{let{appearance:r}=(0,l.u)(),t=e.bgColor||"#FFFFFF",i=e.fgColor||"#000000",a=e.size||160,o="dark"===r.palette.colorScheme?t:i;return(0,n.jsx)(m,{$size:a,$bgColor:t,$fgColor:i,$borderColor:o,children:(0,n.jsx)(f,{url:e.url,logo:{element:e.squareLogoElement??d},outputSize:a,bgColor:t,fgColor:i,errorCorrectionLevel:e.errorCorrectionLevel||"Q"})})}},84844:(e,r,t)=>{t.d(r,{A:()=>n});let n=(0,t(90478).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},87288:(e,r,t)=>{t.d(r,{t:()=>o});var n=t(73788),i=t(79312),a=t(74124);function o({title:e}){let{currentScreen:r,navigateBack:t,navigate:o,data:l,setModalData:s}=(0,i.a)();return(0,n.jsx)(a.M,{title:e,backFn:"ManualTransferScreen"===r?t:r===l?.funding?.methodScreen?l.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:l?.funding?.methodScreen?()=>{let e=l.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),s({funding:e,solanaFundingData:l?.solanaFundingData}),o(e.methodScreen)}:void 0})}},88530:(e,r,t)=>{t.d(r,{I:()=>l});var n=t(73788),i=t(65936);let a=i.forwardRef(function({title:e,titleId:r,...t},n){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},t),e?i.createElement("title",{id:r},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var o=t(78912);let l=({children:e,theme:r})=>(0,n.jsxs)(s,{$theme:r,children:[(0,n.jsx)(a,{width:"20px",height:"20px",color:"var(--privy-color-icon-subtle)",strokeWidth:2,style:{flexShrink:0}}),(0,n.jsx)(d,{$theme:r,children:e})]}),s=o.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,d=o.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},89094:(e,r,t)=>{t.d(r,{g:()=>o});var n=t(9587),i=t(92658),a=t(36983);let o=async({chain:e,address:r,appId:t,rpcConfig:o,erc20Address:s})=>{let d=(0,n.l)({chain:e,transport:(0,i.L)((0,a.a)(e,o,t))});return{balance:await d.readContract({address:s,abi:l,functionName:"balanceOf",args:[r]}).catch(()=>0n),chain:e}},l=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},90478:(e,r,t)=>{t.d(r,{A:()=>s});var n=t(65936);let i=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:l="",children:s,iconNode:d,...c},u)=>(0,n.createElement)("svg",{ref:u,...o,width:r,height:r,stroke:e,strokeWidth:i?24*Number(t)/Number(r):t,className:a("lucide",l),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,n.createElement)(e,r)),...Array.isArray(s)?s:[s]])),s=(e,r)=>{let t=(0,n.forwardRef)(({className:t,...o},s)=>(0,n.createElement)(l,{ref:s,iconNode:r,className:a(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,t),...o}));return t.displayName=i(e),t}},99273:(e,r,t)=>{t.d(r,{u:()=>s});var n=t(65936),i=t(9587),a=t(92658),o=t(36983),l=t(86249);function s({rpcConfig:e,appId:r,address:t,chain:s}){let{chains:d}=(0,l.u)(),[c,u]=(0,n.useState)(0n),[g,p]=(0,n.useState)(!1),h=(0,n.useMemo)(()=>{let t=s||d[0];if(t)return(0,i.l)({chain:s,transport:(0,a.L)((0,o.a)(t,e,r))})},[s,e,r]),f=(0,n.useCallback)(async()=>{if(!t||!h)return;p(!0);let e=await h.getBalance({address:t}).catch(console.error);return e?(u(e),p(!1),e):void 0},[h,t,u]);return(0,n.useEffect)(()=>{f().catch(console.error)},[]),{balance:c,isLoading:g,reloadBalance:f}}}}]);