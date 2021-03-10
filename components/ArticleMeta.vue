<template>
  <div class="article-meta">
    <nuxt-link :to="{
      path: `profile/${value.author.username}`
    }"><img :src="value.author.image" /></nuxt-link>
    <div class="author">
      <nuxt-link :to="{
          path: `profile/${value.author.username}`
        }">{{value.author.username}}</nuxt-link>
      <span class="date">{{value.createdAt}}</span>
    </div>
    <button class="btn btn-sm btn-outline-secondary" :class="{active: value.author.following}" @click="handleFollow(value.author)" :disabled="followHanding">
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow {{value.author.username}} <span class="counter"></span>
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary" :class="{active: value.favorited}" @click="handleFavourite(value)" :disabled="favouriteHanding">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{value.favoritesCount}})</span>
    </button>
  </div>
</template>

<script>
import { follow, unfollow } from '@/api/user'
import { favorite, unfavorite } from '@/api/article'
export default {
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
    }
  },
  created() {
    console.log(this.value)
  },
  methods: {
    handleFollow(author) {
      if (this.followHanding) return
      this.followHanding = true
      if (author.following) {
        unfollow(author.username).then(res => {
          author.following = false
          this.followHanding = false
        }).catch(err => console.log(err))
      } else {
        follow(author.username).then(res => {
          author.following = true
          this.followHanding = false
        }).catch(err => console.log(err))
      }
    },
    handleFavourite(article) {
      if (this.favouriteHanding) return
      this.favouriteHanding = true
      if (article.favorited) {
        unfavorite(article.slug).then(res => {
            article.favoritesCount--
            article.favorited = false
            this.favouriteHanding = false
        }).catch(err => console.log(err))
      } else {
        favorite(article.slug).then(res => {
            article.favoritesCount++
            article.favorited = true
            this.favouriteHanding = false
        }).catch(err => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

</style>