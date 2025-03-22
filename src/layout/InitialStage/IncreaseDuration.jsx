import { useCallback, useState } from "react";
import PlainButton from "../../components/buttons/PlainButton";
import store from "../../store/store";
import CloseIcon from "@mui/icons-material/Close";
import ToolTip from "../../components/Tooltip";
import { IconButton } from "@mui/material";
const options = [1, 5, 10, 25];

function IncreaseDuration() {
	const [needReset, setNeedReset] = useState(false);
	const increaseDuration = useCallback((option) => {
		//  lowercase for handling real
		const stage = store.init.currentIn;
		console.log(stage, option);

		store.init.increase(stage, option);
		setNeedReset(true);
	}, []);
	return (
		<>
			<div className="flex gap-5 justify-center flex-wrap">
				{options.map((option) => (
					<PlainButton
						key={option + "-minute"}
						color="white"
						onClick={() => {
							increaseDuration(option);
						}}
					>
						{option} minutes
					</PlainButton>
				))}
			</div>
			<div className="flex justify-center">
				{/* {needReset && (
					<ToolTip title="Reset to default">
						<IconButton classes={{ root: "!text-white" }}>
							<CloseIcon />
						</IconButton>
					</ToolTip>
				)} */}
			</div>
		</>
	);
}
export default IncreaseDuration;
