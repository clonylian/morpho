import{n as i,t as s,S as o,r,j as e,a as I,T as a,u as k,b as a2,c as Z,G as E,B as L2,R as c2,d as N,D as l2,e as V2,f as F,O as H2,g as M2,h as A2,i as I2,k as k2,A as Z2,l as E2,F as B2,m as R2,o as S2,V as N2,p as F2,q as T2,L as P2}from"./Layout-xOfjQGKi.js";import{M as G,V as d2}from"./MorphoBlobVideo-5Si42a__.js";import{E as B,a as J}from"./ExternalLink-vQTg2BfI.js";const b=["Secure","Efficient","Flexible"],p2=2e3,g2=i.div`
  ${s.mixins.h3}
  position:relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.45s ease-in-out;
  width: 6.5ch; // for longest word "Efficient"

  height: 1lh;
  overflow: hidden;
  /* border: 1px solid red; */
`,T=i.span`
  position: absolute;
  transition: top 0.9s cubic-bezier(0.77, 0, 0.175, 1);

  &.disappearing {
    top: -1lh;
  }

  &.sliding {
    top: 0lh;
  }

  &.below {
    top: 1lh;
  }

  &.Secure {
    letter-spacing: 2px;
  }

  &.Flexible {
    letter-spacing: 1px;
  }
`,h2=i(o)`
  // The text is not visible at first and one line below it's original position, then slide up and as it slide it becomes visible
  transform: translateY(-25px);
`,O2=async()=>{const t=new URL("https://api.morpho.org/metrics");t.searchParams.append("format","commas"),t.searchParams.append("digits","0");const n=await(await fetch(t)).json();return{morphoTotalSupplyUSD:n.morphoTotalSupplyUSD.global,morphoTotalBorrowUSD:n.morphoTotalBorrowUSD.global,morphoTotalInP2PUSD:n.morphoSupplyInP2PUSD.global}},x2=({className:t})=>{const[n,c]=r.useState({morphoTotalSupplyUSD:"-",morphoTotalBorrowUSD:"-",morphoTotalInP2PUSD:"-"});return r.useEffect(()=>{O2().then(l=>c(l))},[]),n.morphoTotalSupplyUSD==="-"?null:e.jsxs(Y2,{className:I(t),children:[e.jsxs(_,{className:"number-stack",children:[e.jsx(a,{type:"button",style:{color:s.colors.greyscales400},children:"TOTAL SUPPLY"}),e.jsxs($,{children:["$",n.morphoTotalSupplyUSD]})]}),e.jsxs(_,{className:"number-stack",children:[e.jsx(a,{type:"button",style:{color:s.colors.greyscales400},children:"TOTAL BORROW"}),e.jsxs($,{children:["$",n.morphoTotalBorrowUSD]})]})]})},Y2=i(o)``,$=i.span`
  font-family: FKGrotesk-Regular, Helvetica;
  color: ${s.colors.primaryWhite};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 3.84px;

  ${s.breakpoints.down("mobile")} {
    font-size: 24px;
    letter-spacing: 2.88px;
  }
`,_=i(o)`
  flex-direction: column;
  gap: 12px;
`,z2=({className:t})=>{const[n,c]=r.useState(window.innerHeight),[l,g]=r.useState(0),[p,x]=r.useState(2),[d,u]=r.useState(["sliding","disappearing"]),[m,V]=r.useState(!1),j=()=>{V(!0)},f=r.useCallback(()=>{u(["below","sliding"]),setTimeout(()=>u(["sliding","disappearing"]),45)},[]);return r.useEffect(()=>{if(!m)return;const w=setInterval(()=>{g(C=>C+1),x(C=>C+1),f()},p2);return()=>clearInterval(w)},[f,m]),r.useEffect(()=>{const w=()=>{document.documentElement.scrollTop===0&&c(window.innerHeight)};return window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),e.jsxs(D2,{className:I("foundation-for-decentralized-lending",t),viewportHeight:n.toString()+"px",children:[e.jsx(G2,{children:e.jsx(G,{onFirstFrameRendered:j})}),e.jsxs(U2,{children:[m&&e.jsxs(h2,{direction:"column",gap:40,children:[e.jsxs("div",{children:[e.jsx(o,{justify:"center",children:e.jsx(a,{type:"h6",children:"Earn, Borrow"})}),e.jsx(o,{justify:"center",children:e.jsx(a,{type:"h6",children:"and Build on Morpho"})})]}),e.jsxs(o,{direction:"column",justify:"center",align:"center",children:[e.jsxs(o,{justify:"center",children:[e.jsx(a,{type:"mobileTitle",children:"The Most"}),e.jsxs(Q2,{children:[e.jsx(T,{className:`${d[0]} ${b[l%3]}`,children:b[l%3]},l),e.jsx(T,{className:`${d[1]} ${b[p%3]}`,children:b[p%3]},p)]})]}),e.jsx(o,{justify:"center",children:e.jsx(a,{type:"mobileTitle",children:"Lending Protocol"})})]})]}),e.jsx(W2,{})]})]})},D2=i.div`
  background-color: ${s.colors.greyscales900};
  ${({viewportHeight:t})=>`height: ${t};`};
`,U2=i.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`,G2=i.div`
  mix-blend-mode: lighten;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  top: 0;
`,W2=i(x2)`
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  gap: 24px;
  bottom: 40px;
  .number-stack {
    gap: px;
    align-items: center;
  }
  ${s.breakpoints.heightUp(800)} {
    .number-stack {
      gap: 4px;
    }
    gap: 20px;
    bottom: 87px;
  }
  ${s.breakpoints.heightDown(700)} {
    gap: 12px;
    bottom: 8px;
  }
`,Q2=i(g2)`
  ${s.mixins.mobileTitle}
`,q2=({className:t})=>{const n=k(),c=a2(),[l,g]=r.useState(0),[p,x]=r.useState(2),[d,u]=r.useState(["sliding","disappearing"]),[m,V]=r.useState(!1),j=()=>{V(!0)},f=r.useCallback(()=>{u(["below","sliding"]),setTimeout(()=>u(["sliding","disappearing"]),45)},[]);return r.useEffect(()=>{if(!m)return;const w=setInterval(()=>{x(C=>C+1),g(C=>C+1),f()},p2);return()=>clearInterval(w)},[f,m]),n?e.jsx(z2,{}):e.jsxs(X2,{className:I("foundation-for-decentralized-lending",t),children:[e.jsx(J2,{children:e.jsx(G,{onFirstFrameRendered:j})}),!c&&e.jsx($2,{children:e.jsx(G,{onFirstFrameRendered:j,offset:4})}),e.jsxs(K2,{children:[m&&e.jsxs(h2,{direction:"column",gap:40,children:[e.jsx(o,{justify:"center",children:e.jsx(a,{type:"h6",style:{color:s.colors.primaryWhite},children:"Earn, Borrow and Build on Morpho"})}),e.jsxs(o,{direction:"column",justify:"center",align:"center",children:[e.jsxs(e0,{children:[e.jsx(a,{type:"h3",children:"The Most"}),e.jsxs(g2,{children:[e.jsx(T,{className:`${d[0]} ${b[l%3]}`,children:b[l%3]},l),e.jsx(T,{className:`${d[1]} ${b[p%3]}`,children:b[p%3]},p)]})]}),e.jsx(o,{justify:"center",children:e.jsx(a,{type:"h3",children:"Lending Protocol"})})," "]})]}),e.jsx(_2,{})]})]})},X2=i.div`
  background-color: ${s.colors.greyscales900};
  ${s.breakpoints.up("large")} {
    background-color: unset;
  }
  ${s.breakpoints.down("mobile")} {
    ${({viewportHeight:t})=>t&&`height: calc(${t});`};
  }
  ${s.breakpoints.heightDown(350)} {
    height: inherit;
  }
`,K2=i.div`
  --padding: 60px;
  position: relative;
  padding: var(--padding);
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 2 * var(--padding));
`,J2=i(d2)`
  left: 0;
  top: 0;
  ${s.breakpoints.up("xlarge")} {
    width: 100%;
  }
`,$2=i(d2)`
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
`,_2=i(x2)`
  gap: 60px;
  position: absolute;
  bottom: var(--padding);
  left: var(--padding);
`,e0=i.div`
  display: flex;
  justify-content: center;
`,t0="/assets/infinity-qaWNyCwR.png",i0="/assets/sphere-in-cube-Soqmhf5M.png",s0="/assets/stone-cy6PpFLM.png",n0="/assets/MorphoBlue-AnimatedLogo-1-gtN8JilV.mp4",o0=({className:t})=>e.jsxs(r0,{className:t,children:[e.jsx(W,{}),e.jsx(a0,{className:"second-bar"}),e.jsx(c0,{className:"third-bar"})]}),r0=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,W=i.div`
  border-radius: 20px;
  background-color: ${s.colors.primaryWhite};
  width: 12px;
  height: 1.4px;
  transition: width 0.3s ease-in-out;
`,a0=i(W)`
  width: 8px;
`,c0=i(W)`
  width: 4px;
`,O=({className:t,title:n,description:c,image:l})=>Z()?e.jsxs(m2,{children:[e.jsx(o,{justify:"center",children:e.jsx(e2,{src:l,className:"image"})}),e.jsx(a,{type:"h6",children:n}),e.jsx(t2,{type:"S",style:{textAlign:"center"},children:c})]}):e.jsxs(l0,{className:I("animated-card",t),children:[e.jsx(o,{justify:"center",children:e.jsx(e2,{src:l,className:"image"})}),e.jsx(d0,{children:e.jsxs(p0,{className:"text-container",children:[e.jsx(a,{type:"h6",className:"title-text",children:n}),e.jsx(t2,{type:"M",children:c})]})}),e.jsx(g0,{children:e.jsx(o0,{})})]}),m2=i.div`
  --padding: 40px;
  --height: 400px;
  padding: var(--padding);
  padding: var(--padding);
  background-color: ${s.colors.greyscales850};
  border-radius: 24px;
  ${s.breakpoints.down("medium")} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: unset;
  }
`,l0=i(m2)`
  --transition-duration: 0.3s;
  z-index: 1;
  width: 100%;
  position: relative;
  aspect-ratio: 373/431;
  max-height: 431px;

  :hover {
    .image {
      transform: rotate(-4deg) translateY(-70px);
    }

    .text-container {
      transform: translateY(0%);
    }

    .second-bar {
      width: 12px;
    }

    .third-bar {
      width: 12px;
    }
  }

  ${s.breakpoints.down("medium")} {
    width: unset;
    // unselectable
    user-select: none;
  }
`,d0=i.div`
  position: absolute;
  bottom: var(--padding);
  overflow: hidden;
`,e2=i.img`
  width: 100%;
  max-width: 373px;
  transition: transform var(--transition-duration) ease-in-out;
`,p0=i.div`
  transform: translateY(calc(100% - 38px)); // 38px is the height the title text
  transition: transform var(--transition-duration) ease-in-out;
`,t2=i(a)`
  display: block;
  padding-top: 16px;
  color: ${s.colors.greyscales400};
`,g0=i.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: var(--padding);
  right: var(--padding);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${s.colors.greyscales700};
  z-index: -1;
`,h0=()=>{const t=Z();return e.jsxs(x0,{children:[e.jsxs(o,{direction:"column",gap:60,align:"center",style:{marginBottom:120},children:[e.jsx(m0,{playsInline:!0,autoPlay:!0,muted:!0,controls:!1,src:n0}),e.jsxs(a,{type:"h6",style:{textAlign:"center",textWrap:"pretty"},children:["A trustless and efficient lending primitive ",e.jsx("br",{})," with permissionless market creation."]})]}),e.jsx(o,{justify:"end",children:e.jsx(B,{href:L2,text:"READ MORPHO BLUE WHITEPAPER"})}),e.jsxs(o,{gap:20,direction:t?"column":"row",style:{paddingTop:t?32:40},children:[e.jsx(O,{title:"Secure",description:e.jsxs(e.Fragment,{children:["Simple, formally verified, ",e.jsx("br",{}),"and immutable code ",e.jsx("br",{}),"base audited by the best ",e.jsx("br",{}),"security firms in the world."]}),image:i0}),e.jsx(O,{title:"Efficient",description:e.jsxs(e.Fragment,{children:["Better rates, higher ",e.jsx("br",{}),"collateralization factors, and ",e.jsx("br",{}),"significantly cheaper gas costs ",e.jsx("br",{})," than existing lending platforms."]}),image:s0}),e.jsx(O,{title:"Flexible",description:e.jsxs(e.Fragment,{children:["Landing markets for any asset, ",e.jsx("br",{}),"with configurable parameters,",e.jsx("br",{}),"allowing for diverse risk exposures."]}),image:t0})]}),!t&&e.jsxs(e.Fragment,{children:[e.jsx(C0,{className:"gradient-left"}),e.jsx(c2,{children:e.jsx(u0,{className:"gradient-right"})})]})]})},x0=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 160px 20px 0 20px;
  ${s.breakpoints.down("mobile")} {
    padding: 96px 20px;
  }
`,m0=i.video`
  mix-blend-mode: lighten;
  width: 446px;
  ${s.breakpoints.down("mobile")} {
    width: 80%;
  }
`,C0=i(E)`
  top: 0;
  transform: translateX(-70%);
`,u0=i(E)`
  width: 100%; // it's inside GradientContainerRight that is 50% width
  transform: translateX(70%);
