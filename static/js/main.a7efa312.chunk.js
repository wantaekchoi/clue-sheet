(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[" ","\u2705","\u274c","\u2753"]},,function(e){e.exports={"\ubc94\uc778":["\uadf8\ub9b0","\uba38\uc2a4\ud0c0\ub4dc","\ud53c\ucf55","\ud50c\ub7fc","\uc2a4\uce7c\ub81b","\ud654\uc774\ud2b8"],"\ub3c4\uad6c":["\ub80c\uce58","\ucd1b\ub300","\ub2e8\uac80","\uad8c\ucd1d","\ud30c\uc774\ud504","\ubc27\uc904"],"\uc7a5\uc18c":["\uc695\uc2e4","\uc11c\uc7ac","\uac8c\uc784\ub8f8","\ucc28\uace0","\uce68\uc2e4","\uac70\uc2e4","\ubd80\uc5cc","\ub9c8\ub2f9","\uc2dd\ub2f9"]}},,,,function(e,t,n){e.exports=n(18)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),u=(n(16),n(2)),o=(n(17),n(6)),m=n.n(o),i=n(3),f=n(1);var s=function(){var e={default:7,min:2,max:7},t={default:0,checked:1,x:2};function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f[t.default];y[e].forEach(function(t,a){return c(e,a,n)})}function c(e,a,r){var c=y.slice();r===f[t.v]&&n(e,f[t.x]),c[e][a]=r,v(c)}function l(e){return y.filter(function(n){return n[e]===f[t.v]}).length>=j?"checked":"header"}var o=e.default,s=Object.keys(i).map(function(e){return i[e].length}).reduce(function(e,t){return e+t}),d=Object(a.useState)(Array.from({length:s},function(){return new Array(e.max).fill(f[t.default])})),E=Object(u.a)(d,2),y=E[0],v=E[1];Object(a.useEffect)(function(){var e=I.map(function(e,n){return y[a=n].every(function(e){return e===f[t.x]})?"expected":y[a].includes(f[t.v])?"checked":"normal";var a});J(e);var n=w.map(function(e,t){return l(t)});N(n)},[y]);var b=Object(a.useState)(o),h=Object(u.a)(b,2),p=h[0],g=h[1];Object(a.useEffect)(function(){var e=y.map(function(e,n){return e.map(function(e,a){if(a>=p){var r=f[t.default];return r!==e&&c(n,a,r),r}return e})});v(e);var n=Math.floor(s/p);O(n)},[p]);var k=Object(a.useState)(Math.floor(s/o)),x=Object(u.a)(k,2),j=x[0],O=x[1];Object(a.useEffect)(function(){var e=w.map(function(e,t){return l(y)});N(e)},[j]);var S=Object(a.useState)(new Array(e.max).fill("head")),A=Object(u.a)(S,2),w=A[0],N=A[1],C=Object(a.useState)(Array.from({length:e.max},function(e,t){return"P"+(t+1)})),M=Object(u.a)(C,2),F=M[0],P=M[1],B=Object(a.useState)(new Array(s).fill("normal")),D=Object(u.a)(B,2),I=D[0],J=D[1];function L(e){var t=e.index;return r.a.createElement(r.a.StrictMode,null,Array.from({length:p},function(e,n){return r.a.createElement("td",{key:n,className:"cell"},r.a.createElement("form",null,r.a.createElement("select",{className:"cell",value:y[t][n],onChange:function(e){return c(t,n,e.target.value)}},Array.from(f,function(e,t){return r.a.createElement("option",{key:t},e)}))))}))}return r.a.createElement(r.a.StrictMode,null,r.a.createElement(function(){var t=e.min,n=e.max;return r.a.createElement("form",{className:"number-setting"},r.a.createElement("label",null,"\ud50c\ub808\uc774\uc5b4 \uc218: ",r.a.createElement("select",{defaultValue:p,min:t,max:n,onChange:function(e){return g(e.target.value)}},Array.from({length:n-t+1},function(e,n){return r.a.createElement("option",{key:n},n+t)}))," \uba85"))},null),r.a.createElement(function(){return r.a.createElement("form",{className:"number-setting"},r.a.createElement("label",null,"1\uc778\ub2f9 \uce74\ub4dc \uc218: ",r.a.createElement("select",{defaultValue:j,min:1,max:s,onChange:function(e){return O(e.target.value)}},Array.from({length:e.max},function(e,t){return r.a.createElement("option",{key:t},t+1)}))," \uc7a5"))},null),r.a.createElement("table",null,r.a.createElement(function(){return r.a.createElement(r.a.StrictMode,{key:"table-header"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"empty",key:0}),Array.from({length:p},function(e,t){return r.a.createElement("th",{key:t+1,className:w[t],onClick:function(){return function(e){var t=F.slice();t[e]=prompt("\uc0c8\ub85c\uc6b4 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",F[e]),P(t)}(t)}},F[t])}))))},null),r.a.createElement(function(){var e=0;return r.a.createElement(r.a.StrictMode,{key:"table-body"},r.a.createElement("tbody",null,Object.keys(i).map(function(a,c){var l=r.a.createElement("tr",{key:c},r.a.createElement("td",{key:a,className:"head"},a+m.a.c(a,"\uc740/\ub294")+"?"),r.a.createElement("td",{key:a+"-empty",className:"empty",colSpan:o})),u=i[a].map(function(a,c){var l=e+c;return r.a.createElement("tr",{key:l},r.a.createElement("td",{key:l,className:I[l],onDoubleClick:function(){n(l,f[t.x])}},a),r.a.createElement(L,{index:l}))});return e+=i[a].length,r.a.createElement(r.a.StrictMode,{key:c},l,u)})))},null)))},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null))),d()}],[[7,1,2]]]);
//# sourceMappingURL=main.a7efa312.chunk.js.map