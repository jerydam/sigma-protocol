"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7864],{87864:(e,t,i)=>{i.r(t),i.d(t,{W3mAllWalletsView:()=>tg,W3mConnectingWcBasicView:()=>eM,W3mDownloadsView:()=>ty});var r=i(52803),o=i(64827),n=i(7948),a=i(42599),s=i(38077),l=i(62952),c=i(83757);i(25226);var d=i(41094),h=i(99727),p=i(4450),u=i(54867),w=i(53974),g=i(94126);i(63285);var m=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let b=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=p.a.state.connectors,this.count=s.N.state.count,this.filteredCount=s.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=s.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(p.a.subscribeKey("connectors",e=>this.connectors=e),s.N.subscribeKey("count",e=>this.count=e),s.N.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),s.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=a.H.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!n.w.isMobile())return null;let i=s.N.state.featured.length,o=this.count+i,l=o<10?o:10*Math.floor(o/10),c=this.filteredCount>0?this.filteredCount:l,p=`${c}`;this.filteredCount>0?p=`${this.filteredCount}`:c<o&&(p=`${c}+`);let w=u.x.hasAnyConnection(h.o.CONNECTOR_ID.WALLET_CONNECT);return(0,r.qy)`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${p}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,d.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${w}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){w.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),g.I.push("AllWallets",{redirectView:g.I.state.data?.redirectView})}};m([(0,o.MZ)()],b.prototype,"tabIdx",void 0),m([(0,o.wk)()],b.prototype,"connectors",void 0),m([(0,o.wk)()],b.prototype,"count",void 0),m([(0,o.wk)()],b.prototype,"filteredCount",void 0),m([(0,o.wk)()],b.prototype,"isFetchingRecommendedWallets",void 0),b=m([(0,c.EM)("w3m-all-wallets-widget")],b);var f=i(67057),y=i(11790),v=i(7367),$=i(38538);let x=(0,c.AH)`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var k=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.connectors=p.a.state.connectors,this.recommended=s.N.state.recommended,this.featured=s.N.state.featured,this.explorerWallets=s.N.state.explorerWallets,this.connections=u.x.state.connections,this.connectorImages=f.j.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(p.a.subscribeKey("connectors",e=>this.connectors=e),u.x.subscribeKey("connections",e=>this.connections=e),f.j.subscribeKey("connectorImages",e=>this.connectorImages=e),s.N.subscribeKey("recommended",e=>this.recommended=e),s.N.subscribeKey("featured",e=>this.featured=e),s.N.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:s.N.state.explorerWallets}),s.N.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),n.w.isTelegram()&&n.w.isIos()&&(this.loadingTelegram=!u.x.state.wcUri,this.unsubscribe.push(u.x.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,r.qy)`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,t){return e.map(e=>{if("MULTI_CHAIN"===e.type&&e.connectors){let i=e.connectors.map(e=>e.id),r=e.connectors.map(e=>e.name),o=e.connectors.map(e=>e.info?.rdns);return e.explorerWallet=t?.find(e=>i.includes(e.id)||r.includes(e.name)||e.rdns&&(o.includes(e.rdns)||i.includes(e.rdns)))??e.explorerWallet,e}let i=t?.find(t=>t.id===e.id||t.rdns===e.info?.rdns||t.name===e.name);return e.explorerWallet=i??e.explorerWallet,e})}processConnectorsByType(e,t=!0){let i=$.g.sortConnectorsByExplorerWallet([...e]);return t?i.filter($.g.showConnector):i}connectorListTemplate(){let e=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),t=$.g.getConnectorsByType(e,this.recommended,this.featured),i=this.processConnectorsByType(t.announced.filter(e=>"walletConnect"!==e.id)),r=this.processConnectorsByType(t.injected),o=this.processConnectorsByType(t.multiChain.filter(e=>"WalletConnect"!==e.name),!1),a=t.custom,s=t.recent,l=this.processConnectorsByType(t.external.filter(e=>e.id!==h.o.CONNECTOR_ID.COINBASE_SDK)),c=t.recommended,d=t.featured,p=$.g.getConnectorTypeOrder({custom:a,recent:s,announced:i,injected:r,multiChain:o,recommended:c,featured:d,external:l}),u=this.connectors.find(e=>"walletConnect"===e.id),w=n.w.isMobile(),g=[];for(let e of p)switch(e){case"walletConnect":!w&&u&&g.push({kind:"connector",subtype:"walletConnect",connector:u});break;case"recent":$.g.getFilteredRecentWallets().forEach(e=>g.push({kind:"wallet",subtype:"recent",wallet:e}));break;case"injected":o.forEach(e=>g.push({kind:"connector",subtype:"multiChain",connector:e})),i.forEach(e=>g.push({kind:"connector",subtype:"announced",connector:e})),r.forEach(e=>g.push({kind:"connector",subtype:"injected",connector:e}));break;case"featured":d.forEach(e=>g.push({kind:"wallet",subtype:"featured",wallet:e}));break;case"custom":$.g.getFilteredCustomWallets(a??[]).forEach(e=>g.push({kind:"wallet",subtype:"custom",wallet:e}));break;case"external":l.forEach(e=>g.push({kind:"connector",subtype:"external",connector:e}));break;case"recommended":$.g.getCappedRecommendedWallets(c).forEach(e=>g.push({kind:"wallet",subtype:"recommended",wallet:e}));break;default:console.warn(`Unknown connector type: ${e}`)}return g.map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}renderConnector(e,t){let i,o,n=e.connector,a=y.$.getConnectorImage(n)||this.connectorImages[n?.imageId??""],s=(this.connections.get(n.chain)??[]).some(e=>v.y.isLowerCaseMatch(e.connectorId,n.id));"multiChain"===e.subtype?(i="multichain",o="info"):"walletConnect"===e.subtype?(i="qr code",o="accent"):"injected"===e.subtype||"announced"===e.subtype?(i=s?"connected":"installed",o=s?"info":"success"):(i=void 0,o=void 0);let l=u.x.hasAnyConnection(h.o.CONNECTOR_ID.WALLET_CONNECT),c=("walletConnect"===e.subtype||"external"===e.subtype)&&l;return(0,r.qy)`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.J)(a)}
        .installed=${!0}
        name=${n.name??"Unknown"}
        .tagVariant=${o}
        tagLabel=${(0,d.J)(i)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,d.J)(this.tabIdx)}
        ?disabled=${c}
        rdnsId=${(0,d.J)(n.explorerWallet?.rdns||void 0)}
        walletRank=${(0,d.J)(n.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=g.I.state.data?.redirectView;if("walletConnect"===e.subtype){p.a.setActiveConnector(e.connector),n.w.isMobile()?g.I.push("AllWallets"):g.I.push("ConnectingWalletConnect",{redirectView:t});return}if("multiChain"===e.subtype){p.a.setActiveConnector(e.connector),g.I.push("ConnectingMultiChain",{redirectView:t});return}if("injected"===e.subtype){p.a.setActiveConnector(e.connector),g.I.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}if("announced"===e.subtype)return"walletConnect"===e.connector.id?void(n.w.isMobile()?g.I.push("AllWallets"):g.I.push("ConnectingWalletConnect",{redirectView:t})):(g.I.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}),void 0);g.I.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){let i=e.wallet,o=y.$.getWalletImage(i),n=u.x.hasAnyConnection(h.o.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,s="recent"===e.subtype?"recent":void 0,l="recent"===e.subtype?"info":void 0;return(0,r.qy)`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.J)(o)}
        name=${i.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${i.id}`}
        tabIdx=${(0,d.J)(this.tabIdx)}
        ?loading=${a}
        ?disabled=${n}
        rdnsId=${(0,d.J)(i.rdns||void 0)}
        walletRank=${(0,d.J)(i.order)}
        tagLabel=${(0,d.J)(s)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=g.I.state.data?.redirectView;if("featured"===e.subtype)return void p.a.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;p.a.selectWalletConnector(e.wallet);return}if("custom"===e.subtype){if(this.loadingTelegram)return;g.I.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let i=p.a.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});i?g.I.push("ConnectingExternal",{connector:i,redirectView:t}):g.I.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};C.styles=x,k([(0,o.MZ)({type:Number})],C.prototype,"tabIdx",void 0),k([(0,o.wk)()],C.prototype,"connectors",void 0),k([(0,o.wk)()],C.prototype,"recommended",void 0),k([(0,o.wk)()],C.prototype,"featured",void 0),k([(0,o.wk)()],C.prototype,"explorerWallets",void 0),k([(0,o.wk)()],C.prototype,"connections",void 0),k([(0,o.wk)()],C.prototype,"connectorImages",void 0),k([(0,o.wk)()],C.prototype,"loadingTelegram",void 0),C=k([(0,c.EM)("w3m-connector-list")],C);var E=i(30744),R=i(85044),W=i(17495),I=i(94306),S=i(57621),T=i(19004),O=i(85055),M=i(39684);i(94292),i(12844);var P=i(94447);let j=(0,P.AH)`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var A=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let q={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},L={lg:"md",md:"sm",sm:"sm"},z=class extends r.WF{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return(0,r.qy)`
      <button data-active=${this.active}>
        ${this.icon?(0,r.qy)`<wui-icon size=${L[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${q[this.size]}> ${this.label} </wui-text>
      </button>
    `}};z.styles=[O.W5,O.fD,j],A([(0,o.MZ)()],z.prototype,"icon",void 0),A([(0,o.MZ)()],z.prototype,"size",void 0),A([(0,o.MZ)()],z.prototype,"label",void 0),A([(0,o.MZ)({type:Boolean})],z.prototype,"active",void 0),z=A([(0,M.E)("wui-tab-item")],z);let _=(0,P.AH)`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var N=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Z=class extends r.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let i=t===this.activeTab;return(0,r.qy)`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Z.styles=[O.W5,O.fD,_],N([(0,o.MZ)({type:Array})],Z.prototype,"tabs",void 0),N([(0,o.MZ)()],Z.prototype,"onTabChange",void 0),N([(0,o.MZ)()],Z.prototype,"size",void 0),N([(0,o.wk)()],Z.prototype,"activeTab",void 0),Z=N([(0,M.E)("wui-tabs")],Z);var D=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let B=class extends r.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,r.qy)`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};D([(0,o.MZ)({type:Array})],B.prototype,"platforms",void 0),D([(0,o.MZ)()],B.prototype,"onSelectPlatfrom",void 0),B=D([(0,c.EM)("w3m-connecting-header")],B);var F=i(71176);i(6865);let H=(0,P.AH)`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var U=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let J={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},V={lg:"md",md:"md",sm:"sm"},K=class extends r.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let e=this.textVariant??J[this.size];return(0,r.qy)`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let e=V[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return(0,r.qy)`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};K.styles=[O.W5,O.fD,H],U([(0,o.MZ)()],K.prototype,"size",void 0),U([(0,o.MZ)({type:Boolean})],K.prototype,"disabled",void 0),U([(0,o.MZ)({type:Boolean})],K.prototype,"fullWidth",void 0),U([(0,o.MZ)({type:Boolean})],K.prototype,"loading",void 0),U([(0,o.MZ)()],K.prototype,"variant",void 0),U([(0,o.MZ)()],K.prototype,"textVariant",void 0),K=U([(0,M.E)("wui-button")],K),i(13604),i(70492),i(42613);let G=(0,P.AH)`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Q=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let X=class extends r.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return(0,r.qy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};X.styles=[O.W5,G],Q([(0,o.MZ)({type:Number})],X.prototype,"radius",void 0),X=Q([(0,M.E)("wui-loading-thumbnail")],X),i(33594),i(83788),i(15324);let Y=(0,P.AH)`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ee=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let et=class extends r.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,r.qy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};et.styles=[O.W5,O.fD,Y],ee([(0,o.MZ)({type:Boolean})],et.prototype,"disabled",void 0),ee([(0,o.MZ)()],et.prototype,"label",void 0),ee([(0,o.MZ)()],et.prototype,"buttonLabel",void 0),et=ee([(0,M.E)("wui-cta-button")],et);let ei=(0,c.AH)`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e["5"]} ${({spacing:e})=>e["5"]};
  }
`;var er=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eo=class extends r.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:i,chrome_store:o,homepage:a}=this.wallet,s=n.w.isMobile(),l=n.w.isIos(),d=n.w.isAndroid(),h=[t,i,a,o].filter(Boolean).length>1,p=c.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!s?(0,r.qy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>g.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&a?(0,r.qy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?(0,r.qy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&d?(0,r.qy)`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.w.openHref(this.wallet.homepage,"_blank")}};eo.styles=[ei],er([(0,o.MZ)({type:Object})],eo.prototype,"wallet",void 0),eo=er([(0,c.EM)("w3m-mobile-download-links")],eo);let en=(0,c.AH)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var ea=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class es extends r.WF{constructor(){super(),this.wallet=g.I.state.data?.wallet,this.connector=g.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=y.$.getConnectorImage(this.connector)??y.$.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=u.x.state.wcUri,this.error=u.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(u.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),u.x.subscribeKey("wcError",e=>this.error=e)),(n.w.isTelegram()||n.w.isSafari())&&n.w.isIos()&&u.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),u.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),(0,r.qy)`
      <wui-flex
        data-error=${(0,d.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,r.qy)`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?(0,r.qy)`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){u.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=F.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,r.qy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.w.copyToClopboard(this.uri),W.P.showSuccess("Link copied"))}catch{W.P.showError("Failed to copy")}}}es.styles=en,ea([(0,o.wk)()],es.prototype,"isRetrying",void 0),ea([(0,o.wk)()],es.prototype,"uri",void 0),ea([(0,o.wk)()],es.prototype,"error",void 0),ea([(0,o.wk)()],es.prototype,"ready",void 0),ea([(0,o.wk)()],es.prototype,"showRetry",void 0),ea([(0,o.wk)()],es.prototype,"label",void 0),ea([(0,o.wk)()],es.prototype,"secondaryBtnLabel",void 0),ea([(0,o.wk)()],es.prototype,"secondaryLabel",void 0),ea([(0,o.wk)()],es.prototype,"isLoading",void 0),ea([(0,o.MZ)({type:Boolean})],es.prototype,"isMobile",void 0),ea([(0,o.MZ)()],es.prototype,"onRetry",void 0);let el=class extends es{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),w.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:g.I.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=p.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await u.x.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");I.W.close(),w.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:g.I.state.view,walletRank:this.wallet?.order}})}catch(e){e instanceof S.A&&e.originalName===E.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?w.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):w.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};el=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.EM)("w3m-connecting-wc-browser")],el);let ec=class extends es{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),w.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:g.I.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.w.formatNativeUrl(e,this.uri);u.x.setWcLinking({name:t,href:r}),u.x.setRecentWallet(this.wallet),n.w.openHref(i,"_blank")}catch{this.error=!0}}};ec=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.EM)("w3m-connecting-wc-desktop")],ec);var ed=i(78940),eh=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ep=class extends es{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:r,redirectUniversalLink:o,href:a}=n.w.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=r,this.redirectUniversalLink=o,this.target=n.w.isIframe()?"_top":"_self",u.x.setWcLinking({name:i,href:a}),u.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?n.w.openHref(this.redirectUniversalLink,this.target):n.w.openHref(this.redirectDeeplink,this.target)}catch(e){w.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ed.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(u.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),w.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:g.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){u.x.setWcError(!1),this.onConnect?.()}};eh([(0,o.wk)()],ep.prototype,"redirectDeeplink",void 0),eh([(0,o.wk)()],ep.prototype,"redirectUniversalLink",void 0),eh([(0,o.wk)()],ep.prototype,"target",void 0),eh([(0,o.wk)()],ep.prototype,"preferUniversalLinks",void 0),eh([(0,o.wk)()],ep.prototype,"isLoading",void 0),ep=eh([(0,c.EM)("w3m-connecting-wc-mobile")],ep),i(63078);var eu=i(7635);function ew(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let eg={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:n="var(--apkt-colors-black)"}){let a,s,l=[],c=(s=Math.sqrt((a=Array.prototype.slice.call(eu.create(e,{errorCorrectionLevel:"Q"}).modules.data,0)).length),a.reduce((e,t,i)=>(i%s==0?e.push([t]):e[e.length-1].push(t))&&e,[])),d=(t-2*o)/c.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:e,y:t})=>{let i=(c.length-7)*d*e+o,a=(c.length-7)*d*t+o;for(let e=0;e<h.length;e+=1){let t=d*(7-2*e);l.push((0,r.JW)`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*.45:.45*t}
              ry= ${0===e?(t-10)*.45:.45*t}
              stroke=${n}
              stroke-width=${10*(0===e)}
              height=${0===e?t-10:t}
              x= ${0===e?a+d*e+5:a+d*e}
              y= ${0===e?i+d*e+5:i+d*e}
            />
          `)}});let p=Math.floor((i+25)/d),u=c.length/2-p/2,w=c.length/2+p/2-1,g=[];c.forEach((e,t)=>{e.forEach((e,i)=>{!c[t][i]||t<7&&i<7||t>c.length-8&&i<7||t<7&&i>c.length-8||t>u&&t<w&&i>u&&i<w||g.push([t*d+d/2+o,i*d+d/2+o])})});let m={};return g.forEach(([e,t])=>{m[e]?m[e]?.push(t):m[e]=[t]}),Object.entries(m).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!ew(e,t,d)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{l.push((0,r.JW)`<circle cx=${e} cy=${t} fill=${n} r=${d/2.5} />`)})}),Object.entries(m).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>ew(e,t,d)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>ew(e,t,d)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{l.push((0,r.JW)`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${n}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)})}),l}},em=(0,P.AH)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var eb=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ef=class extends r.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,(0,r.qy)`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return(0,r.JW)`
      <svg height=${this.size} width=${this.size}>
        ${eg.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,r.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,r.qy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,r.qy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ef.styles=[O.W5,em],eb([(0,o.MZ)()],ef.prototype,"uri",void 0),eb([(0,o.MZ)({type:Number})],ef.prototype,"size",void 0),eb([(0,o.MZ)()],ef.prototype,"theme",void 0),eb([(0,o.MZ)()],ef.prototype,"imageSrc",void 0),eb([(0,o.MZ)()],ef.prototype,"alt",void 0),eb([(0,o.MZ)({type:Boolean})],ef.prototype,"arenaClear",void 0),eb([(0,o.MZ)({type:Boolean})],ef.prototype,"farcaster",void 0),ef=eb([(0,M.E)("wui-qr-code")],ef);let ey=(0,P.AH)`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var ev=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e$=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",(0,r.qy)`<slot></slot>`}};e$.styles=[ey],ev([(0,o.MZ)()],e$.prototype,"width",void 0),ev([(0,o.MZ)()],e$.prototype,"height",void 0),ev([(0,o.MZ)()],e$.prototype,"variant",void 0),ev([(0,o.MZ)({type:Boolean})],e$.prototype,"rounded",void 0),e$=ev([(0,M.E)("wui-shimmer")],e$),i(3320);let ex=(0,c.AH)`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var ek=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eC=class extends es{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||w.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:g.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,r.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;u.x.setWcLinking(void 0),u.x.setRecentWallet(this.wallet);let i=this.uri;if(this.wallet?.mobile_link){let{redirect:e}=n.w.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);i=e}return(0,r.qy)` <wui-qr-code
      size=${e}
      theme=${F.W.state.themeMode}
      uri=${i}
      imageSrc=${(0,d.J)(y.$.getWalletImage(this.wallet))}
      color=${(0,d.J)(F.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,d.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,r.qy)`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};eC.styles=ex,ek([(0,o.MZ)({type:Boolean})],eC.prototype,"basic",void 0),eC=ek([(0,c.EM)("w3m-connecting-wc-qrcode")],eC);let eE=class extends r.WF{constructor(){if(super(),this.wallet=g.I.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");w.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:g.I.state.view}})}render(){return(0,r.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.J)(y.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};eE=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.EM)("w3m-connecting-wc-unsupported")],eE);var eR=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eW=class extends es{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ed.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(u.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),w.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:g.I.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.w.formatUniversalUrl(e,this.uri);u.x.setWcLinking({name:t,href:r}),u.x.setRecentWallet(this.wallet),n.w.openHref(i,"_blank")}catch{this.error=!0}}};eR([(0,o.wk)()],eW.prototype,"isLoading",void 0),eW=eR([(0,c.EM)("w3m-connecting-wc-web")],eW);let eI=(0,c.AH)`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var eS=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eT=class extends r.WF{constructor(){super(),this.wallet=g.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!a.H.state.siwx,this.remoteFeatures=a.H.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.H.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),(0,r.qy)`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?(0,r.qy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!a.H.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=u.x.state,{redirectView:r}=g.I.state.data??{};if(e||a.H.state.enableEmbedded||n.w.isPairingExpired(t)||"connecting"===i){let e=u.x.getConnections(R.W.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await u.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(g.I.replace("ProfileWallets"),W.P.showSuccess("New Wallet Added")):r?g.I.replace(r):I.W.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!a.H.state.enableNetworkSwitch&&R.W.state.activeChain){R.W.setActiveCaipNetwork(T.R.getUnsupportedNetwork(`${R.W.state.activeChain}:${R.W.state.activeCaipNetwork?.id}`)),R.W.showUnsupportedChainUI();return}e instanceof S.A&&e.originalName===E.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?w.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):w.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),u.x.setWcError(!0),W.P.showError(e.message??"Connection error"),u.x.resetWcConnection(),g.I.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:r,rdns:o}=this.wallet,s=r?.map(({injected_id:e})=>e).filter(Boolean),l=[...o?[o]:s??[]],c=!a.H.state.isUniversalProvider&&l.length,d=u.x.checkInstalled(l),h=c&&d,p=t&&!n.w.isMobile();h&&!R.W.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(n.w.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),p&&this.platforms.push("desktop"),h||!c||R.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,r.qy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,r.qy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,r.qy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,r.qy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,r.qy)`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return(0,r.qy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,r.qy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eT.styles=eI,eS([(0,o.wk)()],eT.prototype,"platform",void 0),eS([(0,o.wk)()],eT.prototype,"platforms",void 0),eS([(0,o.wk)()],eT.prototype,"isSiwxEnabled",void 0),eS([(0,o.wk)()],eT.prototype,"remoteFeatures",void 0),eS([(0,o.MZ)({type:Boolean})],eT.prototype,"displayBranding",void 0),eS([(0,o.MZ)({type:Boolean})],eT.prototype,"basic",void 0),eT=eS([(0,c.EM)("w3m-connecting-wc-view")],eT);var eO=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eM=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=n.w.isMobile(),this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=s.N.state,{customWallets:i}=a.H.state,o=l.i.getRecentWallets(),n=e.length||t.length||i?.length||o.length;return(0,r.qy)`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?(0,r.qy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,r.qy)`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?(0,r.qy)` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};eO([(0,o.wk)()],eM.prototype,"isMobile",void 0),eO([(0,o.wk)()],eM.prototype,"remoteFeatures",void 0),eM=eO([(0,c.EM)("w3m-connecting-wc-basic-view")],eM);var eP=i(89495);let{I:ej}=eP.ge;var eA=i(89859);let eq=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),eq(e,t);return!0},eL=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},ez=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),eZ(t)}};function e_(e){void 0!==this._$AN?(eL(this),this._$AM=e,ez(this)):this._$AM=e}function eN(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)eq(r[e],!1),eL(r[e]);else null!=r&&(eq(r,!1),eL(r));else eq(this,e)}let eZ=e=>{e.type==eA.OA.CHILD&&(e._$AP??=eN,e._$AQ??=e_)};class eD extends eA.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ez(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(eq(this,e),eL(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let eB=()=>new eF;class eF{}let eH=new WeakMap,eU=(0,eA.u$)(class extends eD{render(e){return eP.s6}update(e,[t]){let i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),eP.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=eH.get(t);void 0===i&&(i=new WeakMap,eH.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?eH.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),eJ=(0,P.AH)`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var eV=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eK=class extends r.WF{constructor(){super(...arguments),this.inputElementRef=eB(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return(0,r.qy)`
      <label data-size=${this.size}>
        <input
          ${eU(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};eK.styles=[O.W5,O.fD,eJ],eV([(0,o.MZ)({type:Boolean})],eK.prototype,"checked",void 0),eV([(0,o.MZ)({type:Boolean})],eK.prototype,"disabled",void 0),eV([(0,o.MZ)()],eK.prototype,"size",void 0),eK=eV([(0,M.E)("wui-toggle")],eK);let eG=(0,P.AH)`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var eQ=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eX=class extends r.WF{constructor(){super(...arguments),this.checked=!1}render(){return(0,r.qy)`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};eX.styles=[O.W5,O.fD,eG],eQ([(0,o.MZ)({type:Boolean})],eX.prototype,"checked",void 0),eX=eQ([(0,M.E)("wui-certified-switch")],eX);let eY=(0,P.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var e0=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e3=class extends r.WF{constructor(){super(...arguments),this.inputElementRef=eB(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return(0,r.qy)` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${eU(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,d.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?(0,r.qy)`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?(0,r.qy)`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?(0,r.qy)`<wui-icon name="spinner" size="md"></wui-icon>`:(0,r.qy)`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?(0,r.qy)`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?(0,r.qy)`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};e3.styles=[O.W5,O.fD,eY],e0([(0,o.MZ)()],e3.prototype,"icon",void 0),e0([(0,o.MZ)({type:Boolean})],e3.prototype,"disabled",void 0),e0([(0,o.MZ)({type:Boolean})],e3.prototype,"loading",void 0),e0([(0,o.MZ)()],e3.prototype,"placeholder",void 0),e0([(0,o.MZ)()],e3.prototype,"type",void 0),e0([(0,o.MZ)()],e3.prototype,"value",void 0),e0([(0,o.MZ)()],e3.prototype,"errorText",void 0),e0([(0,o.MZ)()],e3.prototype,"warningText",void 0),e0([(0,o.MZ)()],e3.prototype,"onSubmit",void 0),e0([(0,o.MZ)()],e3.prototype,"size",void 0),e0([(0,o.MZ)({attribute:!1})],e3.prototype,"onKeyDown",void 0),e3=e0([(0,M.E)("wui-input-text")],e3);let e1=(0,P.AH)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var e2=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e5=class extends r.WF{constructor(){super(...arguments),this.inputComponentRef=eB(),this.inputValue=""}render(){return(0,r.qy)`
      <wui-input-text
        ${eU(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?(0,r.qy)`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};e5.styles=[O.W5,e1],e2([(0,o.MZ)()],e5.prototype,"inputValue",void 0),e5=e2([(0,M.E)("wui-search-bar")],e5);let e4=(0,r.JW)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,e6=(0,P.AH)`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var e8=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e7=class extends r.WF{constructor(){super(...arguments),this.type="wallet"}render(){return(0,r.qy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,r.qy)` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${e4}`:(0,r.qy)`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};e7.styles=[O.W5,O.fD,e6],e8([(0,o.MZ)()],e7.prototype,"type",void 0),e7=e8([(0,M.E)("wui-card-select-loader")],e7);var e9=i(89368);let te=(0,r.AH)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var tt=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ti=class extends r.WF{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&e9.Z.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e9.Z.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e9.Z.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e9.Z.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e9.Z.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e9.Z.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e9.Z.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e9.Z.getSpacingStyles(this.margin,3)};
    `,(0,r.qy)`<slot></slot>`}};ti.styles=[O.W5,te],tt([(0,o.MZ)()],ti.prototype,"gridTemplateRows",void 0),tt([(0,o.MZ)()],ti.prototype,"gridTemplateColumns",void 0),tt([(0,o.MZ)()],ti.prototype,"justifyItems",void 0),tt([(0,o.MZ)()],ti.prototype,"alignItems",void 0),tt([(0,o.MZ)()],ti.prototype,"justifyContent",void 0),tt([(0,o.MZ)()],ti.prototype,"alignContent",void 0),tt([(0,o.MZ)()],ti.prototype,"columnGap",void 0),tt([(0,o.MZ)()],ti.prototype,"rowGap",void 0),tt([(0,o.MZ)()],ti.prototype,"gap",void 0),tt([(0,o.MZ)()],ti.prototype,"padding",void 0),tt([(0,o.MZ)()],ti.prototype,"margin",void 0),ti=tt([(0,M.E)("wui-grid")],ti);var tr=i(54422);let to=(0,c.AH)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["0"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e["4"]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var tn=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ta=class extends r.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return(0,r.qy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,d.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?(0,r.qy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,r.qy)`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,d.J)(this.imageSrc)}
        name=${(0,d.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,r.qy)`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=y.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await y.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,w.E.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:g.I.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};ta.styles=to,tn([(0,o.wk)()],ta.prototype,"visible",void 0),tn([(0,o.wk)()],ta.prototype,"imageSrc",void 0),tn([(0,o.wk)()],ta.prototype,"imageLoading",void 0),tn([(0,o.wk)()],ta.prototype,"isImpressed",void 0),tn([(0,o.MZ)()],ta.prototype,"explorerId",void 0),tn([(0,o.MZ)()],ta.prototype,"walletQuery",void 0),tn([(0,o.MZ)()],ta.prototype,"certified",void 0),tn([(0,o.MZ)()],ta.prototype,"displayIndex",void 0),tn([(0,o.MZ)({type:Object})],ta.prototype,"wallet",void 0),ta=tn([(0,c.EM)("w3m-all-wallets-list-item")],ta);let ts=(0,c.AH)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e["4"]};
    padding-bottom: ${({spacing:e})=>e["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var tl=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tc="local-paginator",td=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!s.N.state.wallets.length,this.wallets=s.N.state.wallets,this.recommended=s.N.state.recommended,this.featured=s.N.state.featured,this.filteredWallets=s.N.state.filteredWallets,this.mobileFullScreen=a.H.state.enableMobileFullScreen,this.unsubscribe.push(s.N.subscribeKey("wallets",e=>this.wallets=e),s.N.subscribeKey("recommended",e=>this.recommended=e),s.N.subscribeKey("featured",e=>this.featured=e),s.N.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),(0,r.qy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await s.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,r.qy)`
        <wui-card-select-loader type="wallet" id=${(0,d.J)(t)}></wui-card-select-loader>
      `)}getWallets(){let e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);let t=n.w.uniqueBy(e,"id"),i=tr.A.markWalletsAsInstalled(t);return tr.A.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map((e,t)=>(0,r.qy)`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:r,mobileFilteredOutWalletsLength:o}=s.N.state,n=window.innerWidth<352?3:4,a=e.length+t.length,l=Math.ceil(a/n)*n-a+n;return(l-=e.length?i.length%n:0,0===r&&i.length>0)?null:0===r||[...i,...e,...t].length<r-(o??0)?this.shimmerTemplate(l,tc):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tc}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=s.N.state;i.length<t&&s.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){p.a.selectWalletConnector(e)}};td.styles=ts,tl([(0,o.wk)()],td.prototype,"loading",void 0),tl([(0,o.wk)()],td.prototype,"wallets",void 0),tl([(0,o.wk)()],td.prototype,"recommended",void 0),tl([(0,o.wk)()],td.prototype,"featured",void 0),tl([(0,o.wk)()],td.prototype,"filteredWallets",void 0),tl([(0,o.wk)()],td.prototype,"badge",void 0),tl([(0,o.wk)()],td.prototype,"mobileFullScreen",void 0),td=tl([(0,c.EM)("w3m-all-wallets-list")],td);let th=(0,r.AH)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var tp=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tu=class extends r.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=a.H.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?(0,r.qy)`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await s.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=s.N.state,t=tr.A.markWalletsAsInstalled(e);return e.length?(0,r.qy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map((e,t)=>(0,r.qy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,r.qy)`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){p.a.selectWalletConnector(e)}};tu.styles=th,tp([(0,o.wk)()],tu.prototype,"loading",void 0),tp([(0,o.wk)()],tu.prototype,"mobileFullScreen",void 0),tp([(0,o.MZ)()],tu.prototype,"query",void 0),tp([(0,o.MZ)()],tu.prototype,"badge",void 0),tu=tp([(0,c.EM)("w3m-all-wallets-search")],tu);var tw=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tg=class extends r.WF{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=n.w.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,r.qy)`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?(0,r.qy)`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:(0,r.qy)`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",W.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.w.isMobile()?(0,r.qy)`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){g.I.push("ConnectingWalletConnect")}};tw([(0,o.wk)()],tg.prototype,"search",void 0),tw([(0,o.wk)()],tg.prototype,"badge",void 0),tg=tw([(0,c.EM)("w3m-all-wallets-view")],tg);let tm=(0,P.AH)`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var tb=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tf=class extends r.WF{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",(0,r.qy)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,d.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?(0,r.qy)`<wui-image
        icon=${this.icon}
        iconColor=${(0,d.J)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:(0,r.qy)`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?(0,r.qy)`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:(0,r.qy)`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};tf.styles=[O.W5,O.fD,tm],tb([(0,o.MZ)()],tf.prototype,"imageSrc",void 0),tb([(0,o.MZ)()],tf.prototype,"icon",void 0),tb([(0,o.MZ)()],tf.prototype,"iconColor",void 0),tb([(0,o.MZ)({type:Boolean})],tf.prototype,"loading",void 0),tb([(0,o.MZ)()],tf.prototype,"tabIdx",void 0),tb([(0,o.MZ)({type:Boolean})],tf.prototype,"disabled",void 0),tb([(0,o.MZ)({type:Boolean})],tf.prototype,"rightIcon",void 0),tb([(0,o.MZ)({type:Boolean})],tf.prototype,"rounded",void 0),tb([(0,o.MZ)({type:Boolean})],tf.prototype,"fullSize",void 0),tf=tb([(0,M.E)("wui-list-item")],tf);let ty=class extends r.WF{constructor(){super(...arguments),this.wallet=g.I.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,r.qy)`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,r.qy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,r.qy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,r.qy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,r.qy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(w.E.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),n.w.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};ty=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,c.EM)("w3m-downloads-view")],ty)}}]);