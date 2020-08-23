import axios from 'api/config.js';
import qs from 'qs';

/* 根据用户名或邮箱登录 */
export function loginByUsername (form) {
  const url = `/api/userapi/oauth/token`

  const data = qs.stringify(form)
  return axios.post(url, data);
}