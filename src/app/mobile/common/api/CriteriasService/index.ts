import { Course, Util } from '../../interfaces';
import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';


const getCriterias = async () => {
  try {
    const apiService = await getApiService();
    const result = await apiService.get(Endpoint.GetCriterias());
    return result;
  } catch (error) {
    throw error;
  }
};


export default {
  getCriterias,
};