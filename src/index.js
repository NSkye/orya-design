import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'
import VueCarousel from 'vue-carousel'
import 'vue-glide-js/dist/vue-glide.css'
import 'normalize.css'
import '@/fonts/inter/inter.css'
import router from '@/router'

Vue.use(VueRouter)
Vue.use(VueCarousel)

new Vue({
  el: document.querySelector('#app'),
  router,
  render: h => h(App)
})
