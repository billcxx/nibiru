import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
// import './assets/js/main.js'
// import './assets/js/util.js'
// import './assets/js/breakpoints.min.js'
// import './assets/js/jquery.min.js'
// import './assets/js/jquery.scrolly.min.js'
// import './assets/js/jquery.dropotron.min.js'
// import './assets/js/jquery.scrollex.min.js'
// import './assets/js/browser.min.js'
import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
