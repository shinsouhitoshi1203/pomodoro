import { AnimatePresence, motion } from "motion/react";
import { useCallback, useImperativeHandle, useState } from "react";
import store from "../../../store/store";
import ContainedButton from "../../../components/buttons/ContainedButton";

const layerAnim = {
	appear: {
		opacity: 1
	},
	pop: {
		opacity: 0
	}
};

const dialogAnim = {
	appear: {
		y: 0
	},
	pop: {
		y: -50
	}
};

function Dialog({ ref }) {
	const [showDialog, setShowDialog] = useState(false);

	const handleShowDialog = useCallback((value) => {
		if (value === false) {
			setShowDialog(value);
		}
		if (store.stage.current != "init") {
			{
				setShowDialog((x) => !x);
			}
		}
	}, []);
	const handleCancel = useCallback(() => {
		store.session.reset();
		handleShowDialog(false);
	}, []);

	useImperativeHandle(ref, () => ({
		reqToCancel: handleShowDialog
	}));
	return (
		<>
			<AnimatePresence mode="wait">
				{showDialog && (
					<>
						<motion.div
							className="fixed inset-0 backdrop-blur-sm bg-black/40 z-109"
							onClick={handleShowDialog}
							initial={layerAnim.pop}
							animate={layerAnim.appear}
							exit={layerAnim.pop}
						></motion.div>
						<motion.div
							layout
							className="absolute inset-0 flex justify-center mt-5 items-start"
							exit={layerAnim.pop}
						>
							<motion.div
								layout
								className="w-[1/2] relative  z-213 rounded-md bg-secondary text-white"
								initial={dialogAnim.pop}
								animate={dialogAnim.appear}
								exit={dialogAnim.pop}
							>
								<div className="px-4 pt-4 pb-2">
									<p>Are you sure to stop the section?</p>
								</div>
								<div className="px-4 pt-2 pb-4 flex gap-2 justify-end">
									<ContainedButton
										color="red"
										onClick={handleCancel}
									>
										Yes
									</ContainedButton>
									<ContainedButton
										color="green"
										onClick={handleShowDialog}
									>
										No
									</ContainedButton>
								</div>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
export default Dialog;
