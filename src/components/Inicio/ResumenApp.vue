<template>
	<v-container>
		<CardResumen
			titulo="Ventas"
			subTitulo="Resumen"
			color="green"
			icono="mdi-cash-register"
			:descripcion="'Numero de ventas registradas: ' + ventas.length"
			:auxinfo="total"
			:addaux="true"
		/>
		<CardResumen
			titulo="Clientes"
			subTitulo="Resumen"
			color="blue"
			icono="mdi-account-group"
			:descripcion="'Numero de clientes registrados: ' + clientes.length"
		/>
		<CardResumen
			titulo="Prodcutos"
			subTitulo="Resumen"
			color="deep-purple"
			icono="mdi-inbox-multiple"
			:descripcion="'Numero de productos registrados: ' + productos.length"
		/>
	</v-container>
</template>

<script>
	import CardResumen from '../general/CardResumen';
	import { mapActions } from 'vuex';
	export default {
		name: 'ResumenApp',
		components: {
			CardResumen,
		},
		data: () => ({
			clientes: [],
			productos: [],
			ventas: [],
			total: 0,
		}),
		mounted() {
			this.cargarDatos();
		},
		methods: {
			...mapActions(['listadoClientes', 'listadoProductos', 'listadoResumenVentas']),
			async cargarDatos() {
				await this.listadoClientes(this.clientes);
				await this.listadoProductos(this.productos);
				await this.listadoResumenVentas(this.ventas);
				if (this.ventas.length !== 0)
					await this.ventas.forEach((item) => {
						this.total += parseFloat(item.total);
					});
			},
		},
	};
</script>

<style scoped></style>
