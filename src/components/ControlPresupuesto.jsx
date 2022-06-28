import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ presupuesto }) => {
	return (
		<div className="contenedor-presupuesto contenedor sombra dos-columnas">
			<div>
				<p>Graphs</p>
			</div>

			<div className="contenido-presupuesto">
				<p>
					<span>Budget:</span> {formatearCantidad(presupuesto)}
				</p>
				<p>
					<span>Available:</span> {formatearCantidad(0)}
				</p>
				<p>
					<span>Spent:</span> {formatearCantidad(0)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
