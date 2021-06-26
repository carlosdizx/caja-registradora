<template>
	<v-card>
		<v-card-title>
			Registro venta
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-select label="Seleccione un cliente" :items="clientes" item-text="nombres" />
        <v-btn>
          agregar producto
          <v-icon>mdi-cart-plus</v-icon>
        </v-btn>
			</v-form>
      <br>
      <hr>
      <hr>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="success">Registrar venta</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import { ES_NUMERO } from '../../const/funciones';
	import { mapActions } from 'vuex';
	export default {
		name: 'FormVenta',
		components: {},
		data: () => ({
			clientes: [],
			productos: [],
		}),
		async mounted() {
			await this.listadoClientes(this.clientes);
			await this.listadoProductos(this.productos);
		},
		methods: {
			...mapActions(['listadoClientes', 'listadoProductos']),
			submit() {},
		},
	};
</script>
