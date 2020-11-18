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
    },
    {
      path: '/parent',
      component: () => import('../components/Parent'),
    },
    {
      path: '/child',
      component: () => import('../components/Child'),
    },
    {
      path: '/son',
      component: () => import('../components/Son'),
    },
    {
      // 动态路由
      path: '/son1/:id',
      name: 'son1',
      component: () => import('../components/Son1'),
    },
    {
      // 嵌套路由，一般用来做，头部和底部不变的，中间内容变的
      path: '/home',
      component: () => import('../components/Home/Home'),
      children: [{
        path: '/c',
        component: () => import('../components/Child'),
      }],
    },
  ],
});
