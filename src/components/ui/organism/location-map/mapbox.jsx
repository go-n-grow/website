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

	static DEFAULT_ZOOM = 13;
	static MAX_ZOOM = 20;
	static MIN_ZOOM = 0;
	static LOCATION_ZOOM = 16;

	static MapInstance;

	state = {
		lat: 52.39180182552221,
		lng: 13.056976136582989,
		zoom: Mapbox.DEFAULT_ZOOM
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

		MapboxComp.accessToken = process.env.GATSBY_MAPBOX_TOKEN;
	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		// false means «not set yet»
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
		console.log("TOKEN", process.env.GATSBY_MAPBOX_TOKEN);
		console.log("TOKEN", process.env.GATSBY_MAPBOX_STYLE_URL);
		console.log("MAPBOX MOUNTED");

		this.initMapInstance();
	}

	initMapInstance () {
		Mapbox.MapInstance = new MapboxComp.Map({
			container: this.mapContainer.current,
			style: process.env.GATSBY_MAPBOX_STYLE_URL,
			center: [
				this.state.lng,
				this.state.lat
			],
			zoom: this.state.zoom,
			minZoom: Mapbox.MIN_ZOOM,
			maxZoom: Mapbox.MAX_ZOOM
		});

		console.log("MAPBOX ONLOAD");
		Mapbox.MapInstance.on("load", this.onMapReady.bind(this));
	}
	
	onMove () {
		console.log("MOVE", Mapbox.MapInstance.getCenter(), Mapbox.MapInstance.getZoom());
	}

	onMapReady () {
		console.log("MAPBOX LOADED");
		// load marker image
		Mapbox.MapInstance.loadImage(IconSrc, (error, image) => {
			Mapbox.MapInstance.addImage("location", image);

			let i = 0;
			for (const { location } of this.props.participants) {
				this.addMarker(String(i++), location);
			}
		});

		// add further mapbox events
		Mapbox.MapInstance.on("move", this.onMove.bind(this));
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
