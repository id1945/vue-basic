(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark mb-5"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Vue-Router")]),n("div",{staticClass:"collapse navbar-collapse"},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{exact:"",tag:"a",to:{path:"/"},"active-class":"active"}},[e._v("Home")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{tag:"a",to:{path:"/user"},"active-class":"active"}},[e._v("User")])],1)])]),n("router-view")],1)},o=[],c={},u=c,i=(n("034f"),n("2877")),s=Object(i["a"])(u,a,o,!1,null,null,null),l=s.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Home template ")])},v=[],b={},d=b,h=Object(i["a"])(d,f,v,!1,null,"6e88405e",null),m=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" User template"),n("br"),n("button",{staticClass:"btn btn-info",on:{click:e.backToHome}},[e._v("Back to home")])])},g=[],y={methods:{backToHome:function(){this.$router.push("/")}}},O=y,k=Object(i["a"])(O,_,g,!1,null,"1deac648",null),w=k.exports;r["a"].use(p["a"]);var j=new p["a"]({routes:[{path:"/",name:"homePage",component:m},{path:"/user",name:"user",component:w}]});r["a"].config.productionTip=!1,new r["a"]({router:j,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.83cc2dcd.js.map