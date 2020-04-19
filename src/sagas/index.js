import {all, call} from 'redux-saga/effects';


import homeSaga from 'pages/home/store/saga'
export default function* rootSaga() {
  yield all([
    homeSaga()
  ]);
}