import { useCallback } from "react";
import ContainedButton from "../../components/buttons/ContainedButton";
import DurationDisplay from "../../components/DurationDisplay";
import IncreaseDuration from "./IncreaseDuration";
import ListStage from "./ListStage";
import store from "../../store/store";
import { AnimatePresence, motion } from "motion/react";
import stageVariant from "../../assets/variant/stageVariant";
import StatusChangeLayout from "../StatusChangeLayout";
function InitialStage() {
	const startSessionTrigger = useCallback(() => {
		store.session.startNew();
	}, []);
	return (
		<StatusChangeLayout cls="grid gap-4 items-center w-2/3 md:w-1/2  mx-auto">
			<ListStage />
			<DurationDisplay />
			<div>
				<ContainedButton
					cls="mx-auto"
					color="green"
					onClick={startSessionTrigger}
				>
					Start focus session
				</ContainedButton>
			</div>
			<IncreaseDuration />
		</StatusChangeLayout>
	);
}
export default InitialStage;
