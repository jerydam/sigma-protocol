"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2051],{12051:(e,n,t)=>{t.r(n),t.d(n,{ConnectionStatusScreen:()=>k,ConnectionStatusView:()=>C,default:()=>k,getErrorDetails:()=>S});var r=t(73788),a=t(65936),o=t(28349),i=t(78912),l=t(94968),c=t(55249),s=t(75187),d=t(99031),u=t(69375),p=t(41196),g=t(84968),h=t(98539),v=t(86249),f=t(79312),y=t(17984),b=t(53763),m=t(88836),w=t(22404);t(7764),t(32709),t(57668),t(30404);let x=e=>{let n=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(e=>(0,g.q)(e,{strict:!0})).map(e=>(0,h.b)(e));return!!n?.length&&!!e?.linkedAccounts.filter(e=>"wallet"==e.type&&n.includes(e.address)).length},S=e=>e?.privyErrorCode===v.b.LINKED_TO_ANOTHER_USER?u.C.ERROR_USER_EXISTS:e instanceof u.P&&!e.details.default?e.details:e instanceof u.d?u.C.ERROR_TIMED_OUT:e?.privyErrorCode===v.b.CANNOT_LINK_MORE_OF_TYPE?u.C.ERROR_USER_LIMIT_REACHED:u.C.ERROR_WALLET_CONNECTION,C=({walletLogo:e,title:n,subtitle:t,signSuccess:a,errorMessage:o,connectSuccess:i,separateConnectAndSign:l,signing:s,walletConnectRedirectUri:p,walletConnectFallbackUniversalUri:g,hasTabbedAway:h,showCoinbaseWalletResetCta:v,numRetries:f,onBack:y,onSign:b,onRetry:m,onCoinbaseReset:x,onDifferentWallet:S})=>{let{t:C}=(0,d.u)(),k=v?{label:"Use a different wallet",onClick:x,disabled:a}:o===u.C.ERROR_USER_EXISTS&&y?{label:"Use a different wallet",onClick:S}:i&&!a&&l?{label:s?"Signing":"Sign with your wallet",onClick:b,disabled:s}:!a&&o?.retryable&&f<2?{label:"Retry",onClick:m,disabled:!1}:a||o?void 0:{label:C("connectionStatus.connecting"),onClick:()=>{},disabled:!0};return(0,r.jsx)(w.S,{title:n,subtitle:t,icon:e,iconVariant:"loading",iconLoadingStatus:{success:a,fail:!!o},primaryCta:k,onBack:y,watermark:!0,children:!i&&p&&!h&&(0,r.jsxs)(E,{children:[C("connectionStatus.stillHere")," ",(0,r.jsx)(c.L,{href:p,target:"_blank",variant:"underlined",size:"sm",children:C("connectionStatus.tryConnectingAgain")}),g&&(0,r.jsxs)(r.Fragment,{children:[" ",C("connectionStatus.or")," ",(0,r.jsx)(c.L,{href:g,target:"_blank",variant:"underlined",size:"sm",children:C("connectionStatus.useDifferentLink")})]})]})})},k={component:()=>{var e,n;let t,i,[c,g]=(0,a.useState)(!1),[h,w]=(0,a.useState)(!1),[k,E]=(0,a.useState)(void 0),{authenticated:T,logout:j}=(0,f.u)(),{navigate:_,navigateBack:I,lastScreen:W,currentScreen:R,setModalData:A,data:L}=(0,f.a)(),N=(0,s.u)(),{t:$}=(0,d.u)(),{getAuthFlow:O,walletConnectionStatus:z,closePrivyModal:F,initLoginWithWallet:U,loginWithWallet:M,updateWallets:D,createAnalyticsEvent:B}=(0,v.u)(),{walletConnectors:H}=(0,f.u)(),[q,V]=(0,a.useState)(0),{user:P}=(0,f.u)(),Y=(0,b.u)(),[X]=(0,a.useState)(P?.linkedAccounts.length||0),[G,K]=(0,a.useState)(""),[Q,J]=(0,a.useState)(""),[Z,ee]=(0,a.useState)(!1),{hasTabbedAway:en}=function(){let[e,n]=(0,a.useState)(!1),t=(0,a.useCallback)(()=>{document.hidden&&n(!0)},[]);return(0,a.useEffect)(()=>(document.addEventListener("visibilitychange",t),()=>document.removeEventListener("visibilitychange",t)),[t]),{hasTabbedAway:e,reset:()=>n(!1)}}(),{enabled:et,token:er}=(0,l.a)(),ea=(0,p.Q)(z?.connector?.walletClientType||"unknown"),eo=o.Fr&&"wallet_connect_v2"===z?.connector?.connectorType||o.Fr&&"coinbase_wallet"===z?.connector?.connectorType||o.Fr&&"base_account"===z?.connector?.connectorType||o.Fr&&"injected"===z?.connector?.connectorType&&"phantom"===z?.connector?.walletClientType||o.Fr&&"solana_adapter"===z?.connector?.connectorType&&"mobile_wallet_adapter"===z.connector.walletClientType,ei="connected"===z?.status,el="switching_to_supported_chain"===z?.status;(0,a.useEffect)(()=>{let e=O(),n=e instanceof l.b||e instanceof l.S?e:void 0;ei&&"solana"===z.connector?.chainType&&"phantom"===z.connector?.walletClientType&&Y(m.e)&&void 0===L?.login?.isSigningInWithLedgerSolana?_("ConnectLedgerScreen",!1):(ei&&!n&&(!et||er||T?U(z.connectedWallet,er,L?.login?.disableSignup,L?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{ee(!0)}):(A({captchaModalData:{callback:e=>U(z.connectedWallet,e,L?.login?.disableSignup,L?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{ee(!0)}),userIntentRequired:!1,onSuccessNavigateTo:"ConnectionStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),_("CaptchaScreen",!1))),n instanceof l.S&&L?.login?.isSigningInWithLedgerSolana&&(n.messageType="transaction"),n&&eo&&ei&&!n.preparedMessage?n.buildMessage():n&&!eo&&ei&&(h||(async()=>{w(!0),E(void 0);try{"wallet_connect_v2"===z?.connector?.connectorType&&"metamask"===z?.connector?.walletClientType&&await (0,p.k)(2500),await es()}catch(e){console.warn("Auto-prompted signature failed",e)}finally{w(!1)}})()))},[q,ei,Z]),(0,a.useEffect)(()=>{if(P&&c){let e=s.q-500;if(N?.legal.requireUsersAcceptTerms&&!P.hasAcceptedTerms){let n=setTimeout(()=>{_("AffirmativeConsentScreen")},e);return()=>clearTimeout(n)}if((0,y.s)(P,N.embeddedWallets)){let n=setTimeout(()=>{A({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),B({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"ConnectionStatusScreen"}}),j()},callAuthOnSuccessOnClose:!0}}),_("EmbeddedWalletOnAccountCreateScreen")},e);return()=>clearTimeout(n)}D();let n=setTimeout(()=>F({shouldCallAuthOnSuccess:!0,isSuccess:!0}),s.q);return()=>clearTimeout(n)}},[P,c]);let ec=e=>{if(e?.privyErrorCode!==v.b.ALLOWLIST_REJECTED){if(e?.privyErrorCode===v.b.USER_LIMIT_REACHED)return console.error(new v.k(e).toString()),void _("UserLimitReachedScreen");if(e?.privyErrorCode!==v.b.USER_DOES_NOT_EXIST)return e?.privyErrorCode===v.b.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce?(A({accountTransfer:{nonce:e.data?.data?.nonce,account:O()?.meta.address,displayName:e.data?.data?.account?.displayName,externalWalletMetadata:{walletClientType:O()?.meta.walletClientType,chainId:O()?.meta.chainId,connectorType:O()?.meta.connectorType},linkMethod:O()instanceof l.b?"siwe":"siws",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress}}),void _("LinkConflictScreen")):void E(S(e));_("AccountNotFoundScreen")}else _("AllowlistRejectionScreen")};async function es(){try{await M(),g(!0)}catch(e){ec(e)}finally{w(!1)}}(0,a.useEffect)(()=>{z?.connectError&&ec(z?.connectError)},[z]),e=()=>{let e="wallet_connect_v2"===ed&&z?.connector instanceof l.W?z.connector.redirectUri:void 0;e&&K(e);let n="wallet_connect_v2"===ed&&z?.connector instanceof l.W?z.connector.fallbackUniversalRedirectUri:void 0;n&&J(n)},n=z?.connector instanceof l.W&&!G?500:null,t=(0,a.useRef)(()=>{}),(0,a.useEffect)(()=>{t.current=e}),(0,a.useEffect)(()=>{if(null!==n){let e=setInterval(()=>t.current(),n||0);return()=>clearInterval(e)}},[n]);let ed=z?.connector?.connectorType||"injected",eu=z?.connector?.walletClientType||"unknown",ep=ea?.metadata?.shortName||ea?.name||z?.connector?.walletBranding.name||"Browser Extension",eg=ea?.image_url?.md||z?.connector?.walletBranding.icon||(e=>(0,r.jsx)(l.B,{...e})),eh="Browser Extension"===ep?ep.toLowerCase():ep;i=c?$("connectionStatus.successfullyConnected",{walletName:eh}):k?$("connectionStatus.errorTitle",{errorMessage:k.message}):el?"Switching networks":ei?h&&eo?"Signing":"Sign to verify":`Waiting for ${eh}`;let ev=$("connectionStatus.checkOtherWindows");c?ev=X===(P?.linkedAccounts.length||0)?"Wallet was already linked.":"You're good to go!":q>=2&&k?ev="Unable to connect wallet":k?ev=k.detail:el?ev="Switch your wallet to the requested network.":ei&&eo?ev="Sign the message in your wallet to verify it belongs to you.":"metamask"===eu&&o.Fr?ev="Click continue to open and connect MetaMask.":"metamask"===eu?ev="For the best experience, connect only one wallet at a time.":"wallet_connect"===ed?ev="Open your mobile wallet app to continue":"coinbase_wallet"===ed?(0,p.T)()||(ev=x(P)?"Continue with the Coinbase app. Not the right wallet? Reset your connection below.":"Confirm in the Coinbase app/popup to continue."):L?.login?.isSigningInWithLedgerSolana&&(ev="Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");let ef=H?.walletConnectors?.find(e=>"coinbase_wallet"===e.walletClientType),ey="coinbase_wallet"===eu&&(x(P)||k===u.C.ERROR_USER_EXISTS);return(0,r.jsx)(C,{walletLogo:eg,title:i,subtitle:ev,signSuccess:c,errorMessage:k,connectSuccess:ei,separateConnectAndSign:eo,signing:h,walletConnectRedirectUri:G,walletConnectFallbackUniversalUri:Q,hasTabbedAway:en,showCoinbaseWalletResetCta:ey,numRetries:q,onBack:W&&R!==W?I:void 0,onSign:()=>{w(!0),es()},onRetry:()=>{V(q+1),E(void 0),ei?(w(!0),es()):z?.connectRetry()},onCoinbaseReset:()=>{ef&&ef?.disconnect()},onDifferentWallet:I})}},E=i.I4.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`},17984:(e,n,t)=>{t.d(n,{s:()=>a});var r=t(94968);let a=(e,n)=>(0,r.s)(e,n.ethereum.createOnLogin)||(0,r.k)(e,n.solana.createOnLogin)},22404:(e,n,t)=>{t.d(n,{S:()=>i});var r=t(73788),a=t(74124),o=t(94217);let i=({primaryCta:e,secondaryCta:n,helpText:t,watermark:i=!0,children:l,...c})=>{let s=e||n?(0,r.jsxs)(r.Fragment,{children:[e&&(()=>{let{label:n,...t}=e,o=t.variant||"primary";return(0,r.jsx)(a.a,{...t,variant:o,style:{width:"100%",...t.style},children:n})})(),n&&(()=>{let{label:e,...t}=n,o=t.variant||"secondary";return(0,r.jsx)(a.a,{...t,variant:o,style:{width:"100%",...t.style},children:e})})()]}):null;return(0,r.jsxs)(o.S,{id:c.id,className:c.className,children:[(0,r.jsx)(o.S.Header,{...c}),l?(0,r.jsx)(o.S.Body,{children:l}):null,t||s||i?(0,r.jsxs)(o.S.Footer,{children:[t?(0,r.jsx)(o.S.HelpText,{children:t}):null,s?(0,r.jsx)(o.S.Actions,{children:s}):null,i?(0,r.jsx)(o.S.Watermark,{}):null]}):null]})}},55249:(e,n,t)=>{t.d(n,{L:()=>i});var r=t(73788),a=t(78912);let o=a.I4.a`
  && {
    color: ${({$variant:e})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({$variant:e})=>"underlined"===e?"underline":"var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
    opacity: ${({$disabled:e})=>e?.5:1};

    font-size: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${({$size:e})=>{switch(e){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({$variant:e,$disabled:n})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:e})=>e?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:e,$disabled:n})=>n?"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`,i=({size:e="md",variant:n="navigation",disabled:t=!1,as:a,children:i,onClick:l,...c})=>(0,r.jsx)(o,{as:a,$size:e,$variant:n,$disabled:t,onClick:e=>{t?e.preventDefault():l?.(e)},...c,children:i})},66656:(e,n,t)=>{t.d(n,{N:()=>o});var r=t(73788),a=t(78912);let o=({size:e,centerIcon:n})=>(0,r.jsx)(i,{$size:e,children:(0,r.jsxs)(l,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(d,{}),n?(0,r.jsx)(c,{children:n}):null]})}),i=a.I4.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,l=a.I4.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,c=a.I4.div`
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
`,s=a.I4.div`
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
`,d=a.I4.div`
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
`},94217:(e,n,t)=>{t.d(n,{S:()=>S});var r=t(73788),a=t(65936),o=t(78912),i=t(41196),l=t(74124),c=t(66656);let s=o.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=o.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,o.I4)(l.M)`
  margin: 0 -8px;
`,g=o.I4.div`
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
  ${({$colorScheme:e})=>"light"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,h=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=o.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=o.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=o.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,b=o.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=o.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=o.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,x=o.I4.div`
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
`,S=({children:e,...n})=>(0,r.jsx)(s,{children:(0,r.jsx)(d,{...n,children:e})}),C=o.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,o.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=o.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,T=({step:e})=>e?(0,r.jsx)(C,{children:(0,r.jsx)(E,{pct:Math.min(100,e.current/e.total*100)})}):null;S.Header=({title:e,subtitle:n,icon:t,iconVariant:a,iconLoadingStatus:o,showBack:i,onBack:l,showInfo:c,onInfo:s,showClose:d,onClose:g,step:h,...m})=>(0,r.jsxs)(u,{...m,children:[(0,r.jsx)(p,{backFn:i?l:void 0,infoFn:c?s:void 0,onClose:d?g:void 0,closeable:d}),(t||a||e||n)&&(0,r.jsxs)(v,{children:[t||a?(0,r.jsx)(S.Icon,{icon:t,variant:a,loadingStatus:o}):null,!(!e&&!n)&&(0,r.jsxs)(f,{children:[e&&(0,r.jsx)(y,{children:e}),n&&(0,r.jsx)(b,{children:n})]})]}),h&&(0,r.jsx)(T,{step:h})]}),(S.Body=a.forwardRef(({children:e,...n},t)=>(0,r.jsx)(g,{ref:t,...n,children:e}))).displayName="Screen.Body",S.Footer=({children:e,...n})=>(0,r.jsx)(h,{id:"privy-content-footer-container",...n,children:e}),S.Actions=({children:e,...n})=>(0,r.jsx)(j,{...n,children:e}),S.HelpText=({children:e,...n})=>(0,r.jsx)(_,{...n,children:e}),S.Watermark=()=>(0,r.jsx)(k,{}),S.Icon=({icon:e,variant:n="subtle",loadingStatus:t})=>"logo"===n&&e?(0,r.jsx)(w,"string"==typeof e?{children:(0,r.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===n?e?(0,r.jsx)(x,{children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(i.a4,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,r.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,r.jsx)(m,{$variant:n,children:(0,r.jsx)(c.N,{size:"64px"})}):(0,r.jsx)(m,{$variant:n,children:e&&("string"==typeof e?(0,r.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(n){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let j=o.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,_=o.I4.div`
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
`},99031:(e,n,t)=>{t.d(n,{u:()=>o});var r=t(75187);let a={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}"};function o(){let e=(0,r.u)();return{t:(n,t)=>{var r;let o;return r=e.intl.textLocalization,o=r?.[n]??a[n],t&&0!==Object.keys(t).length?o.replace(/\{(\w+)\}/g,(e,n)=>t[n]??e):o}}}}}]);