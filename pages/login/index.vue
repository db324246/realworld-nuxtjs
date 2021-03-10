<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(value, key) in errors">
              <li :key="index" v-for="(item, index) in value">{{key}} {{item}}</li>
            </template>
          </ul>

          <form @submit.prevent="handleSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" required placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" required placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" minlength="8" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'

const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'login-register',
  data() {
    return {
      user: {
        username: undefined,
        email: '111@333.cn',
        password: '12345678',
      },
      errors: {}
    }
  },
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  created() {
  },
  methods: {
    handleSubmit() {
      const p = this.isLogin ? login({ user: this.user}) : register({ user: this.user})
      p.then(res => {
        this.$store.commit('SET_USER', res.data.user)
        Cookie && Cookie.set('user', JSON.stringify(res.data.user))
        this.errors = {}
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
        this.errors = err.response.data.errors
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>