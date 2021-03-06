import produce from 'immer';
import { combineReducers } from 'redux-immer';
// import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from 'components/header/store';
import { reducer as homeReducer } from 'pages/home/store';
import { reducer as categoryReducer } from 'pages/category/store';
import { reducer as articleReducer } from 'pages/article/store';

export default combineReducers(produce, {
  header: headerReducer,
  home: homeReducer,
  category: categoryReducer,
  article: articleReducer
});