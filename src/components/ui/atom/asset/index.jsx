import React from "react";

const Asset = ({ className, icon }) =>
	<img
		className={ className }
		src={ `assets/illustrations/${ icon }.svg` }
		alt=""
	/>;

export default Asset;