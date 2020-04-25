import * as constants from './constants';

// 获取随机文章、标签、热评文章
export const getArticleRandCommentAction = () => ({
  type: constants.ARTICLE_RAND_COMMENT_LIST
});


// 获取随机文章、标签、热评文章成功saga
export const getArticleRandCommentSuccessAction = (data) => ({
  type: constants.ARTICLE_RAND_COMMENT_LIST_SUCCESS,
  data
});