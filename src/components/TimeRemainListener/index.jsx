import { motion } from "motion/react";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import useStore from "../../store/useStore";
import store from "../../store/store";
import TimeRemainReducer from "../../reducers/TimeRemainReducer";
import initialTimeRemainState from "../../reducers/initialTimeRemainState";
import renderDispatchRequest from "../../reducers/TimeRemainActions";
function TimeRemainListener({ listenTo }) {
	const unSub = useRef(null);
	const Default = useCallback(() => {
		const defaultDuration = duration.current[listenTo];
		if (defaultDuration == 2) {
			return [defaultDuration - 1, ">"];
		} else if (defaultDuration > 2) {
			return [defaultDuration - 1, "mm"];
		} else {
			return [Math.trunc(defaultDuration * 60), "ss"];
		}
	});

	const [timeState, dispatch] = useReducer(
		TimeRemainReducer,
		initialTimeRemainState
	);

	// unchangable values
	const duration = useRef(store.status.duration.full);
	const tempMin = useRef(duration.current[listenTo]);
	const inOneMinute = useRef(false);

	const [isAllowed, setIsAllowed] = useState();

	/* const [amountLeft, setAmountLeft] = useState(() => {
		const defaultDuration = duration.current[listenTo];
		if (defaultDuration == 2) {
			return [defaultDuration - 1, ">"];
		} else if (defaultDuration > 2) {
			return [defaultDuration - 1, "mm"];
		} else {
			return [Math.trunc(defaultDuration * 60), "ss"];
		}
	}); */

	// const [currentSession, setCurrentSession] = useState("");

	useEffect(() => {
		// new injection
		let isDoubled = false;
		useStore.subscribe(
			(state) => state.status.session,
			(session) => {
				if (isDoubled) return;
				// setCurrentSession(session);
				const req = renderDispatchRequest("session", session);
				// console.log(req);

				dispatch(req);
			},
			{
				fireImmediately: true
			}
		);
		return () => {
			isDoubled = true;
		};
	}, []);

	const resetTimeRemains = useCallback(() => {
		store.animation.progress[listenTo] = 0;
		const defaultDuration = duration.current[listenTo];
		tempMin.current = defaultDuration;
		inOneMinute.current = false;
		if (defaultDuration == 2) {
			const req = renderDispatchRequest("display", [1, ">"]);
			dispatch(req);
			// setAmountLeft();
		} else if (defaultDuration > 2) {
			const req = renderDispatchRequest("display", [
				defaultDuration - 1,
				"mm"
			]);
			dispatch(req);
		} else {
			// setAmountLeft([Math.trunc(defaultDuration * 60), "ss"]);
			const req = renderDispatchRequest("display", [
				Math.trunc(defaultDuration * 60),
				"ss"
			]);
			dispatch(req);
		}
	}, []);

	// useEffect(() => {
	// 	if (listenTo == "focus") console.log(timeState);
	// }, []);
	/* 
	// Check the progress of the session
	useEffect(() => {
		// temp
		let isDoubled = false;
		useStore.subscribe(
			(state) => state.liveTimeProgress,
			(data) => {
				if (isDoubled) return;
				console.log(data);
			},
			{
				fireImmediately: true
			}
		);
		return () => {
			isDoubled = true;
		};
	}, []); 
    */

	useEffect(() => {
		// new injection
		let isDoubled = false;
		if (timeState?.currentSession == listenTo) {
			resetTimeRemains();
			unSub.current = useStore.subscribe(
				(state) => state.liveTimeProgress[listenTo],
				(progress) => {
					if (isDoubled) return;
					const defaultDuration = duration.current[listenTo];
					const durations = duration.current;
					const remaining = Math.round(
						durations[listenTo] * progress * 60
					);
					if (0 < remaining && remaining < 60) {
						// under 1 minute
						const req = renderDispatchRequest("display", [
							remaining,
							"ss"
						]);
						dispatch(req);
						// setAmountLeft([remaining, "ss"]);
					} else if (remaining >= 120) {
						// over 2 minutes
						const deltaSecond = Math.abs(
							tempMin.current * 60 - remaining
						);
						if (deltaSecond >= 60) {
							// over 2 minutes
							const newMinute = tempMin.current - 1;
							tempMin.current = newMinute;

							// setAmountLeft([newMinute - 1, "mm"]);
							const req = renderDispatchRequest("display", [
								newMinute - 1,
								"mm"
							]);
							dispatch(req);
						}
					} else if (remaining == 0) {
					} else {
						// between 1 and 2 minutes
						if (remaining < 120 && !inOneMinute.current) {
							inOneMinute.current = true;
							// setAmountLeft([1, ">"]);
							const req = renderDispatchRequest("display", [
								1,
								">"
							]);
							dispatch(req);
						}
					}
				},
				{
					fireImmediately: true
				}
			);
		} else {
			if (unSub.current) {
				unSub.current();
				unSub.current = null;
				resetTimeRemains();
			}
		}
		return () => {
			isDoubled = true;
		};
	}, [timeState?.currentSession]);

	useEffect(() => {
		let isWorking = false;
		useStore.subscribe(
			(state) => state.setup.viewTimeRemaining,
			(ok) => {
				if (isWorking) return;
				// setIsAllowed(ok);
				const req = renderDispatchRequest("allow", ok);
				dispatch(req);
			},
			{
				fireImmediately: true
			}
		);
		return () => {
			isWorking = true;
		};
	}, []);

	return (
		<>
			{timeState?.isAllowed && (
				<motion.div className="absolute inset-0 flex items-center justify-center z-50">
					<div className="absolute bottom-10 font-remain">
						{timeState?.displayText}
						{/* {amountLeft[1] == ">" && "Over "}
						{amountLeft[0]}{" "}
						{amountLeft[1] == "mm"
							? " minute"
							: amountLeft[1] == "ss"
							? " second"
							: " minute"}
						{amountLeft[0] > 1 ? "s" : ""} */}
					</div>
				</motion.div>
			)}
		</>
	);
}
export default TimeRemainListener;
