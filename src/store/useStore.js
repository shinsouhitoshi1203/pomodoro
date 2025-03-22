import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
const useStore = create(
	subscribeWithSelector((get, set) => {
		return {
			setup: {
				inStage: "focus",
				duration: {
					focus: 25,
					short: 5,
					long: 20
				}
			},
			appStage: "init", // init | focus | short | long
			inTimeStatus: {}
		};
	})
);
export default useStore;
