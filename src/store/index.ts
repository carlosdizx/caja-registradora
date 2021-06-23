import Vue from 'vue';
import Vuex from 'vuex';
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		urlDB: 'https://caja-registradora-arena-center-default-rtdb.firebaseio.com/',
		key: 'AIzaSyDAVDt38rRKtPm-6q9S_H2v0Gq7u_V_wbY',
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
		async ingresoUsuario({ commit }, usuario) {
			try {
				const res = await fetch(
					'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAVDt38rRKtPm-6q9S_H2v0Gq7u_V_wbY',
					{
						method: 'POST',
						body: JSON.stringify({
							email: usuario.email,
							password: usuario.password,
							returnSecureToken: true,
						}),
					}
				);
				const userDB = await res.json();
				if (userDB.error) {
					console.log(userDB.error);
					return commit('setError', userDB.error.message);
				}
				commit('setError', null);
				commit('setUser', userDB);
				router.push('/');
				localStorage.setItem('usuario', JSON.stringify(userDB));
			} catch (error) {
				console.log(error);
			}
		},
		async registrarUsuario({ commit }, usuario) {
			try {
				const res = await fetch(
					'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAVDt38rRKtPm-6q9S_H2v0Gq7u_V_wbY',
					{
						method: 'POST',
						body: JSON.stringify({
							email: usuario.email,
							password: usuario.password,
							returnSecureToken: true,
						}),
					}
				);
				const userDB = await res.json();
				if (userDB.error) {
					console.log(userDB.error);
					return commit('setError', userDB.error.message);
				}
				commit('setError', null);
				commit('setUser', userDB);
				await router.push('/');
				localStorage.setItem('usuario', JSON.stringify(userDB));
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
