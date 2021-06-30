<template>
	<GraficoBarras :etiquetas="etiquetas" :datos="datos" />
</template>

<script>
	import GraficoBarras from '../general/GraficoBarras';
	export default {
		name: 'GraficaProductos',
		components: {
			GraficoBarras,
		},
		data: () => ({
      etiquetas:['A2','B2','C3','D4'],
      datos: [100,100,200,10]
    }),
	};
</script>

<style scoped></style>
