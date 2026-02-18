"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2051,8263],{8263:(e,t,n)=>{n.r(t),n.d(t,{ConnectOnlyStatusScreen:()=>v,ConnectOnlyStatusScreenView:()=>h,default:()=>v});var o=n(73788),a=n(65936),r=n(28349),i=n(69375),l=n(75187),c=n(41196),s=n(86249),d=n(79312),u=n(22404),p=n(94968),g=n(12051);n(7764),n(30404),n(32709),n(57668);let h=({walletLogo:e,success:t,errorMessage:n,title:a,subtitle:r,onRetry:l,onUseDifferentWallet:c,onBack:s,numRetries:d,maxRetries:p})=>(0,o.jsx)(u.S,{title:a,subtitle:r,icon:e,iconVariant:"loading",iconLoadingStatus:{success:t,fail:!!n},primaryCta:n===i.C.ERROR_USER_EXISTS?{label:"Use a different wallet",onClick:c}:!t&&n?.retryable&&d<p?{label:"Retry",onClick:l,disabled:!n?.retryable||d>=p}:!t&&n&&d>=p?{label:"Use a different wallet",onClick:c}:void 0,onBack:s,watermark:!0}),v={component:()=>{let e,{navigateBack:t,navigate:n,lastScreen:i,currentScreen:u,data:v,setModalData:f}=(0,d.a)(),{walletConnectionStatus:y,closePrivyModal:w}=(0,s.u)(),[m,b]=(0,a.useState)(void 0),[x,S]=(0,a.useState)(0),C=(0,c.Q)(y?.connector?.walletClientType||"unknown"),k="connected"===y?.status,E="switching_to_supported_chain"===y?.status;(0,a.useEffect)(()=>{if(k){let e;if(v?.externalConnectWallet?.onCompleteNavigateTo){let t=v.externalConnectWallet.onCompleteNavigateTo,o=y.connectedWallet?.address;e=setTimeout(()=>{if(v.funding&&y.connector){let e=y.connector.wallets.find(e=>e.address===o);f({...v,funding:{...v.funding,connectedWallet:e}})}n(t({address:o,walletClientType:y.connector?.walletClientType,walletChainType:y.connector?.chainType}))},l.q)}else e=setTimeout(w,l.q);return()=>clearTimeout(e)}},[k]),(0,a.useEffect)(()=>{var e;y?.connectError&&(e=y?.connectError,b((0,g.getErrorDetails)(e)))},[y]);let T=y?.connector?.connectorType||"injected",R=y?.connector?.walletClientType||"unknown",_=C?.metadata?.shortName||C?.name||y?.connector?.walletBranding.name||"Browser Extension",j=C?.image_url?.md||y?.connector?.walletBranding.icon||(e=>(0,o.jsx)(p.B,{...e})),W="Browser Extension"===_?_.toLowerCase():_;e=k?`Successfully connected with ${W}`:m?m.message:E?"Switching networks":`Waiting for ${W}`;let I="Don’t see your wallet? Check your other browser windows.";return k?I="You’re good to go!":x>=2&&m?I="Unable to connect wallet":m?I=m.detail:E?I="Switch your wallet to the requested network.":"metamask"===R&&r.Fr?I="Click to continue to open and connect MetaMask.":"metamask"===R?I="For the best experience, connect only one wallet at a time.":"wallet_connect_v2"===T?I="Open your mobile wallet app to continue":"coinbase_wallet"===T&&(I="Confirm in the Coinbase app/popup to continue."),(0,o.jsx)(h,{walletName:_,walletLogo:j,success:k,errorMessage:m,title:e,subtitle:I,onRetry:()=>{S(x+1),b(void 0),y?.connectRetry()},onUseDifferentWallet:t,onBack:u===i?void 0:t,numRetries:x,maxRetries:2})}}},12051:(e,t,n)=>{n.r(t),n.d(t,{ConnectionStatusScreen:()=>k,ConnectionStatusView:()=>C,default:()=>k,getErrorDetails:()=>S});var o=n(73788),a=n(65936),r=n(28349),i=n(78912),l=n(94968),c=n(55249),s=n(75187),d=n(99031),u=n(69375),p=n(41196),g=n(84968),h=n(98539),v=n(86249),f=n(79312),y=n(17984),w=n(53763),m=n(88836),b=n(22404);n(7764),n(32709),n(57668),n(30404);let x=e=>{let t=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(e=>(0,g.q)(e,{strict:!0})).map(e=>(0,h.b)(e));return!!t?.length&&!!e?.linkedAccounts.filter(e=>"wallet"==e.type&&t.includes(e.address)).length},S=e=>e?.privyErrorCode===v.b.LINKED_TO_ANOTHER_USER?u.C.ERROR_USER_EXISTS:e instanceof u.P&&!e.details.default?e.details:e instanceof u.d?u.C.ERROR_TIMED_OUT:e?.privyErrorCode===v.b.CANNOT_LINK_MORE_OF_TYPE?u.C.ERROR_USER_LIMIT_REACHED:u.C.ERROR_WALLET_CONNECTION,C=({walletLogo:e,title:t,subtitle:n,signSuccess:a,errorMessage:r,connectSuccess:i,separateConnectAndSign:l,signing:s,walletConnectRedirectUri:p,walletConnectFallbackUniversalUri:g,hasTabbedAway:h,showCoinbaseWalletResetCta:v,numRetries:f,onBack:y,onSign:w,onRetry:m,onCoinbaseReset:x,onDifferentWallet:S})=>{let{t:C}=(0,d.u)(),k=v?{label:"Use a different wallet",onClick:x,disabled:a}:r===u.C.ERROR_USER_EXISTS&&y?{label:"Use a different wallet",onClick:S}:i&&!a&&l?{label:s?"Signing":"Sign with your wallet",onClick:w,disabled:s}:!a&&r?.retryable&&f<2?{label:"Retry",onClick:m,disabled:!1}:a||r?void 0:{label:C("connectionStatus.connecting"),onClick:()=>{},disabled:!0};return(0,o.jsx)(b.S,{title:t,subtitle:n,icon:e,iconVariant:"loading",iconLoadingStatus:{success:a,fail:!!r},primaryCta:k,onBack:y,watermark:!0,children:!i&&p&&!h&&(0,o.jsxs)(E,{children:[C("connectionStatus.stillHere")," ",(0,o.jsx)(c.L,{href:p,target:"_blank",variant:"underlined",size:"sm",children:C("connectionStatus.tryConnectingAgain")}),g&&(0,o.jsxs)(o.Fragment,{children:[" ",C("connectionStatus.or")," ",(0,o.jsx)(c.L,{href:g,target:"_blank",variant:"underlined",size:"sm",children:C("connectionStatus.useDifferentLink")})]})]})})},k={component:()=>{var e,t;let n,i,[c,g]=(0,a.useState)(!1),[h,b]=(0,a.useState)(!1),[k,E]=(0,a.useState)(void 0),{authenticated:T,logout:R}=(0,f.u)(),{navigate:_,navigateBack:j,lastScreen:W,currentScreen:I,setModalData:A,data:L}=(0,f.a)(),N=(0,s.u)(),{t:$}=(0,d.u)(),{getAuthFlow:O,walletConnectionStatus:U,closePrivyModal:F,initLoginWithWallet:z,loginWithWallet:M,updateWallets:B,createAnalyticsEvent:D}=(0,v.u)(),{walletConnectors:q}=(0,f.u)(),[H,V]=(0,a.useState)(0),{user:P}=(0,f.u)(),Y=(0,w.u)(),[X]=(0,a.useState)(P?.linkedAccounts.length||0),[Q,G]=(0,a.useState)(""),[K,J]=(0,a.useState)(""),[Z,ee]=(0,a.useState)(!1),{hasTabbedAway:et}=function(){let[e,t]=(0,a.useState)(!1),n=(0,a.useCallback)(()=>{document.hidden&&t(!0)},[]);return(0,a.useEffect)(()=>(document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)),[n]),{hasTabbedAway:e,reset:()=>t(!1)}}(),{enabled:en,token:eo}=(0,l.a)(),ea=(0,p.Q)(U?.connector?.walletClientType||"unknown"),er=r.Fr&&"wallet_connect_v2"===U?.connector?.connectorType||r.Fr&&"coinbase_wallet"===U?.connector?.connectorType||r.Fr&&"base_account"===U?.connector?.connectorType||r.Fr&&"injected"===U?.connector?.connectorType&&"phantom"===U?.connector?.walletClientType||r.Fr&&"solana_adapter"===U?.connector?.connectorType&&"mobile_wallet_adapter"===U.connector.walletClientType,ei="connected"===U?.status,el="switching_to_supported_chain"===U?.status;(0,a.useEffect)(()=>{let e=O(),t=e instanceof l.b||e instanceof l.S?e:void 0;ei&&"solana"===U.connector?.chainType&&"phantom"===U.connector?.walletClientType&&Y(m.e)&&void 0===L?.login?.isSigningInWithLedgerSolana?_("ConnectLedgerScreen",!1):(ei&&!t&&(!en||eo||T?z(U.connectedWallet,eo,L?.login?.disableSignup,L?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{ee(!0)}):(A({captchaModalData:{callback:e=>z(U.connectedWallet,e,L?.login?.disableSignup,L?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{ee(!0)}),userIntentRequired:!1,onSuccessNavigateTo:"ConnectionStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),_("CaptchaScreen",!1))),t instanceof l.S&&L?.login?.isSigningInWithLedgerSolana&&(t.messageType="transaction"),t&&er&&ei&&!t.preparedMessage?t.buildMessage():t&&!er&&ei&&(h||(async()=>{b(!0),E(void 0);try{"wallet_connect_v2"===U?.connector?.connectorType&&"metamask"===U?.connector?.walletClientType&&await (0,p.k)(2500),await es()}catch(e){console.warn("Auto-prompted signature failed",e)}finally{b(!1)}})()))},[H,ei,Z]),(0,a.useEffect)(()=>{if(P&&c){let e=s.q-500;if(N?.legal.requireUsersAcceptTerms&&!P.hasAcceptedTerms){let t=setTimeout(()=>{_("AffirmativeConsentScreen")},e);return()=>clearTimeout(t)}if((0,y.s)(P,N.embeddedWallets)){let t=setTimeout(()=>{A({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),D({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"ConnectionStatusScreen"}}),R()},callAuthOnSuccessOnClose:!0}}),_("EmbeddedWalletOnAccountCreateScreen")},e);return()=>clearTimeout(t)}B();let t=setTimeout(()=>F({shouldCallAuthOnSuccess:!0,isSuccess:!0}),s.q);return()=>clearTimeout(t)}},[P,c]);let ec=e=>{if(e?.privyErrorCode!==v.b.ALLOWLIST_REJECTED){if(e?.privyErrorCode===v.b.USER_LIMIT_REACHED)return console.error(new v.k(e).toString()),void _("UserLimitReachedScreen");if(e?.privyErrorCode!==v.b.USER_DOES_NOT_EXIST)return e?.privyErrorCode===v.b.ACCOUNT_TRANSFER_REQUIRED&&e.data?.data?.nonce?(A({accountTransfer:{nonce:e.data?.data?.nonce,account:O()?.meta.address,displayName:e.data?.data?.account?.displayName,externalWalletMetadata:{walletClientType:O()?.meta.walletClientType,chainId:O()?.meta.chainId,connectorType:O()?.meta.connectorType},linkMethod:O()instanceof l.b?"siwe":"siws",embeddedWalletAddress:e.data?.data?.otherUser?.embeddedWalletAddress}}),void _("LinkConflictScreen")):void E(S(e));_("AccountNotFoundScreen")}else _("AllowlistRejectionScreen")};async function es(){try{await M(),g(!0)}catch(e){ec(e)}finally{b(!1)}}(0,a.useEffect)(()=>{U?.connectError&&ec(U?.connectError)},[U]),e=()=>{let e="wallet_connect_v2"===ed&&U?.connector instanceof l.W?U.connector.redirectUri:void 0;e&&G(e);let t="wallet_connect_v2"===ed&&U?.connector instanceof l.W?U.connector.fallbackUniversalRedirectUri:void 0;t&&J(t)},t=U?.connector instanceof l.W&&!Q?500:null,n=(0,a.useRef)(()=>{}),(0,a.useEffect)(()=>{n.current=e}),(0,a.useEffect)(()=>{if(null!==t){let e=setInterval(()=>n.current(),t||0);return()=>clearInterval(e)}},[t]);let ed=U?.connector?.connectorType||"injected",eu=U?.connector?.walletClientType||"unknown",ep=ea?.metadata?.shortName||ea?.name||U?.connector?.walletBranding.name||"Browser Extension",eg=ea?.image_url?.md||U?.connector?.walletBranding.icon||(e=>(0,o.jsx)(l.B,{...e})),eh="Browser Extension"===ep?ep.toLowerCase():ep;i=c?$("connectionStatus.successfullyConnected",{walletName:eh}):k?$("connectionStatus.errorTitle",{errorMessage:k.message}):el?"Switching networks":ei?h&&er?"Signing":"Sign to verify":`Waiting for ${eh}`;let ev=$("connectionStatus.checkOtherWindows");c?ev=X===(P?.linkedAccounts.length||0)?"Wallet was already linked.":"You're good to go!":H>=2&&k?ev="Unable to connect wallet":k?ev=k.detail:el?ev="Switch your wallet to the requested network.":ei&&er?ev="Sign the message in your wallet to verify it belongs to you.":"metamask"===eu&&r.Fr?ev="Click continue to open and connect MetaMask.":"metamask"===eu?ev="For the best experience, connect only one wallet at a time.":"wallet_connect"===ed?ev="Open your mobile wallet app to continue":"coinbase_wallet"===ed?(0,p.T)()||(ev=x(P)?"Continue with the Coinbase app. Not the right wallet? Reset your connection below.":"Confirm in the Coinbase app/popup to continue."):L?.login?.isSigningInWithLedgerSolana&&(ev="Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");let ef=q?.walletConnectors?.find(e=>"coinbase_wallet"===e.walletClientType),ey="coinbase_wallet"===eu&&(x(P)||k===u.C.ERROR_USER_EXISTS);return(0,o.jsx)(C,{walletLogo:eg,title:i,subtitle:ev,signSuccess:c,errorMessage:k,connectSuccess:ei,separateConnectAndSign:er,signing:h,walletConnectRedirectUri:Q,walletConnectFallbackUniversalUri:K,hasTabbedAway:et,showCoinbaseWalletResetCta:ey,numRetries:H,onBack:W&&I!==W?j:void 0,onSign:()=>{b(!0),es()},onRetry:()=>{V(H+1),E(void 0),ei?(b(!0),es()):U?.connectRetry()},onCoinbaseReset:()=>{ef&&ef?.disconnect()},onDifferentWallet:j})}},E=i.I4.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`},17984:(e,t,n)=>{n.d(t,{s:()=>a});var o=n(94968);let a=(e,t)=>(0,o.s)(e,t.ethereum.createOnLogin)||(0,o.k)(e,t.solana.createOnLogin)},22404:(e,t,n)=>{n.d(t,{S:()=>i});var o=n(73788),a=n(74124),r=n(94217);let i=({primaryCta:e,secondaryCta:t,helpText:n,watermark:i=!0,children:l,...c})=>{let s=e||t?(0,o.jsxs)(o.Fragment,{children:[e&&(()=>{let{label:t,...n}=e,r=n.variant||"primary";return(0,o.jsx)(a.a,{...n,variant:r,style:{width:"100%",...n.style},children:t})})(),t&&(()=>{let{label:e,...n}=t,r=n.variant||"secondary";return(0,o.jsx)(a.a,{...n,variant:r,style:{width:"100%",...n.style},children:e})})()]}):null;return(0,o.jsxs)(r.S,{id:c.id,className:c.className,children:[(0,o.jsx)(r.S.Header,{...c}),l?(0,o.jsx)(r.S.Body,{children:l}):null,n||s||i?(0,o.jsxs)(r.S.Footer,{children:[n?(0,o.jsx)(r.S.HelpText,{children:n}):null,s?(0,o.jsx)(r.S.Actions,{children:s}):null,i?(0,o.jsx)(r.S.Watermark,{}):null]}):null]})}},55249:(e,t,n)=>{n.d(t,{L:()=>i});var o=n(73788),a=n(78912);let r=a.I4.a`
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
      color: ${({$variant:e,$disabled:t})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:e})=>e?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:e,$disabled:t})=>t?"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`,i=({size:e="md",variant:t="navigation",disabled:n=!1,as:a,children:i,onClick:l,...c})=>(0,o.jsx)(r,{as:a,$size:e,$variant:t,$disabled:n,onClick:e=>{n?e.preventDefault():l?.(e)},...c,children:i})},66656:(e,t,n)=>{n.d(t,{N:()=>r});var o=n(73788),a=n(78912);let r=({size:e,centerIcon:t})=>(0,o.jsx)(i,{$size:e,children:(0,o.jsxs)(l,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(d,{}),t?(0,o.jsx)(c,{children:t}):null]})}),i=a.I4.div`
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
`},94217:(e,t,n)=>{n.d(t,{S:()=>S});var o=n(73788),a=n(65936),r=n(78912),i=n(41196),l=n(74124),c=n(66656);let s=r.I4.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=r.I4.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,u=r.I4.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,r.I4)(l.M)`
  margin: 0 -8px;
