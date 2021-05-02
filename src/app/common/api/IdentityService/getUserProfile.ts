import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';


export default async () => {
  try {
    const apiService = await getApiService();
    const result = await apiService.get(Endpoint.GetUserProfile());
    return result;
  } catch (error) {
    throw error;
  }
};