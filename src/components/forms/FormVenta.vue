<template>
	<v-card>
    <v-card-title>
			Registro cliente
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-select :items="clientes" item-text="nombres" />
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="success">Agregar</v-btn>
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
