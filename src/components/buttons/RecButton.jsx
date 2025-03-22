import { motion } from "motion/react";
import { variant } from "../../utils/variant";
function RecButton({ color, cls, children, ...rest }) {
	const className = "button rectangle button__reg " + cls;
	return (
		<>
			<motion.button
				variants={variant(color)}
				className={className}
				initial="default"
				whileHover="hover"
				whileTap="tap"
				{...rest}
			>
				{children}
			</motion.button>
		</>
	);
}
export default RecButton;
