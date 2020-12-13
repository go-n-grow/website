import React from "react";

import Tile from "../../../../layout/tile";


const Why = () =>
	<Tile
		title={ "Was das bringt?" }
		graphic={ "bee" }>

		<p>
			Mit deiner Hilfe verschönerst du die Stadt, deinen Kiez und stärkst unser Bewusstsein für Ökologie.
			Das neue Blütenmeer in der Stadt bietet neue Nahrungsquellen für extrem wichtige Insektenarten wie z.&nbsp;B.
			Wildbienen und andere bestäubende&nbsp;Insektenarten.
		</p>

		<p className={ "is-italic" }>
			Wir lassen Potsdam neu erblühen. Aus grau wird bunt! Es gibt nur&nbsp;Vorteile.
		</p>

	</Tile>;

export default Why;