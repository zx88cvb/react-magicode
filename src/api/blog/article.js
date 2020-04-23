import axios from 'api/config.js';

/* 分页条件查询 */
export function getBlogArticlePage (params) {
  const url = '/api/blogapi/blog/article/recent'

  const data = params
  return axios.get(url, {
    params: data
  });
}