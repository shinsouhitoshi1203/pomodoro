import SmileIcon from "../../components/Smile";
import TimeRemainListener from "../../components/TimeRemainListener";

function LongBreakSession() {
	return (
		<>
			<TimeRemainListener listenTo="long" />
			<SmileIcon />
		</>
	);
}
export default LongBreakSession;