`,M="/assets/borrow-rttkvwLg.png",A="/assets/build-LMA77iK5.png",L="/assets/earn-622fPrf9.png",C2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1524_18812)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1555%2013.4333C21.701%2013.4385%2022.1475%2013.885%2022.1527%2014.4305L22.1908%2018.3814C22.1933%2018.6434%2022.0916%2018.8936%2021.9082%2019.0771C21.7247%2019.2606%2021.4745%2019.3622%2021.2125%2019.3597L17.2615%2019.3218C16.7159%2019.3166%2016.2695%2018.8701%2016.2642%2018.3246C16.259%2017.7791%2016.697%2017.3411%2017.2425%2017.3463L18.7846%2017.3611L12.2029%2010.8711L8.96976%2013.6927C8.58172%2014.0313%207.99173%2014.0061%207.6205%2013.6349L2.63409%208.6488C2.24464%208.25938%202.23862%207.63398%202.62064%207.25194C3.00266%206.86989%203.62805%206.87587%204.0175%207.26529L8.34422%2011.5917L11.5724%208.77435C11.9584%208.43745%2012.5448%208.4605%2012.9166%208.82718L20.1926%2016.0017L20.1773%2014.4116C20.172%2013.8661%2020.61%2013.4281%2021.1555%2013.4333Z'%20fill='%235792FF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1524_18812'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Q="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1524_20234)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1555%2011.4392C21.701%2011.434%2022.1475%2010.9876%2022.1527%2010.4421L22.1908%206.49113C22.1933%206.22916%2022.0916%205.97891%2021.9082%205.79545C21.7247%205.61198%2021.4745%205.51033%2021.2125%205.51284L17.2615%205.55075C16.7159%205.55598%2016.2695%206.00245%2016.2642%206.54796C16.259%207.09347%2016.697%207.53145%2017.2425%207.52621L18.7846%207.51142L12.2029%2014.0015L8.96976%2011.1799C8.58172%2010.8412%207.99173%2010.8665%207.6205%2011.2377L2.63409%2016.2237C2.24464%2016.6132%202.23862%2017.2386%202.62064%2017.6206C3.00266%2018.0027%203.62805%2017.9967%204.0175%2017.6073L8.34422%2013.2808L11.5724%2016.0982C11.9584%2016.4351%2012.5448%2016.412%2012.9166%2016.0454L20.1926%208.8708L20.1773%2010.4609C20.172%2011.0065%2020.61%2011.4445%2021.1555%2011.4392Z'%20fill='%235792FF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1524_20234'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",u2="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2010C0%2015.5228%204.47715%2020%2010%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010ZM2%2010C2%205.58172%205.58172%202%2010%202C14.4183%202%2018%205.58172%2018%2010C18%2014.4183%2014.4183%2018%2010%2018C5.58172%2018%202%2014.4183%202%2010ZM11%204C11%203.44772%2010.5523%203%2010%203C9.44772%203%209%203.44772%209%204V5C7.34315%205%206%206.34315%206%208C6%209.65685%207.34315%2011%209%2011H11C11.5523%2011%2012%2011.4477%2012%2012C12%2012.5523%2011.5523%2013%2011%2013H7.5C6.94772%2013%206.5%2013.4477%206.5%2014C6.5%2014.5523%206.94772%2015%207.5%2015H9V16C9%2016.5523%209.44772%2017%2010%2017C10.5523%2017%2011%2016.5523%2011%2016V15C12.6569%2015%2014%2013.6569%2014%2012C14%2010.3431%2012.6569%209%2011%209H9C8.44772%209%208%208.55228%208%208C8%207.44772%208.44772%207%209%207H12.5C13.0523%207%2013.5%206.55228%2013.5%206C13.5%205.44772%2013.0523%205%2012.5%205H11V4Z'%20fill='%235792FF'/%3e%3c/svg%3e",f2="data:image/svg+xml,%3csvg%20width='20'%20height='14'%20viewBox='0%200%2020%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.35702%206.58148C2.26075%206.74003%202.18081%206.88132%202.11667%207C2.18081%207.11868%202.26075%207.25997%202.35702%207.41852C2.6697%207.93352%203.14858%208.62085%203.80913%209.30586C5.12574%2010.6712%207.13149%2012%2010%2012C12.8685%2012%2014.8743%2010.6712%2016.1909%209.30586C16.8514%208.62085%2017.3303%207.93352%2017.643%207.41852C17.7392%207.25997%2017.8192%207.11868%2017.8833%207C17.8192%206.88132%2017.7392%206.74003%2017.643%206.58148C17.3303%206.06648%2016.8514%205.37915%2016.1909%204.69414C14.8743%203.32877%2012.8685%202%2010%202C7.13149%202%205.12574%203.32877%203.80913%204.69414C3.14858%205.37915%202.6697%206.06648%202.35702%206.58148ZM19.9188%207.3948C19.919%207.39435%2019.9191%207.39392%2019%207L19.9191%207.39392C20.027%207.14237%2020.027%206.85763%2019.9191%206.60608L19%207C19.9191%206.60608%2019.919%206.60565%2019.9188%206.6052L19.9183%206.60418L19.9173%206.60172L19.9144%206.59516L19.9058%206.57558C19.8987%206.5597%2019.889%206.53821%2019.8766%206.51151C19.8518%206.4581%2019.8162%206.38371%2019.7696%206.29133C19.6763%206.10672%2019.5383%205.84937%2019.3526%205.54352C18.9822%204.93352%2018.4164%204.12085%2017.6306%203.30586C16.0543%201.67123%2013.5601%200%2010%200C6.43994%200%203.94569%201.67123%202.36944%203.30586C1.58356%204.12085%201.0178%204.93352%200.647445%205.54352C0.461748%205.84937%200.323696%206.10672%200.230449%206.29133C0.183788%206.38371%200.148232%206.4581%200.123439%206.51151C0.111039%206.53821%200.10132%206.5597%200.0942391%206.57558L0.0855879%206.59516L0.0827339%206.60172L0.0816728%206.60418L0.0812335%206.6052C0.0810393%206.60565%200.0808549%206.60608%200.999965%206.99999L0.080855%206.60608C-0.0269517%206.85763%20-0.0269517%207.14237%200.080855%207.39392L0.999965%207.00001C0.0808549%207.39392%200.0810393%207.39435%200.0812335%207.3948L0.0816728%207.39582L0.0827339%207.39828L0.0855879%207.40484L0.0942391%207.42442C0.10132%207.4403%200.111039%207.46179%200.123439%207.48849C0.148232%207.5419%200.183788%207.61629%200.230449%207.70867C0.323696%207.89328%200.461748%208.15063%200.647445%208.45648C1.0178%209.06648%201.58356%209.87915%202.36944%2010.6941C3.94569%2012.3288%206.43994%2014%2010%2014C13.5601%2014%2016.0543%2012.3288%2017.6306%2010.6941C18.4164%209.87915%2018.9822%209.06648%2019.3526%208.45648C19.5383%208.15063%2019.6763%207.89328%2019.7696%207.70867C19.8162%207.61629%2019.8518%207.5419%2019.8766%207.48849C19.889%207.46179%2019.8987%207.4403%2019.9058%207.42442L19.9144%207.40484L19.9173%207.39828L19.9183%207.39582L19.9188%207.3948ZM10%209C8.89543%209%208%208.10457%208%207C8%205.89543%208.89543%205%2010%205C11.1046%205%2012%205.89543%2012%207C12%208.10457%2011.1046%209%2010%209ZM6%207C6%204.79086%207.79086%203%2010%203C12.2091%203%2014%204.79086%2014%207C14%209.20914%2012.2091%2011%2010%2011C7.79086%2011%206%209.20914%206%207Z'%20fill='%235792FF'/%3e%3c/svg%3e",w2="data:image/svg+xml,%3csvg%20width='21'%20height='13'%20viewBox='0%200%2021%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.745605%2010.4068C0.745605%205.02434%205.10893%200.661011%2010.4914%200.661011C15.8738%200.661011%2020.2371%205.02434%2020.2371%2010.4068V11.3814C20.2371%2011.9196%2019.8008%2012.3559%2019.2626%2012.3559C18.7243%2012.3559%2018.288%2011.9196%2018.288%2011.3814V10.4068C18.288%206.10083%2014.7973%202.61016%2010.4914%202.61016C6.18542%202.61016%202.69476%206.10083%202.69476%2010.4068V11.3814C2.69476%2011.9196%202.25843%2012.3559%201.72018%2012.3559C1.18194%2012.3559%200.745605%2011.9196%200.745605%2011.3814V10.4068ZM13.9998%205.72881C14.4304%206.05176%2014.5177%206.66262%2014.1948%207.09322L12.2842%209.64065C12.3848%209.87582%2012.4405%2010.1348%2012.4405%2010.4068C12.4405%2011.4833%2011.5679%2012.3559%2010.4914%2012.3559C9.41488%2012.3559%208.54222%2011.4833%208.54222%2010.4068C8.54222%209.33029%209.41488%208.45762%2010.4914%208.45762C10.5703%208.45762%2010.6482%208.46232%2010.7247%208.47144L12.6354%205.92373C12.9584%205.49313%2013.5692%205.40586%2013.9998%205.72881Z'%20fill='%235792FF'/%3e%3c/svg%3e",v2="data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.4863%207.31043C21.3955%207.85519%2020.8802%208.22315%2020.3354%208.1323C19.7907%208.04144%2019.4227%207.52617%2019.5136%206.98141L19.628%206.2953L4.13487%2016.8862C3.67893%2017.1978%203.05666%2017.0809%202.74499%2016.6249C2.43332%2016.169%202.55027%2015.5467%203.00621%2015.2351L18.5147%204.63371L17.7895%204.4776C17.2496%204.36137%2016.9062%203.82946%2017.0224%203.28954C17.1386%202.74963%2017.6705%202.40616%2018.2105%202.5224L21.2107%203.16831C21.7329%203.28072%2022.0745%203.78359%2021.9867%204.31042L21.4863%207.31043ZM17%2013.5C17%2012.9477%2017.4477%2012.5%2018%2012.5H21C21.5523%2012.5%2022%2012.9477%2022%2013.5C22%2014.0523%2021.5523%2014.5%2021%2014.5H18C17.4477%2014.5%2017%2014.0523%2017%2013.5ZM10.5%2016.5C9.94772%2016.5%209.5%2016.9477%209.5%2017.5C9.5%2018.0523%209.94772%2018.5%2010.5%2018.5H13.5C14.0523%2018.5%2014.5%2018.0523%2014.5%2017.5C14.5%2016.9477%2014.0523%2016.5%2013.5%2016.5H10.5ZM2%2021.5C2%2020.9477%202.44772%2020.5%203%2020.5H6C6.55228%2020.5%207%2020.9477%207%2021.5C7%2022.0523%206.55228%2022.5%206%2022.5H3C2.44772%2022.5%202%2022.0523%202%2021.5ZM9.5%2021.5C9.5%2020.9477%209.94772%2020.5%2010.5%2020.5H13.5C14.0523%2020.5%2014.5%2020.9477%2014.5%2021.5C14.5%2022.0523%2014.0523%2022.5%2013.5%2022.5H10.5C9.94772%2022.5%209.5%2022.0523%209.5%2021.5ZM17%2021.5C17%2020.9477%2017.4477%2020.5%2018%2020.5H21C21.5523%2020.5%2022%2020.9477%2022%2021.5C22%2022.0523%2021.5523%2022.5%2021%2022.5H18C17.4477%2022.5%2017%2022.0523%2017%2021.5ZM18%2016.5C17.4477%2016.5%2017%2016.9477%2017%2017.5C17%2018.0523%2017.4477%2018.5%2018%2018.5H21C21.5523%2018.5%2022%2018.0523%2022%2017.5C22%2016.9477%2021.5523%2016.5%2021%2016.5H18Z'%20fill='%235792FF'/%3e%3c/svg%3e",q="data:image/svg+xml,%3csvg%20width='15'%20height='21'%20viewBox='0%200%2015%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.59316%207.57625V6.60167C3.59316%204.4487%205.33849%202.70337%207.49147%202.70337C9.64444%202.70337%2011.3898%204.4487%2011.3898%206.60167V7.57625L3.59316%207.57625ZM1.64401%207.91253V6.60167C1.64401%203.37221%204.26201%200.754211%207.49147%200.754211C10.7209%200.754211%2013.3389%203.37221%2013.3389%206.60167V7.91253C13.9252%208.28993%2014.3135%208.94831%2014.3135%209.69739V13.4237C14.3135%2017.1914%2011.2592%2020.2457%207.49147%2020.2457C3.72376%2020.2457%200.669434%2017.1914%200.669434%2013.4237V9.69739C0.669434%208.94831%201.05772%208.28993%201.64401%207.91253ZM2.79057%209.5254C2.69559%209.5254%202.61859%209.6024%202.61859%209.69739L2.61859%2013.4237C2.61859%2016.1149%204.80025%2018.2966%207.49147%2018.2966C10.1827%2018.2966%2012.3643%2016.1149%2012.3643%2013.4237V9.69739C12.3643%209.6024%2012.2873%209.5254%2012.1924%209.5254H11.3898H3.59316H2.79057ZM7.49147%2011.4746C8.56796%2011.4746%209.44062%2012.3472%209.44062%2013.4237C9.44062%2014.5002%208.56796%2015.3729%207.49147%2015.3729C6.41498%2015.3729%205.54232%2014.5002%205.54232%2013.4237C5.54232%2012.3472%206.41498%2011.4746%207.49147%2011.4746Z'%20fill='%235792FF'/%3e%3c/svg%3e",j2="data:image/svg+xml,%3csvg%20width='18'%20height='22'%20viewBox='0%200%2018%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.99985%2015.0678C8.20447%2015.0678%207.56675%2015.1215%207.02264%2015.2012C4.77976%2015.5296%202.89816%2017.8115%202.89816%2020.1526C2.89816%2020.7142%202.44285%2021.1695%201.88121%2021.1695C1.31956%2021.1695%200.864258%2020.7142%200.864258%2020.1526C0.864258%2017.5155%202.51674%2014.9253%204.89046%2013.7626C3.06971%2012.4732%201.88121%2010.35%201.88121%207.94915C1.88121%204.01763%205.06833%200.830505%208.99985%200.830505C12.9314%200.830505%2016.1185%204.01763%2016.1185%207.94915C16.1185%2010.35%2014.93%2012.4732%2013.1092%2013.7626C15.483%2014.9253%2017.1354%2017.5155%2017.1354%2020.1526C17.1354%2020.7142%2016.6801%2021.1695%2016.1185%2021.1695C15.5568%2021.1695%2015.1015%2020.7142%2015.1015%2020.1526C15.1015%2017.8115%2013.2199%2015.5296%2010.9771%2015.2012C10.433%2015.1215%209.79523%2015.0678%208.99985%2015.0678ZM8.99985%2013.0339C6.19162%2013.0339%203.9151%2010.7574%203.9151%207.94915C3.9151%205.14092%206.19162%202.8644%208.99985%202.8644C11.8081%202.8644%2014.0846%205.14092%2014.0846%207.94915C14.0846%2010.7574%2011.8081%2013.0339%208.99985%2013.0339Z'%20fill='%235792FF'/%3e%3c/svg%3e",X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.33333%207.91675C2.33333%2011.3685%205.13155%2014.1667%208.58333%2014.1667C10.0264%2014.1667%2011.3552%2013.6777%2012.4131%2012.8563C12.4529%2012.9406%2012.5077%2013.0196%2012.5774%2013.0893L17.5774%2018.0893C17.9028%2018.4148%2018.4305%2018.4148%2018.7559%2018.0893C19.0814%2017.7639%2019.0814%2017.2363%2018.7559%2016.9108L13.7559%2011.9108C13.6862%2011.8411%2013.6072%2011.7863%2013.5229%2011.7465C14.3443%2010.6886%2014.8333%209.35978%2014.8333%207.91675C14.8333%204.46497%2012.0351%201.66675%208.58333%201.66675C5.13155%201.66675%202.33333%204.46497%202.33333%207.91675ZM4%207.91675C4%205.38544%206.05203%203.33341%208.58333%203.33341C11.1146%203.33341%2013.1667%205.38544%2013.1667%207.91675C13.1667%2010.4481%2011.1146%2012.5001%208.58333%2012.5001C6.05203%2012.5001%204%2010.4481%204%207.91675Z'%20fill='%235792FF'/%3e%3c/svg%3e",f0=t=>{const[n,c]=r.useState({}),[l,g]=r.useState(!1);return r.useEffect(()=>{if(t.length===0){g(!0);return}let p=0;t.forEach(x=>{const d=new Image;d.onload=()=>{c(u=>({...u,[x]:d})),p++,p===t.length&&g(!0)},d.src=x})},[t]),{loadedImages:n,allLoaded:l}},y2=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  width: ${({size:t})=>t??"24px"};
  height: ${({size:t})=>t??"24px"};
`,Y=r.forwardRef(({className:t,title:n,subTitle:c,externalLink:l,properties:g,opacity:p},x)=>e.jsx(w0,{ref:x,className:t,opacity:p,children:e.jsxs(v0,{children:[e.jsxs(o,{direction:"column",gap:32,children:[e.jsxs(o,{direction:"column",gap:16,children:[e.jsx(a,{type:"h3",children:n}),e.jsx(a,{type:"h6",style:{color:s.colors.greyscales400},children:c})]}),e.jsx(B,{href:l.href,text:l.text,style:{marginTop:100}})]}),e.jsx(j0,{children:g.map(d=>e.jsxs(r.Fragment,{children:[e.jsx(y2,{children:e.jsx("img",{src:d.image,alt:`${d.text} icon`})}),e.jsx(a,{type:"L",children:d.text})]},d.text))})]})})),w0=i.div`
  display: flex;
  flex-direction: column;
  max-width: 530px;
  :last-child {
    margin-bottom: 220px;
  }
  opacity: ${({opacity:t})=>t+.25};
`,v0=i.div`
  display: flex;
  justify-content: space-between;
`,j0=i.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 32px;
  align-items: center;
