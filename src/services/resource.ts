import { HTTP } from './axios';
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
	//console.log(`${URL_BASE}${usuario.localId}/${producto.nombre}.json?auth=${usuario.idToken}.json?auth=${usuario.idToken}`);
	const res = await fetch(`${URL_BASE}/productos/${producto.nombre}.json`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(producto),
	});
	const resDB = await res.json();
	console.log(resDB);
};
/**
	HTTP({
		method: 'post',
		url: `${URL_BASE}productos/${producto.nombre}.json?auth=${idToken}`,
		data: {
			producto,
		},
	});
	 */
//HTTP.put(`productos/${producto.nombre}.json?auth=${idToken}`, producto);

/**
 HTTP({
		method: 'post',
		url: `https://caja-registradora-arena-center-default-rtdb.firebaseio.com/productos/${producto.nombre}.json${idToken}`,
		data: {
			firstName: 'Finn',
			lastName: 'Williams',
		},

	});*/
