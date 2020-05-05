import axios from 'api/config.js';

/* 分页条件查询文章 */
export function getBlogArticlePage (params) {
  const url = '/api/blogapi/blog/article/recent'

  const data = params
  return axios.get(url, {
    params: data
  });
}

// 组合查询评论和随机文章
export function selectNewsRandThreeComment () {
  const url = '/api/blogapi/api/blog/article/three/comment/3'

  const data = {
  }
  return axios.get(url, {
    params: data
  });
}

/* 根据id查询 */
export function getBlogArticleById (id) {
  const url = `/api/blogapi/blog/article/${id}`

  const data = {
  }
  return axios.get(url, {
    params: data
  });
}