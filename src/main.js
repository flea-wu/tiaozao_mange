import Vue from 'vue';
// 第三方包
import ElementUI from 'element-ui';
import App from './App.vue';
// 引入 vue-router
import router from './router/router';
// 引入 vuex
import store from './store';

// 全局配置
// import '@/assets/scss/reset.scss'; // 全局样式
// element-ui样式
import 'element-ui/lib/theme-chalk/index.css';

import http from './api/axios'; // axios
// import './mock'; // mockjs

import './style/main.css';

router.beforeEach((to, from, next) => {
  console.log('to', to.path);
  console.log('from', from.path);
  if (to.path === '/') {
    next();
  } else {
    router.push({ path: '/' });
  }
});

Vue.use(ElementUI);
Vue.prototype.$http = http;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
