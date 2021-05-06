import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';


export default async ({courseId}: {courseId: string}) => {
  try {
    const apiService = await getApiService();
    const result = await apiService.delete(Endpoint.RemoveCourse(courseId));
    return result;
  } catch (error) {
    throw error;
  }
};