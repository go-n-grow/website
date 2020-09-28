import React, { Component } from "react";

import { Link } from "gatsby";
import Section from "react-bulma-components/lib/components/section/section";
import Container from "react-bulma-components/lib/components/container/container";
import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Content from "react-bulma-components/lib/components/content/content";
import Button from "react-bulma-components/lib/components/button/button";

import Styles from "./markdown-page.module.scss";


export default class MarkdownPage extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	render () {
		const context = this.props.pageContext;

		return (
			<React.Fragment>

				<Section>
					<Container>
						<Columns centered>
							<Column className={ `is-two-thirds-desktop` }>
								<Link to={ "/" }>
									<Button
										size={ "medium" }
										color={ "primary" }
										className={ "has-margin-top-md has-margin-bottom-md" }>
										← Zurück zur Startseite
									</Button>
								</Link>

								<Content
									size={ "medium" }
									className={ Styles.content }
									dangerouslySetInnerHTML={ { __html: context.html } }
								/>
							</Column>
						</Columns>
					</Container>
				</Section>

			</React.Fragment>
		);
	}
}
