(this["webpackJsonpecommerce-react-app"]=this["webpackJsonpecommerce-react-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"i",(function(){return m}));var r=n(8),a=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},c=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},u=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},i=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},o=function(){return{type:r.a.CHECK_USER_SESSION}},s=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},f=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},d=function(e){return{type:r.a.SIGN_UP_START,payload:e}},p=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},m=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return m}));var r=n(3),a=n.n(r),c=n(9),u=n(36),i=n(31),o=n.n(i);n(93),n(96);o.a.initializeApp({apiKey:"AIzaSyBq-FdwuO7zhCWczit89bK8UAgtFO_wp5c",authDomain:"ecommerce-project-ae2a1.firebaseapp.com",databaseURL:"https://ecommerce-project-ae2a1.firebaseio.com",projectId:"ecommerce-project-ae2a1",storageBucket:"ecommerce-project-ae2a1.appspot.com",messagingSenderId:"578183360297",appId:"1:578183360297:web:3360afb440740ba38f5138"});var s=function(){var e=Object(u.a)(a.a.mark((function e(t,n){var r,u,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=p.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return u=t.displayName,i=t.email,o=new Date,e.prev=9,e.next=12,r.set(Object(c.a)({displayName:u,email:i,createdAt:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},f=function(){return new Promise((function(e,t){var n=d.onAuthStateChanged((function(t){n(),e(t)}),t)}))},d=o.a.auth(),p=o.a.firestore(),m=new o.a.auth.GoogleAuthProvider;m.setCustomParameters({prompt:"select_account"});o.a},17:function(e,t,n){"use strict";t.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"}},19:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},21:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(17),a=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},c=function(e){return{type:r.a.ADD_ITEM,payload:e}},u=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},i=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},o=function(){return{type:r.a.CLEAR_CART}}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o}));var r=n(11),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.cartItems})),u=Object(r.a)([a],(function(e){return e.hidden})),i=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),o=Object(r.a)([c],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n(19),a=(n(13),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),c=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},u=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},44:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(25),u=n(26);function i(){var e=Object(c.a)(["\n\tdisplay: inline-block;\n\twidth: 50px;\n\theight: 50px;\n\tborder: 3px solid rgba(195, 195, 195, 0.6);\n\tborder-radius: 50%;\n\tborder-top-color: #636767;\n\tanimation: spin 1s ease-in-out infinite;\n\t-webkit-animation: spin 1s ease-in-out infinite;\n\t@keyframes spin {\n\t\tto {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t}\n\t}\n\t@-webkit-keyframes spin {\n\t\tto {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t}\n\t}\n"]);return i=function(){return e},e}function o(){var e=Object(c.a)(["\n\theight: 60vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return o=function(){return e},e}var s=u.a.div(o()),l=u.a.div(i());t.a=function(e){return a.a.createElement(s,null,a.a.createElement(l,null))}},46:function(e,t,n){"use strict";var r=n(43),a=n(0),c=n.n(a);n(82);t.a=function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,u=Object(r.a)(e,["children","isGoogleSignIn","inverted"]);return c.a.createElement("button",Object.assign({className:"".concat(n?"google-sign-in":""," ").concat(a?"inverted":""," custom-button")},u),t)}},51:function(e,t,n){"use strict";var r=n(58),a=n(59),c=n(70),u=n(60),i=n(71),o=n(0),s=n.n(o),l=n(25),f=n(26);function d(){var e=Object(l.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]);return d=function(){return e},e}function p(){var e=Object(l.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"]);return p=function(){return e},e}function m(){var e=Object(l.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return m=function(){return e},e}var b=f.a.div(m()),O=f.a.div(p(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),E=f.a.h2(d()),S=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={hasErrored:!1},e}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log({error:e}),console.log({info:t})}},{key:"render",value:function(){return this.state.hasErrored?s.a.createElement(b,null,s.a.createElement(O,{imageUrl:"https://i.imgur.com/yW2W9SC.png"}),s.a.createElement(E,null,"Sorry this page is broken. ")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),t}(o.Component);t.a=S},56:function(e,t,n){e.exports=n.p+"static/media/logo.c6ae4e29.svg"},63:function(e,t,n){e.exports=n.p+"static/media/machine-icon.d93dcf69.svg"},64:function(e,t,n){e.exports=n.p+"static/media/grinder-icon.480e7d7d.svg"},65:function(e,t,n){e.exports=n.p+"static/media/pourover-icon.1b0ca1c2.svg"},66:function(e,t,n){e.exports=n.p+"static/media/kettle-icon.5ce998ba.svg"},67:function(e,t,n){e.exports=n.p+"static/media/frenchpress-icon.7c17a3a1.svg"},73:function(e,t,n){e.exports=n(98)},8:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(34),u=n.n(c),i=n(22),o=n(16),s=n(24),l=n(11),f=n(12),d=Object(l.a)([function(e){return e.user}],(function(e){return e.currentUser})),p=n(44),m=n(30),b=n(56),O=n.n(b),E=n(46);n(83);var S=Object(r.memo)((function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,u=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("div",{className:"cart-image"},a.a.createElement("img",{src:n,alt:"item"})),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},u," x $",r)))})),_=n(21);var v=Object(o.b)(null,(function(e){return{toggleCartHidden:function(){return e(Object(_.e)())}}}))((function(e){var t=e.children,n=e.toggleCartHidden,c=Object(r.useRef)(null);return function(e,t){function n(n){e.current&&!e.current.contains(n.target)&&t()}Object(r.useEffect)((function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}))}(c,n),a.a.createElement("div",{ref:c},t)}));n(84);var h=Object(l.b)({cartItems:m.b}),I=Object(s.g)(Object(o.b)(h)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement(v,null,a.a.createElement("div",{className:"inside-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return a.a.createElement(S,{key:e.id,item:e})})):a.a.createElement("span",{className:"empty-message"},"Your Cart is empty!")),a.a.createElement(E.a,{onClick:function(){n.push("/checkout"),r(Object(_.e)())}},"Go To Checkout"))))})));function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T=a.a.createElement("g",{fill:"#010002"},a.a.createElement("path",{d:"M255.1 116.5a8.1 8.1 0 100-16.2H143.5a8.1 8.1 0 100 16.2H255z"}),a.a.createElement("path",{d:"M367 100.3h-55.3a8.1 8.1 0 100 16.2h47.2v274.7H48.5V116.5h44.6a8.1 8.1 0 100-16.2H40.4a8.1 8.1 0 00-8.1 8v291c0 4.5 3.6 8.2 8 8.2h326.8c4.4 0 8-3.7 8-8.2v-291c0-4.4-3.5-8-8-8z"}),a.a.createElement("path",{d:"M282.6 134.8c4.5 0 8.1-3.6 8.1-8.1V67.4c0-37.2-40.1-67.4-89.6-67.4-49.3 0-89.4 30.2-89.4 67.4v59.3a8.1 8.1 0 1016.2 0V67.4c0-28.2 32.9-51.1 73.4-51.1 40.3 0 73.2 22.9 73.2 51v59.4c0 4.5 3.6 8.1 8 8.1zM98.9 147.6a21 21 0 0041.8 0 8.1 8.1 0 10-16.2 0 4.7 4.7 0 01-9.4 0 8.1 8.1 0 10-16.2 0zM282.6 168.5a21 21 0 0021-21 8.1 8.1 0 10-16.3 0 4.7 4.7 0 01-9.4 0 8.1 8.1 0 10-16.2 0 21 21 0 0020.9 21z"})),g=function(e){var t=e.svgRef,n=e.title,r=C(e,["svgRef","title"]);return a.a.createElement("svg",j({viewBox:"0 0 407.5 407.5",ref:t},r),n?a.a.createElement("title",null,n):null,T)},N=a.a.forwardRef((function(e,t){return a.a.createElement(g,j({svgRef:t},e))}));n.p,n(86);var y=Object(l.b)({itemCount:m.c}),x=Object(o.b)(y,(function(e){return{toggleCartHidden:function(){return e(Object(_.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(N,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))}));n(87);var U=Object(l.b)({currentUser:d,hidden:m.a}),R=Object(o.b)(U,(function(e){return{signOutStart:function(){return e(Object(f.g)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return a.a.createElement("div",{className:"header"},a.a.createElement(i.b,{to:"/"},a.a.createElement("div",{className:"logo-container"},a.a.createElement("img",{src:O.a,className:"logo",alt:"logo"}))),a.a.createElement("div",{className:"options"},a.a.createElement(i.b,{className:"option",to:"/shop"},a.a.createElement("span",null,"SHOP"),a.a.createElement("span",{className:"slider"})),t?a.a.createElement("div",{className:"option",onClick:r},"SIGN OUT"):a.a.createElement(i.b,{className:"option",to:"/signin"},"SIGN IN"),a.a.createElement(x,null)),n?null:a.a.createElement(I,null))})),w=n(51),A=(n(88),Object(r.lazy)((function(){return n.e(7).then(n.bind(null,152))}))),k=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,150))})),L=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,153))})),G=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,151))}));var F=Object(l.b)({currentUser:d}),M=Object(o.b)(F,(function(e){return{checkUserSession:function(){return e(Object(f.a)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement(r.Fragment,null,a.a.createElement(R,null),a.a.createElement(s.d,null,a.a.createElement(w.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(p.a,null)},a.a.createElement(s.b,{exact:!0,path:"/",component:A}),a.a.createElement(s.b,{path:"/shop",component:k}),a.a.createElement(s.b,{exact:!0,path:"/checkout",component:L}),a.a.createElement(s.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(s.a,{to:"/"}):a.a.createElement(G,null)}})))))})),H=n(61),P=n(14),D=n(32),z=(n(89),n(69)),q=n(62),K=n.n(q),V=n(9),W=n(8),B={currentUser:null,error:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.a.SIGN_IN_SUCCESS:return Object(V.a)({},e,{currentUser:t.payload,error:null});case W.a.SIGN_OUT_SUCCESS:return Object(V.a)({},e,{currentUser:null,error:null});case W.a.SIGN_IN_FAILURE:case W.a.SIGN_OUT_FAILURE:case W.a.SIGN_UP_FAILURE:return Object(V.a)({},e,{error:t.payload});default:return e}},Y=n(17),$=n(68),Q=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(V.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object($.a)(e),[Object(V.a)({},t,{quantity:1})])},X=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(V.a)({},e,{quantity:e.quantity-1}):e}))},Z={hidden:!0,cartItems:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.a.TOGGLE_CART_HIDDEN:return Object(V.a)({},e,{hidden:!e.hidden});case Y.a.ADD_ITEM:return Object(V.a)({},e,{cartItems:Q(e.cartItems,t.payload)});case Y.a.REMOVE_ITEM:return Object(V.a)({},e,{cartItems:X(e.cartItems,t.payload)});case Y.a.CLEAR_ITEM_FROM_CART:return Object(V.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case Y.a.CLEAR_CART:return Object(V.a)({},e,{cartItems:[]});default:return e}},te=n(63),ne=n.n(te),re=n(64),ae=n.n(re),ce=n(65),ue=n.n(ce),ie=n(66),oe=n.n(ie),se=n(67),le=n.n(se),fe={sections:[{title:"Kettles",imageUrl:oe.a,id:4,linkUrl:"shop/kettles"},{title:"Coffee Grinders",imageUrl:ae.a,id:2,linkUrl:"shop/coffeegrinders"},{title:"French Presses",imageUrl:le.a,id:5,linkUrl:"shop/frenchpresses"},{title:"Coffee Machines",imageUrl:ne.a,id:1,linkUrl:"shop/coffeemachines"},{title:"Pour Overs",imageUrl:ue.a,id:3,linkUrl:"shop/pourovers"}]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},pe=n(19),me={collections:null,isFetching:!1,errorMessage:void 0},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a.FETCH_COLLECTIONS_START:return Object(V.a)({},e,{isFetching:!0});case pe.a.FETCH_COLLECTIONS_SUCCESS:return Object(V.a)({},e,{isFetching:!1,collections:t.payload});case pe.a.FETCH_COLLECTIONS_FAILURE:return Object(V.a)({},e,{isFetching:!1,errorMessage:t.payload});default:return e}},Oe={key:"root",storage:K.a,whitelist:["cart"]},Ee=Object(P.c)({user:J,cart:ee,directory:de,shop:be}),Se=Object(D.a)(Oe,Ee),_e=n(3),ve=n.n(_e),he=n(5),Ie=n(13),je=n(39),Ce=ve.a.mark(Ne),Te=ve.a.mark(ye),ge=ve.a.mark(xe);function Ne(){var e,t,n;return ve.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=Ie.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(he.b)(Ie.b,t);case 7:return n=r.sent,r.next=10,Object(he.c)(Object(je.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(he.c)(Object(je.a)(r.t0.message));case 16:case"end":return r.stop()}}),Ce,null,[[0,12]])}function ye(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(pe.a.FETCH_COLLECTIONS_START,Ne);case 2:case"end":return e.stop()}}),Te)}function xe(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([Object(he.b)(ye)]);case 2:case"end":return e.stop()}}),ge)}var Ue=ve.a.mark(Ke),Re=ve.a.mark(Ve),we=ve.a.mark(We),Ae=ve.a.mark(Be),ke=ve.a.mark(Je),Le=ve.a.mark(Ye),Ge=ve.a.mark($e),Fe=ve.a.mark(Qe),Me=ve.a.mark(Xe),He=ve.a.mark(Ze),Pe=ve.a.mark(et),De=ve.a.mark(tt),ze=ve.a.mark(nt),qe=ve.a.mark(rt);function Ke(e,t){var n,r;return ve.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(he.b)(Ie.c,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(he.c)(Object(f.e)(Object(V.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(he.c)(Object(f.d)(a.t0));case 15:case"end":return a.stop()}}),Ue,null,[[0,11]])}function Ve(){var e,t;return ve.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ie.a.signInWithPopup(Ie.f);case 3:return e=n.sent,t=e.user,n.next=7,Ke(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(he.c)(Object(f.d)(n.t0));case 13:case"end":return n.stop()}}),Re,null,[[0,9]])}function We(e){var t,n,r,a,c;return ve.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.email,r=t.password,u.prev=1,u.next=4,Ie.a.signInWithEmailAndPassword(n,r);case 4:return a=u.sent,c=a.user,u.next=8,Ke(c);case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(he.c)(Object(f.d)(u.t0));case 14:case"end":return u.stop()}}),we,null,[[1,10]])}function Be(){var e;return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Ie.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Ke(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(he.c)(Object(f.d)(t.t0));case 14:case"end":return t.stop()}}),Ae,null,[[0,10]])}function Je(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie.a.signOut();case 3:return e.next=5,Object(he.c)(Object(f.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(he.c)(Object(f.f)(e.t0));case 11:case"end":return e.stop()}}),ke,null,[[0,7]])}function Ye(e){var t,n,r,a,c,u;return ve.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,i.prev=1,i.next=4,Ie.a.createUserWithEmailAndPassword(n,r);case 4:return c=i.sent,u=c.user,i.next=8,Object(he.c)(Object(f.k)({user:u,additionalData:{displayName:a}}));case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(he.c)(Object(f.i)(i.t0));case 14:case"end":return i.stop()}}),Le,null,[[1,10]])}function $e(e){var t,n,r;return ve.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,Ke(n,r);case 3:case"end":return a.stop()}}),Ge)}function Qe(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.GOOGLE_SIGN_IN_START,Ve);case 2:case"end":return e.stop()}}),Fe)}function Xe(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.EMAIL_SIGN_IN_START,We);case 2:case"end":return e.stop()}}),Me)}function Ze(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.CHECK_USER_SESSION,Be);case 2:case"end":return e.stop()}}),He)}function et(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.SIGN_OUT_START,Je);case 2:case"end":return e.stop()}}),Pe)}function tt(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.SIGN_UP_START,Ye);case 2:case"end":return e.stop()}}),De)}function nt(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.SIGN_UP_SUCCESS,$e);case 2:case"end":return e.stop()}}),ze)}function rt(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([Object(he.b)(Qe),Object(he.b)(Xe),Object(he.b)(Ze),Object(he.b)(et),Object(he.b)(tt),Object(he.b)(nt)]);case 2:case"end":return e.stop()}}),qe)}var at=ve.a.mark(it),ct=ve.a.mark(ot),ut=ve.a.mark(st);function it(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.c)(Object(_.b)());case 2:case"end":return e.stop()}}),at)}function ot(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(W.a.SIGN_OUT_SUCCESS,it);case 2:case"end":return e.stop()}}),ct)}function st(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([Object(he.b)(ot)]);case 2:case"end":return e.stop()}}),ut)}var lt=ve.a.mark(ft);function ft(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([Object(he.b)(xe),Object(he.b)(rt),Object(he.b)(st)]);case 2:case"end":return e.stop()}}),lt)}var dt=Object(z.a)(),pt=[dt];var mt=Object(P.e)(Se,P.a.apply(void 0,pt));dt.run(ft);var bt=Object(D.b)(mt);D.b;u.a.render(a.a.createElement(o.a,{store:mt},a.a.createElement(i.a,null,a.a.createElement(H.a,{persistor:bt},a.a.createElement(M,null)))),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.dfccdb6a.chunk.js.map