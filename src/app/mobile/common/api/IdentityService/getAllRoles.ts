import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';

export default async () => {
  try {
    const apiService = await getApiService();
    const result = await apiService.get(Endpoint.GetAllRoles());
    return result;
  } catch (error) {
    throw error;
  }
};