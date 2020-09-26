import React from "react";

import Tile from "./tile";


const Explanation = () =>
	<Tile
		title={ "Wir sind …" }
		graphic={ "hi" }>

		<p>
			… die Initiative <strong><i>»&#8202;Go&nbsp;’n’&nbsp;Grow&#8202;«</i></strong> der FH&nbsp;Potsdam.
			Wir wollen mit eurer Hilfe Potsdam grüner und
			insektenfreundlicher gestalten. Zusammen bringen wir Potsdam zum blühen!
			Und das machen wir&nbsp;so:
		</p>
	</Tile>;

export default Explanation;