<template>
	<div>
		<ToolBar titulo="Inicio" color="indigo" :tabs="tabs" />
		<ResumenApp />
		<!--
    <grafico :etiquetas="etiquetas" :datos="datos" :colores="colores" />
    -->
	</div>
</template>

<script>
	import ToolBar from '../components/Inicio/ToolBarInicio';
	import ResumenApp from '../components/Inicio/ResumenApp';
	import { ITEMS } from '../const/itemsInicio';
	export default {
		name: 'Inicio',
		components: {
			ToolBar,
			ResumenApp,
		},
		data: () => ({
			tabs: [{ name: '', link: '' }],
		}),
		mounted() {
			this.tabs = ITEMS;
		},
	};
</script>
