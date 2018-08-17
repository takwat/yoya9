<template>
	<div>
		<heading></heading>
		<heading></heading>
	</div>
</template>
<script>
import Vue from 'vue'
import Heading from './Heading.vue'

export default {
	data () {
		return {
		};
	}
}

Vue.component('heading', Heading);
</script>
