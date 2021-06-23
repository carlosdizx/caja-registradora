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
		console.log(res);
		if (res.error) {
			console.log(res.error);
			//return commit('setError', res.error.message);
		}
		//commit('setError', null);
		//commit('setUser', userDB);
		await router.push('/');
		//localStorage.setItem('usuario', JSON.stringify(userDB));
	} catch (error) {
		console.log(error);
	}
};

export const LOGIN_USUARIO = async (usuario: { email: string; password: string }) => {
	try {
		console.log(`${store.state.urlSingIn}${store.state.key}`)
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
		console.log(res);
		if (res.error) {
			console.log(res.error);
			//return commit('setError', userDB.error.message);
		}
		//commit('setError', null);
		//commit('setUser', userDB);
		//await router.push('/');
		localStorage.setItem('usuario', JSON.stringify(res));
	} catch (error) {
		console.log(error);
	}
};
