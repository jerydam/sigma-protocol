"use strict";exports.id=7017,exports.ids=[7017],exports.modules={67017:(a,b,c)=>{c.r(b),c.d(b,{W3mAllWalletsView:()=>bp,W3mConnectingWcBasicView:()=>aG,W3mDownloadsView:()=>bt});var d=c(94619),e=c(53118),f=c(46296),g=c(42401),h=c(60259),i=c(97350),j=c(86936);c(45248);var k=c(48958),l=c(18259),m=c(2604),n=c(14961),o=c(5114),p=c(56726);c(78710);var q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let r=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.a.state.connectors,this.count=h.N.state.count,this.filteredCount=h.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=h.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(m.a.subscribeKey("connectors",a=>this.connectors=a),h.N.subscribeKey("count",a=>this.count=a),h.N.subscribeKey("filteredWallets",a=>this.filteredCount=a.length),h.N.subscribeKey("isFetchingRecommendedWallets",a=>this.isFetchingRecommendedWallets=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.connectors.find(a=>"walletConnect"===a.id),{allWallets:b}=g.H.state;if(!a||"HIDE"===b||"ONLY_MOBILE"===b&&!f.w.isMobile())return null;let c=h.N.state.featured.length,e=this.count+c,i=e<10?e:10*Math.floor(e/10),j=this.filteredCount>0?this.filteredCount:i,m=`${j}`;this.filteredCount>0?m=`${this.filteredCount}`:j<e&&(m=`${j}+`);let o=n.x.hasAnyConnection(l.o.CONNECTOR_ID.WALLET_CONNECT);return(0,d.qy)`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${m}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,k.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${o}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){o.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),p.I.push("AllWallets",{redirectView:p.I.state.data?.redirectView})}};q([(0,e.MZ)()],r.prototype,"tabIdx",void 0),q([(0,e.wk)()],r.prototype,"connectors",void 0),q([(0,e.wk)()],r.prototype,"count",void 0),q([(0,e.wk)()],r.prototype,"filteredCount",void 0),q([(0,e.wk)()],r.prototype,"isFetchingRecommendedWallets",void 0),r=q([(0,j.EM)("w3m-all-wallets-widget")],r);var s=c(41155),t=c(53723),u=c(21737),v=c(83348);let w=(0,j.AH)`
  :host {
    margin-top: ${({spacing:a})=>a["1"]};
  }
  wui-separator {
    margin: ${({spacing:a})=>a["3"]} calc(${({spacing:a})=>a["3"]} * -1)
      ${({spacing:a})=>a["2"]} calc(${({spacing:a})=>a["3"]} * -1);
    width: calc(100% + ${({spacing:a})=>a["3"]} * 2);
  }
`;var x=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let y=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.connectors=m.a.state.connectors,this.recommended=h.N.state.recommended,this.featured=h.N.state.featured,this.explorerWallets=h.N.state.explorerWallets,this.connections=n.x.state.connections,this.connectorImages=s.j.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(m.a.subscribeKey("connectors",a=>this.connectors=a),n.x.subscribeKey("connections",a=>this.connections=a),s.j.subscribeKey("connectorImages",a=>this.connectorImages=a),h.N.subscribeKey("recommended",a=>this.recommended=a),h.N.subscribeKey("featured",a=>this.featured=a),h.N.subscribeKey("explorerFilteredWallets",a=>{this.explorerWallets=a?.length?a:h.N.state.explorerWallets}),h.N.subscribeKey("explorerWallets",a=>{this.explorerWallets?.length||(this.explorerWallets=a)})),f.w.isTelegram()&&f.w.isIos()&&(this.loadingTelegram=!n.x.state.wcUri,this.unsubscribe.push(n.x.subscribeKey("wcUri",a=>this.loadingTelegram=!a)))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return(0,d.qy)`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(a,b){return a.map(a=>{if("MULTI_CHAIN"===a.type&&a.connectors){let c=a.connectors.map(a=>a.id),d=a.connectors.map(a=>a.name),e=a.connectors.map(a=>a.info?.rdns);return a.explorerWallet=b?.find(a=>c.includes(a.id)||d.includes(a.name)||a.rdns&&(e.includes(a.rdns)||c.includes(a.rdns)))??a.explorerWallet,a}let c=b?.find(b=>b.id===a.id||b.rdns===a.info?.rdns||b.name===a.name);return a.explorerWallet=c??a.explorerWallet,a})}processConnectorsByType(a,b=!0){let c=v.g.sortConnectorsByExplorerWallet([...a]);return b?c.filter(v.g.showConnector):c}connectorListTemplate(){let a=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),b=v.g.getConnectorsByType(a,this.recommended,this.featured),c=this.processConnectorsByType(b.announced.filter(a=>"walletConnect"!==a.id)),d=this.processConnectorsByType(b.injected),e=this.processConnectorsByType(b.multiChain.filter(a=>"WalletConnect"!==a.name),!1),g=b.custom,h=b.recent,i=this.processConnectorsByType(b.external.filter(a=>a.id!==l.o.CONNECTOR_ID.COINBASE_SDK)),j=b.recommended,k=b.featured,m=v.g.getConnectorTypeOrder({custom:g,recent:h,announced:c,injected:d,multiChain:e,recommended:j,featured:k,external:i}),n=this.connectors.find(a=>"walletConnect"===a.id),o=f.w.isMobile(),p=[];for(let a of m)switch(a){case"walletConnect":!o&&n&&p.push({kind:"connector",subtype:"walletConnect",connector:n});break;case"recent":v.g.getFilteredRecentWallets().forEach(a=>p.push({kind:"wallet",subtype:"recent",wallet:a}));break;case"injected":e.forEach(a=>p.push({kind:"connector",subtype:"multiChain",connector:a})),c.forEach(a=>p.push({kind:"connector",subtype:"announced",connector:a})),d.forEach(a=>p.push({kind:"connector",subtype:"injected",connector:a}));break;case"featured":k.forEach(a=>p.push({kind:"wallet",subtype:"featured",wallet:a}));break;case"custom":v.g.getFilteredCustomWallets(g??[]).forEach(a=>p.push({kind:"wallet",subtype:"custom",wallet:a}));break;case"external":i.forEach(a=>p.push({kind:"connector",subtype:"external",connector:a}));break;case"recommended":v.g.getCappedRecommendedWallets(j).forEach(a=>p.push({kind:"wallet",subtype:"recommended",wallet:a}));break;default:console.warn(`Unknown connector type: ${a}`)}return p.map((a,b)=>"connector"===a.kind?this.renderConnector(a,b):this.renderWallet(a,b))}renderConnector(a,b){let c,e,f=a.connector,g=t.$.getConnectorImage(f)||this.connectorImages[f?.imageId??""],h=(this.connections.get(f.chain)??[]).some(a=>u.y.isLowerCaseMatch(a.connectorId,f.id));"multiChain"===a.subtype?(c="multichain",e="info"):"walletConnect"===a.subtype?(c="qr code",e="accent"):"injected"===a.subtype||"announced"===a.subtype?(c=h?"connected":"installed",e=h?"info":"success"):(c=void 0,e=void 0);let i=n.x.hasAnyConnection(l.o.CONNECTOR_ID.WALLET_CONNECT),j=("walletConnect"===a.subtype||"external"===a.subtype)&&i;return(0,d.qy)`
      <w3m-list-wallet
        displayIndex=${b}
        imageSrc=${(0,k.J)(g)}
        .installed=${!0}
        name=${f.name??"Unknown"}
        .tagVariant=${e}
        tagLabel=${(0,k.J)(c)}
        data-testid=${`wallet-selector-${f.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(a)}
        tabIdx=${(0,k.J)(this.tabIdx)}
        ?disabled=${j}
        rdnsId=${(0,k.J)(f.explorerWallet?.rdns||void 0)}
        walletRank=${(0,k.J)(f.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(a){let b=p.I.state.data?.redirectView;if("walletConnect"===a.subtype){m.a.setActiveConnector(a.connector),f.w.isMobile()?p.I.push("AllWallets"):p.I.push("ConnectingWalletConnect",{redirectView:b});return}if("multiChain"===a.subtype){m.a.setActiveConnector(a.connector),p.I.push("ConnectingMultiChain",{redirectView:b});return}if("injected"===a.subtype){m.a.setActiveConnector(a.connector),p.I.push("ConnectingExternal",{connector:a.connector,redirectView:b,wallet:a.connector.explorerWallet});return}if("announced"===a.subtype)return"walletConnect"===a.connector.id?void(f.w.isMobile()?p.I.push("AllWallets"):p.I.push("ConnectingWalletConnect",{redirectView:b})):(p.I.push("ConnectingExternal",{connector:a.connector,redirectView:b,wallet:a.connector.explorerWallet}),void 0);p.I.push("ConnectingExternal",{connector:a.connector,redirectView:b})}renderWallet(a,b){let c=a.wallet,e=t.$.getWalletImage(c),f=n.x.hasAnyConnection(l.o.CONNECTOR_ID.WALLET_CONNECT),g=this.loadingTelegram,h="recent"===a.subtype?"recent":void 0,i="recent"===a.subtype?"info":void 0;return(0,d.qy)`
      <w3m-list-wallet
        displayIndex=${b}
        imageSrc=${(0,k.J)(e)}
        name=${c.name??"Unknown"}
        @click=${()=>this.onClickWallet(a)}
        size="sm"
        data-testid=${`wallet-selector-${c.id}`}
        tabIdx=${(0,k.J)(this.tabIdx)}
        ?loading=${g}
        ?disabled=${f}
        rdnsId=${(0,k.J)(c.rdns||void 0)}
        walletRank=${(0,k.J)(c.order)}
        tagLabel=${(0,k.J)(h)}
        .tagVariant=${i}
      >
      </w3m-list-wallet>
    `}onClickWallet(a){let b=p.I.state.data?.redirectView;if("featured"===a.subtype)return void m.a.selectWalletConnector(a.wallet);if("recent"===a.subtype){if(this.loadingTelegram)return;m.a.selectWalletConnector(a.wallet);return}if("custom"===a.subtype){if(this.loadingTelegram)return;p.I.push("ConnectingWalletConnect",{wallet:a.wallet,redirectView:b});return}if(this.loadingTelegram)return;let c=m.a.getConnector({id:a.wallet.id,rdns:a.wallet.rdns});c?p.I.push("ConnectingExternal",{connector:c,redirectView:b}):p.I.push("ConnectingWalletConnect",{wallet:a.wallet,redirectView:b})}};y.styles=w,x([(0,e.MZ)({type:Number})],y.prototype,"tabIdx",void 0),x([(0,e.wk)()],y.prototype,"connectors",void 0),x([(0,e.wk)()],y.prototype,"recommended",void 0),x([(0,e.wk)()],y.prototype,"featured",void 0),x([(0,e.wk)()],y.prototype,"explorerWallets",void 0),x([(0,e.wk)()],y.prototype,"connections",void 0),x([(0,e.wk)()],y.prototype,"connectorImages",void 0),x([(0,e.wk)()],y.prototype,"loadingTelegram",void 0),y=x([(0,j.EM)("w3m-connector-list")],y);var z=c(85300),A=c(46714),B=c(84789),C=c(5878),D=c(4534),E=c(99877),F=c(68327),G=c(42988);c(68286),c(80026);var H=c(89455);let I=(0,H.AH)`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:a})=>a[1]} ${({spacing:a})=>a[2]};
    column-gap: ${({spacing:a})=>a[1]};
    color: ${({tokens:a})=>a.theme.textSecondary};
    border-radius: ${({borderRadius:a})=>a[20]};
    background-color: transparent;
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:a})=>a.theme.textPrimary};
    background-color: ${({tokens:a})=>a.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:a})=>a.theme.textPrimary};
    }
  }
`;var J=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let K={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},L={lg:"md",md:"sm",sm:"sm"},M=class extends d.WF{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return(0,d.qy)`
      <button data-active=${this.active}>
        ${this.icon?(0,d.qy)`<wui-icon size=${L[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${K[this.size]}> ${this.label} </wui-text>
      </button>
    `}};M.styles=[F.W5,F.fD,I],J([(0,e.MZ)()],M.prototype,"icon",void 0),J([(0,e.MZ)()],M.prototype,"size",void 0),J([(0,e.MZ)()],M.prototype,"label",void 0),J([(0,e.MZ)({type:Boolean})],M.prototype,"active",void 0),M=J([(0,G.E)("wui-tab-item")],M);let N=(0,H.AH)`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    border-radius: ${({borderRadius:a})=>a[32]};
    padding: ${({spacing:a})=>a["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var O=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let P=class extends d.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((a,b)=>{let c=b===this.activeTab;return(0,d.qy)`
        <wui-tab-item
          @click=${()=>this.onTabClick(b)}
          icon=${a.icon}
          size=${this.size}
          label=${a.label}
          ?active=${c}
          data-active=${c}
          data-testid="tab-${a.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(a){this.activeTab=a,this.onTabChange(a)}};P.styles=[F.W5,F.fD,N],O([(0,e.MZ)({type:Array})],P.prototype,"tabs",void 0),O([(0,e.MZ)()],P.prototype,"onTabChange",void 0),O([(0,e.MZ)()],P.prototype,"size",void 0),O([(0,e.wk)()],P.prototype,"activeTab",void 0),P=O([(0,G.E)("wui-tabs")],P);var Q=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let R=class extends d.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(a=>a())}render(){let a=this.generateTabs();return(0,d.qy)`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${a} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let a=this.platforms.map(a=>{if("browser"===a)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===a)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===a)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===a)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===a)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=a.map(({platform:a})=>a),a}onTabChange(a){let b=this.platformTabs[a];b&&this.onSelectPlatfrom?.(b)}};Q([(0,e.MZ)({type:Array})],R.prototype,"platforms",void 0),Q([(0,e.MZ)()],R.prototype,"onSelectPlatfrom",void 0),R=Q([(0,j.EM)("w3m-connecting-header")],R);var S=c(26022);c(10948);let T=(0,H.AH)`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:a})=>a[2]};
    transition:
      scale ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:a})=>a[2]};
    padding: 0 ${({spacing:a})=>a[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:a})=>a[3]};
    padding: 0 ${({spacing:a})=>a[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:a})=>a[4]};
    padding: 0 ${({spacing:a})=>a[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:a})=>a.core.backgroundAccentPrimary};
    color: ${({tokens:a})=>a.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:a})=>a.core.foregroundAccent010};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:a})=>a.theme.backgroundInvert};
    color: ${({tokens:a})=>a.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:a})=>a.core.textError};
    color: ${({tokens:a})=>a.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:a})=>a.core.backgroundError};
    color: ${({tokens:a})=>a.core.textError};
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
`;var U=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let V={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},W={lg:"md",md:"md",sm:"sm"},X=class extends d.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let a=this.textVariant??V[this.size];return(0,d.qy)`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${a} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let a=W[this.size],b="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return(0,d.qy)`<wui-loading-spinner color=${b} size=${a}></wui-loading-spinner>`}return null}};X.styles=[F.W5,F.fD,T],U([(0,e.MZ)()],X.prototype,"size",void 0),U([(0,e.MZ)({type:Boolean})],X.prototype,"disabled",void 0),U([(0,e.MZ)({type:Boolean})],X.prototype,"fullWidth",void 0),U([(0,e.MZ)({type:Boolean})],X.prototype,"loading",void 0),U([(0,e.MZ)()],X.prototype,"variant",void 0),U([(0,e.MZ)()],X.prototype,"textVariant",void 0),X=U([(0,G.E)("wui-button")],X),c(75202),c(79203),c(66471);let Y=(0,H.AH)`
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
    stroke: ${a=>a.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Z=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let $=class extends d.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let a=this.radius>50?50:this.radius,b=36-a;return(0,d.qy)`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${a}
          stroke-dasharray="${116+b} ${245+b}"
          stroke-dashoffset=${360+1.75*b}
        />
      </svg>
    `}};$.styles=[F.W5,Y],Z([(0,e.MZ)({type:Number})],$.prototype,"radius",void 0),$=Z([(0,G.E)("wui-loading-thumbnail")],$),c(51080),c(89347),c(615);let _=(0,H.AH)`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[5]};
    padding-left: ${({spacing:a})=>a[3]};
    padding-right: ${({spacing:a})=>a[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:a})=>a[6]};
  }

  wui-text {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var aa=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ab=class extends d.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return(0,d.qy)`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ab.styles=[F.W5,F.fD,_],aa([(0,e.MZ)({type:Boolean})],ab.prototype,"disabled",void 0),aa([(0,e.MZ)()],ab.prototype,"label",void 0),aa([(0,e.MZ)()],ab.prototype,"buttonLabel",void 0),ab=aa([(0,G.E)("wui-cta-button")],ab);let ac=(0,j.AH)`
  :host {
    display: block;
    padding: 0 ${({spacing:a})=>a["5"]} ${({spacing:a})=>a["5"]};
  }
`;var ad=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ae=class extends d.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:a,app_store:b,play_store:c,chrome_store:e,homepage:g}=this.wallet,h=f.w.isMobile(),i=f.w.isIos(),k=f.w.isAndroid(),l=[b,c,g,e].filter(Boolean).length>1,m=j.Zv.getTruncateString({string:a,charsStart:12,charsEnd:0,truncate:"end"});return l&&!h?(0,d.qy)`
        <wui-cta-button
          label=${`Don't have ${m}?`}
          buttonLabel="Get"
          @click=${()=>p.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&g?(0,d.qy)`
        <wui-cta-button
          label=${`Don't have ${m}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:b&&i?(0,d.qy)`
        <wui-cta-button
          label=${`Don't have ${m}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:c&&k?(0,d.qy)`
        <wui-cta-button
          label=${`Don't have ${m}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&f.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&f.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&f.w.openHref(this.wallet.homepage,"_blank")}};ae.styles=[ac],ad([(0,e.MZ)({type:Object})],ae.prototype,"wallet",void 0),ae=ad([(0,j.EM)("w3m-mobile-download-links")],ae);let af=(0,j.AH)`
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
    right: calc(${({spacing:a})=>a["1"]} * -1);
    bottom: calc(${({spacing:a})=>a["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:a})=>a.lg};
    transition-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:a})=>a["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:a})=>a["ease-out-power-2"]} both;
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
`;var ag=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};class ah extends d.WF{constructor(){super(),this.wallet=p.I.state.data?.wallet,this.connector=p.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=t.$.getConnectorImage(this.connector)??t.$.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=n.x.state.wcUri,this.error=n.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(n.x.subscribeKey("wcUri",a=>{this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),n.x.subscribeKey("wcError",a=>this.error=a)),(f.w.isTelegram()||f.w.isSafari())&&f.w.isIos()&&n.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),n.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let a=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,b="";return this.label?b=this.label:(b=`Continue in ${this.name}`,this.error&&(b="Connection declined")),(0,d.qy)`
      <wui-flex
        data-error=${(0,k.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,k.J)(this.imageSrc)}></wui-wallet-image>

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
            ${b}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${a}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?(0,d.qy)`
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

      ${this.isWalletConnect?(0,d.qy)`
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
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let a=this.shadowRoot?.querySelector("wui-button");a?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){n.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let a=S.W.state.themeVariables["--w3m-border-radius-master"],b=a?parseInt(a.replace("px",""),10):4;return(0,d.qy)`<wui-loading-thumbnail radius=${9*b}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(f.w.copyToClopboard(this.uri),B.P.showSuccess("Link copied"))}catch{B.P.showError("Failed to copy")}}}ah.styles=af,ag([(0,e.wk)()],ah.prototype,"isRetrying",void 0),ag([(0,e.wk)()],ah.prototype,"uri",void 0),ag([(0,e.wk)()],ah.prototype,"error",void 0),ag([(0,e.wk)()],ah.prototype,"ready",void 0),ag([(0,e.wk)()],ah.prototype,"showRetry",void 0),ag([(0,e.wk)()],ah.prototype,"label",void 0),ag([(0,e.wk)()],ah.prototype,"secondaryBtnLabel",void 0),ag([(0,e.wk)()],ah.prototype,"secondaryLabel",void 0),ag([(0,e.wk)()],ah.prototype,"isLoading",void 0),ag([(0,e.MZ)({type:Boolean})],ah.prototype,"isMobile",void 0),ag([(0,e.MZ)()],ah.prototype,"onRetry",void 0);let ai=class extends ah{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),o.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.I.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:a}=m.a.state,b=a.find(a=>"ANNOUNCED"===a.type&&a.info?.rdns===this.wallet?.rdns||"INJECTED"===a.type||a.name===this.wallet?.name);if(b)await n.x.connectExternal(b,b.chain);else throw Error("w3m-connecting-wc-browser: No connector found");C.W.close(),o.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:p.I.state.view,walletRank:this.wallet?.order}})}catch(a){a instanceof D.A&&a.originalName===z.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?o.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:a.message}}):o.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:a?.message??"Unknown"}}),this.error=!0}}};ai=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.EM)("w3m-connecting-wc-browser")],ai);let aj=class extends ah{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),o.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.I.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:a,name:b}=this.wallet,{redirect:c,href:d}=f.w.formatNativeUrl(a,this.uri);n.x.setWcLinking({name:b,href:d}),n.x.setRecentWallet(this.wallet),f.w.openHref(c,"_blank")}catch{this.error=!0}}};aj=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.EM)("w3m-connecting-wc-desktop")],aj);var ak=c(97442),al=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let am=class extends ah{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=g.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:a,link_mode:b,name:c}=this.wallet,{redirect:d,redirectUniversalLink:e,href:g}=f.w.formatNativeUrl(a,this.uri,b);this.redirectDeeplink=d,this.redirectUniversalLink=e,this.target=f.w.isIframe()?"_top":"_self",n.x.setWcLinking({name:c,href:g}),n.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?f.w.openHref(this.redirectUniversalLink,this.target):f.w.openHref(this.redirectDeeplink,this.target)}catch(a){o.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:a instanceof Error?a.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ak.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(n.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),o.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){n.x.setWcError(!1),this.onConnect?.()}};al([(0,e.wk)()],am.prototype,"redirectDeeplink",void 0),al([(0,e.wk)()],am.prototype,"redirectUniversalLink",void 0),al([(0,e.wk)()],am.prototype,"target",void 0),al([(0,e.wk)()],am.prototype,"preferUniversalLinks",void 0),al([(0,e.wk)()],am.prototype,"isLoading",void 0),am=al([(0,j.EM)("w3m-connecting-wc-mobile")],am),c(91239);var an=c(91817);function ao(a,b,c){return a!==b&&(a-b<0?b-a:a-b)<=c+.1}let ap={generate({uri:a,size:b,logoSize:c,padding:e=8,dotColor:f="var(--apkt-colors-black)"}){let g,h,i=[],j=(h=Math.sqrt((g=Array.prototype.slice.call(an.create(a,{errorCorrectionLevel:"Q"}).modules.data,0)).length),g.reduce((a,b,c)=>(c%h==0?a.push([b]):a[a.length-1].push(b))&&a,[])),k=(b-2*e)/j.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:a,y:b})=>{let c=(j.length-7)*k*a+e,g=(j.length-7)*k*b+e;for(let a=0;a<l.length;a+=1){let b=k*(7-2*a);i.push((0,d.JW)`
            <rect
              fill=${2===a?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===a?b-10:b}
              rx= ${0===a?(b-10)*.45:.45*b}
              ry= ${0===a?(b-10)*.45:.45*b}
              stroke=${f}
              stroke-width=${10*(0===a)}
              height=${0===a?b-10:b}
              x= ${0===a?g+k*a+5:g+k*a}
              y= ${0===a?c+k*a+5:c+k*a}
            />
          `)}});let m=Math.floor((c+25)/k),n=j.length/2-m/2,o=j.length/2+m/2-1,p=[];j.forEach((a,b)=>{a.forEach((a,c)=>{!j[b][c]||b<7&&c<7||b>j.length-8&&c<7||b<7&&c>j.length-8||b>n&&b<o&&c>n&&c<o||p.push([b*k+k/2+e,c*k+k/2+e])})});let q={};return p.forEach(([a,b])=>{q[a]?q[a]?.push(b):q[a]=[b]}),Object.entries(q).map(([a,b])=>{let c=b.filter(a=>b.every(b=>!ao(a,b,k)));return[Number(a),c]}).forEach(([a,b])=>{b.forEach(b=>{i.push((0,d.JW)`<circle cx=${a} cy=${b} fill=${f} r=${k/2.5} />`)})}),Object.entries(q).filter(([a,b])=>b.length>1).map(([a,b])=>{let c=b.filter(a=>b.some(b=>ao(a,b,k)));return[Number(a),c]}).map(([a,b])=>{b.sort((a,b)=>a<b?-1:1);let c=[];for(let a of b){let b=c.find(b=>b.some(b=>ao(a,b,k)));b?b.push(a):c.push([a])}return[a,c.map(a=>[a[0],a[a.length-1]])]}).forEach(([a,b])=>{b.forEach(([b,c])=>{i.push((0,d.JW)`
              <line
                x1=${a}
                x2=${a}
                y1=${b}
                y2=${c}
                stroke=${f}
                stroke-width=${k/1.25}
                stroke-linecap="round"
              />
            `)})}),i}},aq=(0,H.AH)`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:a})=>a.white};
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:a})=>a[4]};
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
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:a})=>a.theme.backgroundPrimary};
    border-radius: ${({borderRadius:a})=>a[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:a})=>a[2]};
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
`;var ar=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let as=class extends d.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,(0,d.qy)`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return(0,d.JW)`
      <svg height=${this.size} width=${this.size}>
        ${ap.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?(0,d.qy)`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?(0,d.qy)`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:(0,d.qy)`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};as.styles=[F.W5,aq],ar([(0,e.MZ)()],as.prototype,"uri",void 0),ar([(0,e.MZ)({type:Number})],as.prototype,"size",void 0),ar([(0,e.MZ)()],as.prototype,"theme",void 0),ar([(0,e.MZ)()],as.prototype,"imageSrc",void 0),ar([(0,e.MZ)()],as.prototype,"alt",void 0),ar([(0,e.MZ)({type:Boolean})],as.prototype,"arenaClear",void 0),ar([(0,e.MZ)({type:Boolean})],as.prototype,"farcaster",void 0),as=ar([(0,G.E)("wui-qr-code")],as);let at=(0,H.AH)`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:a})=>a.theme.foregroundSecondary} 0%,
      ${({tokens:a})=>a.theme.foregroundTertiary} 50%,
      ${({tokens:a})=>a.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:a})=>a[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:a})=>a[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var au=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let av=class extends d.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",(0,d.qy)`<slot></slot>`}};av.styles=[at],au([(0,e.MZ)()],av.prototype,"width",void 0),au([(0,e.MZ)()],av.prototype,"height",void 0),au([(0,e.MZ)()],av.prototype,"variant",void 0),au([(0,e.MZ)({type:Boolean})],av.prototype,"rounded",void 0),av=au([(0,G.E)("wui-shimmer")],av),c(79690);let aw=(0,j.AH)`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:a})=>a[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-out-power-2"]};
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
`;var ax=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ay=class extends ah{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||o.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.I.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(a=>a()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,d.qy)`
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
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let a=this.getBoundingClientRect().width-40,b=this.wallet?this.wallet.name:void 0;n.x.setWcLinking(void 0),n.x.setRecentWallet(this.wallet);let c=this.uri;if(this.wallet?.mobile_link){let{redirect:a}=f.w.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);c=a}return(0,d.qy)` <wui-qr-code
      size=${a}
      theme=${S.W.state.themeMode}
      uri=${c}
      imageSrc=${(0,k.J)(t.$.getWalletImage(this.wallet))}
      color=${(0,k.J)(S.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,k.J)(b)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let a=!this.uri||!this.ready;return(0,d.qy)`<wui-button
      .disabled=${a}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};ay.styles=aw,ax([(0,e.MZ)({type:Boolean})],ay.prototype,"basic",void 0),ay=ax([(0,j.EM)("w3m-connecting-wc-qrcode")],ay);let az=class extends d.WF{constructor(){if(super(),this.wallet=p.I.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");o.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.I.state.view}})}render(){return(0,d.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,k.J)(t.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};az=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.EM)("w3m-connecting-wc-unsupported")],az);var aA=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aB=class extends ah{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ak.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(n.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),o.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.I.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:a,name:b}=this.wallet,{redirect:c,href:d}=f.w.formatUniversalUrl(a,this.uri);n.x.setWcLinking({name:b,href:d}),n.x.setRecentWallet(this.wallet),f.w.openHref(c,"_blank")}catch{this.error=!0}}};aA([(0,e.wk)()],aB.prototype,"isLoading",void 0),aB=aA([(0,j.EM)("w3m-connecting-wc-web")],aB);let aC=(0,j.AH)`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var aD=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aE=class extends d.WF{constructor(){super(),this.wallet=p.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!g.H.state.siwx,this.remoteFeatures=g.H.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(g.H.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){return g.H.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),(0,d.qy)`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?(0,d.qy)`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(a=!1){if("browser"!==this.platform&&(!g.H.state.manualWCControl||a))try{let{wcPairingExpiry:b,status:c}=n.x.state,{redirectView:d}=p.I.state.data??{};if(a||g.H.state.enableEmbedded||f.w.isPairingExpired(b)||"connecting"===c){let a=n.x.getConnections(A.W.state.activeChain),b=this.remoteFeatures?.multiWallet,c=a.length>0;await n.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(c&&b?(p.I.replace("ProfileWallets"),B.P.showSuccess("New Wallet Added")):d?p.I.replace(d):C.W.close())}}catch(a){if(a instanceof Error&&a.message.includes("An error occurred when attempting to switch chain")&&!g.H.state.enableNetworkSwitch&&A.W.state.activeChain){A.W.setActiveCaipNetwork(E.R.getUnsupportedNetwork(`${A.W.state.activeChain}:${A.W.state.activeCaipNetwork?.id}`)),A.W.showUnsupportedChainUI();return}a instanceof D.A&&a.originalName===z.RQ.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?o.E.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:a.message}}):o.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:a?.message??"Unknown"}}),n.x.setWcError(!0),B.P.showError(a.message??"Connection error"),n.x.resetWcConnection(),p.I.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:a,desktop_link:b,webapp_link:c,injected:d,rdns:e}=this.wallet,h=d?.map(({injected_id:a})=>a).filter(Boolean),i=[...e?[e]:h??[]],j=!g.H.state.isUniversalProvider&&i.length,k=n.x.checkInstalled(i),l=j&&k,m=b&&!f.w.isMobile();l&&!A.W.state.noAdapters&&this.platforms.push("browser"),a&&this.platforms.push(f.w.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),m&&this.platforms.push("desktop"),l||!j||A.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,d.qy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return(0,d.qy)`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return(0,d.qy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return(0,d.qy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,d.qy)`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return(0,d.qy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,d.qy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(a){let b=this.shadowRoot?.querySelector("div");b&&(await b.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=a,b.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};aE.styles=aC,aD([(0,e.wk)()],aE.prototype,"platform",void 0),aD([(0,e.wk)()],aE.prototype,"platforms",void 0),aD([(0,e.wk)()],aE.prototype,"isSiwxEnabled",void 0),aD([(0,e.wk)()],aE.prototype,"remoteFeatures",void 0),aD([(0,e.MZ)({type:Boolean})],aE.prototype,"displayBranding",void 0),aD([(0,e.MZ)({type:Boolean})],aE.prototype,"basic",void 0),aE=aD([(0,j.EM)("w3m-connecting-wc-view")],aE);var aF=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aG=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=f.w.isMobile(),this.remoteFeatures=g.H.state.remoteFeatures,this.unsubscribe.push(g.H.subscribeKey("remoteFeatures",a=>this.remoteFeatures=a))}disconnectedCallback(){this.unsubscribe.forEach(a=>a())}render(){if(this.isMobile){let{featured:a,recommended:b}=h.N.state,{customWallets:c}=g.H.state,e=i.i.getRecentWallets(),f=a.length||b.length||c?.length||e.length;return(0,d.qy)`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${f?(0,d.qy)`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return(0,d.qy)`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?(0,d.qy)` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};aF([(0,e.wk)()],aG.prototype,"isMobile",void 0),aF([(0,e.wk)()],aG.prototype,"remoteFeatures",void 0),aG=aF([(0,j.EM)("w3m-connecting-wc-basic-view")],aG);var aH=c(32);let{I:aI}=aH.ge;var aJ=c(84820);let aK=(a,b)=>{let c=a._$AN;if(void 0===c)return!1;for(let a of c)a._$AO?.(b,!1),aK(a,b);return!0},aL=a=>{let b,c;do{if(void 0===(b=a._$AM))break;(c=b._$AN).delete(a),a=b}while(0===c?.size)},aM=a=>{for(let b;b=a._$AM;a=b){let c=b._$AN;if(void 0===c)b._$AN=c=new Set;else if(c.has(a))break;c.add(a),aP(b)}};function aN(a){void 0!==this._$AN?(aL(this),this._$AM=a,aM(this)):this._$AM=a}function aO(a,b=!1,c=0){let d=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(b)if(Array.isArray(d))for(let a=c;a<d.length;a++)aK(d[a],!1),aL(d[a]);else null!=d&&(aK(d,!1),aL(d));else aK(this,a)}let aP=a=>{a.type==aJ.OA.CHILD&&(a._$AP??=aO,a._$AQ??=aN)};class aQ extends aJ.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(a,b,c){super._$AT(a,b,c),aM(this),this.isConnected=a._$AU}_$AO(a,b=!0){a!==this.isConnected&&(this.isConnected=a,a?this.reconnected?.():this.disconnected?.()),b&&(aK(this,a),aL(this))}setValue(a){if(void 0===this._$Ct.strings)this._$Ct._$AI(a,this);else{let b=[...this._$Ct._$AH];b[this._$Ci]=a,this._$Ct._$AI(b,this,0)}}disconnected(){}reconnected(){}}let aR=()=>new aS;class aS{}let aT=new WeakMap,aU=(0,aJ.u$)(class extends aQ{render(a){return aH.s6}update(a,[b]){let c=b!==this.G;return c&&void 0!==this.G&&this.rt(void 0),(c||this.lt!==this.ct)&&(this.G=b,this.ht=a.options?.host,this.rt(this.ct=a.element)),aH.s6}rt(a){if(this.isConnected||(a=void 0),"function"==typeof this.G){let b=this.ht??globalThis,c=aT.get(b);void 0===c&&(c=new WeakMap,aT.set(b,c)),void 0!==c.get(this.G)&&this.G.call(this.ht,void 0),c.set(this.G,a),void 0!==a&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){return"function"==typeof this.G?aT.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),aV=(0,H.AH)`
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
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      color ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      border ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      width ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      height ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
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
    background-color: ${({colors:a})=>a.neutrals300};
    border-radius: ${({borderRadius:a})=>a.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      color ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      border ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      box-shadow ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      width ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      height ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]},
      transform ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      opacity ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:a})=>a.white};
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
    border: 1px solid ${({tokens:a})=>a.core.iconAccentPrimary};
    background-color: ${({tokens:a})=>a.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:a})=>a.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:a})=>a.core.iconAccentPrimary};
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
    background-color: ${({colors:a})=>a.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:a})=>a.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:a})=>a.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:a})=>a.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:a})=>a.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:a})=>a.theme.textTertiary};
  }
