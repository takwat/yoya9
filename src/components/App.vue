<template>
	<div>
		<heading title="Hello World!"></heading>
		<heading title="こんにちは世界！"></heading>
		<pfooter></pfooter>
	</div>
</template>
<script>
import Vue from 'vue';
import Vuex from 'vuex';
import Heading from './Heading.vue';
import Footer from './Footer.vue';

Vue.use(Vuex);
Vue.component('heading', Heading);
Vue.component('pfooter', Footer);

export default {
	data () {
		return {
		};
	}
}
</script>
