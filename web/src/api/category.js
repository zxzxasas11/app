import fetch from './fetch';

export default {
    // 上传excel
    getAllCategory(params) {
        return fetch.get('/category/getAll', params)
    },

}
