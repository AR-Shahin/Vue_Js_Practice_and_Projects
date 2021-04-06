import {createRouter,createWebHistory} from 'vue-router'

import Home from './pages/HomeComponent'
import ToDo from './pages/ToDoComponent'
import NewCom from './pages/newComponent'
import IceCream from './pages/IceCreamComponent'
import NotFound from './pages/NotFound'
const routes = [
    {path : '/',component : Home,name:'home'},
    {path : '/to-do',component : ToDo,name :'todo'},
    {path : '/new-com',component : NewCom,name:'newcom'},
    {path : '/ice-cream',component : IceCream,name:'ice'},
    {path : '/para/:id',component : NewCom,name :'para'},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
     history: createWebHistory(),
    routes
});

export default router;
