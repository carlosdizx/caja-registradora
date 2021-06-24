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
		error: { tipo: '', message: '' },
	},
	mutations: {
		setError(state, payload) {
			if (payload === null) {
				return (state.error = { tipo: '', message: '' });
			}
			if (payload === 'EMAIL_NOT_FOUND') {
				return (state.error = {
					tipo: 'email',
					message: 'Email no registrado',
				});
			}
			if (payload === 'INVALID_PASSWORD') {
				return (state.error = {
					tipo: 'password',
					message: 'Contraseña incorrecta',
				});
			}
			if (payload === 'EMAIL_EXISTS') {
				return (state.error = {
					tipo: 'email',
					message: 'El correo ya esta registrado',
				});
			}
			if (payload === 'INVALID_EMAIL') {
				return (state.error = {
					tipo: 'email',
					message: 'El correo no esta bien escrito',
				});
			}
		},
		setUsuario(state, payload) {
			state.usuario = payload;
		},
	},
	actions: {
		async cerrarSesion({ commit }) {
			commit('setUsuario', null);
			await router.push('/');
			localStorage.removeItem('usuario');
		},
		registrarUsuario({ commit }, usuario) {
			REGISTRAR_USUARIO(usuario)
				.then((response) => {})
				.catch((error) => {});
		},
		loguearUsuario({ commit }, usuario) {
			LOGIN_USUARIO(usuario)
				.then((response) => {})
				.catch((error) => {});
		},
		setUsuario({ commit }, usuario) {
			commit('setUsuario', usuario);
		},
		setError({ commit }, error) {
			commit('setError', error);
		},
	},
	getters: {
		usuarioAutenticado(state) {
			return !!state.usuario;
		},
	},
	modules: {},
});
