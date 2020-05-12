import axios from 'api/config.js';

// 查询主页广告内容
export function getAdIndex () {
  const url = '/api/adapi/api/adgroup/index/content'

  const data = {

  }
  return axios.get(url, {
    params: data
  });
}

// 查询头部广告内容
export function getAdHead () {
  const url = '/api/adapi/api/adgroup/header/content'

  const data = {

  }
  return axios.get(url, {
    params: data
  });
}

// 查询头部广告内容
export function getAdLink () {
  const url = '/api/adapi/api/adgroup/link/content'

  const data = {

  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (response) {
    console.log(response)
  })
}