`,y0=[L,M,A],b0=()=>{const{loadedImages:t,allLoaded:n}=f0(y0),[c,l]=r.useState(L),g=r.useRef(null),p=r.useRef(null),x=r.useRef(null),[d,u]=r.useState({[L]:1,[M]:0,[A]:0}),m=r.useRef(null),V=r.useRef(null);return r.useEffect(()=>{m.current&&(m.current.style.backgroundImage=`url(${t[c].src})`)},[c,t]),r.useEffect(()=>{const j={root:null,threshold:Array.from({length:21},(w,C)=>C/20),rootMargin:"-25% 0px -25% 0px"},f=new IntersectionObserver(w=>{w.forEach(C=>{C.target===g.current&&u(H=>({...H,[L]:C.intersectionRatio})),C.target===p.current&&u(H=>({...H,[M]:C.intersectionRatio})),C.target===x.current&&u(H=>({...H,[A]:C.intersectionRatio}))})},j);return g.current&&f.observe(g.current),p.current&&f.observe(p.current),x.current&&f.observe(x.current),()=>{f.disconnect()}},[]),r.useEffect(()=>{const j=Object.keys(d).reduce((f,w)=>d[f]>d[w]?f:w);d[j]>.5&&l(j)},[d]),e.jsxs(L0,{children:[e.jsxs(V0,{className:"image-container",id:"image-container",ref:V,children:[e.jsx(A0,{}),n&&e.jsx(H0,{"aria-label":"Earn Borrow Build image",className:"all-loaded image",ref:m})]}),e.jsxs(M0,{className:"sections-container",children:[e.jsx(Y,{ref:g,title:"Earn",subTitle:"Via MetaMorpho Vaults",externalLink:{href:N+"/",text:"EARN NOW"},properties:[{image:X,text:"Curated Risk"},{image:Q,text:"Better Yield"},{image:f2,text:"Transparent"}],opacity:d[L]},1),e.jsx(Y,{ref:p,title:"Borrow",subTitle:"On Morpho Blue",externalLink:{href:N+"/borrow",text:"BORROW NOW"},properties:[{image:C2,text:"Lower costs"},{image:v2,text:"Higher LLTV"},{image:u2,text:"Any asset"}],opacity:d[M]},2),e.jsx(Y,{ref:x,title:"Build",subTitle:"On Morpho Blue",externalLink:{href:l2,text:"BUILD NOW"},properties:[{image:j2,text:"Unopinionated"},{image:q,text:"Immutable"},{image:w2,text:"Ultra-efficient"}],opacity:d[A]},3)]})]})},L0=i.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 80px;
  ${s.breakpoints.up("xlarge")} {
    padding: 180px 80px 180px 80px;
  }
`,V0=i.div`
  // This mask is fixed to the viewport until the end of the section has been reached
  height: 550px; // important, otherwise sticky position doesn't work
  position: sticky;
  top: 20vh;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  mix-blend-mode: lighten;
`,H0=i.div`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  // change the background smoothly
  transition: background-image 0.4s ease-in-out;
`,M0=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  gap: 40vh;
`,A0=i(E)`
  z-index: unset; // we want the gradient to blend with the image
  height: 1200px;
  width: 100%; // the gradient is 100% of the container (should be 50% of the viewport)
  left: -85%;
  top: -50%;
`,z=({image:t,title:n,subTitle:c,externalLink:l,properties:g,inverted:p})=>{const x=V2(),d=()=>e.jsx(k0,{children:e.jsx(Z0,{src:t,alt:`${n} image`})}),u=()=>e.jsxs(o,{direction:"column",gap:20,children:[e.jsxs(o,{direction:"column",gap:4,children:[e.jsx(a,{type:"h5",children:n}),e.jsx(a,{type:"S",style:{color:s.colors.greyscales400,width:x?"80%":""},children:c})]}),e.jsx(E0,{children:g.map(m=>e.jsxs(r.Fragment,{children:[e.jsx(y2,{children:e.jsx("img",{src:m.image,alt:`${m.text} icon`})}),e.jsx(a,{type:"S",children:m.text})]},m.text))}),e.jsx(B,{href:l.href,text:l.text,style:{marginTop:100}})]});return e.jsxs(I0,{children:[p&&e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(d,{})]}),!p&&e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(u,{})]})]})},I0=i.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`,k0=i.div`
  position: relative;
  width: 160px;
  height: 160px;
  overflow: hidden;
`,Z0=i.img`
  position: absolute;
  object-fit: contain;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
`,E0=i.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 8px;
  row-gap: 8px;
  align-items: center;
`,B0=()=>e.jsxs(R0,{direction:"column",gap:100,children:[e.jsx(z,{inverted:!0,image:L,title:"Earn",subTitle:"Via MetaMorpho Vaults",externalLink:{href:N+"/",text:"EARN NOW"},properties:[{image:X,text:"Curated Risk"},{image:Q,text:"Better Yield"},{image:f2,text:"Transparent"}]},1),e.jsx(z,{image:M,title:"Borrow",subTitle:"On Morpho Blue",externalLink:{href:N+"/borrow",text:"BORROW NOW"},properties:[{image:C2,text:"Lower costs"},{image:v2,text:"Higher LLTV"},{image:u2,text:"Any asset"}]},2),e.jsx(z,{inverted:!0,image:A,title:"Build",subTitle:"On Morpho Blue",externalLink:{href:l2,text:"BUILD NOW"},properties:[{image:j2,text:"Unopinionated"},{image:q,text:"Immutable"},{image:w2,text:"Ultra-efficient"}]},3)]}),R0=i(o)`
  padding: 24px;
`,S0=()=>Z()?e.jsx(B0,{}):e.jsx(b0,{}),N0=()=>e.jsx(F0,{justify:"center",align:"center"}),F0=i(o)`
  ${s.breakpoints.down("medium")} {
    min-height: 96px;
  }
