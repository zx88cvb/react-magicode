import * as constants from './constants';

// 获取文章列表
export const getArticlePageAction = (data) => ({
  type: constants.ARTICLE_LIST,
  data
});

// 获取轮播图
export const getSwiperAction = () => ({
  type: constants.SWIPER_LIST
});

// 获取文章列表 成功 saga
export const getArticlePageSaga = (data) => ({
  type: constants.ARTICLE_LIST_SUCCESS,
  data
});

// 获取轮播图 成功 saga
export const getSwiperSaga = (data) => ({
  type: constants.SWIPER_LIST_SUCCESS,
  data
});

// 获取随机文章、标签、热评文章
export const getArticleRandCommentAction = () => ({
  type: constants.ARTICLE_RAND_COMMENT_LIST
});


// 获取随机文章、标签、热评文章成功saga
export const getArticleRandCommentSuccessAction = (data) => ({
  type: constants.ARTICLE_RAND_COMMENT_LIST_SUCCESS,
  data
});