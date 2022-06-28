import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
	const [mensaje, setMensaje] = useState("");
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState(0);
	const [categoria, setCategoria] = useState("");

	const ocultarModal = () => {
		setAnimarModal(false);

		setTimeout(() => {
			setModal(false);
		}, 300);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, cantidad, categoria].includes("")) {
			setMensaje("All fields are required");

			setTimeout(() => {
				setMensaje("");
			}, 3000);
			return;
		}

		guardarGasto({ nombre, cantidad, categoria });
	};

	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
			</div>

			<form
				onSubmit={handleSubmit}
				className={`formulario ${animarModal ? "animar" : "cerrar"}`}
			>
				<legend>New Expense</legend>

				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

				<div className="campo">
					<label htmlFor="nombre">Name Expense</label>
					<input
						type="text"
						id="nombre"
						placeholder="Add name of Expense"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
					<label htmlFor="cantidad">Quantity</label>
					<input
						id="cantidad"
						type="number"
						placeholder="Add quantity of Expense: eg. 100"
						value={cantidad}
						onChange={(e) => setCantidad(e.target.value)}
					/>
				</div>
				<div className="campo">
					<label htmlFor="categoria">Category</label>
					<select
						id="categoria"
						value={categoria}
						onChange={(e) => setCategoria(e.target.value)}
					>
						<option value="">Select a category</option>
						<option value="ahorro">Saving</option>
						<option value="comida">Food</option>
						<option value="gastos">Various Expenses</option>
						<option value="ocio">Leisure</option>
						<option value="salud">Health</option>
						<option value="suscripciones">Subscriptions</option>
					</select>
				</div>
				<input type="submit" value="Add Expense" />
			</form>
		</div>
	);
};

export default Modal;
