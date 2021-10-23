

const routes = [
    {
        path : "/",
        name: 'home',
        component : () => import(/* webpackChunkName: "todo" */ '../views/Home'),
        meta:{auth:false}
    },
    {
        path : "/products",
        name: 'product',
        component : () => import(/* webpackChunkName: "todo" */ '../views/Product'),
        meta: {auth:true}
    },
    {
        path : "/dashboard",
        name: 'dashboard',
        component : () => import(/* webpackChunkName: "todo" */ '../views/Dashboard'),
        meta: {auth:true}
    }

];
export default routes;
