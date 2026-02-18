"use strict";exports.id=839,exports.ids=[839,1405],exports.modules={13287:(a,b,c)=>{c.d(b,{L:()=>g});var d=c(66150),e=c(72291);let f=e.I4.a`
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
`,g=({size:a="md",variant:b="navigation",disabled:c=!1,as:e,children:g,onClick:h,...i})=>(0,d.jsx)(f,{as:e,$size:a,$variant:b,$disabled:c,onClick:a=>{c?a.preventDefault():h?.(a)},...i,children:g})},30839:(a,b,c)=>{c.r(b),c.d(b,{ConnectOnlyStatusScreen:()=>p,ConnectOnlyStatusScreenView:()=>o,default:()=>p});var d=c(66150),e=c(7719),f=c(11765),g=c(17883),h=c(50579),i=c(69712),j=c(67331),k=c(2808),l=c(99062),m=c(59962),n=c(41405);c(43132),c(19078),c(30443),c(8752);let o=({walletLogo:a,success:b,errorMessage:c,title:e,subtitle:f,onRetry:h,onUseDifferentWallet:i,onBack:j,numRetries:k,maxRetries:m})=>(0,d.jsx)(l.S,{title:e,subtitle:f,icon:a,iconVariant:"loading",iconLoadingStatus:{success:b,fail:!!c},primaryCta:c===g.C.ERROR_USER_EXISTS?{label:"Use a different wallet",onClick:i}:!b&&c?.retryable&&k<m?{label:"Retry",onClick:h,disabled:!c?.retryable||k>=m}:!b&&c&&k>=m?{label:"Use a different wallet",onClick:i}:void 0,onBack:j,watermark:!0}),p={component:()=>{let a,{navigateBack:b,navigate:c,lastScreen:g,currentScreen:l,data:p,setModalData:q}=(0,k.a)(),{walletConnectionStatus:r,closePrivyModal:s}=(0,j.u)(),[t,u]=(0,e.useState)(void 0),[v,w]=(0,e.useState)(0),x=(0,i.Q)(r?.connector?.walletClientType||"unknown"),y="connected"===r?.status,z="switching_to_supported_chain"===r?.status;(0,e.useEffect)(()=>{if(y){let a;if(p?.externalConnectWallet?.onCompleteNavigateTo){let b=p.externalConnectWallet.onCompleteNavigateTo,d=r.connectedWallet?.address;a=setTimeout(()=>{if(p.funding&&r.connector){let a=r.connector.wallets.find(a=>a.address===d);q({...p,funding:{...p.funding,connectedWallet:a}})}c(b({address:d,walletClientType:r.connector?.walletClientType,walletChainType:r.connector?.chainType}))},h.q)}else a=setTimeout(s,h.q);return()=>clearTimeout(a)}},[y]),(0,e.useEffect)(()=>{var a;r?.connectError&&(a=r?.connectError,u((0,n.getErrorDetails)(a)))},[r]);let A=r?.connector?.connectorType||"injected",B=r?.connector?.walletClientType||"unknown",C=x?.metadata?.shortName||x?.name||r?.connector?.walletBranding.name||"Browser Extension",D=x?.image_url?.md||r?.connector?.walletBranding.icon||(a=>(0,d.jsx)(m.B,{...a})),E="Browser Extension"===C?C.toLowerCase():C;a=y?`Successfully connected with ${E}`:t?t.message:z?"Switching networks":`Waiting for ${E}`;let F="Don’t see your wallet? Check your other browser windows.";return y?F="You’re good to go!":v>=2&&t?F="Unable to connect wallet":t?F=t.detail:z?F="Switch your wallet to the requested network.":"metamask"===B&&f.Fr?F="Click to continue to open and connect MetaMask.":"metamask"===B?F="For the best experience, connect only one wallet at a time.":"wallet_connect_v2"===A?F="Open your mobile wallet app to continue":"coinbase_wallet"===A&&(F="Confirm in the Coinbase app/popup to continue."),(0,d.jsx)(o,{walletName:C,walletLogo:D,success:y,errorMessage:t,title:a,subtitle:F,onRetry:()=>{w(v+1),u(void 0),r?.connectRetry()},onUseDifferentWallet:b,onBack:l===g?void 0:b,numRetries:v,maxRetries:2})}}},36171:(a,b,c)=>{c.d(b,{u:()=>f});var d=c(50579);let e={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}"};function f(){let a=(0,d.u)();return{t:(b,c)=>{var d;let f;return d=a.intl.textLocalization,f=d?.[b]??e[b],c&&0!==Object.keys(c).length?f.replace(/\{(\w+)\}/g,(a,b)=>c[b]??a):f}}}},41405:(a,b,c)=>{c.r(b),c.d(b,{ConnectionStatusScreen:()=>y,ConnectionStatusView:()=>x,default:()=>y,getErrorDetails:()=>w});var d=c(66150),e=c(7719),f=c(11765),g=c(72291),h=c(59962),i=c(13287),j=c(50579),k=c(36171),l=c(17883),m=c(69712),n=c(98496),o=c(78427),p=c(67331),q=c(2808),r=c(97380),s=c(90677),t=c(74130),u=c(99062);c(43132),c(30443),c(8752),c(19078);let v=a=>{let b=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(a=>(0,n.q)(a,{strict:!0})).map(a=>(0,o.b)(a));return!!b?.length&&!!a?.linkedAccounts.filter(a=>"wallet"==a.type&&b.includes(a.address)).length},w=a=>a?.privyErrorCode===p.b.LINKED_TO_ANOTHER_USER?l.C.ERROR_USER_EXISTS:a instanceof l.P&&!a.details.default?a.details:a instanceof l.d?l.C.ERROR_TIMED_OUT:a?.privyErrorCode===p.b.CANNOT_LINK_MORE_OF_TYPE?l.C.ERROR_USER_LIMIT_REACHED:l.C.ERROR_WALLET_CONNECTION,x=({walletLogo:a,title:b,subtitle:c,signSuccess:e,errorMessage:f,connectSuccess:g,separateConnectAndSign:h,signing:j,walletConnectRedirectUri:m,walletConnectFallbackUniversalUri:n,hasTabbedAway:o,showCoinbaseWalletResetCta:p,numRetries:q,onBack:r,onSign:s,onRetry:t,onCoinbaseReset:v,onDifferentWallet:w})=>{let{t:x}=(0,k.u)(),y=p?{label:"Use a different wallet",onClick:v,disabled:e}:f===l.C.ERROR_USER_EXISTS&&r?{label:"Use a different wallet",onClick:w}:g&&!e&&h?{label:j?"Signing":"Sign with your wallet",onClick:s,disabled:j}:!e&&f?.retryable&&q<2?{label:"Retry",onClick:t,disabled:!1}:e||f?void 0:{label:x("connectionStatus.connecting"),onClick:()=>{},disabled:!0};return(0,d.jsx)(u.S,{title:b,subtitle:c,icon:a,iconVariant:"loading",iconLoadingStatus:{success:e,fail:!!f},primaryCta:y,onBack:r,watermark:!0,children:!g&&m&&!o&&(0,d.jsxs)(z,{children:[x("connectionStatus.stillHere")," ",(0,d.jsx)(i.L,{href:m,target:"_blank",variant:"underlined",size:"sm",children:x("connectionStatus.tryConnectingAgain")}),n&&(0,d.jsxs)(d.Fragment,{children:[" ",x("connectionStatus.or")," ",(0,d.jsx)(i.L,{href:n,target:"_blank",variant:"underlined",size:"sm",children:x("connectionStatus.useDifferentLink")})]})]})})},y={component:()=>{var a,b;let c,g,[i,n]=(0,e.useState)(!1),[o,u]=(0,e.useState)(!1),[y,z]=(0,e.useState)(void 0),{authenticated:A,logout:B}=(0,q.u)(),{navigate:C,navigateBack:D,lastScreen:E,currentScreen:F,setModalData:G,data:H}=(0,q.a)(),I=(0,j.u)(),{t:J}=(0,k.u)(),{getAuthFlow:K,walletConnectionStatus:L,closePrivyModal:M,initLoginWithWallet:N,loginWithWallet:O,updateWallets:P,createAnalyticsEvent:Q}=(0,p.u)(),{walletConnectors:R}=(0,q.u)(),[S,T]=(0,e.useState)(0),{user:U}=(0,q.u)(),V=(0,s.u)(),[W]=(0,e.useState)(U?.linkedAccounts.length||0),[X,Y]=(0,e.useState)(""),[Z,$]=(0,e.useState)(""),[_,aa]=(0,e.useState)(!1),{hasTabbedAway:ab}=function(){let[a,b]=(0,e.useState)(!1),c=(0,e.useCallback)(()=>{document.hidden&&b(!0)},[]);return(0,e.useEffect)(()=>(document.addEventListener("visibilitychange",c),()=>document.removeEventListener("visibilitychange",c)),[c]),{hasTabbedAway:a,reset:()=>b(!1)}}(),{enabled:ac,token:ad}=(0,h.a)(),ae=(0,m.Q)(L?.connector?.walletClientType||"unknown"),af=f.Fr&&"wallet_connect_v2"===L?.connector?.connectorType||f.Fr&&"coinbase_wallet"===L?.connector?.connectorType||f.Fr&&"base_account"===L?.connector?.connectorType||f.Fr&&"injected"===L?.connector?.connectorType&&"phantom"===L?.connector?.walletClientType||f.Fr&&"solana_adapter"===L?.connector?.connectorType&&"mobile_wallet_adapter"===L.connector.walletClientType,ag="connected"===L?.status,ah="switching_to_supported_chain"===L?.status;(0,e.useEffect)(()=>{let a=K(),b=a instanceof h.b||a instanceof h.S?a:void 0;ag&&"solana"===L.connector?.chainType&&"phantom"===L.connector?.walletClientType&&V(t.e)&&void 0===H?.login?.isSigningInWithLedgerSolana?C("ConnectLedgerScreen",!1):(ag&&!b&&(!ac||ad||A?N(L.connectedWallet,ad,H?.login?.disableSignup,H?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{aa(!0)}):(G({captchaModalData:{callback:a=>N(L.connectedWallet,a,H?.login?.disableSignup,H?.login?.isSigningInWithLedgerSolana?"transaction":"plain").then(()=>{aa(!0)}),userIntentRequired:!1,onSuccessNavigateTo:"ConnectionStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),C("CaptchaScreen",!1))),b instanceof h.S&&H?.login?.isSigningInWithLedgerSolana&&(b.messageType="transaction"),b&&af&&ag&&!b.preparedMessage?b.buildMessage():b&&!af&&ag&&(o||(async()=>{u(!0),z(void 0);try{"wallet_connect_v2"===L?.connector?.connectorType&&"metamask"===L?.connector?.walletClientType&&await (0,m.k)(2500),await aj()}catch(a){console.warn("Auto-prompted signature failed",a)}finally{u(!1)}})()))},[S,ag,_]),(0,e.useEffect)(()=>{if(U&&i){let a=j.q-500;if(I?.legal.requireUsersAcceptTerms&&!U.hasAcceptedTerms){let b=setTimeout(()=>{C("AffirmativeConsentScreen")},a);return()=>clearTimeout(b)}if((0,r.s)(U,I.embeddedWallets)){let b=setTimeout(()=>{G({createWallet:{onSuccess:()=>{},onFailure:a=>{console.error(a),Q({eventName:"embedded_wallet_creation_failure_logout",payload:{error:a,screen:"ConnectionStatusScreen"}}),B()},callAuthOnSuccessOnClose:!0}}),C("EmbeddedWalletOnAccountCreateScreen")},a);return()=>clearTimeout(b)}P();let b=setTimeout(()=>M({shouldCallAuthOnSuccess:!0,isSuccess:!0}),j.q);return()=>clearTimeout(b)}},[U,i]);let ai=a=>{if(a?.privyErrorCode!==p.b.ALLOWLIST_REJECTED){if(a?.privyErrorCode===p.b.USER_LIMIT_REACHED)return console.error(new p.k(a).toString()),void C("UserLimitReachedScreen");if(a?.privyErrorCode!==p.b.USER_DOES_NOT_EXIST)return a?.privyErrorCode===p.b.ACCOUNT_TRANSFER_REQUIRED&&a.data?.data?.nonce?(G({accountTransfer:{nonce:a.data?.data?.nonce,account:K()?.meta.address,displayName:a.data?.data?.account?.displayName,externalWalletMetadata:{walletClientType:K()?.meta.walletClientType,chainId:K()?.meta.chainId,connectorType:K()?.meta.connectorType},linkMethod:K()instanceof h.b?"siwe":"siws",embeddedWalletAddress:a.data?.data?.otherUser?.embeddedWalletAddress}}),void C("LinkConflictScreen")):void z(w(a));C("AccountNotFoundScreen")}else C("AllowlistRejectionScreen")};async function aj(){try{await O(),n(!0)}catch(a){ai(a)}finally{u(!1)}}(0,e.useEffect)(()=>{L?.connectError&&ai(L?.connectError)},[L]),a=()=>{let a="wallet_connect_v2"===ak&&L?.connector instanceof h.W?L.connector.redirectUri:void 0;a&&Y(a);let b="wallet_connect_v2"===ak&&L?.connector instanceof h.W?L.connector.fallbackUniversalRedirectUri:void 0;b&&$(b)},b=L?.connector instanceof h.W&&!X?500:null,c=(0,e.useRef)(()=>{}),(0,e.useEffect)(()=>{c.current=a}),(0,e.useEffect)(()=>{if(null!==b){let a=setInterval(()=>c.current(),b||0);return()=>clearInterval(a)}},[b]);let ak=L?.connector?.connectorType||"injected",al=L?.connector?.walletClientType||"unknown",am=ae?.metadata?.shortName||ae?.name||L?.connector?.walletBranding.name||"Browser Extension",an=ae?.image_url?.md||L?.connector?.walletBranding.icon||(a=>(0,d.jsx)(h.B,{...a})),ao="Browser Extension"===am?am.toLowerCase():am;g=i?J("connectionStatus.successfullyConnected",{walletName:ao}):y?J("connectionStatus.errorTitle",{errorMessage:y.message}):ah?"Switching networks":ag?o&&af?"Signing":"Sign to verify":`Waiting for ${ao}`;let ap=J("connectionStatus.checkOtherWindows");i?ap=W===(U?.linkedAccounts.length||0)?"Wallet was already linked.":"You're good to go!":S>=2&&y?ap="Unable to connect wallet":y?ap=y.detail:ah?ap="Switch your wallet to the requested network.":ag&&af?ap="Sign the message in your wallet to verify it belongs to you.":"metamask"===al&&f.Fr?ap="Click continue to open and connect MetaMask.":"metamask"===al?ap="For the best experience, connect only one wallet at a time.":"wallet_connect"===ak?ap="Open your mobile wallet app to continue":"coinbase_wallet"===ak?(0,m.T)()||(ap=v(U)?"Continue with the Coinbase app. Not the right wallet? Reset your connection below.":"Confirm in the Coinbase app/popup to continue."):H?.login?.isSigningInWithLedgerSolana&&(ap="Ledger requires a transaction to verify your identity. You'll sign a transaction that performs no onchain action.");let aq=R?.walletConnectors?.find(a=>"coinbase_wallet"===a.walletClientType),ar="coinbase_wallet"===al&&(v(U)||y===l.C.ERROR_USER_EXISTS);return(0,d.jsx)(x,{walletLogo:an,title:g,subtitle:ap,signSuccess:i,errorMessage:y,connectSuccess:ag,separateConnectAndSign:af,signing:o,walletConnectRedirectUri:X,walletConnectFallbackUniversalUri:Z,hasTabbedAway:ab,showCoinbaseWalletResetCta:ar,numRetries:S,onBack:E&&F!==E?D:void 0,onSign:()=>{u(!0),aj()},onRetry:()=>{T(S+1),z(void 0),ag?(u(!0),aj()):L?.connectRetry()},onCoinbaseReset:()=>{aq&&aq?.disconnect()},onDifferentWallet:D})}},z=g.I4.p`
  text-align: center;
  color: var(--privy-color-foreground-2);
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`},45172:(a,b,c)=>{c.d(b,{S:()=>w});var d=c(66150),e=c(7719),f=c(72291),g=c(69712),h=c(55164),i=c(59656);let j=f.I4.div`
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
`},97380:(a,b,c)=>{c.d(b,{s:()=>e});var d=c(59962);let e=(a,b)=>(0,d.s)(a,b.ethereum.createOnLogin)||(0,d.k)(a,b.solana.createOnLogin)},99062:(a,b,c)=>{c.d(b,{S:()=>g});var d=c(66150),e=c(55164),f=c(45172);let g=({primaryCta:a,secondaryCta:b,helpText:c,watermark:g=!0,children:h,...i})=>{let j=a||b?(0,d.jsxs)(d.Fragment,{children:[a&&(()=>{let{label:b,...c}=a,f=c.variant||"primary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:b})})(),b&&(()=>{let{label:a,...c}=b,f=c.variant||"secondary";return(0,d.jsx)(e.a,{...c,variant:f,style:{width:"100%",...c.style},children:a})})()]}):null;return(0,d.jsxs)(f.S,{id:i.id,className:i.className,children:[(0,d.jsx)(f.S.Header,{...i}),h?(0,d.jsx)(f.S.Body,{children:h}):null,c||j||g?(0,d.jsxs)(f.S.Footer,{children:[c?(0,d.jsx)(f.S.HelpText,{children:c}):null,j?(0,d.jsx)(f.S.Actions,{children:j}):null,g?(0,d.jsx)(f.S.Watermark,{}):null]}):null]})}}};