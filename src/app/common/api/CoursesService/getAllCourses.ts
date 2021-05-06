import { ReqBody, ResBody } from '../../interfaces';
import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';


export default async (pagingInfo: ReqBody.PagingInfo) => {
  try {
    const apiService = await getApiService();
    const result = await apiService.post<ResBody.PagingModel<ResBody.Course>>(Endpoint.GetAllCourses(), pagingInfo);
    return result;
  } catch (error) {
    throw error;
  }
};