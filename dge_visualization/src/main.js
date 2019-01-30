// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/ag-theme-balham.css'
import 'ag-grid/dist/styles/ag-theme-fresh.css'
import 'ag-grid/dist/styles/ag-theme-balham-dark.css'
import 'ag-grid/dist/styles/ag-theme-blue.css'

import App from '@/App'
import router from '@/router'
import store from '@/store/store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VTooltip)

Vue.prototype.$name = 'DGE visualizer'
Vue.prototype.$version = '0.2.0'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
