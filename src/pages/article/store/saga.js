import {put, select, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';

import { 
  getArticleSaga,
  getCommentSaga
} from './actionCreators';

import { ERR_OK } from 'api/constants';

import {
  getBlogArticleById
} from 'api/blog/article';

import {
  recent
} from 'api/blog/comment';

/**
 * 获取文章
 */
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

/**
 * 获取留言列表
 */
function* getComments() {
  try {
    const page = yield select(state => state.article.page);

    // const res = yield call(axios.get, "/api/blogapi/blog/article/recent",params);
    const res = yield recent(page);
    if (ERR_OK === res.code) {
      yield put(getCommentSaga({
        type: constants.COMMENT_LIST_SUCCESS,
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
  yield takeEvery(constants.COMMENT_LIST, getComments);
}