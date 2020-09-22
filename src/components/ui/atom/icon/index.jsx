import React from "react";
import PropTypes from "prop-types";
import { cn } from "reusable-components/helper";

import Styles from "./index.module.scss";


const Icon = ({ className, size, icon }) =>
	<i className={ cn(
		Styles.icon,
		className,
		`icon-${ icon }`,
		size && `is-size${ size }` // bulma text sizes
	) } />;

Icon.propTypes = {
	icon: PropTypes.oneOf([
		"logo",
		"explanation",
		"location",
		"together",
		"fullscreen",
		"logo-lhp-full",
		"logo-lhp-small"
	]),
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default Icon;