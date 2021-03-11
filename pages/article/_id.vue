<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{article.title}}</h1>
        <article-meta v-model="article"></article-meta>
      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body">
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta v-model="article"></article-meta>
      </div>

      <div class="row">
        <comments v-model="article.slug" />
      </div>

    </div>

  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { getArticle } from '@/api/article'
import Comments from '@/components/Comments'
import ArticleMeta from '@/components/ArticleMeta'
export default {
  name: 'articleIndex',
  components: {
    ArticleMeta,
    Comments
  },
  async asyncData({ params }) {
    const { data: { article }} = await getArticle(params.id)
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>