import PlainButton from "../../components/buttons/PlainButton";
const options = [1, 5, 10, 25];
function IncreaseDuration() {
	return (
		<div className="flex gap-5 justify-center flex-wrap">
			{options.map((option) => (
				<PlainButton key={option + "-minute"} color="white">
					{option} minutes
				</PlainButton>
			))}
		</div>
	);
}
export default IncreaseDuration;
