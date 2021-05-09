import { combineReducers } from '@reduxjs/toolkit';
import AppConfigReducer from './common/AppConfigReducer';
import AuthReducer from './common/AuthReducer';
import LoadingReducer from './common/LoadingReducer';

export default combineReducers({
  appConfig: AppConfigReducer,
  auth: AuthReducer,
  loading: LoadingReducer
});