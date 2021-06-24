import { HTTP } from './axios';
import router from '@/router';
import store from '../store';

export const REGISTRAR_USUARIO = async (usuario: { email: string; password: string }) => {
	try {
		const res = await (
			await fetch(`${store.state.urlSingUp}${store.state.key}`, {
				method: 'POST',
				body: JSON.stringify({
					email: usuario.email,
					password: usuario.password,
					returnSecureToken: true,
				}),
			})
		).json();
		if (res.error) {
			console.log(res.error);
			return store.dispatch('setError', res.error.message);
		}
		await store.dispatch('setError', null);
		await store.dispatch('setUsuario', res);
		localStorage.setItem('usuario', JSON.stringify(res));
		await router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const LOGIN_USUARIO = async (usuario: { email: string; password: string }) => {
	try {
		const res = await (
			await fetch(`${store.state.urlSingIn}${store.state.key}`, {
				method: 'POST',
				body: JSON.stringify({
					email: usuario.email,
					password: usuario.password,
					returnSecureToken: true,
				}),
			})
		).json();
		if (res.error) {
			console.log(res.error);
			return store.dispatch('setError', res.error.message);
		}
		await store.dispatch('setError', null);
		await store.dispatch('setUsuario', res);
		localStorage.setItem('usuario', JSON.stringify(res));
		await router.push('/inicio');
	} catch (error) {
		console.log(error);
	}
};

export const CARGAR_USUARIO = async () => {
	const usuarioLocal = JSON.parse(<string>localStorage.getItem('usuario'));
	if (usuarioLocal) {
		await store.dispatch('setUsuario', usuarioLocal);
	} else {
		return store.dispatch('setUsuario', null);
	}
	try {
		console.log(usuarioLocal.refreshToken);
		const res = await (
			await fetch(`${store.state.urlSingInToken}${store.state.key}`, {
				method: 'POST',
				body: JSON.stringify({
					grant_type: 'refresh_token',
					refresh_token: usuarioLocal.refreshToken,
				}),
			})
		).json();
		console.log('----->');
		console.log(res);
	} catch (error) {
		console.log(error);
	}
	/*
	try {
		const res = await fetch(
			`https://udemy-api-arena-default-rtdb.firebaseio.com/tareas/${store.state.usuario.localId}.json?auth=${store.state.usuario.idToken}`
		);
		const dataDB = await res.json();
		const arrayTareas = [];
		for (let id in dataDB) {
			arrayTareas.push(dataDB[id]);
		}
		commit('cargar', arrayTareas);
	} catch (error) {
		console.log(error);
	}
	*/
};
