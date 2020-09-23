import React, { Component } from "react";
import { Default as DefaultButton } from "reusable-components/dist/ui/buttons";
import NavComp from "reusable-components/dist/ui/nav";

import NavItems from "./nav-items.json";
import Styles from "./index.module.scss";


console.log(
	`MAPBOX_TOKEN ${ process.env.MAPBOX_TOKEN }`,
	`MAPBOX_STYLE_URL ${ process.env.MAPBOX_STYLE_URL }`
);

export default class Nav extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	render () {
		return (
			<NavComp
				NavItems={ NavItems }
				CTAButtonComp={ CTAButton }
			/>
		);
	}
}


const CTAButton = () =>
	<DefaultButton
		className={ Styles.ctaBtn }
		color={ "primary" }>
		Jetzt bewerben
	</DefaultButton>;