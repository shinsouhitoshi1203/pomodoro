import { memo, useEffect, useRef } from "react";
import useStore from "../../store/useStore";
import Duration from "./Duration";
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
			<swiper-container
				slides-per-view="1"
				allow-touch-move="false"
				className="w-full"
				effect="creative"
				ref={swiperSlide}
				creativeEffect={creative}
			>
				<swiper-slide>
					<Duration stage="focus" />
				</swiper-slide>
				<swiper-slide>
					<Duration stage="short" />
				</swiper-slide>
				<swiper-slide>
					<Duration stage="long" />
				</swiper-slide>
			</swiper-container>
		</div>
	);
}
export default memo(DurationDisplay);
