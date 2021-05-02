import { createAction } from '@reduxjs/toolkit';
import { Model } from '../../interfaces';

const postLoginAsync = createAction( 
  'app/AuthAction/postLoginAsync', 
  (payload: Model.LoginReqBody) => ({payload}) 
);

const setLogin = createAction( 
  'app/AuthAction/setLogin', 
  payload => ({payload}) 
);

const postLogoutAsync = createAction( 
  'app/AuthAction/postLogoutAsync' 
);

export default {
  // theses are actions just created! 
  postLoginAsync,
  setLogin,
  postLogoutAsync
};
