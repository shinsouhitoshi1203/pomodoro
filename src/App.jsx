import ContainedButton from "./components/buttons/ContainedButton";
import InitialStage from "./layout/InitialStage";
import Navigation from "./layout/Navigation";
import { LayoutGroup, motion } from "motion/react";
import StageSwitcher from "./layout/StageSwitcher";

function App() {
	return (
		<>
			<div className="min-h-[400px] h-screen flex flex-col [&>*]:shrink-0">
				<LayoutGroup>
					<Navigation />
					<motion.div layout className="grow-1 bg-back ">
						<motion.div
							layout
							className="container h-full max-h-[1000px] mx-auto flex items-center justify-center"
						>
							<StageSwitcher />
						</motion.div>
					</motion.div>
				</LayoutGroup>
			</div>
		</>
	);
}

export default App;
