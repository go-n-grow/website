import React from "react";

const Asset = ({ icon }) =>
	<img
		src={ `assets/illustrations/${ icon }.svg` }
		alt=""
	/>;

export default Asset;