import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  articleList: []
};

export default produce((draft = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      return draft.articleList = action.data;
    default:
      return draft;
  }
})