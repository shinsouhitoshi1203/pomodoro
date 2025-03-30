import { motion } from "motion/react";
import { plainVariant } from "../../utils/variant";
import ToolTip from "../Tooltip";
function PlainButton({ color, title, cls = "", children, ...rest }) {
	const className = "button font-light text-[16px] button__plain " + cls;
	return (
		<>
			{title ? (
				<ToolTip title={title}>
					<motion.button
						variants={plainVariant(color)}
						className={className}
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
					variants={plainVariant(color)}
					className={className}
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
export default PlainButton;
