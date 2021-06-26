<template>
	<v-card>
		<v-card-title>
			Registro venta
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-select label="Seleccione un cliente" :items="clientes" item-text="nombres" />
				<hr />
				<v-row>
					<v-col cols="3">
						<v-text-field
							v-model.number="cantidad"
							type="number"
							label="cantidad"
							@keypress="esNumero($event)"
						/>
					</v-col>
					<v-col cols="9">
						<v-text-field
							v-model.number="subtotal"
							disabled
							type="number"
							label="Subtotal"
						/>
					</v-col>
				</v-row>
				<v-select label="Productos" :items="productos" item-text="nombre" />
				<v-btn>
					agregar producto
					<v-icon>mdi-cart-plus</v-icon>
				</v-btn>
				<br />
				<br />
				<hr />
			</v-form>

			<!--
        <ItemVenta :items="productos" />
      -->
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="success">Registrar venta</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import { ES_NUMERO } from '../../const/funciones';
	import { mapActions } from 'vuex';
	import ItemVenta from './ItemVenta';
	export default {
		name: 'FormVenta',
		components: { ItemVenta },
		data: () => ({
			clientes: [],
			productos: [],
			comprados: [],
			cantidad: 1,
			subtotal: 0,
		}),
		async mounted() {
			await this.listadoClientes(this.clientes);
			await this.listadoProductos(this.productos);
		},
		methods: {
			...mapActions(['listadoClientes', 'listadoProductos']),
			submit() {},
			esNumero(evt) {
				ES_NUMERO(evt);
			},
		},
	};
</script>
