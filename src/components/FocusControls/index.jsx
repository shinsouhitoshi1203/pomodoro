import { useEffect, useRef, useState } from "react";
import InPause from "./InPause";
import InPlaying from "./InPlaying";
import useStore from "../../store/useStore";
import store from "../../store/store";

function FocusControls() {
	const controlRef = useRef(false);
	const [isPlaying, setIsPlaying] = useState(false);
	useEffect(() => {
		if (controlRef.current) return;
		// console.log(store.status.play);
		useStore.subscribe(
			(state) => state.status.play,
			(play) => {
				const currentSession = store.session.current;
				const status = play[currentSession];

				setIsPlaying(status);
			},
			{ fireImmediately: true }
		);
		controlRef.current = true;
	}, []);
	return <>{isPlaying ? <InPlaying /> : <InPause />}</>;
}
export default FocusControls;
