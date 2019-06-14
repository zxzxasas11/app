import fetch from './fetch';

export default {
    //上传文件返回url
    upload(params) {
        return fetch.upload('/upload', params);
    },

    //资源信息入库
    resourceAdd(params){
        return fetch.post("/resource/add",params);
    }
}
