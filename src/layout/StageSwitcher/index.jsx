import { useEffect, useRef, useState } from "react";
import WorkStage from "../WorkStage";
import InitialStage from "../InitialStage";
import useStore from "../../store/useStore";
import { AnimatePresence } from "motion/react";

function StageSwitcher() {
	// only for init and working session
	const switchRef = useRef(false);
	const [loadStage, setLoadStage] = useState("init");
	useEffect(() => {
		if (switchRef.current) return;
		useStore.subscribe(
			(state) => state.appStage,
			(appStage) => setLoadStage(appStage),
			{ fireImmediately: true }
		);
		switchRef.current = true;
	}, []);
	return (
		<>
			<AnimatePresence exitBeforeEnter mode="wait">
				{loadStage == "init" ? (
					<InitialStage key={`${loadStage}`} />
				) : (
					<WorkStage key={`${loadStage}`} />
				)}
			</AnimatePresence>
		</>
	);
}
export default StageSwitcher;
