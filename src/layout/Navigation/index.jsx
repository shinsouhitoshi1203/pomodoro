import { AnimatePresence, motion } from "motion/react";

import RecButton from "../../components/buttons/RecButton";

import Time from "./Time";
import ContrastIcon from "@mui/icons-material/Contrast";
import FocusStatus from "./FocusStatus";
import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import SiteLogo from "./SiteLogo";

const anim = {
	appear: {
		y: 0,
		height: "auto"
	},
	pop: {
		y: -50,
		height: 0
	}
};

function Navigation() {
	const [isAllowed, setIsAllowed] = useState(false);

	useEffect(() => {
		let isDoubled = false;
		let unsub = useStore.subscribe(
			(state) => state.app.topBar,
			(topBar) => {
				if (isDoubled) return;
				setIsAllowed(topBar);
			},
			{
				fireImmediately: true
			}
		);
		return () => {
			isDoubled = true;
			unsub();
		};
	}, []);

	return (
		<AnimatePresence mode="wait">
			{isAllowed && (
				<motion.nav
					layout
					className="navigation z-100 bg-secondary"
					initial={anim.pop}
					animate={anim.appear}
					exit={anim.pop}
					transition={{ ease: "linear", duration: 0.25 }}
				>
					<div className="container flex items-stretch mx-auto ">
						<SiteLogo />
						<FocusStatus />
						<div className="ml-auto rightside flex">
							{/* <RecButton color="transparent" cls="">
								<ContrastIcon fontSize="16" />
							</RecButton> */}
							<Time />
						</div>
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
export default Navigation;
