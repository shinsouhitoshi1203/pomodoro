import { useEffect, useRef, useState } from "react";
import FocusStage from "../FocusStage";
import InitialStage from "../InitialStage";
import useStore from "../../store/useStore";
import { AnimatePresence } from "motion/react";

function StageSwitcher() {
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
					<FocusStage key={`${loadStage}`} />
				)}
			</AnimatePresence>
		</>
	);
}
export default StageSwitcher;
