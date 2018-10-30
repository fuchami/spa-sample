import Vue from 'vue';
import App from './App.vue';

// vueRouter
import VueRouter from 'vue-router';
import { routes } from './routes';

// vuetify
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors';

Vue.use(VueRouter)
Vue.use(Vuetify, {
  iconfont: 'fa' || 'mdi',
  theme: {
    primary: colors.cyan.darken2,
    secondary: colors.cyan.darken4,
    accent: colors.cyan.accent1
  }
})

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
