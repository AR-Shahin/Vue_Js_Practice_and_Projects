

const routes = [
    {
        path : "/",
        name: 'home',
        component : () => import(/* webpackChunkName: "todo" */ '../views/Home')
    },
    {
        path : "/products",
        name: 'product',
        component : () => import(/* webpackChunkName: "todo" */ '../views/Product')
    },
    {
        path : "/dashboard",
        name: 'dashboard',
        component : () => import(/* webpackChunkName: "todo" */ '../views/Dashboard')
    }

];
export default routes;
