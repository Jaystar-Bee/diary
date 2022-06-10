import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './../views/LoginPage.vue'
import store from './../store/index'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta: { requiresAuth: false }
  },
  { path: '/main', name: 'main', component: () => import('./../views/MainView.vue'), meta: { requiresAuth: true } },
  { path: '/main/:id', name: 'detail', component: () => import('./../views/DiaryDetail.vue'), meta: { requiresAuth: true } },
  { path: '/:notFound(.*)', name: 'notFound', component: () => import('./../views/notFound.vue') }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/')
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/main')
  } else {
    next()
  }
})

export default router
