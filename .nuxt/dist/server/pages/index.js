exports.ids = [3];
exports.modules = {

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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=763a3067&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-763a3067><div class=\"container\" data-v-763a3067><h1 class=\"logo-font\" data-v-763a3067>conduit</h1> <p data-v-763a3067>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-763a3067>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-763a3067>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-763a3067>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-763a3067>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-763a3067>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-763a3067>","</li>",[(_vm.user)?_c('nuxt-link',{key:"your_feed",staticClass:"nav-link",class:{active: _vm.tab === 'your_feed'},attrs:{"to":{
                name: 'index',
                query: {
                  tag: _vm.tag,
                  tab: 'your_feed'
                }
              },"exact":""}},[_vm._v("Your Feed")]):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-763a3067>","</li>",[_c('nuxt-link',{key:"global_feed",staticClass:"nav-link",class:{active: _vm.tab === 'global_feed'},attrs:{"to":{
                name: 'index',
                query: {
                  tag: _vm.tag,
                  tab: 'global_feed'
                }
              },"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-763a3067>","</li>",[_c('nuxt-link',{key:"tag",staticClass:"nav-link",class:{active: _vm.tab === 'tag'},attrs:{"to":{
                name: 'index',
                query: {
                  tag: _vm.tag,
                  tab: 'tag'
                }
              },"exact":""}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(a){return _vm._ssrNode("<div class=\"article-preview\" data-v-763a3067>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-763a3067>","</div>",[_c('nuxt-link',{attrs:{"to":{
              path: ("profile/" + (a.author.username))
            }}},[_c('img',{attrs:{"src":a.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-763a3067>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
              path: ("profile/" + (a.author.username))
            }}},[_vm._v(_vm._s(a.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-763a3067>"+_vm._ssrEscape(_vm._s(a.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.loading))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: a.favorited}))+" data-v-763a3067><i class=\"ion-heart\" data-v-763a3067></i>"+_vm._ssrEscape(" "+_vm._s(a.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            path: ("article/" + (a.slug))
          }}},[_c('h1',[_vm._v(_vm._s(a.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(a.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-763a3067>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-763a3067>","</div>",[_vm._ssrNode("<p data-v-763a3067>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-763a3067>","</div>",_vm._l((_vm.tags),function(t){return _c('nuxt-link',{key:t,staticClass:"tag-pill tag-default",attrs:{"to":{
              path: '/',
              query: {
                tag: t,
                tab: 'tag'
              }
            }}},[_vm._v(_vm._s(t))])}),1)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-763a3067>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-763a3067>","</ul>",_vm._l((_vm.pages),function(p){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: _vm.page === p}))+" data-v-763a3067>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
          to: '/',
          query: {
            page: p,
            tag: _vm.tag,
            tab: _vm.tab
          }
        }}},[_vm._v(_vm._s(p))])],1)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=763a3067&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'home',

  async asyncData({
    store,
    query
  }) {
    const page = query.page || 1;
    const limit = query.limit || 5;
    const tag = query.tag;
    const tab = query.tab || 'global_feed';
    const offset = (page - 1) * limit;
    const articleListApi = tab === 'your_feed' && store.state.user ? api_article["a" /* articleFeed */] : api_article["b" /* articleList */];
    const [articleRes, tagRes] = await Promise.all([articleListApi({
      offset,
      limit,
      tag
    }), Object(api_article["e" /* tagList */])()]);
    const {
      articles,
      articlesCount: total
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    return {
      articles,
      total,
      tags,
      tag,
      tab,
      offset,
      limit,
      page,
      user: store.state.user
    };
  },

  watchQuery: ['page', 'tag', 'tab'],

  data() {
    return {
      loading: false
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.total / this.limit);
    }

  },
  methods: {
    handleFavourite(article) {
      if (this.loading) return;
      this.loading = true;

      if (article.favorited) {
        Object(api_article["f" /* unfavorite */])(article.slug).then(res => {
          article.favoritesCount--;
          article.favorited = false;
          this.loading = false;
        }).catch(err => console.log(err));
      } else {
        Object(api_article["c" /* favorite */])(article.slug).then(res => {
          article.favoritesCount++;
          article.favorited = true;
          this.loading = false;
        }).catch(err => console.log(err));
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "763a3067",
  "374bb404"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map