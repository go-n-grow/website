import React, { Component } from "react";
import { connect } from "react-redux";

import { Default as DefaultButton } from "reusable-components/dist/ui/buttons";
import NavComp from "reusable-components/dist/ui/nav";

import Icon from "../../atom/icon";
import NavItems from "./nav-items.json";
import Styles from "./index.module.scss";


class Nav extends Component {
	static propTypes = {};

	static defaultProps = {};

	state = {
		isActive: false,
	};

	render () {
		const {
			setOverlayActive,
		} = this.props;

		return (
			<>
				<NavComp
					LogoComp={
						Logo
					}
					NavItems={ NavItems }
					ContainerProps={ {
						className: Styles.container,
					} }
					RootContainerProps={ {
						className: Styles.rootContainer,
					} }
					NavItemsContainerProps={ {
						className: Styles.navItems,
					} }
					CTAButtonComp={ () =>
						<DefaultButton
							className={ Styles.ctaBtn }
							color={ "primary" }
							onClick={ () => setOverlayActive({
								overlayActive: true,
							}) }>
							Mitmachen
						</DefaultButton>
					}
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
	</a>;

const mapStateToProps = ({ overlayActive }) => {
	return { overlayActive };
};

const mapDispatchToProps = dispatch => {
	return {
		setOverlayActive: data => dispatch({ type: `SET_OVERLAY_ACTIVE`, ...data }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);