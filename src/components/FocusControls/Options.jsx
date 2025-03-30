import ContainedButton from "../buttons/ContainedButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import ViewOption from "./ViewOptions";
function Options() {
	const [showMore, setShowMore] = useState(false);
	const toggle = useCallback((option) => {
		if (typeof option == "boolean") {
			setShowMore(option);
		} else {
			setShowMore((x) => !x);
		}
	}, []);

	return (
		<motion.div className="relative">
			<ContainedButton
				color="dark"
				tooltip="More"
				cls="p-2 relative z-91"
				onClick={toggle}
			>
				<MoreVertIcon />
			</ContainedButton>

			<AnimatePresence mode="wait">
				{showMore && <ViewOption toggle={toggle} />}
			</AnimatePresence>
		</motion.div>
	);
}
export default Options;
