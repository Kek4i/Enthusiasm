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
      path: '/servers/:serverName',
      name: 'ServerInfo',
      component: () => import('@/components/serversPage/serverInfoPage/ServerInfoDisplay.vue')
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
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/components/shop/shopPage.vue')
    },
    {
      path: '/shop/servers/:id/privileges',
      name: 'ServerPrivileges',
      component: () => import('@/components/shop/components/privilegesPage.vue'),
      props: true,
    },
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
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../components/accountPage/account.vue')
    },
    {
      path: '/account/security',
      name: 'security',
      component: () => import('../components/securityPage/security.vue')
    },
    {
      path: '/account/balance',
      name: 'balance',
      component: () => import('../components/balancePage/balance.vue')
    },
    {
      path: '/account/transfer',
      name: 'transfer',
      component: () => import('../components/transferPage/TransferPage.vue')
    }
  ]
})

export default router
