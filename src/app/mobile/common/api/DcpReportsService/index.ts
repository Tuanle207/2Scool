import { Course, Util } from '../../interfaces';
import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';


const getRegulations = async () => {
  try {
    const apiService = await getApiService();
    const result = await apiService.get(Endpoint.GetRegulations());
    return result;
  } catch (error) {
    throw error;
  }
};


export default {
  getRegulations,
};