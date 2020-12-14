import React, { useState } from "react";
import PropTypes from "prop-types";
import { cn } from "reusable-components/dist/helper";
import Overlay from "reusable-components/dist/ui/overlay";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";
import trackEvent from "../../../../../tracking";

import Form from "./form/index.jsx";
import Asset from "../../../atom/asset";
import Styles from "./index.module.scss";


const RegisterOverlay = props => {
	const [sendStatus, setStatus] = useState(null);

	const onClose = () => {
		trackEvent("Register Overlay", "close");
		props.onClose();
		setTimeout(() => setStatus(null), 250);
	};

	return (
		<Overlay
			createPortal={ false }
			contentProps={ {
				className: cn(
					Styles.overlayContent,
					sendStatus === "error" && Styles.onError,
					sendStatus === "done" && Styles.onDone,
				),
			} }
			{ ...props }
			onClose={ onClose }>

			{ sendStatus === null &&
				<RegisterForm
					onClose={ onClose }
					onDone={ () => setStatus("done") }
					onError={ () => setStatus("error") }
				/>
			}

			{ sendStatus === "done" && <RegisterDone onClose={ onClose } /> }
			{ sendStatus === "error" && <RegisterError onClose={ onClose } /> }

		</Overlay>
	);
};

RegisterOverlay.propTypes = {
	onClose: PropTypes.func.isRequired,
	isActive: PropTypes.bool
};

const RegisterForm = ({ onDone, onError, onClose }) =>
	<>
		<div className={ Styles.header }>
			<Heading
				textAlignment={ "centered" }
				textColor={ "white" }>
				Anmeldung

				<Asset
					icon={ "cross" }
					className={ Styles.close }
					onClick={ onClose }
				/>
			</Heading>
		</div>

		<Form
			onDone={ onDone }
			onError={ onError }
		/>
	</>;

const RegisterDone = ({onClose}) =>
	<>
		<div className={ Styles.header }>
			<Heading
				textAlignment={ "centered" }
				textColor={ "white" }>
				Vielen Dank  <span role={ "img"} aria-label={ "Sonnenblume" }>🌻</span>

				<Asset
					icon={ "cross" }
					className={ Styles.close }
					onClick={ onClose }
				/>
			</Heading>
		</div>

		<Content
			size={ "medium" }
			textColor={ "dark" }
			className={ Styles.content }>

			<p>
				Wir haben Ihre Anmeldung erhalten und melden uns schnellst möglich zurück <span role={ "img"} aria-label={ "Faust schläft Faust" }>🤜🤛</span>.
			</p>

		</Content>
	</>;

const RegisterError = ({onClose}) =>
	<>
		<div className={ Styles.header }>
			<Heading
				textAlignment={ "centered" }
				textColor={ "white" }>
				Oh nein!  <span role={ "img"} aria-label={ "Facepalm Smiley" }>🙈</span>

				<Asset
					icon={ "cross" }
					className={ Styles.close }
					onClick={ onClose }
				/>
			</Heading>
		</div>

		<Content
			size={ "medium" }
			textColor={ "dark" }
			className={ Styles.content }>

			<p>
				Es ist leider ein Fehler aufgetreten. Bitte senden Sie eine E-Mail an <a href="mailto:anmeldung@go-n-grow.org">anmeldung@go-n-grow.org</a>.
			</p>

		</Content>
	</>;

export default RegisterOverlay;
