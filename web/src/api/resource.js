import fetch from './fetch';

export default {
    //上传文件返回url
    upload(params) {
        return fetch.upload('/upload', params);
    },

    //资源信息入库
    resourceAdd(params){
        return fetch.post("/resource/add",params);
    },

    getByCategoryId(params){
        return fetch.get("/resource/getById",params);
    },
    ///resource/getByResourceId
    //查询单条
    getByResourceId(params){
        return fetch.get("/resource/getByResourceId",params);
    },

    //根据resourceId修改
    updateByResourceId(params){
        return fetch.post("/resource/updateByResourceId",params);
    }
}
