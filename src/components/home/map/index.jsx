import React from "react";

import SimpleSection from "../../layout/section/simple";
import LocationMap from "../../ui/organism/location-map";


export default () =>
	<SimpleSection
		fullWidth
		id={ "geschaefte" }
		icon={ "location" }
		title={ "Die Geschäfte" }
		description={ "Diese Geschäfte machen bei unserer Aktion mit. Stattet ihnen doch gerne mal einen Besuch ab und pflanzt ein paar Samen ;-) …" }>

		<LocationMap />

	</SimpleSection>;