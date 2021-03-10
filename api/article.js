import { request } from '@/plugins/request.js'

export const articleList = data => {
  return request({
    url: '/api/articles',
    method: 'get',
    params: data
  })
}

export const tagList = data => {
  return request({
    url: '/api/tags',
    method: 'get'
  })
}

export const articleFeed = data => {
  return request({
    url: '/api/articles/feed',
    method: 'get',
    params: data
  })
}

export const favorite = slug => {
  return request({
    url: `/api/articles/${slug}/favorite`,
    method: 'post'
  })
}

export const unfavorite = slug => {
  return request({
    url: `/api/articles/${slug}/favorite`,
    method: 'delete'
  })
}

export const getArticle = slug => {
  return request({
    url: `/api/articles/${slug}`,
    method: 'get'
  })
}
