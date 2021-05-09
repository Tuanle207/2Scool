import { createAction } from '@reduxjs/toolkit';

const fetchingAppConfig = createAction( 
  'app/LoadingAction/fetchingAppConfig', 
  (payload: { fetching: boolean }) => ({payload}) 
);

export default {
  fetchingAppConfig,

};
