(this["webpackJsonpecommerce-react-app"]=this["webpackJsonpecommerce-react-app"]||[]).push([[5],{110:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u}));var r=n(11),a=function(e){return e.shop},c=Object(r.a)([a],(function(e){return e.collections})),i=Object(r.a)([c],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),l=function(e){return Object(r.a)([c],(function(t){return t?t[e]:null}))},o=Object(r.a)([a],(function(e){return e.isFetching})),u=Object(r.a)([a],(function(e){return!!e.collections}))},111:function(e,t,n){},112:function(e,t,n){"use strict";var r=n(43),a=n(0),c=n.n(a),i=n(44);t.a=function(e){return function(t){var n=t.isLoading,a=Object(r.a)(t,["isLoading"]);return n?c.a.createElement(i.a,null):c.a.createElement(e,a)}}},113:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(16),i=n(21);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createElement("path",{d:"M12.2 9h1.6V6.8H16V5.2h-2.2V3h-1.6v2.2H10v1.6h2.2zM20 5v5.5L7.4 12.7 5 3H1.2a1 1 0 000 2h2.3l3.2 13H20v-2H8.3l-.4-1.3L22 12.2V5zM7 19a1.5 1.5 0 101.5 1.5A1.5 1.5 0 007 19zm12 0a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0019 19z"}),s=function(e){var t=e.svgRef,n=e.title,r=o(e,["svgRef","title"]);return a.a.createElement("svg",l({"data-name":"Layer 1",width:"48px",height:"48px",viewBox:"0 0 24 24",fill:"#fff",ref:t},r),n?a.a.createElement("title",null,n):null,u)},f=a.a.forwardRef((function(e,t){return a.a.createElement(s,l({svgRef:t},e))}));n.p,n(111);t.a=Object(c.b)(null,(function(e){return{addItem:function(t){return e(Object(i.a)(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,i=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},"$",c)),a.a.createElement("div",{onClick:function(){return n(t)},className:"add-to-cart-button"},a.a.createElement(f,null)))}))},149:function(e,t,n){},150:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(11),c=n(14),i=n(110),l=n(43),o=n(0),u=n.n(o),s=n(113);n(149);var f=function(e){var t=e.title,n=e.items,r=t.split(/(?=[A-Z])/).join(" ");return u.a.createElement("div",{className:"collection-preview"},u.a.createElement("h1",{className:"title"},r),u.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return u.a.createElement(s.a,{key:e.id,item:e})}))))};n(150);var m=Object(a.b)({collections:i.b}),v=Object(r.b)(m)((function(e){var t=e.collections;return u.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return u.a.createElement(f,Object.assign({key:t},n))})))})),b=n(112),p=Object(a.b)({isLoading:i.c}),d=Object(c.d)(Object(r.b)(p),b.a)(v);t.default=d}}]);
//# sourceMappingURL=5.50883051.chunk.js.map