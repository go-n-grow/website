import PropTypes from "prop-types";
import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


export default class Mapbox extends Component {
	static propTypes = {
		participants: PropTypes.array.isRequired,
		onSelectEntry: PropTypes.func.isRequired
	};

	static DEFAULT_ZOOM = 12;
	static LOCATION_ZOOM = 18;

	static defaultProps = {};

	renderLocations () {
		return this.props.participants.map((entry, index) =>
			<Layer
				key={ `${ entry.company }-${ index }` }
				type="symbol"
				id="marker">

				<Feature coordinates={[
					entry.location.longitude,
					entry.location.latitude,
				]} />
			</Layer>
		);
	}
	
	render () {
		const MapboxInstance = ReactMapboxGl({
			accessToken: process.env.MAPBOX_TOKEN
		});

		const entries = this.props.participants;
		const i = this.props.selectedLocation;
		const locationSelected = i !== false;

		const { longitude, latitude } = locationSelected ?
			entries[i].location :
			entries[0].location;

		return (
			<MapboxInstance
				style={ process.env.MAPBOX_STYLE_URL }
				center={ [
					longitude,
					latitude
				] }
				zoom={ [
					locationSelected ? Mapbox.LOCATION_ZOOM : Mapbox.DEFAULT_ZOOM
				]}
				containerStyle={ {
					width: "100%",
					height: "100%"
				} }>

				{ this.renderLocations() }

			</MapboxInstance>
		);
	}
}
