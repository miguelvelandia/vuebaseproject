import Vue from 'vue'

import pageIndex from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Element Ui
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  locale
})
window.axios = require('axios')
window.axios.defaults.headers.common.Accept = 'application/json'
//window.formSerialize = require('form-serialize')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false

new Vue({
  store,
  router,
render: h => h(pageIndex),
}).$mount('#app')
