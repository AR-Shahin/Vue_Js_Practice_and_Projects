import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/tailwind.css'
import '../src/assets/style.css'
createApp(App).use(router).mount('#app')
