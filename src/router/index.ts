import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const SITE_NAME = 'Learning Vue'

declare module 'vue-router' {
  interface RouteMeta {
    // shown in the browser tab as "<title> · Learning Vue"
    title?: string
  }
}

// One page per component: add a route here and an entry in NavPanel.vue.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/navbar',
      name: 'navbar',
      // route level code-splitting: each page is its own chunk
      component: () => import('../views/NavBarView.vue'),
      meta: { title: 'Navbar' },
    },
    {
      path: '/segmented-control',
      name: 'segmented-control',
      component: () => import('../views/SegmentedControlView.vue'),
      meta: { title: 'Segmented control' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · ${SITE_NAME}` : SITE_NAME
})

export default router
