<template>
  <div class="editor-page">
    <div class="container page">

      <ul class="error-messages">
        <template v-for="(value, key) in errors">
          <li :key="key + index" v-for="(item, index) in value">{{key}} {{item}}</li>
        </template>
      </ul>
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                  <input type="text" v-model="article.title" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" v-model="article.description" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group" >
                  <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input v-model="tags" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" @click="handleSubmit" type="button">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, createArticle, updateArticle } from '@/api/article'
export default {
  name: 'editor',
  async asyncData({ query }) {
    let article = {
      title: '',
      description: '',
      body: '',
      tagList: []
    }
    
    if (query.slug) {
      const { data } = await getArticle(query.slug)
      article = data.article
    }

    return {
      article,
      slug: query.slug
    }
  },
  data() {
    return {
      errors: {}
    }
  },
  computed: {
    tags: {
      get() {
        return this.article.tagList.join('，')
      },
      set(val) {
        this.article.tagList = val.split('，')
      }
    }
  },
  created() {

  },
  methods: {
    handleSubmit() {
      const p = this.slug ? updateArticle(this.slug, { article: this.article }) : createArticle({ article: this.article })

      p
        .then(res => {
          this.$router.push('/')
        }).catch(err => {
          this.errors = err.response.data.errors
        })
    }
  }
}
</script>

<style scoped>

</style>