import { Model } from '../../interfaces';
import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';

export default async (body: Model.UpdateProfileReqBody) => {
  try {
    const apiService = await getApiService();
    const result = await apiService.post(Endpoint.UpdateProfileDetail(), body);
    return result;
  } catch (error) {
    throw error;
  }
};