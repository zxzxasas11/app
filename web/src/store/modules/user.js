import users from '../../api/user'
const user ={
  state:{
    userInfo:{
    },
  },
  mutations:{
    SET_USERINFO(state,data){
      state.userInfo = data;
    }
  },
  actions:{

    /**
     * 用户注册
     * @param state
     * @param commit
     * @param params
     * @return {Promise<void>}
     */
    async userRegister({state, commit}, params) {
      console.log(1);
      return await users.register(params);
    },

  }
}
export default user
