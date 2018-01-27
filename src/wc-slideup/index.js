import Vue from 'vue'
import wcSlideup from './wcSlideup'

export default {
	install (Vue) {
		Vue.component('wcSlideup', Vue.extend(wcSlideup));
	}
}