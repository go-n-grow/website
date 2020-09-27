import React, { useState } from "react";
import { cn } from "reusable-components/dist/helper";
import Overlay from "reusable-components/dist/ui/overlay";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";

import Form from "./form/index.jsx";
import Asset from "../../../atom/asset";
import Styles from "./index.module.scss";


const RegisterOverlay = props => {
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
				Vielen Dank 🌻

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
				Wir haben Ihre Anmeldung erhalten und melden uns schnellst möglich zurück 🤜🤛.
			</p>

		</Content>
	</>;

const RegisterError = ({onClose}) =>
	<>
		<div className={ Styles.header }>
			<Heading
				textAlignment={ "centered" }
				textColor={ "white" }>
				Oh nein! 🙈

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
