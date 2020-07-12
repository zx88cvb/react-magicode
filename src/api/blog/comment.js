import axios from 'api/config.js';

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