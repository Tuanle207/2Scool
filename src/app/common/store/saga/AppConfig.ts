import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { AppConfigService } from '../../api';
import { Util } from '../../interfaces';
import { AppConfigActions } from '../actions';

function* getAppConfig() {
  try {
    const data: Util.IObject = yield call(AppConfigService.getAppConfig);
    
    yield put(AppConfigActions.setAppConfigStorage(data));

  } catch (err) {
    console.log('ERROR', err)
  }
} 

export default function* () {
  yield all([
    takeLatest(AppConfigActions.getAppConfigAsync, getAppConfig)
  ]);
}