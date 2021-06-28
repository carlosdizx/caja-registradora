<template>
	<ToolBarListado titulo="Listado" color="deep-purple" :tabs="tabs" />
</template>

<script>
	import ToolBarListado from '../components/List/ToolBarListado';
	export default {
		name: 'Listado',
		components: {
			ToolBarListado,
		},
		data: () => ({
			tabs: [''],
		}),
		mounted() {
			this.tabs = ['mdi-head-plus-outline', 'mdi-food', 'mdi-point-of-sale'];
		},
	};
</script>
