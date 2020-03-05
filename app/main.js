// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.config.common with an alias.
import Vue from 'vue'
import App from './App'

import VueMaterial from 'vue-material'
// import CoreuiVue from '@coreui/vue';

Vue.config.productionTip = false
Vue.use(VueMaterial)
// Vue.use(CoreuiVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
