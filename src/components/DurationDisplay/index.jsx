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
	useEffect(() => {
		let isDoubled = false;
		useStore.subscribe(
			(state) => state.setup.inStage,
			(stage) => {
				if (isDoubled) return;
				switch (stage) {
					case "long":
						swiperSlide.current?.swiper.slideTo(2);
						break;
					case "short":
						swiperSlide.current?.swiper.slideTo(1);
						break;
					case "focus":
						swiperSlide.current?.swiper.slideTo(0);
						break;
				}
			},
			{
				fireImmediately: true
			}
		);
		return () => {
			isDoubled = true;
		};
	}, []);

	return (
		<div className="my-4 w-full overflow-hidden">
			<Swiper
				slidesPerView="1"
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
