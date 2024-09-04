
import axios from 'axios';


export const mainAxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', 
  timeout: 1000*10,
});

mainAxiosInstance.interceptors.request.use(
  (config) => {

    config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


mainAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);


