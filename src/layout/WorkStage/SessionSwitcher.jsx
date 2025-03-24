import { useEffect, useRef } from "react";
import FocusSession from "./FocusSession";
import ShortBreakSession from "./ShortBreakSession";
import useStore from "../../store/useStore";
import LongBreakSession from "./LongBreakSession";

const creative = {
	prev: {
		translate: [0, 0, -800],
		rotate: [180, 0, 0]
	},
	next: {
		translate: [0, 0, -800],
		rotate: [-180, 0, 0]
	}
};
function SessionSwitcher() {
	const swiperRef = useRef();

	useEffect(() => {
		let isDoubled = false;
		useStore.subscribe(
			(state) => state.status.session,
			(session) => {
				if (isDoubled) return;

				switch (session) {
					case "long":
						swiperRef.current.swiper.slideTo(0);
						break;
					case "focus":
						swiperRef.current.swiper.slideTo(1);
						break;
					case "short":
						swiperRef.current.swiper.slideTo(2);
						break;
					default:
						swiperRef.current.swiper.slideTo(1);
						break;
				}
			}
		);
		return () => {
			isDoubled = true;
		};
	}, []);

	return (
		<swiper-container
			slides-per-view="1"
			effect="creative"
			creativeEffect={creative}
			className="size-full flex items-center"
			ref={swiperRef}
			duration={300}
			initial-slide="1"
			// allow-touch-move="false"
		>
			<swiper-slide className="size-full flex items-center justify-center">
				<LongBreakSession />
			</swiper-slide>
			<swiper-slide className="size-full flex items-center ">
				<FocusSession />
			</swiper-slide>
			<swiper-slide className="size-full flex items-center justify-center">
				<ShortBreakSession />
			</swiper-slide>
		</swiper-container>
	);
}
export default SessionSwitcher;
