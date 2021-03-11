<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{profile.bio}}
            </p>
            <button v-if="profile.username !== user.username" class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{ profile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: key === 'author' }" :to="{
                  path: `/profile/${profile.username}`,
                  query: { key: 'author' }
                }" exact>My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{ active: key === 'favorited' }" :to="{
                  path: `/profile/${profile.username}`,
                  query: { key: 'favorited' }
                }" exact>Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>


          <div class="article-preview" v-for="a in articles" :key="a.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                path: `/profile/${a.author.username}`
              }"><img :src="a.author.image" /></nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                path: `/profile/${a.author.username}`
              }" class="author">{{a.author.username}}</nuxt-link>
                <span class="date">{{a.createdAt}}</span>
              </div>
              <!-- <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{active: a.favorited}" @click="handleFavourite(a)" :disabled="loading">
                <i class="ion-heart"></i> {{a.favoritesCount}}
              </button> -->
            </div>
            <nuxt-link :to="{
              path: `/article/${a.slug}`
            }" class="preview-link">
              <h1>{{a.title}}</h1>
              <p>{{a.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { userInfo } from '@/api/user'
import { articleList } from '@/api/article'
export default {
  name: 'profile',
  async asyncData({ params, query }) {
    const key = query.key || 'author'
    const username = params.username
    const { data } = await userInfo(username)
    const { data: articleData } = await articleList({ [key]: username })
    console.log(data, articleData)
    return {
      key,
      profile: data.profile,
      articles: articleData.articles
    }
  },
  watchQuery: ['key'],
  data() {
    return {
      // loading: false
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>