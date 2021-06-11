import { all, call, put, take, takeLatest } from '@redux-saga/core/effects';
import { AuthService } from '../../api';
import { User, Util } from '../../interfaces';
import { AuthActions } from '../actions';

function* login({ payload }: Util.IObject) {
  try {
    // call API
    const data: User.LoginResponse = yield call(AuthService.login, payload);

    // create and dispatch SET LOGIN action
    yield put(AuthActions.setLogin(data));
  } catch (err) {
    console.log('ERROR', err);
  }
}

function* logout() {
  try {
    yield call(AuthService.logout);
    yield put(AuthActions.setLogin({token: ''}));
  } catch (err) {
    console.log('ERROR', err);
  }
}

export default function* () {
  yield all([
    takeLatest(AuthActions.postLoginAsync, login), // listen for POST LOGIN SYNC action -> event handler = function LOGIN* above,
    takeLatest(AuthActions.postLogoutAsync, logout)
  ]);
} 