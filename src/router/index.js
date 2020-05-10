import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShowProduct from '@/components/ShowProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'show',
      name: 'ShowProduct',
      component: ShowProduct
    }
  ]
})
