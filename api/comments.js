import { request } from '@/plugins/request.js'

export const getComments = slug => {
  return request({
    url: `/api/articles/${slug}/comments`,
    method: 'get'
  })
}

export const addComments = (slug, data) => {
  return request({
    url: `/api/articles/${slug}/comments`,
    method: 'post',
    data
  })
}

export const deleteComment = (slug, id) => {
  return request({
    url: `/api/articles/${slug}/comments/${id}`,
    method: 'delete'
  })
}
