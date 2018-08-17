<template>
	<footer>
		<copyright></copyright>
	</footer>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import Copyright from './Copyright.vue';

Vue.use(Vuex);
Vue.component('copyright', Copyright);


export default {
	data () {
		return {
		};
	}
}
</script>
