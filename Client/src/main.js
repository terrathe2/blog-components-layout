// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import swal from 'vue-sweetalert2'
import VueJWT from 'vuejs-jwt'
import store from './vuex/store'

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(swal)
Vue.use(VueJWT, {
  signKey: 'hacktiv8',
  keyName: 'token'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
