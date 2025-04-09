import { useEffect, useRef } from "react";
import FocusSession from "./FocusSession";
import ShortBreakSession from "./ShortBreakSession";
import useStore from "../../store/useStore";
import LongBreakSession from "./LongBreakSession";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectFade, EffectCreative } from "swiper/modules";
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
		<Swiper
			slidesPerView="1"
			modules={[EffectCreative]}
			effect="creative"
			creativeEffect={creative}
			className="size-full flex items-center"
			ref={swiperRef}
			initialSlide={1}
			allowTouchMove={false}
		>
			<SwiperSlide className="size-full flex items-center justify-center">
				<LongBreakSession />
			</SwiperSlide>
			<SwiperSlide className="size-full flex items-center ">
				<FocusSession />
			</SwiperSlide>
			<SwiperSlide className="size-full flex items-center justify-center">
				<ShortBreakSession />
			</SwiperSlide>
		</Swiper>
	);
}
export default SessionSwitcher;
/*
 */
