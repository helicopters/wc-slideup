import Vue from 'vue'
import App from './App'

import wcSlideup from './wc-slideup'
Vue.use(wcSlideup);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
