import trackEvent from "../tracking";


const initialState = {
	overlayActive: false,
	overlayPatchActive: false
};

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case "SET_OVERLAY_ACTIVE":
			trackEvent(action.type, !!action.overlayActive);

			return {
				...state,
				overlayActive: action.overlayActive,
			};
		case "SET_PATCH_OVERLAY_ACTIVE":
			trackEvent(action.type, !!action.overlayPatchActive);

			return {
				...state,
				overlayPatchActive: action.overlayPatchActive,
			};
		default:
			return state;
	}
}