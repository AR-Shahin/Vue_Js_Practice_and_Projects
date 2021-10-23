

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
    }

];
export default routes;
