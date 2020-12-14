import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Default as DefaultButton } from "reusable-components/dist/ui/buttons";
import NavComp from "reusable-components/dist/ui/nav";
import trackEvent from "../../../../tracking";

import Icon from "../../atom/icon";
import RegisterOverlay from "../overlay/register";
import NavItems from "./nav-items.json";
import Styles from "./index.module.scss";


class Nav extends Component {
	static propTypes = {
		buttonTitle: PropTypes.string,
		navItems: PropTypes.array.isRequired
	};

	static defaultProps = {
		buttonTitle: "Mitmachen",
		navItems: NavItems
	};

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
					NavItems={ this.props.navItems }
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
							onClick={ () => {
								trackEvent("Register Overlay", "open");

								setOverlayActive({
									overlayActive: true,
									OverlayComponent: RegisterOverlay
								})
							} }>

							{ this.props.buttonTitle }

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