`;i(o)`
  position: absolute;
  .appears-up-title {
    animation: appearSlideUp 1s ease-out;
    @keyframes appearSlideUp {
      0% {
        transform: translateY(150%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }
`;i.video``;const T0="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.6665%204C12.9956%204%2013.3036%204.16189%2013.4902%204.43292L17.1422%209.73733C18.135%2011.1793%2018.6665%2012.8887%2018.6665%2014.6393C18.6665%2017.6%2016.2665%2020%2013.3058%2020H12.0272C9.06655%2020%206.6665%2017.6%206.6665%2014.6393C6.6665%2012.8887%207.19806%2011.1793%208.19082%209.73733L11.8428%204.43292C12.0294%204.16189%2012.3374%204%2012.6665%204ZM12.6665%206.76342L9.83815%2010.8715C9.07507%2011.9798%208.6665%2013.2937%208.6665%2014.6393C8.6665%2016.4954%2010.1711%2018%2012.0272%2018H13.3058C15.1619%2018%2016.6665%2016.4954%2016.6665%2014.6393C16.6665%2013.2937%2016.2579%2011.9798%2015.4949%2010.8715L12.6665%206.76342Z'%20fill='%235792FF'/%3e%3c/svg%3e",D=({icon:t,title:n,description:c})=>e.jsxs(P0,{children:[e.jsx(O0,{children:e.jsx("img",{src:t,alt:"icon"})}),e.jsx(a,{type:"L",children:n}),e.jsx(a,{type:"S",style:{width:"80%",color:s.colors.greyscales400},children:c})]}),P0=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${s.colors.greyscales850};
  width: 100%;
  ${s.breakpoints.down("medium")} {
    padding: 32px 24px;
    width: unset;
    align-items: center;
    text-align: center;
  }
`,O0=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${s.colors.greyscales900};
  width: 40px;
  height: 40px;
  ${s.breakpoints.down("medium")} {
    background-color: unset;
  }
`,Y0=()=>{const t=Z();return e.jsxs(z0,{children:[e.jsxs(o,{direction:"column",align:"center",justify:"center",gap:32,children:[e.jsx(a,{type:t?"h5":"h4",style:{textAlign:"center"},children:"Morpho Optimizers"}),e.jsxs(a,{type:"L",style:{textAlign:"center",textWrap:"pretty",color:s.colors.greyscales400},children:["Earn more yield and borrow for less while maintaining the same ",e.jsx("br",{}),"liquidity and risk parameters as Aave or Compound."]}),e.jsx(F,{content:"OPTIMIZE NOW",onClick:()=>window.open(H2)})]}),e.jsxs(o,{gap:22,direction:t?"column":"row",children:[e.jsx(D,{title:"Better rates",description:`Earn more yield and reduce
borrowing costs`,icon:Q}),e.jsx(D,{title:"Same liquidity",description:`Access to all the available liquidity
on Aave or Compound`,icon:T0}),e.jsx(D,{title:"Same risk parameters",description:"Using the same oracles, collateral factors, and liquidation parameters",icon:q})]}),!t&&e.jsx(o,{justify:"end",children:e.jsx(B,{href:M2,text:"READ MORPHO OPTIMIZERS WHITEPAPER"})})]})},z0=i.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 120px 118px 60px 118px;
  background-color: ${s.colors.greyscales900};
  border-radius: 24px;
  margin: 0 20px 120px 20px;
  ${s.breakpoints.down("medium")} {
    padding: 40px 12px 20px 12px;
    margin: 0 0 120px 0;
  }
`,D0="data:image/svg+xml,%3csvg%20width='59'%20height='47'%20viewBox='0%200%2059%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2040212'%3e%3cg%20id='Group%2040213'%3e%3cpath%20id='Fill-1'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.6362%2021.1069L15.8997%2012.3704L1.29778%2026.9709C-0.18064%2028.4507%20-0.18064%2030.8495%201.29778%2032.3293L10.035%2041.0659L24.6362%2026.4654C26.116%2024.9856%2026.116%2022.5867%2024.6362%2021.1069Z'%20fill='white'/%3e%3cg%20id='Group-5'%3e%3cg%20id='Mask%20group'%3e%3cmask%20id='mask0_1524_19013'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='17'%20y='0'%20width='24'%20height='21'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M17.8525%200.570312H40.6841V20.2639H17.8525V0.570312Z'%20fill='white'/%3e%3c/g%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1524_19013)'%3e%3cpath%20id='Fill-3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31.9476%2019.1541L40.6841%2010.4176L31.9476%201.67964C30.4678%200.200535%2028.0696%200.200535%2026.5898%201.67964L17.8525%2010.4176L26.5898%2019.1541C28.0696%2020.6339%2030.4678%2020.6339%2031.9476%2019.1541Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cpath%20id='Fill-6'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.5898%2028.4182L17.8525%2037.1547L26.5898%2045.8927C28.0696%2047.3718%2030.4678%2047.3718%2031.9476%2045.8927L40.6841%2037.1547L31.9476%2028.4182C30.4678%2026.9384%2028.0696%2026.9384%2026.5898%2028.4182Z'%20fill='white'/%3e%3cg%20id='Group-10'%3e%3cg%20id='Mask%20group_2'%3e%3cmask%20id='mask1_1524_19013'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='32'%20y='5'%20width='27'%20height='31'%3e%3cg%20id='Group_2'%3e%3cpath%20id='Vector_2'%20d='M32.791%205.85498H58.9999V35.2024H32.791V5.85498Z'%20fill='white'/%3e%3c/g%3e%3c/mask%3e%3cg%20mask='url(%23mask1_1524_19013)'%3e%3cpath%20id='Fill-8'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M57.8906%2014.5915L49.1541%205.85498L33.9003%2021.1073C32.4212%2022.5864%2032.4212%2024.986%2033.9003%2026.4651L42.6376%2035.2024L57.8906%2019.9493C59.3704%2018.4702%2059.3704%2016.0713%2057.8906%2014.5915Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",U0="data:image/svg+xml,%3csvg%20width='51'%20height='43'%20viewBox='0%200%2051%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Vector'%3e%3cpath%20d='M51%2034.1098C51%2030.7149%2045.5409%2027.7651%2037.5147%2026.2666V26.2687C34.0276%2027.1825%2029.9094%2027.7092%2025.5%2027.7092C21.0906%2027.7092%2016.9724%2027.1825%2013.4853%2026.2666C5.46125%2027.7651%200%2030.7149%200%2034.1098C0%2039.0204%2011.4176%2043%2025.5%2043C39.5824%2043%2051%2039.0225%2051%2034.1098Z'%20fill='white'/%3e%3cpath%20d='M45.9552%2018.2277C45.9552%2015.4306%2041.259%2013.0161%2034.442%2011.868C31.8219%2012.5388%2028.7661%2012.9258%2025.5%2012.9258C22.2339%2012.9258%2019.1781%2012.541%2016.558%2011.868C9.741%2013.0161%205.04475%2015.4327%205.04475%2018.2277C5.04475%2022.13%2014.2035%2025.2948%2025.5%2025.2948C36.7965%2025.2948%2045.9552%2022.13%2045.9552%2018.2277Z'%20fill='white'/%3e%3cpath%20d='M40.9126%205.35135C40.9126%202.3951%2034.0531%200%2025.5935%200C17.1339%200%2010.2744%202.3951%2010.2744%205.35135C10.2744%208.30545%2017.1339%2010.7006%2025.5935%2010.7006C34.0531%2010.7006%2040.9126%208.30545%2040.9126%205.35135Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",G0="data:image/svg+xml,%3csvg%20width='42'%20height='50'%20viewBox='0%200%2042%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2040177'%3e%3cpath%20id='Fill-1__kQPwmYlJ'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.29243%2025.0001C8.29243%2015.3879%2015.0196%207.36097%2023.9865%205.43851C22.6491%205.15219%2021.2626%205%2019.8403%205C15.9701%205%2012.3595%206.11812%209.30667%208.04999C3.71665%2011.5874%200%2017.8558%200%2025.0001C0%2032.1445%203.71665%2038.4129%209.30667%2041.9503C12.3595%2043.8819%2015.9701%2045%2019.8403%2045C21.2626%2045%2022.6491%2044.8481%2023.9865%2044.5615C15.0196%2042.6393%208.29243%2034.6124%208.29243%2025.0001Z'%20fill='white'/%3e%3cpath%20id='Fill-3__kQPwmYlJ'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35.9565%204.65117C35.2865%204.65117%2034.6467%204.5254%2034.0586%204.29865C33.8561%204.22048%2033.6592%204.13128%2033.4697%204.02981C30.6798%202.80363%2027.5866%202.12089%2024.3297%202.12089C23.0448%202.12089%2021.7859%202.22862%2020.5601%202.43282C24.0356%202.53955%2027.308%203.43451%2030.1975%204.9408C35.5038%207.7071%2039.5162%2012.5354%2041.1199%2018.3333V9.78565V9.56542V0C40.9013%202.60394%2038.6741%204.65117%2035.9565%204.65117Z'%20fill='white'/%3e%3cpath%20id='Fill-5__kQPwmYlJ'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.1975%2045.0593C27.308%2046.5656%2024.0361%2047.4605%2020.5601%2047.5675C21.7859%2047.7712%2023.0448%2047.8789%2024.33%2047.8789C27.5866%2047.8789%2030.6798%2047.1965%2033.4697%2045.9705C33.6592%2045.8688%2033.8563%2045.7796%2034.0588%2045.7014C34.6467%2045.4747%2035.2865%2045.3489%2035.9565%2045.3489C38.6741%2045.3489%2040.9013%2047.3961%2041.1199%2050.0001V40.4347V40.2144V31.6667C39.5162%2037.4647%2035.5038%2042.2927%2030.1975%2045.0593Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",W0="data:image/svg+xml,%3csvg%20width='36'%20height='55'%20viewBox='0%200%2036%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Calque_1'%20clip-path='url(%23clip0_1524_18907)'%3e%3cpath%20id='Vector'%20d='M30.3349%2038.1765C28.8468%2037.0104%2027.2282%2035.8879%2025.3746%2035.2744C23.1817%2034.5521%2020.9887%2033.8254%2018.8567%2032.9465C17.9342%2032.5636%2017.0075%2032.1894%2016.0807%2031.8196C13.9182%2030.9581%2011.7035%2030.4055%209.35386%2030.9581C6.37335%2031.2931%204.72428%2033.5296%203.07956%2035.592C-0.66239%2040.2868%200.364472%2046.7874%205.42046%2050.029C12.3822%2054.4975%2020.0402%2055.2198%2027.8156%2052.7745C34.0899%2050.8035%2035.504%2042.2231%2030.3349%2038.1765Z'%20fill='white'/%3e%3cpath%20id='Vector_2'%20d='M27.6021%2022.5562C30.3564%2019.5887%2031.244%2016.0121%2029.9474%2012.0831C28.6856%208.26278%2025.8051%206.31784%2021.9935%205.53464C20.066%205.13869%2018.1167%205.09518%2016.1587%205.13869C14.9274%205.13869%2013.6916%205.04732%2012.469%205.15609C8.13527%205.54334%204.58477%207.27508%202.98356%2011.5827C1.41281%2015.8033%202.62242%2019.5191%205.58988%2022.7737C12.7126%2030.5883%2023.0074%2027.5034%2027.6021%2022.5518V22.5562Z'%20fill='white'/%3e%3cpath%20id='Vector_3'%20d='M34.2291%206.75831e-05C32.7932%20-0.0608479%2031.8751%200.739756%2031.7577%202.15387C31.6532%203.38523%2032.2885%204.23369%2033.6286%204.28591C35.1602%204.34247%2035.7955%203.41134%2036.0043%202.01898C35.9347%200.900747%2035.4474%200.056632%2034.2334%200.00441869L34.2291%206.75831e-05Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1524_18907'%3e%3crect%20width='35.17'%20height='54.1582'%20fill='white'%20transform='translate(0.830078)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Q0="data:image/svg+xml,%3csvg%20width='49'%20height='48'%20viewBox='0%200%2049%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2039774'%3e%3cpath%20id='Vector'%20d='M44.1416%209.91715C43.4802%209.01234%2042.1753%208.97131%2041.3828%209.76383L34.2774%2016.8691C33.6076%2017.5389%2033.5404%2018.5877%2033.962%2019.436C35.3804%2022.2912%2035.3804%2025.6566%2033.962%2028.5119C33.5404%2029.3603%2033.6076%2030.4091%2034.2774%2031.0789L41.3828%2038.184C42.1753%2038.9765%2043.4802%2038.9357%2044.1416%2038.0308C50.2526%2029.6712%2050.2526%2018.2767%2044.1416%209.91715Z'%20fill='white'/%3e%3cpath%20id='Vector_2'%20d='M10.6923%204.58309C9.78747%205.24451%209.74647%206.54947%2010.539%207.34201L17.6443%2014.4473C18.3141%2015.1171%2019.3628%2015.1843%2020.2112%2014.7629C23.0664%2013.3445%2026.4318%2013.3445%2029.2871%2014.7629C30.1354%2015.1843%2031.1841%2015.1171%2031.8538%2014.4473L38.9592%207.34201C39.7517%206.54949%2039.7107%205.24451%2038.8058%204.58309C30.4462%20-1.5277%2019.0519%20-1.5277%2010.6923%204.58309Z'%20fill='white'/%3e%3cpath%20id='Vector_3'%20d='M31.8538%2033.5033C31.1841%2032.8335%2030.1354%2032.7662%2029.2871%2033.1876C26.4318%2034.606%2023.0664%2034.606%2020.2112%2033.1876C19.3628%2032.7662%2018.3141%2032.8335%2017.6443%2033.5033L10.539%2040.6087C9.74647%2041.4011%209.78747%2042.7061%2010.6923%2043.3675C19.0519%2049.4782%2030.4462%2049.4782%2038.8058%2043.3675C39.7107%2042.7061%2039.7517%2041.4011%2038.9592%2040.6087L31.8538%2033.5033Z'%20fill='white'/%3e%3cpath%20id='Vector_4'%20d='M15.5378%2019.436C15.9592%2018.5877%2015.892%2017.5389%2015.2222%2016.8691L8.11691%209.76383C7.32437%208.97131%206.01941%209.01234%205.35799%209.91715C-0.752794%2018.2767%20-0.752794%2029.6712%205.35799%2038.0308C6.01941%2038.9357%207.32439%2038.9765%208.11691%2038.184L15.2222%2031.0789C15.892%2030.4091%2015.9592%2029.3603%2015.5378%2028.5119C14.1194%2025.6566%2014.1194%2022.2912%2015.5378%2019.436Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",q0="data:image/svg+xml,%3csvg%20width='54'%20height='36'%20viewBox='0%200%2054%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Clip%20path%20group'%3e%3cmask%20id='mask0_1524_19043'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='54'%20height='36'%3e%3cg%20id='clip0_895_3196'%3e%3cpath%20id='Vector'%20d='M54%200H0V35.1H54V0Z'%20fill='white'/%3e%3c/g%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1524_19043)'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector_2'%20d='M28.4014%204.45578C28.4014%201.99492%2030.4029%200%2032.872%200C35.341%200%2037.3427%201.99492%2037.3427%204.45578V17.38H28.4014V4.45578Z'%20fill='white'/%3e%3cpath%20id='Vector_3'%20d='M28.4015%2030.4731C28.4015%2033.0286%2026.3228%2035.1002%2023.7588%2035.1002C21.1947%2035.1002%2019.1162%2033.0286%2019.1162%2030.4731V17.3794H28.4015V30.4731Z'%20fill='white'/%3e%3cpath%20id='Vector_4'%20d='M13.2773%208.70731C13.2773%207.09832%2014.586%205.79395%2016.2004%205.79395C17.8149%205.79395%2019.1236%207.09832%2019.1236%208.70731V17.3807H13.2773V8.70731Z'%20fill='white'/%3e%3cpath%20id='Vector_5'%20d='M13.2768%2021.7887C13.2768%2023.8709%2011.5831%2025.5589%209.49381%2025.5589C7.40462%2025.5589%205.71094%2023.8709%205.71094%2021.7887V17.3801H13.2768V21.7887Z'%20fill='white'/%3e%3cpath%20id='Vector_6'%20d='M53.938%2020.2374C53.938%2021.8092%2052.6596%2023.0834%2051.0824%2023.0834C49.5054%2023.0834%2048.2271%2021.8092%2048.2271%2020.2374V17.3914H53.938V20.2374Z'%20fill='white'/%3e%3cpath%20id='Vector_7'%20d='M2.87599e-09%2014.5462C4.46436e-09%2012.9745%201.27846%2011.7002%202.85551%2011.7002C4.43257%2011.7002%205.71103%2012.9745%205.71103%2014.5462V17.3923H0L2.87599e-09%2014.5462Z'%20fill='white'/%3e%3cpath%20id='Vector_8'%20d='M43.1954%2027.7568C43.1954%2029.3658%2041.8867%2030.6703%2040.2723%2030.6703C38.6579%2030.6703%2037.3491%2029.3658%2037.3491%2027.7568V17.3796H43.1954V27.7568Z'%20fill='white'/%3e%3cpath%20id='Vector_9'%20d='M43.1948%208.02179C43.1948%206.60209%2044.3496%205.45117%2045.774%205.45117C47.1986%205.45117%2048.3534%206.60208%2048.3534%208.02179V17.3786H43.1948V8.02179Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",X0="data:image/svg+xml,%3csvg%20width='35'%20height='48'%20viewBox='0%200%2035%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.1737%2038.571V0L0.708984%209.35064V38.571H16.1737ZM19.2661%209.1952V48L34.7308%2038.6495V9.6384V9.1952H19.2661Z'%20fill='white'/%3e%3c/svg%3e",K0="/assets/indexcoop-cX-OvlQh.png",i2="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20d='M23.9995%2045.6206C23.9995%2046.9987%2025.115%2048.1286%2026.4787%2047.9882C38.5687%2046.7416%2048%2036.4776%2048%2024C48%2011.5224%2038.5687%201.2585%2026.4787%200.0119615C25.115%20-0.129398%2023.9995%201.00153%2023.9995%202.37944V9.03192C23.9995%2010.4098%2025.1225%2011.5008%2026.4667%2011.7727C32.1413%2012.9228%2036.414%2017.9597%2036.414%2024C36.414%2030.0405%2032.1413%2035.0772%2026.4667%2036.2275C25.1225%2036.4992%2023.9995%2037.5912%2023.9995%2038.9683V45.6206ZM16.5514%204.50658C16.5514%202.81017%2014.8987%201.61439%2013.3858%202.3653C5.45474%206.30108%200%2014.5101%200%2024C0%2033.4898%205.45474%2041.699%2013.3858%2045.6347C14.8987%2046.3857%2016.5514%2045.19%2016.5514%2043.4935V4.50658Z'%20fill='white'/%3e%3c/svg%3e",J0="data:image/svg+xml,%3csvg%20width='53'%20height='46'%20viewBox='0%200%2053%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='LEDGER-WORDMARK-SINGLE-CHARACTER-BLACK-CMYK-01%201'%20clip-path='url(%23clip0_1524_18939)'%3e%3cpath%20id='Vector'%20d='M0.782227%2032.7726V45.6799H20.4237V42.8174H3.64403V32.7726H0.782227ZM50.1384%2032.7726V42.8174H33.3588V45.6792H53.0002V32.7726H50.1384ZM20.4522%2013.1305V32.7719H33.3588V30.1906H23.314V13.1305H20.4522ZM0.782227%200.223145V13.1305H3.64403V3.08495H20.4237V0.223145H0.782227ZM33.3588%200.223145V3.08495H50.1384V13.1305H53.0002V0.223145H33.3588Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1524_18939'%3e%3crect%20width='52.218'%20height='45.4567'%20fill='white'%20transform='translate(0.782227%200.223145)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",$0="data:image/svg+xml,%3csvg%20width='38'%20height='55'%20viewBox='0%200%2038%2055'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2040209'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.0189%200.717285L32.4527%2021.7492L19.0181%2029.58L5.58545%2021.749L19.0189%200.717285ZM9.6978%2020.7546L19.0189%206.16115L28.3401%2020.7546L19.0184%2026.1882L9.6978%2020.7546Z'%20fill='white'/%3e%3cpath%20id='Vector_2'%20d='M18.9992%2034.2029L3.41578%2025.1182L2.99013%2025.7846C-1.80956%2033.2989%20-0.737563%2043.1401%205.56738%2049.4451C12.9867%2056.8644%2025.0156%2056.8644%2032.4349%2049.4451C38.7398%2043.1401%2039.8118%2033.2989%2035.0121%2025.7843L34.5865%2025.1182L18.9992%2034.2029Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",_0="data:image/png;base64,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",e1="data:image/svg+xml,%3csvg%20width='42'%20height='48'%20viewBox='0%200%2042%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32.029%2019.1776C32.3176%2020.6469%2032.4695%2022.2587%2032.4695%2023.9984C32.4695%2033.3677%2028.1522%2038.9616%2020.9213%2038.9616C17.9057%2038.9616%2015.3614%2037.9781%2013.4427%2036.1037L38.6144%2010.4426C37.9399%209.22541%2037.1712%208.08712%2036.3052%207.04781C35.9409%206.61168%2035.5579%206.20184%2035.1674%205.80589L35.1706%205.80125C35.119%205.75021%2035.0642%205.70075%2035.0142%205.64971C34.8971%205.53371%2034.7863%205.41307%2034.6677%205.30171L34.6601%205.30635C31.0067%201.83272%2026.3066%200%2020.9213%200C14.6974%200%209.38807%202.43744%205.56909%207.04781C1.97788%2011.3845%200%2017.4053%200%2023.9984C0%2028.3816%200.878039%2032.5048%202.51717%2036.0525L9.82104%2028.6072C9.56749%2027.1968%209.43836%2025.6595%209.43836%2023.9984C9.43836%2019.6867%2010.2996%2016.1989%2011.9979%2013.6347C13.9881%2010.6266%2017.0749%209.03517%2020.9213%209.03517C23.9155%209.03517%2026.4082%209.99872%2028.3041%2011.788L3.18255%2037.3997C3.87375%2038.6771%204.67127%2039.8664%205.56757%2040.9507C5.74833%2041.1672%205.93367%2041.376%206.12053%2041.5832L6.12509%2041.5877C6.34078%2041.8275%206.56107%2042.0595%206.78436%2042.2853L6.86944%2042.372C6.94084%2042.4432%207.0092%2042.5189%207.08212%2042.5885L7.08972%2042.5824C10.7462%2046.1285%2015.4813%2048%2020.9198%2048C27.1482%2048%2032.4667%2045.5627%2036.3039%2040.9507C39.9149%2036.6093%2041.9048%2030.5885%2041.9048%2024C41.9048%2019.5504%2040.9932%2015.3637%2039.292%2011.7741L32.0274%2019.1792L32.029%2019.1776Z'%20fill='white'/%3e%3c/svg%3e",t1="data:image/svg+xml,%3csvg%20width='42'%20height='45'%20viewBox='0%200%2042%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.11379%2045V27.6826H0V20.6298H8.11379V18.1244H0V11.2297H8.11379V0H26.5454C31.3763%200%2034.9523%201.14156%2037.2712%203.42408C39.5901%205.68485%2040.7507%209.17363%2040.7507%2013.891C40.7507%2017.4668%2039.8955%2020.3417%2038.1823%2022.5159C36.469%2024.6679%2034.0884%2026.1659%2031.0297%2027.0063L41.4%2045H31.81L22.2856%2027.7168H16.7614V45H8.11379ZM16.7614%2020.6428H27.6843C30.3928%2020.6428%2031.7478%2019.1448%2031.7478%2016.1518V11.5309C31.7478%2010.0235%2031.4446%208.94719%2030.8361%208.29908C30.2528%207.63214%2029.201%207.2975%2027.6843%207.2975H16.7614V20.6428Z'%20fill='white'/%3e%3c/svg%3e",i1="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='sommelier-47c87fef%201'%20clip-path='url(%23clip0_1524_18924)'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M22.6887%208.50003C25.196%208.50003%2027.6005%207.49911%2029.3735%205.71752C31.1463%203.93591%2032.1424%201.51955%2032.1424%20-1H13.2351C13.2351%201.51955%2014.2311%203.93591%2016.004%205.71752C17.7769%207.49911%2020.1815%208.50003%2022.6887%208.50003ZM0%2031.3V12.3C2.50726%2012.3%204.91184%2013.3009%206.68474%2015.0825C8.45766%2016.864%209.45361%2019.2804%209.45361%2021.8C9.45361%2024.3196%208.45766%2026.736%206.68474%2028.5175C4.91184%2030.2991%202.50726%2031.3%200%2031.3ZM22.6887%2031.3C27.9098%2031.3%2032.1424%2027.0467%2032.1424%2021.8C32.1424%2016.5533%2027.9098%2012.3%2022.6887%2012.3C17.4676%2012.3%2013.2351%2016.5533%2013.2351%2021.8C13.2351%2027.0467%2017.4676%2031.3%2022.6887%2031.3ZM35.9238%2021.8C35.9238%2024.3196%2036.9198%2026.736%2038.6927%2028.5175C40.4656%2030.2991%2042.8702%2031.3%2045.3775%2031.3V12.3C42.8702%2012.3%2040.4656%2013.3009%2038.6927%2015.0825C36.9198%2016.864%2035.9238%2019.2804%2035.9238%2021.8ZM45.3775%20-1V8.50003C42.8702%208.50003%2040.4656%207.49911%2038.6927%205.71752C36.9198%203.93591%2035.9238%201.51955%2035.9238%20-1H45.3775ZM0%208.50003C2.50726%208.50003%204.91184%207.49911%206.68474%205.71752C8.45766%203.93591%209.45361%201.51955%209.45361%20-1H0V8.50003ZM16.004%2037.8825C17.7769%2036.1009%2020.1815%2035.1%2022.6887%2035.1C25.196%2035.1%2027.6005%2036.1009%2029.3735%2037.8825C31.1463%2039.664%2032.1424%2042.0804%2032.1424%2044.6H13.2351C13.2351%2042.0804%2014.2311%2039.664%2016.004%2037.8825ZM35.9238%2044.6H45.3775V35.1C42.8702%2035.1%2040.4656%2036.1009%2038.6927%2037.8825C36.9198%2039.664%2035.9238%2042.0804%2035.9238%2044.6ZM0%2044.6V35.1C2.50726%2035.1%204.91184%2036.1009%206.68474%2037.8825C8.45766%2039.664%209.45361%2042.0804%209.45361%2044.6H0Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1524_18924'%3e%3crect%20width='45.6'%20height='45.6'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",s1="data:image/svg+xml,%3csvg%20width='58'%20height='47'%20viewBox='0%200%2058%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2040210'%3e%3cg%20id='Mask%20group'%3e%3cmask%20id='mask0_1524_19029'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='58'%20height='47'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M57.0153%200.986165L46.4763%2011.5226C45.2897%2012.7089%2043.8411%2013.5709%2042.2648%2014.0537C41.3094%2014.3468%2040.3074%2014.4985%2039.2898%2014.4985H19.6623C18.6447%2014.4985%2017.6428%2014.3468%2016.6874%2014.0537C15.1111%2013.5709%2013.6624%2012.7089%2012.4759%2011.5226C8.96125%208.00874%205.44991%204.49834%201.93694%200.984467C1.60929%200.65698%201.27979%200.327642%200.952148%200C1.02638%200.719006%201.13318%201.49147%201.28674%202.30692C1.57642%203.86729%202.03007%205.58804%202.73367%207.39496C3.01641%208.12431%203.32345%208.82264%203.64762%209.48988C4.47037%2011.1829%205.40847%2012.683%206.38469%2014.0038C8.223%2016.4917%2010.7168%2018.3538%2013.533%2019.44C15.3852%2020.1538%2017.3755%2020.5332%2019.4105%2020.5332H39.5417C41.5767%2020.5332%2043.567%2020.1538%2045.4191%2019.44C48.2354%2018.3538%2050.7292%2016.4917%2052.5676%2014.0038C53.5419%2012.6846%2054.4819%2011.1829%2055.3028%209.49158C55.6288%208.82434%2055.9357%208.12431%2056.2185%207.39496C56.9222%205.58804%2057.3758%203.86729%2057.6656%202.30692C57.8189%201.49147%2057.9259%200.719006%2058.0001%200C57.6706%200.329339%2057.343%200.65698%2057.0153%200.986165ZM3.14064%2022.377L10.0753%2029.3116H21.0524L15.5647%2034.7979L19.833%2039.0653L29.5891%2029.3116H48.6578L55.5961%2022.377C53.2386%2020.0218%2049.4168%2020.0201%2047.0593%2022.377L46.1609%2023.2771H12.576L11.6758%2022.377C10.4978%2021.1994%208.95261%2020.6098%207.40906%2020.6098C5.86382%2020.6098%204.31858%2021.1994%203.14064%2022.377ZM31.11%2032.0548L21.8716%2041.1033L25.8518%2045.0825C27.7937%2047.0239%2030.9419%2047.0239%2032.8836%2045.0825L45.9146%2032.0548H31.11Z'%20fill='white'/%3e%3c/g%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1524_19029)'%3e%3cg%20id='Group_2'%3e%3cpath%20id='Vector_2'%20d='M58.1083%200H0.844727V46.5152H58.1083V0Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",n1="data:image/svg+xml,%3csvg%20width='51'%20height='45'%20viewBox='0%200%2051%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2040214'%3e%3cpath%20id='Vector'%20d='M22.4332%2017.8857C30.7344%2019.7684%2035.9545%2024.0472%2035.9545%2030.9791C35.9545%2039.6223%2028.0814%2044.5002%2018.24%2044.5002C9.16883%2044.5002%201.89476%2039.7935%200.439941%2031.8347L11.4794%2029.8666C11.9929%2033.5464%2014.8169%2035.4291%2018.24%2035.4291C21.8343%2035.4291%2023.9737%2033.8031%2023.9737%2031.578C23.9737%2029.1819%2021.6631%2028.0694%2019.267%2027.556L14.1323%2026.5289C6.25921%2024.6463%201.12456%2020.2818%201.12456%2013.2645C1.12456%204.79233%209.16883%200%2018.24%200C27.2256%200%2033.4727%204.79233%2034.7565%2012.8366L23.717%2014.7193C23.2891%2011.2962%2021.0642%209.24235%2017.641%209.24235C14.7314%209.24235%2012.4208%2010.6116%2012.4208%2013.0078C12.4208%2015.3183%2014.3035%2016.3453%2016.7852%2016.8587L22.4332%2017.8857Z'%20fill='white'/%3e%3cpath%20id='Vector_2'%20d='M43.2287%2037.4399C39.29%2037.4399%2036.0972%2040.6328%2036.0972%2044.5713H50.3601C50.3601%2040.6328%2047.1673%2037.4399%2043.2287%2037.4399Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",o1="/assets/noise-high-qCzKb2dg.png",r1="/assets/noise-VzblzVVu.png",h=({className:t,image:n,integratorName:c,isPng:l})=>{const g=k();return e.jsxs(a1,{className:I("integrator-card",t),children:[e.jsx(l1,{className:"noise-container"}),e.jsx(c1,{children:e.jsx("img",{src:n,alt:`Integrator ${c} icon`,style:{maxHeight:g?25:50,maxWidth:80}})}),e.jsx(d1,{children:c})]})},a1=i.div`
  --width: 140px;
  --height: 140px;
  position: relative;
  display: flex;
  width: var(--width);
  height: var(--height);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
  user-select: none;
  ${s.breakpoints.down("mobile")} {
    --width: 84px;
    --height: 84px;
    gap: 4px;
  }
`,c1=i.div`
  z-index: 1;
`,l1=i.div`
  position: absolute;
  width: var(--width);
  height: var(--height);
  border-radius: 30px;
  top: 0;
  left: 0;
  flex-shrink: 0;
  box-shadow:
    rgba(5, 0, 255, 0.4) 0px 0px 90px 0px inset,
    rgb(0, 145, 250, 0.8) 0px 0px 10px 0px inset,
    rgb(0, 133, 255) 0px 0px 40px 0px inset;

  ${s.breakpoints.down("mobile")} {
    border-radius: 20px;
  }
`;i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    url(${r1}),
    lightgray 0% 0% / 5.000000074505806px 5.000000074505806px repeat;
  mix-blend-mode: overlay;
  filter: blur(0.09375px);
`;i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    url(${o1}),
    lightgray 0% 0% / 5.000000074505806px 5.000000074505806px repeat;
  mix-blend-mode: overlay;
  filter: blur(0.09375px);
`;const d1=i.span`
  position: absolute;
  z-index: 1;
  bottom: 0;
  color: ${s.colors.primaryWhite};
  font-family: FKGrotesk-Regular, Helvetica;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.26px;
  margin-bottom: 24px;

  ${s.breakpoints.down("mobile")} {
    font-size: 9px;
    letter-spacing: 0.18px;
    margin-bottom: 14px;
  }
`,P=1640,K=()=>A2(s.breakpoints.up(P)),p1=({children:t,reverse:n})=>{const c=K();return e.jsx(b2,{className:"slide-show-root",children:e.jsxs(g1,{children:[t,!c&&t]})})},b2=i.div`
  overflow-x: hidden;
  width: 100%;
  ${s.breakpoints.up(P)} {
    overflow-x: unset;
  }
`,g1=i.div`
  display: inline-flex;
  /* adding a gap is creating a "jump" */
  > * {
    margin-right: 40px;
    ${s.breakpoints.down("mobile")} {
      margin-right: 16px;
    }
  }

  justify-content: flex-start;
  animation: slide 40s linear infinite;
  ${s.breakpoints.up(P)} {
    animation: unset;
    display: flex;
    gap: 40px;
    justify-content: center;
    > * {
      margin-right: unset;
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  /* :hover {
    animation-play-state: paused;
  } */
`,h1=({children:t})=>{const n=K();return e.jsx(b2,{className:"slide-show-root",children:e.jsxs(x1,{children:[t,!n&&t]})})},x1=i.div`
  display: inline-flex;
  /* adding a gap is creating a "jump" */
  > * {
    margin-left: 40px;
    ${s.breakpoints.down("mobile")} {
      margin-left: 16px;
    }
  }

  justify-content: flex-start;
  animation: slideReverse 40s linear infinite;

  ${s.breakpoints.up(P)} {
    animation: unset;
    display: flex;
    gap: 40px;
    justify-content: center;
    > * {
      margin-left: unset;
    }
  }

  @keyframes slideReverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  /* :hover {
    animation-play-state: paused;
  } */
`,m1=()=>{const t=k(),n=K();return e.jsxs(C1,{children:[e.jsxs(o,{dir:"column",direction:"column",gap:t?16:40,children:[e.jsx(p1,{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{integratorName:"Cian",image:G0}),e.jsx(h,{integratorName:"Contango",image:W0}),e.jsx(h,{integratorName:"Idle Finance",image:X0}),e.jsx(h,{integratorName:"Origin",image:e1}),e.jsx(h,{integratorName:"Sommelier",image:i1}),e.jsx(h,{integratorName:"Instadapp",image:i2}),e.jsx(h,{integratorName:"Summer.Fi",image:n1}),e.jsx(h,{integratorName:"Ledger",image:J0}),e.jsx(h,{integratorName:"Reserve",image:t1})]})}),e.jsx(h1,{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{integratorName:"Balancer",image:U0}),e.jsx(h,{integratorName:"Index Coop",image:K0,isPng:!0}),e.jsx(h,{integratorName:"Lido",image:$0}),e.jsx(h,{integratorName:"Defi Saver",image:Q0}),e.jsx(h,{integratorName:"B.Protocol",image:D0}),e.jsx(h,{integratorName:"Steakhouse",image:s1}),!n&&e.jsx(h,{integratorName:"Instadapp",image:i2}),e.jsx(h,{integratorName:"OKX",image:_0}),e.jsx(h,{integratorName:"Enzyme",image:q0})]})})]}),e.jsxs(u1,{children:[e.jsx(a,{type:t?"h5":"h4",style:{color:s.colors.primaryWhite,textAlign:"center"},children:"Empowering DeFi Innovation"}),e.jsx(a,{type:"L",style:{color:s.colors.greyscales400,textAlign:"center",width:t?"80%":""},children:"The Morpho ecosystem features 200+ projects"}),e.jsxs(o,{gap:20,children:[e.jsx(F,{content:"DISCORD",onClick:()=>window.open(I2)}),e.jsx(F,{content:"GITHUB",onClick:()=>window.open(k2)})]})]})]})},C1=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,u1=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0 120px 0;
  gap: 32px;
  ${s.breakpoints.down("mobile")} {
    margin-top: 60px;
  }
`,f1="/assets/cantina-IcDqzWQY.svg",w1="data:image/svg+xml,%3csvg%20width='134'%20height='35'%20viewBox='0%200%20134%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='logo%201'%20clip-path='url(%23clip0_1524_19151)'%3e%3cg%20id='Page-1'%3e%3cg%20id='logo'%3e%3cpath%20id='Certora'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M41.0801%2021.2637V11.0849L43.4751%208.68994H50.1897L52.4991%2010.9994V12.6887H50.4463V11.7265L49.206%2010.4862H44.4588L43.1329%2011.812V20.5367L44.4588%2021.8625H49.206L50.4463%2020.6222V19.6599H52.4991V21.3493L50.1897%2023.6587H43.4751L41.0801%2021.2637ZM54.9583%208.68994H65.0088V10.4862H57.0112V15.2548H64.3886V17.0297H57.0112V21.8625H65.0088V23.6587H54.9583V8.68994ZM78.5662%2018.9543V23.6587H76.5134V19.4675L74.7385%2017.5643H69.6277V23.6587H67.5749V8.68994H76.4064L78.4807%2010.7642V15.4259L76.8341%2017.0725L78.5662%2018.9543ZM69.6277%2015.8108H75.4869L76.4492%2014.8699V11.3843L75.4869%2010.4434H69.6277V15.8108ZM84.789%2010.4648H80.2769V8.68994H91.3539V10.4648H86.8418V23.6587H84.789V10.4648ZM92.9577%2021.2637V11.0849L95.3527%208.68994H102.409L104.804%2011.0849V21.2637L102.409%2023.6587H95.3527L92.9577%2021.2637ZM101.426%2021.8625L102.752%2020.5367V11.812L101.426%2010.4862H96.3363L95.0105%2011.812V20.5367L96.3363%2021.8625H101.426ZM118.79%2018.9543V23.6587H116.737V19.4675L114.962%2017.5643H109.851V23.6587H107.798V8.68994H116.63L118.704%2010.7642V15.4259L117.057%2017.0725L118.79%2018.9543ZM109.851%2015.8108H115.71L116.673%2014.8699V11.3843L115.71%2010.4434H109.851V15.8108ZM125.975%208.68994H128.027L133.416%2023.6587H131.299L129.973%2019.8524H124.05L122.724%2023.6587H120.607L125.975%208.68994ZM129.439%2018.1203L127.022%2011.1277H126.98L124.606%2018.1203H129.439Z'%20fill='white'/%3e%3cg%20id='Group'%3e%3cg%20id='Group-4'%3e%3cpath%20id='Polygon-Copy'%20d='M29.0463%201.79126V25.6527L15.4843%2033.4761L1.92236%2025.6527V1.79126H29.0463Z'%20fill='white'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Polygon'%20d='M15.4843%202.18237L29.0463%2010.0058V25.6526L15.4843%2033.476L1.92236%2025.6526V10.0058L15.4843%202.18237Z'%20fill='white'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Polygon-Copy-2'%20d='M15.4843%202.18237L29.0463%2025.6526L15.4843%2033.476L1.92236%2025.6526L15.4843%202.18237Z'%20fill='white'/%3e%3cpath%20id='Path-3'%20d='M2.25635%2010.1531L28.8405%2025.5847'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Path-3-Copy'%20d='M28.8403%2010.1531L2.25615%2025.5847'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Path-3-Copy-2'%20d='M15.5483%202.52002V33.0379'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Path-3-Copy-3'%20d='M15.4922%202.33643L2.20213%2025.5137'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Path-3-Copy-4'%20d='M15.4419%202.16553L28.8593%2025.5135'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3cpath%20id='Polygon-Copy-3'%20d='M15.4843%202.18237L29.0463%2010.0058V25.6526L15.4843%2033.476L1.92236%2025.6526V10.0058L15.4843%202.18237Z'%20stroke='%2310141C'%20strokeWidth='1.1664'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1524_19151'%3e%3crect%20width='132.84'%20height='34.02'%20fill='white'%20transform='translate(0.580078%200.590088)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",v1="/assets/chain-security-HpGvbqXG.svg",j1="/assets/lexfo-0qgf3kEY.png",y1="/assets/omniscia-KhBzPDfl.png",b1="/assets/openzeppelin-sgTt0C29.svg",L1="/assets/pessimistic-nlM0JDYR.png",V1="/assets/runtime-verification-_p1TWcJi.png",H1="/assets/securing-lvqK6WQC.svg",M1="/assets/solidified-DnS5tRJ0.svg",A1="/assets/spearbit-8Xj0F8A6.svg",I1="/assets/trail-of-bits-yxxZ2d9-.svg",k1="data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='IconBugBounty'%3e%3cpath%20id='Icon'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.66667%206.66667C8.66667%205.74619%208.66667%204.16667%2010.3333%204.16667C12%204.16667%2012%205.74619%2012%206.66667H10.3333H8.66667ZM13.4111%208.02463C13.5697%207.85317%2013.6667%207.62381%2013.6667%207.3718V6.66667C13.6667%204.82572%2012.8333%202.5%2010.3333%202.5C7.83333%202.5%207%204.82572%207%206.66667V7.37179C7%207.6238%207.09695%207.85317%207.25559%208.02463C6.94959%208.35975%206.6976%208.74502%206.51337%209.16667H4.84518L3.42259%207.74408C3.09715%207.41864%202.56951%207.41864%202.24408%207.74408C1.91864%208.06951%201.91864%208.59715%202.24408%208.92259L3.91074%2010.5893C4.06702%2010.7455%204.27899%2010.8333%204.5%2010.8333H6.16667V13.3333H4.5C4.27899%2013.3333%204.06702%2013.4211%203.91074%2013.5774L2.24408%2015.2441C1.91864%2015.5695%201.91864%2016.0972%202.24408%2016.4226C2.56951%2016.748%203.09715%2016.748%203.42259%2016.4226L4.84518%2015H6.51337C7.15633%2016.4716%208.62473%2017.5%2010.3333%2017.5C12.0419%2017.5%2013.5103%2016.4716%2014.1533%2015H15.8215L17.2441%2016.4226C17.5695%2016.748%2018.0972%2016.748%2018.4226%2016.4226C18.748%2016.0972%2018.748%2015.5695%2018.4226%2015.2441L16.7559%2013.5774C16.5996%2013.4211%2016.3877%2013.3333%2016.1667%2013.3333H14.5V10.8333H16.1667C16.3877%2010.8333%2016.5996%2010.7455%2016.7559%2010.5893L18.4226%208.92259C18.748%208.59715%2018.748%208.06951%2018.4226%207.74408C18.0972%207.41864%2017.5695%207.41864%2017.2441%207.74408L15.8215%209.16667H14.1533C13.9691%208.74502%2013.7171%208.35975%2013.4111%208.02463ZM10.3333%208.33333C8.95262%208.33333%207.83333%209.45262%207.83333%2010.8333V13.3333C7.83333%2014.714%208.95262%2015.8333%2010.3333%2015.8333C11.714%2015.8333%2012.8333%2014.714%2012.8333%2013.3333V10.8333C12.8333%209.45262%2011.714%208.33333%2010.3333%208.33333Z'%20fill='%235792FF'/%3e%3c/g%3e%3c/svg%3e",Z1="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='IconSafetyRatings'%3e%3cpath%20id='Icon'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%201.66675C3.61929%201.66675%202.5%202.79941%202.5%204.19661V13.2737C2.5%2014.2319%203.03501%2015.1079%203.88197%2015.5365L8.88197%2018.0663C9.58578%2018.4224%2010.4142%2018.4224%2011.118%2018.0663L16.118%2015.5365C16.965%2015.1079%2017.5%2014.2319%2017.5%2013.2737V4.19661C17.5%202.79941%2016.3807%201.66675%2015%201.66675H5ZM4.16667%204.19661C4.16667%203.73087%204.53976%203.35332%205%203.35332H15C15.4602%203.35332%2015.8333%203.73087%2015.8333%204.19661V13.2737C15.8333%2013.5931%2015.655%2013.8851%2015.3727%2014.028L10.3727%2016.5578C10.1381%2016.6765%209.86193%2016.6765%209.62732%2016.5578L4.62732%2014.028C4.345%2013.8851%204.16667%2013.5931%204.16667%2013.2737V4.19661ZM12.7567%208.0666C13.0279%207.69028%2012.9462%207.16277%2012.5743%206.88838C12.2025%206.61398%2011.6812%206.6966%2011.41%207.07292L9.62554%209.54945L8.98674%208.7329C8.70107%208.36774%208.17696%208.30607%207.81611%208.59516C7.45527%208.88424%207.39432%209.41461%207.68%209.77976L8.99944%2011.4663C9.1611%2011.673%209.40892%2011.7912%209.66931%2011.786C9.9297%2011.7808%2010.1727%2011.6527%2010.3261%2011.4397L12.7567%208.0666Z'%20fill='%235792FF'/%3e%3c/g%3e%3c/svg%3e",v=({src:t,className:n})=>e.jsx(E1,{className:n,children:e.jsx(B1,{src:t,alt:"auditor icon",className:n})}),E1=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  min-width: 162px;

  ${s.breakpoints.down("mobile")} {
    min-width: 100px;
    min-height: 80px;
  }
  ${s.breakpoints.down("xs")} {
    min-width: unset;
    min-height: unset;
  }
`,B1=i.img`
  filter: grayscale(1);
  max-width: 140px;
  width: 100%;

  &.trailofbits {
    max-width: 80px;
  }
  &.lexfo {
    max-width: 110px;
  }
  &.cantina {
    max-width: 120px;
  }
  &.chainsecurity {
    zoom: 1.4;
  }
  &.oz {
    zoom: 1.2;
  }
`,U=({icon:t,title:n,description:c,externalLink:l})=>e.jsxs(R1,{children:[e.jsxs(o,{direction:"column",gap:30,children:[e.jsxs(o,{justify:"space-between",align:"center",children:[e.jsx(a,{type:"L",children:n}),e.jsx(S1,{children:e.jsx("img",{src:t,alt:"icon"})})]}),e.jsx(a,{type:"S",style:{width:"90%",color:s.colors.greyscales400},children:c})]}),e.jsx(B,{href:l.link,text:l.text})]}),R1=i.div`
  display: flex;
  flex-direction: column;
  height: 264px;
  justify-content: space-between;
  gap: 20px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${s.colors.greyscales850};
  width: 100%;
  ${s.breakpoints.down("medium")} {
    padding: 32px 24px;
    height: unset;
    width: unset;
  }
`,S1=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${s.colors.greyscales900};
  width: 40px;
  height: 40px;
`,N1=()=>{const t=Z();return e.jsxs(F1,{children:[e.jsx(T1,{}),e.jsxs(o,{gap:32,direction:"column",align:"center",children:[!t&&e.jsx(e.Fragment,{children:e.jsx(a,{type:"h4",style:{textAlign:"center"},children:"Industry Leading Security Practices"})})," ",t&&e.jsxs(a,{type:"h5",style:{textAlign:"center"},children:["Industry Leading ",e.jsx("br",{})," Security Practices"]}),e.jsx(a,{type:"L",style:{color:s.colors.greyscales400,maxWidth:t?"95%":"65%",textAlign:"center"},children:"Security of Morpho is the highest priority, with over 23 audits by crypto's most renowned security firms."}),e.jsx(F,{content:"SEE AUDITS",onClick:()=>window.open(Z2)})]}),e.jsxs(o,{gap:t?16:32,wrap:"wrap",justify:"center",children:[e.jsx(v,{src:A1}),e.jsx(v,{src:I1,className:"trailofbits"}),e.jsx(v,{src:v1,className:"chainsecurity"}),e.jsx(v,{src:L1,className:"pessimisticimage"}),e.jsx(v,{src:V1,className:"runtimeverification"}),e.jsx(v,{src:w1,className:"certora"}),e.jsx(v,{src:M1,className:"solidified"}),e.jsx(v,{src:y1,className:"omniscia"}),e.jsx(v,{src:H1,className:"securing"}),e.jsx(v,{src:j1,className:"lexfo"}),e.jsx(v,{src:f1,className:"cantina"}),e.jsx(v,{src:b1,className:"oz"})]}),e.jsxs(o,{gap:t?12:20,justify:"center",direction:t?"column":"row",children:[e.jsx(U,{title:"Safety Ratings",icon:Z1,description:`Morpho's overall score of 98% is
the highest received by the 300+ protocols reviewed by DeFi Safety.`,externalLink:{text:"DEFISAFETY REPORT",link:E2}}),e.jsx(U,{title:"Formal Verification",icon:X,description:`The protocol's logic was formally described in the yellow paper. Automated tools like Certora and 
          Why3 have proved many properties of the code.`,externalLink:{text:"MORE INFORMATION",link:B2}}),e.jsx(U,{title:"Bug Bounty",icon:k1,description:"To ensure Morpho is as secure as possible, there are rewards of up to $2,500,000 for any bugs or vulnerabilities found and submitted via Immunefi.",externalLink:{text:"MORE INFORMATION",link:R2}})]})]})},F1=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${s.colors.greyscales900};
  /* background-color: rgb(16, 20, 28, 0.7); */

  border-radius: 24px;
  padding: 120px 130px 40px 130px;
  margin: 0 20px;
  gap: 80px;
  mix-blend-mode: lighten;

  ${s.breakpoints.down("medium")} {
    margin: 0;
    padding-left: 8px;
    padding-right: 8px;
    padding: 60px 12px 20px 12px;
  }
`,T1=i(E)`
  background: radial-gradient(closest-side, #0085ff, ${s.colors.greyscales900});
  transform: translateX(-90%);
  z-index: -1;
  top: 0;
`,s2="/assets/a16z-nNAgqMx6.png",P1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAA2CAYAAABOdS5ZAAAABGdBTUEAALGPC/xhBQAABJxJREFUeAHtnFuITVEYx88wbrk88EaJcieR8YDwIMmt5NEtUeIVYUoUCXnwRl4o5kVKxvDAAw8zikxKmZjGNZeihmJohhi/T47ZzVmzrrP2Ieurz17nu/2/9T/r7LP2nn0UOssndwsI8CcMLaySOB+hbq2hdhX+aYaYKO4+PhNKOeEMJOLDOfSqkIj3oi08KREfzqFXhUS8F23hSYn4cA69KlQasu7jP2SI8XW/903MOW8/eA97G9NE/NuKiooLvQ3qWK8/G+mBjjnF8L7FQcDxJhzUB+QrU03EK5NyNp7PGa873Bbe+KXdjaGv/wXiQ+cYmr8utIAqP325qljJwZaIz4FkFUQiXsVKDrZEfA4kqyAS8SpWcrClXY2Z5BZCPpvD3CL+BeKPMqU7btP6E13NaPafV36DzeW4gBrMxcNEv36NWe1M6IUxqlC4Tdwli7iSEHrfWGJ0N4yOwYFpxc+jz0fuvVplNBIVuhqtgAKDagLzlenpy1VJS3xjIj4+x0qERLySlvjGRHx8jpUIiXglLfGNifj4HCsRKtijTld64hu/sD9/DP4ooEZo4J4T91Hj79FF7TE4h/UYUCjIVWknOkETE8Vl2sdHAXUsOgYCHVN6NfwJb7zzLQN6lsUki0otBJRLbJ+djNmfzbOT89XM6a00vU3XeDrH6/mL5k3ER6NWXzgRr+cnmjcRH41afeFEvJ6faF6b7eQ70F96diBPcs3wzC2myV7yXvGFx3EsOcM98qKm2BBfwz52h08XbKeGkPfJJzeT0wF+Vea105AezpKw3ikph2Ab4mWvu9OzlwGeedm0ygB8qTM1W+xvGdsQv4BmRcsl0uOxcoGDu4s3foMH/mRdjg3xuvz/wbcixiTTriYGqxY1E/EWJMUIScTHYNWiZiLegqQYIYn4GKxa1DTtar5Ro59FnWyI/LXoAHora1SM2xQ2lcmnh1oKHUc7VAUzNvlR2Q90TsamG87EeUITsAbfM42/y8UeVSfXcK5GX+qCevCdwz6yC0k9Isb0n0gsJOYi6iotJCxXo/pZqbfA0MQU28rGUw2X6xcpJhcDsoK+2xYmTn471EyjcgHS3yGve+greliNcSX6vLtT83ocvitgX0XHa+LK4jISL10x8TZ0O8NZ6G2xWYrcq5GnfR8w+WWWOcow8K/gkMt/qSenH1sRXME/gko/f4VYEV/slMnLD47nolvRD0W7xVFWnKy8OlRWopeAL08m7CFZzrUNDkXkE7cblU/gWoe8aKFOxEsXTLwTPcVwElojNgeRy+8mJn8Y9V594DdRR+4fbUZbUVuR75wasBtQefPKJs7EFztl8u9Qud26CG0u2i2Osvpk1dZZxPYYArYsgNMEyPP7Z1CXZ0DmEd8I+WW7c+lNPI3/EiZ/g4E8FLUPbf9ltPvHe8Vny4Pfim7CthCVT4KtyNwH2Qb3dlww8dIQE/+KHmQ4Db0utrwF/How5fRRjX7JG98Vr5KEvZqkpxpfiYvJP8G4hI+wbD8Xo0NLgroMb34PL3N83WUuGVmfw8GX3Y7sXk5yXIKatpE63JJGMMjFkY4v+TOplfwExVsi2/DMiwoAAAAASUVORK5CYII=",O1="data:image/svg+xml,%3csvg%20viewBox='0%200%20359%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M72.3094%2017.8676C59.2941%2017.8676%2049.1245%2027.7478%2049.1245%2040.9744C49.1245%2054.2011%2059.0371%2063.9967%2072.3094%2063.9967C85.5816%2063.9967%2095.6666%2054.032%2095.6666%2040.8899C95.6666%2027.8323%2085.754%2017.8676%2072.3094%2017.8676ZM72.3972%2054.4646C64.9854%2054.4646%2059.5542%2048.7082%2059.5542%2040.9777C59.5542%2033.1594%2064.8976%2027.4063%2072.3094%2027.4063C79.8089%2027.4063%2085.2369%2033.2472%2085.2369%2040.9777C85.2369%2048.7082%2079.8089%2054.4646%2072.3972%2054.4646ZM98.5091%2027.9201H104.974V63.1414H115.316V18.7262H98.5091V27.9201ZM23.0971%2027.403C28.5283%2027.403%2032.8374%2030.7528%2034.4733%2035.7351H45.4202C43.4364%2025.0842%2034.6457%2017.8676%2023.1849%2017.8676C10.1696%2017.8676%200%2027.7478%200%2040.9777C0%2054.2076%209.9127%2064%2023.1849%2064C34.3887%2064%2043.3518%2056.7834%2045.3356%2046.0446H34.4733C32.922%2051.027%2028.6128%2054.4646%2023.1817%2054.4646C15.6821%2054.4646%2010.4265%2048.7082%2010.4265%2040.9777C10.4298%2033.1594%2015.6008%2027.403%2023.0971%2027.403ZM295.013%2036.6815L287.429%2035.566C283.81%2035.0522%20281.224%2033.8489%20281.224%2031.013C281.224%2027.9201%20284.587%2026.3753%20289.153%2026.3753C294.152%2026.3753%20297.342%2028.5218%20298.031%2032.0439H308.029C306.907%2023.1101%20300.012%2017.8708%20289.413%2017.8708C278.466%2017.8708%20271.227%2023.4549%20271.227%2031.3577C271.227%2038.9158%20275.968%2043.2998%20285.533%2044.6722L293.117%2045.7877C296.825%2046.3015%20298.893%2047.765%20298.893%2050.5131C298.893%2054.0353%20295.274%2055.4955%20290.275%2055.4955C284.154%2055.4955%20280.707%2053.0043%20280.19%2049.2253H270.02C270.97%2057.9021%20277.777%2064%20290.187%2064C301.479%2064%20308.975%2058.8453%20308.975%2049.996C308.975%2042.0932%20303.547%2037.9694%20295.013%2036.6815ZM110.145%200.42929C106.353%200.42929%20103.508%203.1774%20103.508%206.95645C103.508%2010.7355%20106.35%2013.4836%20110.145%2013.4836C113.937%2013.4836%20116.783%2010.7355%20116.783%206.95645C116.783%203.1774%20113.937%200.42929%20110.145%200.42929ZM261.919%2033.9334C261.919%2024.3134%20256.059%2017.8708%20243.648%2017.8708C231.927%2017.8708%20225.377%2023.7996%20224.083%2032.9057H234.34C234.857%2029.3836%20237.615%2026.4631%20243.476%2026.4631C248.735%2026.4631%20251.32%2028.7819%20251.32%2031.6179C251.32%2035.3124%20246.578%2036.2555%20240.718%2036.8572C232.789%2037.7157%20222.964%2040.4638%20222.964%2050.7733C222.964%2058.764%20228.912%2063.9154%20238.393%2063.9154C245.804%2063.9154%20250.458%2060.8226%20252.787%2055.9248C253.132%2060.3055%20256.407%2063.1414%20260.976%2063.1414H267.009V53.9507H261.922V33.9334H261.919ZM251.749%2045.1015C251.749%2051.0302%20246.578%2055.4109%20240.285%2055.4109C236.406%2055.4109%20233.131%2053.7783%20233.131%2050.344C233.131%2045.9633%20238.389%2044.76%20243.216%2044.2462C247.87%2043.8169%20250.455%2042.7859%20251.749%2040.8086V45.1015ZM196.849%2017.8676C191.073%2017.8676%20186.247%2020.2742%20182.8%2024.3102V0H172.458V63.1414H182.627V57.3005C186.074%2061.5088%20190.989%2064%20196.849%2064C209.259%2064%20218.655%2054.2076%20218.655%2040.9777C218.655%2027.7478%20209.087%2017.8676%20196.849%2017.8676ZM195.298%2054.4646C187.886%2054.4646%20182.455%2048.7082%20182.455%2040.9777C182.455%2033.2472%20187.971%2027.4063%20195.382%2027.4063C202.882%2027.4063%20208.137%2033.1627%20208.137%2040.9777C208.137%2048.7082%20202.709%2054.4646%20195.298%2054.4646ZM147.721%2017.8676C140.999%2017.8676%20136.602%2020.6157%20134.017%2024.4825V18.7262H123.759V63.1382H134.101V39.0004C134.101%2032.213%20138.41%2027.403%20144.788%2027.403C150.736%2027.403%20154.44%2031.6114%20154.44%2037.7125V63.1414H164.782V36.9417C164.786%2025.7704%20159.013%2017.8676%20147.721%2017.8676ZM358.275%2039.5175C358.275%2026.8046%20348.967%2017.8708%20336.469%2017.8708C323.197%2017.8708%20313.457%2027.8356%20313.457%2040.9777C313.457%2054.8093%20323.886%2064%20336.642%2064C347.416%2064%20355.862%2057.642%20358.015%2048.6236H347.24C345.689%2052.575%20341.897%2054.8093%20336.811%2054.8093C330.173%2054.8093%20325.174%2050.6855%20324.055%2043.4689H358.272V39.5175H358.275ZM324.66%2036.0799C326.3%2029.8942%20330.953%2026.8892%20336.297%2026.8892C342.157%2026.8892%20346.639%2030.2389%20347.673%2036.0799H324.66Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='358.275'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Y1="/assets/mechanism-capital-6-vP-lyx.png",z1="/assets/nascent-M4IbPdqK.svg",D1="/assets/pantera-PpiLsYXC.png",U1="/assets/semantic-WzbnvND8.png",G1="/assets/spark-capital-nr8oXxbN.svg",W1="data:image/svg+xml,%3csvg%20width='112'%20height='34'%20viewBox='0%200%20112%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2040182'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.533%2029.6428L27.9979%2031.1424C26.6443%2032.567%2025.1608%2033.4667%2022.7317%2033.4667C18.9489%2033.4667%2016.1304%2030.4863%2016.1304%2026.6999C16.1304%2022.9509%2018.8933%2019.8955%2022.8244%2019.8955C25.2165%2019.8955%2026.6628%2020.739%2027.9052%2021.9387L26.4403%2023.6445C25.4019%2022.6698%2024.2893%2022.0137%2022.8058%2022.0137C20.3211%2022.0137%2018.5224%2024.0756%2018.5224%2026.6624C18.5224%2029.2492%2020.3211%2031.3486%2022.8058%2031.3486C24.4005%2031.3486%2025.4204%2030.6925%2026.533%2029.6428ZM38.1833%2028.2744L41.6879%2033.2418H38.9991L35.8098%2028.6681H34.7457V26.6249H36.2919C37.9237%2026.6249%2038.9621%2025.7626%2038.9621%2024.413C38.9621%2022.9697%2037.9608%2022.2199%2036.2733%2022.2199H32.9541V26.6249H32.9548V28.6681H32.9541V33.2418H30.6734V20.1205H36.4587C39.4442%2020.1205%2041.2799%2021.7138%2041.2799%2024.2818C41.2799%2026.4562%2040.0005%2027.7683%2038.1833%2028.2744ZM50.4709%2028.012L55.6257%2020.1205H53.0114L49.3398%2025.9314L45.7054%2020.1205H43.0166L48.1716%2028.0682V33.2418H50.4709V28.012ZM63.0212%2020.1205C66.0438%2020.1205%2067.9538%2021.845%2067.9538%2024.5255C67.9538%2027.4872%2065.617%2029.0242%2062.7617%2029.0242H61.9766V26.9435H62.8356C64.5605%2026.9435%2065.636%2025.9876%2065.636%2024.5817C65.636%2023.0259%2064.542%2022.2199%2062.8356%2022.2199H60.1844V26.9435H60.1859V29.0242H60.1844V33.2418H57.9035V20.1205H63.0212ZM80.1731%2022.2529H69.7984V22.2574H69.6407V20.1205H80.1731V22.2529ZM76.0566%2024.0633H73.7572V33.2418H76.0566V24.0633ZM89.1004%2019.8955C93.0871%2019.8955%2095.8686%2022.9509%2095.8686%2026.6624C95.8686%2030.3738%2093.0502%2033.4667%2089.0634%2033.4667C85.0767%2033.4667%2082.2952%2030.4113%2082.2952%2026.6999C82.2952%2022.9884%2085.1136%2019.8955%2089.1004%2019.8955ZM89.1004%2031.3486C91.6777%2031.3486%2093.4764%2029.2679%2093.4764%2026.6999C93.4764%2024.1318%2091.6408%2022.0137%2089.0634%2022.0137C86.4856%2022.0137%2084.6869%2024.0943%2084.6869%2026.6624C84.6869%2029.2304%2086.5231%2031.3486%2089.1004%2031.3486Z'%20fill='white'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.65205%203.75104C3.65205%202.87003%204.43086%202.17648%205.76597%202.17648C6.95271%202.17648%208.12094%202.6451%209.28912%203.5261L10.513%201.78284C9.19644%200.71439%207.69441%200.133301%205.80305%200.133301C3.22556%200.133301%201.37126%201.67037%201.37126%203.95723C1.37126%206.39404%202.92887%207.21883%205.69179%207.89363C8.10237%208.45597%208.62158%208.96206%208.62158%209.91808C8.62158%2010.9303%207.73155%2011.5863%206.32226%2011.5863C4.70901%2011.5863%203.46662%2010.9678%202.22424%209.88059L0.852051%2011.5301C2.40967%2012.936%204.28251%2013.6295%206.26661%2013.6295C8.99246%2013.6295%2010.9024%2012.1674%2010.9024%209.69311C10.9024%207.5%209.47458%206.5065%206.73021%205.8317C4.24543%205.23187%203.65205%204.782%203.65205%203.75104ZM19.3515%202.45765H23.4681V0.320748H12.9356V2.45765H17.0522V13.4421H19.3515V2.45765ZM30.7636%200.227024H32.8775L38.5888%2013.4421H36.1781L34.8616%2010.2742H28.7239L27.3887%2013.4421H25.0523L30.7636%200.227024ZM29.5583%208.23106H34.0271L31.7835%202.9825L29.5583%208.23106ZM50.1603%209.39322L43.2067%200.320748H41.0928V13.4421H43.3365V4.10719L50.4941%2013.4421H52.4039V0.320748H50.1603V9.39322ZM60.8605%200.320748C64.9401%200.320748%2067.7585%203.1512%2067.7585%206.86269C67.7585%2010.5741%2064.9401%2013.4421%2060.8605%2013.4421H56.0208V0.320748H60.8605ZM60.8605%2011.3426C63.5861%2011.3426%2065.3663%209.48691%2065.3663%206.90017C65.3663%204.31338%2063.5861%202.42016%2060.8605%202.42016H58.3017V11.3426H60.8605ZM77.5163%200.227024H75.4026L69.691%2013.4421H72.0277L73.3628%2010.2742H79.5002L80.8168%2013.4421H83.2274L77.5163%200.227024ZM78.6662%208.23106H74.1973L76.4222%202.9825L78.6662%208.23106ZM93.2417%208.47474L96.7463%2013.4421H94.0572L90.868%208.86837H88.0122V13.4421H85.7313V0.320748H91.5168C94.5024%200.320748%2096.3381%201.91405%2096.3381%204.48208C96.3381%206.65649%2095.0589%207.9686%2093.2417%208.47474ZM91.3501%206.8252C92.9817%206.8252%2094.0203%205.96292%2094.0203%204.6133C94.0203%203.16995%2093.0191%202.42016%2091.3317%202.42016H88.0122V6.8252H91.3501ZM111.148%206.86269C111.148%203.1512%20108.329%200.320748%20104.25%200.320748H99.41V13.4421H104.25C108.329%2013.4421%20111.148%2010.5741%20111.148%206.86269ZM108.756%206.90017C108.756%209.48691%20106.976%2011.3426%20104.25%2011.3426H101.691V2.42016H104.25C106.976%202.42016%20108.756%204.31338%20108.756%206.90017Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",n2="/assets/variant-dry5C9b9.svg",y=({className:t,src:n})=>e.jsx(Q1,{className:t,children:e.jsx(q1,{src:n,alt:"investor icon",className:"icon"})}),Q1=i.div`
  display: flex;
  flex-basis: 15%;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  min-width: 167px;
  ${s.breakpoints.down("mobile")} {
    width: 100%;
  }
  ${s.breakpoints.down("xs")} {
    min-width: unset;
    min-height: unset;
  }
  &.cherry .icon {
    aspect-ratio: 94/54;
    height: 32px;
  }
  &.coinbase .icon {
    height: 22px;
  }
  &.sparkcapital .icon {
    zoom: 1.3;
    ${s.breakpoints.down("mobile")} {
      width: 100%;
    }
    ${s.breakpoints.down("xs")} {
      min-width: 100px;
    }
  }
  &.pantera .icon {
    mix-blend-mode: lighten;
    zoom: 1.3;
  }
`,q1=i.img`
  max-width: 153px;
  filter: grayscale(1);
`,X1=()=>{const t=k();return e.jsxs(K1,{children:[!t&&e.jsxs(o,{align:"center",justify:"space-around",children:[e.jsxs(R,{children:[e.jsx(S,{className:"halo"}),e.jsx("img",{src:s2,alt:"a16z icon",height:40})]}),e.jsxs(a,{type:"h4",style:{textAlign:"center"},children:["Backed by ",e.jsx("br",{}),"Industry Leaders"]}),e.jsxs(R,{children:[e.jsx(S,{}),e.jsx("img",{src:n2,alt:"variant icon",height:25})]})]}),t&&e.jsxs(o,{direction:"column",justify:"center",gap:60,children:[e.jsxs(a,{type:"h5",style:{textAlign:"center"},children:["Backed by ",e.jsx("br",{}),"Industry Leaders"]}),e.jsxs(o,{justify:"space-around",children:[e.jsxs(R,{children:[e.jsx(S,{className:"halo"}),e.jsx("img",{src:s2,alt:"a16z icon",height:33})]}),e.jsxs(R,{children:[e.jsx(S,{}),e.jsx("img",{src:n2,alt:"variant icon",height:20})]})]})]}),e.jsxs(o,{gap:30,justify:"center",wrap:"wrap",children:[e.jsx(y,{src:U1}),e.jsx(y,{src:z1}),e.jsx(y,{src:D1,className:"pantera"}),e.jsx(y,{src:W1}),e.jsx(y,{src:O1,className:"coinbase"}),e.jsx(y,{src:Y1}),e.jsx(y,{src:G1,className:"sparkcapital"}),e.jsx(y,{src:P1,className:"cherry"})]})]})},K1=i.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 160px 60px 0 60px;
  ${s.breakpoints.down("mobile")} {
    padding: 100px 20px 0 20px;
    gap: 20px;
  }
`,R=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 134px;
  img {
    mix-blend-mode: lighten;
  }
`,S=i.div`
  position: absolute;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 134px;
  background-color: #0085ff;
  filter: blur(100px);
  ${s.breakpoints.down("mobile")} {
    width: 100px;
    filter: blur(60px);
  }
`,J1="/assets/governance-vote-DWIIdWeM.png",o2=({title:t,description:n,href:c})=>e.jsxs($1,{children:[e.jsxs(o,{align:"center",justify:"space-between",children:[e.jsx(a,{type:"L",children:t}),e.jsx("a",{href:c,target:"_blank",children:e.jsxs(e3,{children:[e.jsx(J,{color:s.colors.primaryWhite,className:"arrow first"}),e.jsx(J,{color:s.colors.primaryWhite,className:"arrow second"})]})})]}),e.jsx(_1,{type:"S",children:n})]}),$1=i.div`
  --circle-size: 40px;
  flex-basis: 25%;
  max-width: 453px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 24px;
  background-color: ${s.colors.greyscales850};
  .arrow {
    position: absolute;
    transition: transform 0.3s ease-in-out;
    height: 16px;
  }
  .second {
    transform: translate(calc(-1 * var(--circle-size)), var(--circle-size));
  }

  :hover {
    background-color: ${s.colors.greyscales850};

    .first {
      transform: translate(var(--circle-size), calc(-1 * var(--circle-size)));
    }
    .second {
      transform: translate(0%, 0%);
    }
  }

  ${s.breakpoints.down("mobile")} {
    padding: 32px 24px;
    max-width: unset;
    width: unset;
  }
`,_1=i(a)`
  color: ${s.colors.greyscales400};
`,e3=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${s.colors.primaryBlue};
  width: var(--circle-size);
  height: var(--circle-size);
  position: relative;
  overflow: hidden;
`,t3=()=>{const t=k(),n=a2(),c=r.useRef(null),[l,g]=r.useState(!1);return r.useEffect(()=>{const p=new IntersectionObserver(([x])=>{x.isIntersecting&&g(!0)},{threshold:.8});c.current&&p.observe(c.current)},[]),e.jsxs(i3,{children:[!t&&!n&&e.jsx(c2,{children:e.jsx(o3,{className:"gradient-right"})}),e.jsxs(s3,{children:[e.jsxs(o,{direction:"column",justify:"center",align:"center",gap:t?0:40,children:[e.jsx(o,{justify:"center",style:{overflow:"hidden"},children:e.jsx(r2,{type:t?"h5":"h3",className:l?"animate":void 0,children:"Participate in"})}),e.jsx(o,{justify:"center",style:{overflow:"hidden"},children:e.jsx(r2,{type:t?"h5":"h3",className:l?"animate":void 0,children:"Morpho Governance"})})]}),e.jsx(n3,{src:J1,className:l?"animate":void 0,ref:c})]}),e.jsxs(o,{gap:t?12:20,justify:"center",style:{paddingBottom:t?40:120},direction:t?"column":"row",children:[e.jsx(o2,{title:"Discuss",description:e.jsxs(e.Fragment,{children:["Anyone is free to propose or discuss ",e.jsx("br",{}),"changes and improvements to Morpho."]}),href:S2})," ",e.jsx(o2,{title:"Vote",description:e.jsxs(e.Fragment,{children:["Morpho token holders decide ",e.jsx("br",{}),"on the future of the protocol."]}),href:N2})]})]})},i3=i.div`
  --animation-duration: 0.7s;
  position: relative;
`,s3=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 220px 0;
  overflow: hidden;
  ${s.breakpoints.down("mobile")} {
    padding-bottom: 180px;
    ${s.breakpoints.up(595)} {
      margin-bottom: 40px;
    }
  }
`,r2=i(a)`
  transition: transform var(--animation-duration) ease-out;
  transform: translateY(150%);

  &.animate {
    transform: translateY(0);
  }
`,n3=i.img`
  position: absolute;
  mix-blend-mode: lighten;

  transition: transform var(--animation-duration) ease-out;
  transform: rotate(-12deg);
  &.animate {
    transform: rotate(0deg);
  }

  ${s.breakpoints.down("mobile")} {
    width: 60%;
  }
`,o3=i(E)`
  width: 100%; // it's inside RightGradientContainer that is 50% width
  transform: translateX(70%);
`;F2.createRoot(document.getElementById("root")).render(e.jsx(T2.StrictMode,{children:e.jsxs(P2,{page:"/",children:[e.jsx(q2,{}),e.jsx(h0,{}),e.jsx(S0,{}),e.jsx(N0,{})," ",e.jsx(Y0,{}),e.jsx(m1,{}),e.jsx(N1,{}),e.jsx(X1,{}),e.jsx(t3,{})]})}));
