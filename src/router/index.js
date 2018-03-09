import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Association from '@/components/Association'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PwetLol',
      component: HelloWorld
    },
    {
      path: '/Association',
      name: 'Association',
      component: Association
    }
  ]
})
