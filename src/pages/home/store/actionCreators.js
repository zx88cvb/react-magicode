import * as constants from './constants';

export const getArticlePageAction = (data) => ({
  type: constants.ARTICLE_LIST,
  data
});

export const getArticlePageSaga = (data) => ({
  type: constants.ARTICLE_LIST_SUCCESS,
  data
});