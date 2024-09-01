import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import('../views/mainPage.vue')
    },
    {
      path: '/play',
      name: 'playPage',
      component: () => import('../components/playPage/playComponent.vue')
    },
    {
      path: '/servers',
      name: 'servers',
      component: () => import('../components/serversPage/serverPage.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../components/rules/rulesPage.vue')
    },
    // {
    //   path: '/shop',
    //   name: 'shop',
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/auth',
    //   name: 'auth',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/other',
      name: 'other',
      component: () => import('../components/other/otherPage.vue')
    },
    {
      path: '/other/admins',
      name: 'admins',
      component: () => import('../components/other/admins/adminsPage.vue')
    }
  ]
})

export default router
