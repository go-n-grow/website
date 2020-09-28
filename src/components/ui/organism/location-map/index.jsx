import { graphql, StaticQuery } from "gatsby";
import React, { Component } from "react";

import Columns from "react-bulma-components/lib/components/columns/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";

import Mapbox from "./mapbox";
import Sidebar from "./sidebar";
import Styles from "./index.module.scss";


class LocationMap extends Component {
	constructor (props) {
		super(props);

		this.state = {
			participants: randomize(props.takeshape.getParticipantsList.items),
			selectedLocation: null
		};
	}

	componentDidMount () {
		this.setState({
			...this.state,
			participants: randomize(this.props.takeshape.getParticipantsList.items)
		});
	}

	onLocationSelected (selectedLocation) {
		this.setState({
			...this.state,
			selectedLocation
		})
	}

	render () {
		const {
			participants,
			selectedLocation
		} = this.state;

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
						onSelectEntry={ this.onLocationSelected.bind(this) }
						selectedLocation={ selectedLocation }
						participants={ participants }
					/>

				</Column>

				<Column
					paddingless
					size={ 8 }
					className={ Styles.mapWrapper }>

					<Mapbox
						onSelectEntry={ this.onLocationSelected.bind(this) }
						selectedLocation={ selectedLocation }
						participants={ participants }
					/>
				</Column>

			</Columns>
		);
	}
}

const Query = () =>
	<StaticQuery
		query={ graphql`
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
		` }
		render={ data =>
			<LocationMap { ...data } />
		}
	/>;

const randomize = array => {
	let arrayCopy = [ ...array ];
	const newArray = new Array(array.length);

	for (let i = 0; i < newArray.length; i++) {
		newArray[i] = arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1)[0];
	}

	return newArray;
};

export default Query;