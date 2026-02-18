"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3336],{1346:(e,r,n)=>{n.d(r,{C:()=>s});var t=n(73788),i=n(78912);let s=({className:e,checked:r,color:n="var(--privy-color-accent)",...i})=>(0,t.jsx)("label",{children:(0,t.jsxs)(o,{className:e,children:[(0,t.jsx)(l,{checked:r,...i}),(0,t.jsx)(c,{color:n,checked:r,children:(0,t.jsx)(a,{viewBox:"0 0 24 24",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})});i.I4.label`
  && {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`;let o=i.I4.div`
  display: inline-block;
  vertical-align: middle;
`,a=i.I4.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,l=i.I4.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,c=i.I4.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  cursor: pointer;
  border-color: ${e=>e.color};
  border-radius: 3px;
  background: ${e=>e.checked?e.color:"var(--privy-color-background)"};

  && {
    /* This is necessary to override css reset for border width */
    border-width: 1px;
  }

  ${l}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${a} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`},4956:(e,r,n)=>{n.d(r,{L:()=>s,V:()=>a,a:()=>o});var t=n(78912),i=n(48931);let s=t.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,o=(0,t.I4)(s)`
  color: var(--privy-color-accent);
`,a=t.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${i.L}
`},14227:(e,r,n)=>{n.d(r,{NJ:()=>a,vj:()=>o,vz:()=>s});var t=n(85550),i=n(58813);function s(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function o({wei:e,precision:r=3}){return parseFloat((0,t.c)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"")}function a({amount:e,decimals:r}){return(0,i.J)(BigInt(e),r)}},14314:(e,r,n)=>{n.d(r,{R:()=>s,a:()=>i});var t=n(78912);let i=t.I4.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,s=t.I4.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`},22320:(e,r,n)=>{n.d(r,{T:()=>i});var t=n(78912);let i=t.I4.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`},23970:(e,r,n)=>{n.d(r,{L:()=>i});var t=n(78912);let i=t.I4.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`},28887:(e,r,n)=>{n.d(r,{A:()=>d});var t=n(73788),i=n(84844),s=n(64517),o=n(65936),a=n(78912),l=n(41196),c=n(74124);let d=({address:e,showCopyIcon:r,url:n,className:a})=>{let[d,p]=(0,o.useState)(!1);function m(r){r.stopPropagation(),navigator.clipboard.writeText(e).then(()=>p(!0)).catch(console.error)}return(0,o.useEffect)(()=>{if(d){let e=setTimeout(()=>p(!1),3e3);return()=>clearTimeout(e)}},[d]),(0,t.jsxs)(h,n?{children:[(0,t.jsx)(u,{title:e,className:a,href:`${n}/address/${e}`,target:"_blank",children:(0,l.D)(e)}),r&&(0,t.jsx)(c.S,{onClick:m,size:"sm",style:{gap:"0.375rem"},children:(0,t.jsxs)(t.Fragment,d?{children:["Copied",(0,t.jsx)(i.A,{size:16})]}:{children:["Copy",(0,t.jsx)(s.A,{size:16})]})})]}:{children:[(0,t.jsx)(x,{title:e,className:a,children:(0,l.D)(e)}),r&&(0,t.jsx)(c.S,{onClick:m,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,t.jsxs)(t.Fragment,d?{children:["Copied",(0,t.jsx)(i.A,{size:14})]}:{children:["Copy",(0,t.jsx)(s.A,{size:14})]})})]})},h=a.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,x=a.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,u=a.I4.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`},33992:(e,r,n)=>{n.d(r,{B:()=>s,a:()=>i});var t=n(78912);let i=(0,t.AH)`
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
`,s=t.I4.div`
  ${i}
