"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{484:function(e,a,s){s.r(a),s.d(a,{default:function(){return b}});var l=s(439),c=s(791),i="GamePage_gameField__X+90x",d="GamePage_groupZone__IWmwc",t="GamePage_greenZone__fTnM8",n="GamePage_redZone__KBpkb",r="GamePage_blackZone__IY961",o="GamePage_allBlackZone__I-x-q",m="GamePage_allRedZone__L4dhI",h="GamePage_container__ciyGO",u="GamePage_label__hVPUW",_="GamePage_value__X89Yq",x="GamePage_input__Gccrs",v="GamePage_startGame__QEhAW",N=s(708),j=(s(435),s(653)),g=(s(512),s(525),s(184));N.defaultModules.set(j,{});var p=new N.Stack({dir1:"down",dir2:"left",firstpos1:50,firstpos2:50,spacing1:36,spacing2:36,push:"bottom",context:document.body});function b(){var e=(0,c.useState)(1e3),a=(0,l.Z)(e,2),s=a[0],j=a[1],b=(0,c.useState)(0),f=(0,l.Z)(b,2),k=f[0],G=f[1],P=(0,c.useState)(0),w=(0,l.Z)(P,2),Z=w[0],y=w[1],Y=(0,c.useState)(1),S=(0,l.Z)(Y,2),C=S[0],I=(S[1],(0,c.useState)(0)),W=(0,l.Z)(I,2),M=W[0],q=W[1],A=function(){if(0!==Number(k))return s<k?((0,N.alert)({title:"Not enough funds to bet!",delay:3e3,hide:!0,width:"400px",stack:p}),void G(0)):void(C!==Z?((0,N.error)({title:"Sorry, you lost :(",text:"You lost ".concat(k," credits!"),delay:2e3,hide:!0,width:"400px",stack:p}),j(s-Number(k)),q(0)):((0,N.success)({title:"Congratulations! You Win!",text:"You win ".concat(k," credits!"),delay:2e3,hide:!0,width:"400px",stack:p}),j(s+Number(k)),q(k)));(0,N.info)({title:"Place your bet!",delay:3e3,hide:!0,width:"400px",stack:p})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"wheel-container",children:[(0,g.jsx)("div",{className:"wheel"}),(0,g.jsx)("button",{className:v,onClick:function(){y(Math.floor(9*Math.random()+0)),A()},children:"SPIN"})]}),(0,g.jsxs)("div",{className:h,children:[(0,g.jsxs)("div",{className:u,children:["Your balance:",(0,g.jsx)("div",{className:_,children:s})]}),(0,g.jsx)("div",{className:u,children:(0,g.jsxs)("label",{children:["Your Bet:",(0,g.jsx)("input",{type:"number",name:"bet",className:x,value:k,placeholder:"Your bet",required:!0,onChange:function(e){G(e.currentTarget.value)}})]})}),(0,g.jsxs)("div",{className:u,children:["Your cheap:",(0,g.jsx)("div",{className:_,children:"0"})]}),(0,g.jsxs)("div",{className:u,children:["Your Win:",(0,g.jsx)("div",{className:_,children:M})]})]}),(0,g.jsxs)("div",{className:i,children:[(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("div",{className:t,id:"green",children:"0"}),(0,g.jsx)("div",{className:n,id:"red",children:"3"}),(0,g.jsx)("div",{className:r,id:"black",children:"1"})]}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("div",{className:n,children:"4"}),(0,g.jsx)("div",{className:r,children:"6"}),(0,g.jsx)("div",{className:n,children:"8"})]}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("div",{className:r,children:"2"}),(0,g.jsx)("div",{className:n,children:"7"}),(0,g.jsx)("div",{className:r,children:"5"})]}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("div",{className:o,children:"All black"}),(0,g.jsx)("div",{className:m,children:"All red"})]})]})]})}}}]);
//# sourceMappingURL=game-page.7933002e.chunk.js.map