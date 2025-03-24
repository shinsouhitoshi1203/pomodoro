import { useEffect, useMemo, useRef, useState } from "react";
import useStore from "../../store/useStore";
import store from "../../store/store";

const availableSessions = ["focus", "short", "long"];
function findNextSession(currentSession, countedFocus = 0) {
	switch (currentSession) {
		case "long":
			return "focus";
		case "short":
			return "focus";
		default:
			if ((countedFocus + 1) % 4 == 0) {
				return "long";
			} else {
				return "short";
			}
	}
}

function Upcoming() {
	const [nextSessionTitle, setNextSessionTitle] = useState("");

	const duration = useRef(store.status.duration.full);

	const displayText = useMemo(() => {
		const amount = duration.current[nextSessionTitle];
		switch (nextSessionTitle) {
			case "focus":
				return `The focus session`;
			case "short":
				return `${amount} minutes break`;
			case "long":
				return `${amount} minutes break`;
			default:
				return `The focus session`;
		}
	}, [nextSessionTitle]);

	useEffect(() => {
		let isDoubled = false;
		if (isDoubled) return;

		useStore.subscribe(
			(state) => state.status.session,
			(currentSession) => {
				if (isDoubled) return;

				let next = "";
				const numberFocus = store.session.count.focus;
				if (availableSessions.includes(currentSession)) {
					next = findNextSession(currentSession, numberFocus);
				} else {
					// in default it should be focus session -> short session -> long session
					next = findNextSession("focus", numberFocus);
				}
				setNextSessionTitle(next);
			},
			{ fireImmediately: true }
		);
		return () => {
			isDoubled = true;
		};
	}, []);
	return (
		<div className="flex gap-2 justify-center">
			<span>Up coming next: </span>
			<b>{displayText}</b>
		</div>
	);
}
export default Upcoming;
// 5 minutes break
