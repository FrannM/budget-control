import { formatearCantidad, cantidadAFormatear } from "../helpers";
import { useEffect, useState } from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
	const [disponible, setdisponible] = useState(0);
	const [gastado, setgastado] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce(
			(total, gasto) =>
				cantidadAFormatear(total) + cantidadAFormatear(gasto.cantidad),
			0
		);
		const totalDisponible = presupuesto - totalGastado;

		setdisponible(totalDisponible);
		setgastado(totalGastado);
	}, [gastos]);

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<p>Graficos Aqui!!</p>
			</div>

			<div className="contenido-presupuesto">
				<p>
					<span>Presupuesto: </span> {formatearCantidad(presupuesto)}
				</p>
				<p>
					<span>Disponible: </span> {formatearCantidad(disponible)}
				</p>
				<p>
					<span>Gastado: </span> {formatearCantidad(gastado)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
