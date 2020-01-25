import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      return state.set('articleList', action.data);
    default:
      return state;
  }
}