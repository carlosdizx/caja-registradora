<template>
	<v-card>
		<v-card-title>
			Registro producto
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-text-field prepend-icon="mdi-food-variant" label="Nombre" />
				<v-text-field prepend-icon="mdi-cash" type="number" label="Precio compra" />
				<v-text-field prepend-icon="mdi-cash-plus" type="number" label="Precio venta" />
				<v-select
					prepend-icon="mdi-format-list-bulleted-type"
					:items="tipos"
					label="Categoria"
				/>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn color="success">Agregar</v-btn>
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
	import { mapActions, mapState } from 'vuex';
	import { TIPOS } from '../../const/tipoProductos';
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
		}),
		methods: {
			submit() {},
		},
	};
</script>

<style scoped></style>
