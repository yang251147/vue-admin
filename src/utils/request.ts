import axios from 'axios'
import router from '../router'
import { getToken } from './auth';

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '',
    // 超时
    timeout: 10000,
});
// request拦截器
service.interceptors.request.use(
    (config) => {
        // 是否需要设置 token
        const isToken = (config.headers || {}).isToken === false;
        if (getToken() && !isToken) {
            //config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        // get请求映射params参数
        if (config.method === 'get' && config.params) {
            let url = config.url + '?';
            for (const propName of Object.keys(config.params)) {
                const value = config.params[propName];
                var part = encodeURIComponent(propName) + '=';
                if (value !== null && typeof value !== 'undefined') {
                    if (typeof value === 'object') {
                        for (const key of Object.keys(value)) {
                            if (value[key] !== null && typeof value[key] !== 'undefined') {
                                let params = propName + '[' + key + ']';
                                let subPart = encodeURIComponent(params) + '=';
                                url += subPart + encodeURIComponent(value[key]) + '&';
                            }
                        }
                    } else {
                        url += part + encodeURIComponent(value) + '&';
                    }
                }
            }
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }
        return config;
    },
    (error) => {
        console.log(error);
        Promise.reject(error);
    }
);
