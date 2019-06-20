import fetch from './fetch';

export default {
    sendBarrage(params) {
        return fetch.post('/barrage/add', params);
    },

}
