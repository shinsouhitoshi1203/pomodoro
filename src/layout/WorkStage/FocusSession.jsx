import TimeRemainListener from "../../components/TimeRemainListener";
import Tomato from "../../components/Tomato";

function FocusSession() {
	// This component is a placeholder for the FocusSession component
	// which is a part of the WorkStage layout. It is a simple wrapper
	// for the Tomato component.
	return (
		<>
			<TimeRemainListener listenTo="focus" />
			<Tomato />
		</>
	);
}
export default FocusSession;
