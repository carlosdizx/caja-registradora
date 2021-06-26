<template>
	<v-card>
		<v-card-title>
			Registro cliente
		</v-card-title>
		<v-card-text>
			{{ clienteTemplate }}
			<v-form @submit.prevent="submit">
				<v-text-field
					v-model.number="clienteTemplate.documento"
					type="number"
					@keypress="esNumero($event)"
					label="Documento de identidad"
					prepend-icon="mdi-card-account-details"
				/>
				<v-text-field
					v-model="clienteTemplate.nombres"
					label="Nombres y apellidos"
					prepend-icon="mdi-account"
				/>
				<v-text-field
					v-model="clienteTemplate.direccion"
					label="Dirrecion"
					prepend-icon="mdi-home"
				/>
				<v-text-field
					v-model.number="clienteTemplate.celular"
					type="number"
					@keypress="esNumero($event)"
					label="Celular"
					prepend-icon="mdi-phone"
				/>
				<v-text-field
					v-model="clienteTemplate.correo"
					type="email"
					label="Correo"
					prepend-icon="mdi-email"
				/>
				<v-text-field
					v-model="clienteTemplate.fecha"
					type="date"
					label="Fecha de nacimiento"
					prepend-icon="mdi-calendar-range"
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
	import { mapActions, mapState } from 'vuex';
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
		name: 'RegistroCliente',
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		data: () => ({
			clienteTemplate: {
				documento: null,
				nombres: '',
				direccion: '',
				celular: null,
				correo: '',
				fecha: null,
			},
		}),
		methods: {
			async submit() {
				await this.registrarCliente(this.clienteTemplate);
				this.clienteTemplate = {
					documento: null,
					nombres: '',
					direccion: '',
					celular: null,
					correo: '',
					fecha: null,
				};
			},
			...mapActions(['registrarCliente']),
			esNumero(evt) {
				ES_NUMERO(evt);
			},
		},
	};
</script>

<style scoped></style>