`},40162:(e,r,n)=>{n.d(r,{A:()=>i});var t=n(65936);let i=t.forwardRef(function({title:e,titleId:r,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))})},45195:(e,r,n)=>{n.d(r,{E:()=>o});var t=n(73788),i=n(40162),s=n(78912);let o=({children:e,theme:r})=>(0,t.jsxs)(a,{$theme:r,children:[(0,t.jsx)(i.A,{width:"20px",height:"20px",color:"var(--privy-color-icon-error)",strokeWidth:2,style:{flexShrink:0}}),(0,t.jsx)(l,{$theme:r,children:e})]}),a=s.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-error-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,l=s.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},46547:(e,r,n)=>{n.d(r,{W:()=>o});var t=n(73788),i=n(2038),s=n(78912);let o=({children:e,theme:r})=>(0,t.jsxs)(a,{$theme:r,children:[(0,t.jsx)(i.A,{width:"20px",height:"20px",color:"var(--privy-color-icon-warning)",strokeWidth:2,style:{flexShrink:0}}),(0,t.jsx)(l,{$theme:r,children:e})]}),a=s.I4.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-warn-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,l=s.I4.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`},46615:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(90478).A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},48931:(e,r,n)=>{n.d(r,{L:()=>s});var t=n(78912);let i=(0,t.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,s=(0,t.AH)`
  ${e=>e.$isLoading?(0,t.AH)`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},56618:(e,r,n)=>{n.d(r,{W:()=>y});var t=n(73788),i=n(84844),s=n(64517),o=n(65936),a=n(78912),l=n(74124),c=n(75767),d=n(23970),h=n(28887),x=n(33992);let u=(0,a.I4)(x.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,p=a.I4.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,m=a.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,g=a.I4.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,j=(0,a.I4)(d.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,f=(0,a.I4)(c.E)`
  margin-top: 0.25rem;
`,v=(0,a.I4)(l.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`,y=({errMsg:e,balance:r,address:n,className:a,title:l,showCopyButton:c=!1})=>{let[d,x]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(d){let e=setTimeout(()=>x(!1),3e3);return()=>clearTimeout(e)}},[d]),(0,t.jsxs)("div",{children:[l&&(0,t.jsx)(j,{children:l}),(0,t.jsx)(u,{className:a,$state:e?"error":void 0,children:(0,t.jsxs)(p,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(h.A,{address:n,showCopyIcon:!1}),void 0!==r&&(0,t.jsx)(g,{children:r})]}),c&&(0,t.jsx)(v,{onClick:function(e){e.stopPropagation(),navigator.clipboard.writeText(n).then(()=>x(!0)).catch(console.error)},size:"sm",children:(0,t.jsxs)(t.Fragment,d?{children:["Copied",(0,t.jsx)(i.A,{size:14})]}:{children:["Copy",(0,t.jsx)(s.A,{size:14})]})})]})}),e&&(0,t.jsx)(f,{children:e})]})}},64081:(e,r,n)=>{n.d(r,{S:()=>i});var t=n(78912);let i=t.I4.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`},64252:(e,r,n)=>{n.d(r,{C:()=>o,S:()=>s});var t=n(73788),i=n(78912);let s=({title:e,description:r,children:n,...i})=>(0,t.jsx)(a,{...i,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:e}),"string"==typeof r?(0,t.jsx)("p",{children:r}):r,n]})});(0,i.I4)(s)`
  margin-bottom: 24px;
`;let o=({title:e,description:r,icon:n,children:i,...s})=>(0,t.jsxs)(l,{...s,children:[n||null,(0,t.jsx)("h3",{children:e}),r&&"string"==typeof r?(0,t.jsx)("p",{children:r}):r,i]}),a=i.I4.div`
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
`,l=(0,i.I4)(a)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`},64517:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(90478).A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},66279:(e,r,n)=>{n.d(r,{R:()=>g,a:()=>o,b:()=>s,c:()=>u,d:()=>a,g:()=>x,t:()=>c,u:()=>m});var t=n(65936),i=n(86249);let s=0x2f3fb341,o="11111111111111111111111111111111",a="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",l="0x0000000000000000000000000000000000000000",c=({appId:e,originCurrency:r,destinationCurrency:n,...t})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:r??l,destinationCurrency:n??l,referrer:`privy|${e}`,...t}),d="https://api.relay.link",h="https://api.testnets.relay.link",x=async({input:e,isTestnet:r})=>{let n=await fetch((r?h:d)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await n.json();if(!(n.ok||"string"==typeof t.message&&t.message.startsWith("Invalid address")))throw console.error("Relay error:",t),Error(t.message??"Error fetching quote from relay");return t},u=e=>{let r=e.steps[0]?.items?.[0];if(r)return{from:r.data.from,to:r.data.to,value:Number(r.data.value),chainId:Number(r.data.chainId),data:r.data.data}};async function p({transactionHash:e,isTestnet:r}){let n=await fetch((r?h:d)+"/requests/v2?hash="+e),t=await n.json();if(!n.ok){if("message"in t&&"string"==typeof t.message)throw Error(t.message);throw Error("Error fetching request from relay")}return t.requests.at(0)?.status??"pending"}function m({transactionHash:e,isTestnet:r,bridgingStatus:n,setBridgingStatus:i,onSuccess:s,onFailure:o}){(0,t.useEffect)(()=>{if(e&&n){if(["delayed","waiting","pending"].includes(n)){let n=setInterval(async()=>{try{let n=await p({transactionHash:e,isTestnet:r});i(n)}catch(e){console.error(e)}},1e3);return()=>clearInterval(n)}"success"===n?s({transactionHash:e}):["refund","failure"].includes(n)&&o({error:new g(e,r)})}},[n,e,r])}class g extends i.a{constructor(e,r){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,i.b.TRANSACTION_FAILURE),this.relayLink=r?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}},72882:(e,r,n)=>{n.d(r,{A:()=>i});var t=n(65936);let i=t.forwardRef(function({title:e,titleId:r,...n},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"}))})},75767:(e,r,n)=>{n.d(r,{E:()=>i});var t=n(78912);let i=t.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`},84844:(e,r,n)=>{n.d(r,{A:()=>t});let t=(0,n(90478).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},90478:(e,r,n)=>{n.d(r,{A:()=>l});var t=n(65936);let i=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,n)=>n?n.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},s=(...e)=>e.filter((e,r,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===r).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:l,iconNode:c,...d},h)=>(0,t.createElement)("svg",{ref:h,...o,width:r,height:r,stroke:e,strokeWidth:i?24*Number(n)/Number(r):n,className:s("lucide",a),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let n=(0,t.forwardRef)(({className:n,...o},l)=>(0,t.createElement)(a,{ref:l,iconNode:r,className:s(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...o}));return n.displayName=i(e),n}},97031:(e,r,n)=>{n.d(r,{S:()=>_,T:()=>G,a:()=>H});var t=n(73788),i=n(65936);let s=i.forwardRef(function({title:e,titleId:r,...n},t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},n),e?i.createElement("title",{id:r},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"}))});var o=n(72652);let a=i.forwardRef(function({title:e,titleId:r,...n},t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},n),e?i.createElement("title",{id:r},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))});var l=n(78912),c=n(14227),d=n(74124),h=n(4956),x=n(14314),u=n(75767),p=n(23970),m=n(64081),g=n(22320),j=n(28887),f=n(56618),v=n(75187),y=n(41196),w=n(48931),k=n(13437),b=n(33992),T=n(1346),I=n(45195),A=n(46547),L=n(72882);let C=i.forwardRef(function({title:e,titleId:r,...n},t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},n),e?i.createElement("title",{id:r},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"}))});var R=n(40162),E=n(86249);let S=(0,l.I4)(h.L)`
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: var(--privy-color-accent);
  svg {
    fill: var(--privy-color-accent);
  }
`;var V=({iconUrl:e,value:r,symbol:n,usdValue:i,nftName:s,nftCount:o,decimals:a,$isLoading:l})=>{if(l)return(0,t.jsx)($,{$isLoading:l});let c=r&&i&&a?function(e,r,n){let t=parseFloat(e),i=parseFloat(n);if(0===t||0===i||Number.isNaN(t)||Number.isNaN(i))return e;let s=Math.ceil(-Math.log10(.01/(i/t))),o=Math.pow(10,s=Math.max(s=Math.min(s,r),1)),a=+(Math.floor(t*o)/o).toFixed(s).replace(/\.?0+$/,"");return Intl.NumberFormat(void 0,{maximumFractionDigits:r}).format(a)}(r,a,i):r;return(0,t.jsxs)("div",{children:[(0,t.jsxs)($,{$isLoading:l,children:[e&&(0,t.jsx)(M,{src:e,alt:"Token icon"}),o&&o>1?o+"x":void 0," ",s,c," ",n]}),i&&(0,t.jsxs)(N,{$isLoading:l,children:["$",i]})]})};let $=l.I4.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${w.L}
`,N=l.I4.span`
  color: var(--privy-color-foreground-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  word-break: break-all;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  ${w.L}
`,M=l.I4.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  object-fit: contain;
`,O=e=>{let{chain:r,transactionDetails:n,isTokenContractInfoLoading:i,symbol:s}=e,{action:o,functionName:a}=n;return(0,t.jsx)(b.B,{children:(0,t.jsxs)(x.a,{children:["transaction"!==o&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Action"}),(0,t.jsx)(h.V,{children:a})]}),"mint"===a&&"args"in n&&n.args.filter(e=>e).map((e,n)=>(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:`Param ${n}`}),(0,t.jsx)(h.V,{children:"string"==typeof e&&(0,k.P)(e)?(0,t.jsx)(j.A,{address:e,url:r?.blockExplorers?.default?.url,showCopyIcon:!1}):e?.toString()})]},n)),"setApprovalForAll"===a&&n.operator&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Operator"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:n.operator,url:r?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),"setApprovalForAll"===a&&void 0!==n.approved&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Set approval to"}),(0,t.jsx)(h.V,{children:n.approved?"true":"false"})]}),"transfer"===a||"transferFrom"===a||"safeTransferFrom"===a||"approve"===a?(0,t.jsxs)(t.Fragment,{children:["formattedAmount"in n&&n.formattedAmount&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount"}),(0,t.jsxs)(h.V,{$isLoading:i,children:[n.formattedAmount," ",s]})]}),"tokenId"in n&&n.tokenId&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token ID"}),(0,t.jsx)(h.V,{children:n.tokenId.toString()})]})]}):null,"safeBatchTransferFrom"===a&&(0,t.jsxs)(t.Fragment,{children:["amounts"in n&&n.amounts&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amounts"}),(0,t.jsx)(h.V,{children:n.amounts.join(", ")})]}),"tokenIds"in n&&n.tokenIds&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token IDs"}),(0,t.jsx)(h.V,{children:n.tokenIds.join(", ")})]})]}),"approve"===a&&n.spender&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Spender"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:n.spender,url:r?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),("transferFrom"===a||"safeTransferFrom"===a||"safeBatchTransferFrom"===a)&&n.transferFrom&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Transferring from"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:n.transferFrom,url:r?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),("transferFrom"===a||"safeTransferFrom"===a||"safeBatchTransferFrom"===a)&&n.transferTo&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Transferring to"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:n.transferTo,url:r?.blockExplorers?.default?.url,showCopyIcon:!1})})]})]})})},F=({variant:e,setPreventMaliciousTransaction:r,colorScheme:n="light",preventMaliciousTransaction:i})=>"warn"===e?(0,t.jsx)(z,{children:(0,t.jsxs)(A.W,{theme:n,children:[(0,t.jsx)("span",{style:{fontWeight:"500"},children:"Warning: Suspicious transaction"}),(0,t.jsx)("br",{}),"This has been flagged as a potentially deceptive request. Approving could put your assets or funds at risk."]})}):"error"===e?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(z,{children:[(0,t.jsx)(I.E,{theme:n,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"This is a malicious transaction"}),(0,t.jsx)("br",{}),"This transaction transfers tokens to a known malicious address. Proceeding may result in the loss of valuable assets."]})}),(0,t.jsxs)(D,{children:[(0,t.jsx)(T.C,{color:"var(--privy-color-error)",checked:!i,readOnly:!0,onClick:()=>r(!i)}),(0,t.jsx)("span",{children:"I understand and want to proceed anyways."})]})]})}):null,z=l.I4.div`
  margin-top: 1.5rem;
`,D=l.I4.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,P=({transactionIndex:e,maxIndex:r})=>"number"!=typeof e||0===r?"":` (${e+1} / ${r+1})`,_=({img:e,submitError:r,prepareError:n,onClose:l,action:c,title:p,subtitle:f,to:w,tokenAddress:k,network:b,missingFunds:T,fee:I,from:A,cta:L,disabled:C,chain:R,isSubmitting:E,isPreparing:$,isTokenPriceLoading:N,isTokenContractInfoLoading:M,isSponsored:z,symbol:D,balance:_,onClick:H,transactionDetails:B,transactionIndex:Y,maxIndex:G,onBack:Q,chainName:K,validation:X,hasScanDetails:ee,setIsScanDetailsOpen:er,preventMaliciousTransaction:en,setPreventMaliciousTransaction:et,tokensSent:ei,tokensReceived:es,isScanning:eo,isCancellable:ea,functionName:el})=>{let{showTransactionDetails:ec,setShowTransactionDetails:ed,hasMoreDetails:eh,isErc20Ish:ex}=(e=>{let[r,n]=(0,i.useState)(!1),t=!0,s=!1;return(!e||e.isErc20Ish||"transaction"===e.action)&&(t=!1),t&&(s=Object.entries(e||{}).some(([e,r])=>r&&!["action","isErc20Ish","isNFTIsh"].includes(e))),{showTransactionDetails:r,setShowTransactionDetails:n,hasMoreDetails:t&&s,isErc20Ish:e?.isErc20Ish}})(B),eu=(0,v.u)(),ep=ex&&M||$||N||eo;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.M,{onClose:l,backFn:Q}),e&&(0,t.jsx)(q,{children:e}),(0,t.jsxs)(g.T,{style:{marginTop:e?"1.5rem":0},children:[p,(0,t.jsx)(P,{maxIndex:G,transactionIndex:Y})]}),(0,t.jsx)(m.S,{children:f}),(0,t.jsxs)(x.a,{style:{marginTop:"2rem"},children:[(!!ei[0]||ep)&&(0,t.jsxs)(x.R,{children:[es.length>0?(0,t.jsx)(h.L,{children:"Send"}):(0,t.jsx)(h.L,{children:"approve"===c?"Approval amount":"Amount"}),(0,t.jsx)("div",{className:"flex flex-col",children:ei.map((e,r)=>(0,t.jsx)(V,{iconUrl:e.iconUrl,value:"setApprovalForAll"===el?"All":e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},r))})]}),es.length>0&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Receive"}),(0,t.jsx)("div",{className:"flex flex-col",children:es.map((e,r)=>(0,t.jsx)(V,{iconUrl:e.iconUrl,value:e.value,usdValue:e.usdValue,symbol:e.symbol,nftName:e.nftName,nftCount:e.nftCount,decimals:e.decimals},r))})]}),B&&"spender"in B&&B?.spender?(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Spender"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:B.spender,url:R?.blockExplorers?.default?.url})})]}):null,w&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"To"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:w,url:R?.blockExplorers?.default?.url,showCopyIcon:!0})})]}),k&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token address"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:k,url:R?.blockExplorers?.default?.url})})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Network"}),(0,t.jsx)(h.V,{children:b})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Estimated fee"}),(0,t.jsx)(h.V,{$isLoading:$||N||void 0===z,children:z?(0,t.jsxs)(J,{children:[(0,t.jsxs)(Z,{children:["Sponsored by ",eu.name]}),(0,t.jsx)(s,{height:16,width:16})]}):I})]}),eh&&!ee&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.R,{className:"cursor-pointer",onClick:()=>ed(!ec),children:(0,t.jsxs)(h.a,{className:"flex items-center gap-x-1",children:["Details"," ",(0,t.jsx)(o.A,{style:{width:"0.75rem",marginLeft:"0.25rem",transform:ec?"rotate(180deg)":void 0}})]})}),ec&&B&&(0,t.jsx)(O,{action:c,chain:R,transactionDetails:B,isTokenContractInfoLoading:M,symbol:D})]}),ee&&(0,t.jsx)(x.R,{children:(0,t.jsxs)(S,{onClick:()=>er(!0),children:[(0,t.jsx)("span",{className:"text-color-primary",children:"Details"}),(0,t.jsx)(a,{height:"14px",width:"14px",strokeWidth:"2"})]})})]}),(0,t.jsx)(y.Y,{}),r?(0,t.jsx)(u.E,{style:{marginTop:"2rem"},children:r.message}):n&&0===Y?(0,t.jsx)(u.E,{style:{marginTop:"2rem"},children:n.shortMessage??U}):null,(0,t.jsx)(F,{variant:X,preventMaliciousTransaction:en,setPreventMaliciousTransaction:et}),(0,t.jsx)(W,{$useSmallMargins:!(!n&&!r&&"warn"!==X&&"error"!==X),address:A,balance:_,errMsg:$||n||r||!T?void 0:`Add funds on ${R?.name??K} to complete transaction.`}),(0,t.jsx)(d.P,{style:{marginTop:"1rem"},loading:E,disabled:C||$,onClick:H,children:L}),ea&&(0,t.jsx)(d.E,{style:{marginTop:"1rem"},onClick:l,isSubmitting:!1,children:"Not now"}),(0,t.jsx)(d.B,{})]})},H=({img:e,title:r,subtitle:n,cta:a,instructions:l,network:f,blockExplorerUrl:w,isMissingFunds:k,submitError:b,parseError:T,total:I,swap:A,transactingWalletAddress:L,fee:C,balance:R,disabled:E,isSubmitting:V,isPreparing:$,isTokenPriceLoading:N,onClick:M,onClose:O,onBack:F,isSponsored:z})=>{let D=$||N,[P,_]=(0,i.useState)(!1),H=(0,v.u)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.M,{onClose:O,backFn:F}),e&&(0,t.jsx)(q,{children:e}),(0,t.jsx)(g.T,{style:{marginTop:e?"1.5rem":0},children:r}),(0,t.jsx)(m.S,{children:n}),(0,t.jsxs)(x.a,{style:{marginTop:"2rem",marginBottom:".5rem"},children:[(I||D)&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount"}),(0,t.jsx)(h.V,{$isLoading:D,children:I})]}),A&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Swap"}),(0,t.jsx)(h.V,{children:A})]}),f&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Network"}),(0,t.jsx)(h.V,{children:f})]}),(C||D||void 0!==z)&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Estimated fee"}),(0,t.jsx)(h.V,{$isLoading:D,children:z&&!D?(0,t.jsxs)(J,{children:[(0,t.jsxs)(Z,{children:["Sponsored by ",H.name]}),(0,t.jsx)(s,{height:16,width:16})]}):C})]})]}),(0,t.jsx)(x.R,{children:(0,t.jsxs)(S,{onClick:()=>_(e=>!e),children:[(0,t.jsx)("span",{children:"Advanced"}),(0,t.jsx)(o.A,{height:"16px",width:"16px",strokeWidth:"2",style:{transition:"all 300ms",transform:P?"rotate(180deg)":void 0}})]})}),P&&(0,t.jsx)(t.Fragment,{children:l.map((e,r)=>"sol-transfer"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Transfer ",e.withSeed?"with seed":""]})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount"}),(0,t.jsxs)(h.V,{children:[(0,c.NJ)({amount:e.value,decimals:e.token.decimals})," ",e.token.symbol]})]}),!!e.toAccount&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Destination"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.toAccount,url:w})})]})]},r):"spl-transfer"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Transfer ",e.token.symbol]})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount"}),(0,t.jsx)(h.V,{children:e.value.toString()})]}),!!e.fromAta&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Source"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.fromAta,url:w})})]}),!!e.toAta&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Destination"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.toAta,url:w})})]}),!!e.token.address&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.token.address,url:w})})]})]},r):"ata-creation"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsx)(p.L,{children:"Create token account"})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Program ID"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.program,url:w})})]}),!!e.owner&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Owner"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.owner,url:w})})]})]},r):"create-account"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Create account ",e.withSeed?"with seed":""]})}),!!e.account&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Account"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.account,url:w})})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount"}),(0,t.jsxs)(h.V,{children:[(0,c.NJ)({amount:e.value,decimals:9})," SOL"]})]})]},r):"spl-init-account"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsx)(p.L,{children:"Initialize token account"})}),!!e.account&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Account"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.account,url:w})})]}),!!e.mint&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Mint"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mint,url:w})})]}),!!e.owner&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Owner"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.owner,url:w})})]})]},r):"spl-close-account"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsx)(p.L,{children:"Close token account"})}),!!e.source&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Source"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.source,url:w})})]}),!!e.destination&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Destination"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.destination,url:w})})]}),!!e.owner&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Owner"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.owner,url:w})})]})]},r):"spl-sync-native"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsx)(p.L,{children:"Sync native"})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Program ID"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.program,url:w})})]})]},r):"raydium-swap-base-input"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Raydium swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount in"}),(0,t.jsx)(h.V,{children:e.amountIn.toString()})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Minimum amount out"}),(0,t.jsx)(h.V,{children:e.minimumAmountOut.toString()})]}),e.mintIn&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token in"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token out"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintOut,url:w})})]})]},r):"raydium-swap-base-output"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Raydium swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Max amount in"}),(0,t.jsx)(h.V,{children:e.maxAmountIn.toString()})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount out"}),(0,t.jsx)(h.V,{children:e.amountOut.toString()})]}),e.mintIn&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token in"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token out"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintOut,url:w})})]})]},r):"jupiter-swap-shared-accounts-route"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Jupiter swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"In amount"}),(0,t.jsx)(h.V,{children:e.inAmount.toString()})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Quoted out amount"}),(0,t.jsx)(h.V,{children:e.quotedOutAmount.toString()})]}),e.mintIn&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token in"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token out"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintOut,url:w})})]})]},r):"jupiter-swap-exact-out-route"===e.type?(0,t.jsxs)(B,{children:[(0,t.jsx)(x.R,{children:(0,t.jsxs)(p.L,{children:["Jupiter swap"," ",e.tokenIn&&e.tokenOut?`${e.tokenIn.symbol} → ${e.tokenOut.symbol}`:""]})}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Quoted in amount"}),(0,t.jsx)(h.V,{children:e.quotedInAmount.toString()})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Amount out"}),(0,t.jsx)(h.V,{children:e.outAmount.toString()})]}),e.mintIn&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token in"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintIn,url:w})})]}),e.mintOut&&(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Token out"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.mintOut,url:w})})]})]},r):(0,t.jsxs)(B,{children:[(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Program ID"}),(0,t.jsx)(h.V,{children:(0,t.jsx)(j.A,{address:e.program,url:w})})]}),(0,t.jsxs)(x.R,{children:[(0,t.jsx)(h.L,{children:"Data"}),(0,t.jsx)(h.V,{children:e.discriminator})]})]},r))}),(0,t.jsx)(y.Y,{}),b?(0,t.jsx)(u.E,{style:{marginTop:"2rem"},children:b.message}):T?(0,t.jsx)(u.E,{style:{marginTop:"2rem"},children:U}):null,(0,t.jsx)(W,{$useSmallMargins:!(!T&&!b),title:"",address:L,balance:R,errMsg:$||T||b||!k?void 0:"Add funds on Solana to complete transaction."}),(0,t.jsx)(d.P,{style:{marginTop:"1rem"},loading:V,disabled:E||$,onClick:M,children:a}),(0,t.jsx)(d.B,{})]})},W=(0,l.I4)(f.W)`
  ${e=>e.$useSmallMargins?"margin-top: 0.5rem;":"margin-top: 2rem;"}
`,B=(0,l.I4)(x.a)`
  margin-top: 0.5rem;
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-sm);
  padding: 0.5rem;
`,U="There was an error preparing your transaction. Your transaction request will likely fail.",q=l.I4.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,J=l.I4.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
`,Z=l.I4.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,Y=()=>(0,t.jsxs)(ee,{children:[(0,t.jsx)(en,{}),(0,t.jsx)(er,{})]}),G=({transactionError:e,chainId:r,onClose:n,onRetry:s,chainType:o,transactionHash:a})=>{let{chains:l}=(0,E.u)(),[c,h]=(0,i.useState)(!1),{errorCode:x,errorMessage:u}=((e,r)=>{if("ethereum"===r)return{errorCode:e.details??e.message,errorMessage:e.shortMessage};let n=e.txSignature,t=e?.transactionMessage||"Something went wrong.";if(Array.isArray(e.logs)){let r=e.logs.find(e=>/insufficient (lamports|funds)/gi.test(e));r&&(t=r)}return{transactionHash:n,errorMessage:t}})(e,o),p=(({chains:e,chainId:r,chainType:n,transactionHash:t})=>{var i;return"ethereum"===n?e.find(e=>e.id===r)?.blockExplorers?.default.url??"https://etherscan.io":(i=t||"",`https://explorer.solana.com/tx/${i}?chain=${r}`)})({chains:l,chainId:r,chainType:o,transactionHash:a});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.M,{onClose:n}),(0,t.jsxs)(Q,{children:[(0,t.jsx)(Y,{}),(0,t.jsx)(K,{children:x}),(0,t.jsx)(X,{children:"Please try again."}),(0,t.jsxs)(es,{children:[(0,t.jsx)(ei,{children:"Error message"}),(0,t.jsx)(ea,{$clickable:!1,children:u})]}),a&&(0,t.jsxs)(es,{children:[(0,t.jsx)(ei,{children:"Transaction hash"}),(0,t.jsxs)(eo,{children:["Copy this hash to view details about the transaction on a"," ",(0,t.jsx)("u",{children:(0,t.jsx)("a",{href:p,children:"block explorer"})}),"."]}),(0,t.jsxs)(ea,{$clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(a),h(!0)},children:[a,(0,t.jsx)(ed,{clicked:c})]})]}),(0,t.jsx)(et,{onClick:()=>s({resetNonce:!!a}),children:"Retry transaction"})]}),(0,t.jsx)(d.b,{})]})},Q=l.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,K=l.I4.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,X=l.I4.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,ee=l.I4.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,er=(0,l.I4)(R.A)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,en=l.I4.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,et=(0,l.I4)(d.P)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,ei=l.I4.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,es=l.I4.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,eo=l.I4.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`,ea=l.I4.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${e=>e.$clickable&&"cursor: pointer;\n  transition: background-color 0.3s;\n  padding-right: 45px;\n\n  &:hover {\n    background-color: var(--privy-color-foreground-4);\n  }"}
`,el=(0,l.I4)(C)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,ec=(0,l.I4)(L.A)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,ed=({clicked:e})=>(0,t.jsx)(e?ec:el,{})},98355:(e,r,n)=>{n.r(r),n.d(r,{ErrorScreen:()=>g,ErrorScreenView:()=>m,default:()=>g});var t=n(73788),i=n(90478);let s=(0,i.A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),o=(0,i.A)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var a=n(46615),l=n(78912),c=n(75187),d=n(94968),h=n(86249),x=n(79312),u=n(66279),p=n(22404);n(65936),n(30404),n(7764),n(28349),n(32709),n(57668);let m=({error:e,allowlistConfig:r,onRetry:n,onCaptchaReset:i,onBack:l})=>{let c=((e,r)=>{if(e instanceof u.R)return{title:"Transaction failed",detail:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e.message}),(0,t.jsxs)("span",{children:[" ","Check the"," ",(0,t.jsx)(j,{href:e.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:s};if(e instanceof h.a)switch(e.privyErrorCode){case h.b.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:s};case h.b.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:s};case h.b.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:e.message,ctaText:"Try again",icon:s};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:s}}if(e instanceof d.P&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:o};if(!(e instanceof h.c))return e instanceof h.e&&e.status&&[400,422].includes(e.status)?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:s}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:s};switch(e.privyErrorCode){case h.b.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:s};case h.b.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:s};case h.b.ALLOWLIST_REJECTED:return{title:r.errorTitle||"You don't have access to this app",detail:r.errorDetail||"Have you been invited?",ctaText:r.errorCtaText||"Try another account",icon:a.A};case h.b.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case h.b.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case h.b.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:s};case h.b.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:s};case h.b.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:s};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:s}}})(e,r);return(0,t.jsx)(p.S,{title:c.title,subtitle:c.detail,icon:c.icon,onBack:l,iconVariant:"error",primaryCta:{label:c.ctaText,onClick:()=>{e instanceof h.c&&(e.privyErrorCode===h.b.INVALID_CAPTCHA&&i?.(),e.privyErrorCode===h.b.ALLOWLIST_REJECTED&&r.errorCtaLink)?window.location.href=r.errorCtaLink:n?.()},variant:"error"},watermark:!0})},g={component:()=>{let{navigate:e,data:r,lastScreen:n,currentScreen:i}=(0,x.a)(),s=(0,c.u)(),{reset:o}=(0,d.a)(),a=r?.errorModalData?.previousScreen||(n===i?void 0:n);return(0,t.jsx)(m,{error:r?.errorModalData?.error||Error(),allowlistConfig:s.allowlistConfig,onRetry:()=>{e(a||"LandingScreen",!1)},onCaptchaReset:o})}},j=l.I4.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`}}]);