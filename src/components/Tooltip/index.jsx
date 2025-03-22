import { Tooltip } from "@mui/material";

function ToolTip({ title, children }) {
	return (
		<>
			<Tooltip
				title={title}
				classes={{
					tooltip: "!font-light !font-sans "
				}}
			>
				{children}
			</Tooltip>
		</>
	);
}
export default ToolTip;
