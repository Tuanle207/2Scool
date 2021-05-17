import { Sample } from '../../interfaces';
import { getApiService } from '../BaseApiService';
import Endpoint from './@endpoint';

const uploadExcelFile = async (input: Sample.ExcelInputDto) => {
  try {
    const apiService = await getApiService();
    
    const formData = new FormData();
    formData.append('title', input.title);
    formData.append('test', input.test);
    formData.append('file1', input.file1);

    const result = await apiService.postFormData(Endpoint.ImportExcelSample(), formData);
    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  uploadExcelFile
};