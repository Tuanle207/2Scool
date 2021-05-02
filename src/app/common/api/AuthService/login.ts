import qs from 'query-string';
import { Model } from '../../interfaces';
import { getAuthService, getDefaultOAuthOptions } from '../BaseApiService';
import Endpoint from './@endpoint';

export default async (body: Model.LoginReqBody) => {
  try {
    const authService = getAuthService();
    const result = await authService.post<Model.LoginResponse>(Endpoint.Login(), qs.stringify({
      ...body, 
      ...getDefaultOAuthOptions()
    }));
    return result;
  } catch (error) {
    throw error;
  }
};