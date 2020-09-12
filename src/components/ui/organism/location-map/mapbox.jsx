import PropTypes from "prop-types";
import React, { Component } from "react";
import MapboxComp from "mapbox-gl";

import IconSrc from "./location.png";
import Styles from "./mapbox.module.scss";


export default class Mapbox extends Component {
	static propTypes = {
		participants: PropTypes.array.isRequired,
		onSelectEntry: PropTypes.func.isRequired
	};
	
	static defaultProps = {};

	static DEFAULT_ZOOM = 12;
	static MAX_ZOOM = 20;
	static MIN_ZOOM = 0; // 12;
	static LOCATION_ZOOM = 18;

	static MapInstance;

	state = {
		lat: 0,
		lng: 0,
		zoom: 12
	};

	mapContainer = React.createRef();

	constructor (props) {
		super(props);

		const { location } = props.participants[
			props.selectedLocation !== false ? props.selectedLocation: 0
		];

		this.state = {
			...this.state,
			lat: Number.parseFloat(location.latitude),
			lng: Number.parseFloat(location.longitude),
		};

		MapboxComp.accessToken = process.env.MAPBOX_TOKEN;
	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		const isLocationSelected = this.props.selectedLocation !== false;

		const { location } = this.props.participants[
			isLocationSelected ? this.props.selectedLocation: 0
		];

		if (!Mapbox.MapInstance) {
			console.error("Mapbox instance is undefined. Hmmmm… ");
			return false;
		}

		// reset center to current marker selection
		Mapbox.MapInstance.setCenter([
			location.longitude,
			location.latitude
		]);

		// zoom in when location is selected
		if (isLocationSelected) {
			Mapbox.MapInstance.setZoom([
				Mapbox.LOCATION_ZOOM
			]);
		}
	}

	componentDidMount () {
		this.initMapInstance();
	}

	initMapInstance () {
		Mapbox.MapInstance = new MapboxComp.Map({
			container: this.mapContainer.current,
			style: process.env.MAPBOX_STYLE_URL,
			center: [
				this.state.lng,
				this.state.lat
			],
			zoom: this.state.zoom,
			minZoom: Mapbox.MIN_ZOOM,
			maxZoom: Mapbox.MAX_ZOOM
		});

		Mapbox.MapInstance.on("load", this.onMapReady.bind(this));
	}

	onMapReady () {
		// load marker image
		Mapbox.MapInstance.loadImage(IconSrc, (error, image) => {
			Mapbox.MapInstance.addImage("location", image);

			let i = 0;
			for (const { location } of this.props.participants) {
				this.addMarker(String(i++), location);
			}
		});
	}

	addMarker (markerId, { longitude, latitude }) {
		Mapbox.MapInstance.addSource(
			`source-${ markerId }`,
			{
				'type': 'geojson',
				'data': {
					'type': 'FeatureCollection',
					'features': [
						{
							'type': 'Feature',
							'geometry': {
								'type': 'Point',
								'coordinates': [
									longitude,
									latitude,
								]
							}
						}
					]
				}
			});

		Mapbox.MapInstance.addLayer({
			'id': 'icon-' + markerId,
			'type': 'symbol',
			'source': `source-${ markerId }`,
			'layout': {
				'icon-image': 'location',
				'icon-size': 0.75
			}
		});
	}

	render () {
		return (
			<div
				ref={ this.mapContainer }
				className={ Styles.mapContainer }
			/>
		);
	}
}
