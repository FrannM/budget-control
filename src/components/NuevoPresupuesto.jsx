import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
	presupuesto,
	setPresupuesto,
	setIsValidPresupuesto,
}) => {
	const [mensaje, setMensaje] = useState("");

	const handlePresupuesto = (e) => {
		e.preventDefault();

		// validaciones
		if (!presupuesto || presupuesto < 0) {
			setMensaje("El presupuesto debe ser mayor a 0");
			return;
		}
		setMensaje("");
		setIsValidPresupuesto(true);
	};

	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form onSubmit={handlePresupuesto} className="formulario">
				<div className="campo">
					<label htmlFor="">Set Budget</label>
					<input
						className="nuevo-presupuesto"
						type="number"
						placeholder="Add your budget"
						value={presupuesto}
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>

				<input type="submit" value="Add" />

				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			</form>
		</div>
	);
};

export default NuevoPresupuesto;
