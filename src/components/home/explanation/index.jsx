import React from "react";

import Heading from "react-bulma-components/lib/components/heading/heading";
import ButtonGroup from "react-bulma-components/lib/components/button/components/button-group";
import Button from "react-bulma-components/lib/components/button/button";

import Section from "../../layout/section";
import Icon from "../../ui/atom/icon";
import Tile from "./tile";

import Styles from "./index.module.scss";


export default () =>
	<Section>
		<div className={ Styles.header }>
			<Heading
				renderAs={ "p" }
				marginless
				textAlignment={ "centered" }>

				<Icon
					icon={ "explanation" }
					className={ Styles.icon }
				/>

			</Heading>

			<Heading
				renderAs={ "h2" }
				textSize={ 1 }
				textAlignment={ "centered" }
				textColor={ "white" }>
				Kurz erklärt
			</Heading>
		</div>

		<Tile
			title={ "Wir sind …" }
			icon={ "hi" }>

			<p>
				… die Initiative <i>»Go ’n’ Grow«</i> der FH Potsdam.
				Wir wollen mit eurer Hilfe Potsdam grüner und
				insektenfreundlicher gestalten. Zusammen bringen wir Potsdam zum blühen!
				Und das machen wir&nbsp;so:
			</p>
		</Tile>

		<Tile
			icon={ "flowerpot" }
			title={ "Blumentöpfe as a Service" }>

			<p>
				Zusammen mit der Grünflächenverwaltung der Stadt Potsdam vergeben wir an die ersten 10 interessierten Geschäfte (wie Cafés, Bars, Buchläden, etc.) kostenlose Blumenkästen und -töpfe, die vor den Laden gestellt werden können. Größe und Material (Stein, Holz, Ton) können dabei frei gewählt werden. Die Verwaltung kümmert sich um die Anmeldung und die Aufstellung der Töpfe.
			</p>

			<ButtonGroup position={ "centered" }>
				<Button color={ "primary" }>Jetzt mitmachen</Button>
			</ButtonGroup>

			<p>
				Die Geschäfte erhalten saatfeste und bienenfreundliche Samen – abgepackt in kleinen Samentüten. Nun seid ihr gefragt. Ihr als Kunden
				bekommt nun zu jeder Bestellung ein kleines Samenpäckchen geschenkt. Die Samen könnt ihr dann in die Töpfe pflanzen. Je mehr mitmachen – desto bunter gestalten wir Potsdam.
			</p>

			<p>
				Natürlich könnt Ihr eure Blumensamen natürlich auch gerne in eurem Garten, im kargen Vorhof, auf eurem Balkon, oder überall anders einpflanzen. Die Blumen erfreuen sich über jede Pflege – meist in Form von Wasser 😛.
			</p>
		</Tile>

		<Tile
			title={ "Was das bringt?" }
			icon={ "bee" }>

			<p>
				Mit deiner Hilfe verschönerst du die Stadt, deinen Kiez und stärkst unser Bewusstsein für Ökologie. Wir lassen Potsdam neu erblühen. Aus grau wird bunt! Es gibt nur Vorteile.
			</p>

			<p>
				Das neue Blütenmeer in der Stadt bietet neue Nahrungsquellen für extrem wichtige Insektenarten wie z. B. Wildbienen und andere bestäubende Insektenarten.
			</p>

		</Tile>
	</Section>;