`,g=r.I4.div`
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
`,h=r.I4.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
`,v=r.I4.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,f=r.I4.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,y=r.I4.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,w=r.I4.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,m=r.I4.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"warning":return"var(--privy-color-warn, #FEF3C7)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=r.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,x=r.I4.div`
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
`,S=({children:e,...t})=>(0,o.jsx)(s,{children:(0,o.jsx)(d,{...t,children:e})}),C=r.I4.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,r.I4)(l.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,E=r.I4.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,T=({step:e})=>e?(0,o.jsx)(C,{children:(0,o.jsx)(E,{pct:Math.min(100,e.current/e.total*100)})}):null;S.Header=({title:e,subtitle:t,icon:n,iconVariant:a,iconLoadingStatus:r,showBack:i,onBack:l,showInfo:c,onInfo:s,showClose:d,onClose:g,step:h,...m})=>(0,o.jsxs)(u,{...m,children:[(0,o.jsx)(p,{backFn:i?l:void 0,infoFn:c?s:void 0,onClose:d?g:void 0,closeable:d}),(n||a||e||t)&&(0,o.jsxs)(v,{children:[n||a?(0,o.jsx)(S.Icon,{icon:n,variant:a,loadingStatus:r}):null,!(!e&&!t)&&(0,o.jsxs)(f,{children:[e&&(0,o.jsx)(y,{children:e}),t&&(0,o.jsx)(w,{children:t})]})]}),h&&(0,o.jsx)(T,{step:h})]}),(S.Body=a.forwardRef(({children:e,...t},n)=>(0,o.jsx)(g,{ref:n,...t,children:e}))).displayName="Screen.Body",S.Footer=({children:e,...t})=>(0,o.jsx)(h,{id:"privy-content-footer-container",...t,children:e}),S.Actions=({children:e,...t})=>(0,o.jsx)(R,{...t,children:e}),S.HelpText=({children:e,...t})=>(0,o.jsx)(_,{...t,children:e}),S.Watermark=()=>(0,o.jsx)(k,{}),S.Icon=({icon:e,variant:t="subtle",loadingStatus:n})=>"logo"===t&&e?(0,o.jsx)(b,"string"==typeof e?{children:(0,o.jsx)("img",{src:e,alt:""})}:a.isValidElement(e)?{children:e}:{children:a.createElement(e)}):"loading"===t?e?(0,o.jsx)(x,{children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,o.jsx)(i.a4,{success:n?.success,fail:n?.fail}),"string"==typeof e?(0,o.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):a.isValidElement(e)?a.cloneElement(e,{style:{width:"38px",height:"38px"}}):a.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,o.jsx)(m,{$variant:t,children:(0,o.jsx)(c.N,{size:"64px"})}):(0,o.jsx)(m,{$variant:t,children:e&&("string"==typeof e?(0,o.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):a.isValidElement(e)?e:a.createElement(e,{width:32,height:32,stroke:(()=>{switch(t){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let R=r.I4.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,_=r.I4.div`
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
`},99031:(e,t,n)=>{n.d(t,{u:()=>r});var o=n(75187);let a={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}"};function r(){let e=(0,o.u)();return{t:(t,n)=>{var o;let r;return o=e.intl.textLocalization,r=o?.[t]??a[t],n&&0!==Object.keys(n).length?r.replace(/\{(\w+)\}/g,(e,t)=>n[t]??e):r}}}}}]);