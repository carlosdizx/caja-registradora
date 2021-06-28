<template>
	<v-container>
		<CardResumen
			titulo="Ventas"
			subTitulo="Resumen"
			color="green"
			icono="mdi-cash-register"
			descripcion="Total ventas registradas"
		/>
    <CardResumen
        titulo="Clientes"
        subTitulo="Resumen"
        color="blue"
        icono="mdi-account-group"
        descripcion="Total ventas registradas"
    />
    <CardResumen
        titulo="Prodcutos"
        subTitulo="Resumen"
        color="deep-purple"
        icono="mdi-inbox-multiple"
        descripcion="Total ventas registradas"
    />
	</v-container>
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
