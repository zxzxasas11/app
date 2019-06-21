import fetch from './fetch';

export default {
    addHistory(params) {
        return fetch.post('/history/add', params);
    },

}
