import { useCallback } from "react";
import ContainedButton from "../../components/buttons/ContainedButton";
import DurationDisplay from "../../components/DurationDisplay";
import IncreaseDuration from "./IncreaseDuration";
import ListStage from "./ListStage";
import store from "../../store/store";
import { AnimatePresence, motion } from "motion/react";
import stageVariant from "../../assets/variant/stageVariant";
function InitialStage() {
	const go = useCallback(() => {
		store.stage.set = "focus";
	}, []);
	return (
		<motion.div
			layout
			className="grid gap-4 items-center w-2/3 md:w-1/2  mx-auto"
			variants={stageVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			<ListStage />
			<DurationDisplay />
			<div>
				<ContainedButton cls="mx-auto" color="green" onClick={go}>
					Start focus session
				</ContainedButton>
			</div>
			<IncreaseDuration />
		</motion.div>
	);
}
export default InitialStage;
