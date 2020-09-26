import React from "react";
import Heading from "react-bulma-components/lib/components/heading/heading";

import Asset from "../../ui/atom/asset";
import Styles from './simple.module.scss';
import Section from "./index";


const SimpleSection = ({ icon = "location", title, description, children, ...props }) =>
	<Section { ...props }>
		<div className={ Styles.header }>
			<Heading
				renderAs={ "p" }
				marginless
				textAlignment={ "centered" }
				className={ Styles.iconWrapper }>

				<Asset
					icon={ icon }
					className={ Styles.icon }
				/>

			</Heading>

			<Heading
				renderAs={ "h2" }
				textSize={ 1 }
				textAlignment={ "centered" }
				textColor={ "white" }
				dangerouslySetInnerHTML={ { __html: title } }
			/>

			<p className={ Styles.description }>
				{ description }
			</p>
		</div>

		{ children }
	</Section>

export default SimpleSection;