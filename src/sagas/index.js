import { all } from 'redux-saga/effects';

import headerSaga from 'components/header/store/saga';
import homeSaga from 'pages/home/store/saga';
import categorySaga from 'pages/category/store/saga';
import articleSaga from 'pages/article/store/saga';

export default function* rootSaga() {
  yield all([
    headerSaga(),
    homeSaga(),
    categorySaga(),
    articleSaga()
  ]);
}