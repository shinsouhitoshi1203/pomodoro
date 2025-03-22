import { LayoutGroup, motion } from "motion/react";
import Raw from "./raw";

function Tomato() {
	return (
		<>
			<LayoutGroup>
				<div className="size-[256px] relative ">
					<div
						className="size-full absolute bottom-0"
						style={{
							filter: "drop-shadow(2px 2px 50px #cccccc20)"
						}}
					>
						<Raw layer={true} />
					</div>

					<motion.div
						layout
						className="size-[256px] absolute bottom-0 overflow-hidden origin-bottom"
						initial={{
							height: 0
						}}
						animate={{
							height: 256
						}}
						transition={{ duration: 3 }}
					>
						<div className="absolute bottom-0">
							<Raw />
						</div>
					</motion.div>
				</div>
			</LayoutGroup>
		</>
	);
}
export default Tomato;
