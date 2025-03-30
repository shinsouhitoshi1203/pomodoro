import {
	SET_ALLOWED,
	SET_CURRENT_SESSION,
	SET_DISPLAY_TEXT
} from "./TimeRemainActions";
function getTimeLeft([time, unit]) {
	switch (unit) {
		case "ss":
			return `${time} second${time > 1 ? "s" : ""}`;
		case "mm":
			return `${time} minute${time > 1 ? "s" : ""}`;
		case ">":
			return `Over 1 minute`;
		default:
			throw new Error(`Unknown time unit: ${unit}`);
	}
}
function TimeRemainReducer(state, action) {
	let { type, payload } = action;
	switch (type) {
		case SET_ALLOWED:
			return {
				...state,
				isAllowed: payload
			};
		case SET_DISPLAY_TEXT:
			return {
				...state,
				displayText: getTimeLeft(payload)
			};
		case SET_CURRENT_SESSION:
			// console.log(payload);

			return {
				...state,
				currentSession: payload
			};
		default:
			throw new Error(`Unknown action type: ${type}`);
	}
}

export default TimeRemainReducer;
