import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Filtros from "./components/Filtros";
import ListadoGastos from "./components/ListadoGastos";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
	const [gastos, setGastos] = useState(
		localStorage.getItem("gastos")
			? JSON.parse(localStorage.getItem("gastos"))
			: []
	);

	const [presupuesto, setPresupuesto] = useState(
		JSON.parse(localStorage.getItem("presupuesto")) ?? 0
	);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);

	const [gastoEditar, setGastoEditar] = useState({});

	const [filtro, setFiltro] = useState("");
	const [gastosFiltrados, setGastosFiltrados] = useState([]);

	useEffect(() => {
		if (Object.keys(gastoEditar).length !== 0) {
			setModal(true);

			setTimeout(() => {
				setAnimarModal(true);
			}, 300);
		}
	}, [gastoEditar]);

	useEffect(() => {
		localStorage.setItem("presupuesto", presupuesto ?? 0);
	}, [presupuesto]);

	useEffect(() => {
		localStorage.setItem("gastos", JSON.stringify(gastos));
	}, [gastos]);

	useEffect(() => {
		const presupuestoLS = JSON.parse(localStorage.getItem("presupuesto")) ?? 0;

		if (presupuestoLS > 0) {
			setIsValidPresupuesto(true);
		}
	}, []);

	useEffect(() => {
		if (filtro) {
			setGastosFiltrados(gastos.filter((gasto) => gasto.categoria === filtro));
		}
	}, [filtro]);

	const handleNuevoGasto = () => {
		setModal(true);

		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
		setGastoEditar({});
	};

	const guardarGasto = (gasto) => {
		if (gasto.id) {
			const gastosActualizado = gastos.map((gastoActual) =>
				gastoActual.id === gasto.id ? gasto : gastoActual
			);
			setGastos(gastosActualizado);
			setGastoEditar({});
		} else {
			gasto.id = generarId();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
		}

		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};

	const eliminarGasto = (id) => {
		const gastosActualizado = gastos.filter(
			(gastoActual) => gastoActual.id !== id
		);

		setGastos(gastosActualizado);
	};

	return (
		<div className={modal ? "fijar" : ""}>
			<Header
				gastos={gastos}
				setGastos={setGastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			{isValidPresupuesto && (
				<>
					<main>
						<Filtros filtro={filtro} setFiltro={setFiltro} />
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
							eliminarGasto={eliminarGasto}
							filtro={filtro}
							gastosFiltrados={gastosFiltrados}
						/>
					</main>
					<div className="nuevo-gasto">
						<img
							src={IconoNuevoGasto}
							alt="icono nuevo gasto"
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
