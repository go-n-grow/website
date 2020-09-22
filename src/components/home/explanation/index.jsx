import React from "react";

import SimpleSection from "../../layout/section/simple";
import Flowerpots from "./section-flowerpots";
import Intro from "./section-intro";
import Why from "./section-why";


const Explanation = () =>
	<SimpleSection
		icon={ "explanation" }
		title={ "Kurz erklärt" }>

		<Intro />

		<Flowerpots />

		<Why />

	</SimpleSection>;

export default Explanation;