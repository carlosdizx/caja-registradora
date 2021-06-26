<template>
	<ToolBarListado titulo="Registro" color="indigo" :tabs="tabs" />
</template>

<script>
	import ToolBarListado from '../components/general/ToolBarListado';
	export default {
		name: 'ListadoVPP',
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

<style scoped></style>
