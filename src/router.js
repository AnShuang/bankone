import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homepage.vue'
import EleUi from '@/pages/elementuitest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/ele',
      name: 'ele',
      component: EleUi
    }
  ]
})
