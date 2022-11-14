import { createApp } from 'vue'
//import * as Vue from 'vue';
import App from './App.vue'
//import axios from 'axios'
import router from './router'

// Vue.config.productionTip = false
//Vue.prototype.$http = axios;

createApp(App).use(router).mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
