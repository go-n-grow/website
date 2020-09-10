import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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
						flowerpotsCount
						flowerpotState
						contact {
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

	return (
		<Columns
			centered
			marginless
			paddingless
			className={ Styles.container }>
	
			<Column
				paddingless
				size={ 4 }>

				<Sidebar
					participants={ participants }
				/>

			</Column>
	
			<Column
				paddingless
				size={ 8 }>

				<Mapbox
					participants={ participants }
				/>

			</Column>
	
		</Columns>
	);
};

export default LocationMap;