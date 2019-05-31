import article from '../../api/user'

const state = {
  // 文章
  articleList: [],
  // 分页
  pagination: null,
  // 文章详情
  articleDetail: null,
};

const mutations = {
  // 设置文章列表
  SET_ARTICLE_LIST(state, data) {
    state.articleList = data
  },
  // 设置文章分页
  SET_PAGINATION(state, page) {
    state.pagination = page
  },
  // 设置文章详情
  SET_ARTICLE_DETAIL(state, data) {
    state.articleDetail = data
  },
};

const actions = {

  /**
   * 获取文章列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getArticleList({state, commit}, params) {
    let ret = await article.list(params);

    commit('SET_ARTICLE_LIST', ret.data.data.data);

    commit('SET_PAGINATION', ret.data.data.meta);
    return ret.data.data;
  }

};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
