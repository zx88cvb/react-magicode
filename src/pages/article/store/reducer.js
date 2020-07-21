import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  article: {
    blogCategoryVo: {},
    tagList: []
  },
  comments: {
    records: []
  }
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_ITEM:
      draft.articleId = action.data;
      return draft;
    case actionTypes.ARTICLE_ITEM_SUCCESS:
      draft.article = action.data;
      return draft;
    case actionTypes.COMMENT_LIST:
      draft.page = action.data;
      return draft;
    case actionTypes.COMMENT_LIST_SUCCESS:
      draft.comments = action.data;
      return draft;
    case actionTypes.COMMENT_ADD:
      draft.commentForm = action.data;
      return draft;
    case actionTypes.COMMENT_ADD_SUCCESS:
      draft.commentForm = action.data;
      return draft;
    default:
      return draft;
  }
}, defaultState);