import {all, call} from 'redux-saga/effects';

import articleSaga from 'pages/home/store/saga'
import articleRandSaga from 'components/sidebar/store/saga'

export default function* rootSaga() {
  yield all([
    articleSaga(),
    articleRandSaga()
  ]);
}