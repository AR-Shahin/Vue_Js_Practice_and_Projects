import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.css";
import helpers from './utilities/mixins/helpers';
createApp(App).use(store).use(router).mixin(helpers).mount('#app')
