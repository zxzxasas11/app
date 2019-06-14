import fetch from './fetch';

export default {
    getAllCategory(params) {
        return fetch.get('/category/getAll', params)
    },
    getCategoryByPid(params){
        return fetch.get('/category/getByPid',params)
    },
    getCategoryById(params){
        return fetch.get('/category/getById',params)
    }

}
