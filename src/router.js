import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/lights',
      name: 'lights',
      component: () => import('./views/About.vue'),
      props: {
        category: 1
      }
    },
    {
      path: '/lamp',
      name: 'lamp',
      component: () => import('./views/About.vue'),
      props: {
        category: 0
      }
    },
    {
      path: '/smarthouse',
      name: 'smarthouse',
      component: () => import('./views/About.vue'),
      props: {
        category: 2
      }
    },
    {
      path: '/automatic',
      name: 'automatic',
      component: () => import('./views/About.vue'),
      props: {
        category: 3
      }
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: () => import('./views/About.vue'),
      props: {
        category: 4
      }
    }
  ]
})
