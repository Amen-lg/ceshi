/**
 * @author:cloud.wong.
 * @date:2018.3.26
 * @description:这里提供请求方法和定义基本拦截器行为
 */
import axios from 'axios'
import router from '@/router/routes'
import QS from 'qs'
import store from '@/store'
import { getStore } from '@/utils/util'
import { apiUrl } from '@/utils/env'

const timeout = '5000';
const withCredentials = true;

const getToken = () => {
  //TODO
  let share = JSON.parse(getStore('token'));
  if(share){
    return share.message.token;
  }
  else {
    return '';
  }
};


axios.interceptors.request.use(
  /*config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }*/
);

axios.interceptors.response.use(
  success => {
    //TODO
    switch (success.data.Code) {
      case 300:
        router.replace({
          name: 'login',
          query: {redirect: router.currentRoute.fullPath}
        });
        console.warn('the token expired!');
        break;
      case 500:
        console.warn('service error!');
        break;
    }
    return success;
  },
  error => {
    if (error.data) {
      switch (error.data.Code) {
        case 404:
          console.warn('wrong request url Or params!')
          break;
      }
    }
    return Promise.reject(error.response.data)
  });


/**
 * @method post请求
 * @param {string} url   : 请求的地址
 * @param { any  } params: 请求的参数
 * @param {string} type  : 请求的方式
 *
 * */
const post = (url, params, type) => {
  "qs"   === type && (params = QS.stringify(params))
  "json" === type && (params = JSON.stringify(params))

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      baseURL: apiUrl,
      timeout: timeout,
      withCredentials: withCredentials,
      data: params,
      headers: {
        'token':  getToken(),
        'Content-Type': 'application/json; charset=UTF-8'

      }
    })
    .then(response => {
        resolve(response.data);
      },err => {
        reject(err);
    })
    .catch((error) => {
      reject(error)
    })
  })
}


/**
 * @method get请求
 * @param {string} url   : 请求的地址
 * @param { any  } params: 请求的参数
 *
 * */
const get = (url, params = '') => {
  return new Promise((resolve, reject) => {
    console.log(apiUrl)
    axios({
      method: 'get',
      url: url,
      baseURL: apiUrl,
      timeout: timeout,
      withCredentials: withCredentials,
      params: params,
      headers: {
        'token': getToken(),
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      resolve(response.data);
    },err => {
      reject(err);
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export {
  get,
  post
}
