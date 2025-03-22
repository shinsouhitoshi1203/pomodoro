import { motion } from "motion/react";
import { variant } from "../../utils/variant";
function RecShape({ color, cls, children, ...rest }) {
	const className = "rectangle " + cls;
	return (
		<>
			<motion.button
				variants={variant(color)}
				className={className}
				initial="default"
				{...rest}
			>
				{children}
			</motion.button>
		</>
	);
}
export default RecShape;
