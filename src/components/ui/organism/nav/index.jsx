import React, { Component } from "react";
import { ArrowRight } from "reusable-components/ui/buttons";
import NavComp from "reusable-components/ui/nav";
import Button from "react-bulma-components/lib/components/button/button";

import NavItems from "./nav-items.json";


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
	<ArrowRight
		color={ "primary" }>
		Jetzt bewerben
	</ArrowRight>;