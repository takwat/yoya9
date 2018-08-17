import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';

Vue.use(Vuex);


const store = new Vuex.Store({
	state: {
		title: ''
	},
	mutations: {
		increment(state) {
			// state.title = ++
		}
	}
});

  



new Vue({
	el: '#app',
	render: h => h(App)
});
