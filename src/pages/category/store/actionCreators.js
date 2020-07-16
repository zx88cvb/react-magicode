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

// 设置文章分类标题
export const setPageTitle = (data) => ({
  type: constants.SET_PAGE_TITLE,
  data
});