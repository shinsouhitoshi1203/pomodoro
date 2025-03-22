import { IconButton, Tooltip } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ToolTip from "../../components/Tooltip";
import { useCallback, useState } from "react";
import store from "../../store/store";

const stageList = [
	{
		stageName: "Focus session",
		stageID: "focus",
		stageIcon: <FilterTiltShiftIcon />
	},
	{
		stageName: "Short break",
		stageID: "short",
		stageIcon: <LocalCafeIcon />
	},
	{
		stageName: "Long break",
		stageID: "long",
		stageIcon: <EmojiEmotionsIcon />
	}
];
const stages = stageList.map(({ stageID }) => stageID);

function ListStage() {
	const [stage, setStage] = useState(stages[0]);
	const switchStage = useCallback((st) => {
		if (stages.includes(st)) {
			setStage(st);
			store.init.switch = st;
		}
	}, []);
	const status = useCallback(function (isSelected = false) {
		return {
			root: isSelected && "!bg-[var(--color-primary)]"
		};
	}, []);
	return (
		<>
			<div className="flex gap-[48px] md:gap-[64px] lg:gap-[96px] xl:gap-24 items-center justify-center [&_*]:text-white">
				{stageList.map(({ stageName, stageID, stageIcon }) => (
					<ToolTip title={stageName} key={stageID}>
						<IconButton
							classes={status(stage == stageID)}
							onClick={() => switchStage(stageID)}
						>
							{stageIcon}
						</IconButton>
					</ToolTip>
				))}
			</div>
		</>
	);
}
export default ListStage;
