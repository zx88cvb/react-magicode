import {call, put, select, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';
import { getArticleRandCommentSuccessAction } from './actionCreators';
import { ERR_OK } from 'api/constants';
import {
  selectNewsRandThreeComment
} from 'api/blog/article';

function* getArticleRandComment() {
  try {
    // const params = yield select(state => state.home.page);

    const res = yield selectNewsRandThreeComment();
    if (ERR_OK === res.code) {
      yield put(getArticleRandCommentSuccessAction({
        type: constants.ARTICLE_RAND_COMMENT_LIST_SUCCESS,
        data: res.data
      }));
    } else {
      yield put({
        type: constants.SET_MESSAGE,
        msg: res.message
      })
    }
    // yield put(action);
  } catch(e) {
    yield put({
      type: constants.SET_MESSAGE,
      msg: e
    })
  }
}

export default function* articleRandSaga() {
  yield takeEvery(constants.ARTICLE_RAND_COMMENT_LIST, getArticleRandComment);
}
