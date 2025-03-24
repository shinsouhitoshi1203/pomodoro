import stageVariant from "../../assets/variant/stageVariant";
import { motion } from "motion/react";

function StatusChangeLayout({ children, cls = "" }) {
	return (
		<motion.div
			className={cls}
			variants={stageVariant}
			layout
			initial="hidden"
			animate="visible"
			exit="exit"
			transition={{ duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
}
export default StatusChangeLayout;
