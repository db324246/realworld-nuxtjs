<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link v-if="user" key="your_feed" class="nav-link" :class="{active: tab === 'your_feed'}" :to="{
                  name: 'index',
                  query: {
                    tag,
                    tab: 'your_feed'
                  }
                }" exact>Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link key="global_feed" class="nav-link" :class="{active: tab === 'global_feed'}" :to="{
                  name: 'index',
                  query: {
                    tag,
                    tab: 'global_feed'
                  }
                }" exact>Global Feed</nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link key="tag" class="nav-link" :class="{active: tab === 'tag'}" :to="{
                  name: 'index',
                  query: {
                    tag,
                    tab: 'tag'
                  }
                }" exact>#{{tag}}</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="a in articles" :key="a.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                path: `profile/${a.author.username}`
              }"><img :src="a.author.image" /></nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                path: `profile/${a.author.username}`
              }" class="author">{{a.author.username}}</nuxt-link>
                <span class="date">{{a.createdAt}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{active: a.favorited}" @click="handleFavourite(a)" :disabled="loading">
                <i class="ion-heart"></i> {{a.favoritesCount}}
              </button>
            </div>
            <nuxt-link :to="{
              path: `article/${a.slug}`
            }" class="preview-link">
              <h1>{{a.title}}</h1>
              <p>{{a.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link v-for="t in tags" :key="t" :to="{
                path: '/',
                query: {
                  tag: t,
                  tab: 'tag'
                }
              }" class="tag-pill tag-default">{{t}}</nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>

    <nav>
      <ul class="pagination">
        <li v-for="p in pages" :key="p" class="page-item" :class="{active: page === p}">
          <nuxt-link :to="{
            to: '/',
            query: {
              page: p,
              tag,
              tab
            }
          }" class="page-link" >{{p}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { articleList, articleFeed, tagList, favorite, unfavorite } from '@/api/article'
export default {
  name: 'home',
  async asyncData({store, query}) {
    const page = query.page || 1
    const limit = query.limit || 5
    const tag = query.tag
    const tab = query.tab || 'global_feed'
    const offset = (page - 1) * limit

    const articleListApi = tab === 'your_feed' && store.state.user ? articleFeed : articleList

    const [ articleRes, tagRes ] = await Promise.all([
      articleListApi({ offset, limit, tag }),
      tagList()
    ])
    const { articles, articlesCount: total } = articleRes.data
    const { tags } = tagRes.data

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
      }

  },
  watchQuery: ['page', 'tag', 'tab'],
  data() {
    return {
      loading: false
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.limit)
    }
  },
  methods: {
    handleFavourite(article) {
      if (this.loading) return
      this.loading = true
      if (article.favorited) {
        unfavorite(article.slug).then(res => {
            article.favoritesCount--
            article.favorited = false
            this.loading = false
        }).catch(err => console.log(err))
      } else {
        favorite(article.slug).then(res => {
            article.favoritesCount++
            article.favorited = true
            this.loading = false
        }).catch(err => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

</style>