import { motion } from "motion/react";

import StatusChangeLayout from "../StatusChangeLayout";

import Upcoming from "../../components/Upcoming";
import FocusControls from "../../components/FocusControls";
import SessionSwitcher from "./SessionSwitcher";

function WorkStage() {
	return (
		<StatusChangeLayout>
			<motion.div layout className="w-[281px] h-[281px]">
				<SessionSwitcher />
			</motion.div>
			<motion.div layout className="my-6">
				<Upcoming />
			</motion.div>
			<motion.div layout>
				<FocusControls />
			</motion.div>
		</StatusChangeLayout>
	);
}
export default WorkStage;
