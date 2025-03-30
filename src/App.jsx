import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Navigation from "./layout/Navigation";
import StageSwitcher from "./layout/StageSwitcher";
import RightTopOptions from "./layout/RightTopOptions";

function App() {
	return (
		<>
			<div className="min-h-[400px] h-screen flex flex-col [&>*]:shrink-0">
				<LayoutGroup>
					<Navigation />
					<motion.div layout className="grow-1 bg-back ">
						<motion.div
							layout
							className="container h-full max-h-[1000px] mx-auto flex items-center justify-center overflow-hidden relative"
						>
							<RightTopOptions />
							<AnimatePresence>
								<StageSwitcher />
							</AnimatePresence>
						</motion.div>
					</motion.div>
				</LayoutGroup>
			</div>
		</>
	);
}

export default App;
