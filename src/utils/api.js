import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'

//请求拦截器
axios.interceptors.request.use(config => {
   //如果存在token，请求携带这个token
   if (window.sessionStorage.getItem('tokenStr')) {
      config.header['Authorization'] = window.sessionStorage.getItem('tokenStr');
   }
}, error => {
   console.log(error);
})

//响应拦截器
axios.interceptors.response.use(success => {
   //业务逻辑错误
   if (success.status && success.status == 200) {
      if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
         ElMessage.error({ message: success.data.message });
         return;
      }
      if (success.data.message) {
         ElMessage.success({ message: success.data.message });
      }
   }
   return success.data;
}, error => {
   if (error.response.code == 504 || error.response.code == 404) {
      ElMessage.error({ message: '服务器被吃了🥲🥲' });
   } else if (error.response.code == 403) {
      ElMessage.error({ message: '权限不足，请联系管理员😙😙' });
   } else if (error.response.code == 401) {
      ElMessage.error({ message: '尚未登陆，请登录😠😠' });
      router.replace('/');
   } else {
      if (error.response.data.message) {
         ElMessage.error({ message: message.response.data.message });
      } else {
         ElMessage.error({ message: '未知错误😵😵' })
      }
   }
   return;
});

let bast = "";
//传送json格式的post请求
export const postRequest = (url, params) => {
   return axios({
      method: 'post',
      url: `&{base}&{url}`,
      data: params
   })
}

//传送json的put请求
export const putRequest = (url, params) => {
   return axios({
      method: 'put',
      url: '${base}${url}',
      data: params
   })
}

//传送json的get请求
export const getRequest = (url, params) => {
   return axios({
      method: 'get',
      url: '${base}${url}',
      data: params
   })
}

//传送json的delete请求
export const deleteRequest = (url, params) => {
   return axios({
      method: 'delete',
      url: '${base}${url}',
      data: params
   })
}