import GitHubIcon from "@mui/icons-material/GitHub";
import PlainButton from "../../components/buttons/PlainButton";
const goToGitHub = () => {
	window.location.href = "https://github.com/shinsouhitoshi1203/pomodoro";
};
function LeftBottomOptions() {
	return (
		<>
			<div className="absolute bottom-2 left-2 flex gap-2 items-center">
				<PlainButton
					color="white"
					title="repository"
					onClick={goToGitHub}
				>
					<GitHubIcon />
				</PlainButton>
			</div>
		</>
	);
}
export default LeftBottomOptions;
