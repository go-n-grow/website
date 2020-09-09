import React from "react";

import Container from "react-bulma-components/lib/components/container/container";
import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Heading from "react-bulma-components/lib/components/heading/heading";
import Content from "react-bulma-components/lib/components/content/content";
import ButtonGroup from "react-bulma-components/lib/components/button/components/button-group";
import Button from "react-bulma-components/lib/components/button/button";

import Asset from "../../ui/atom/asset";
import Icon from "../../ui/atom/icon";
import Styles from "./index.module.scss";


export default () =>
	<Container>
		<Columns centered>
			<Column size={ 10 }>
				<div className={ Styles.header }>
					<Heading
						renderAs={ "p" }
						marginless
						textAlignment={ "centered" }>

						<Icon
							icon={ "location" }
							className={ Styles.icon }
						/>

					</Heading>

					<Heading
						renderAs={ "h2" }
						textSize={ 1 }
						textAlignment={ "centered" }
						textColor={ "white" }>
						Supporter
					</Heading>
				</div>


			</Column>
		</Columns>
	</Container>;
