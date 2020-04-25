import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  page: null,
  tagList: [],
  randNews: [],
  commentNews: []
};

export default produce((draft = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_RAND_COMMENT_LIST:
      return draft;
    case actionTypes.ARTICLE_RAND_COMMENT_LIST_SUCCESS:
      draft.tagList = action.data.data.tagList;
      draft.randNews = action.data.data.randNews;
      draft.commentNews = action.data.data.commentNews;
      return draft;
    default:
      return draft;
  }
})