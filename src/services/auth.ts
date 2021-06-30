import router from '@/router';
import store from '../store';
const URL_SING_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const URL_SING_IN =
	'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const URL_SING_IN_TOKEN = 'https://securetoken.googleapis.com/v1/token?key=';
const KEY = 'AIzaSyB1fAUlYcrrjHaVuMp0IG5D2ROCICzROM8';

export const REGISTRAR_USUARIO = async (usuario: { email: string; password: string }) => {
	try {
		const res = await (
			await fetch(`${URL_SING_UP}${KEY}`, {
				method: 'POST',
				body: JSON.stringify({
					email: usuario.email,
					password: usuario.password,
					returnSecureToken: true,
				}),
			})
		).json();
		if (res.error) {
			if (res.error === 'Auth token is expired') {
				await localStorage.removeItem('usuario');
				await store.dispatch('setUsuario', null);
				return alert('Vuelva a iniciar sesion!');
			}
			console.log(res.error);
			return await store.dispatch('setError', res.error.message);
		}
		await store.dispatch('setError', null);
		await store.dispatch('setUsuario', res);
		localStorage.setItem('usuario', JSON.stringify(res));
		await router.push('/inicio');
	} catch (error) {
		console.log(error);
	}
};

export const LOGIN_USUARIO = async (usuario: { email: string; password: string }) => {
	try {
		const res = await (
			await fetch(`${URL_SING_IN}${KEY}`, {
				method: 'POST',
				body: JSON.stringify({
					email: usuario.email,
					password: usuario.password,
					returnSecureToken: true,
				}),
			})
		).json();
		if (res.error) {
			if (res.error === 'Auth token is expired') {
				await localStorage.removeItem('usuario');
				await store.dispatch('setUsuario', null);
				return alert('Vuelva a iniciar sesion!');
			}
			console.log(res.error);
			return await store.dispatch('setError', res.error.message);
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
		const res = await (
			await fetch(`${URL_SING_IN_TOKEN}${KEY}`, {
				method: 'POST',
				body: JSON.stringify({
					grant_type: 'refresh_token',
					refresh_token: usuarioLocal.refreshToken,
				}),
			})
		).json();
		if (res.error) {
			if (res.error === 'Auth token is expired') {
				await localStorage.removeItem('usuario');
				await store.dispatch('setUsuario', null);
				return alert('Vuelva a iniciar sesion!');
			}
			console.log(res.error);
			return await store.dispatch('setError', res.error.message);
		}
		await store.dispatch('setUsuario', res);
		await router.push('/inicio');
	} catch (error) {
		console.log(error);
	}
};
