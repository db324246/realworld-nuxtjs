exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* unused harmony export user */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return userUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unfollow; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const login = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/users/login',
    method: 'post',
    data
  });
};
const register = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/users',
    method: 'post',
    data
  });
};
const user = () => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/user',
    method: 'get'
  });
};
const userUpdate = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/user',
    method: 'put',
    data
  });
};
const follow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}/follow`,
    method: 'post'
  });
};
const unfollow = username => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/profiles/${username}/follow`,
    method: 'delete'
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=72e3bba1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-72e3bba1>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-72e3bba1>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-72e3bba1>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-72e3bba1>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-72e3bba1>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-72e3bba1>"+(_vm._ssrList((_vm.errors),function(value,key){return ((_vm._ssrList((value),function(item,index){return ("<li data-v-72e3bba1>"+_vm._ssrEscape(_vm._s(key)+" "+_vm._s(item))+"</li>")})))}))+"</ul> <form data-v-72e3bba1>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-72e3bba1><input type=\"text\" required=\"required\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-72e3bba1></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-72e3bba1><input type=\"email\" required=\"required\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-72e3bba1></fieldset> <fieldset class=\"form-group\" data-v-72e3bba1><input type=\"password\" minlength=\"8\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-72e3bba1></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-72e3bba1>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=72e3bba1&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: 'login-register',

  data() {
    return {
      user: {
        username: undefined,
        email: '111@333.cn',
        password: '12345678'
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },

  created() {},

  methods: {
    handleSubmit() {
      const p = this.isLogin ? Object(user["b" /* login */])({
        user: this.user
      }) : Object(user["c" /* register */])({
        user: this.user
      });
      p.then(res => {
        this.$store.commit('SET_USER', res.data.user);
        Cookie && Cookie.set('user', JSON.stringify(res.data.user));
        this.errors = {};
        this.$router.push('/');
      }).catch(err => {
        console.log(err);
        this.errors = err.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "72e3bba1",
  "ed41636a"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map