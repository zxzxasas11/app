// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css';
//懒加载
import VueLazyLoad from 'vue-lazyload'

import axios from 'axios'
Vue.prototype.axios = axios;

import qs from 'qs';
Vue.prototype.$qs = qs;

import store from './store';
import common from './assets/js/common';
Vue.prototype.common = common;
Vue.prototype.serverIp = "http://192.168.31.226:5000";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

import VueLocalStorage from 'vue-ls';
Vue.use(VueLocalStorage);

Vue.config.productionTip = false;


import 'babel-polyfill';
/* eslint-disable no-new */


import Promise from 'es6-promise';
Promise.polyfill();
Vue.use(VueLazyLoad, {
  error: '../static/lazyloading.svg',
  loading: '../static/lazyloading.svg'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
