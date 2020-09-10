import React from "react";

import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";

import Mapbox from "./mapbox";
import Sidebar from "./sidebar";
import Styles from "./index.module.scss";



const LocationMap = () =>
	<Columns
		centered
		marginless
		paddingless
		className={ Styles.container }>

		<Column
			paddingless
			size={ 4 }>
			<Sidebar />
		</Column>

		<Column
			paddingless
			size={ 8 }>
			<Mapbox />
		</Column>

	</Columns>;

export default LocationMap;