import users from '../../api/user'
import jwt_decode from 'jwt-decode'
const user ={
  state:{
      token:""
  },
  mutations:{
    SET_USERINFO(state,data){
      state.token = data;
      localStorage.setItem("token",data);
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
      return await users.register(params);
    },

    /**
     * 用户登录
     * @param state
     * @param commit
     * @param params
     * @return {Promise<void>}
     */
    async userLogin({state, commit}, params) {
      let data = await users.login(params).then(res=>{
        console.log(res);
        commit("SET_USERINFO",res.data.token);
      });

      //let ret = await users.login(params);
      return data;
    },

  }
}
export default user
