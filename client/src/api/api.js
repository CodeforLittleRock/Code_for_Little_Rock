import axios from "axios";


class API {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:5000',
    });
    // Add a request interceptor
    this.axiosInstance.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    this.axiosInstance.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
  }



  async login(data) {
    const response = await this.axiosInstance.post('/api/users/login', data);
    console.log({ response })
    // saveToken(response.token);
    // parse token
    // return parsed token
  }

  async signup(data) {
    const response = await this.axiosInstance.post('/api/users/signup', data);
    console.log({ response })
  }

}


export default new API();