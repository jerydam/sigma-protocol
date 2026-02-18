"use strict";exports.id=7833,exports.ids=[7833],exports.modules={13521:(a,b,c)=>{c.r(b),c.d(b,{MfaAuthEnrollmentFlowScreen:()=>n,default:()=>n});var d=c(66150),e=c(73166),f=c(87394),g=c(7719),h=c(55164),i=c(69712),j=c(50579),k=c(2808),l=c(12883),m=c(7590);c(11765),c(43132),c(19078),c(30443),c(8752),c(91817);let n={component:()=>{let{user:a,ready:b}=(0,k.u)(),{data:c,onUserCloseViaDialogOrKeybindRef:n}=(0,k.a)(),o=(0,j.u)(),[p,q]=(0,g.useState)(null),[r,s]=(0,g.useState)(null),[t,u]=(0,g.useState)(null),[v,w]=(0,g.useState)(!1),[x,y]=(0,g.useState)(!1),[z,A]=(0,g.useState)(),B=async()=>{z?C(z):a?await D({user:a}):C(Error("Must be logged in to manage MFA")),setTimeout(()=>{q(null),s(null)},500)};if(n.current=B,!c?.mfaEnroll)throw Error("Missing modal data for MFA enrollment screen.");let{onFailure:C,onSuccess:D,onBack:E,mfaMethods:F,verify:G,generateTotpSecret:H,enrollTotp:I,unenrollTotp:J,enrollPasskey:K}=c.mfaEnroll,L=a?.mfaMethods.includes("sms"),M=a?.mfaMethods.includes("totp"),N=a?.mfaMethods.includes("passkey"),O=!!a?.phone,P=a?.linkedAccounts.filter(a=>"passkey"===a.type).map(a=>a.credentialId)??[];function Q(){q(null),s(null),A(void 0)}async function R(a=P){try{A(void 0),y(!0);let b=await K(a);return await D({user:b})}catch(a){A(a)}finally{y(!1),w(!1)}}if(!b||!a||!o)return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.M,{onClose:B,backFn:E},"header"),(0,d.jsx)(m.A,{children:(0,d.jsx)(l.M,{})}),(0,d.jsx)(m.C,{children:(0,d.jsx)(i.L,{})}),(0,d.jsx)(h.b,{})]});if("sms"===p)return null;if("totp"===p)return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.M,{backFn:Q,onClose:B},"header"),(0,d.jsx)(m.I,{style:{marginBottom:"1.5rem"},children:(0,d.jsx)(e.A,{})}),(0,d.jsx)(m.T,{children:"Remove authenticator app verification?"}),(0,d.jsxs)(m.S,{children:["MFA adds an extra layer of security to your ",o?.name," account. Make sure you have other methods to secure your account."]}),(0,d.jsx)(m.B,{children:(0,d.jsx)(h.P,{$warn:!0,onClick:async function(){try{A(void 0),y(!0);let a=await J();return await D({user:a})}catch(a){A(a)}finally{y(!1),q(null)}},loading:x,children:"Remove"})}),(0,d.jsx)(h.b,{})]});if("passkey"===p){let a=c.mfaEnroll.shouldUnlinkOnUnenrollMfa??!0;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.M,{backFn:Q,onClose:B},"header"),(0,d.jsx)(m.I,{style:{marginBottom:"1.5rem"},children:(0,d.jsx)(e.A,{})}),(0,d.jsx)(m.T,{children:"Are you sure you want to remove this passkey?"}),(0,d.jsx)(m.S,{children:a?"Removing your passkey will remove as both a verification method and a login method.":"Removing your passkey will remove as a verification method."}),(0,d.jsx)(m.B,{children:(0,d.jsx)(h.P,{$warn:!0,onClick:async function(){try{A(void 0),y(!0);let a=await K([]);return await D({user:a})}catch(a){A(a)}finally{y(!1),q(null)}},loading:x,children:"Remove"})}),(0,d.jsx)(h.b,{})]})}return 0!==F.length||L||M||N?"sms"===r?null:"totp"===r&&t?(0,d.jsx)(l.E,{onClose:B,onReset:Q,submitEnrollmentWithTotp:a=>(async function(a){try{A(void 0),y(!0);let b=await I(a);return await D({user:b})}catch(a){A(a)}finally{y(!1),q(null)}})(a.mfaCode),error:z,totpInfo:{...t,appName:o?.name||"Privy"}}):"passkey"===r?(0,d.jsx)(l.a,{onReset:Q,onClose:B,submitEnrollmentWithPasskey:R}):(0,d.jsx)(l.b,{showIntro:!0,userMfaMethods:a.mfaMethods,appMfaMethods:o.mfa.methods,userHasAuthSms:O,backFn:E,handleSelectMethod:async function(a){A(void 0);try{await G()}catch(a){return void A(a)}return"totp"===a?(s(a),u(null),void H().then(({totpSecret:a,totpAuthUrl:b})=>{u({authUrl:b,secret:a})}).catch(()=>{u(null),Q()})):"passkey"===a&&1===P.length?await R():void s(a)},isTotpLoading:"totp"===r&&!t,isPasskeyLoading:v,error:z,onClose:B,setRemovingMfaMethod:async function(a){A(void 0);try{await G()}catch(a){return void A(a)}q(a)}}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.M,{onClose:B,backFn:E},"header"),(0,d.jsx)(m.I,{style:{marginBottom:"1.5rem"},children:(0,d.jsx)(f.A,{})}),(0,d.jsx)(m.T,{children:"Add more security"}),(0,d.jsxs)(m.S,{children:[o?.name," does not have any verification methods enabled."]}),(0,d.jsx)(m.B,{children:(0,d.jsx)(h.P,{onClick:B,children:"Close"})}),(0,d.jsx)(h.b,{})]})}}},43495:(a,b,c)=>{c.d(b,{L:()=>f});var d=c(72291);let e=(0,d.i7)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,f=(0,d.AH)`
  ${a=>a.$isLoading?(0,d.AH)`
          width: 35%;
          animation: ${e} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`},84217:(a,b,c)=>{c.d(b,{C:()=>g});var d=c(66150),e=c(72291),f=c(43495);let g=({children:a,color:b,isLoading:c,isPulsing:e,...f})=>(0,d.jsx)(h,{$color:b,$isLoading:c,$isPulsing:e,...f,children:a}),h=e.I4.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${a=>{let b,c;"green"===a.$color&&(b="var(--privy-color-success-dark)",c="var(--privy-color-success-light)"),"red"===a.$color&&(b="var(--privy-color-error)",c="var(--privy-color-error-light)"),"gray"===a.$color&&(b="var(--privy-color-foreground-2)",c="var(--privy-color-background-2)");let d=(0,e.i7)`
      from, to {
        background-color: ${c};
      }

      50% {
        background-color: rgba(${c}, 0.8);
      }
    `;return(0,e.AH)`
      color: ${b};
      background-color: ${c};
      ${a.$isPulsing&&(0,e.AH)`
        animation: ${d} 3s linear infinite;
      `};
    `}}

  ${f.L}
`}};