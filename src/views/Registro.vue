<template>
	<v-layout align-center>
		<v-card class="mx-auto" width="1000" max-width="1000">
			<v-card-title class="mx-5" color="indigo">
				Registro de usuario
				<v-spacer></v-spacer>
				<v-alert v-if="error.tipo !== ''" dense outlined type="error">
					{{ error.message }}
				</v-alert>
			</v-card-title>
			<v-card-text>
				<validation-observer ref="observer" v-slot="{ invalid }">
					<v-form @submit.prevent="submit">
						<validation-provider v-slot="{ errors }" name="email" rules="required|email">
							<v-text-field
								v-model="email"
								:error-messages="errors"
								label="Correo electronico"
								prepend-icon="mdi-account-circle"
								required
							>
							</v-text-field>
						</validation-provider>
						<validation-provider
							v-slot="{ errors }"
							name="Contraseña"
							rules="required|min:8|max:60"
						>
							<v-text-field
								v-model="password"
								type="password"
								label="Contraseña"
								:error-messages="errors"
								name="input-10-1"
								counter
								prepend-icon="mdi-lock"
								:type="showPassword ? 'text' : 'password'"
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								@click:append="showPassword = !showPassword"
							>
							</v-text-field>
						</validation-provider>
						<validation-provider
							v-slot="{ errors }"
							name="Contraseña"
							rules="required|min:8|max:60"
						>
							<v-text-field
								v-model="password"
								type="text"
								label="Contraseña"
								:error-messages="errors"
								name="input-10-1"
								counter
								disabled
								prepend-icon="mdi-lock"
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								@click:append="showPassword = !showPassword"
							>
							</v-text-field>
						</validation-provider>
					</v-form>
					<v-btn :disabled="invalid" @click="procesarFormulario" color="success"
						>Registrarme</v-btn
					>
				</validation-observer>
			</v-card-text>
		</v-card>
	</v-layout>
</template>

<script>
	import { required, digits, email, max, min } from 'vee-validate/dist/rules';
	import {
		extend,
		ValidationObserver,
		ValidationProvider,
		setInteractionMode,
	} from 'vee-validate';
	import { mapState, mapActions } from 'vuex';

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
		name: 'Registro',
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		data: () => ({
			email: '',
			password: '',
			showPassword: false,
		}),
		methods: {
			submit() {
				console.log('ok👍');
			},
			...mapActions(['registrarUsuario']),
			async procesarFormulario() {
				await this.registrarUsuario({
					email: this.email,
					password: this.password,
				});
			},
		},
		computed: {
			...mapState(['error']),
		},
	};
</script>
