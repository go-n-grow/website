import React from "react";
import PropTypes from "prop-types";

import Container from "react-bulma-components/lib/components/container/container";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";
import Button from "react-bulma-components/lib/components/button/button";
import ButtonGroup from "react-bulma-components/lib/components/button/components/button-group";

import Icon from "../../ui/atom/icon";
import Styles from "./index.module.scss";


const Interferer = ({ icon, title, buttonTitle, onButtonClick, children }) =>
	<div className={ Styles.containerWrapper }>
		<Container className={ Styles.container }>

			<Icon
				className={ Styles.icon }
				icon={ icon }
			/>

			<div className={ Styles.sublineWrapper }>
				<Heading
					textAlignment={ "centered" }
					className={ Styles.subline }>
					Für Inhaber
				</Heading>
			</div>

			<Heading
				className={ Styles.heading }
				textAlignment={ "centered" }>
				{ title }
			</Heading>

			<Content
				size={ "medium" }
				textAlignment={ "centered" }
				className={ Styles.description }>
				{ children }
			</Content>

			<ButtonGroup position={ "centered" }>
				<Button
					color={ "primary" }
					size={ "medium" }
					onClick={ onButtonClick }
					onKeyDown={ onButtonClick }>
					{ buttonTitle }
				</Button>
			</ButtonGroup>

		</Container>
	</div>;

Interferer.propTypes = {
	icon: Icon.propTypes.icon,
	children: PropTypes.any
};

export default Interferer;