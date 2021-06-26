<template>
	<div>
		<Tabla titulo="Listado de productos" :columnas="columnas" :lista="lista" />
		{{ lista }}
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
				{ text: 'Items comprados', value: 'compras' },
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
