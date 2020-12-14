

const initialState = {
	overlayActive: false,
	OverlayComponent: null
};

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case "SET_OVERLAY_ACTIVE":
			return {
				...state,
				overlayActive: action.overlayActive,
				OverlayComponent: action.OverlayComponent
			};
		default:
			return state;
	}
}