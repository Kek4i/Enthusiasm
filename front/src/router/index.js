import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import('../views/mainPage.vue')
    },
    // {
    //   path: '/servers',
    //   name: 'servers',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/rules',
    //   name: 'rules',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/shop',
    //   name: 'shop',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/auth',
    //   name: 'auth',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
