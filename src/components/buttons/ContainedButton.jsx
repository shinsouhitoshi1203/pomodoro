import { motion } from "motion/react";
import { variant } from "../../utils/variant";

function ContainedButton({ color, children, cls = "", ...rest }) {
	const className = "button font-link button__contained    " + cls;
	return (
		<>
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
		</>
	);
}
export default ContainedButton;
