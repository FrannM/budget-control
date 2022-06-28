import { formatearFecha, formatearCantidad } from "../helpers/";
const Gasto = ({ gasto }) => {
	const { id, nombre, cantidad, categoria, fecha } = gasto;
	return (
		<div className="gasto sombra">
			<div className="contenido-gasto">
				<div className="descripcion-gasto">
					<p className="categoria">{categoria}</p>
					<p className="nombre-gasto">{nombre}</p>
					<p className="fecha-gasto">
						Added on: {""}
						<span>{formatearFecha(fecha)}</span>
					</p>
				</div>
			</div>
			<p className="cantidad-gasto">{formatearCantidad(Number(cantidad))}</p>
		</div>
	);
};

export default Gasto;
