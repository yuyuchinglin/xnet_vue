// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios' //主要ajax套件
import VueAxios from 'vue-axios' //將它轉為vue的套件
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'




require('./assets/font-awesome/css/font-awesome.min.css')
// require('./assets/bootstrap/css/bootstrap.min.css')
// require('./assets/_reset.scss')
// require('./assets/_theme.scss')
// require('./assets/_post-layout.scss')
// require('./assets/_style.scss')

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});
