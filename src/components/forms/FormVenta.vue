<template>
	<v-card>
		<v-card-title>
			Registro venta
		</v-card-title>
		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-card-text>
				<v-form @submit.prevent="submit">
					<validation-provider
						v-slot="{ errors }"
						name="Cliente"
						rules="required|min:5|max:20"
					>
						<v-text-field
							v-model="clienteSeleccionado"
							label="Documento"
							append-icon="mdi-account-plus"
							required
							:error-messages="errors"
							counter
						/>
					</validation-provider>

					<validation-provider v-slot="{ errors }" name="Cliente" rules="required">
						<v-select
							v-model="clienteSeleccionado"
							label="Seleccione un cliente"
							:items="clientes"
							item-text="documento"
						/>
					</validation-provider>
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
				<v-btn
					:disabled="comprados.length === 0 || invalid"
					@click="submit"
					color="success"
					>Registrar venta</v-btn
				>
				<v-btn text disabled>
					Total
					{{ total }}
					<v-icon>mdi-cash</v-icon>
				</v-btn>
			</v-card-actions>
		</validation-observer>
		<v-data-table
			:headers="columnas"
			:items="comprados"
			:items-per-page="5"
			class="elevation-1"
		/>
	</v-card>
</template>

<script>
	import { required, digits, email, max, min } from 'vee-validate/dist/rules';
	import {
		extend,
		ValidationObserver,
		ValidationProvider,
		setInteractionMode,
	} from 'vee-validate';
	import { ES_NUMERO } from '../../const/funciones';
	import { mapActions } from 'vuex';
	setInteractionMode('eager');

	extend('digits', {
		...digits,
		message: '{_field_} Se necesita {length} digitos. ({_value_})',
	});

	extend('required', {
		...required,
		message: '{_field_} no puede estar vacio',
	});

	extend('max', {
		...max,
		message: '{_field_} {length} maximo de caracteres',
	});

	extend('min', {
		...min,
		message: '{_field_} => Ingrese mas caracteres, minimo {length} ',
	});

	extend('email', {
		...email,
		message: 'Correo con formato incorrecto',
	});
	export default {
		name: 'FormVenta',
		components: { ValidationProvider, ValidationObserver },
		data: () => ({
			clientes: [],
			productos: [],
			comprados: [],
			cantidad: 1,
			clienteSeleccionado: null,
			productoSeleccionado: null,
			total: 0,
			columnas: [
				{ text: 'Producto', value: 'nombre' },
				{ text: 'Cantidad', value: 'cantidad' },
				{ text: 'Subtotal', value: 'subTotal' },
			],
		}),
		async mounted() {
			await this.listadoClientes(this.clientes);
			await this.listadoProductos(this.productos);
		},
		methods: {
			...mapActions(['listadoClientes', 'listadoProductos', 'registrarVenta']),
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
			async submit() {
				if (this.clienteSeleccionado === null) {
					return alert('Seleccione un cliente');
				}

				const venta = {
					cliente: this.clienteSeleccionado,
					compras: this.comprados,
					fecha: new Date().toDateString(),
				};
				await this.registrarVenta(venta);
				this.clienteSeleccionado = null;
				this.comprados = [];
				this.cantidad = 1;
				this.total = 0;
				this.productoSeleccionado = null;
			},
			esNumero(evt) {
				ES_NUMERO(evt);
			},
		},
	};
</script>
