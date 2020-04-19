import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  articleList: []
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      console.log(action);
      return draft = action.data;
    case actionTypes.ARTICLE_LIST_SUCCESS:
      console.log("success:" + action);
      return {};
    default:
      return draft;
  }
})