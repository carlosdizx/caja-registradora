<template>
	<Tabla titulo="Listado de productos" :columnas="columnas" :lista="lista" />
</template>

<script>
	import Tabla from '../general/Tabla';
	import { mapActions } from 'vuex';
	export default {
		name: 'TablaProductos',
		components: {
			Tabla,
		},
		data: () => ({
			lista: [],
			columnas: [
				{ text: 'Nombre', value: 'nombre' },
				{ text: 'Precio Compra', value: 'precioCompra' },
				{ text: 'Precio Venta', value: 'precioVenta' },
				{ text: 'Tipo', value: 'tipo' },
			],
		}),
		methods: {
			...mapActions(['']),
		},
	};
</script>

<style scoped></style>
