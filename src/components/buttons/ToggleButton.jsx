import { motion } from "motion/react";
import { variant } from "../../utils/variant";
import ToolTip from "../Tooltip";

function ToggleButton({ color, children, cls = "", tooltip = "", ...rest }) {
	const className = "button font-link button__contained    " + cls;
	return (
		<>
			{tooltip ? (
				<ToolTip title={tooltip}>
					<motion.button
						className={className}
						variants={variant(color)}
						initial="default"
						whileHover="hover"
						whileTap="tap"
						{...rest}
					>
						{children}
					</motion.button>
				</ToolTip>
			) : (
				<motion.button
					className={className}
					variants={variant(color)}
					initial="default"
					whileHover="hover"
					whileTap="tap"
					{...rest}
				>
					{children}
				</motion.button>
			)}
		</>
	);
}
export default ToggleButton;
