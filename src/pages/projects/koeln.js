import React from "react";
import { connect } from "react-redux";

import Button from "react-bulma-components/lib/components/button/button";
import ButtonGroup from "react-bulma-components/lib/components/button/components/button-group";
import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";

import Header from "../../components/sections/header/index.jsx";
import Footer from "../../components/layout/footer";
import Page from "../../components/layout/page";
import SimpleSection from "../../components/layout/section/simple";
import Tile from "../../components/layout/tile";
import Nav from "../../components/ui/organism/nav";
import PatchKitOverlay from "../../components/ui/organism/overlay/patch-kit";
import RegisterOverlay from "../../components/ui/organism/overlay/register";

import Styles from "./koeln.module.scss";
import Slideshow from "./slideshow";


const App = ({
	overlayActive,
	setOverlayActive,

	overlayPatchActive,
	setOverlayPatchActive
}) =>
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

			<Tile
				hasCustomContent
				className={ Styles.potKitTile }>
				<Column size={ 12 }>
					<Heading
						textSize={ 5 }
						textAlignment={ "centered" }
						className={ Styles.subline }>
						<span>Jetzt neu, unser</span>
					</Heading>

					<Heading
						textSize={ 1 }
						textAlignment={ "centered" }
						className={ Styles.heading }>
						Beet-Kit
					</Heading>

					<Columns>
						<Column narrow>
							<Slideshow/>
						</Column>

						<Column>
							<Content>
								<p>
									Dir fehlt noch die passende Ausrüstung für dein <strong>Bürger:Beet</strong>? Kein Problem!
									Wir haben für dich ein extravagantes Werkzeug-Set für deine nächste Pflanzaktion
									zusammengestellt. Kein Plastik, keine Wegwerfware … langlebig.
								</p>

								<Heading
									textColor={ "white" }
									textSize={ 4 }
									className={ "has-margin-bottom-sm" }>
									Was enthält das Beet-Kit?:
								</Heading>

								<ul>
									<li>eine Geschmiedete Handhacke</li>
									<li>eine Gartenschere mit wechselbaren Klingen</li>
									<li>ein Paar Handschuhe (Größe S, M, L oder XL)</li>
									<li>eine Stahl-Pflanzkelle</li>
									<li>eine Stahlblech-Gießkanne (9 Liter)</li>
									<li>2 Tüten (á 6 Sorten) mit seltenen Blumensamen</li>
									<li>Jute-Sack (110×60 cm) für Gartenabfälle</li>
								</ul>

								<p>
									Kling verlockend? Finden wir auch! Wir haben natürlich schon selbst ein Set,
									sonst hätten wir schon längst zugeschlagen.
								</p>

								<ButtonGroup position={ "centered" }>
									<Button
										colorVariant={ "light" }
										textColor={ "primary"}
										onClick={ () => {
											setOverlayPatchActive({ overlayPatchActive: true })
										} }>
										Jetzt anfragen →
									</Button>
								</ButtonGroup>
							</Content>
						</Column>
					</Columns>
				</Column>
			</Tile>

		</SimpleSection>

		<Footer/>

		<PatchKitOverlay
			isActive={ overlayPatchActive }
			onClose={ () => setOverlayPatchActive({
				overlayPatchActive: false,
			}) }
		/>

		<RegisterOverlay
			isActive={ overlayActive }
			onClose={ () => setOverlayActive({
				overlayActive: false,
			}) }
		/>
	</Page>;

const mapStateToProps = ({ overlayActive, overlayPatchActive }) => {
	return {
		overlayActive,
		overlayPatchActive
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setOverlayPatchActive: data => dispatch({ type: `SET_PATCH_OVERLAY_ACTIVE`, ...data }),
		setOverlayActive: data => dispatch({ type: `SET_OVERLAY_ACTIVE`, ...data }),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);