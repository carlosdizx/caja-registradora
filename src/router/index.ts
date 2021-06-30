import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/registroLogin',
		name: 'RegistroLogin',
		component: () => import('../views/RegistroUsuario.vue'),
	},
	{
		path: '/registrovpp',
		name: 'RegistroVPP',
		component: () => import('../views/RegistroVPP.vue'),
	},
	{
		path: '/inicio',
		name: 'Inicio',
		component: () => import('../views/Inicio.vue'),
	},
	{
		path: '/listado',
		name: 'Listado',
		component: () => import('../views/Listado.vue'),
	},
	{
		path: '/graficos',
		name: 'Graficos',
		component: () => import('../views/Graficos.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
