<template>
	<div>
		<CardResumen titulo="Ventas" subTitulo="Resumen" descripcion="Total ventas registradas" />
	</div>
</template>

<script>
	import CardResumen from '../general/CardResumen';
	export default {
		name: 'ResumenApp',
		components: {
			CardResumen,
		},
	};
</script>

<style scoped></style>
