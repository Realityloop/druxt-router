(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1076:function(t,e,r){"use strict";r.r(e);var n=r(552),o=(r(105),r(27)),c=r(24),i={name:"DruxtRouter",fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.redirect,o=t.route,e.next=3,r.dispatch("druxtRouter/get",o.fullPath);case 3:(c=e.sent).redirect&&n(c.redirect);case 5:case"end":return e.stop()}}),e)})))()},computed:Object(n.a)({component:function(){return this.route.component||!1},title:function(){return this.route.label||!1},props:function(){return this.route.props||!1}},Object(c.c)({redirect:function(t){return t.druxtRouter.redirect},route:function(t){return t.druxtRouter.route}})),head:function(){return{title:this.title,link:[{rel:"canonical",href:this.canonical||this.route.canonical}],meta:this.metatags||!1}}},u=r(67),a=Object(u.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.route?e(this.component,this._b({tag:"component"},"component",this.props,!1)):this._e()],1)}),[],!1,null,null,null);e.default=a.exports},546:function(t,e,r){var n=r(1),o=r(11);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:r(271)})},547:function(t,e,r){var n=r(1),o=r(2),c=r(16),i=r(42).f,u=r(11),a=o((function(){i(1)}));n({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},552:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(69),r(34),r(144),r(546),r(269),r(547),r(272),r(142),r(145);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);