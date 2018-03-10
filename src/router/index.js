import Vue from 'vue'
import Router from 'vue-router'
import Association from '@/components/Association'
import Convention from '@/components/Convention'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Association',
      name: 'Association',
      component: Association
    },
    {
      path: '/Convention',
      name: 'Convention',
      component: Convention
    }
  ]
})
