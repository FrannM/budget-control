import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
	gastos,
	presupuesto,
	setPresupuesto,
	isValidPresupuesto,
	setIsValidPresupuesto,
}) => {
	return (
		<header>
			<h1>Budget Planning</h1>

			{isValidPresupuesto ? (
				<ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
			) : (
				<NuevoPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidPresupuesto={setIsValidPresupuesto}
				/>
			)}
		</header>
	);
};

export default Header;
