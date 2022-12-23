import { createRouter ,createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Admin from "@/pages/Admin.vue";
import Profile from "@/pages/admin/Profile.vue";
import Dashboard from "@/pages/admin/Dashboard.vue";

const routes = [
    { path: '/', component: Home,"name":"home"},
    { path: '/about', component: About },
    { path: '/admin', component: Admin , children:[
      { path: '', component: Dashboard },
      { path: 'profile', component: Profile,name:"admin_profile" },
    ], "name": 'admin'},
  ]
  

  const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

  export default router;