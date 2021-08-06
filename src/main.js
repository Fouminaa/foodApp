import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'


library.add(fas);
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fab)



Vue.config.productionTip = false
Vue.component('fa', FontAwesomeIcon)
new Vue({
  vuetify,
  render: h => h(App)
})
// .component('fa',FontAwesomeIcon)
.$mount('#app')
