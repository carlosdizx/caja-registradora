<template>
	<ToolBarIcons titulo="Registro" color="cyan" :tabs="tabs" />
</template>

<script>
	import ToolBarIcons from '../components/forms/ToolBarRegistro';
	import RegistroCliente from '../components/forms/FormCliente';
	export default {
		name: 'RegistroVPP',
		components: { ToolBarIcons, RegistroCliente },
		data: () => ({
			tabs: [''],
		}),
		mounted() {
			this.tabs = ['mdi-head-plus-outline', 'mdi-food', 'mdi-point-of-sale'];
		},
	};
</script>
