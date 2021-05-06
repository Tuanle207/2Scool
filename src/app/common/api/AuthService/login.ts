import qs from 'query-string';
import { ReqBody, ResBody } from '../../interfaces';
import { getAuthService, getDefaultOAuthOptions } from '../BaseApiService';
import Endpoint from './@endpoint';

export default async (body: ReqBody.Login) => {
  try {
    const authService = getAuthService();
    const result = await authService.post<ResBody.Login>(Endpoint.Login(), qs.stringify({
      ...body, 
      ...getDefaultOAuthOptions()
    }));
    return result;
  } catch (error) {
    throw error;
  }
};