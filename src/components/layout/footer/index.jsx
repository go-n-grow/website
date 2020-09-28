import React, { Component } from "react";
import { Link } from "gatsby";

import Section from "react-bulma-components/lib/components/section/section";
import Container from "react-bulma-components/lib/components/container/container";
import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";

import Styles from "./index.module.scss";

export default class Footer extends Component {
	render () {
		return (
			<React.Fragment>
				<Section className={ Styles.sectionFooterNav }>
					<Container>
						<Columns className={ Styles.navColumns }>
							<Column narrow>
								<p>
									<Link className={ Styles.link } to={ "/imprint" }>
										Impressum
									</Link>
									<span className={ "has-text-white has-text-weight-bold" }> / </span>
									<Link className={ Styles.link } to={ "/data-privacy" }>
										Datenschutz
									</Link>
								</p>
							</Column>

							<Column narrow>
								<a
									href={ "https://www.coderwelsch.com" }
									target={ "_blank" }
									rel={ "noopener noreferrer" }
									className={ Styles.link }>
									© Coderwelsch – Coding & Design
								</a>
							</Column>
						</Columns>
					</Container>
				</Section>
			</React.Fragment>
		);
	}
}
