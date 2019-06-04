const getters ={
    visitedViews:state => state.tags.visitedViews,
    getUserName(state){
        if(state.user.userInfo.userName===""||state.user.userInfo.userName==null||!state.user.userInfo.userName){
            state.user.userInfo.userName = sessionStorage.getItem("userName");
        }
        return state.user.userInfo.userName;
    },
    getUserId(state){
        if(state.user.userInfo.userId===""||state.user.userInfo.userId==null||!state.user.userInfo.userId){
            state.user.userInfo.userId = sessionStorage.getItem("userId");
        }
        return state.user.userInfo.userId;
    },
    getStudentId(state){
        if(state.user.userInfo.studentId===""||state.user.userInfo.studentId==null||!state.user.userInfo.studentId){
            state.user.userInfo.studentId = sessionStorage.getItem("studentId");
        }
        return state.user.userInfo.studentId;
    },
    getRoleId(state){
        if(state.user.userInfo.roleId===""||state.user.userInfo.roleId==null||!state.user.userInfo.roleId){
            state.user.userInfo.roleId = sessionStorage.getItem("roleId");
        }
        return state.user.userInfo.roleId;
    },
    activeIndex:state => state.tags.activeIndex,
    getToken(state){
        if(state.user.token===""||state.user.token==null||!state.user.token){
            state.user.token = sessionStorage.getItem("token");
        }
        return state.user.token;
    },
    getKeepAlive:state => state.tags.keepAlive,
    getInformation(state){
        if(state.user.information===""||state.user.information==null||!state.user.information){
            state.user.information = localStorage.getItem("username");
        }
        return state.user.information;
    },
    getLoginVisible(state){
        return state.user.loginVisible;
    },
    getRouterTo(state){
        return state.user.routerTo;
    },
    getIsLogin(state){
        if(state.user.isLogin===""||state.user.isLogin==null||!state.user.isLogin){
            state.user.isLogin = sessionStorage.getItem("isLogin");
        }
        return state.user.isLogin;
    },
    getUnread(state){
        return state.user.unread;
    },
    getUpload(state){
        return state.upload
    }
}
export default getters
