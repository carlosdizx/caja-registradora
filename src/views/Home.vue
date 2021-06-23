<template>
	<v-card>
		<ToolBar :tabs="items" color="indigo" titulo="Registrar" />
	</v-card>
</template>

<script lang="ts">
	import Vue from 'vue';
	import ToolBar from '../components/general/ToolBar.vue';
	export default Vue.extend({
		name: 'Home',
		data: () => ({
			items: ['error 500 en frontend'],
		}),
		components: {
			ToolBar,
		},
		mounted() {
			this.items = ['Ventas', 'Personas', 'Productos'];
		},
	});
</script>
