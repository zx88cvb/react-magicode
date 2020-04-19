import {call, put, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';
import { getArticlePageSaga } from './actionCreators';

function* getArticleList() {
  try {
    // yield takeEvery(getArticlePageAction, getArticleList);
    // yield put({
    //   type: "home/ARTICLE_LIST_SUCCESS",
    //   data: action
    // });
    yield put(getArticlePageSaga({
      type: constants.ARTICLE_LIST_SUCCESS,
      data: {
        code: 0,
        data: {}
      }
    }));
    // yield put(action);
  }catch(e) {
    console.log("error");
  }
}

export default function* articleSaga() {
  yield takeEvery(constants.ARTICLE_LIST, getArticleList);
}

// export const HomeSaga = [(watchGetList)];
// export default function* homeSaga() {
//   yield all([
//     fork(watchGetList),
//   ])
// };