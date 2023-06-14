import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'HomePage',
    path: '/',
    components: {
      default: () => import('../views/Home/HomePage.vue')
    },
    props: true,
  },
  {
    name: 'RankPage',
    path: '/rank',
    components: {
      default: () => import('../views/Top/TopPage.vue')
    },
    props: true,
  },
  {
    name: 'Signup',
    path: '/signup',
    components: {
      default: () => import('../views/SignUp/SignUpPage.vue')
    },
    props: true,
  },
  {
    name: 'Signin',
    path: '/signin',
    components: {
      default: () => import('../views/SignIn/SignInPage.vue')
    },
    props: true,
  },
  {
    name: 'Redirection',
    path: '/cut',
    components: {
      default: () => import('../views/Redirection/RedirectionPage.vue')
    },
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router