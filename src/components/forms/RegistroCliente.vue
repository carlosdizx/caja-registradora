<template>
	<v-card>
		<v-card-title>
			<h1>Registro cliente</h1>
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-text-field type="number" label="documento de identidad" />
			</v-form>
		</v-card-text>
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
		name: 'RegistroCliente',
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		methods: {
			submit() {},
		},
	};
</script>

<style scoped></style>
