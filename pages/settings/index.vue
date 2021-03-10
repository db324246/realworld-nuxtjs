<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="handleSubmit">
            <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" type="text" v-model="userForm.image" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" v-model="userForm.username" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea class="form-control form-control-lg" v-model="userForm.bio" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" v-model="userForm.email" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="password" v-model="userForm.password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="handleLogout">
            Or click here to logout.
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { userUpdate } from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'settings',
  data() {
    return {
      userForm: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {
    this.userForm = JSON.parse(JSON.stringify(this.user))
    console.log(this.userForm)
  },
  methods: {
    handleSubmit() {
      userUpdate({ user: this.userForm}).then(res => {
        if (res.success) {
          
        }
      }).catch(err => console.log(err))
    },
    handleLogout() {
      Cookie.remove('user')
      this.$store.commit('REMOVE_USER')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>