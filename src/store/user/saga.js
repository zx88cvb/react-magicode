import {put, select, takeEvery} from 'redux-saga/effects'
import * as constants from './constants';
import { 
  loginByUsernameSaga
} from './actionCreators';
import { ERR_OK } from 'api/constants';
import {
  loginByUsername as login
} from 'api/user/login';

/**
 * 根据用户名/邮箱登录
 */
function* loginByUsername() {
  try {
    // const params = yield select(state => state.home.page);

    const res = yield login();
    if (ERR_OK === res.code) {
      yield put(loginByUsernameSaga(res.data));
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

export default function* userSaga() {
  yield takeEvery(constants.LOGIN_USERNAME, loginByUsername);
}