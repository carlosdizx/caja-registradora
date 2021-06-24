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
			this.tabs = ['mdi-head-plus-outline','mdi-food','mdi-point-of-sale'];
		},
	};
</script>
