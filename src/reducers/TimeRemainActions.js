export const SET_ALLOWED = "setIsAllowed";
export const SET_DISPLAY_TEXT = "setDisplayText";
export const SET_CURRENT_SESSION = "setCurrentSession";

function renderDispatchRequest(type, payload) {
	let typeNew = "";
	switch (type) {
		case "allow":
			typeNew = SET_ALLOWED;
			break;
		case "display":
			typeNew = SET_DISPLAY_TEXT;
			break;
		case "session":
			typeNew = SET_CURRENT_SESSION;
			break;
		default:
			throw new Error(`Unknown action type: ${type}`);
	}

	return {
		type: typeNew,
		payload
	};
}

export default renderDispatchRequest;
