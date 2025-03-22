import {
	blueHyperPallet,
	greenPallet,
	redPallet,
	transparentPallet,
	whileHyperPallet,
	whitePallet
} from "../assets/theming/variant";

// const maps = new Map(["green", greenPallet], ["red", redPallet]);

function variant(colorString) {
	let pallet;
	switch (colorString) {
		case "red":
			pallet = redPallet;
			break;
		case "white":
			pallet = whitePallet;
			break;
		case "green":
			pallet = greenPallet;
			break;
		default:
			pallet = transparentPallet;
			break;
	}
	return pallet;
}

function plainVariant(colorString) {
	let pallet;
	switch (colorString) {
		case "white":
			pallet = whileHyperPallet;
			break;
		case "blue":
			pallet = blueHyperPallet;
			break;
	}
	return pallet;
}

export { variant, plainVariant };
