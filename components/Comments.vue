<template>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <form class="card comment-form">
      <div class="card-block">
        <textarea v-model="comment.body" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click.prevent="handlePost">
        Post Comment
        </button>
      </div>
    </form>

    <div :key="item.id" class="card" v-for="item in comments">
      <div class="card-block">
        <p class="card-text">{{item.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{
          path: '/profile',
          params: {
            usrname: item.author.username
          }
        }" class="comment-author">
          <img :src="item.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{
          path: '/profile',
          params: {
            usrname: item.author.username
          }
        }" class="comment-author">{{item.author.username}}</nuxt-link>
        <span class="date-posted">{{item.createdAt}}</span>

        <span v-if="item.author.username === user.username" class="mod-options">
          <i class="ion-trash-a" @click="handleDelete(item.id)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getComments, addComments, deleteComment } from '@/api/comments'
export default {
  name: 'comments',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      comments: [],
      comment: {
        body: ''
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        val && this.getList()
      },
      immediate: true
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    getList() {
      getComments(this.value).then(res => {
        this.comments = res.data.comments
      }).catch(err => console.log(err))
    },
    handlePost() {
      addComments(this.value, { comment: this.comment }).then(res => {
        // if (res.success) {
          this.getList()
        // }
      }).catch(err => console.log(err))
    },
    handleDelete(id) {
      deleteComment(this.value, id).then(res => {
          this.getList()
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style lang='scss' scoped>

</style>