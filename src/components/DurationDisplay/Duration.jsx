import { memo, useEffect, useRef, useState } from "react";
import useStore from "./../../store/useStore";

function Duration({ stage }) {
	const [displayDigit, setDisplayDigit] = useState(() => ["00", "00"]);
	const stageRef = useRef(stage);
	const durationRef = useRef(false);
	useEffect(() => {
		// if (durationRef.current) return;
		useStore.subscribe(
			(state) => state.setup.duration[stageRef.current],
			(duration) => {
				const mm = duration < 10 ? "0" + duration : duration;
				setDisplayDigit([mm, "00"]);
			},
			{
				fireImmediately: true
			}
		);
		durationRef.current = true;
	}, []);

	return (
		<>
			<div className="w-full flex gap-2 items-center justify-center">
				<span className="font-time">{displayDigit[0]}</span>
				<span className="text-3xl lg:text-6xl xl:text-[100px]">:</span>
				<span className="font-time">{displayDigit[1]}</span>
			</div>
		</>
	);
}
export default memo(Duration);
