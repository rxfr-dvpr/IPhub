import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('@/views/CasesView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/FaqView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/ErrorView.vue')
    }
  ]
})

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0);
  next()
});

export default router
