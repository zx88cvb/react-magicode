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

// 获取留言列表
export const getCommentAction = (data) => ({
  type: constants.COMMENT_LIST,
  data
});

// 获取留言列表 SUCCESS
export const getCommentSaga = (data) => ({
  type: constants.COMMENT_LIST_SUCCESS,
  data
});

// 提交留言
export const addCommentAction = (data) => ({
  type: constants.COMMENT_ADD,
  data
});

// 提交留言 SUCCESS
export const addCommentSaga = (data) => ({
  type: constants.COMMENT_ADD_SUCCESS,
  data
});