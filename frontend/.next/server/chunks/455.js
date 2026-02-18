"use strict";exports.id=455,exports.ids=[455],exports.modules={7595:(a,b,c)=>{c.d(b,{A:()=>k});var d=c(66150),e=c(54074),f=c(57685),g=c(7719),h=c(72291),i=c(69712),j=c(55164);let k=({address:a,showCopyIcon:b,url:c,className:h})=>{let[k,o]=(0,g.useState)(!1);function p(b){b.stopPropagation(),navigator.clipboard.writeText(a).then(()=>o(!0)).catch(console.error)}return(0,g.useEffect)(()=>{if(k){let a=setTimeout(()=>o(!1),3e3);return()=>clearTimeout(a)}},[k]),(0,d.jsxs)(l,c?{children:[(0,d.jsx)(n,{title:a,className:h,href:`${c}/address/${a}`,target:"_blank",children:(0,i.D)(a)}),b&&(0,d.jsx)(j.S,{onClick:p,size:"sm",style:{gap:"0.375rem"},children:(0,d.jsxs)(d.Fragment,k?{children:["Copied",(0,d.jsx)(e.A,{size:16})]}:{children:["Copy",(0,d.jsx)(f.A,{size:16})]})})]}:{children:[(0,d.jsx)(m,{title:a,className:h,children:(0,i.D)(a)}),b&&(0,d.jsx)(j.S,{onClick:p,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,d.jsxs)(d.Fragment,k?{children:["Copied",(0,d.jsx)(e.A,{size:14})]}:{children:["Copy",(0,d.jsx)(f.A,{size:14})]})})]})},l=h.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,m=h.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,n=h.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},18404:(a,b,c)=>{c.d(b,{W:()=>u});var d=c(66150),e=c(54074),f=c(57685),g=c(7719),h=c(72291),i=c(55164),j=c(94713),k=c(56926),l=c(7595),m=c(74446);let n=(0,h.I4)(m.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,o=h.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,p=h.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,q=h.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,r=(0,h.I4)(k.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,s=(0,h.I4)(j.E)`
  margin-top: 0.25rem;
`,t=(0,h.I4)(i.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,u=({errMsg:a,balance:b,address:c,className:h,title:i,showCopyButton:j=!1})=>{let[k,m]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{if(k){let a=setTimeout(()=>m(!1),3e3);return()=>clearTimeout(a)}},[k]),(0,d.jsxs)("div",{children:[i&&(0,d.jsx)(r,{children:i}),(0,d.jsx)(n,{className:h,$state:a?"error":void 0,children:(0,d.jsxs)(o,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(l.A,{address:c,showCopyIcon:!1}),void 0!==b&&(0,d.jsx)(q,{children:b})]}),j&&(0,d.jsx)(t,{onClick:function(a){a.stopPropagation(),navigator.clipboard.writeText(c).then(()=>m(!0)).catch(console.error)},size:"sm",children:(0,d.jsxs)(d.Fragment,k?{children:["Copied",(0,d.jsx)(e.A,{size:14})]}:{children:["Copy",(0,d.jsx)(f.A,{size:14})]})})]})}),a&&(0,d.jsx)(s,{children:a})]})}},21242:(a,b,c)=>{c.d(b,{t:()=>g});var d=c(66150),e=c(2808),f=c(55164);function g({title:a}){let{currentScreen:b,navigateBack:c,navigate:g,data:h,setModalData:i}=(0,e.a)();return(0,d.jsx)(f.M,{title:a,backFn:"ManualTransferScreen"===b?c:b===h?.funding?.methodScreen?h.funding.comingFromSendTransactionScreen?()=>g("SendTransactionScreen"):void 0:h?.funding?.methodScreen?()=>{let a=h.funding;a.usingDefaultFundingMethod&&(a.usingDefaultFundingMethod=!1),i({funding:a,solanaFundingData:h?.solanaFundingData}),g(a.methodScreen)}:void 0})}},27562:(a,b,c)=>{c.d(b,{g:()=>e});var d=c(64003);function e(a){let[b]=Object.entries(d.D[a]).find(([a,b])=>"USDC"===b.symbol)??[];return b}},29138:(a,b,c)=>{c.d(b,{Q:()=>r});var d=c(66150),e=c(91817),f=c(7719),g=c(72291),h=c(50579),i=c(69712);let j=()=>(0,d.jsx)("svg",{width:"200",height:"200",viewBox:"-77 -77 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px"},children:(0,d.jsx)("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})}),k=(a,b,c,d,e)=>{for(let f=b;f<b+d;f++)for(let b=c;b<c+e;b++){let c=a?.[b];c&&c[f]&&(c[f]=0)}return a},l=({x:a,y:b,cellSize:c,bgColor:e,fgColor:f})=>(0,d.jsx)(d.Fragment,{children:[0,1,2].map(g=>(0,d.jsx)("circle",{r:c*(7-2*g)/2,cx:a+7*c/2,cy:b+7*c/2,fill:g%2!=0?e:f},`finder-${a}-${b}-${g}`))}),m=({cellSize:a,matrixSize:b,bgColor:c,fgColor:e})=>(0,d.jsx)(d.Fragment,{children:[[0,0],[(b-7)*a,0],[0,(b-7)*a]].map(([b,f])=>(0,d.jsx)(l,{x:b,y:f,cellSize:a,bgColor:c,fgColor:e},`finder-${b}-${f}`))}),n=({matrix:a,cellSize:b,color:c})=>(0,d.jsx)(d.Fragment,{children:a.map((a,e)=>a.map((a,g)=>a?(0,d.jsx)("rect",{height:b-.4,width:b-.4,x:e*b+.1*b,y:g*b+.1*b,rx:.5*b,ry:.5*b,fill:c},`cell-${e}-${g}`):(0,d.jsx)(f.Fragment,{},`circle-${e}-${g}`)))}),o=({cellSize:a,matrixSize:b,element:c,sizePercentage:e,bgColor:f})=>{if(!c)return(0,d.jsx)(d.Fragment,{});let g=b*(e||.14),h=Math.floor(b/2-g/2),i=Math.floor(b/2+g/2);(i-h)%2!=b%2&&(i+=1);let j=(i-h)*a,k=j-.2*j,l=h*a;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("rect",{x:h*a,y:h*a,width:j,height:j,fill:f}),(0,d.jsx)(c,{x:l+.1*j,y:l+.1*j,height:k,width:k})]})},p=a=>{var b,c;let f,g,h=a.outputSize,j=(b=a.url,c=a.errorCorrectionLevel,f=e.create(b,{errorCorrectionLevel:c}).modules,g=k(g=(0,i.a3)(Array.from(f.data),f.size),0,0,7,7),g=k(g,g.length-7,0,7,7),k(g,0,g.length-7,7,7)),l=h/j.length,p=(0,i.a2)(2*l,{min:.025*h,max:.036*h});return(0,d.jsxs)("svg",{height:a.outputSize,width:a.outputSize,viewBox:`0 0 ${a.outputSize} ${a.outputSize}`,style:{height:"100%",width:"100%",padding:`${p}px`},children:[(0,d.jsx)(n,{matrix:j,cellSize:l,color:a.fgColor}),(0,d.jsx)(m,{cellSize:l,matrixSize:j.length,fgColor:a.fgColor,bgColor:a.bgColor}),(0,d.jsx)(o,{cellSize:l,element:a.logo?.element,bgColor:a.bgColor,matrixSize:j.length})]})},q=g.I4.div.attrs({className:"ph-no-capture"})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${a=>`${a.$size}px`};
  width: ${a=>`${a.$size}px`};
  margin: auto;
  background-color: ${a=>a.$bgColor};

  && {
    border-width: 2px;
    border-color: ${a=>a.$borderColor};
    border-radius: var(--privy-border-radius-md);
  }
`,r=a=>{let{appearance:b}=(0,h.u)(),c=a.bgColor||"#FFFFFF",e=a.fgColor||"#000000",f=a.size||160,g="dark"===b.palette.colorScheme?c:e;return(0,d.jsx)(q,{$size:f,$bgColor:c,$fgColor:e,$borderColor:g,children:(0,d.jsx)(p,{url:a.url,logo:{element:a.squareLogoElement??j},outputSize:f,bgColor:c,fgColor:e,errorCorrectionLevel:a.errorCorrectionLevel||"Q"})})}},43167:(a,b,c)=>{c.d(b,{S:()=>e});var d=c(72291);let e=d.I4.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},45012:(a,b,c)=>{c.d(b,{T:()=>e});var d=c(72291);let e=d.I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},50017:(a,b,c)=>{c.d(b,{I:()=>h});var d=c(66150),e=c(7719);let f=e.forwardRef(function({title:a,titleId:b,...c},d){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":b},c),a?e.createElement("title",{id:b},a):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var g=c(72291);let h=({children:a,theme:b})=>(0,d.jsxs)(i,{$theme:b,children:[(0,d.jsx)(f,{width:"20px",height:"20px",color:"var(--privy-color-icon-subtle)",strokeWidth:2,style:{flexShrink:0}}),(0,d.jsx)(j,{$theme:b,children:a})]}),i=g.I4.div`
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
`},53230:(a,b,c)=>{c.d(b,{g:()=>g});var d=c(9595),e=c(14415),f=c(38479);let g=async({chain:a,address:b,appId:c,rpcConfig:g,erc20Address:i})=>{let j=(0,d.l)({chain:a,transport:(0,e.L)((0,f.a)(a,g,c))});return{balance:await j.readContract({address:i,abi:h,functionName:"balanceOf",args:[b]}).catch(()=>0n),chain:a}},h=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},54074:(a,b,c)=>{c.d(b,{A:()=>d});let d=(0,c(70958).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},56926:(a,b,c)=>{c.d(b,{L:()=>e});var d=c(72291);let e=d.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},57685:(a,b,c)=>{c.d(b,{A:()=>d});let d=(0,c(70958).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},64003:(a,b,c)=>{c.d(b,{A:()=>h,D:()=>k,J:()=>j,L:()=>d,R:()=>i,S:()=>e,T:()=>f,a:()=>g,g:()=>l});let d=1e9,e="11111111111111111111111111111111",f="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",g="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",h="ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",i=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],j=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],k={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function l(a,b){let c=parseFloat(a.toString())/d,e=m.format(b*c);return"$0.00"===e?"<$0.01":e}let m=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2})},65389:(a,b,c)=>{c.d(b,{B:()=>e,C:()=>h,F:()=>j,H:()=>g,R:()=>n,S:()=>l,a:()=>k,b:()=>m,c:()=>i,d:()=>o,e:()=>f});var d=c(72291);let e=d.I4.div`
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
`},70958:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(7719);let e=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},f=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let h=(0,d.forwardRef)(({color:a="currentColor",size:b=24,strokeWidth:c=2,absoluteStrokeWidth:e,className:h="",children:i,iconNode:j,...k},l)=>(0,d.createElement)("svg",{ref:l,...g,width:b,height:b,stroke:a,strokeWidth:e?24*Number(c)/Number(b):c,className:f("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,b])=>(0,d.createElement)(a,b)),...Array.isArray(i)?i:[i]])),i=(a,b)=>{let c=(0,d.forwardRef)(({className:c,...g},i)=>(0,d.createElement)(h,{ref:i,iconNode:b,className:f(`lucide-${e(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,c),...g}));return c.displayName=e(a),c}},74446:(a,b,c)=>{c.d(b,{B:()=>f,a:()=>e});var d=c(72291);let e=(0,d.AH)`
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

  ${a=>"error"===a.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,f=d.I4.div`
  ${e}
`},75281:(a,b,c)=>{c.d(b,{g:()=>d});function d(a){switch(a){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}},78411:(a,b,c)=>{c.d(b,{u:()=>i});var d=c(7719),e=c(9595),f=c(14415),g=c(38479),h=c(67331);function i({rpcConfig:a,appId:b,address:c,chain:i}){let{chains:j}=(0,h.u)(),[k,l]=(0,d.useState)(0n),[m,n]=(0,d.useState)(!1),o=(0,d.useMemo)(()=>{let c=i||j[0];if(c)return(0,e.l)({chain:i,transport:(0,f.L)((0,g.a)(c,a,b))})},[i,a,b]),p=(0,d.useCallback)(async()=>{if(!c||!o)return;n(!0);let a=await o.getBalance({address:c}).catch(console.error);return a?(l(a),n(!1),a):void 0},[o,c,l]);return(0,d.useEffect)(()=>{p().catch(console.error)},[]),{balance:k,isLoading:m,reloadBalance:p}}},84977:(a,b,c)=>{c.d(b,{a:()=>f,g:()=>e});var d=c(64003);function e(a,b=6,c=!1,d=!1){let f=(parseFloat(a.toString())/1e9).toFixed(b).replace(/0+$/,"").replace(/\.$/,""),g=d?"":" SOL";return c?`${f}${g}`:`${"0"===f?"<0.001":f}${g}`}function f({amount:a,fee:b,tokenPrice:c,isUsdc:f}){let g=BigInt(Math.floor(parseFloat(a)*10**(f?6:9))),h=f?g:g+b;return{fundingAmountInBaseUnit:g,fundingAmountInUsd:c?(0,d.g)(g,c):void 0,totalPriceInUsd:c?(0,d.g)(h,c):void 0,totalPriceInNativeCurrency:e(h),feePriceInNativeCurrency:e(b),feePriceInUsd:c?(0,d.g)(b,c):void 0}}},87291:(a,b,c)=>{c.d(b,{NJ:()=>h,vj:()=>g,vz:()=>f});var d=c(29502),e=c(26497);function f(a){return a?`${a.slice(0,5)}…${a.slice(-4)}`:""}function g({wei:a,precision:b=3}){return parseFloat((0,d.c)(a)).toFixed(b).replace(/0+$/,"").replace(/\.$/,"")}function h({amount:a,decimals:b}){return(0,e.J)(BigInt(a),b)}},90455:(a,b,c)=>{c.r(b),c.d(b,{ManualTransferScreen:()=>B,default:()=>B});var d=c(66150),e=c(7719),f=c(26497),g=c(87291),h=c(55164),i=c(65389),j=c(29138),k=c(21242),l=c(50017),m=c(43167),n=c(45012),o=c(18404),p=c(50579),q=c(69712),r=c(67331),s=c(2808),t=c(78411),u=c(8327),v=c(92824),w=c(59962),x=c(75281),y=c(27562),z=c(84977),A=c(53230);c(91817),c(19078),c(11765),c(43132),c(30443),c(8752);let B={component:()=>{let{wallets:a}=(0,u.u)(),{connectors:b}=(0,r.u)(),c=b.filter(q.v).flatMap(a=>a.wallets),{data:B,setModalData:D,navigate:E,lastScreen:F}=(0,s.a)(),{rpcConfig:G,appId:H,createAnalyticsEvent:I,closePrivyModal:J}=(0,r.u)(),K=(0,p.u)(),[L,M]=(0,e.useState)(void 0),[N,O]=(0,e.useState)(!1),P=B?.funding,{reloadBalance:Q}=(0,t.u)({rpcConfig:G,appId:H,address:"ethereum"===P.chainType?P.address:void 0,chain:"ethereum"===P.chainType?P.chain:void 0}),R="solana"===P.chainType,S=R?P.isUSDC?"USDC":"SOL":P.erc20Address?P.erc20ContractInfo?.symbol:P.chain.nativeCurrency.symbol,T=R?c.find(({address:a})=>a===P.address):a.find(({address:a})=>(0,q.D)(a)===(0,q.D)(P.address));if(!P)return D({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:F||"FundingMethodSelectionScreen"},funding:B?.funding,solanaFundingData:B?.solanaFundingData,sendTransaction:B?.sendTransaction}),E("ErrorScreen"),(0,d.jsx)(d.Fragment,{});(0,e.useEffect)(()=>{let a=R?async function(){if("solana"!==P.chainType)return;let a=K.solanaRpcs[P.chain];a?(P.isUSDC?async function({rpc:a,address:b,mintAddress:c}){let d=await a.getTokenAccountsByOwner(b,{mint:c},{encoding:"jsonParsed",commitment:"confirmed"}).send(),e=d.value[0]?.account;return e?BigInt(e.data.parsed.info.tokenAmount.amount):0n}({rpc:a.rpc,address:P.address,mintAddress:(0,y.g)(P.chain)}):(0,w.x)({rpc:a.rpc,address:P.address})).then(a=>{let b=BigInt(a);L&&b>L&&(O(!0),I({eventName:v.O,payload:{provider:"manual",status:"success",chainType:"solana",address:T?.address,value:P.isUSDC?(0,f.J)(b-L,6):(0,f.J)(b-L,9),token:P.isUSDC?"USDC":"SOL"}})),M(b)}):console.warn("Unable to load solana rpc, skipping balance")}:async function(){"ethereum"===P.chainType&&(async()=>{if(!P.erc20Address)return await Q()??BigInt(0);{let{balance:a}=await (0,A.g)({chain:P.chain,address:P.address,erc20Address:P.erc20Address,rpcConfig:G,appId:H});return a}})().then(a=>{L&&a>L&&(O(!0),I({eventName:v.O,payload:{provider:"manual",status:"success",chainType:"ethereum",address:T?.address,chainId:P.chain.id,value:(0,f.J)(a-L,P.erc20ContractInfo?.decimals??18),token:P.erc20ContractInfo?.symbol??P.erc20Address??"ETH"}})),M(a)}).catch(()=>M(void 0))},b=setInterval(a,2e3);return a(),()=>clearInterval(b)},[L]);let U=(0,e.useMemo)(()=>null==L?"":P.isUSDC?(0,g.NJ)({amount:L,decimals:6}):R?(0,z.g)(L,3,!0,!0):null!=P.erc20ContractInfo?.decimals?(0,g.NJ)({amount:L,decimals:P.erc20ContractInfo.decimals}):(0,g.vj)({wei:L}),[L,R,P]),V="ethereum"===P.chainType?P.chain.name:(0,x.g)(P.chain),W=(0,e.useMemo)(()=>""===P.uiConfig?.receiveFundsTitle?null:(0,d.jsx)(n.T,{children:P.uiConfig?.receiveFundsTitle??`Receive ${P.amount} ${S??""}`.trim()}),[P.uiConfig?.receiveFundsTitle,P.amount,S]),X=(0,e.useMemo)(()=>""===P.uiConfig?.receiveFundsSubtitle?null:(0,d.jsx)(m.S,{children:P.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${V}.`}),[P.uiConfig?.receiveFundsSubtitle,V]),Y="solana"===P.chainType&&P.isUSDC&&(0,y.g)(P.chain)?`?spl-token=${(0,y.g)(P.chain)}`:"";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(k.t,{}),W,X,(0,d.jsxs)(i.F,{style:{gap:"1rem",margin:W||X?"1rem 0":"0"},children:[(0,d.jsx)(j.Q,{url:`${P.chainType}:${P.address}${Y}`,size:200,squareLogoElement:C}),(0,d.jsxs)(l.I,{theme:K.appearance.palette.colorScheme,children:["Make sure to send funds on ",V,"."]}),(0,d.jsx)(o.W,{title:"Your wallet",errMsg:void 0,showCopyButton:!0,balance:`${U} ${S}`,address:P.address}),N&&(0,d.jsx)(h.P,{onClick:()=>J({shouldCallAuthOnSuccess:!1,isSuccess:!0}),children:"Continue"})]}),(0,d.jsx)(h.B,{})]})}},C=({...a})=>(0,d.jsx)(w.z,{color:"black",...a})},92824:(a,b,c)=>{c.d(b,{O:()=>d});let d="sdk_fiat_on_ramp_completed_with_status"},94713:(a,b,c)=>{c.d(b,{E:()=>e});var d=c(72291);let e=d.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`}};