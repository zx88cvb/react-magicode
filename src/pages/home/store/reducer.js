import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  articleList: []
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      return draft = action.data;
    case actionTypes.ARTICLE_LIST_SUCCESS:
      console.log("success:" , action.data.data);
      return draft = action.data.data;
    default:
      return draft;
  }
})