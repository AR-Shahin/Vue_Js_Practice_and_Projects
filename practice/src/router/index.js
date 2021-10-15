import { createRouter, createWebHistory } from 'vue-router'

import routes from "./routes";
import store from '../store';
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



// let x = 10;


router.beforeEach((to,from,next) => {
   if('auth' in to.meta && to.meta.auth && !store.getters.getAuthToken){
       next({name:'home'});
   }else{
       next();
   }
})


export default router
