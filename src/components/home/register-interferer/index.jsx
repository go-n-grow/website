import React from "react";
import { connect } from "react-redux";
import Interferer from "../../layout/interferer";


const RegisterInterferer = ({ setOverlayActive }) =>
	<Interferer
		icon={ "together" }
		title={ "Bist du dabei?" }
		buttonTitle={ "Jetzt anmelden" }
		onButtonClick={ () =>
			setOverlayActive({ overlayActive: true })
		}>

		Schreibe uns bei Interesse eine unverbindliche Mail. Keine Sorge, dir blüht nichts schlimmes – außer die Blumen, die du von uns bekommst <span role={ "img" } aria-label={  "Lächelndes Gesicht" }>🙂</span>.

	</Interferer>;


const mapStateToProps = ({ overlayActive }) => {
	return { overlayActive };
};

const mapDispatchToProps = dispatch => {
	return {
		setOverlayActive: data => dispatch({ type: `SET_OVERLAY_ACTIVE`, ...data }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterInterferer);