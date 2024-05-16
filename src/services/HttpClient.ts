import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://api.homologation.cliqdrive.com.br',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=v1_web',
    }
  });

  httpClient.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {

    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
 
  response => response,
  (error) => {
    if (error.response && [401, 406].includes(error.response.status)) {
      
      alert('Unauthorized access. Please log in.');
      window.location.href = '/';
      
    }
    return Promise.reject(error);
  }
);

export default httpClient;
