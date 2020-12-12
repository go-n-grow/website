

const isMatomoAvailable = () => {
	return !(
		typeof window === "undefined" ||
		typeof window._paq !== "object"
	);
};

const track = () => {
	window._paq.push();
};

const trackEvent = (eventName, value) => {
	if (isMatomoAvailable()) {
		track();
		console.log(`Tracked event: ${ eventName }: "${ value }"`);
	} else {
		console.warn(`Couldn’t track event: ${ eventName }: "${ value }"`);
	}
};


export default trackEvent;