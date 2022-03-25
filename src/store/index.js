import { createStore } from 'vuex'

const store = createStore({
   state: {
      routes: []
   },

   //同步执行
   mutations: {
      initRoutes (state, data) {
         state.routes = data;
      }
   },

   //异步执行
   actions: {}
})

export default { store }