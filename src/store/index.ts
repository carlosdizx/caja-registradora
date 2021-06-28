import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import { CARGAR_USUARIO, LOGIN_USUARIO, REGISTRAR_USUARIO } from '@/services/auth';
import {
	LISTAR_CLIENTES,
	LISTAR_PRODUCTOS,
	LISTAR_VENTAS,
	REGISTRAR_CLIENTE,
	REGISTRAR_PRODUCTO,
	REGISTRAR_VENTA,
} from '@/services/resource';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		usuario: null,
		error: { tipo: '', message: '' },
	},
	mutations: {
		async setError(state, payload) {
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
			} else if (payload === 'Auth token is expired') {
				state.usuario = null;
				localStorage.removeItem('usuario');
				await router.push('/');
				return (state.error = {
					tipo: 'token',
					message: 'Vuelva a iniciar sesion, token expirado!',
				});
			}
		},

		setUsuario(state, payload) {
			state.usuario = payload;
		},
		async comprobarUsuario(state) {
			if (state.error.tipo === '') {
				let usuario = state.usuario;
				if (usuario === null) {
					usuario = JSON.parse(<string>localStorage.getItem('usuario'));
					if (usuario === null) {
						await router.push('/');
						return alert('Vuelva a iniciar sesion!');
					}
				}
				state.usuario = usuario;
			} else {
				console.log(state.error);
			}
		},
	},
	actions: {
		async cerrarSesion({ commit }) {
			commit('setUsuario', null);
			setTimeout(function() {
				router.push('/');
				localStorage.removeItem('usuario');
			}, 700);
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
				commit('comprobarUsuario');
				let usuario = state.usuario;
				await REGISTRAR_PRODUCTO(producto, usuario);
			} catch (error) {
				console.log(error);
			}
		},
		async registrarCliente({ commit, state }, cliente) {
			try {
				commit('comprobarUsuario');
				let usuario = state.usuario;
				await REGISTRAR_CLIENTE(cliente, usuario);
			} catch (e) {
				console.log(e);
			}
		},
		async listadoProductos({ commit, state }, lista) {
			try {
				commit('comprobarUsuario');
				let usuario = this.state.usuario;
				await LISTAR_PRODUCTOS(lista, usuario);
			} catch (e) {
				console.log(e);
			}
		},
		async listadoClientes({ commit, state }, lista) {
			try {
				commit('comprobarUsuario');
				let usuario = state.usuario;
				await LISTAR_CLIENTES(lista, usuario);
			} catch (e) {
				console.log(e);
			}
		},
		async registrarVenta({ commit, state }, venta) {
			try {
				commit('comprobarUsuario');
				let usuario = state.usuario;
				await REGISTRAR_VENTA(venta, usuario);
			} catch (e) {
				console.log(e);
			}
		},
		async listadoVentas({ commit, state }, lista) {
			try {
				commit('comprobarUsuario');
				let usuario = state.usuario;
				await LISTAR_VENTAS(lista, usuario);
			} catch (e) {
				console.log(e);
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
