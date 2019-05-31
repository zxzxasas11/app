import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  scrollBehavior(to, from, savedPosition) {
    // 兼容
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Login',
      component(resolve) {
        require(['../view/Login.vue'], resolve);
      },
    }
  ]
})
