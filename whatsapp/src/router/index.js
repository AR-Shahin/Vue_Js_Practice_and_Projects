import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router