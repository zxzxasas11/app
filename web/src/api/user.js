import fetch from './fetch';

export default {
    // 登录
    login(params) {
        return fetch.post('/user/login', params)
    },
    register(params){
        return fetch.post("/user/register",params);
    }

}
