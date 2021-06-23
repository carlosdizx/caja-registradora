import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import { LOGIN_USUARIO, REGISTRAR_USUARIO } from '@/services/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		urlDB: 'https://caja-registradora-arena-center-default-rtdb.firebaseio.com/',
		key: 'AIzaSyCIhEDFb6OctO_CBNO0KfYRWQy8A0PeGLE',
		urlSingIn:
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
		urlSingUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
		usuario: null,
	},
	mutations: {
		setUser(state, payload) {
			state.usuario = payload;
		},
	},
	actions: {
		cerrarSesion({ commit }) {
			commit('setUser', null);
			router.push('/ingreso');
			localStorage.removeItem('usuario');
		},
		registrarUsuario({ commit }, usuario) {
			REGISTRAR_USUARIO(usuario)
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
		},
		loguearUsuario({ commit }, usuario) {
			LOGIN_USUARIO(usuario)
				.then((response) => console.log(''))
				.catch((error) => console.log(error));
		},
	},
	modules: {},
});
