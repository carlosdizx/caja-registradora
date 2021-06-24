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
];

const router = new VueRouter({
	routes,
});

export default router;
