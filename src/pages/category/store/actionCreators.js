import * as constants from './constants';

// 获取文章列表
export const getArticlePageAction = (data) => ({
  type: constants.ARTICLE_LIST,
  data
});

// 获取文章列表 成功 saga
export const getArticlePageSaga = (data) => ({
  type: constants.ARTICLE_LIST_SUCCESS,
  data
});