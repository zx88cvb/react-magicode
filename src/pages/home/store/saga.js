import {call, put, select, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';
import { 
  getArticlePageSaga,
  getSwiperSaga,
  getArticleRandCommentSuccessAction
} from './actionCreators';
import { ERR_OK } from 'api/constants';
import {
  getBlogArticlePage,
  selectNewsRandThreeComment
} from 'api/blog/article';

import {
  getAdIndex
} from 'api/ad/content';

/**
 * 查询文章列表
 */
function* getArticleList() {
  try {
    const params = yield select(state => state.home.page);

    // const res = yield call(axios.get, "/api/blogapi/blog/article/recent",params);
    const res = yield getBlogArticlePage(params);
    if (ERR_OK === res.code) {
      yield put(getArticlePageSaga({
        type: constants.ARTICLE_LIST_SUCCESS,
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
 * 获取轮播图和文章类型
 */
function* getSwiper() {
  try {
    const res = yield getAdIndex();
    if (ERR_OK === res.code) {
      yield put(getSwiperSaga({
        type: constants.SWIPER_LIST_SUCCESS,
        data: res.data
      }));
    } else {
      yield put({
        type: constants.SET_MESSAGE,
        msg: res.message
      })
    }
  } catch(e) {
    console.log(e);
  }
}

/**
 * 获取右侧列表
 */
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

export default function* homeSaga() {
  yield takeEvery(constants.ARTICLE_LIST, getArticleList);
  yield takeEvery(constants.SWIPER_LIST, getSwiper);
  yield takeEvery(constants.SWIPER_LIST, getArticleRandComment);
}

// export const HomeSaga = [(watchGetList)];
// export default function* homeSaga() {
//   yield all([
//     fork(watchGetList),
//   ])
// };