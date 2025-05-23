import useStore from "./useStore";

const defaultConfig = {
	// only for setting up at the first time
	setup: {
		inStage: "focus",
		duration: {
			focus: 25,
			short: 5,
			long: 15
		}
	},
	appStage: "init",
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
	}
};

const store = {
	init: {
		// only for setting up at the first time
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
		},
		data: {
			get duration() {
				const stage = useStore.getState();
				return stage.setup.duration;
			}
		}
	},
	stage: {
		// init | focus | short | long
		set set(stage) {
			useStore.setState({ appStage: stage });
			// reset stage...
		},
		get current() {
			const state = useStore.getState();
			return state.appStage;
		},
		set setSession(stage) {
			useStore.setState((state) => ({
				status: {
					...state.status,
					session: stage
				}
			}));
		}
	},
	status: {
		setPlay(session, value) {
			useStore.setState((state) => ({
				status: {
					...state.status,
					play: {
						...state.status.play,
						[session]: value
					}
				}
			}));
		},
		get play() {
			const state = useStore.getState();
			return state.status.play;
		},
		duration: {
			get full() {
				const state = useStore.getState();
				return state.setup.duration;
			},
			get focus() {
				const state = useStore.getState();
				return state.setup.duration.focus;
			},
			get short() {
				const state = useStore.getState();
				return state.setup.duration.short;
			},
			get long() {
				const state = useStore.getState();
				return state.setup.duration.long;
			}
		},
		show: {
			get time() {
				const state = useStore.getState();
				return state.setup.viewTimeRemaining;
			},
			set time(value) {
				useStore.setState((state) => {
					return {
						setup: {
							...state.setup,
							viewTimeRemaining: value
						}
					};
				});
			}
		}
	},
	animation: {
		sendResetRequest() {
			useStore.setState((state) => ({
				status: {
					...state.status,
					// reset animation in the current
					resetAnimationMessage: { yes: true }
				}
			}));
		},
		finishResetRequest() {
			useStore.setState((state) => ({
				status: {
					...state.status,
					// reset animation in the current
					resetAnimationMessage: { yes: false }
				}
			}));
		},
		progress: {
			get focus() {
				const state = useStore.getState();
				return state.liveTimeProgress.focus;
			},
			get short() {
				const state = useStore.getState();
				return state.liveTimeProgress.short;
			},
			get long() {
				const state = useStore.getState();
				return state.liveTimeProgress.long;
			},

			// setters
			set focus(value) {
				useStore.setState((state) => ({
					liveTimeProgress: {
						...state.liveTimeProgress,
						focus: value
					}
				}));
			},
			set short(value) {
				useStore.setState((state) => ({
					liveTimeProgress: {
						...state.liveTimeProgress,
						short: value
					}
				}));
			},
			set long(value) {
				useStore.setState((state) => ({
					liveTimeProgress: {
						...state.liveTimeProgress,
						long: value
					}
				}));
			}
		}
	},
	session: {
		// in working session.
		startNew() {
			store.stage.set = "focus";
			this.start("focus");
		},
		start(newSession) {
			store.stage.setSession = newSession;
			store.status.setPlay(newSession, true);
		},
		pause() {
			const currentStage = useStore.getState().status.session;
			store.status.setPlay(currentStage, false);
		},
		resume() {
			const currentStage = useStore.getState().status.session;
			store.status.setPlay(currentStage, true);
		},
		reset() {
			useStore.setState(defaultConfig);
		},
		cancelPlayingAll() {
			useStore.setState((state) => ({
				status: {
					...state.status,
					play: {
						focus: false,
						short: false,
						long: false
					}
				}
			}));
		},
		switchTo(nextSession) {
			// similar to start(session);
			this.start(nextSession);
			store.animation.sendResetRequest();
			// reset animation in the nextSession
		},
		get current() {
			return useStore.getState().status.session;
		},
		count: {
			get focus() {
				return useStore.getState().status.count.focuses;
			},
			get short() {
				return useStore.getState().status.count.shorts;
			},
			get long() {
				return useStore.getState().status.count.longs;
			}
		},
		increase: {
			// increase by 1
			setIncrease(session) {
				useStore.setState((state) => ({
					status: {
						...state.status,
						count: {
							...state.status.count,
							[session]: state.status.count[session] + 1
						}
					}
				}));
			},
			focus() {
				this.setIncrease("focuses");
			},
			short() {
				this.setIncrease("shorts");
			},
			long() {
				this.setIncrease("longs");
			}
		}
	},

	app: {
		set topBar(value) {
			useStore.setState((state) => ({
				app: {
					...state.app,
					topBar: value
				}
			}));
		},
		get topBar() {
			const state = useStore.getState();
			return state.app.topBar;
		},
		toggleTopBar() {
			useStore.setState((state) => ({
				app: {
					...state.app,
					topBar: !state.app.topBar
				}
			}));
		}
	}
};

export default store;
