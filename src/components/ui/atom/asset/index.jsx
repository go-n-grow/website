import React from "react";
import PropTypes from "prop-types";

const ICON_SRCS = {
	"bee": require("../../../../assets/graphics/bee.svg"),
	"flowerpot": require("../../../../assets/graphics/flowerpot.svg"),
	"hi": require("../../../../assets/graphics/hi.svg"),
	"lightbulb": require("../../../../assets/graphics/lightbulb.svg"),
	"location": require("../../../../assets/graphics/location.svg"),
	"location-active": require("../../../../assets/graphics/location-active.svg"),
	"logo-lhp-full": require("../../../../assets/graphics/logo-lhp-full.svg"),
	"logo-lhp-small": require("../../../../assets/graphics/logo-lhp-small.svg")
};


const Asset = ({ className, icon }) =>
	<img
		className={ className }
		src={ ICON_SRCS[icon] }
		alt={ icon }
	/>;

Asset.propTypes = {
	icon: PropTypes.oneOf(Object.keys(ICON_SRCS))
};

export default Asset;