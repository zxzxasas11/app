import fetch from './fetch';

export default {
    // 上传excel
    upload(params) {
        return fetch.json('/bill/upload', params)
    },
    getAllBill(params){
        return fetch.get("/bill/getAll",params);
    }

}
