<template>
	<Tabla titulo="Listado de clientes" :columnas="columnas" :lista="lista" />
</template>

<script>
	import Tabla from '../general/Tabla';
	import { mapActions } from 'vuex';
	export default {
		name: 'TablaClientes',
		components: {
			Tabla,
		},
		data: () => ({
			lista: [],
			columnas: [
				{ text: 'Documento', value: 'documento' },
				{ text: 'Nombres y apellidos', value: 'nombres' },
				{ text: 'Direccion', value: 'direccion' },
				{ text: 'Celular', value: 'celular' },
				{ text: 'Correo', value: 'correo' },
				{ text: 'Fecha de nacimiento', value: 'fecha' },
			],
		}),
		methods: {
			...mapActions(['listadoClientes']),
		},
		mounted() {
			this.listadoClientes(this.lista);
		},
	};
</script>

<style scoped></style>
