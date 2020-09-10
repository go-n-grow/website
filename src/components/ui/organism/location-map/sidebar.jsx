import React, { Component } from "react";
import PropTypes from "prop-types";

import Heading from "react-bulma-components/lib/components/heading/heading";


export default class Sidebar extends Component {
	static propTypes = {
		participants: PropTypes.array.isRequired
	};
	
	static defaultProps = {};
	
	render () {
		return (
			<div>
				<List items={ this.props.participants } />
			</div>
		);
	}
}

const List = ({ items }) =>
	<ul>
		{ items.map(({
			company,
			qrIdCode,
			images,
			flowerpotsCount,
			flowerpotState,
			contact
		}) =>
			<li key={ company }>
				<Heading textColor={ "black" }>{ company }</Heading>
			</li>
		) }
	</ul>