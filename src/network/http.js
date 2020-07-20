import Vue from 'vue';
import axios from 'axios';

const http = axios.create({
    baseURL: "http://112.74.99.5:3000/web/api"
})


//axios的拦截器
http.interceptors.request.use(config => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("id")) {
        config.headers.Authorization = 'Bearer ' + sessionStorage.getItem("token");
    }
    return config
}, err => {
    return err
})

//响应拦截
http.interceptors.response.use(res => {
    // 返回请求正确的结果
    return res.data
}, err => {
    // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 401:
                err.message = '未授权，请重新登录';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 402:
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 403:
                err.message = '拒绝访问';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 404:
                err.message = '请求错误,未找到该资源';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 405:
                err.message = '请求方法未允许';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 408:
                err.message = '请求超时';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 500:
                err.message = '服务器端出错';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 501:
                err.message = '网络未实现';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 502:
                err.message = '网络错误';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 503:
                err.message = '服务不可用';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 504:
                err.message = '网络超时';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            case 505:
                err.message = 'http版本不支持该请求';
                Vue.prototype.$toast.fail(err.response.data.message)
                break
            default:
                err.message = `连接错误${err.response.status}`
                Vue.prototype.$toast.fail(err.response.data.message)
        }
    } else {
        err.message = "连接到服务器失败, 请重启服务器"
    }
    return Promise.reject(err.message)
})



export default http