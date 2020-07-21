import axios from 'api/config.js';
import qs from 'qs';

/**
 * 分页条件查询评论
 * @param {*} params 分页参数
 */
export function recent (params) {
  const url = `/api/blogapi/blog/comment/recent`

  const data = params
  return axios.get(url, {
    params: data
  });
}

/**
 * 新增评论
 * @param {*} form form表单
 */
export function insertBlogComment(form) {
  const url = `/api/blogapi/blog/comment/add`

  const data = qs.stringify(form)
  return axios.post(url, data);
}