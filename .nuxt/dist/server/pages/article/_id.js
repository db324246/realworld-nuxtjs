exports.ids = [1];
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

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return articleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tagList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return articleFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unfavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const articleList = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/articles',
    method: 'get',
    params: data
  });
};
const tagList = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/tags',
    method: 'get'
  });
};
const articleFeed = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: '/api/articles/feed',
    method: 'get',
    params: data
  });
};
const favorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/favorite`,
    method: 'post'
  });
};
const unfavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/favorite`,
    method: 'delete'
  });
};
const getArticle = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'get'
  });
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=template&id=37104fb2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-37104fb2>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-37104fb2>","</div>",[_vm._ssrNode("<h1 data-v-37104fb2>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{model:{value:(_vm.article),callback:function ($$v) {_vm.article=$$v},expression:"article"}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-37104fb2>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-37104fb2><div class=\"col-md-12\" data-v-37104fb2>"+_vm._ssrEscape("\n        "+_vm._s(_vm.article.body)+"\n      ")+"</div></div> <hr data-v-37104fb2> "),_vm._ssrNode("<div class=\"article-actions\" data-v-37104fb2>","</div>",[_c('article-meta',{model:{value:(_vm.article),callback:function ($$v) {_vm.article=$$v},expression:"article"}})],1),_vm._ssrNode(" <div class=\"row\" data-v-37104fb2><div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-37104fb2><form class=\"card comment-form\" data-v-37104fb2><div class=\"card-block\" data-v-37104fb2><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-37104fb2></textarea></div> <div class=\"card-footer\" data-v-37104fb2><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-37104fb2> <button class=\"btn btn-sm btn-primary\" data-v-37104fb2>\n            Post Comment\n            </button></div></form> <div class=\"card\" data-v-37104fb2><div class=\"card-block\" data-v-37104fb2><p class=\"card-text\" data-v-37104fb2>With supporting text below as a natural lead-in to additional content.</p></div> <div class=\"card-footer\" data-v-37104fb2><a href class=\"comment-author\" data-v-37104fb2><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-37104fb2></a>\n             \n            <a href class=\"comment-author\" data-v-37104fb2>Jacob Schmidt</a> <span class=\"date-posted\" data-v-37104fb2>Dec 29th</span></div></div> <div class=\"card\" data-v-37104fb2><div class=\"card-block\" data-v-37104fb2><p class=\"card-text\" data-v-37104fb2>With supporting text below as a natural lead-in to additional content.</p></div> <div class=\"card-footer\" data-v-37104fb2><a href class=\"comment-author\" data-v-37104fb2><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\" data-v-37104fb2></a>\n             \n            <a href class=\"comment-author\" data-v-37104fb2>Jacob Schmidt</a> <span class=\"date-posted\" data-v-37104fb2>Dec 29th</span> <span class=\"mod-options\" data-v-37104fb2><i class=\"ion-edit\" data-v-37104fb2></i> <i class=\"ion-trash-a\" data-v-37104fb2></i></span></div></div></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=template&id=37104fb2&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleMeta.vue?vue&type=template&id=5f79b0fd&scoped=true&
var ArticleMetavue_type_template_id_5f79b0fd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
    path: ("profile/" + (_vm.value.author.username))
  }}},[_c('img',{attrs:{"src":_vm.value.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"author\" data-v-5f79b0fd>","</div>",[_c('nuxt-link',{attrs:{"to":{
        path: ("profile/" + (_vm.value.author.username))
      }}},[_vm._v(_vm._s(_vm.value.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-5f79b0fd>"+_vm._ssrEscape(_vm._s(_vm.value.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.followHanding))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.value.author.following}))+" data-v-5f79b0fd><i class=\"ion-plus-round\" data-v-5f79b0fd></i>"+_vm._ssrEscape("\n     \n    Follow "+_vm._s(_vm.value.author.username)+" ")+"<span class=\"counter\" data-v-5f79b0fd></span></button>\n    \n  <button"+(_vm._ssrAttr("disabled",_vm.favouriteHanding))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.value.favorited}))+" data-v-5f79b0fd><i class=\"ion-heart\" data-v-5f79b0fd></i>\n     \n    Favorite Post <span class=\"counter\" data-v-5f79b0fd>"+_vm._ssrEscape("("+_vm._s(_vm.value.favoritesCount)+")")+"</span></button>")],2)}
var ArticleMetavue_type_template_id_5f79b0fd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleMeta.vue?vue&type=template&id=5f79b0fd&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleMeta.vue?vue&type=script&lang=js&
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


/* harmony default export */ var ArticleMetavue_type_script_lang_js_ = ({
  name: 'article-meta',
  props: {
    value: {
      type: Object,
      default: () => ({
        author: {}
      })
    }
  },

  data() {
    return {
      followHanding: false,
      favouriteHanding: false
    };
  },

  created() {
    console.log(this.value);
  },

  methods: {
    handleFollow(author) {
      if (this.followHanding) return;
      this.followHanding = true;

      if (author.following) {
        Object(user["d" /* unfollow */])(author.username).then(res => {
          author.following = false;
          this.followHanding = false;
        }).catch(err => console.log(err));
      } else {
        Object(user["a" /* follow */])(author.username).then(res => {
          author.following = true;
          this.followHanding = false;
        }).catch(err => console.log(err));
      }
    },

    handleFavourite(article) {
      if (this.favouriteHanding) return;
      this.favouriteHanding = true;

      if (article.favorited) {
        Object(api_article["f" /* unfavorite */])(article.slug).then(res => {
          article.favoritesCount--;
          article.favorited = false;
          this.favouriteHanding = false;
        }).catch(err => console.log(err));
      } else {
        Object(api_article["c" /* favorite */])(article.slug).then(res => {
          article.favoritesCount++;
          article.favorited = true;
          this.favouriteHanding = false;
        }).catch(err => console.log(err));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ArticleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleMetavue_type_script_lang_js_ = (ArticleMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ArticleMeta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleMetavue_type_script_lang_js_,
  ArticleMetavue_type_template_id_5f79b0fd_scoped_true_render,
  ArticleMetavue_type_template_id_5f79b0fd_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "5f79b0fd",
  "4d4561be"
  
)

/* harmony default export */ var ArticleMeta = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=script&lang=js&
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


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'articleIndex',
  components: {
    ArticleMeta: ArticleMeta
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["d" /* getArticle */])(params.id);
    return {
      article: data.article
    };
  },

  data() {
    return {};
  },

  created() {},

  methods: {}
});
// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/_id.vue



function _id_injectStyles (context) {
  
  
}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "37104fb2",
  "a76d5a00"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map