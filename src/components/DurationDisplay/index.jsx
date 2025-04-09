import { memo, useEffect, useRef } from "react";
import useStore from "../../store/useStore";
import Duration from "./Duration";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
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
function DurationDisplay() {
	const swiperSlide = useRef(null);
	const durationRef = useRef(false);
	useEffect(() => {
		if (durationRef.current) return;
		useStore.subscribe(
			(state) => state.setup.inStage,
			(stage) => {
				let swiper = swiperSlide.current?.swiper;
				switch (stage) {
					case "long":
						if (swiper != undefined) swiper.slideTo(2);
						break;
					case "short":
						if (swiper != undefined) swiper.slideTo(1);
						break;
					case "focus":
						if (swiper != undefined) swiper.slideTo(0);
						break;
				}
			},
			{
				fireImmediately: true
			}
		);
		swiperSlide.current = null;
		durationRef.current = true;
	}, []);

	return (
		<div className="my-4 w-full overflow-hidden">
			<Swiper
				slidesPerView={1}
				allowTouchMove={false}
				modules={[EffectCreative]}
				className="w-full"
				effect="creative"
				ref={swiperSlide}
				creativeEffect={creative}
			>
				<SwiperSlide>
					<Duration stage="focus" />
				</SwiperSlide>
				<SwiperSlide>
					<Duration stage="short" />
				</SwiperSlide>
				<SwiperSlide>
					<Duration stage="long" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
export default memo(DurationDisplay);
