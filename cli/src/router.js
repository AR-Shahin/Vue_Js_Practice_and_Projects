import {createRouter,createWebHistory} from 'vue-router'

import Home from './pages/HomeComponent'
import ToDo from './pages/ToDoComponent'
import NewCom from './pages/newComponent'
import IceCream from './pages/IceCreamComponent'
const routes = [
    {path : '/',component : Home},
    {path : '/to-do',component : ToDo},
    {path : '/new-com',component : NewCom},
    {path : '/ice-cream',component : IceCream},
];

const router = createRouter({
     history: createWebHistory(),
    routes
});

export default router;
