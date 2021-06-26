<template>
	<Tabla titulo="Listado de productos" :columnas="columnas" />
</template>

<script>
	import Tabla from '../general/Tabla';
	export default {
		name: 'TablaProductos',
		data: () => ({
			columnas: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6'],
		}),
		components: {
			Tabla,
		},
	};
</script>

<style scoped></style>
