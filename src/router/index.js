import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Subscribers from '../views/Subscribers.vue'
import My_topics from '../views/My-topics.vue'
import AccountHistory from '../views/History.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/subscribers',
    name: 'Subscribers',
    component: Subscribers
  }, 
  {
    path: '/my-topics',
    name: 'My-topics',
    component: My_topics
  }, 
  {
    path: '/history',
    name: 'History',
    component: AccountHistory
  }, 
  {
    path: '/',
    name: 'Register',
    component: Register
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  }, 
  {
    path: '/about',
    name: 'About',
    // routea level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
