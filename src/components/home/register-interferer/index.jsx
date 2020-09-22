import React from "react";
import Interferer from "../../layout/interferer";


const RegisterInterferer = () =>
	<Interferer
		icon={ "together" }
		title={ "Bist du dabei?" }
		buttonTitle={ "Jetzt anmelden" }
		onButtonClick={ () => alert("HEHEHEHE") }>

		Schreibe uns bei Interesse eine unverbindliche Mail. Keine Sorge, dir blüht nichts schlimmes – außer die Blumen, die du von uns bekommst 🙂.

	</Interferer>

export default RegisterInterferer;