import Home from "../pages/Home.vue"

const routes = [
    { path: "/",
     component: Home,
     name:'home' 
    },
    { 
        path: "/todo",
        name:'todo',
        component : () => import(/* webpackChunkName: "todo" */ '../pages/ToDo'),
        meta: {auth:true}
    },
    { 
        path: "/mark-down",
        name:'mark-down',
        component : () => import(/* webpackChunkName: "mark-down" */ '../pages/MarkDown'),
        meta: {auth:true}
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
        component : () => import('../pages/Slot'),
        meta: {auth:true}
    },
    { 
        path: "/test",
        name:'test',
        component : () => import('../pages/Test')
    },
    { 
        path: "/api-todo",
        name:'api-todo',
        component : () => import('../pages/ApiTodo'),
        meta: {auth:true}
    },
    { 
        path: "/products",
        name:'products',
        component : () => import('../pages/Products'),
    },
    { 
        path: "/product/:slug",
        name:'single-product',
        component : () => import('../pages/SingleProduct'),
    },
    {  path: '/:pathMatch(.*)*',
       name: 'NotFound',
       component:  () => import( '../pages/404.vue')
    },
];

export default routes;
