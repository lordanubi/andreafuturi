(this.webpackJsonpandreafuturi=this.webpackJsonpandreafuturi||[]).push([[0],[,,,,,,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var i=t(0),a=t(1),n=t.n(a),s=t(4),c=t.n(s);t(10),t(11);function o(e){return e/2*Math.tan(54*Math.PI/180)}var u=1e3,l=o(u),d=u/10,p=(1+Math.sqrt(5))/2;function h(e){return 2-(Math.floor((e+2)*p)-Math.floor((e+1)*p))}function j(e){return e%2!==0}t(12);var m=function(e){var r=[3*d,l-o(2*d),4*d,l,6*d,l,4*d,l-o(4*d),5*d,l-o(6*d),8*d,l,u,l,5*d,0,0,l,2*d,l].join(" ");return Object(i.jsx)("path",{fill:"none",stroke:"hsl(45.6deg, 100%, 50%)",strokeWidth:d/10*2,d:"M"+r+"z"})},f=(t(13),t(2));t(14);var v=function(e){var r=e.set.atoms,t=e.set.spacing*d;return Object(i.jsx)("svg",{className:e.classes,id:"#Line",y:e.y,x:e.x,children:Array.from(Array(r),(function(r,i){var n,s,c=[],o=1,l=1;j(i)&&(c.push("frequentAtom"),e.set.evenOddVerticalFlip&&(l=-1),"periodic"===e.set.phase&&(s={y:-(u+t)/2})),h(i)&&(c.push("quasirareAtom"),e.set.quasiPeriodicHorizontalFlip&&(o=-1),"quasiperiodic"===e.set.phase&&(s={y:-(u+t)/2})),h(i)&&j(i)&&c.push("rareAtom"),e.mirrorVer&&(l=-l),e.mirrorHor&&(o=-o),-1!==o&&-1!==l||(n={style:{"--transf":"scale("+o+","+l+")"}});var d=(e.set.evenOddVerticalFlip,(u+t)*i);return Object(a.createElement)("use",Object(f.a)(Object(f.a)(Object(f.a)({className:c.join(" "),x:d,href:"#Atom"},s),n),{},{key:i}))}))})};t(15);var O=function(e){var r=e.set.vertical,t=e.set.horizontal,n=r.spacing*d;return Object(i.jsx)(i.Fragment,{children:Array.from(Array(r.atoms),(function(i,s){var c,o,d,p,m=[];return j(s)&&(m.push("frequentLine"),r.evenOddVerticalFlip&&(o=!0),"periodic"===r.phase&&(p={x:-(u+n)/2})),h(s)&&(m.push("quasirareLine"),r.quasiPeriodicHorizontalFlip&&(c=!0),"quasiperiodic"===r.phase&&(p={x:-(u+n)/2})),h(s)&&j(s)&&m.push("rareLine"),d=e.set.chaotic?{mirrorHor:o,mirrorVer:c}:{mirrorVer:o,mirrorHor:c},Object(a.createElement)(v,Object(f.a)(Object(f.a)(Object(f.a)({},p),{},{y:(l+n)*s,set:t,classes:m.join(" ")},d),{},{key:s}))}))})};var b=function(e){return Object(i.jsx)("svg",{viewBox:"0 0 "+u+" "+l,className:"svgViewer",children:Object(i.jsx)(O,{set:{horizontal:{spacing:5,atoms:100,quasiPeriodicHorizontalFlip:!0,evenOddVerticalFlip:!0,phase:!1},vertical:{spacing:5,atoms:40,quasiPeriodicHorizontalFlip:!0,evenOddVerticalFlip:!0,phase:"periodic"},withCouples:!1,chaotic:!1}})})};var x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("svg",{className:"symbol",children:Object(i.jsx)("symbol",{id:"Atom",viewBox:"0 0 "+u+" "+l,children:Object(i.jsx)(m,{})})}),Object(i.jsx)(b,{})]})};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.ebefd074.chunk.js.map