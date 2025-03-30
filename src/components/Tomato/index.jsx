import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	LayoutGroup,
	motion,
	useAnimate,
	useMotionValue,
	useMotionValueEvent
} from "motion/react";
import Raw from "./raw";
import useStore from "../../store/useStore";
import store from "../../store/store";

function Tomato({}) {
	// updating progress for the store
	const hookRel = useRef(1);

	const [scope, animate] = useAnimate();
	const progressRef = useRef(1);
	const durationRef = useRef(
		(() => {
			let duration = store.status.duration.focus;
			return duration * 60;
		})()
	);
	const animateControls = useRef();
	const height = useMotionValue(0);

	useMotionValueEvent(height, "change", (h) => {
		const progressAmount = 1 - h / 256;
		progressRef.current = progressAmount;
	});
	useMotionValueEvent(height, "change", (d) => {
		// request data to push to the store
		if (
			hookRel.current - (1 - d / 256 + 1 / durationRef.current + 0.0001) >
			0
		) {
			hookRel.current = 1 - d / 256;

			store.animation.progress.focus = hookRel.current;
		}
	});
	useMotionValueEvent(height, "animationComplete", () => {
		height.set(0);
		hookRel.current = 1;
		store.session.cancelPlayingAll();
		if (animateControls.current) animateControls.current.stop();

		// handle logic ....
		console.log("passed", store.session.count.focus + 1);

		if ((store.session.count.focus + 1) % 4 == 0) {
			store.session.switchTo("long");
		} else {
			store.session.switchTo("short");
		}
		store.session.increase.focus();
	});

	const [isPlaying, setIsPlaying] = useState(() => ({}));

	useEffect(() => {
		let avenger = false;
		let dumb;
		useStore.subscribe(
			(state) => state.status.play.focus,
			(play) => {
				if (avenger) return;
				dumb = play;
				setIsPlaying({ isPlaying: dumb });
			},
			{ fireImmediately: true }
		);
		return () => {
			avenger = true;
		};
	}, []);

	useEffect(() => {
		let isOk = false;
		if (isPlaying.isPlaying) {
			if (isOk) return;
			animateControls.current = animate(
				scope.current,
				{
					height: 256
				},
				{
					duration: durationRef.current * progressRef.current,
					ease: "linear",
					delay: 0.5
				} // duration (in seconds)
			);
		} else {
			if (animateControls.current) {
				animateControls.current.stop();
			}
		}
		return () => {
			isOk = true;
		};
	}, [isPlaying]);

	return (
		<>
			<LayoutGroup>
				<div
					className="size-[256px] relative p-[10px]"
					initial={{ height: 0 }}
				>
					<div
						className="size-full absolute bottom-0"
						style={{
							filter: "drop-shadow(2px 2px 5px #cccccc20)"
						}}
					>
						<Raw layer={true} />
					</div>

					<motion.div
						ref={scope}
						id="tomato"
						className="tomato size-[256px] absolute bottom-0 overflow-hidden origin-bottom"
						initial={{ height: 0 }}
						style={{ height }}
						transition={{}}
					>
						<div className="absolute bottom-0">
							<Raw />
						</div>
					</motion.div>
				</div>
			</LayoutGroup>
		</>
	);
}
export default Tomato;
