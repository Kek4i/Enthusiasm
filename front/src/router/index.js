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
      path: '/servers/hardtech',
      name: 'hardtech',
      component: () => import('../components/serversPage/hardtechPage/hardtech.vue')
    },
    {
      path: '/servers/mif',
      name: 'mif',
      component: () => import('../components/serversPage/mifPage/mif.vue')
    },
    {
      path: '/servers/terrafirmacreate',
      name: 'terrafirmacreate',
      component: () => import('../components/serversPage/terrafirmacreatePage/terrafirmacreate.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../components/rules/rulesPage.vue')
    },
    {
      path: '/rules/license',
      name: 'license',
      component: () => import('../components/rules/licensePage.vue')
    },
    {
      path: '/rules/policy',
      name: 'policy',
      component: () => import('../components/rules/policyPage.vue')
    },
    // {
    //   path: '/shop',
    //   name: 'shop',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/registerPage/register.vue')
    },
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
