import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlainButton from "../../components/buttons/PlainButton";
import { motion, useAnimate, useMotionValue } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import store from "../../store/store";
function RightTopOptions() {
	const X = useRef(0);
	const animationRef = useRef();
	const [animator, animate] = useAnimate();
	const toggle = useCallback(() => {
		animationRef.current = animate(
			animator.current,
			{
				rotate: X.current + 180
			},
			{
				duration: 0.15,
				ease: "linear",
				onComplete: () => {
					animationRef.current = null;
					X.current = X.current + 180;
					store.app.toggleTopBar();
				}
			}
		);
	}, []);

	return (
		<>
			<div className="absolute top-2 right-2 flex gap-2 items-center">
				<PlainButton color="white" title="Settings">
					<SettingsIcon />
				</PlainButton>
				<PlainButton
					color="white"
					title="Hide the topbar"
					onClick={toggle}
				>
					<motion.div ref={animator}>
						{!store.app.topBar ? (
							<ExpandMoreIcon />
						) : (
							<ExpandLessIcon />
						)}
					</motion.div>
				</PlainButton>
			</div>
		</>
	);
}
export default RightTopOptions;
