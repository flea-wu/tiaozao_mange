import Vue from 'vue';
// 饿加载进入页面就加载组件
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 完整路由代码;
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      // 懒加载的方式，按需加载页面
      component: () => import('../views/Main'),
      children: [],
      meta: {
        title: '首页',
      },
    },
    {
      path: '/login',
      // 懒加载的方式，按需加载页面
      component: () => import('../views/Login/Login'),
      meta: {
        title: '登录',
      },
    },
  ],
});
