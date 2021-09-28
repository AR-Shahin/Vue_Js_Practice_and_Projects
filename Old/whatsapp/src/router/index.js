import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Message from '../pages/Message';
const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {path: '/messages',name: 'Message',component: Message},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 