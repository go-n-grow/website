import React from "react";
import { connect } from "react-redux";
import "react-awesome-slider/dist/styles.css";

import Column from "react-bulma-components/lib/components/columns/components/column";
import Heading from "react-bulma-components/lib/components/heading/heading";

import Header from "../../components/sections/header/index.jsx";
import Footer from "../../components/layout/footer";
import Page from "../../components/layout/page";
import SimpleSection from "../../components/layout/section/simple";
import Tile from "../../components/layout/tile";
import Nav from "../../components/ui/organism/nav";
import RegisterOverlay from "../../components/ui/organism/overlay/register";


const App = ({ overlayActive, setOverlayActive }) =>
	<Page
		subTitle={ "Willkommen" }
		title={ "Bürger:Beete" }
		location={ "Köln" }
		description={ "Baumscheiben bepflanzen. Veedel verschönern. Insekten retten. Es ist soooo einfach!" }>

		<Nav
			buttonTitle={ "Kontakt" }
		/>

		<Header
			title={ "Bürger:Beete" }
			location={ "Köln" }>

			<span>Beete bepflanzen. Veedel verschönern.</span><br/>
			<span>Hungrige Insekten retten.</span><br/>
			<span>Es ist sooo einfach!</span>

		</Header>

		<SimpleSection
			icon={ "explanation" }
			title={ "Kurz erklärt" }
			id={ "kurz-erklaert" }>

			<Tile
				title={ "Wir sind …" }
				graphic={ "hi" }>

				<p>
					… die Initiative <strong><i>»&#8202;Go&nbsp;’n’&nbsp;Grow&#8202;«</i></strong> der <i>Universität zu
					Köln.</i>
					Wir wollen mit eurer Hilfe unsere Veedel grüner und
					insektenfreundlicher gestalten. Zusammen bringen wir Köln zum blühen!
					Und das machen wir&nbsp;so:
				</p>
			</Tile>

			<Tile
				graphic={ "flowerpot" }
				title={ "Beete statt Brachflächen" }>

				<p>
					Zusammen mit dem <a
					href={ "https://www.stadt-koeln.de/service/adressen/amt-fuer-landschaftspflege-und-gruenflaechen" }
					target={ "_blank" } rel={ "noopener noreferrer" }><strong>Amt für Landschaftspflege und Grünflächen
					der Stadt Köln</strong></a> suchen
					wir Interessierte zur Bepflanzung von Brachflächen in der Innenstadt für das nächste Jahr 2021. Das
					Amt verwandelt Ihre angefragten Areale in bepflanzbare Beete um und stellt kleinen Zäunchen auf. Sie
					können Ihre eigenen Samen säen oder bei Bedarf Samen und Pflanzen von uns erhalten.
					Zusammen verwandeln wir unsere Stadt in das Löwenzahn-Intro von Peter Lustig!
				</p>

				<p>
					<strong>Schreib uns unverbindlich.</strong> In der ersten Phase möchten wir eure Ideen zur
					Bepflanzung, Sorgen und Wünsche erfahren!
				</p>

				<p>
					Ihr wohnt in der Innenstadt und habt vor eurer Haustür eine <i>»ungeliebte«</i> Brachfläche? Tretet
					mit uns in Kontakt und schreibt uns bei Interesse eine E-Mail mit dem Standpunkt der Brachfläche.
					Wir freuen uns riesig über jede eurer Rückmeldungen!
				</p>
			</Tile>

			<Tile hasCustomContent>
				<Column size={ 12 }>
					<Heading textAlignment={ "centered" }>
						Unser Growkit
					</Heading>


				</Column>
			</Tile>

		</SimpleSection>

		<Footer/>

		<RegisterOverlay
			isActive={ overlayActive }
			onClose={ () => setOverlayActive({
				overlayActive: false,
			}) }
		/>
	</Page>;

const mapStateToProps = ({ overlayActive }) => {
	return { overlayActive };
};

const mapDispatchToProps = dispatch => {
	return { setOverlayActive: () => dispatch({ type: `SET_OVERLAY_ACTIVE` }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);