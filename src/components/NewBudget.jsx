import React from "react";

const NewBudget = ({ presupuesto, setPresupuesto }) => {
	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form className="formulario">
				<div className="campo">
					<label htmlFor="">Set Budget</label>
					<input
						className="nuevo-presupuesto"
						type="text"
						placeholder="Add your budget"
						value={presupuesto}
						onChange={(e) => setPresupuesto(e.target.value)}
					/>
				</div>

				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default NewBudget;
