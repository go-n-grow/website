import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";

import Mapbox from "./mapbox";
import Sidebar from "./sidebar";
import Styles from "./index.module.scss";


const LocationMap = () => {
	const data = useStaticQuery(graphql`
		query {
			takeshape {
				getParticipantsList {
					total
					items {
						qrIdCode
						images {
							image {
								_id
							}
						}
						location {
							latitude
							longitude
						}
						flowerpotsCount
						flowerpotState
						contact {
							address
							eMail
							phone
							websiteUrl
						}
						company
					}
				}
			}
		}
	`);

	const participants = data.takeshape.getParticipantsList.items;

	const [
		selectedLocation,
		selectLocation
	] = useState(false);

	return (
		<Columns
			centered
			marginless
			paddingless
			className={ Styles.container }>
	
			<Column
				paddingless
				size={ 4 }
				className={ Styles.sidebarWrapper }>

				<Sidebar
					onSelectEntry={ selectLocation }
					selectedLocation={ selectedLocation }
					participants={ participants }
				/>

			</Column>
	
			<Column
				paddingless
				size={ 8 }
				className={ Styles.mapWrapper }>

				<Mapbox
					onSelectEntry={ selectLocation }
					selectedLocation={ selectedLocation }
					participants={ participants }
				/>

			</Column>
	
		</Columns>
	);
};

export default LocationMap;