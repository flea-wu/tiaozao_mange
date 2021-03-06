import Vue from 'vue';
// 饿加载进入页面就加载组件
import VueRouter from 'vue-router';
import PageMain from '@/components/layout/content/PageMain';

Vue.use(VueRouter);

// 完整路由代码;

const routes = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      // 懒加载的方式，按需加载页面
      component: () => import('../views/Main'),
      children: [

      ],
      meta: {
        title: '首页',
      },
    },
    {
      path: '/',
      component: PageMain,
      children: [
        {
          path: '1',
          name: '1',
          component: () => import('@/components/Num/Num1'),
        },
      ],
    },
    {
      path: '/',
      component: PageMain,
      children: [
        {
          path: '2',
          name: '2',
          component: () => import('@/components/Num/Num2'),
        },
      ],
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

export default routes;
