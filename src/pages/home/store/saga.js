import {take, call, put, fork, takeEvery, all} from 'redux-saga/effects'
import { ARTICLE_LIST } from './constants';
import { getArticlePageAction } from './actionCreators';

function* getArticleList(arr) {
  try {
    // yield takeEvery(getArticlePageAction, getArticleList);
    const action = arr;
    // yield put({
    //   type: "home/ARTICLE_LIST_SUCCESS",
    //   data: action
    // });
    yield put(getArticlePageAction({
      // type: "home/ARTICLE_LIST_SUCCESS",
      data: action
    }));
    // yield put(action);
  }catch(e) {
    console.log("error");
  }
}

function* watchGetList() {
  yield takeEvery(ARTICLE_LIST, getArticleList);
}

// export const HomeSaga = [(watchGetList)];
export default function* homeSaga() {
  yield all([
    fork(watchGetList),
  ])
};