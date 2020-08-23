import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  login: {}
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.LOGIN_USERNAME:
      draft.login = action.data;
      return draft;
    case actionTypes.LOGIN_USERNAME_SUCCESS:
      return
    default:
      return draft;
  }
}, defaultState);