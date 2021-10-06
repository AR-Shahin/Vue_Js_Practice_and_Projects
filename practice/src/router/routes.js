import Home from "../pages/Home.vue"

const routes = [
    { path: "/",
     component: Home,
     name:'home' 
    },
    { 
        path: "/todo",
        name:'todo',
        component : () => import(/* webpackChunkName: "todo" */ '../pages/ToDo')
    },
    { 
        path: "/mark-down",
        name:'mark-down',
        component : () => import(/* webpackChunkName: "mark-down" */ '../pages/MarkDown')
    },
    { 
        path: "/slider",
        name:'slider',
        component : () => import(/* webpackChunkName: "calculator" */ '../pages/Slider')
    },
    { 
        path: "/calculator",
        name:'calculator',
        component : () => import('../pages/Calculator')
    },
    { 
        path: "/slot",
        name:'slot',
        component : () => import('../pages/Slot')
    },
    { 
        path: "/test",
        name:'test',
        component : () => import('../pages/Test')
    },
    {  path: '/:pathMatch(.*)*',
       name: 'NotFound',
       component:  () => import( '../pages/404.vue')
    },
];

export default routes;
