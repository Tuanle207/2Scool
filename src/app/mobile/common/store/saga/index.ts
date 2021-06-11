import { all, fork } from 'redux-saga/effects';
import AppConfig from './AppConfig';
import Auth from './Auth';

export function* mobileRootSaga() {
  yield all([
    fork(Auth),
    fork(AppConfig)
  ]);
};

export function* webRootSaga() {
  yield all([
    fork(Auth),
    fork(AppConfig)
  ]);
};