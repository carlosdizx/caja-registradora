<template>
	<ToolBarIcons titulo="Registro" color="indigo" :tabs="tabs" />
</template>

<script>
	import ToolBarIcons from '../components/general/ToolBarIcons';
	export default {
		name: 'RegistroVPP',
		components: { ToolBarIcons },
		data: () => ({
			tabs: [''],
		}),
		mounted() {
			this.tabs = ['mdi-point-of-sale','mdi-head-plus-outline','mdi-food'];
		},
	};
</script>
