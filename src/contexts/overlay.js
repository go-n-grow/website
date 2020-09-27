import React from "react";


const OverlayContext = React.createContext({
	isActive: false,
	content: null
})

export default OverlayContext;