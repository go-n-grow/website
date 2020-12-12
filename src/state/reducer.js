import trackEvent from "../tracking";


const initialState = {
	overlayActive: false,
};

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case "SET_OVERLAY_ACTIVE":
			trackEvent(action.type, !!action.overlayActive);

			return {
				...state,
				overlayActive: action.overlayActive,
			};
		default:
			return state;
	}
}