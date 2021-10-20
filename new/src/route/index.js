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
    {  path: '/:pathMatch(.*)*',
       name: 'NotFound',
       component:  () => import( '../pages/404.vue')
    },
];

export default routes;
