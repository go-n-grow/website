import React, { Component } from "react";
import PropTypes from "prop-types";

import Heading from "react-bulma-components/lib/components/heading/heading";
import { cn } from "reusable-components/dist/helper";

import Icon from "../../atom/icon";
import Styles from "./sidebar.module.scss";


export default class Sidebar extends Component {
	static propTypes = {
		participants: PropTypes.array.isRequired,
		onSelectEntry: PropTypes.func.isRequired,
		selectedLocation: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.oneOf([ null ])
		])
	};
	
	static defaultProps = {};

	renderEntry ({
         company,
         qrIdCode,
         images,
         flowerpotsCount,
         flowerpotState,
         contact
    }, index) {
		const triggerEvent = index === this.props.selectedLocation ?
			undefined : () => this.props.onSelectEntry(index)

		return (
			<li
				key={ `${ company }-${ index }` }
				className={ cn(
					Styles.entry,
					this.props.selectedLocation === index && Styles.active
				) }
				onKeyDown={ triggerEvent }
				onClick={ triggerEvent }>

				<Icon
					className={ Styles.icon }
					icon={ "location" }
				/>

				<div className={ Styles.info }>
					<Heading
						className={ Styles.title }
						textSize={ 5 }
						textColor={ "dark" }>
						{ company }
					</Heading>

					<p className={ Styles.address }>
						{ contact.address }
					</p>
				</div>
			</li>
		);
	}

	renderList () {
		return (
			<ul>
				{ this.props.participants.map((entry, index) =>
					this.renderEntry(entry, index)
				) }
			</ul>
		);
	}
	
	render () {
		return (
			<div className={ Styles.sidebar }>
				{ this.renderList() }
			</div>
		);
	}
}