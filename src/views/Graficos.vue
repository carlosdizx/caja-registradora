<template>
	<div>
		<ToolBarGrafico titulo="Inicio" color="green" :tabs="tabs" />
	</div>
</template>

<script>
	import ToolBarGrafico from '../components/grafico/ToolBarGrafico';

	export default {
		name: 'Graficos',
		components: {
			ToolBarGrafico,
		},
		data: () => ({
			tabs: ['tab1', 'tab2'],
		}),
    mounted() {
      this.tabs = ['mdi-head-plus-outline', 'mdi-food', 'mdi-point-of-sale'];
    },
	};
</script>

<style scoped></style>
