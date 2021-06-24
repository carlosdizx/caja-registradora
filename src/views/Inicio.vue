<template>
  <div>
    <ToolBar titulo="Inicio" color="indigo" :tabs="tabs" />
    <h1>Hola amigos como estan!</h1>
  </div>
</template>

<script>
	import ToolBar from '../components/general/ToolBar';
	import { ITEMS } from '../assets/itemsInicio';
	export default {
		name: 'Inicio',
		components: {
			ToolBar,
		},
		data: () => ({ tabs: [{ name: '', link: '' }] }),
		mounted() {
			this.tabs = ITEMS;
		},
	};
</script>
