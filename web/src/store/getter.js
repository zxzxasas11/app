import jwt_decode from 'jwt-decode'
const getters ={
    visitedViews:state => state.tags.visitedViews,
    getUserName(state){
        if(state.user.userInfo.userName===""||state.user.userInfo.userName==null||!state.user.userInfo.userName){
            state.user.userInfo.userName = sessionStorage.getItem("userName");
        }
        return state.user.userInfo.userName;
    },
    activeIndex:state => state.tags.activeIndex,
    getToken(state){
        let decode;
        if(localStorage.getItem("token")){
            decode = jwt_decode(localStorage.getItem("token"));
        }

        return decode;
    },
    getKeepAlive:state => state.tags.keepAlive,

}
export default getters
