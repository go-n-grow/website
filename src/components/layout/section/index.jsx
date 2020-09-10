import React from "react";
// import PropTypes from "prop-types";

import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Container from "react-bulma-components/lib/components/container/container";
import SectionComp from "react-bulma-components/lib/components/section/section";

import Styles from "./index.module.scss";


const Section = ({ children, ...props }) =>
	<SectionComp className={ Styles.section }>
		<Container>
			<Columns
				centered
				{ ...props }>

				<Column size={ 10 }>
					{ children }
				</Column>

			</Columns>
		</Container>
	</SectionComp>;


export default Section;