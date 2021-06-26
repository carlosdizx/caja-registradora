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
						<v-select
							v-model="productoSeleccionado"
							label="Producto"
							:items="productos"
							item-text="nombre"
						/>
					</v-col>
				</v-row>
				<v-btn @click="calcularSubtotal">
					agregar producto
					<v-icon>mdi-cart-plus</v-icon>
				</v-btn>
				<br />
				<br />
				<hr />
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="success">Registrar venta</v-btn>
			<v-btn text disabled>
				Total
				{{ total }}
				<v-icon>mdi-cash</v-icon>
			</v-btn>
		</v-card-actions>
		<v-data-table
			:headers="columnas"
			:items="comprados"
			:items-per-page="5"
			class="elevation-1"
		></v-data-table>
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
			productoSeleccionado: null,
			columnas: [
				{ text: 'Producto', value: 'nombre' },
				{ text: 'Cantidad', value: 'cantidad' },
				{ text: 'Subtotal', value: 'subTotal' },
			],
			total: 0,
		}),
		async mounted() {
			await this.listadoClientes(this.clientes);
			await this.listadoProductos(this.productos);
		},
		methods: {
			...mapActions(['listadoClientes', 'listadoProductos']),
			async calcularSubtotal() {
				if (this.cantidad <= 0 || this.productoSeleccionado === null) {
					return alert(
						'Verfique los datos,numeros mayores a cero y seleccione un producto'
					);
				}
				// this.productos = await this.productos.filter((item) => item.nombre !== this.productoSeleccionado);
				await this.productos.forEach((item, index) => {
					if (item.nombre === this.productoSeleccionado) {
						const subTotal = item.precioVenta * this.cantidad;
						this.total += subTotal;
						this.comprados.push({
							nombre: this.productoSeleccionado,
							cantidad: this.cantidad,
							subTotal: subTotal,
						});
						this.cantidad = 1;
						this.productoSeleccionado = null;
					}
				});
			},
			submit() {},
			esNumero(evt) {
				ES_NUMERO(evt);
			},
		},
	};
</script>
