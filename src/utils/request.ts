import axios from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    console.log('请求拦截器', config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    console.log('响应拦截器', response);
    //判断响应状态码是否为200,如果不是200,则提示错误信息
    if (response.status !== 200) {
      ElMessage.error(response.data.message);
    }
    return response;
  },
  (error) => {
    let msg = '';
    //根据响应状态码,设置不同的错误提示信息
    switch (error.response.status) {
      case 401:
        msg = 'token过期';
        break;
      case 403:
        msg = '无权访问';
        break;
      case 404:
        msg = '请求地址错误';
        break;
      case 500:
        msg = '服务器出现问题';
        break;
      default:
        msg = '无网络';
    }
    ElMessage.error(msg);

    return Promise.reject(error);
  },
);

export default request;
