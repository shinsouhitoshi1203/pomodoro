import useStore from "./useStore";

const store = {
	init: {
		get currentIn() {
			const stage = useStore.getState();
			return stage.setup.inStage;
		},
		set switch(stageChange) {
			useStore.setState((state) => ({
				setup: {
					...state.setup,
					inStage: stageChange
				}
			}));
		},
		increase(stage, amount) {
			useStore.setState((state) => ({
				setup: {
					...state.setup,
					duration: {
						...state.setup.duration,

						[stage]: state.setup.duration[stage] + amount
					}
				}
			}));
		}
	}
};

export default store;
