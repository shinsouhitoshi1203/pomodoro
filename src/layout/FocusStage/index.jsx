import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import stageVariant from "../../assets/variant/stageVariant";
import { useCallback } from "react";
import ContainedButton from "../../components/buttons/ContainedButton";
import store from "../../store/store";
import Tomato from "../../components/Tomato";
function FocusStage() {
	const go = useCallback(() => {
		store.stage.set = "init";
	}, []);
	return (
		<motion.div
			variants={stageVariant}
			layout
			initial="hidden"
			animate="visible"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			<motion.div layout className="size-1/2">
				<Tomato />
			</motion.div>
			<ContainedButton cls="mx-auto" color="green" onClick={go}>
				Start focus session
			</ContainedButton>
		</motion.div>
	);
}
export default FocusStage;
