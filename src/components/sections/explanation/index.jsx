import React from "react";

import SimpleSection from "../../layout/section/simple";
import Flowerpots from "./tiles/flowerpots";
import Intro from "./tiles/intro";
import Why from "./tiles/why";


const Explanation = () =>
	<SimpleSection
		icon={ "explanation" }
		title={ "Kurz erklärt" }
		id={ "kurz-erklaert" }>

		<Intro />

		<Flowerpots />

		<Why />

	</SimpleSection>;

export default Explanation;