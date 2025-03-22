import { IconButton, Tooltip } from "@mui/material";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ToolTip from "../../components/Tooltip";
function ListStage() {
	return (
		<>
			<div className="flex gap-6 md:gap-12 lg:gap-18 xl:gap-24 items-center justify-center [&_*]:text-white">
				<ToolTip title="Focus session">
					<IconButton>
						<FilterTiltShiftIcon />
					</IconButton>
				</ToolTip>
				<ToolTip title="Short break">
					<IconButton>
						<LocalCafeIcon />
					</IconButton>
				</ToolTip>
				<ToolTip title="Long break">
					<IconButton>
						<EmojiEmotionsIcon />
					</IconButton>
				</ToolTip>
			</div>
		</>
	);
}
export default ListStage;
