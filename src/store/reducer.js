import produce from 'immer';
import { combineReducers } from 'redux-immer';
// import { combineReducers } from 'redux-immutable';
// import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as sidebarReducer } from 'components/sidebar/store';

export default combineReducers(produce, {
  // header: headerReducer,
  home: homeReducer,
  sidebar: sidebarReducer
});