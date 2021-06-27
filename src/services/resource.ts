const URL_BASE = 'https://caja-registradora-app-default-rtdb.firebaseio.com/';
import store from '../store';
const shortid = require('shortid');
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
};

export const LISTAR_PRODUCTOS = async (lista: [], usuario: any) => {
	const res = await (
		await fetch(`${URL_BASE}productos/${usuario.localId}/.json?auth=${usuario.idToken}`)
	).json();
	for (let id in res) {
		// @ts-ignore
		lista.push(res[id]);
	}
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
};

export const LISTAR_CLIENTES = async (lista: [], usuario: any) => {
	const res = await (
		await fetch(`${URL_BASE}clientes/${usuario.localId}/.json?auth=${usuario.idToken}`)
	).json();
	for (let id in res) {
		// @ts-ignore
		lista.push(res[id]);
	}
};

//---------------- Venta ----------------
export const REGISTRAR_VENTA = async (
	venta: {
		cliente: {
			documento: number;
			nombres: string;
			direccion: string;
			celular: number;
			correo: string;
			fecha: number;
		};
		facturas: Array<any>;
	},
	usuario: any
) => {
	const res = await fetch(
		`${URL_BASE}ventas/${usuario.localId}/${shortid.generate()}.json?auth=${
			usuario.idToken
		}`,
		{
			method: 'PUT',

			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(venta),
		}
	);
	const resDB = await res.json();
	if (resDB.error) {
		console.log(resDB.error);
		return await store.dispatch('setError', resDB.error.message);
	}
};

export const LISTAR_VENTAS = async (lista: Array<any>, usuario: any) => {
	const res = await (
		await fetch(`${URL_BASE}ventas/${usuario.localId}/.json?auth=${usuario.idToken}`)
	).json();
	const listaTemp = Array<any>();
	for (let id in res) {
		listaTemp.push(res[id]);
	}
	listaTemp.forEach((item) => {
		let productos = '';
		let subtotales = '';
		let total = 0;
		item.compras.forEach((value: any, index: number) => {
			productos +=
				'(' +
				value.cantidad +
				')' +
				value.nombre +
				(index + 1 === item.compras.length ? '' : ',');
			subtotales += value.subTotal + (index + 1 === item.compras.length ? '' : ',');
			total += value.subTotal;
		});
		lista.push({
			cliente: item.cliente,
			productos: productos,
			subtotal: subtotales,
			total: total,
		});
	});
};
