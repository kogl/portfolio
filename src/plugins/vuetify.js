import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		// iconfont: 'md',

	},
	theme: {
		themes: {
			light: {
				primary: '#111111',
				green: "#03834d"


			},
		},
	},
});
