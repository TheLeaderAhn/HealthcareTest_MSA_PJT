(function(t){function e(e){for(var a,o,i=e[0],l=e[1],u=e[2],f=0,m=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;n.push(["56d7","chunk-vendors"]),r()})({"2d40":function(t,e,r){},"518a":function(t,e,r){"use strict";r("b649")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],o={name:"App"},i=o,l=r("2877"),u=Object(l["a"])(i,s,n,!1,null,null,null),c=u.exports,f=r("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text"},[r("h1",[t._v("HealthCare Management")])])}],d={},v=d,g=(r("cd83"),Object(l["a"])(v,m,p,!1,null,null,null)),h=g.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"register-form"},[t._m(0),r("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"emailAddress"}},[t._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.emailAddress,expression:"form.emailAddress"}],staticClass:"form-control",attrs:{type:"email",id:"emailAddress"},domProps:{value:t.form.emailAddress},on:{input:function(e){e.target.composing||t.$set(t.form,"emailAddress",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),r("br"),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("가입하기")]),r("br"),t._m(1),t._m(2)])])]),t._m(3)])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo-wrapper"},[r("img",{staticClass:"logo",attrs:{src:"/static/images/logo2.png"}}),r("div",{staticClass:"tagline"},[r("strong",[r("h3",[t._v("HealthCare Management tool")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"accept-terms text-muted"},[t._v("By clicking “Create account”, you agree to our "),r("a",{attrs:{href:"#"}},[t._v("terms of service")]),t._v(" and "),r("a",{attrs:{href:"#"}},[t._v("privacy policy")]),t._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-center text-muted"},[t._v("Already have an account? "),r("a",{attrs:{href:"/login"}},[t._v("Sign in")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("span",{staticClass:"copyright"},[t._v("© 2022 안재영 https://www.안재영.com")]),r("ul",{staticClass:"footer-links list-inline float-right"},[r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[t._v("About")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[t._v("Terms of Service")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"https://github.com/taskagile/vuejs.spring-boot.mysql",target:"_blank"}},[t._v("GitHub")])])])])}],y=r("bc3a"),w=r.n(y),C={register:function(t){return new Promise((function(e,r){w.a.post("/registrations",t).then((function(t){var r=t.data;e(r)})).catch((function(t){r(t)}))}))}},P={name:"RegisterPage",data:function(){return{form:{username:"",emailAddress:"",password:""},errorMessage:""}},methods:{submitForm:function(){var t=this;C.register(this.form).then((function(){t.$router.push({name:"LoginPage"})})).catch((function(e){t.errorMessage="Failed to register user. "+(e.message?e.message:"Unknown")+"."}))}}},j=P,x=(r("518a"),Object(l["a"])(j,b,_,!1,null,"5ce79473",null)),O=x.exports;a["default"].use(f["a"]);var $=[{path:"/login",name:"LoginPage",component:h},{path:"/register",name:"RegisterPage",component:O}],A=new f["a"]({mode:"history",base:"/",routes:$}),k=A,E=r("2f62");a["default"].use(E["a"]);var M=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=r("1dce"),T=r.n(S),F=r("5f5b");r("ab8b"),r("2dd8");a["default"].use(F["a"]),w.a.defaults.baseURL="/api",w.a.defaults.headers.common.Accept="application/json",w.a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),a["default"].use(T.a),a["default"].config.productionTip=!1,new a["default"]({router:k,store:M,render:function(t){return t(c)}}).$mount("#app")},b649:function(t,e,r){},cd83:function(t,e,r){"use strict";r("2d40")}});
//# sourceMappingURL=app.5e02cd9f.js.map