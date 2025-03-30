import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
const useStore = create(
	subscribeWithSelector((get, set) => {
		return {
			// only for setting up at the first time
			setup: {
				inStage: "focus",
				duration: {
					// in minutes
					focus: 3,
					short: 1,
					long: 2
				},
				viewTimeRemaining: true
			},

			// for work session
			appStage: "init", // init | focus | short | long
			status: {
				count: {
					focuses: 0,
					shorts: 0,
					longs: 0
				},
				session: "focus",
				play: {
					focus: false,
					short: false,
					long: false
				},
				resetAnimationMessage: { yes: false }
			},
			liveTimeProgress: {
				focus: 0,
				short: 0,
				long: 0
			}
		};
	})
);
export default useStore;
