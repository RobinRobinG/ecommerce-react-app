(this["webpackJsonpecommerce-react-app"]=this["webpackJsonpecommerce-react-app"]||[]).push([[5],{135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(43),i=t(9),c=t(3),s=t.n(c),o=t(34);function u(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!a||t.length!==a);n=!0);}catch(s){r=!0,l=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=t(16),p=t(41);t(135);var d=function(e){var a=e.handleChange,t=e.label,n=Object(p.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:a},n)),t?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},t):null)},f=t(42),b=t(12);t(136);var g=Object(m.b)(null,(function(e){return{googleSignInStart:function(){return e(Object(b.c)())},emailSignInStart:function(a,t){return e(Object(b.b)({email:a,password:t}))}}}))((function(e){var a=e.googleSignInStart,t=e.emailSignInStart,c=u(Object(n.useState)({email:"",password:""}),2),m=c[0],p=c[1],b=m.email,g=m.password,v=function(){var e=Object(o.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(b,g);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(e){var a=e.target,t=a.value,n=a.name;p(Object(i.a)({},m,Object(l.a)({},n,t)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"title"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:v},r.a.createElement(d,{name:"email",type:"email",handleChange:h,value:b,label:"email",required:!0}),r.a.createElement(d,{name:"password",type:"password",value:g,handleChange:h,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(f.a,{type:"submit"}," Sign in "),r.a.createElement(f.a,{onClick:a,isGoogleSignIn:!0},"Sign in with Google"))))}));t(137);var v=Object(m.b)(null,(function(e){return{signUpStart:function(a){return e(Object(b.j)(a))}}}))((function(e){var a=e.signUpStart,t=u(Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),c=t[0],m=t[1],p=c.displayName,b=c.email,g=c.password,v=c.confirmPassword,h=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g===v){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:a({displayName:p,email:b,password:g});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),w=function(e){var a=e.target,t=a.name,n=a.value;m(Object(i.a)({},c,Object(l.a)({},t,n)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:h},r.a.createElement(d,{type:"text",name:"displayName",value:p,onChange:w,label:"Display Name",required:!0}),r.a.createElement(d,{type:"email",name:"email",value:b,onChange:w,label:"Email",required:!0}),r.a.createElement(d,{type:"password",name:"password",value:g,onChange:w,label:"Password",required:!0}),r.a.createElement(d,{type:"password",name:"confirmPassword",value:v,onChange:w,label:"Confirm Password",required:!0}),r.a.createElement(f.a,{type:"submit"},"SIGN UP")))}));t(138);a.default=function(e){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(g,null),r.a.createElement(v,null))}}}]);
//# sourceMappingURL=5.50b69441.chunk.js.map