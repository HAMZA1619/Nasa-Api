import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyARu8_g5NGyKApmZI5DtpUIaUec-kQW1fo',
 
  }})
new Vue({
  render: h => h(App),
}).$mount('#app')
