import { request } from '@/plugins/request.js'

export const login = data => {
  return request({
    url: '/api/users/login',
    method: 'post',
    data
  })
}

export const register = data => {
  return request({
    url: '/api/users',
    method: 'post',
    data
  })
}

export const user = () => {
  return request({
    url: '/api/user',
    method: 'get'
  })
}

export const userUpdate = data => {
  return request({
    url: '/api/user',
    method: 'put',
    data
  })
}

export const follow = username => {
  return request({
    url: `/api/profiles/${username}/follow`,
    method: 'post'
  })
}

export const unfollow = username => {
  return request({
    url: `/api/profiles/${username}/follow`,
    method: 'delete'
  })
}

export const userInfo = username => {
  return request({
    url: `/api/profiles/${username}`,
    method: 'get'
  })
}
