import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

export default context => {
  const user = context.store.state.user
  // 添加请求拦截器
  request.interceptors.request.use(function (config) {

    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
}
