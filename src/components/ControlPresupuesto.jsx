import { formatearCantidad, cantidadAFormatear } from "../helpers";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
	presupuesto,
	gastos,
	setGastos,
	setPresupuesto,
	setIsValidPresupuesto,
}) => {
	const [disponible, setdisponible] = useState(0);
	const [gastado, setgastado] = useState(0);
	const [porcentaje, setporcentaje] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce(
			(total, gasto) =>
				cantidadAFormatear(total) + cantidadAFormatear(gasto.cantidad),
			0
		);
		const totalDisponible = presupuesto - totalGastado;

		// Calcular el porcentaje gastado
		const nuevoPorcentaje = (
			((presupuesto - totalDisponible) / presupuesto) *
			100
		).toFixed(2);

		setTimeout(() => {
			setporcentaje(nuevoPorcentaje);
		}, 700);
		setdisponible(totalDisponible);
		setgastado(totalGastado);
	}, [gastos]);

	const handleResetApp = () => {
		const resultado = confirm("¿Estas seguro de reiniciar el presupuesto?");

		if (resultado) {
			setGastos([]);
			setPresupuesto(0);
			setIsValidPresupuesto(false);
		}
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<CircularProgressbar
					styles={buildStyles({
						pathColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",
						textColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",
						trailColor: "#f5f5f5",
					})}
					value={porcentaje}
					text={`${porcentaje}% Gastado`}
				/>
			</div>

			<div className="contenido-presupuesto">
				<button className="reset-app" type="button" onClick={handleResetApp}>
					Resear App
				</button>
				<p>
					<span>Presupuesto: </span> {formatearCantidad(presupuesto)}
				</p>
				<p className={`${disponible < 0 ? "negativo" : ""}`}>
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
