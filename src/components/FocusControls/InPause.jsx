import ContainedButton from "../buttons/ContainedButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplayIcon from "@mui/icons-material/Replay";
import { useCallback } from "react";
import store from "../../store/store";
function InPause() {
	const handlePlay = useCallback(() => {
		store.session.resume();
	}, []);
	const handleReset = useCallback(() => {
		store.session.reset();
	}, []);
	return (
		<div className="width-full flex gap-3 items-center">
			<ContainedButton
				color="green"
				tooltip="Continue the session"
				cls="grow-1"
				onClick={handlePlay}
			>
				Continue
			</ContainedButton>
			<ContainedButton
				color="red"
				tooltip="Stop the whole session"
				cls="p-2"
				onClick={handleReset}
			>
				<ReplayIcon />
			</ContainedButton>
			<ContainedButton color="dark" tooltip="More" cls="p-2">
				<MoreVertIcon />
			</ContainedButton>
		</div>
	);
}
export default InPause;
