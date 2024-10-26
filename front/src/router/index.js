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
      component: () => import('../components/playPage/PlayPage.vue')
    },
    {
      path: '/servers',
      name: 'servers',
      component: () => import('../components/serversPage/ServerPage.vue')
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
      component: () => import('../components/rules/RulesPage.vue')
    },
    {
      path: '/rules/license',
      name: 'license',
      component: () => import('../components/rules/LicensePage.vue')
    },
    {
      path: '/rules/policy',
      name: 'policy',
      component: () => import('../components/rules/PolicyPage.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/components/shop/ShopPage.vue')
    },
    {
      path: '/shop/servers/:id/privileges',
      name: 'ServerPrivileges',
      component: () => import('@/components/shop/components/PrivilegesPage.vue'),
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
      component: () => import('../components/other/OtherPage.vue')
    },
    {
      path: '/other/admins',
      name: 'admins',
      component: () => import('../components/other/admins/OtherPage.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../components/accountPage/AccountPage.vue')
    },
    {
      path: '/account/security',
      name: 'security',
      component: () => import('../components/securityPage/SecurityPage.vue')
    },
    {
      path: '/account/balance',
      name: 'balance',
      component: () => import('../components/balancePage/Balance.vue')
    },
    {
      path: '/account/transfer',
      name: 'transfer',
      component: () => import('../components/transferPage/TransferPage.vue')
    },
    {
      path: '/account/cart',
      name: 'cart',
      component: () => import('../components/cartPage/CartPage.vue')
    }
  ]
})

export default router
