import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  page: {
    current: 1,
    size: 10,
    pages: 0,
    total: 0
  },
  articleList: [],
  swiperList: [],
  categoryList: [],
  sidebar: {
    tagList: [],
    randNews: [],
    commentNews: []
  }
};

export default produce((draft = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      draft.page = action.data;
      return draft;
    case actionTypes.ARTICLE_LIST_SUCCESS:
      let arr = [...draft.articleList, ...action.data.data.records];
      draft.articleList = action.data.data.records;
      draft.page.current = action.data.data.current;
      draft.page.size = action.data.data.size;
      draft.page.pages = action.data.data.pages;
      draft.page.total = action.data.data.total;
      return draft;
    case actionTypes.SWIPER_LIST:
      return draft;
    case actionTypes.SWIPER_LIST_SUCCESS:
      draft.swiperList = action.data.data.swiperList;
      draft.categoryList = action.data.data.listCategory;
      return draft;
    case actionTypes.ARTICLE_RAND_COMMENT_LIST:
      return draft;
    case actionTypes.ARTICLE_RAND_COMMENT_LIST_SUCCESS:
      draft.sidebar = action.data.data;
      return draft;
    default:
      return draft;
  }
})