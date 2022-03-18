import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { postRequest } from "./utils/api"
import { getRequest } from "./utils/api"
import { putRequest } from "./utils/api"
import { deleteRequest } from "./utils/api"

// Vue.prototype.postRequest = postRequest;
// Vue.prototype.getRequest = getRequest;
// Vue.prototype.putRequest = putRequest;
// Vue.prototype.deleteRequest = deleteRequest;

createApp(App).use(router).use(ElementPlus).mount('#app')