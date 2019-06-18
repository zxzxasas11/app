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
      name: '主页',
      component(resolve) {
        require(['../view/front/Home.vue'], resolve);
      },
      children:[
        {
          path: '/Column/:categoryId',
          name: '栏目',
          component(resolve) {
            require(['../view/video/Column.vue'], resolve);
          },
        },
        {
          path: '/Video/:categoryId/:resourceId',
          name: '视频播放',
          component(resolve) {
            require(['../view/video/VideoPlay.vue'], resolve);
          },
        },
      ]
    },
    {
      path: '/Login',
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
      path: '/CreationCenter',
      name: '创作中心',
      component(resolve) {
        require(['../view/contribute/CreationCenter.vue'], resolve);
      },
      children:[
        {
          path: '/CreationCenter/Contribute',
          name: '投稿',
          component(resolve) {
            require(['../view/contribute/Contribute.vue'], resolve);
          },
        },
        {
          path: '/CreationCenter/Audit',
          name: '视频审批',
          component(resolve) {
            require(['../view/contribute/Audit.vue'], resolve);
          },
        },
        {
          path: '/CreationCenter/AuditPlay/:resourceId',
          name: '视频审批播放',
          component(resolve) {
            require(['../view/contribute/AuditPlay.vue'], resolve);
          },
        },
      ]
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
