<template>
	<div>
		<Tabla titulo="Listado de ventas" :columnas="columnas" :lista="lista" />
	</div>
</template>
<script>
	import Tabla from '../general/Tabla';
	import { mapActions } from 'vuex';
	export default {
		name: 'TablaVentas',
		components: {
			Tabla,
		},
		data: () => ({
			lista: [],
			columnas: [
				{ text: 'Cliente', value: 'cliente' },
				{ text: 'Productos', value: 'productos' },
				{ text: 'Subtotal', value: 'subtotal' },
				{ text: 'Total', value: 'total' },
			],
		}),
		methods: {
			...mapActions(['listadoVentas']),
		},

		mounted() {
			this.listadoVentas(this.lista);
		},
	};
</script>

<style scoped></style>
