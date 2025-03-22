import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();
import useStore from "../../store/useStore";
import Duration from "./Duration";
const stageList = [
	{},
	{
		stageID: "focus",
		slide: 1
	},
	{
		stageName: "Short break",
		slide: 2
	},
	{
		stageID: "long",
		slide: 3
	}
];
function DurationDisplay() {
	const swiperSlide = useRef(null);
	const durationRef = useRef(false);
	useEffect(() => {
		if (durationRef.current) return;
		useStore.subscribe(
			(state) => state.setup.inStage,
			(stage) => {
				switch (stage) {
					case "long":
						swiperSlide.current.swiper.slideTo(2);
						break;
					case "short":
						swiperSlide.current.swiper.slideTo(1);
						break;
					case "focus":
						swiperSlide.current.swiper.slideTo(0);
						break;
				}
			},
			{
				fireImmediately: true
			}
		);
		durationRef.current = true;
	}, []);

	return (
		<div className="my-4 w-full overflow-hidden">
			<swiper-container
				slides-per-view="1"
				allow-touch-move="false"
				className="w-full"
				effect="flip"
				ref={swiperSlide}
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
export default DurationDisplay;
