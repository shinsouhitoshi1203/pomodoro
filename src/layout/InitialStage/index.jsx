import ContainedButton from "../../components/buttons/ContainedButton";
import DurationDisplay from "../../components/DurationDisplay";
import IncreaseDuration from "./IncreaseDuration";
import ListStage from "./ListStage";

function InitialStage() {
	return (
		<div className="grid gap-4 items-center w-2/3 sm:w-1/2 lg:w-1/3 mx-auto">
			<ListStage />
			<DurationDisplay />
			<div>
				<ContainedButton cls="mx-auto" color="green">
					Start focus session
				</ContainedButton>
			</div>
			<IncreaseDuration />
		</div>
	);
}
export default InitialStage;
