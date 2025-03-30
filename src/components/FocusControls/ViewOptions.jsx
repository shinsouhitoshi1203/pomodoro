import { motion } from "motion/react";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "../buttons/ToggleButton";
import { useCallback, useMemo } from "react";
import store from "../../store/store";
function ViewOption({ toggle }) {
	const shouldShowTimeRemaining = useMemo(() => {
		return store.status.show.time;
	}, []);
	const handleRequestRemainTime = useCallback(() => {
		const current = store.status.show.time;
		store.status.show.time = !current;
		toggle(false);
	}, []);
	return (
		<>
			<motion.div
				layout
				className="more-container absolute w-[230px] layout bottom-10 right-0 overflow-hidden"
				initial={{ height: 0 }}
				exit={{ opacity: 0 }}
				animate={{ height: 60 }}
			>
				<motion.div
					className="secure-layer"
					onClick={() => {
						toggle(false);
					}}
				></motion.div>
				<motion.div
					className="absolute bottom-0 border-4 border-secondary bg-secondary rounded-xl w-full z-91"
					initial={{ translateY: 100 }}
					animate={{ translateY: 0 }}
					exit={{ opacity: 0 }}
				>
					<ToggleButton
						cls="mx-auto w-full relative font-light  relative"
						color="plain"
						onClick={handleRequestRemainTime}
					>
						<div className="flex items-center gap-3">
							<div className="size-[20px] flex items-center justify-center">
								{shouldShowTimeRemaining && (
									<CheckIcon fontSize="16" />
								)}
							</div>
							<span>Show remaining time</span>
						</div>
					</ToggleButton>
				</motion.div>
			</motion.div>
		</>
	);
}
export default ViewOption;
