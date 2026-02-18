"use strict";exports.id=9587,exports.ids=[9587],exports.modules={13287:(a,b,c)=>{c.d(b,{L:()=>g});var d=c(66150),e=c(72291);let f=e.I4.a`
  && {
    color: ${({$variant:a})=>"underlined"===a?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({$variant:a})=>"underlined"===a?"underline":"var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
    opacity: ${({$disabled:a})=>a?.5:1};

    font-size: ${({$size:a})=>{switch(a){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${({$size:a})=>{switch(a){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({$variant:a,$disabled:b})=>"underlined"===a?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:a})=>a?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:a,$disabled:b})=>b?"underlined"===a?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`,g=({size:a="md",variant:b="navigation",disabled:c=!1,as:e,children:g,onClick:h,...i})=>(0,d.jsx)(f,{as:e,$size:a,$variant:b,$disabled:c,onClick:a=>{c?a.preventDefault():h?.(a)},...i,children:g})},29138:(a,b,c)=>{c.d(b,{Q:()=>r});var d=c(66150),e=c(91817),f=c(7719),g=c(72291),h=c(50579),i=c(69712);let j=()=>(0,d.jsx)("svg",{width:"200",height:"200",viewBox:"-77 -77 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px"},children:(0,d.jsx)("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})}),k=(a,b,c,d,e)=>{for(let f=b;f<b+d;f++)for(let b=c;b<c+e;b++){let c=a?.[b];c&&c[f]&&(c[f]=0)}return a},l=({x:a,y:b,cellSize:c,bgColor:e,fgColor:f})=>(0,d.jsx)(d.Fragment,{children:[0,1,2].map(g=>(0,d.jsx)("circle",{r:c*(7-2*g)/2,cx:a+7*c/2,cy:b+7*c/2,fill:g%2!=0?e:f},`finder-${a}-${b}-${g}`))}),m=({cellSize:a,matrixSize:b,bgColor:c,fgColor:e})=>(0,d.jsx)(d.Fragment,{children:[[0,0],[(b-7)*a,0],[0,(b-7)*a]].map(([b,f])=>(0,d.jsx)(l,{x:b,y:f,cellSize:a,bgColor:c,fgColor:e},`finder-${b}-${f}`))}),n=({matrix:a,cellSize:b,color:c})=>(0,d.jsx)(d.Fragment,{children:a.map((a,e)=>a.map((a,g)=>a?(0,d.jsx)("rect",{height:b-.4,width:b-.4,x:e*b+.1*b,y:g*b+.1*b,rx:.5*b,ry:.5*b,fill:c},`cell-${e}-${g}`):(0,d.jsx)(f.Fragment,{},`circle-${e}-${g}`)))}),o=({cellSize:a,matrixSize:b,element:c,sizePercentage:e,bgColor:f})=>{if(!c)return(0,d.jsx)(d.Fragment,{});let g=b*(e||.14),h=Math.floor(b/2-g/2),i=Math.floor(b/2+g/2);(i-h)%2!=b%2&&(i+=1);let j=(i-h)*a,k=j-.2*j,l=h*a;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("rect",{x:h*a,y:h*a,width:j,height:j,fill:f}),(0,d.jsx)(c,{x:l+.1*j,y:l+.1*j,height:k,width:k})]})},p=a=>{var b,c;let f,g,h=a.outputSize,j=(b=a.url,c=a.errorCorrectionLevel,f=e.create(b,{errorCorrectionLevel:c}).modules,g=k(g=(0,i.a3)(Array.from(f.data),f.size),0,0,7,7),g=k(g,g.length-7,0,7,7),k(g,0,g.length-7,7,7)),l=h/j.length,p=(0,i.a2)(2*l,{min:.025*h,max:.036*h});return(0,d.jsxs)("svg",{height:a.outputSize,width:a.outputSize,viewBox:`0 0 ${a.outputSize} ${a.outputSize}`,style:{height:"100%",width:"100%",padding:`${p}px`},children:[(0,d.jsx)(n,{matrix:j,cellSize:l,color:a.fgColor}),(0,d.jsx)(m,{cellSize:l,matrixSize:j.length,fgColor:a.fgColor,bgColor:a.bgColor}),(0,d.jsx)(o,{cellSize:l,element:a.logo?.element,bgColor:a.bgColor,matrixSize:j.length})]})},q=g.I4.div.attrs({className:"ph-no-capture"})`
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
`,r=a=>{let{appearance:b}=(0,h.u)(),c=a.bgColor||"#FFFFFF",e=a.fgColor||"#000000",f=a.size||160,g="dark"===b.palette.colorScheme?c:e;return(0,d.jsx)(q,{$size:f,$bgColor:c,$fgColor:e,$borderColor:g,children:(0,d.jsx)(p,{url:a.url,logo:{element:a.squareLogoElement??j},outputSize:f,bgColor:c,fgColor:e,errorCorrectionLevel:a.errorCorrectionLevel||"Q"})})}},36171:(a,b,c)=>{c.d(b,{u:()=>f});var d=c(50579);let e={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}"};function f(){let a=(0,d.u)();return{t:(b,c)=>{var d;let f;return d=a.intl.textLocalization,f=d?.[b]??e[b],c&&0!==Object.keys(c).length?f.replace(/\{(\w+)\}/g,(a,b)=>c[b]??a):f}}}},45172:(a,b,c)=>{c.d(b,{S:()=>w});var d=c(66150),e=c(7719),f=c(72291),g=c(69712),h=c(55164),i=c(59656);let j=f.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,k=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,l=f.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,m=(0,f.I4)(h.M)`
  margin: 0 -8px;
`,n=f.I4.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:a})=>"light"===a?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===a?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,o=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,p=f.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,q=f.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,r=f.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,s=f.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,t=f.I4.div`
  background: ${({$variant:a})=>{switch(a){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,u=f.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,v=f.I4.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,w=({children:a,...b})=>(0,d.jsx)(j,{children:(0,d.jsx)(k,{...b,children:a})}),x=f.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,y=(0,f.I4)(h.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,z=f.I4.div`
  height: 100%;
  width: ${({pct:a})=>a}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=({step:a})=>a?(0,d.jsx)(x,{children:(0,d.jsx)(z,{pct:Math.min(100,a.current/a.total*100)})}):null;w.Header=({title:a,subtitle:b,icon:c,iconVariant:e,iconLoadingStatus:f,showBack:g,onBack:h,showInfo:i,onInfo:j,showClose:k,onClose:n,step:o,...t})=>(0,d.jsxs)(l,{...t,children:[(0,d.jsx)(m,{backFn:g?h:void 0,infoFn:i?j:void 0,onClose:k?n:void 0,closeable:k}),(c||e||a||b)&&(0,d.jsxs)(p,{children:[c||e?(0,d.jsx)(w.Icon,{icon:c,variant:e,loadingStatus:f}):null,!(!a&&!b)&&(0,d.jsxs)(q,{children:[a&&(0,d.jsx)(r,{children:a}),b&&(0,d.jsx)(s,{children:b})]})]}),o&&(0,d.jsx)(A,{step:o})]}),(w.Body=e.forwardRef(({children:a,...b},c)=>(0,d.jsx)(n,{ref:c,...b,children:a}))).displayName="Screen.Body",w.Footer=({children:a,...b})=>(0,d.jsx)(o,{id:"privy-content-footer-container",...b,children:a}),w.Actions=({children:a,...b})=>(0,d.jsx)(B,{...b,children:a}),w.HelpText=({children:a,...b})=>(0,d.jsx)(C,{...b,children:a}),w.Watermark=()=>(0,d.jsx)(y,{}),w.Icon=({icon:a,variant:b="subtle",loadingStatus:c})=>"logo"===b&&a?(0,d.jsx)(u,"string"==typeof a?{children:(0,d.jsx)("img",{src:a,alt:""})}:e.isValidElement(a)?{children:a}:{children:e.createElement(a)}):"loading"===b?a?(0,d.jsx)(v,{children:(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)(g.a4,{success:c?.success,fail:c?.fail}),"string"==typeof a?(0,d.jsx)("span",{style:{background:`url('${a}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):e.isValidElement(a)?e.cloneElement(a,{style:{width:"38px",height:"38px"}}):e.createElement(a,{style:{width:"38px",height:"38px"}})]})}):(0,d.jsx)(t,{$variant:b,children:(0,d.jsx)(i.N,{size:"64px"})}):(0,d.jsx)(t,{$variant:b,children:a&&("string"==typeof a?(0,d.jsx)("img",{src:a,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):e.isValidElement(a)?a:e.createElement(a,{width:32,height:32,stroke:(()=>{switch(b){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let B=f.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,C=f.I4.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    line-height: 22px;

    & a {
      color: var(--privy-color-accent);
    }
  }
`},49020:(a,b,c)=>{c.d(b,{E:()=>g,I:()=>i,a:()=>h});var d=c(72291),e=c(94713);let f=d.I4.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${({$error:a})=>a?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${({$error:a})=>a?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"};
      box-shadow: ${({$error:a})=>a?"none":"0 0 0 1px var(--privy-color-accent-light)"};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;
    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`,g=(0,d.I4)(f)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;
    background-color: #090;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }
`,h=(0,d.I4)(f)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${a=>a.$stacked?"16px":"88px"};

    border: 1px solid
      ${({$error:a})=>a?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
    }
  }
`,i=d.I4.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${e.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`},49587:(a,b,c)=>{c.d(b,{c:()=>P,d:()=>X,i:()=>Y,u:()=>V});var d=c(66150),e=c(7719);let f=e.forwardRef(function({title:a,titleId:b,...c},d){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":b},c),a?e.createElement("title",{id:b},a):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});var g=c(17102);function h(a,b,c){let d,e=c.initialDeps??[],f=!0;function g(){var g,h,i;let j,k;c.key&&(null==(g=c.debug)?void 0:g.call(c))&&(j=Date.now());let l=a();if(!(l.length!==e.length||l.some((a,b)=>e[b]!==a)))return d;if(e=l,c.key&&(null==(h=c.debug)?void 0:h.call(c))&&(k=Date.now()),d=b(...l),c.key&&(null==(i=c.debug)?void 0:i.call(c))){let a=Math.round((Date.now()-j)*100)/100,b=Math.round((Date.now()-k)*100)/100,d=b/16,e=(a,b)=>{for(a=String(a);a.length<b;)a=" "+a;return a};console.info(`%c⏱ ${e(b,5)} /${e(a,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*d,120))}deg 100% 31%);`,null==c?void 0:c.key)}return(null==c?void 0:c.onChange)&&!(f&&c.skipInitialOnChange)&&c.onChange(d),f=!1,d}return g.updateDeps=a=>{e=a},g}function i(a,b){if(void 0!==a)return a;throw Error(`Unexpected undefined${b?`: ${b}`:""}`)}let j=a=>{let{offsetWidth:b,offsetHeight:c}=a;return{width:b,height:c}},k=a=>a,l=a=>{let b=Math.max(a.startIndex-a.overscan,0),c=Math.min(a.endIndex+a.overscan,a.count-1),d=[];for(let a=b;a<=c;a++)d.push(a);return d},m=(a,b)=>{let c=a.scrollElement;if(!c)return;let d=a.targetWindow;if(!d)return;let e=a=>{let{width:c,height:d}=a;b({width:Math.round(c),height:Math.round(d)})};if(e(j(c)),!d.ResizeObserver)return()=>{};let f=new d.ResizeObserver(b=>{let d=()=>{let a=b[0];if(null==a?void 0:a.borderBoxSize){let b=a.borderBoxSize[0];if(b)return void e({width:b.inlineSize,height:b.blockSize})}e(j(c))};a.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(d):d()});return f.observe(c,{box:"border-box"}),()=>{f.unobserve(c)}},n={passive:!0},o="undefined"==typeof window||"onscrollend"in window,p=(a,b)=>{var c,d;let e,f=a.scrollElement;if(!f)return;let g=a.targetWindow;if(!g)return;let h=0,i=a.options.useScrollendEvent&&o?()=>void 0:(c=()=>{b(h,!1)},d=a.options.isScrollingResetDelay,function(...a){g.clearTimeout(e),e=g.setTimeout(()=>c.apply(this,a),d)}),j=c=>()=>{let{horizontal:d,isRtl:e}=a.options;h=d?f.scrollLeft*(e&&-1||1):f.scrollTop,i(),b(h,c)},k=j(!0),l=j(!1);f.addEventListener("scroll",k,n);let m=a.options.useScrollendEvent&&o;return m&&f.addEventListener("scrollend",l,n),()=>{f.removeEventListener("scroll",k),m&&f.removeEventListener("scrollend",l)}},q=(a,b,c)=>{if(null==b?void 0:b.borderBoxSize){let a=b.borderBoxSize[0];if(a)return Math.round(a[c.options.horizontal?"inlineSize":"blockSize"])}return a[c.options.horizontal?"offsetWidth":"offsetHeight"]},r=(a,{adjustments:b=0,behavior:c},d)=>{var e,f;null==(f=null==(e=d.scrollElement)?void 0:e.scrollTo)||f.call(e,{[d.options.horizontal?"left":"top"]:a+b,behavior:c})};class s{constructor(a){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.currentScrollToIndex=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.laneAssignments=new Map,this.pendingMeasuredCacheIndexes=[],this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let a=null,b=()=>a||(this.targetWindow&&this.targetWindow.ResizeObserver?a=new this.targetWindow.ResizeObserver(a=>{a.forEach(a=>{let b=()=>{this._measureElement(a.target,a)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(b):b()})}):null);return{disconnect:()=>{var c;null==(c=b())||c.disconnect(),a=null},observe:a=>{var c;return null==(c=b())?void 0:c.observe(a,{box:"border-box"})},unobserve:a=>{var c;return null==(c=b())?void 0:c.unobserve(a)}}})(),this.range=null,this.setOptions=a=>{Object.entries(a).forEach(([b,c])=>{void 0===c&&delete a[b]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:k,rangeExtractor:l,onChange:()=>{},measureElement:q,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...a}},this.notify=a=>{var b,c;null==(c=(b=this.options).onChange)||c.call(b,this,a)},this.maybeNotify=h(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;let b=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==b){if(this.cleanup(),!b)return void this.maybeNotify();this.scrollElement=b,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(a=this.scrollElement)?void 0:a.window)??null,this.elementsCache.forEach(a=>{this.observer.observe(a)}),this.unsubs.push(this.options.observeElementRect(this,a=>{this.scrollRect=a,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(a,b)=>{this.scrollAdjustments=0,this.scrollDirection=b?this.getScrollOffset()<a?"forward":"backward":null,this.scrollOffset=a,this.isScrolling=b,this.maybeNotify()})),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(a,b)=>{let c=new Map,d=new Map;for(let e=b-1;e>=0;e--){let b=a[e];if(c.has(b.lane))continue;let f=d.get(b.lane);if(null==f||b.end>f.end?d.set(b.lane,b):b.end<f.end&&c.set(b.lane,!0),c.size===this.options.lanes)break}return d.size===this.options.lanes?Array.from(d.values()).sort((a,b)=>a.end===b.end?a.index-b.index:a.end-b.end)[0]:void 0},this.getMeasurementOptions=h(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes],(a,b,c,d,e,f)=>(void 0!==this.prevLanes&&this.prevLanes!==f&&(this.lanesChangedFlag=!0),this.prevLanes=f,this.pendingMeasuredCacheIndexes=[],{count:a,paddingStart:b,scrollMargin:c,getItemKey:d,enabled:e,lanes:f}),{key:!1}),this.getMeasurements=h(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:a,paddingStart:b,scrollMargin:c,getItemKey:d,enabled:e,lanes:f},g)=>{if(!e)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>a)for(let b of this.laneAssignments.keys())b>=a&&this.laneAssignments.delete(b);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMeasuredCacheIndexes=[]),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(a=>{this.itemSizeCache.set(a.key,a.size)}));let h=this.lanesSettling?0:this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[],this.lanesSettling&&this.measurementsCache.length===a&&(this.lanesSettling=!1);let i=this.measurementsCache.slice(0,h),j=Array(f).fill(void 0);for(let a=0;a<h;a++){let b=i[a];b&&(j[b.lane]=a)}for(let e=h;e<a;e++){let a,f,h=d(e),k=this.laneAssignments.get(e);if(void 0!==k&&this.options.lanes>1){let d=j[a=k],e=void 0!==d?i[d]:void 0;f=e?e.end+this.options.gap:b+c}else{let d=1===this.options.lanes?i[e-1]:this.getFurthestMeasurement(i,e);f=d?d.end+this.options.gap:b+c,a=d?d.lane:e%this.options.lanes,this.options.lanes>1&&this.laneAssignments.set(e,a)}let l=g.get(h),m="number"==typeof l?l:this.options.estimateSize(e),n=f+m;i[e]={index:e,start:f,size:m,end:n,key:h,lane:a},j[a]=e}return this.measurementsCache=i,i},{key:!1,debug:()=>this.options.debug}),this.calculateRange=h(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(a,b,c,d)=>this.range=a.length>0&&b>0?function({measurements:a,outerSize:b,scrollOffset:c,lanes:d}){let e=a.length-1;if(a.length<=d)return{startIndex:0,endIndex:e};let f=t(0,e,b=>a[b].start,c),g=f;if(1===d)for(;g<e&&a[g].end<c+b;)g++;else if(d>1){let h=Array(d).fill(0);for(;g<e&&h.some(a=>a<c+b);){let b=a[g];h[b.lane]=b.end,g++}let i=Array(d).fill(c+b);for(;f>=0&&i.some(a=>a>=c);){let b=a[f];i[b.lane]=b.start,f--}f=Math.max(0,f-f%d),g=Math.min(e,g+(d-1-g%d))}return{startIndex:f,endIndex:g}}({measurements:a,outerSize:b,scrollOffset:c,lanes:d}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=h(()=>{let a=null,b=null,c=this.calculateRange();return c&&(a=c.startIndex,b=c.endIndex),this.maybeNotify.updateDeps([this.isScrolling,a,b]),[this.options.rangeExtractor,this.options.overscan,this.options.count,a,b]},(a,b,c,d,e)=>null===d||null===e?[]:a({startIndex:d,endIndex:e,overscan:b,count:c}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{let b=this.options.indexAttribute,c=a.getAttribute(b);return c?parseInt(c,10):(console.warn(`Missing attribute name '${b}={index}' on measured element.`),-1)},this._measureElement=(a,b)=>{let c=this.indexFromElement(a),d=this.measurementsCache[c];if(!d)return;let e=d.key,f=this.elementsCache.get(e);f!==a&&(f&&this.observer.unobserve(f),this.observer.observe(a),this.elementsCache.set(e,a)),a.isConnected&&this.resizeItem(c,this.options.measureElement(a,b,this))},this.resizeItem=(a,b)=>{let c=this.measurementsCache[a];if(!c)return;let d=b-(this.itemSizeCache.get(c.key)??c.size);0!==d&&((void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(c,d,this):c.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=d,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,b)),this.notify(!1))},this.measureElement=a=>{a?this._measureElement(a,void 0):this.elementsCache.forEach((a,b)=>{a.isConnected||(this.observer.unobserve(a),this.elementsCache.delete(b))})},this.getVirtualItems=h(()=>[this.getVirtualIndexes(),this.getMeasurements()],(a,b)=>{let c=[];for(let d=0,e=a.length;d<e;d++){let e=b[a[d]];c.push(e)}return c},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{let b=this.getMeasurements();if(0!==b.length)return i(b[t(0,b.length-1,a=>i(b[a]).start,a)])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let a=this.scrollElement.document.documentElement;return this.options.horizontal?a.scrollWidth-this.scrollElement.innerWidth:a.scrollHeight-this.scrollElement.innerHeight}},this.getOffsetForAlignment=(a,b,c=0)=>{if(!this.scrollElement)return 0;let d=this.getSize(),e=this.getScrollOffset();return"auto"===b&&(b=a>=e+d?"end":"start"),"center"===b?a+=(c-d)/2:"end"===b&&(a-=d),Math.max(Math.min(this.getMaxScrollOffset(),a),0)},this.getOffsetForIndex=(a,b="auto")=>{a=Math.max(0,Math.min(a,this.options.count-1));let c=this.measurementsCache[a];if(!c)return;let d=this.getSize(),e=this.getScrollOffset();if("auto"===b)if(c.end>=e+d-this.options.scrollPaddingEnd)b="end";else{if(!(c.start<=e+this.options.scrollPaddingStart))return[e,b];b="start"}if("end"===b&&a===this.options.count-1)return[this.getMaxScrollOffset(),b];let f="end"===b?c.end+this.options.scrollPaddingEnd:c.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(f,b,c.size),b]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(a,{align:b="start",behavior:c}={})=>{"smooth"===c&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(a,b),{adjustments:void 0,behavior:c})},this.scrollToIndex=(a,{align:b="auto",behavior:c}={})=>{"smooth"===c&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),a=Math.max(0,Math.min(a,this.options.count-1)),this.currentScrollToIndex=a;let d=0,e=b=>{if(!this.targetWindow)return;let d=this.getOffsetForIndex(a,b);if(!d)return void console.warn("Failed to get offset for index:",a);let[e,g]=d;this._scrollToOffset(e,{adjustments:void 0,behavior:c}),this.targetWindow.requestAnimationFrame(()=>{let b=()=>{if(this.currentScrollToIndex!==a)return;let b=this.getScrollOffset(),c=this.getOffsetForIndex(a,g);c?1.01>Math.abs(c[0]-b)||f(g):console.warn("Failed to get offset for index:",a)};this.isDynamicMode()?this.targetWindow.requestAnimationFrame(b):b()})},f=b=>{this.targetWindow&&this.currentScrollToIndex===a&&(++d<10?this.targetWindow.requestAnimationFrame(()=>e(b)):console.warn(`Failed to scroll to index ${a} after 10 attempts.`))};e(b)},this.scrollBy=(a,{behavior:b}={})=>{"smooth"===b&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+a,{adjustments:void 0,behavior:b})},this.getTotalSize=()=>{var a;let b,c=this.getMeasurements();if(0===c.length)b=this.options.paddingStart;else if(1===this.options.lanes)b=(null==(a=c[c.length-1])?void 0:a.end)??0;else{let a=Array(this.options.lanes).fill(null),d=c.length-1;for(;d>=0&&a.some(a=>null===a);){let b=c[d];null===a[b.lane]&&(a[b.lane]=b.end),d--}b=Math.max(...a.filter(a=>null!==a))}return Math.max(b-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(a,{adjustments:b,behavior:c})=>{this.options.scrollToFn(a,{behavior:c,adjustments:b},this)},this.measure=()=>{this.itemSizeCache=new Map,this.laneAssignments=new Map,this.notify(!1)},this.setOptions(a)}}let t=(a,b,c,d)=>{for(;a<=b;){let e=(a+b)/2|0,f=c(e);if(f<d)a=e+1;else{if(!(f>d))return e;b=e-1}}return a>0?a-1:0},u="undefined"!=typeof document?e.useLayoutEffect:e.useEffect;var v=c(11765),w=c(72291),x=c(55164);let y=e.forwardRef(function({title:a,titleId:b,...c},d){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":b},c),a?e.createElement("title",{id:b},a):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))});var z=c(90151),A=c(13287),B=c(29138),C=c(49020),D=c(50579),E=c(36171),F=c(69712),G=c(67331),H=c(66482),I=c(17883),J=c(45172);let K=w.I4.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,L=w.I4.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,M=(0,w.I4)(y)`
  color: var(--privy-color-success);
`,N=(0,w.I4)(z.C)`
  color: var(--privy-color-foreground-3);
  opactiy: 0.5;
`,O={phantom:{mobile:{native:"phantom://",universal:"https://phantom.app/ul/"}},solflare:{mobile:{native:void 0,universal:"https://solflare.com/ul/v1/"}},metamask:{image_url:{sm:F.M,md:F.M}}};class P{static normalize(a){return a.replace(/[-_]wallet$/,"").replace(/[-_]extension$/,"").toLowerCase()}isEth(a){return a.chains.some(a=>a.includes("eip155:"))}isSol(a){return a.chains.some(a=>a.includes("solana:"))}inAllowList(a,b){if(!this.normalizedAllowList||0===this.normalizedAllowList.length||"listing"===b&&this.includeWalletConnect)return!0;let c=P.normalize(a);return this.normalizedAllowList.some(a=>c===P.normalize(a))}inDenyList(a,b){return"listing"===b&&"rabby"===a||"agw"===P.normalize(a)}chainMatches(a){return"ethereum-only"===this.chainFilter?"ethereum"===a:"solana-only"!==this.chainFilter||"solana"===a}getAllowListKey(a,b,c,d){let e=P.normalize(a);for(let a of this.normalizedAllowList||[])if(e===P.normalize(a))return a;if("connector"===b){if(("injected"===c||"solana_adapter"===c)&&"ethereum"===d&&this.detectedEth)return"detected_ethereum_wallets";if(("injected"===c||"solana_adapter"===c)&&"solana"===d&&this.detectedSol)return"detected_solana_wallets"}if("listing"===b&&this.includeWalletConnect)return"wallet_connect"}connectorOk(a){return!!("null"!==a.connectorType&&"walletconnect_solana"!==a.walletBranding.id&&this.chainMatches(a.chainType)&&(this.inAllowList(a.walletClientType,"connector")||("injected"===a.connectorType||"solana_adapter"===a.connectorType)&&("ethereum"===a.chainType&&this.detectedEth||"solana"===a.chainType&&this.detectedSol)))}listingOk(a){if(a.slug.includes("coinbase"))return!1;if("ethereum-only"===this.chainFilter){if(!this.isEth(a))return!1}else if("solana-only"===this.chainFilter&&!this.isSol(a))return!1;return!(!this.inAllowList(a.slug,"listing")||this.inDenyList(a.slug,"listing"))}getWallets(a,b){let c=new Map,d=a=>{let b=c.get(a.id);if(b){b.chainType!==a.chainType&&(b.chainType="multi");let c=new Set(b.chains);a.chains.forEach(a=>c.add(a)),b.chains=Array.from(c),!b.icon&&a.icon&&(b.icon=a.icon),!b.url&&a.url&&(b.url=a.url),!b.listing&&a.listing&&(b.listing=a.listing),!b.allowListKey&&a.allowListKey&&(b.allowListKey=a.allowListKey)}else c.set(a.id,a)};a.filter(a=>this.connectorOk(a)).forEach(a=>{let b=P.normalize(a.walletClientType);d({id:b,label:a.walletBranding?.name??b,source:"connector",connector:a,chainType:a.chainType,icon:a.walletBranding?.icon,url:void 0,chains:["ethereum"===a.chainType?"eip155":"solana"],allowListKey:this.getAllowListKey(a.walletClientType,"connector",a.connectorType,a.chainType)})});let e=a.find(a=>"wallet_connect_v2"===a.connectorType),f=a.find(a=>"walletconnect_solana"===a.walletBranding.id);b.filter(a=>this.listingOk(a)).forEach(b=>{let c=[...b.chains].filter(a=>a.includes("eip155:")||a.includes("solana:"));if(a.some(a=>P.normalize(a.walletClientType)===P.normalize(b.slug)&&"ethereum"===a.chainType&&"null"!==a.connectorType)||e||b.mobile.native||b.mobile.universal||F.q[b.slug]?.chainTypes.includes("ethereum")||(c=c.filter(a=>!a.includes("eip155:"))),a.some(a=>P.normalize(a.walletClientType)===P.normalize(b.slug)&&"solana"===a.chainType&&"null"!==a.connectorType)||f||b.mobile.native||b.mobile.universal||F.q[b.slug]?.chainTypes.includes("solana")||(c=c.filter(a=>!a.includes("solana:"))),!c.length)return;let g=P.normalize(b.slug),h=O[b.slug],i=h?.image_url?.sm||b.image_url?.sm;c.some(a=>a.includes("eip155:"))&&d({id:g,label:b.name||g,source:"listing",listing:b,chainType:"ethereum",icon:i,url:b.homepage,chains:c,allowListKey:this.getAllowListKey(b.slug,"listing")}),c.some(a=>a.includes("solana:"))&&d({id:g,label:b.name||g,source:"listing",listing:b,chainType:"solana",icon:i,url:b.homepage,chains:c,allowListKey:this.getAllowListKey(b.slug,"listing")})}),this.includeWalletConnectQr&&e&&d({id:"wallet_connect_qr",label:"WalletConnect",source:"connector",connector:e,chainType:"ethereum",icon:I.W,url:void 0,chains:["eip155"],allowListKey:"wallet_connect_qr"}),this.includeWalletConnectQrSolana&&f&&d({id:"wallet_connect_qr_solana",label:"WalletConnect",source:"connector",connector:f,chainType:"solana",icon:I.W,url:void 0,chains:["solana"],allowListKey:"wallet_connect_qr_solana"});let g=Array.from(c.values());g.forEach(a=>{let b=O[a.listing?.slug||a.id];b?.image_url?.sm&&(a.icon=b.image_url.sm)});let h=new Map;return this.normalizedAllowList?.forEach((a,b)=>{h.set(P.normalize(a),b)}),{wallets:g.slice().sort((a,b)=>{if(a.allowListKey&&b.allowListKey){let c=this.normalizedAllowList?.findIndex(b=>P.normalize(b)===P.normalize(a.allowListKey))??-1,d=this.normalizedAllowList?.findIndex(a=>P.normalize(a)===P.normalize(b.allowListKey))??-1;if(c!==d&&c>=0&&d>=0)return c-d}if(a.allowListKey&&!b.allowListKey)return -1;if(!a.allowListKey&&b.allowListKey)return 1;let c=P.normalize(a.id),d=P.normalize(b.id);"binance-defi"===c?c="binance":"universalprofiles"===c?c="universal_profile":"cryptocom-defi"===c?c="cryptocom":"bitkeep"===c&&(c="bitget_wallet"),"binance-defi"===d?d="binance":"universalprofiles"===d?d="universal_profile":"cryptocom-defi"===d?d="cryptocom":"bitkeep"===d&&(d="bitget_wallet");let e=h.has(c),f=h.has(d);return e&&f?h.get(c)-h.get(d):e?-1:f?1:"connector"===a.source&&"listing"===b.source?-1:"listing"===a.source&&"connector"===b.source?1:a.label.toLowerCase().localeCompare(b.label.toLowerCase())}),walletCount:g.length}}constructor(a,b){this.chainFilter=a,b&&b.length>0&&(this.normalizedAllowList=b.map(String),this.normalizedAllowList.includes("binance")&&this.normalizedAllowList.push("binance-defi-wallet"),this.normalizedAllowList.includes("bitget_wallet")&&this.normalizedAllowList.push("bitkeep")),this.detectedEth=this.normalizedAllowList?.includes("detected_ethereum_wallets")??!1,this.detectedSol=this.normalizedAllowList?.includes("detected_solana_wallets")??!1,this.includeWalletConnect=this.normalizedAllowList?.includes("wallet_connect")??!1,this.includeWalletConnectQr=this.normalizedAllowList?.includes("wallet_connect_qr")??!1,this.includeWalletConnectQrSolana=this.normalizedAllowList?.includes("wallet_connect_qr_solana")??!1}}var Q=a=>(0,d.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,d.jsx)("path",{d:"m0 0h32v32h-32z",fill:"#5469d4"}),(0,d.jsx)("path",{d:"m15.997 5.333-.143.486v14.106l.143.143 6.548-3.87z",fill:"#c2ccf4"}),(0,d.jsx)("path",{d:"m15.996 5.333-6.548 10.865 6.548 3.87z",fill:"#fff"}),(0,d.jsx)("path",{d:"m15.997 21.306-.08.098v5.025l.08.236 6.552-9.227z",fill:"#c2ccf4"}),(0,d.jsx)("path",{d:"m15.996 26.665v-5.36l-6.548-3.867z",fill:"#fff"}),(0,d.jsx)("path",{d:"m15.995 20.07 6.548-3.87-6.548-2.976v6.847z",fill:"#8698e8"}),(0,d.jsx)("path",{d:"m9.448 16.2 6.548 3.87v-6.846z",fill:"#c2ccf4"})]}),R=a=>(0,d.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,d.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"7.233",x2:"24.766",y1:"24.766",y2:"7.234",children:[(0,d.jsx)("stop",{offset:"0",stopColor:"#9945ff"}),(0,d.jsx)("stop",{offset:".2",stopColor:"#7962e7"}),(0,d.jsx)("stop",{offset:"1",stopColor:"#00d18c"})]}),(0,d.jsx)("path",{d:"m0 0h32v32h-32z",fill:"#10111a"}),(0,d.jsx)("path",{clipRule:"evenodd",d:"m9.873 20.41a.645.645 0 0 1 .476-.21l14.662.012a.323.323 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54zm15.376-2.862a.322.322 0 0 1 -.238.54l-14.662.012a.642.642 0 0 1 -.476-.21l-3.122-3.44a.323.323 0 0 1 .238-.54l14.662-.012a.644.644 0 0 1 .475.21zm-15.376-9.738a.644.644 0 0 1 .476-.21l14.662.012a.322.322 0 0 1 .238.54l-3.123 3.438a.643.643 0 0 1 -.475.21l-14.662-.012a.323.323 0 0 1 -.238-.54z",fill:"url(#a)",fillRule:"evenodd"})]});w.I4.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w.I4.button`
  padding: 0.25rem;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background: var(--privy-color-background-2);
`;let S=w.I4.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: ' ';
    border-radius: var(--privy-border-radius-full);
    height: 6px;
    width: 6px;
    background-color: var(--privy-color-icon-success);
    position: absolute;
    right: -3px;
    top: -3px;
  }
`,T=w.I4.img`
  width: 32px;
  height: 32px;
  border-radius: 0.25rem;
  object-fit: contain;
`,U=w.I4.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
  border-radius: var(--privy-border-radius-sm);
  background-color: var(--privy-color-background-2);

  svg {
    width: 100%;
    max-width: 1rem;
    max-height: 1rem;
    stroke-width: 2;
  }
`;function V({enabled:a=!0,walletList:b,walletChainType:c}){let d=(0,D.u)(),{connectors:f}=(0,G.u)(),{listings:g,loading:h}=(0,F.d)(a),i=c??d.appearance.walletChainType,j=b??d.appearance?.walletList,k=(0,e.useMemo)(()=>new P(i,j),[i,j]),{wallets:l,walletCount:m}=(0,e.useMemo)(()=>k.getWallets(f,g),[k,f,g]),[n,o]=(0,e.useState)(""),p=(0,e.useMemo)(()=>n?l.filter(a=>a.label.toLowerCase().includes(n.toLowerCase())):l,[n,l]),[q,r]=(0,e.useState)();return{selected:q,setSelected:r,search:n,setSearch:o,loadingListings:h,wallets:p,walletCount:m}}w.I4.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 24rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${a=>"light"===a.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===a.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`;let W=a=>!a||"string"!=typeof a&&(a instanceof F.w||a instanceof F.S),X=({index:a,style:b,data:c,recent:e})=>{let f=c.wallets[a],{walletChainType:g,handleWalletClick:h}=c,{t:i}=(0,E.u)(),j={...b,boxSizing:"border-box"};return f?(0,d.jsxs)(_,{style:j,onClick:()=>h(f),children:[f.icon&&(f.connector&&!W(f.connector)?(0,d.jsx)(S,{children:"string"==typeof f.icon?(0,d.jsx)(T,{src:f.icon}):(0,d.jsx)(f.icon,{style:{width:"32px",height:"32px"}})}):"string"==typeof f.icon?(0,d.jsx)(T,{src:f.icon}):(0,d.jsx)(f.icon,{style:{width:"32px",height:"32px"}})),(0,d.jsx)(ac,{children:f.label}),e?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(U,{children:i("connectWallet.lastUsed")}),(0,d.jsx)(aa,{children:(0,d.jsxs)(d.Fragment,{children:["ethereum-only"===g&&(0,d.jsx)(Q,{}),"solana-only"===g&&(0,d.jsx)(R,{})]})})]}):(0,d.jsx)(aa,{children:"ethereum-only"!==g&&"solana-only"!==g&&(0,d.jsxs)(d.Fragment,{children:[f.chains?.some(a=>a.startsWith("eip155"))&&(0,d.jsx)(Q,{}),f.chains?.some(a=>a.startsWith("solana"))&&(0,d.jsx)(R,{})]})})]}):null};var Y=({className:a,customDescription:b,connectOnly:c,preSelectedWalletId:h,hideHeader:i,...j})=>{let k=(0,D.u)(),{t:l}=(0,E.u)(),{connectors:n}=(0,G.u)(),o=j.walletChainType||k.appearance.walletChainType,q=j.walletList||k.appearance?.walletList,{onBack:t,onClose:w,app:y}=j,{selected:z,setSelected:K,qrUrl:L,setQrUrl:M,connecting:N,uiState:S,errorCode:U,wallets:Y,walletCount:af,handleConnect:ag,handleBack:ah,showSearchBar:ai,isInitialConnectView:aj,title:ak,search:al,setSearch:am}=function({onConnect:a,onBack:b,onClose:c,onConnectError:d,walletList:f,walletChainType:g,app:h}){let i=(0,D.u)(),{connectors:j}=(0,G.u)(),{t:k}=(0,E.u)(),{wallets:l,walletCount:m,search:n,setSearch:o,selected:p,setSelected:q}=V({enabled:(0,F.e)(f??[]),walletList:f,walletChainType:g}),[r,s]=(0,e.useState)(),[t,u]=(0,e.useState)(),[w,x]=(0,e.useState)(),[y,z]=(0,e.useState)(),A=!p&&!w&&!y,B=A&&(m>6||n.length>0),C=j.find(a=>"wallet_connect_v2"===a.connectorType),H=(0,e.useCallback)(async(b,c)=>{if(b){if(y?.connector===b&&"loading"===r)return void console.log("Already connecting to this wallet, skipping duplicate attempt");if(s("loading"),"string"==typeof b)return z({connector:b,name:c?.name??"Wallet",icon:c?.icon,id:c?.id,url:c?.url}),void window.open(b,"_blank");z({connector:b,name:c?.name??b.walletBranding.name??"Wallet",icon:c?.icon??b.walletBranding.icon,id:c?.id,url:c?.url});try{let c=await b.connect({showPrompt:!0});if(!c)return s("error"),u(void 0),void d?.(new G.P("Unable to connect wallet"));s("success"),u(void 0),(0,F.K)({address:c.address,client:c.walletClientType,appId:i.id}),setTimeout(()=>{a({connector:b,wallet:c})},D.q)}catch(a){if(console.error("ERROR: ",{e:a}),a?.message?.includes("already pending for origin")||a?.message?.includes("wallet_requestPermissions"))return void console.log("Connection request already pending, maintaining loading state");s("error"),u(a?.privyErrorCode),d?.(a instanceof Error?a:new G.P(a?.message||"Unable to connect wallet"))}}},[i.id,a,y,r]),I=(0,e.useCallback)(()=>w?(s(void 0),u(void 0),z(void 0),void x(void 0)):y?(s(void 0),u(void 0),void z(void 0)):p?(s(void 0),u(void 0),z(void 0),void q(void 0)):"error"===r||"loading"===r?(s(void 0),u(void 0),void z(void 0)):void b?.(),[w,y,p,r,b]),J=(0,e.useMemo)(()=>y?.connector===C&&w&&v.Fr&&y?.name?k("connectWallet.goToWallet",{walletName:y.name}):y?.connector===C&&w&&y?.name?k("connectWallet.scanToConnect",{walletName:y.name}):w&&y?.name?k(v.Fr?"connectWallet.goToWallet":"connectWallet.scanToConnect",{walletName:y.name}):"string"==typeof y?.connector?k("connectWallet.openOrInstall",{walletName:y.name}):p&&!y?k("connectWallet.selectNetwork"):y?null:k("connectWallet.selectYourWallet"),[y,w,p,C,k]);return{selected:p,setSelected:q,qrUrl:w,setQrUrl:x,connecting:y,uiState:r,errorCode:t,search:n,setSearch:o,wallets:l,walletCount:m,wc:C,isInitialConnectView:A,showSearchBar:B,title:J,handleConnect:H,handleBack:I,onClose:c,onConnect:a,app:h}}({...j,walletList:q,walletChainType:o}),an=n.find(a=>"wallet_connect_v2"===a.connectorType),ao=n.find(a=>"walletconnect_solana"===a.walletBranding.id),ap=(0,e.useRef)(null),aq=function({useFlushSync:a=!0,...b}){let c=e.useReducer(()=>({}),{})[1],d={...b,onChange:(d,e)=>{var f;a&&e?(0,g.flushSync)(c):c(),null==(f=b.onChange)||f.call(b,d,e)}},[f]=e.useState(()=>new s(d));return f.setOptions(d),u(()=>f._didMount(),[]),u(()=>f._willUpdate()),f}({observeElementRect:m,observeElementOffset:p,scrollToFn:r,...{count:Y.length,getScrollElement:()=>ap.current,estimateSize:()=>56,overscan:6,gap:5}}),ar=(0,e.useCallback)(async a=>{let b="solana-only"!==o&&a.chains?.some(a=>a.startsWith("eip155")),d="ethereum-only"!==o&&a.chains?.some(a=>a.startsWith("solana")),e=()=>{let b=a.id;return F.q[b]||F.q[`${b}_wallet`]},f=b=>{let c=P.normalize(a.id);return n.find(a=>P.normalize(a.walletClientType)===c&&a.chainType===b&&!("ethereum"===a.chainType&&a instanceof F.w||"solana"===a.chainType&&a instanceof F.S))},g=async()=>{if(!an||!a.listing)return!1;let b=O[a.listing.slug]?{...a.listing,...O[a.listing.slug]}:a.listing;return an.setWalletEntry(b,M),await an.resetConnection(a.id),await ag(an,{name:a.label,icon:a.icon,id:a.id,url:a.url}),!0},h=async()=>!!ao&&!!a.listing&&(await ao.disconnect(),ao.wallet.setWalletEntry(a.listing,M),await new Promise(a=>setTimeout(a,100)),await ag(ao,{name:a.label,icon:a.icon,id:a.id,url:a.url}),!0),i=async b=>{let d=(a=>{let b=e();if(b)return b.getMobileRedirect({isSolana:a,connectOnly:!!c,useUniversalLink:!1})})(b);return!!d&&(await ag(d,{name:a.label,icon:a.icon,id:a.id,url:a.url}),!0)};if(b&&d)K(a);else{if(b&&!d){let b=f("ethereum");if(b&&!W(b))return void await ag(b,{name:a.label,icon:a.icon,id:a.id,url:a.url});if(v.Fr&&e()){if(await i(!1)||await g())return}else if(await g()||await i(!1))return}if(d&&!b){let b=f("solana");if(b&&!W(b))return void await ag(b,{name:a.label,icon:a.icon,id:a.id,url:a.url});if(v.Fr){if(await i(!0)||await h())return}else if(await h()||await i(!0))return}if(!W(a.connector)){if(an&&"wallet_connect_v2"===a.connector?.connectorType)if(await an.resetConnection(a.id),"wallet_connect_qr"!==a.id&&a.listing){let b=O[a.listing.slug]?{...a.listing,...O[a.listing.slug]}:a.listing;an.setWalletEntry(b,M)}else an.setWalletEntry({id:"wallet_connect_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect",homepage:"",chains:["eip155"],mobile:{native:"",universal:void 0}},M);return ao&&"walletconnect_solana"===a.connector?.walletBranding.id&&(await ao.disconnect(),"wallet_connect_qr_solana"!==a.id&&a.listing?ao.wallet.setWalletEntry(a.listing,M):ao.wallet.setWalletEntry({id:"wallet_connect_solana_qr",name:"WalletConnect",rdns:"",slug:"wallet-connect-solana",homepage:"",chains:["solana"],mobile:{native:"",universal:void 0}},M),await new Promise(a=>setTimeout(a,100))),void await ag(a.connector,{name:a.label,icon:a.icon,id:a.id,url:a.url})}a.url&&await ag(a.url,{name:a.label,icon:a.icon,id:a.id,url:a.url})}},[an,ao,ag,K,M,o,c,n]);return(0,e.useEffect)(()=>{if(!h)return;let a=Y.find(({id:a})=>a===h);a&&ar(a).catch(console.error)},[h]),(0,d.jsxs)(J.S,{className:a,children:[(0,d.jsx)(J.S.Header,{icon:i&&aj?void 0:N&&!L||L&&v.Fr&&N?.icon?N.icon:N?void 0:H.W,iconVariant:N&&!L||L&&v.Fr?"loading":void 0,iconLoadingStatus:N&&!L||L&&v.Fr?{success:"success"===S,fail:"error"===S}:void 0,title:i&&aj?void 0:N&&!L?l("connectWallet.waitingForWallet",{walletName:N.name}):L&&v.Fr?l("connectWallet.waitingForWallet",{walletName:N?.name??"connection"}):ak,subtitle:i&&aj?void 0:N&&!L&&"string"==typeof N.connector?l("connectWallet.installAndConnect",{walletName:N.name}):N&&!L&&"string"!=typeof N.connector?"error"===S?U===G.b.NO_SOLANA_ACCOUNTS?`The connected wallet has no Solana accounts. Please add a Solana account in ${N.name} and try again.`:l("connectWallet.tryConnectingAgain"):l("connectionStatus.connectOneWallet"):aj?b??(y?l("connectWallet.connectToAccount",{appName:y.name}):null):null,showBack:!!t||!aj,showClose:!0,onBack:t||ah,onClose:w}),(0,d.jsxs)(J.S.Body,{ref:ap,$colorScheme:k.appearance.palette.colorScheme,style:{marginBottom:L?"0.5rem":void 0},children:[ai&&(0,d.jsx)(Z,{children:(0,d.jsxs)(C.E,{style:{background:"transparent"},children:[(0,d.jsx)(F.V,{children:(0,d.jsx)(f,{})}),(0,d.jsx)("input",{className:"login-method-button",type:"text",placeholder:l("connectWallet.searchPlaceholder",{count:String(af)}),onChange:a=>am(a.target.value),value:al})]})}),L&&v.Fr&&"loading"===S&&(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[(0,d.jsx)(x.a,{variant:"primary",onClick:()=>window.open(L.universal??L.native,"_blank"),style:{width:"100%"},children:l("connectWallet.openInApp")}),(0,d.jsx)(ad,{value:L.universal??L.native,iconOnly:!0,children:"Copy link"})]}),L&&!v.Fr&&"loading"===S&&(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:(0,d.jsx)(ad,{value:L.universal??L.native,iconOnly:!0,children:l("connectWallet.copyLink")})}),L&&!v.Fr&&(0,d.jsx)(B.Q,{size:280,url:L.universal??L.native,squareLogoElement:N?.icon?"string"==typeof N.icon?a=>(0,d.jsx)("svg",{...a,children:(0,d.jsx)("image",{href:N.icon,height:a.height,width:a.width})}):N.icon:I.h}),L&&!v.Fr&&N?.url&&("binance"===N.id||"binanceus"===N.id||"binance-defi"===N.id)&&(0,d.jsxs)(ae,{children:[(0,d.jsxs)("span",{children:["Don't have ",N.name,"? "]}),(0,d.jsx)(A.L,{href:N.url,target:"_blank",size:"sm",children:"Download here"})]}),(0,d.jsxs)($,{children:[N&&!L&&"string"==typeof N.connector&&(0,d.jsxs)(_,{onClick:()=>window.open(N.connector,"_blank"),children:[N.icon&&("string"==typeof N.icon?(0,d.jsx)(T,{src:N.icon}):(0,d.jsx)(N.icon,{})),(0,d.jsx)(ac,{children:N.name})]}),z?.chains.some(a=>a.startsWith("eip155"))&&!N&&(0,d.jsxs)(_,{onClick:()=>ar({...z,chains:z.chains.filter(a=>a.startsWith("eip155"))}),children:[z.icon&&("string"==typeof z.icon?(0,d.jsx)(T,{src:z.icon}):(0,d.jsx)(z.icon,{})),(0,d.jsx)(ac,{children:z.label}),(0,d.jsx)(aa,{children:(0,d.jsx)(Q,{})})]}),z?.chains.some(a=>a.startsWith("solana"))&&!N&&(0,d.jsxs)(_,{onClick:()=>ar({...z,chains:z.chains.filter(a=>a.startsWith("solana"))}),children:[z.icon&&("string"==typeof z.icon?(0,d.jsx)(T,{src:z.icon}):(0,d.jsx)(z.icon,{})),(0,d.jsx)(ac,{children:z.label}),(0,d.jsx)(aa,{children:(0,d.jsx)(R,{})})]}),aj&&(0,d.jsxs)(d.Fragment,{children:[!(af>0)&&(0,d.jsx)(ab,{children:l("connectWallet.noWalletsFound")}),af>0&&!L&&(0,d.jsx)("div",{style:{maxHeight:56*Math.min(Y.length,5)+5,width:"100%"},children:(0,d.jsx)("div",{style:{height:`${aq.getTotalSize()}px`,width:"100%",position:"relative"},children:aq.getVirtualItems().map(a=>(0,d.jsx)(X,{index:a.index,style:{position:"absolute",top:0,left:0,height:`${a.size}px`,transform:`translateY(${a.start}px)`},data:{wallets:Y,walletChainType:o,handleWalletClick:ar}},a.key))})})]})]})]}),(0,d.jsxs)(J.S.Footer,{children:[N&&!L&&"string"!=typeof N.connector&&"error"===S&&(0,d.jsx)(J.S.Actions,{children:(0,d.jsx)(x.a,{style:{width:"100%",alignItems:"center"},variant:"error",onClick:()=>ag(N.connector,{name:N.name,icon:N.icon,id:N.id,url:N.url}),children:l("connectWallet.retry")})}),!!(y&&y.legal.privacyPolicyUrl&&y.legal.termsAndConditionsUrl)&&(0,d.jsx)(x.T,{app:y,alwaysShowImplicitConsent:!0}),(0,d.jsx)(J.S.Watermark,{})]})]})};let Z=w.I4.div`
  position: sticky;
  // Offset by negative margin to account for focus outline
  margin-top: -3px;
  padding-top: 3px;
  top: -3px;
  z-index: 1;
  background: var(--privy-color-background);
  padding-bottom: calc(var(--screen-space) / 2);
`,$=w.I4.div`
  display: flex;
  flex-direction: column;
  gap: ${5}px;
`,_=w.I4.button`
  && {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    position: relative;
    text-align: left;
    font-weight: 500;
    transition: background 200ms ease-in;
    width: calc(100% - 4px);
    border-radius: var(--privy-border-radius-md);
    padding: 0.75em;
    border: 1px solid var(--privy-color-foreground-4);
    justify-content: space-between;
  }

  &:hover {
    background: var(--privy-color-background-2);
  }
`,aa=w.I4.span`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    border-radius: var(--privy-border-radius-full);
    stroke-width: 2.5;
    width: 100%;
    max-height: 1rem;
    max-width: 1rem;
    flex-shrink: 0;
  }

  & > svg:not(:last-child) {
    border-radius: var(--privy-border-radius-full);
    margin-right: -0.375rem;
  }
`,ab=w.I4.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,ac=w.I4.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--privy-color-foreground);
  font-weight: 400;
  flex: 1;
`,ad=(0,w.I4)(function({children:a,iconOnly:b,value:c,hideCopyIcon:f,...g}){let[h,i]=(0,e.useState)(!1);return(0,d.jsxs)(K,{...g,onClick:()=>{navigator.clipboard.writeText(c||a).catch(console.error),i(!0),setTimeout(()=>i(!1),1500)},children:[a," ",h?(0,d.jsxs)(L,{children:[(0,d.jsx)(M,{})," ",!b&&"Copied"]}):!f&&(0,d.jsx)(N,{})]})})`
  && {
    margin: 0.5rem auto 0 auto;
  }
`,ae=w.I4.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground-3);
`},59656:(a,b,c)=>{c.d(b,{N:()=>f});var d=c(66150),e=c(72291);let f=({size:a,centerIcon:b})=>(0,d.jsx)(g,{$size:a,children:(0,d.jsxs)(h,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(k,{}),b?(0,d.jsx)(i,{children:b}):null]})}),g=e.I4.div`
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
`},66482:(a,b,c)=>{c.d(b,{W:()=>e});var d=c(66150);let e=({...a})=>(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[(0,d.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,d.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,d.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]})},90151:(a,b,c)=>{c.d(b,{C:()=>e});var d=c(66150);let e=({color:a,...b})=>(0,d.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 115.77 122.88",xmlSpace:"preserve",...b,children:(0,d.jsx)("g",{children:(0,d.jsx)("path",{fill:a||"currentColor",className:"st0",d:"M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"})})})},94713:(a,b,c)=>{c.d(b,{E:()=>e});var d=c(72291);let e=d.I4.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`}};