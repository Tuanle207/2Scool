import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getStore } from '../../store';

export const configHttpRequest = (axios: AxiosInstance) => {
  const token = getStore().getState().auth.token;
  axios.interceptors.request.use(function (config: AxiosRequestConfig) {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  });
};

export const configHttpResponse = (axios: AxiosInstance) => {
  axios.interceptors.response.use(function (response: AxiosResponse) {
    console.log({response})
    return response;
  });
};