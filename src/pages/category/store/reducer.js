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
  title: null
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.ARTICLE_LIST:
      draft.page = action.data;
      return draft;
    case actionTypes.ARTICLE_LIST_SUCCESS:
      // let arr = [...draft.articleList, ...action.data.data.records];
      // draft.articleList.push(...action.data.data.records);
      if (action.data.data.current === 1) {
        draft.articleList = action.data.data.records;
      } else {
        draft.articleList.push(...action.data.data.records);
      }
      
      draft.page.current = action.data.data.current;
      draft.page.size = action.data.data.size;
      draft.page.pages = action.data.data.pages;
      draft.page.total = action.data.data.total;
      return draft;
    case actionTypes.SET_PAGE_TITLE:
      draft.title = action.data;
      return draft;
    default:
      return draft;
  }
}, defaultState);