import { createReducer } from '@reduxjs/toolkit';
import { Util } from '../../../interfaces';
import { LoadingActions } from '../../actions';

const initial = {
  fetchingAppConfig: false,
};

export default createReducer(initial, build => {
  build
    .addCase(
      LoadingActions.fetchingAppConfig, 
      (state: Util.IObject, action: Util.BaseAction) => {
        state.fetchingAppConfig = action.payload.fetching;
    });
});