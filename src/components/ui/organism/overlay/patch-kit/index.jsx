import React, { useState } from "react";
import { cn } from "reusable-components/dist/helper";
import Overlay from "reusable-components/dist/ui/overlay";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";

import Form from "./form/index.jsx";
import Asset from "../../../atom/asset";
import Styles from "./index.module.scss";


const PatchKitOverlay = (props) => {
	const [sendStatus, setStatus] = useState(null);

	const onClose = () => {
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
			{ ...props }>

			{ sendStatus === null &&
				<RegisterForm
					onClose={ props.onClose }
					onDone={ () => setStatus("done") }
					onError={ () => setStatus("error") }
				/>
			}

			{ sendStatus === "done" && <RegisterDone onClose={ onClose } /> }
			{ sendStatus === "error" && <RegisterError onClose={ onClose } /> }

		</Overlay>
	);
};

const RegisterForm = ({ onDone, onError, onClose }) =>
	<>
		<div className={ Styles.header }>
			<Heading
				textAlignment={ "centered" }
				textColor={ "white" }>
				Beet-Kit anfragen

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
				Wir haben Ihre Anfrage erhalten und melden uns schnellst möglich zurück <span role={ "img"} aria-label={ "Frohes Gesicht" }>☺️️</span>.
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
				Es ist leider ein Fehler aufgetreten. Bitte senden Sie eine E-Mail an <a href="mailto:bk@go-n-grow.org?subject=Beet-Kit%20Anfrage">bk@go-n-grow.org</a>.
			</p>

		</Content>
	</>;

export default PatchKitOverlay;
