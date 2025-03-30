import CoffeeIcon from "../../components/Coffee";
import TimeRemainListener from "../../components/TimeRemainListener";

function ShortBreakSession() {
	return (
		<>
			<TimeRemainListener listenTo="short" />
			<CoffeeIcon />
		</>
	);
}
export default ShortBreakSession;
