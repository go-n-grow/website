import React from "react";
import Overlay from "reusable-components/dist/ui/overlay";
import Heading from "react-bulma-components/lib/components/heading/heading";

import Form from "./form/index.jsx";
import Asset from "../../../atom/asset";
import Styles from "./index.module.scss";


const RegisterOverlay = props => {
	return (
		<Overlay
			createPortal={ false }
			contentProps={ {
				className: Styles.overlay,
			} }
			{ ...props }>

			<div className={ Styles.header }>
				<Heading
					textAlignment={ "centered" }
					textColor={ "white" }>
					Anmeldung

					<Asset
						icon={ "cross" }
						className={ Styles.close }
						onClick={ props.onClose }
					/>
				</Heading>
			</div>

			<Form/>
		</Overlay>
	);
};

export default RegisterOverlay;
