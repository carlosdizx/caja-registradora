<template>
	<v-card>
		<v-card-title>
			Registro producto
		</v-card-title>
    <validation-observer ref="observer" v-slot="{ invalid }">
		<v-card-text>
			<v-form @submit.prevent="submit">
        <validation-provider
            v-slot="{ errors }"
            name="Nombre del producto"
            rules="required|min:2|max:80"
            counter
        >
				<v-text-field
					v-model="productoTemplate.nombre"
					prepend-icon="mdi-food-variant"
					label="Nombre"
          required
          :error-messages="errors"
				/>
        </validation-provider>
				<v-row>
					<v-col cols="8">
            <validation-provider
                v-slot="{ errors }"
                name="Precio de compra"
                rules="required|min:1|max:10"
            >
						<v-text-field
							v-model.number="productoTemplate.precioCompra"
							prepend-icon="mdi-cash"
							@keypress="esNumero($event)"
							type="number"
							label="Precio compra"
              required
              :error-messages="errors"
              counter
						/>
            </validation-provider>
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
            <validation-provider
                v-slot="{ errors }"
                name="Precio de venta"
                rules="required|min:1|max:11"
            >
						<v-text-field
							v-model.number="productoTemplate.precioVenta"
							prepend-icon="mdi-cash-plus"
							@keypress="esNumero($event)"
							type="number"
							label="Precio venta"
              required
              :error-messages="errors"
              counter
						/>
            </validation-provider>
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

        <validation-provider
            v-slot="{ errors }"
            name="Precio de venta"
            rules="required"
        >
				<v-select
					v-model="productoTemplate.tipo"
					prepend-icon="mdi-format-list-bulleted-type"
					:items="tipos"
					label="Categoria"
          required
          :error-messages="errors"
				/>
        </validation-provider>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn :disabled="invalid" @click="submit" color="success">Agregar</v-btn>
		</v-card-actions>
    </validation-observer>
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
		name: 'FormProducto',
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
