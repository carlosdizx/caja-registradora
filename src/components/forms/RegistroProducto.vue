<template>
	<v-card>
		<v-card-title>
			Registro producto {{ productoTemplate.precioVenta | formatNumber }}
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-text-field
					v-model="productoTemplate.nombre"
					prepend-icon="mdi-food-variant"
					label="Nombre"
				/>
				<v-row>
					<v-col cols="8">
						<v-text-field
							v-model.number="productoTemplate.precioCompra"
							prepend-icon="mdi-cash"
							@keypress="esNumero($event)"
							type="number"
							label="Precio compra"
						/>
					</v-col>
					<v-col cols="4">
						<br />
						<p>
							{{
								(productoTemplate.precioCompra === null
									? 0
									: productoTemplate.precioCompra) | toUSD
							}}
						</p>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="8">
						<v-text-field
							v-model.number="productoTemplate.precioVenta"
							prepend-icon="mdi-cash-plus"
							@keypress="esNumero($event)"
							type="number"
							label="Precio venta"
						/>
					</v-col>
					<v-col cols="4">
						<br />
						<v-btn
							text
							:color="
								productoTemplate.precioCompra === productoTemplate.precioVenta
									? 'warning'
									: productoTemplate.precioCompra > productoTemplate.precioVenta
									? 'red'
									: 'green'
							"
						>
							{{
								(productoTemplate.precioVenta === null
									? 0
									: productoTemplate.precioVenta) | toUSD
							}}
						</v-btn>
					</v-col>
				</v-row>

				<v-select
					v-model="productoTemplate.tipo"
					prepend-icon="mdi-format-list-bulleted-type"
					:items="tipos"
					label="Categoria"
				/>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="success">Agregar</v-btn>
		</v-card-actions>
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
	import { mapActions } from 'vuex';
	import { TIPOS } from '../../const/tipoProductos';
	import { ES_NUMERO } from '../../const/funciones';
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
		name: 'RegistroProducto',
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		data: () => ({
			tipos: TIPOS,
			productoTemplate: {
				nombre: '',
				precioCompra: null,
				precioVenta: null,
				tipo: '',
			},
		}),
		methods: {
			...mapActions(['registrarProducto']),
			async submit() {
				await this.registrarProducto(this.productoTemplate);
				this.productoTemplate = {
					nombre: '',
					precioCompra: null,
					precioVenta: null,
					tipo: '',
				};
			},
			esNumero(evt) {
				ES_NUMERO(evt);
			},
		},
	};
</script>

<style scoped></style>
