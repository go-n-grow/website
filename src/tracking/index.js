

const isMatomoAvailable = () => {
	return !(
		typeof window === "undefined" ||
		typeof window._paq !== "object"
	);
};

const track = (eventName, value) => {
	window._paq.push([
		"trackEvent",
		eventName,
		value
	]);
};

const trackEvent = (eventName, value) => {
	if (isMatomoAvailable()) {
		track(eventName, value);
		console.log(`Tracked event: ${ eventName }: "${ value }"`);
	} else {
		console.warn(`Couldn’t track event: ${ eventName }: "${ value }"`);
	}
};


export default trackEvent;