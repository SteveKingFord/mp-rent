import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'


Vue.use(Router)

const router =new Router({
  routes: [
    {
      path: '/bill',
      name: 'Bill',
      component: () => import('@/views/me/bill'),
    },
    {
      path: '/lease',
      name: 'Lease',
      component: () => import('@/views/me/lease'),
    },
    {
      path: '/detail',
      name: '/RentDetail',
      component: () => import('@/views/rent/detail'),
    },
    {
      path: '/',
      component: Layout,
      redirect: '/rent',
      children: [{
        path: 'rent',
        name: 'Rent',
        component: () => import('@/views/rent'),
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