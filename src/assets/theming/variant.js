// animation for green
const greenPallet = {
	default: {
		backgroundColor: "#00B050",
		color: "#fff"
	},
	hover: {
		backgroundColor: "#00C459",
		color: "#fff"
	},
	disabled: {
		backgroundColor: "#404040",
		color: "#949494"
	},
	tap: {
		scale: 0.9
	}
};

// animation for red
const redPallet = {
	default: {
		backgroundColor: "#642626",
		color: "#fff"
	},
	hover: {
		backgroundColor: "#9C3824",
		color: "#fff"
	},
	disabled: {
		backgroundColor: "#404040",
		color: "#949494"
	},
	tap: {
		scale: 0.9
	}
};
// animation for dark
const darkVariant = {
	default: {
		backgroundColor: "#383838",
		color: "#fff"
	},
	hover: {
		backgroundColor: "#949494",
		color: "#fff"
	},
	disabled: {
		backgroundColor: "#323232",
		color: "#949494"
	},
	tap: {
		scale: 0.9
	}
};
// transparent white
const whitePallet = {
	default: {
		backgroundColor: "rgba(255, 255, 255, 0.1)",
		color: "#cbcbcb"
	},
	hover: {
		backgroundColor: "rgba(255, 255, 255, 0.2)"
	},
	disabled: {
		backgroundColor: "#404040",
		color: "#949494"
	},
	tap: {
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		color: "#fff"
	}
};

// transparent
const transparentPallet = {
	default: {
		backgroundColor: "rgba(255,255,255, 0)",
		color: "#cbcbcb"
	},
	hover: {
		backgroundColor: "rgba(255,255,255, 0.2)"
	},
	disabled: {
		backgroundColor: "#404040",
		color: "#949494"
	},
	tap: {
		backgroundColor: "rgba(255,255,255, 0.3)",
		color: "#fff"
	}
};

// hyperlink
const whileHyperPallet = {
	default: {
		color: "#CBCBCB"
	},
	hover: {
		color: "#FFFFFF"
	},
	disabled: {
		color: "#949494"
	},
	tap: {
		color: "#0078D4"
	}
};
const blueHyperPallet = {
	default: {
		color: "#0078D4"
	},
	hover: {
		color: "#106EBE"
	},
	disabled: {
		color: "#949494"
	},
	tap: {
		color: "#005A9E"
	}
};

export { greenPallet, redPallet, whitePallet, transparentPallet, darkVariant };
export { blueHyperPallet, whileHyperPallet };
