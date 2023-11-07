import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reference',
      name: 'reference',
      component: () => import('./views/Reference.vue')
    },
    {
      path: '/examples',
      component: () => import('./views/Examples.vue'),
      children: [
        {
          name: 'examples',
          path: '',
          component: () => import('./examples/BasicExample.vue')
        },
        {
          path: 'basic-example',
          component: () => import('./examples/BasicExample.vue')
        },
        {
          path: 'working-with-apis',
          component: () => import('./examples/WorkingWithAPIs.vue')
        },
        {
          path: 'prepending-and-appending',
          component: () => import('./examples/PrependAppend.vue')
        },
        {
          name: 'custom-suggestion-slot',
          path: 'custom-suggestion-slot',
          component: () => import('./examples/CustomSuggestion.vue')
        }
      ]
    }
  ]
})
