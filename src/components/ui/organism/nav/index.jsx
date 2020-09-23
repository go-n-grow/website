import React, { Component } from "react";
import { Default as DefaultButton } from "reusable-components/dist/ui/buttons";
import NavComp from "reusable-components/dist/ui/nav";
import Icon from "../../atom/icon";

import NavItems from "./nav-items.json";
import Styles from "./index.module.scss";


export default class Nav extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	render () {
		return (
			<NavComp
				LogoComp={
					Logo
				}
				NavItems={ NavItems }
				ContainerProps={ {
					className: Styles.container
				} }
				RootContainerProps={ {
					className: Styles.rootContainer,
				} }
				NavItemsContainerProps={ {
					className: Styles.navItems
				} }
				CTAButtonComp={ CTAButton }
			/>
		);
	}
}

const Logo = () =>
	<Icon
		icon={ "logo" }
		className={ Styles.logo }
	/>

const CTAButton = () =>
	<DefaultButton
		className={ Styles.ctaBtn }
		color={ "primary" }>
		Mitmachen
	</DefaultButton>;