import * as constants from './constants';

// 获取文章
export const getArticleAction = (data) => ({
  type: constants.ARTICLE_ITEM,
  data
});

// 获取文章 成功 saga
export const getArticleSaga = (data) => ({
  type: constants.ARTICLE_ITEM_SUCCESS,
  data
});