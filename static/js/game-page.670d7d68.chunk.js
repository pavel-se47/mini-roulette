"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{33:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var l=t(433),i=t(439),c=t(791),a="GamePage_gameField__X+90x",d="GamePage_groupZone__IWmwc",o="GamePage_greenZone__fTnM8",r="GamePage_redZone__KBpkb",u="GamePage_blackZone__IY961",s="GamePage_allBlackZone__I-x-q",v="GamePage_allRedZone__L4dhI",h="GamePage_container__ciyGO",m="GamePage_containerLimit__eN81f",b="GamePage_groupZoneLimit__t9mqY",_="GamePage_numbers__KznF5",f="GamePage_colors__U+jTo",x="GamePage_label__hVPUW",g="GamePage_value__X89Yq",j="GamePage_startGame__QEhAW",N="GamePage_valueWheel__TYyRb",k="GamePage_betZone__14YoU",y="GamePage_bet__swbTm",p="GamePage_bet10__HmFht",B="GamePage_bet20__XoeOc",w="GamePage_bet50__TXww3",P="GamePage_bet100__BlFnP",C="GamePage_bet150__wHgaK",G="GamePage_betChipZone__FDjRa",S="GamePage_activeBet__RBMtC",Y="GamePage_betOnChip__8cOZ-",Z="GamePage_timer__TfuGK",A="GamePage_autoStart__UCd98",T="GamePage_buttonDisabled__g9FK5",R=t(708),I=(t(435),t(653)),E=(t(512),t(525),t(184));function F(){var e=(0,c.useState)(20),n=(0,i.Z)(e,2),t=n[0],I=n[1],F=(0,c.useState)(20),L=(0,i.Z)(F,2),K=L[0],M=L[1],O=(0,c.useState)(null),U=(0,i.Z)(O,2),W=U[0],X=U[1],q=(0,c.useState)([]),z=(0,i.Z)(q,2),H=z[0],D=z[1],V=(0,c.useState)(0),Q=(0,i.Z)(V,2),J=Q[0],$=Q[1],ee=(0,c.useState)(20),ne=(0,i.Z)(ee,2),te=(ne[0],ne[1]),le=(0,c.useState)(!1),ie=(0,i.Z)(le,2),ce=ie[0],ae=ie[1],de=(0,c.useState)(5),oe=(0,i.Z)(de,2),re=oe[0],ue=oe[1],se=(0,c.useState)(!1),ve=(0,i.Z)(se,2),he=ve[0],me=ve[1],be=(0,c.useState)({10:"disabled",20:"active",50:"disabled",100:"disabled",150:"disabled"}),_e=(0,i.Z)(be,2),fe=_e[0],xe=_e[1];(0,c.useEffect)((function(){console.log(H)}),[H]);var ge=H.map((function(e){return e.currentBet})),je=0;ge.forEach((function(e){je+=e})),(0,c.useEffect)((function(){if(he){var e=setInterval((function(){ue((function(e){return 1===e?(pe(),5):e-1}))}),1e3);return function(){clearInterval(e)}}}),[he,H]),(0,c.useEffect)((function(){if(W)return he&&(I((function(e){return e-je})),0===t&&t<K)?((0,R.alert)({title:"Top up your balance to continue playing!",delay:1e3,hide:!0,width:"400px"}),me(!1),I(0),M(0),D([]),ae(!1),void xe({10:"disabled",20:"disabled",50:"disabled",100:"disabled",150:"disabled"})):(H.forEach((function(e){var n,t,l,i;if(!(null!==e&&void 0!==e&&null!==(n=e.value)&&void 0!==n&&n.includes("AB")||null!==e&&void 0!==e&&null!==(t=e.value)&&void 0!==t&&t.includes("AR")))return null!==e&&void 0!==e&&null!==(l=e.value)&&void 0!==l&&l.includes(null===W||void 0===W||null===(i=W.value)||void 0===i?void 0:i.toString())?(I((function(n){return n+8*e.currentBet})),$(8*e.currentBet),void(0,R.success)({title:"Congratulations! You number ".concat(e.value," win!"),text:"You win ".concat(8*e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"})):void(0,R.error)({title:"Sorry, you number ".concat(e.value," lost :("),text:"You lost ".concat(e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"})})),H.forEach((function(e){var n,t,l,i,c,a,d,o,r,u=null===e||void 0===e||null===(n=e.color)||void 0===n?void 0:n.toUpperCase();return null!==e&&void 0!==e&&null!==(t=e.value)&&void 0!==t&&t.includes("AB")&&"black"===W.color&&null!==e&&void 0!==e&&null!==(l=e.color)&&void 0!==l&&l.includes(null===W||void 0===W?void 0:W.color.toString())?(I((function(n){return n+2*e.currentBet})),$(2*e.currentBet),(0,R.success)({title:"Congratulations! You color ".concat(u," win!"),text:"You win ".concat(2*e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"}),null!==e&&void 0!==e&&null!==(o=e.value)&&void 0!==o&&o.includes(null===W||void 0===W?void 0:W.value.toString())&&(I((function(n){return n+8*e.currentBet})),$(8*e.currentBet),(0,R.success)({title:"Congratulations! You number ".concat(e.value," win!"),text:"You win ".concat(8*e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"})),void ae(!1)):(null!==e&&void 0!==e&&null!==(i=e.value)&&void 0!==i&&i.includes("AB")&&(0,R.error)({title:"Sorry, you color ".concat(u," lost :("),text:"You lost ".concat(e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"}),null!==e&&void 0!==e&&null!==(c=e.value)&&void 0!==c&&c.includes("AR")&&"red"===W.color&&null!==e&&void 0!==e&&null!==(a=e.color)&&void 0!==a&&a.includes(null===W||void 0===W?void 0:W.color.toString())?(I((function(n){return n+2*e.currentBet})),$(2*e.currentBet),(0,R.success)({title:"Congratulations! You color ".concat(u," win!"),text:"You win ".concat(2*e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"}),null!==e&&void 0!==e&&null!==(r=e.value)&&void 0!==r&&r.includes(null===W||void 0===W?void 0:W.value.toString())&&(I((function(n){return n+8*e.currentBet})),$(8*e.currentBet),(0,R.success)({title:"Congratulations! You number ".concat(e.value," win!"),text:"You win ".concat(8*e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"})),void ae(!1)):void(null!==e&&void 0!==e&&null!==(d=e.value)&&void 0!==d&&d.includes("AR")&&(0,R.error)({title:"Sorry, you color ".concat(u," lost :("),text:"You lost ".concat(e.currentBet," credits!"),delay:1e3,hide:!0,width:"400px"})))})),he||D([]),ae(!1),function(){$(0)})}),[W]);var Ne=function(e){M(Number(e.target.innerText)),ke(e.target.innerText)},ke=function(e){for(var n in fe)fe[n]=n===e?"active":"disabled"},ye=function(e){var n,i,c=!1;if("AB"===(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.innerText)||"AR"===(null===e||void 0===e||null===(i=e.target)||void 0===i?void 0:i.innerText)){if(te(100),K>100)return void(0,R.alert)({title:"You have exceeded the current limit!",delay:1e3,hide:!0,width:"400px"})}else if(te(20),K>20)return void(0,R.alert)({title:"You have exceeded the current limit!",delay:1e3,hide:!0,width:"400px"});return Object.values(fe).every((function(e){return"disabled"===e}))?((0,R.info)({title:"Place your bet!",delay:1e3,hide:!0,width:"400px"}),void ae(!1)):K>t?((0,R.alert)({title:"Not enough funds to bet!",delay:1e3,hide:!0,width:"400px"}),M(0),void xe({10:"disabled",20:"disabled",50:"disabled",100:"disabled",150:"disabled"})):(H.forEach((function(n){var t,l;n.value.includes(null===e||void 0===e||null===(t=e.target)||void 0===t||null===(l=t.lastChild)||void 0===l?void 0:l.data)&&((0,R.alert)({title:"You have already placed a bet on this zone!",delay:1e3,hide:!0,width:"400px"}),c=!0)})),void(c||(D((function(n){var t,i;return[].concat((0,l.Z)(n),[{value:null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.innerText,color:null===e||void 0===e||null===(i=e.target)||void 0===i?void 0:i.id,currentBet:K}])})),I((function(e){return e-K})),X(null))))},pe=function(){if(ae(!0),0===t||K)if(0!==H.length){if(!K)return(0,R.alert)({title:"Not enough funds to bet!",delay:1e3,hide:!0,width:"400px"}),void M(0);var e=Math.floor(9*Math.random()+0);setTimeout((function(){0===e?X({value:e,color:"green"}):3===e||4===e||8===e||7===e?X({value:e,color:"red"}):1!==e&&2!==e&&5!==e&&6!==e||X({value:e,color:"black"})}),2e3)}else(0,R.info)({title:"Place your chip!",delay:1e3,hide:!0,width:"400px"});else(0,R.info)({title:"Place your bet!!",delay:1e3,hide:!0,width:"400px"})},Be=H.map((function(e){return(0,E.jsx)("div",{className:"".concat(Y," ").concat(10===e.currentBet?p:""," ").concat(20===e.currentBet?B:""," ").concat(50===e.currentBet?w:""," ").concat(100===e.currentBet?P:""," ").concat(150===e.currentBet?C:""),children:e.currentBet},e.value)}));return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{className:N,children:null===W||void 0===W?void 0:W.value}),(0,E.jsx)("button",{className:"".concat(j," ").concat(ce?T:null),id:"spin",onClick:pe,disabled:ce,children:"SPIN"}),(0,E.jsxs)("div",{className:h,children:[(0,E.jsxs)("div",{className:x,children:["Your balance:",(0,E.jsx)("div",{className:g,children:t})]}),(0,E.jsxs)("div",{className:x,children:["Your current bet:",(0,E.jsx)("div",{className:g,children:K||"-"})]}),(0,E.jsxs)("div",{className:x,children:["Your current win:",(0,E.jsx)("div",{className:g,children:J||"-"})]})]}),(0,E.jsxs)("div",{className:m,children:[(0,E.jsxs)("div",{className:b,children:[(0,E.jsx)("h2",{children:"Limits 'AR' and 'AB' bet"}),(0,E.jsx)("div",{className:f,children:"max 100 credits"})]}),(0,E.jsxs)("div",{className:b,children:[(0,E.jsx)("h2",{children:"Limits numbers bet"}),(0,E.jsx)("div",{className:_,children:"max 20 credits"})]})]}),(0,E.jsxs)("div",{className:"".concat(h," ").concat(Z),children:["SPIN VIA: ",re," seconds"]}),(0,E.jsxs)("div",{className:h,children:[(0,E.jsx)("button",{className:"".concat(A," ").concat(ce?T:null),disabled:ce,onClick:function(){return me(!0)},children:"Start Auto Spin"}),(0,E.jsx)("button",{className:"".concat(A," ").concat(ce?T:null),disabled:ce,onClick:function(){return me(!1)},children:"Stop Auto Spin"})]}),(0,E.jsx)("button",{className:"".concat(j," ").concat(ce?T:null),disabled:ce,onClick:function(){M(0===t?0:20),xe(t||K?{10:"disabled",20:"active",50:"disabled",100:"disabled",150:"disabled"}:{10:"disabled",20:"disabled",50:"disabled",100:"disabled",150:"disabled"}),I((function(e){return e+je})),D([]),X(null),$(0),te(20),ae(!1)},children:"CLEAR CHIP"}),(0,E.jsxs)("div",{className:a,children:[(0,E.jsxs)("div",{className:k,children:["Your bet:",(0,E.jsx)("div",{className:"".concat(y," ").concat(p," ").concat("active"===fe[10]?S:null," ").concat(ce?T:null),disabled:ce,onClick:Ne,children:"10"}),(0,E.jsx)("div",{className:"".concat(y," ").concat(B,"  ").concat("active"===fe[20]?S:null," ").concat(ce?T:null),disabled:ce,onClick:Ne,children:"20"}),(0,E.jsx)("div",{className:"".concat(y," ").concat(w,"  ").concat("active"===fe[50]?S:null," ").concat(ce?T:null),disabled:ce,onClick:Ne,children:"50"}),(0,E.jsx)("div",{className:"".concat(y," ").concat(P,"  ").concat("active"===fe[100]?S:null," ").concat(ce?T:null),disabled:ce,onClick:Ne,children:"100"}),(0,E.jsx)("div",{className:"".concat(y," ").concat(C,"  ").concat("active"===fe[150]?S:null," ").concat(ce?T:null),disabled:ce,onClick:Ne,children:"150"})]}),(0,E.jsxs)("div",{className:G,children:["Chip zone",(0,E.jsxs)("div",{className:d,children:[(0,E.jsxs)("div",{className:"".concat(o," ").concat(ce?T:null),id:"green",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"0"===e.key})),"0"]}),(0,E.jsxs)("div",{className:"".concat(r," ").concat(ce?T:null),id:"red",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"3"===e.key})),"3"]}),(0,E.jsxs)("div",{className:"".concat(u," ").concat(ce?T:null),id:"black",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"1"===e.key})),"1"]})]}),(0,E.jsxs)("div",{className:d,children:[(0,E.jsxs)("div",{className:"".concat(r," ").concat(ce?T:null),id:"red",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"4"===e.key})),"4"]}),(0,E.jsxs)("div",{className:"".concat(u," ").concat(ce?T:null),id:"black",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"6"===e.key})),"6"]}),(0,E.jsxs)("div",{className:"".concat(r," ").concat(ce?T:null),id:"red",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"8"===e.key})),"8"]})]}),(0,E.jsxs)("div",{className:d,children:[(0,E.jsxs)("div",{className:"".concat(u," ").concat(ce?T:null),id:"black",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"2"===e.key})),"2"]}),(0,E.jsxs)("div",{className:"".concat(r," ").concat(ce?T:null),id:"red",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"7"===e.key})),"7"]}),(0,E.jsxs)("div",{className:"".concat(u," ").concat(ce?T:null),id:"black",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"5"===e.key})),"5"]})]}),(0,E.jsxs)("div",{className:d,children:[(0,E.jsxs)("div",{className:"".concat(s," ").concat(ce?T:null),id:"black",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"AB"===e.key})),"AB"]}),(0,E.jsxs)("div",{className:"".concat(v," ").concat(ce?T:null),id:"red",disabled:ce,onClick:ye,children:[Be.filter((function(e){return"AR"===e.key})),"AR"]})]})]})]})]})}R.defaultModules.set(I,{})}}]);
//# sourceMappingURL=game-page.670d7d68.chunk.js.map