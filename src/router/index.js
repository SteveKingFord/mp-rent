import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'


Vue.use(Router)

const router =new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    },
    {
      path: '/buy',
      name: 'Buy',
      component: () => import('@/views/home/buy'),
    },
    {
      path: '/product_detail',
      name: 'ProductDetail',
      component: () => import('@/views/home/detail'),
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/views/me/order'),
    },
    {
      path: '/order_detail',
      name: 'OrderDetail',
      component: () => import('@/views/me/orderDetail'),
    },
    {
      path: '/record',
      name: 'Record',
      component: () => import('@/views/me/record'),
    },
    {
      path: '/team',
      name: 'Team',
      component: () => import('@/views/me/team'),
    },
    {
      path: '/member',
      name: 'Member',
      component: () => import('@/views/me/member'),
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('@/views/me/setting'),
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home'),
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/category'),
      },
      {
        path: 'collect',
        name: 'Collect',
        component: () => import('@/views/collect'),
      },
      {
        path: 'collect2',
        name: 'Collect2',
        component: () => import('@/views/collect/collect'),
      },
      {
        path: 'me',
        name: 'Me',
        component: () => import('@/views/me'),
      },
     
      
    ]
    }

  ]
})

export default router;