import {put, select, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';
import { 
  getArticlePageSaga
} from './actionCreators';
import { ERR_OK } from 'api/constants';
import {
  getBlogArticlePage
} from 'api/blog/article';

/**
 * 查询文章列表
 */
function* getArticleList() {
  try {
    const params = yield select(state => state.category.page);

    // const res = yield call(axios.get, "/api/blogapi/blog/article/recent",params);
    const res = yield getBlogArticlePage(params);
    if (ERR_OK === res.code) {
      yield put(getArticlePageSaga(res.data));
    } else {
      yield put(res.message)
    }
    // yield put(action);
  } catch(e) {
    yield put({
      type: constants.SET_MESSAGE,
      msg: e
    })
  }
}

export default function* categorySaga() {
  yield takeEvery(constants.ARTICLE_LIST, getArticleList);
}

// export const HomeSaga = [(watchGetList)];
// export default function* homeSaga() {
//   yield all([
//     fork(watchGetList),
//   ])
// };