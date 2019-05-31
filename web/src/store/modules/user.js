import user from '../../api/user'

const state = {
  userInfo:{}
};

const mutations = {
  SET_USERINFO(state,data){
    state.userInfo = data;
  }
};

const actions = {

  /**
   * 用户注册
   * @param state
   * @param commit
   * @param params
   * @return {Promise<void>}
   */
  async userRegister({state, commit}, params) {
    console.log(params);
    return await user.register(params);
  },

};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
