import React from "react";

import Container from "react-bulma-components/lib/components/container/container";
import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";

import Styles from "./index.module.scss";


export default () =>
	<Container>
		<Heading
			renderAs={ "h2" }
			textSize={ 1 }
			textAlignment={ "centered" }
			textColor={ "white" }>
			Wer? Wie? Was?
		</Heading>

		<Tile title={ "Die Idee" }>
			Hello, World!
		</Tile>
	</Container>;

const Tile = ({ title, children }) =>
	<Columns
		className={ Styles.tile }
		centered>
		<Column size={ 4 }>
			Icon
		</Column>

		<Column size={ 8 }>
			<Heading>{ title }</Heading>
			<Content>
				{ children }
			</Content>
		</Column>
	</Columns>;