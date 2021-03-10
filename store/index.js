const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  SET_USER(state, data) {
    state.user = data
    if (data) state.token = data.token
  },
  REMOVE_USER(state) {
    state.user = null
  }
}

export const actions = {
  /**
   * 服务端渲染会自动调用这个方法
   * 存储 cookie
   */
  nuxtServerInit({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      const cookie = cookieparser && cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(cookie.user)
      } catch (error) {
        user = null
        console.log('1233')
      }
    }
    commit('SET_USER', user)
  }
}