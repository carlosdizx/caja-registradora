const URL_BASE = 'https://caja-registradora-app-default-rtdb.firebaseio.com/';
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
		`${URL_BASE}/productos/${usuario.localId}/${producto.nombre}.json?auth=${usuario.idToken}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(producto),
		}
	);
	const resDB = await res.json();
	console.log(resDB);
};
