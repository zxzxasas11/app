import fetch from './fetch';

export default {
    // 登录
    getAllMenu() {
        return fetch.get('/menu/getAll')
    },

}
