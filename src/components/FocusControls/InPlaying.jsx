import { useCallback } from "react";
import ContainedButton from "../buttons/ContainedButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import store from "../../store/store";

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
			<ContainedButton color="dark" tooltip="More" cls="p-2">
				<MoreVertIcon />
			</ContainedButton>
		</div>
	);
}
export default InPlaying;
