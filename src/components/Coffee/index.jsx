import { useEffect, useRef, useState } from "react";
import Raw from "./raw";
import {
	motion,
	useAnimate,
	useMotionValue,
	useMotionValueEvent
} from "motion/react";
import useStore from "../../store/useStore";
import store from "../../store/store";
// animation goes here
function CoffeeIcon() {
	const hookRel = useRef(1);

	const [isPlaying, setIsPlaying] = useState(() => ({}));
	const [animator, animate] = useAnimate();
	const animatorRef = useRef();
	const height = useMotionValue(0);

	const durationRef = useRef(
		(() => {
			let duration = store.status.duration.short;
			return duration * 60;
		})()
	);
	const progressRef = useRef(1);

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
			store.animation.progress.short = hookRel.current;
		}
	});
	useMotionValueEvent(height, "animationComplete", () => {
		height.set(0);
		hookRel.current = 1;
		store.session.increase.short();
		if (animatorRef.current) animatorRef.current.stop();

		store.session.cancelPlayingAll();
		store.session.switchTo("focus");
	});

	useEffect(() => {
		let isWorking = false;
		useStore.subscribe(
			(state) => state.status.play.short,
			(play) => {
				if (isWorking) return;
				setIsPlaying({ isPlaying: play });
			}
		);

		return () => {
			isWorking = true;
		};
	}, []);

	useEffect(() => {
		let isWorking = false;
		if (isPlaying.isPlaying) {
			if (isWorking) return;

			animatorRef.current = animate(
				animator.current,
				{ height: 256 },
				{
					duration: durationRef.current * progressRef.current,
					ease: "linear",
					delay: 0.5
				}
			);
		} else {
			if (animatorRef.current) {
				animatorRef.current.stop();
			}
		}
		return () => {
			isWorking = true;
		};
	}, [isPlaying]);
	return (
		<>
			<div className="flex items-center size-[256px] justify-center relative">
				<div
					className="flex items-center size-[256px] justify-center absolute top-0"
					dataid="layer"
				>
					<Raw layer />
				</div>
				<motion.div
					className="flex w-[256px] justify-center absolute bottom-0 overflow-hidden"
					dataid="layer"
					ref={animator}
					initial={{ height: 0 }}
					style={{ height }}
				>
					<div
						dataid="cover"
						className="absolute size-[256px] bottom-0"
					>
						<Raw />
					</div>
				</motion.div>
			</div>
		</>
	);
}
export default CoffeeIcon;
