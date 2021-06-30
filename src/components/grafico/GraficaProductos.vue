<template>
	<div>
		<GraficoBarras v-if="cargar" :etiquetas="etiquetas" :datos="datos" />
	</div>
</template>

<script>
	import GraficoBarras from '../general/GraficoBarras';
	import { mapActions } from 'vuex';
	export default {
		name: 'GraficaProductos',
		components: {
			GraficoBarras,
		},
		data: () => ({
			datos: [],
			etiquetas: [],
			productos: [],
			cargar: false,
		}),
		props: {},
		methods: {
			...mapActions(['listadoProductos']),
		},
		async created() {},
		async mounted() {
			await this.listadoProductos(this.productos);
			await this.productos.forEach((item) => {
				const itemJson = JSON.parse(JSON.stringify(item));
				this.etiquetas.push(itemJson.nombre);
				this.datos.push(itemJson.precioVenta);
			});
			this.cargar = true;
		},
	};
</script>

<style scoped></style>
