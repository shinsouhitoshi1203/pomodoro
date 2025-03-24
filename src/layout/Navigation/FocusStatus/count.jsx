import { useEffect, useState } from "react";
import useStore from "../../../store/useStore";

function Count() {
	const [numberOfFocusSessions, setNumberOfFocusSessions] = useState(0);
	useEffect(() => {
		let isDoubled = false;
		useStore.subscribe(
			(state) => state.status.count.focuses,
			(number) => {
				if (isDoubled) return;
				setNumberOfFocusSessions(number);
			}
		);
		return () => {
			isDoubled = true;
		};
	}, []);
	return (
		<>
			<span className="hidden lg:inline">focus session:</span>
			<span className="font-bold">
				{numberOfFocusSessions > 0
					? ` #${numberOfFocusSessions}`
					: " 0"}
			</span>
		</>
	);
}
export default Count;
