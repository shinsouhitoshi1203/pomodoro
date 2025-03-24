import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import RecShape from "../../../components/rectangle/RecShape";
import Init from "./init";
import Count from "./count";
import { useEffect, useState } from "react";
import useStore from "../../../store/useStore";

function FocusStatus() {
	const [isInInit, setIsInInit] = useState(true);
	useEffect(() => {
		let isDoubled = false;
		useStore.subscribe(
			(state) => state.appStage,
			(session) => {
				if (isDoubled) return;
				setIsInInit(() => {
					return session == "init";
				});
			}
		);
		return () => {
			isDoubled = true;
		};
	}, []);
	return (
		<>
			<RecShape color="green">
				<div className="flex items-center justify-center gap-1">
					<FilterTiltShiftIcon fontSize="16" />
					<p>{isInInit ? <Init /> : <Count />}</p>
				</div>
			</RecShape>
		</>
	);
}
export default FocusStatus;
