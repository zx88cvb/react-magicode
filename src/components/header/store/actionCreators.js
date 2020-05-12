import * as constants from './constants';

// 获取文章列表
export const getHeaderAction = () => ({
  type: constants.HEADER_LIST
});

// 获取轮播图
export const getHeaderSaga = (data) => ({
  type: constants.HEADER_LIST_SUCCESS,
  data
});
