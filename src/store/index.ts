import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import { CARGAR_USUARIO, LOGIN_USUARIO, REGISTRAR_USUARIO } from '@/services/auth';
import { REGISTRAR_PRODUCTO } from '@/services/resource';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		urlDB: 'https://caja-registradora-arena-center-default-rtdb.firebaseio.com/',
		key: 'AIzaSyCIhEDFb6OctO_CBNO0KfYRWQy8A0PeGLE',
		urlSingIn:
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
		urlSingInToken: 'https://securetoken.googleapis.com/v1/token?key=',
		urlSingUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
		usuario: null,
		error: { tipo: '', message: '' },
	},
	mutations: {
		setError(state, payload) {
			if (payload === null) {
				return (state.error = { tipo: '', message: '' });
			} else if (payload === 'EMAIL_NOT_FOUND') {
				return (state.error = {
					tipo: 'email',
					message: 'Email no registrado',
				});
			} else if (payload === 'INVALID_PASSWORD') {
				return (state.error = {
					tipo: 'password',
					message: 'Contraseña incorrecta',
				});
			} else if (payload === 'EMAIL_EXISTS') {
				return (state.error = {
					tipo: 'email',
					message: 'El correo ya esta registrado',
				});
			} else if (payload === 'INVALID_EMAIL') {
				return (state.error = {
					tipo: 'email',
					message: 'El correo no esta bien escrito',
				});
			} else if (payload === 'USER_DISABLED') {
				return (state.error = {
					tipo: 'email',
					message: 'El usuario esta baneado',
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
			setTimeout(function() {
				router.push('/');
				localStorage.removeItem('usuario');
			}, 1000);
		},
		async registrarUsuario({ commit }, usuario) {
			await REGISTRAR_USUARIO(usuario);
		},
		async loguearUsuario({ commit }, usuario) {
			await LOGIN_USUARIO(usuario);
		},
		async loguearUsuarioConToken({ commit }) {
			await CARGAR_USUARIO();
		},
		setUsuario({ commit }, usuario) {
			commit('setUsuario', usuario);
		},
		setError({ commit }, error) {
			commit('setError', error);
		},
		async registrarProducto({ commit, state }, producto) {
			try {
				const usuario = this.state.usuario;
				//const usuario = JSON.parse(<string>localStorage.getItem("usuario"))
				await REGISTRAR_PRODUCTO(producto, usuario);
			} catch (error) {
				console.log(error);
			}
		},
	},
	getters: {
		usuarioAutenticado(state) {
			return !!state.usuario;
		},
		getUsuario(state) {
			return state.usuario;
		},
	},
	modules: {},
});
