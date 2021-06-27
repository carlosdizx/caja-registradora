<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<script lang="ts">
	import Vue from 'vue';
	const numeral = require('numeral');

	Vue.filter('formatNumber', function(value: number) {
		return numeral(value).format('0,0');
	});

	Vue.filter('toUSD', function(value: number) {
		return `$${value.toLocaleString()}`;
	});

	export default Vue.extend({
		name: 'App',
		data: () => ({}),
	});
</script>
