/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return m})),r.d(t,"d",(function(){return f}));var o=r(62),n=function(data){return Object(o.b)({url:"/api/users/login",method:"post",data:data})},c=function(data){return Object(o.b)({url:"/api/users",method:"post",data:data})},l=function(data){return Object(o.b)({url:"/api/user",method:"put",data:data})},m=function(e){return Object(o.b)({url:"/api/profiles/".concat(e,"/follow"),method:"post"})},f=function(e){return Object(o.b)({url:"/api/profiles/".concat(e,"/follow"),method:"delete"})}},186:function(e,t,r){var o,n;!function(c){if(void 0===(n="function"==typeof(o=c)?o.call(t,r,t,e):o)||(e.exports=n),!0,e.exports=c(),!!0){var l=window.Cookies,m=window.Cookies=c();m.noConflict=function(){return window.Cookies=l,m}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(o){function n(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},n.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var m="";for(var f in c)c[f]&&(m+="; "+f,!0!==c[f]&&(m+="="+c[f].split(";")[0]));return document.cookie=t+"="+r+m}}function l(e,r){if("undefined"!=typeof document){for(var n={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),m=l.slice(1).join("=");r||'"'!==m.charAt(0)||(m=m.slice(1,-1));try{var f=t(l[0]);if(m=(o.read||o)(m,f)||t(m),r)try{m=JSON.parse(m)}catch(e){}if(n[f]=m,e===f)break}catch(e){}}return e?n[e]:n}}return n.set=c,n.get=function(e){return l(e,!1)},n.getJSON=function(e){return l(e,!0)},n.remove=function(t,r){c(t,"",e(r,{expires:-1}))},n.defaults={},n.withConverter=r,n}((function(){}))}))},190:function(e,t,r){"use strict";r.r(t);r(41),r(19),r(18),r(9),r(30);var o=r(15),n=r(28),c=r(184);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m=r(186),f={name:"settings",data:function(){return{userForm:{}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.b)(["user"])),created:function(){this.userForm=JSON.parse(JSON.stringify(this.user)),console.log(this.userForm)},methods:{handleSubmit:function(){Object(c.e)({user:this.userForm}).then((function(e){e.success})).catch((function(e){return console.log(e)}))},handleLogout:function(){m.remove("user"),this.$store.commit("REMOVE_USER"),this.$router.push("/")}}},d=r(29),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.image,expression:"userForm.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.userForm.image},on:{input:function(t){t.target.composing||e.$set(e.userForm,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.username,expression:"userForm.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.userForm.username},on:{input:function(t){t.target.composing||e.$set(e.userForm,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userForm.bio,expression:"userForm.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.userForm.bio},on:{input:function(t){t.target.composing||e.$set(e.userForm,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.email,expression:"userForm.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.userForm.email},on:{input:function(t){t.target.composing||e.$set(e.userForm,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userForm.password,expression:"userForm.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.userForm.password},on:{input:function(t){t.target.composing||e.$set(e.userForm,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n                Update Settings\n              ")])])]),e._v(" "),r("hr"),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:e.handleLogout}},[e._v("\n          Or click here to logout.\n        ")])])])])])}),[],!1,null,"1312aeb0",null);t.default=component.exports}}]);