import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  page: null,
  articleList: [],
  swiperList: [],
  categoryList: []
};

export default produce((draft = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      draft.page = action.data;
      return draft;
    case actionTypes.ARTICLE_LIST_SUCCESS:
      draft.articleList = action.data.data.records;
      return draft;
    case actionTypes.SWIPER_LIST:
      return draft;
    case actionTypes.SWIPER_LIST_SUCCESS:
      draft.swiperList = action.data.data.swiperList;
      draft.categoryList = action.data.data.listCategory;
      return draft;
    default:
      return draft;
  }
})