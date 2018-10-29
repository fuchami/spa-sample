import Vue from 'vue';
import App from './App.vue';

// vueRouter
import VueRouter from 'vue-router';
import { routes } from './routes';

// vuetify
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify, {
  iconfont: 'fa' || 'mdi'
})

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
