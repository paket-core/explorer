import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Так импортировать библиотеки для вью (в гитах часто уже есть как добавлять)
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
const http=Vue.http
export default http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
