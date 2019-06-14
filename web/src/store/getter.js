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
        if(state.user.token===""||state.user.token==null||!state.user.token){
            state.user.token = sessionStorage.getItem("token");
        }
        return state.user.token;
    },
    getKeepAlive:state => state.tags.keepAlive,

}
export default getters
