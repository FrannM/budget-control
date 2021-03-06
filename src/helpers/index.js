export const formatearCantidad = (cantidad) => {
	const cantAFormatear = cantidadAFormatear(cantidad);
	return cantAFormatear.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

export const generarId = () => {
	const random = Math.random().toString(36).substr(2);
	const fecha = new Date().getTime().toString(36);
	return random + fecha;
};

export const formatearFecha = (fecha) => {
	const fechaFormateada = new Date(fecha);
	const opciones = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};
	return fechaFormateada.toLocaleDateString("es-ES", opciones);
};

export const cantidadAFormatear = (cantidad) => {
	return Number(cantidad);
};
