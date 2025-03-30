import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import RecButton from "../../../components/buttons/RecButton";
import { useCallback, useRef } from "react";
import Dialog from "./Dialog";

function SiteLogo() {
	const dialogRef = useRef(null);
	const handleReqToCancel = useCallback(() => {
		if (dialogRef.current) {
			const ctrl = dialogRef.current;
			ctrl.reqToCancel();
		}
	}, []);
	return (
		<>
			<Dialog ref={dialogRef} />
			<RecButton
				color="white"
				cls="nav__sitename"
				onClick={handleReqToCancel}
			>
				<CatchingPokemonIcon fontSize="16" />
				<span className="font-bold">Pomodoro</span>
			</RecButton>
		</>
	);
}
export default SiteLogo;
