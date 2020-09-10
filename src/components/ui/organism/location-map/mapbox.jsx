import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


export default class Mapbox extends Component {
	static propTypes = {};
	
	static defaultProps = {};
	
	render () {
		const MapboxInstance = ReactMapboxGl({
			accessToken: process.env.MAPBOX_TOKEN
		});

		return (
			<MapboxInstance
				style={ process.env.MAPBOX_STYLE_URL }
				containerStyle={ {
					width: "100%",
					height: "80vh"
				} }>

				<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
					<Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
				</Layer>

			</MapboxInstance>
		);
	}
}
