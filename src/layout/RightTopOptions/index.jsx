import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PlainButton from "../../components/buttons/PlainButton";
import { motion } from "motion/react";
function RightTopOptions() {
	return (
		<>
			<div className="absolute top-2 right-2 flex gap-2 items-center">
				<PlainButton color="white" title="Settings">
					<SettingsIcon />
				</PlainButton>
				<PlainButton color="white" title="Hide the topbar">
					<motion.div>
						<ExpandLessIcon />
					</motion.div>
				</PlainButton>
			</div>
		</>
	);
}
export default RightTopOptions;
