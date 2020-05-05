import {call, put, select, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';

import { 
  getArticleSaga
} from './actionCreators';

import { ERR_OK } from 'api/constants';

import {
  getBlogArticleById
} from 'api/blog/article';

function* getArticle() {
  try {
    const id = yield select(state => state.article.articleId);

    // const res = yield call(axios.get, "/api/blogapi/blog/article/recent",params);
    const res = yield getBlogArticleById(id);
    if (ERR_OK === res.code) {
      yield put(getArticleSaga({
        type: constants.ARTICLE_ITEM_SUCCESS,
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

export default function* articleSaga() {
  yield takeEvery(constants.ARTICLE_ITEM, getArticle);
}