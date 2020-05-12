import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  headerList: []
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.HEADER_LIST:
      return draft;
    case actionTypes.HEADER_LIST_SUCCESS:
      draft.headerList = action.data.data;
      return draft;
    default:
      return draft;
  }
}, defaultState);