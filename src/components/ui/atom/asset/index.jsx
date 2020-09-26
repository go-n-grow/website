import React from "react";
import PropTypes from "prop-types";


const ICON_SRCS = {
	"cross": require("../../../../assets/icons/cross.svg"),
	"explanation": require("../../../../assets/icons/explanation.svg"),
	"fullscreen": require("../../../../assets/icons/fullscreen.svg"),
	"location": require("../../../../assets/icons/location.svg"),
	"together": require("../../../../assets/icons/together.svg"),
};

const LOGO_SRCS = {
	"potsdam-full": require("../../../../assets/logos/potsdam-full.svg"),
	"potsdam-small": require("../../../../assets/logos/potsdam-small.svg"),
	"g-n-g": require("../../../../assets/logos/g-n-g.svg")
};

const GRAPHIC_SRCS = {
	"bee": require("../../../../assets/graphics/bee.svg"),
	"flowerpot": require("../../../../assets/graphics/flowerpot.svg"),
	"hi": require("../../../../assets/graphics/hi.svg"),
	"lightbulb": require("../../../../assets/graphics/lightbulb.svg"),
};


const Asset = ({ className, icon, graphic, logo, alt, ...props }) =>
	<img
		className={ className }

		src={
			(icon && ICON_SRCS[icon]) ||
			(graphic && GRAPHIC_SRCS[graphic]) ||
			(logo && LOGO_SRCS[logo])
		}

		alt={
			alt ||
			icon ||
			graphic ||
			logo
		}

		{ ...props }
	/>;

Asset.propTypes = {
	alt: PropTypes.string,

	graphic: PropTypes.oneOf([
		"bee",
		"flowerpot",
		"hi",
		"lightbulb",
	]),
	logo: PropTypes.oneOf([
		"potsdam-full",
		"potsdam-small",
		"g-n-g"
	]),
	icon: PropTypes.oneOf([
		"cross",
		"explanation",
		"fullscreen",
		"location",
		"together"
	])
};

export default Asset;