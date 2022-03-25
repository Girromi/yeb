import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'

import { postRequest } from "./utils/api"
import { getRequest } from "./utils/api"
import { putRequest } from "./utils/api"
import { deleteRequest } from "./utils/api"
import { initMenu } from './utils/menu'

// Vue.prototype.postRequest = postRequest;
// Vue.prototype.getRequest = getRequest;
// Vue.prototype.putRequest = putRequest;
// Vue.prototype.deleteRequest = deleteRequest;

router.beforeEach((to, from, next) => {
   if (window.sessionStorage.getItem('tokenStr')) {
      initMenu(router, store)
      if (!window.sessionStorage.getItem('user')) {
         //判断用户信息是否存在
         return getRequest('/admin/info').then(resp => {
            if (resp) {
               //存入用户信息
               window.sessionStorage.setItem('user', JSON.stringify(resp));
               next();
            }
         })
      }
      next();
   } else {
      // if (to.path == '/') {
      next();
      // }
      //  else {
      //    next('/?redirect=' + to.path);
      // }
   }
})

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')