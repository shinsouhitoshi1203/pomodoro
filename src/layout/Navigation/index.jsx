import { motion } from "motion/react";

import RecButton from "../../components/buttons/RecButton";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import Time from "./Time";
import ContrastIcon from "@mui/icons-material/Contrast";
import FocusStatus from "./FocusStatus";
function Navigation() {
	return (
		<>
			<motion.nav layout className="navigation z-100 bg-secondary">
				<div className="container flex items-stretch mx-auto ">
					<RecButton color="white" cls="nav__sitename">
						<CatchingPokemonIcon fontSize="16" />
						<span className="font-bold">Pomodoro</span>
					</RecButton>
					<FocusStatus />
					<div className="ml-auto rightside flex">
						<RecButton color="transparent" cls="">
							<ContrastIcon fontSize="16" />
						</RecButton>
						<Time />
					</div>
				</div>
			</motion.nav>
		</>
	);
}
export default Navigation;
