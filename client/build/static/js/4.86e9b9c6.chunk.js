(this["webpackJsonpecommerce-react-app"]=this["webpackJsonpecommerce-react-app"]||[]).push([[4],{111:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u}));var a=n(11),r=function(e){return e.shop},c=Object(a.a)([r],(function(e){return e.collections})),i=Object(a.a)([c],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),o=function(e){return Object(a.a)([c],(function(t){return t?t[e]:null}))},l=Object(a.a)([r],(function(e){return e.isFetching})),u=Object(a.a)([r],(function(e){return!!e.collections}))},112:function(e,t,n){},113:function(e,t,n){"use strict";var a=n(43),r=n(0),c=n.n(r),i=n(44);t.a=function(e){return function(t){var n=t.isLoading,r=Object(a.a)(t,["isLoading"]);return n?c.a.createElement(i.a,null):c.a.createElement(e,r)}}},114:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(16),i=n(21);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createElement("path",{d:"M12.2 9h1.6V6.8H16V5.2h-2.2V3h-1.6v2.2H10v1.6h2.2zM20 5v5.5L7.4 12.7 5 3H1.2a1 1 0 000 2h2.3l3.2 13H20v-2H8.3l-.4-1.3L22 12.2V5zM7 19a1.5 1.5 0 101.5 1.5A1.5 1.5 0 007 19zm12 0a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0019 19z"}),s=function(e){var t=e.svgRef,n=e.title,a=l(e,["svgRef","title"]);return r.a.createElement("svg",o({"data-name":"Layer 1",width:"48px",height:"48px",viewBox:"0 0 24 24",fill:"#fff",ref:t},a),n?r.a.createElement("title",null,n):null,u)},f=r.a.forwardRef((function(e,t){return r.a.createElement(s,o({svgRef:t},e))}));n.p,n(112);t.a=Object(c.b)(null,(function(e){return{addItem:function(t){return e(Object(i.a)(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$",c)),r.a.createElement("div",{onClick:function(){return n(t)},className:"add-to-cart-button"},r.a.createElement(f,null)))}))},152:function(e,t,n){e.exports=n.p+"static/media/frenchpress-cover.b3abfc19.jpg"},153:function(e,t,n){e.exports=n.p+"static/media/kettle-cover.11ef3e53.jpg"},154:function(e,t,n){e.exports=n.p+"static/media/machine-cover.b084d18b.jpg"},155:function(e,t,n){e.exports=n.p+"static/media/grinder-cover.b37167c7.jpg"},156:function(e,t,n){e.exports=n.p+"static/media/pourover-cover.ac54ec94.jpg"},157:function(e,t,n){},158:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(14),c=n(11),i=n(111),o=n(0),l=n.n(o),u=n(114),s=n(152),f=n.n(s),m=n(153),p=n.n(m),b=n(154),d=n.n(b),v=n(155),g=n.n(v),j=n(156),O=n.n(j),h=(n(157),""),E=function(e){var t=e.title;switch(t){case"FrenchPresses":h=f.a;break;case"Kettles":h=p.a;break;case"CoffeeMachines":h=d.a;break;case"CoffeeGrinders":h=g.a;break;case"PourOvers":h=O.a}var n=t.split(/(?=[A-Z])/).join(" ");return l.a.createElement("div",{className:"parallax",style:{backgroundImage:"url(".concat(h,")")}},l.a.createElement("h2",{className:"title"},n))};n(158);var y=Object(a.b)((function(e,t){return{collection:Object(i.a)(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,a=t.items;return l.a.createElement("div",{className:"collection-page"},l.a.createElement(E,{title:n}),l.a.createElement("div",{className:"items"},a.map((function(e){return l.a.createElement(u.a,{key:e.id,item:e,className:"item"})}))))})),k=n(113),x=Object(c.b)({isLoading:function(e){return!Object(i.d)(e)}}),N=Object(r.d)(Object(a.b)(x),k.a)(y);t.default=N}}]);
//# sourceMappingURL=4.86e9b9c6.chunk.js.map