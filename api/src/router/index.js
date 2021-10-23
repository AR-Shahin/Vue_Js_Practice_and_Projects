import { createRouter, createWebHistory } from 'vue-router'


import store from '../store'

import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
    if('auth' in to.meta && to.meta.auth && !store.getters['auth/getAuthToken']){
        next({name:'home'});
    }else{
        next();
    }
 })
export default router
