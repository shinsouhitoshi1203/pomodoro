import { useCallback } from "react";
import ContainedButton from "../buttons/ContainedButton";
import store from "../../store/store";
import Options from "./Options";

function InPlaying() {
	const handlePause = useCallback(() => {
		store.session.pause();
	}, []);
	return (
		<div className="width-full flex gap-3 items-center">
			<ContainedButton
				color="green"
				tooltip="Pause the session"
				cls="grow-1"
				onClick={handlePause}
			>
				Pause
			</ContainedButton>
			<Options />
		</div>
	);
}
export default InPlaying;
