import { put, takeEvery } from 'redux-saga/effects'
import * as constants from './constants';
import { 
  getHeaderSaga
} from './actionCreators';
import { ERR_OK } from 'api/constants';
import {
  getAdHead
} from 'api/ad/content';

/**
 * 获取头部菜单
 */
function* getHeader() {
  try {
    const res = yield getAdHead();
    if (ERR_OK === res.code) {
      yield put(getHeaderSaga({
        type: constants.HEADER_LIST_SUCCESS,
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

export default function* headerSaga() {
  yield takeEvery(constants.HEADER_LIST, getHeader);
}

// export const HomeSaga = [(watchGetList)];
// export default function* homeSaga() {
//   yield all([
//     fork(watchGetList),
//   ])
// };