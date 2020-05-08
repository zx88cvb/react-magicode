import { all } from 'redux-saga/effects';

import homeSaga from 'pages/home/store/saga';
import articleSaga from 'pages/article/store/saga';

export default function* rootSaga() {
  yield all([
    homeSaga(),
    articleSaga()
  ]);
}