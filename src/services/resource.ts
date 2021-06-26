const URL_BASE = 'https://caja-registradora-app-default-rtdb.firebaseio.com/';
import store from '../store';

//---------------- Producto ----------------
export const REGISTRAR_PRODUCTO = async (
	producto: {
		nombre: string;
		precioCompra: number;
		precioVenta: number;
		tipo: string;
	},
	usuario: any
) => {
	const res = await fetch(
		`${URL_BASE}productos/${usuario.localId}/${producto.nombre}.json?auth=${usuario.idToken}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(producto),
		}
	);
	const resDB = await res.json();
	if (resDB.error) {
		console.log(resDB.error);
		return await store.dispatch('setError', resDB.error.message);
	}
	console.log(resDB);
};

//---------------- Cliente ----------------

export const REGISTRAR_CLIENTE = async (
	cliente: {
		documento: number;
		nombres: string;
		direccion: string;
		celular: number;
		correo: string;
		fecha: number;
	},
	usuario: any
) => {
	const res = await fetch(
		`${URL_BASE}clientes/${usuario.localId}/${cliente.documento}.json?auth=${usuario.idToken}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cliente),
		}
	);
	const resDB = await res.json();
	if (resDB.error) {
		console.log(resDB.error);
		return await store.dispatch('setError', resDB.error.message);
	}
	console.log(resDB);
};
