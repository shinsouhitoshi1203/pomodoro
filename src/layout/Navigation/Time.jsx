import { useEffect, useRef, useState } from "react";
import RecButton from "../../components/buttons/RecButton";
function format(date, hour12 = false) {
	return date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12
	});
}

function Time() {
	const timeRef = useRef("");
	const [time, setTime] = useState("");
	const [hour12, setHour12] = useState(false);

	useEffect(() => {
		const timeout = setInterval(() => {
			const D = new Date();
			const x = format(D, hour12);
			if (timeRef.current !== x) {
				timeRef.current = x;
				setTime(() => timeRef.current);
			}
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [hour12]);
	return (
		<div className="flex items-center">
			<div className="rectangle">
				<div>{time}</div>
			</div>
			<RecButton
				color="white"
				cls="font-medium"
				onClick={() => setHour12((prev) => !prev)}
			>
				{!hour12 ? "24hr" : "12hr"}
			</RecButton>
		</div>
	);
}
export default Time;
