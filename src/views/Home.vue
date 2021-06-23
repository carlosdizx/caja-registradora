<template>
	<Login />
	<!--
	<v-card>
		<ToolBar :tabs="items" color="indigo" titulo="Registrar" />
	</v-card>
	-->
</template>

<script lang="ts">
	import Vue from 'vue';
	import Login from '../components/Login.vue';
	export default Vue.extend({
		name: 'Home',
		data: () => ({
			items: ['error 500 en frontend'],
		}),
		components: {
			Login,
		},
		mounted() {
			this.items = ['Ventas', 'Personas', 'Productos'];
		},
	});
</script>
