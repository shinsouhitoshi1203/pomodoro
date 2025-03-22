import RecShape from "../../components/rectangle/RecShape";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
function FocusStatus() {
	return (
		<>
			<RecShape color="green">
				<div className="flex items-center justify-center gap-1">
					<FilterTiltShiftIcon fontSize="16" />
					<p>
						<span className="hidden lg:inline">focus period: </span>
						<span className="font-bold">1 of 2</span>
					</p>
				</div>
			</RecShape>
		</>
	);
}
export default FocusStatus;
