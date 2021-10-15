import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

Vue.config.productionTip = false

Vue.mixin({
	created: function () {
		this.gsap = gsap;
	}
});

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
