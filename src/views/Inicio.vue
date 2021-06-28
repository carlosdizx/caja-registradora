<template>
  <div>
    <ToolBar titulo="Inicio" color="indigo" :tabs="tabs" />
    <ResumenApp />
  </div>
</template>

<script>
	import ToolBar from '../components/Inicio/ToolBarInicio';
	import ResumenApp from "../components/Inicio/ResumenApp";
	import { ITEMS } from '../assets/itemsInicio';
	export default {
		name: 'Inicio',
		components: {
			ToolBar,ResumenApp
		},
		data: () => ({ tabs: [{ name: '', link: '' }] }),
		mounted() {
			this.tabs = ITEMS;
		},
	};
</script>