`;var aW=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let aX=class extends d.WF{constructor(){super(...arguments),this.inputElementRef=aR(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return(0,d.qy)`
      <label data-size=${this.size}>
        <input
          ${aU(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};aX.styles=[F.W5,F.fD,aV],aW([(0,e.MZ)({type:Boolean})],aX.prototype,"checked",void 0),aW([(0,e.MZ)({type:Boolean})],aX.prototype,"disabled",void 0),aW([(0,e.MZ)()],aX.prototype,"size",void 0),aX=aW([(0,G.E)("wui-toggle")],aX);let aY=(0,H.AH)`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:a})=>a["2"]};
    padding: ${({spacing:a})=>a["2"]} ${({spacing:a})=>a["3"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:a})=>a.theme.foregroundPrimary};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var aZ=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a$=class extends d.WF{constructor(){super(...arguments),this.checked=!1}render(){return(0,d.qy)`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(a){a.stopPropagation(),this.checked=a.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};a$.styles=[F.W5,F.fD,aY],aZ([(0,e.MZ)({type:Boolean})],a$.prototype,"checked",void 0),a$=aZ([(0,G.E)("wui-certified-switch")],a$);let a_=(0,H.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:a})=>a[3]};
    color: ${({tokens:a})=>a.theme.textPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:a})=>a[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
    caret-color: ${({tokens:a})=>a.core.textAccentPrimary};
    padding: ${({spacing:a})=>a[3]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[3]} ${({spacing:a})=>a[10]};
    font-size: ${({textSize:a})=>a.large};
    line-height: ${({typography:a})=>a["lg-regular"].lineHeight};
    letter-spacing: ${({typography:a})=>a["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:a})=>a.regular};
    font-family: ${({fontFamily:a})=>a.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:a})=>a[4]} ${({spacing:a})=>a[3]}
      ${({spacing:a})=>a[4]} ${({spacing:a})=>a[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:a})=>a.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:a})=>a.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:a})=>a.theme.borderSecondary};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:a})=>a.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:a})=>a[4]};
    color: ${({tokens:a})=>a.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:a})=>a[2]};
    color: ${({tokens:a})=>a.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:a})=>a.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:a})=>a[12]};
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
`;var a0=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a1=class extends d.WF{constructor(){super(...arguments),this.inputElementRef=aR(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return(0,d.qy)` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${aU(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,k.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?(0,d.qy)`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?(0,d.qy)`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?(0,d.qy)`<wui-icon name="spinner" size="md"></wui-icon>`:(0,d.qy)`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?(0,d.qy)`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?(0,d.qy)`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};a1.styles=[F.W5,F.fD,a_],a0([(0,e.MZ)()],a1.prototype,"icon",void 0),a0([(0,e.MZ)({type:Boolean})],a1.prototype,"disabled",void 0),a0([(0,e.MZ)({type:Boolean})],a1.prototype,"loading",void 0),a0([(0,e.MZ)()],a1.prototype,"placeholder",void 0),a0([(0,e.MZ)()],a1.prototype,"type",void 0),a0([(0,e.MZ)()],a1.prototype,"value",void 0),a0([(0,e.MZ)()],a1.prototype,"errorText",void 0),a0([(0,e.MZ)()],a1.prototype,"warningText",void 0),a0([(0,e.MZ)()],a1.prototype,"onSubmit",void 0),a0([(0,e.MZ)()],a1.prototype,"size",void 0),a0([(0,e.MZ)({attribute:!1})],a1.prototype,"onKeyDown",void 0),a1=a0([(0,G.E)("wui-input-text")],a1);let a2=(0,H.AH)`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:a})=>a[3]};
    color: ${({tokens:a})=>a.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:a})=>a[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:a})=>a[4]};
    transition: background-color ${({durations:a})=>a.lg}
      ${({easings:a})=>a["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }
`;var a3=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a4=class extends d.WF{constructor(){super(...arguments),this.inputComponentRef=aR(),this.inputValue=""}render(){return(0,d.qy)`
      <wui-input-text
        ${aU(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?(0,d.qy)`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(a){this.inputValue=a.detail||""}clearValue(){let a=this.inputComponentRef.value,b=a?.inputElementRef.value;b&&(b.value="",this.inputValue="",b.focus(),b.dispatchEvent(new Event("input")))}};a4.styles=[F.W5,a2],a3([(0,e.MZ)()],a4.prototype,"inputValue",void 0),a4=a3([(0,G.E)("wui-search-bar")],a4);let a5=(0,d.JW)`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,a6=(0,H.AH)`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:a})=>a[2]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: ${({borderRadius:a})=>a[5]};
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
    stroke: ${({tokens:a})=>a.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var a7=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let a8=class extends d.WF{constructor(){super(...arguments),this.type="wallet"}render(){return(0,d.qy)`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?(0,d.qy)` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${a5}`:(0,d.qy)`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};a8.styles=[F.W5,F.fD,a6],a7([(0,e.MZ)()],a8.prototype,"type",void 0),a8=a7([(0,G.E)("wui-card-select-loader")],a8);var a9=c(85518);let ba=(0,d.AH)`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var bb=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bc=class extends d.WF{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&a9.Z.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&a9.Z.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&a9.Z.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&a9.Z.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&a9.Z.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&a9.Z.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&a9.Z.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&a9.Z.getSpacingStyles(this.margin,3)};
    `,(0,d.qy)`<slot></slot>`}};bc.styles=[F.W5,ba],bb([(0,e.MZ)()],bc.prototype,"gridTemplateRows",void 0),bb([(0,e.MZ)()],bc.prototype,"gridTemplateColumns",void 0),bb([(0,e.MZ)()],bc.prototype,"justifyItems",void 0),bb([(0,e.MZ)()],bc.prototype,"alignItems",void 0),bb([(0,e.MZ)()],bc.prototype,"justifyContent",void 0),bb([(0,e.MZ)()],bc.prototype,"alignContent",void 0),bb([(0,e.MZ)()],bc.prototype,"columnGap",void 0),bb([(0,e.MZ)()],bc.prototype,"rowGap",void 0),bb([(0,e.MZ)()],bc.prototype,"gap",void 0),bb([(0,e.MZ)()],bc.prototype,"padding",void 0),bb([(0,e.MZ)()],bc.prototype,"margin",void 0),bc=bb([(0,G.E)("wui-grid")],bc);var bd=c(78366);let be=(0,j.AH)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:a})=>a["2"]};
    padding: ${({spacing:a})=>a["3"]} ${({spacing:a})=>a["0"]};
    background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:a})=>a["4"]}, 20px);
    transition:
      color ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-1"]},
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]},
      border-radius ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:a})=>a.theme.textPrimary};
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
      background-color: ${({tokens:a})=>a.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:a})=>a.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:a})=>a.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:a})=>a.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:a})=>a.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var bf=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bg=class extends d.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let a=this.wallet?.badge_type==="certified";return(0,d.qy)`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,k.J)(a?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${a?(0,d.qy)`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,d.qy)`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,k.J)(this.imageSrc)}
        name=${(0,k.J)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,d.qy)`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=t.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await t.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,o.E.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:p.I.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};bg.styles=be,bf([(0,e.wk)()],bg.prototype,"visible",void 0),bf([(0,e.wk)()],bg.prototype,"imageSrc",void 0),bf([(0,e.wk)()],bg.prototype,"imageLoading",void 0),bf([(0,e.wk)()],bg.prototype,"isImpressed",void 0),bf([(0,e.MZ)()],bg.prototype,"explorerId",void 0),bf([(0,e.MZ)()],bg.prototype,"walletQuery",void 0),bf([(0,e.MZ)()],bg.prototype,"certified",void 0),bf([(0,e.MZ)()],bg.prototype,"displayIndex",void 0),bf([(0,e.MZ)({type:Object})],bg.prototype,"wallet",void 0),bg=bf([(0,j.EM)("w3m-all-wallets-list-item")],bg);let bh=(0,j.AH)`
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
    animation-duration: ${({durations:a})=>a.xl};
    animation-timing-function: ${({easings:a})=>a["ease-inout-power-2"]};
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
    padding-top: ${({spacing:a})=>a["4"]};
    padding-bottom: ${({spacing:a})=>a["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var bi=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bj="local-paginator",bk=class extends d.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!h.N.state.wallets.length,this.wallets=h.N.state.wallets,this.recommended=h.N.state.recommended,this.featured=h.N.state.featured,this.filteredWallets=h.N.state.filteredWallets,this.mobileFullScreen=g.H.state.enableMobileFullScreen,this.unsubscribe.push(h.N.subscribeKey("wallets",a=>this.wallets=a),h.N.subscribeKey("recommended",a=>this.recommended=a),h.N.subscribeKey("featured",a=>this.featured=a),h.N.subscribeKey("filteredWallets",a=>this.filteredWallets=a))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(a=>a()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),(0,d.qy)`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let a=this.shadowRoot?.querySelector("wui-grid");a&&(await h.N.fetchWalletsByPage({page:1}),await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(a,b){return[...Array(a)].map(()=>(0,d.qy)`
        <wui-card-select-loader type="wallet" id=${(0,k.J)(b)}></wui-card-select-loader>
      `)}getWallets(){let a=[...this.featured,...this.recommended];this.filteredWallets?.length>0?a.push(...this.filteredWallets):a.push(...this.wallets);let b=f.w.uniqueBy(a,"id"),c=bd.A.markWalletsAsInstalled(b);return bd.A.markWalletsWithDisplayIndex(c)}walletsTemplate(){return this.getWallets().map((a,b)=>(0,d.qy)`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${a.id}"
          @click=${()=>this.onConnectWallet(a)}
          .wallet=${a}
          explorerId=${a.id}
          certified=${"certified"===this.badge}
          displayIndex=${b}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:a,recommended:b,featured:c,count:d,mobileFilteredOutWalletsLength:e}=h.N.state,f=window.innerWidth<352?3:4,g=a.length+b.length,i=Math.ceil(g/f)*f-g+f;return(i-=a.length?c.length%f:0,0===d&&c.length>0)?null:0===d||[...c,...a,...b].length<d-(e??0)?this.shimmerTemplate(i,bj):null}createPaginationObserver(){let a=this.shadowRoot?.querySelector(`#${bj}`);a&&(this.paginationObserver=new IntersectionObserver(([a])=>{if(a?.isIntersecting&&!this.loading){let{page:a,count:b,wallets:c}=h.N.state;c.length<b&&h.N.fetchWalletsByPage({page:a+1})}}),this.paginationObserver.observe(a))}onConnectWallet(a){m.a.selectWalletConnector(a)}};bk.styles=bh,bi([(0,e.wk)()],bk.prototype,"loading",void 0),bi([(0,e.wk)()],bk.prototype,"wallets",void 0),bi([(0,e.wk)()],bk.prototype,"recommended",void 0),bi([(0,e.wk)()],bk.prototype,"featured",void 0),bi([(0,e.wk)()],bk.prototype,"filteredWallets",void 0),bi([(0,e.wk)()],bk.prototype,"badge",void 0),bi([(0,e.wk)()],bk.prototype,"mobileFullScreen",void 0),bk=bi([(0,j.EM)("w3m-all-wallets-list")],bk);let bl=(0,d.AH)`
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
`;var bm=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bn=class extends d.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=g.H.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?(0,d.qy)`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await h.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:a}=h.N.state,b=bd.A.markWalletsAsInstalled(a);return a.length?(0,d.qy)`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${b.map((a,b)=>(0,d.qy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(a)}
              .wallet=${a}
              data-testid="wallet-search-item-${a.id}"
              explorerId=${a.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${b}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,d.qy)`
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
      `}onConnectWallet(a){m.a.selectWalletConnector(a)}};bn.styles=bl,bm([(0,e.wk)()],bn.prototype,"loading",void 0),bm([(0,e.wk)()],bn.prototype,"mobileFullScreen",void 0),bm([(0,e.MZ)()],bn.prototype,"query",void 0),bm([(0,e.MZ)()],bn.prototype,"badge",void 0),bn=bm([(0,j.EM)("w3m-all-wallets-search")],bn);var bo=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bp=class extends d.WF{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=f.w.debounce(a=>{this.search=a})}render(){let a=this.search.length>=2;return(0,d.qy)`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${a||this.badge?(0,d.qy)`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:(0,d.qy)`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(a){this.onDebouncedSearch(a.detail)}onCertifiedSwitchChange(a){a.detail?(this.badge="certified",B.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return f.w.isMobile()?(0,d.qy)`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){p.I.push("ConnectingWalletConnect")}};bo([(0,e.wk)()],bp.prototype,"search",void 0),bo([(0,e.wk)()],bp.prototype,"badge",void 0),bp=bo([(0,j.EM)("w3m-all-wallets-view")],bp);let bq=(0,H.AH)`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:a})=>a[3]};
    width: 100%;
    background-color: ${({tokens:a})=>a.theme.backgroundPrimary};
    border-radius: ${({borderRadius:a})=>a[4]};
    transition:
      background-color ${({durations:a})=>a.lg}
        ${({easings:a})=>a["ease-out-power-2"]},
      scale ${({durations:a})=>a.lg} ${({easings:a})=>a["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:a})=>a.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:a})=>a.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var br=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let bs=class extends d.WF{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",(0,d.qy)`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,k.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?(0,d.qy)`<wui-image
        icon=${this.icon}
        iconColor=${(0,k.J)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:(0,d.qy)`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?(0,d.qy)`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:(0,d.qy)`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};bs.styles=[F.W5,F.fD,bq],br([(0,e.MZ)()],bs.prototype,"imageSrc",void 0),br([(0,e.MZ)()],bs.prototype,"icon",void 0),br([(0,e.MZ)()],bs.prototype,"iconColor",void 0),br([(0,e.MZ)({type:Boolean})],bs.prototype,"loading",void 0),br([(0,e.MZ)()],bs.prototype,"tabIdx",void 0),br([(0,e.MZ)({type:Boolean})],bs.prototype,"disabled",void 0),br([(0,e.MZ)({type:Boolean})],bs.prototype,"rightIcon",void 0),br([(0,e.MZ)({type:Boolean})],bs.prototype,"rounded",void 0),br([(0,e.MZ)({type:Boolean})],bs.prototype,"fullSize",void 0),bs=br([(0,G.E)("wui-list-item")],bs);let bt=class extends d.WF{constructor(){super(...arguments),this.wallet=p.I.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,d.qy)`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,d.qy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,d.qy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,d.qy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,d.qy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(a){a.href&&this.wallet&&(o.E.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:a.type}}),f.w.openHref(a.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};bt=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([(0,j.EM)("w3m-downloads-view")],bt)}};