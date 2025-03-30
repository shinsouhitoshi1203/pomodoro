import {
	AnimatePresence,
	LayoutGroup,
	motion,
	MotionConfig
} from "motion/react";
import Navigation from "./layout/Navigation";
import StageSwitcher from "./layout/StageSwitcher";
import RightTopOptions from "./layout/RightTopOptions";
import LeftBottomOptions from "./layout/LeftBottomOptions";

function App() {
	return (
		<div className="App bg-back ">
			<LayoutGroup>
				<motion.div
					layout
					className="min-h-[400px] h-screen flex flex-col [&>*]:shrink-0"
				>
					<Navigation />
					<motion.div
						layout
						className="grow-1"
						transition={{ duration: 0.25, ease: "linear" }}
					>
						<motion.div
							layout
							className="container h-full max-h-[1000px] mx-auto flex items-center justify-center overflow-hidden relative"
						>
							<RightTopOptions />
							<AnimatePresence>
								<StageSwitcher />
							</AnimatePresence>
							<LeftBottomOptions />
						</motion.div>
					</motion.div>
				</motion.div>
			</LayoutGroup>
		</div>
	);
}

export default App;
