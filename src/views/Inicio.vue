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
	import Grafico from '../components/general/GraficoBarras';
	import { ITEMS } from '../const/itemsInicio';
	export default {
		name: 'Inicio',
		components: {
			ToolBar,
			ResumenApp,
			Grafico,
		},
		data: () => ({
			tabs: [{ name: '', link: '' }],
			etiquetas: [
				'Enero',
				'Febrero',
				'Marzo',
				'Abril',
				'Mayo',
				'Junio',
				'Julio',
				'Agosto',
				'Septiembre',
				'Octubre',
				'Noviembre',
				'Diciembre',
			],
			datos: [10, 20, 10, 11, 5, 2, 3, 5, 6, 10, 20, 50],
			colores: [
				'green',
				'blue',
				'red',
				'yellow',
				'pink',
				'cyan',
				'indigo',
				'orange',
				'purple',
				'brown',
				'olive',
				'dark',
			],
		}),
		mounted() {
			this.tabs = ITEMS;
			//console.log(new Date().toDateString());
			//console.log(new Date());
		},
	};
</script>
