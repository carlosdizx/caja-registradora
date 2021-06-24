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
		await router.push('/inicio')
	} catch (error) {
		console.log(error);
	}
};
