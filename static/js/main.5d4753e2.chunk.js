(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={"\ubc94\uc778":["\uadf8\ub9b0","\uba38\uc2a4\ud0c0\ub4dc","\ud53c\ucf55","\ud50c\ub7fc","\uc2a4\uce7c\ub81b","\ud654\uc774\ud2b8"],"\ub3c4\uad6c":["\ub80c\uce58","\ucd1b\ub300","\ub2e8\uac80","\uad8c\ucd1d","\ud30c\uc774\ud504","\ubc27\uc904"],"\uc7a5\uc18c":["\uc695\uc2e4","\uc11c\uc7ac","\uac8c\uc784\ub8f8","\ucc28\uace0","\uce68\uc2e4","\uac70\uc2e4","\ubd80\uc5cc","\ub9c8\ub2f9","\uc2dd\ub2f9"]}},11:function(e,a,t){e.exports=t(24)},20:function(e,a,t){},22:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),u=(t(20),t(6)),s=t(4),o=t(7),m=t(2),i=t(3),f=(t(22),t(1)),d=t(5),h=t(10),y=t.n(h),b=function(){function e(){Object(m.a)(this,e)}return Object(i.a)(e,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return void 0===e?d:d[e]}}]),e}();b.index={default:0,check:1};var p=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).onChange=function(e){var a=e.target,n=a.name,r=a.value;switch(n){case"clue-sheet-cell":t.props.onChange(t.props.row,t.props.column,r);break;default:console.warn("undefined event")}},t}return Object(o.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=Array.from(b.get(),function(e,a){return r.a.createElement("option",{key:a},e)});return r.a.createElement("form",null,r.a.createElement("select",{className:"cell",name:"clue-sheet-cell",type:"select",value:this.props.value,onChange:this.onChange},e))}}]),a}(r.a.Component),v=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(u.a)(this,Object(s.a)(a).call(this,e))).onChange=function(e){var a=e.target,n=a.name,r=a.value;switch(n){case"number-of-players":t.setState(function(){return{numberOfPlayers:r}});break;case"number-of-items":t.setState(function(){return{numberOfItems:r}});break;case"number-of-cards-per-player":t.setState(function(){return{numberOfCardsPerPlayer:r}});break;default:console.warn("undefined event")}},t.onChangeCell=function(e,a,n){t.setState(function(r){var l=t.state.checkBoxesValues;l[e][a]=n;var c=t.state.itemRowHeadersClassNames;c[e]=t.checkRowHeaderClassName(l,e);var u=t.state.columnHeaderClassNames;return u[a]=t.checkColumnHeaderClassName(l,a),{checkBoxesValues:l,itemRowHeadersClassNames:c,columnHeaderClassName:u}})};var n=0;Object.keys(f).forEach(function(e){return n+=f[e].length});var r=a.number.default;return t.state={numberOfPlayers:r,numberOfItems:n,numberOfCardsPerPlayer:Math.floor(n/r),columnHeaderClassNames:new Array(a.number.max).fill("head"),itemRowHeadersClassNames:new Array(n).fill("normal"),checkBoxesValues:new Array(n).fill(0).map(function(e){return new Array(r).fill(b.get(b.index.default))})},t}return Object(o.a)(a,e),Object(i.a)(a,[{key:"checkRowHeaderClassName",value:function(e,a){return e[a].includes(b.get(b.index.check))?"checked":"normal"}},{key:"checkColumnHeaderClassName",value:function(e,a){return e.filter(function(e){return e[a]===b.get(b.index.check)}).length>=this.state.numberOfCardsPerPlayer?"checked":"header"}},{key:"renderNumberOfPlayersInput",value:function(){var e=a.number.min,t=a.number.max,n=a.number.default,l=Array.from({length:t-e+1},function(a,t){return r.a.createElement("option",{key:t},t+e)});return r.a.createElement("form",{className:"numer-of-players"},r.a.createElement("label",null,"\ud50c\ub808\uc774\uc5b4 \uc218: ",r.a.createElement("select",{name:"number-of-players",className:"numer-of-players",defaultValue:n,min:e,max:t,onChange:this.onChange},l)," \uba85"))}},{key:"renderNumberOfCardsPerPlayerInput",value:function(){var e=this.state.numberOfItems,a=this.state.numberOfCardsPerPlayer,t=Array.from({length:e-1+1},function(e,a){return r.a.createElement("option",{key:a},a+1)});return r.a.createElement("form",{className:"number-of-cards-per-player"},r.a.createElement("label",null,"1\uc778\ub2f9 \uce74\ub4dc \uc218: ",r.a.createElement("select",{name:"number-of-cards-per-player",className:"number-of-cards-per-player",defaultValue:a,min:1,max:e,onChange:this.onChange},t)," \uc7a5"))}},{key:"renderCheckBoxes",value:function(e){var a=this;return r.a.createElement(r.a.StrictMode,null,Array.from({length:this.state.numberOfPlayers},function(t,n){return r.a.createElement("td",{key:n,className:"cell"},r.a.createElement(p,{name:"cell",row:e,column:n,value:a.state.checkBoxesValues[e][n],onChange:a.onChangeCell}))}))}},{key:"renderTableHeader",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"empty",key:0}),Array.from({length:this.state.numberOfPlayers},function(a,t){return r.a.createElement(r.a.StrictMode,null,r.a.createElement("th",{key:t+1,className:e.state.columnHeaderClassNames[t]},"P",t+1))})))}},{key:"renderTableBody",value:function(){var e=this,a=0;return Object.keys(f).map(function(t){var n=Array.from(f[t],function(t,n){var l=n+a,c=e.renderCheckBoxes(l),u=e.state.itemRowHeadersClassNames[l];return r.a.createElement("tr",{key:l},r.a.createElement("td",{className:u},t),c)});return a+=f[t].length,r.a.createElement("tbody",null,r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"head"},t+y.a.c(t,"\uc740/\ub294")+"?"),r.a.createElement("td",{className:"empty",colSpan:e.state.columns})),n)})}},{key:"render",value:function(){var e=this.renderTableHeader(),a=this.renderTableBody();return r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,this.renderNumberOfPlayersInput(),this.renderNumberOfCardsPerPlayerInput()),r.a.createElement("table",null,e,a))}}]),a}(r.a.Component);v.number={min:2,max:7,default:7};var k=v,C=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,25)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null))),C()},5:function(e){e.exports=["_","\u2705","\u274e","\u2753","1\ufe0f\u20e3","2\ufe0f\u20e3","3\ufe0f\u20e3","4\ufe0f\u20e3","5\ufe0f\u20e3","6\ufe0f\u20e3"]}},[[11,3,2]]]);
//# sourceMappingURL=main.5d4753e2.chunk.js.map