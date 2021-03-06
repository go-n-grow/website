import React from "react";
// import PropTypes from "prop-types";

import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";
import Container from "react-bulma-components/lib/components/container/container";
import SectionComp from "react-bulma-components/lib/components/section/section";


const Section = ({ children, fullWidth, ...props }) =>
	<SectionComp>
		<Container>
			<Columns
				centered
				{ ...props }>

				<Column size={ fullWidth ? 12 : 10 }>
					{ children }
				</Column>

			</Columns>
		</Container>
	</SectionComp>;


export default Section;