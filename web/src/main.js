// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//懒加载
import VueLazyLoad from 'vue-lazyload'

import axios from 'axios'
Vue.prototype.axios = axios;

import qs from 'qs';
Vue.prototype.$qs = qs;

import Vuex from 'vuex';
Vue.use(Vuex);
import common from './assets/js/common';
Vue.prototype.common = common;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  error: '../static/lazyloading.svg',
  loading: '../static/lazyloading.svg'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
