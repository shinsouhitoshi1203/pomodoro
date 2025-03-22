import RecButton from "../../components/buttons/RecButton";
import RecShape from "../../components/rectangle/RecShape";

function Time() {
	return (
		<div className="flex items-center">
			<div className="rectangle">10:30</div>
			<RecButton color="white" cls="font-medium">
				24hr
			</RecButton>
		</div>
	);
}
export default Time;
