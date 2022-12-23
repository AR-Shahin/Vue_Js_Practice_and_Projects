import dotenv from 'dotenv';


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/main.css';

import router from './routes';
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
