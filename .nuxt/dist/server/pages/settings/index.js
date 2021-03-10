exports.ids = [6];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=1312aeb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-1312aeb0><div class=\"row\" data-v-1312aeb0><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-1312aeb0><h1 class=\"text-xs-center\" data-v-1312aeb0>Your Settings</h1> <form data-v-1312aeb0><fieldset data-v-1312aeb0><fieldset class=\"form-group\" data-v-1312aeb0><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.userForm.image)))+" class=\"form-control\" data-v-1312aeb0></fieldset> <fieldset class=\"form-group\" data-v-1312aeb0><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userForm.username)))+" class=\"form-control form-control-lg\" data-v-1312aeb0></fieldset> <fieldset class=\"form-group\" data-v-1312aeb0><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-1312aeb0>"+_vm._ssrEscape(_vm._s(_vm.userForm.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-1312aeb0><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userForm.email)))+" class=\"form-control form-control-lg\" data-v-1312aeb0></fieldset> <fieldset class=\"form-group\" data-v-1312aeb0><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userForm.password)))+" class=\"form-control form-control-lg\" data-v-1312aeb0></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-1312aeb0>\n                Update Settings\n              </button></fieldset></form> <hr data-v-1312aeb0> <button class=\"btn btn-outline-danger\" data-v-1312aeb0>\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=1312aeb0&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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
//
//


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'settings',

  data() {
    return {
      userForm: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  created() {
    this.userForm = JSON.parse(JSON.stringify(this.user));
    console.log(this.userForm);
  },

  methods: {
    handleSubmit() {
      Object(user["e" /* userUpdate */])({
        user: this.userForm
      }).then(res => {
        if (res.success) {}
      }).catch(err => console.log(err));
    },

    handleLogout() {
      Cookie.remove('user');
      this.$store.commit('REMOVE_USER');
      this.$router.push('/');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1312aeb0",
  "d6cc8e46"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map