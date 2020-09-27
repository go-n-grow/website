import React, { Component } from "react";
import { Default as DefaultButton } from "reusable-components/dist/ui/buttons";
import NavComp from "reusable-components/dist/ui/nav";

import Icon from "../../atom/icon";
import RegisterOverlay from "../overlay/register";
import NavItems from "./nav-items.json";
import Styles from "./index.module.scss";


export default class Nav extends Component {
	static propTypes = {};
	
	static defaultProps = {};

	state = {
		isActive: false
	};

	closeOverlay () {
		this.setState({
			...this.state,
			isActive: false
		});
	}

	openOverlay () {
		this.setState({
			...this.state,
			isActive: true
		});
	}
	
	render () {
		return (
			<>
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
					CTAButtonComp={ () =>
						<DefaultButton
							className={ Styles.ctaBtn }
							color={ "primary" }
							onClick={ this.openOverlay.bind(this) }>
							Mitmachen
						</DefaultButton>
					}
				/>

				<RegisterOverlay
					isActive={ this.state.isActive }
					onClose={ this.closeOverlay.bind(this) }
				/>
			</>
		);
	}
}

const Logo = () =>
	<a href="/">
		<Icon
			icon={ "logo" }
			className={ Styles.logo }
		/>
	</a>