import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  article: {
    blogCategoryVo: {},
    tagList: []
  },
};

export default produce((draft = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_ITEM:
      draft.articleId = action.data;
      return draft;
    case actionTypes.ARTICLE_ITEM_SUCCESS:
      draft.article = action.data.data;
      return draft;
    default:
      return draft;
  }
})