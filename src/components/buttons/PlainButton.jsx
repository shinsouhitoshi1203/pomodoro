import { motion } from "motion/react";
import { plainVariant } from "../../utils/variant";
function PlainButton({ color, cls, children, ...rest }) {
	const className = "button font-light text-[16px] button__plain " + cls;
	return (
		<>
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
		</>
	);
}
export default PlainButton;
