import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

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
    },
    {
      path: '/Home',
      name: 'Home',
      component(resolve) {
        require(['../view/Home.vue'], resolve);
      },
    },
    {
      path: '/Main',
      name: '后台管理',
      component(resolve) {
        require(['../view/platform-manage/Main.vue'], resolve);
      },
      children:[
        {
          path: '/MenuManage',
          name: '菜单管理',
          component(resolve) {
            require(['../view/platform-manage/MenuManage.vue'], resolve);
          },
        },
        {
          path: '/BillManage',
          name: '账单展示',
          component(resolve) {
            require(['../view/platform-manage/BillManage.vue'], resolve);
          },
        },
      ]
    }
  ]
})
