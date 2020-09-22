import React from "react";

import Tile from "./tile";
import Styles from "./section-flowerpots.module.scss";
import LogoSrc from "../../../assets/graphics/logo-lhp-full.svg";


const Flowerpots = () =>
	<Tile
		icon={ "flowerpot" }
		title={ "Blumentöpfe für Potsdamer&nbsp;Geschäfte!" }>

		<p>
			Zusammen mit der <a href={ "https://vv.potsdam.de/vv/oe/173010100000024481.php" } target={ "_blank" } rel={ "noopener noreferrer" }><strong>Grünflächenverwaltung
			der Stadt Potsdam</strong></a> vergeben wir an die ersten 10 interessierten Geschäfte (wie Cafés, Bars, Buchläden, etc.) kostenlose Blumenkästen und -töpfe, die vor den Laden gestellt werden können. Größe und Material (Stein, Holz, Ton) können dabei frei gewählt werden. Die Verwaltung kümmert sich um die Anmeldung und die Aufstellung der Töpfe.
		</p>

		<p>
			Die Geschäfte erhalten saatfeste und bienenfreundliche Samen – abgepackt in kleinen Samentüten. Nun seid ihr gefragt. Ihr als Kunden
			bekommt nun zu jeder Bestellung ein kleines Samenpäckchen geschenkt. Die Samen könnt ihr dann in die Töpfe pflanzen. Je mehr mitmachen – desto bunter gestalten wir Potsdam.
		</p>

		<p>
			Natürlich könnt Ihr eure Blumensamen natürlich auch gerne in eurem Garten, im kargen Vorhof, auf eurem Balkon, oder überall anders einpflanzen. Die Blumen erfreuen sich über jede Pflege – meist in Form von Wasser <span role={ "img" } aria-label={ "Smiley mit herausgestreckter Zunge" }>😛</span>.
		</p>

		<div className={ Styles.mainSupporter }>
			<hr/>

			<a
				className={ Styles.logoWrapper }
				href={ "https://vv.potsdam.de/vv/oe/173010100000024481.php" }
				target={ "_blank" }
				rel={ "noopener noreferrer" }>
				<img
					src={ LogoSrc }
					alt={ "Logo Stadt Potsdam" }
					className={ Styles.logo }
				/>
			</a>

			<p>
				Vielen Dank für die wundervolle Unterstützung!
			</p>
		</div>
	</Tile>;

export default Flowerpots;