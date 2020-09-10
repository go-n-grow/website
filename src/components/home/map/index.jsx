import React from "react";

import Heading from "react-bulma-components/lib/components/heading/heading";

import Section from "../../layout/section";
import Icon from "../../ui/atom/icon";
import Styles from "./index.module.scss";


export default () =>
	<Section>
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
	</Section>;
