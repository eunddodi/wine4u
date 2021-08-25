import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Q1 from '../views/Q1.vue'
import Q2 from '../views/Q2.vue'
import Q3 from '../views/Q3.vue'
import Result from '../views/Result.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        page: 1
      }
    },
    {
      path: '/q1',
      name: 'Q1',
      component: Q1,
      meta: {
        page: 2
      }
    },
    {
      path: '/q2',
      name: 'Q2',
      component: Q2,
      meta: {
        page: 3
      }
    },
    {
      path: '/q3',
      name: 'Q3',
      component: Q3,
      meta: {
        page: 4
      }
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      transitionName: 'fade'
    }
  ]

});
