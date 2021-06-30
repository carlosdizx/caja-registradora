<template>
  <div>
    <ToolBar titulo="Inicio" color="indigo" :tabs="tabs" />
    <ResumenApp />
    <Grafico />
  </div>
</template>

<script>
	import ToolBar from '../components/Inicio/ToolBarInicio';
	import ResumenApp from "../components/Inicio/ResumenApp";
  import Grafico from "../components/general/Grafico";
	import { ITEMS } from '../assets/itemsInicio';
	export default {
		name: 'Inicio',
		components: {
			ToolBar,ResumenApp,Grafico
		},
		data: () => ({ tabs: [{ name: '', link: '' }] }),
		mounted() {
			this.tabs = ITEMS;
		},
	};
</script>
